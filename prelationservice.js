var thrift_path = require.resolve("thrift")
var ttransport = require(path.resolve(path.dirname(thrift_path),"transport"));
TBinaryProtocol = require(path.resolve(path.dirname(thrift_path),"protocol")).TBinaryProtocol;

var thrift = require("thrift")
var util = require("util");
var memcache = require('memcache');
var buffer = require("buffer")

var IKaoDBService = require("./thrift/IKaoDBIFace")
var RelationService = require("./thrift/PRelationIFace")
var ShareStruct_ttypes = require("./thrift/ShareStruct_Types")
var ErrorNo_ttypes = require("./thrift/ErrorNo_Types")
var Exception_ttypes = require("./thrift/Exception_Types")
var redis = require("redis")

var poolModule = require('generic-pool');
var pool = poolModule.Pool({
    name     : 'redis',
    create   : function(callback) {
        var client = redis.createClient(process.conf.redis.port,process.conf.redis.ip);
        client.auth(process.conf.redis.passwd)
        callback(null, client);
    },
    destroy  : function(client) { client.quit(); }, //当超时则释放连接
    max      : 10,   //最大连接数
    idleTimeoutMillis : 10,  //超时时间
    log : true
});

var kestrelPool = poolModule.Pool({
   name: "memcache",
   create : function(callback){
       var client = new memcache.Client(process.conf.kestrel.port, process.conf.kestrel.ip);
       callback(null,client);
   }  ,
   destroy  : function(client) { client.close(); }, //当超时则释放连接
   max      : 10,   //最大连接数
   idleTimeoutMillis : 10,  //超时时间
   log : true
});

var ikaodbPool = poolModule.Pool({
    name : "ikaodb",
    create   : function(callback) {
        var dbconnection = thrift.createConnection(process.conf.db.ip, process.conf.db.port)
        var client = thrift.createClient(IKaoDBService, dbconnection);
        callback(null, client);
    },
    destroy  : function(client) { client.quit(); }, //当超时则释放连接
    max      : 10,   //最大连接数
    idleTimeoutMillis : 10,  //超时时间
    log : true
})


var FALSE = -1
var TRUE = 1
var REDISERROR = -2

var FOLLOWED = 2
var FOLLOWSTR = "_Follow_"
var FANSTR = "_Fans_"

var server = exports.relation = thrift.createServer(RelationService,{

    addFollow: function(uid,followId,type,response){
        process.log.info(util.format("addFollow:uid=%s,followId=%s,type=%d",uid,followId,type))
        isFollow(uid,followId,type,function(reply){
            if(ret == TRUE){
                response(FOLLOWED)
                return;
            }else if(ret == REDISERROR){
                response(REDISERROR)
                return
            }
            ikaodbPool.borrow(function(err,idb){
                idb.addFollow(uid,followId,type,function(err,reply){
                    ikaodbPool.release(idb);
                    if(reply==TRUE){
                        pool.borrow(function(err,client){
                            var uidKey = uid + FOLLOWSTR+type;
                            client.zadd(uidKey,new Date().getTime(),followId,function(err,reply){
                                pool.release(client);
                                if(reply!=1){
                                    response(FALSE)
                                    return
                                }
                                response(TRUE)
                                kestrelPool.borrow(function(err,client){
                                    client.set("AddFollow",'{"uid":uid,"followId":followId,"type":type}',function(){kestrelPool.release(client)})
                                })
                            })
                        })
                    }else{
                        response(FALSE);
                    }
                })
            })
        })
    },

    isFollow: function(uid,followId,type,response){
        process.log.info(util.format("isFollow:uid=%s,followId=%s,type=%d",uid,followId,type))
        pool.borrow(function(err,client){
            client.zrank(uid+FOLLOWSTR+type,followId,function(err,reply){
                pool.release(client)
                if(err!=null){
                    response(REDISERROR)
                }else if(reply==null){
                    response(FALSE)
                }else{
                    response(TRUE);
                }
            })
        })
    },

    cancelFollow: function(uid,followId,type,response){
        process.log.info(util.format("cancelFollow:uid=%s,followId=%s,type=%d",uid,followId,type))
        ikaodbPool.borrow(function(err,idb){
            idb.cancelFollow(uid,followId,type,function(err,reply){
                ikaodbPool.release(idb)
                if(reply==TRUE){
                    pool.borrow(function(err,client){
                        client.zrem(uid+FOLLOWSTR+type,followId,function(err,reply){
                            pool.release(client);
                            if(reply==1){
                                response(TRUE)
                                kestrelPool.borrow(function(err,client){
                                    client.set("CancelFollow",'{"uid":uid,"followId":followId,"type":type}',function(){kestrelPool.release(client)})
                                })
                            }else{
                                response(FALSE)
                            }
                        })
                    })
                }else{
                   response(FALSE)
                }
            })
        })
    },

    cancelFans:function(uid,fansId,type,response){
        process.log.info(util.format("cancelFans:uid=%s,fansId=%s,type=%d",uid,followId,type))
        ikaodbPool.borrow(function(err,idb){
             idb.cancelFans(uid,fansId,type,function(err,reply){
                 ikaodbPool.release(idb)
                 if(reply==TRUE){
                     pool.borrow(function(err,client){
                         client.zrem(uid+FANSTR+type,fansId,function(err,reply){
                             pool.release(client)
                             if(reply==1){
                                 response(TRUE);
                             }else{
                                 response(FALSE)
                             }
                         })
                     })
                 }else{
                    response(FALSE)
                 }
             })
        })
    },

    addFans: function(uid,fansId,type,response){
        process.log.info(util.format("cancelFans:uid=%s,fansId=%s,type=%d",uid,followId,type))
        ikaodbPool.borrow(function(err,idb){
            idb.addFans(uid,fansId,type,function(err,reply){
                ikaodbPool.release(idb)
                if(reply==TRUE){
                    pool.borrow(function(err,client){
                        client.zadd(uid+FANSTR+type,new Date().getTime(),fansId,function(err,reply){
                            pool.release(client)
                            if(reply==1){
                                response(TRUE)
                            }else{
                                response(FALSE)
                            }
                        })
                    })
                }else{
                    response(FALSE)
                }
            })
        })
    },

    getFollow: function(uid,start,len,type,response){
        process.log.info(util.format("getFollow:uid=%s,start=%d,len=%d,type=%d",uid,start,len,type))
        pool.borrow(function(err,client){
             client.zrevrangewithscores(uid+FOLLOWSTR+type,start-1,start+len-1,function(err,reply){
                 pool.release(client)
                 if(err!=null){
                       ikaodbPool.borrow(function(err,idb){
                            idb.getFollow(uid,start,len,type,function(err,reply){
                                ikaodbPool.release(idb);
                                response(reply)
                            })
                       })
                 }else{
                    response(reply)
                 }
             })
        })
    },

    getFans: function(uid,start,len,type,response){
        process.log.info(util.format("getFans:uid=%s,start=%d,len=%d,type=%d",uid,start,len,type))
        pool.borrow(function(err,client){
            client.zrangewithscores(uid+FANSTR+type,start-1,start+len-1,function(err,reply){
                pool.release(client)
                if(err!=null){
                    ikaodbPool.borrow(function(err,idb){
                        idb.getFans(uid,start,len,type,function(err,reply){
                            ikaodbPool.release(idb);
                            response(reply)
                        })
                    })
                }else{
                    response(reply)
                }
            })
        })
    }
 })

