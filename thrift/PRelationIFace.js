//
// Autogenerated by Thrift Compiler (0.8.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;
var ShareStruct_ttypes = require('./ShareStruct_types')
var Exception_ttypes = require('./Exception_types')


var ttypes = require('./prelation_types');
//HELPER FUNCTIONS AND STRUCTURES

var PRelationIFace_addFollow_args = function(args) {
  this.uid = null;
  this.followId = null;
  this.type = null;
  if (args) {
    if (args.uid !== undefined) {
      this.uid = args.uid;
    }
    if (args.followId !== undefined) {
      this.followId = args.followId;
    }
    if (args.type !== undefined) {
      this.type = args.type;
    }
  }
};
PRelationIFace_addFollow_args.prototype = {};
PRelationIFace_addFollow_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.followId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PRelationIFace_addFollow_args.prototype.write = function(output) {
  output.writeStructBegin('PRelationIFace_addFollow_args');
  if (this.uid) {
    output.writeFieldBegin('uid', Thrift.Type.STRING, 1);
    output.writeString(this.uid);
    output.writeFieldEnd();
  }
  if (this.followId) {
    output.writeFieldBegin('followId', Thrift.Type.STRING, 2);
    output.writeString(this.followId);
    output.writeFieldEnd();
  }
  if (this.type) {
    output.writeFieldBegin('type', Thrift.Type.I32, 3);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PRelationIFace_addFollow_result = function(args) {
  this.success = null;
  this.error = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.error !== undefined) {
      this.error = args.error;
    }
  }
};
PRelationIFace_addFollow_result.prototype = {};
PRelationIFace_addFollow_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.error = new Exception_ttypes.EngineException();
        this.error.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PRelationIFace_addFollow_result.prototype.write = function(output) {
  output.writeStructBegin('PRelationIFace_addFollow_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  if (this.error) {
    output.writeFieldBegin('error', Thrift.Type.STRUCT, 1);
    this.error.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PRelationIFace_isFollow_args = function(args) {
  this.uid = null;
  this.followId = null;
  this.type = null;
  if (args) {
    if (args.uid !== undefined) {
      this.uid = args.uid;
    }
    if (args.followId !== undefined) {
      this.followId = args.followId;
    }
    if (args.type !== undefined) {
      this.type = args.type;
    }
  }
};
PRelationIFace_isFollow_args.prototype = {};
PRelationIFace_isFollow_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.followId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PRelationIFace_isFollow_args.prototype.write = function(output) {
  output.writeStructBegin('PRelationIFace_isFollow_args');
  if (this.uid) {
    output.writeFieldBegin('uid', Thrift.Type.STRING, 1);
    output.writeString(this.uid);
    output.writeFieldEnd();
  }
  if (this.followId) {
    output.writeFieldBegin('followId', Thrift.Type.STRING, 2);
    output.writeString(this.followId);
    output.writeFieldEnd();
  }
  if (this.type) {
    output.writeFieldBegin('type', Thrift.Type.I32, 3);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PRelationIFace_isFollow_result = function(args) {
  this.success = null;
  this.error = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.error !== undefined) {
      this.error = args.error;
    }
  }
};
PRelationIFace_isFollow_result.prototype = {};
PRelationIFace_isFollow_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.error = new Exception_ttypes.EngineException();
        this.error.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PRelationIFace_isFollow_result.prototype.write = function(output) {
  output.writeStructBegin('PRelationIFace_isFollow_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  if (this.error) {
    output.writeFieldBegin('error', Thrift.Type.STRUCT, 1);
    this.error.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PRelationIFace_cancelFollow_args = function(args) {
  this.uid = null;
  this.followId = null;
  this.type = null;
  if (args) {
    if (args.uid !== undefined) {
      this.uid = args.uid;
    }
    if (args.followId !== undefined) {
      this.followId = args.followId;
    }
    if (args.type !== undefined) {
      this.type = args.type;
    }
  }
};
PRelationIFace_cancelFollow_args.prototype = {};
PRelationIFace_cancelFollow_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.followId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PRelationIFace_cancelFollow_args.prototype.write = function(output) {
  output.writeStructBegin('PRelationIFace_cancelFollow_args');
  if (this.uid) {
    output.writeFieldBegin('uid', Thrift.Type.STRING, 1);
    output.writeString(this.uid);
    output.writeFieldEnd();
  }
  if (this.followId) {
    output.writeFieldBegin('followId', Thrift.Type.STRING, 2);
    output.writeString(this.followId);
    output.writeFieldEnd();
  }
  if (this.type) {
    output.writeFieldBegin('type', Thrift.Type.I32, 3);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PRelationIFace_cancelFollow_result = function(args) {
  this.success = null;
  this.error = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.error !== undefined) {
      this.error = args.error;
    }
  }
};
PRelationIFace_cancelFollow_result.prototype = {};
PRelationIFace_cancelFollow_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.error = new Exception_ttypes.EngineException();
        this.error.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PRelationIFace_cancelFollow_result.prototype.write = function(output) {
  output.writeStructBegin('PRelationIFace_cancelFollow_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  if (this.error) {
    output.writeFieldBegin('error', Thrift.Type.STRUCT, 1);
    this.error.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PRelationIFace_addFans_args = function(args) {
  this.uid = null;
  this.fansId = null;
  if (args) {
    if (args.uid !== undefined) {
      this.uid = args.uid;
    }
    if (args.fansId !== undefined) {
      this.fansId = args.fansId;
    }
  }
};
PRelationIFace_addFans_args.prototype = {};
PRelationIFace_addFans_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.fansId = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PRelationIFace_addFans_args.prototype.write = function(output) {
  output.writeStructBegin('PRelationIFace_addFans_args');
  if (this.uid) {
    output.writeFieldBegin('uid', Thrift.Type.STRING, 1);
    output.writeString(this.uid);
    output.writeFieldEnd();
  }
  if (this.fansId) {
    output.writeFieldBegin('fansId', Thrift.Type.STRING, 2);
    output.writeString(this.fansId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PRelationIFace_addFans_result = function(args) {
  this.success = null;
  this.error = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.error !== undefined) {
      this.error = args.error;
    }
  }
};
PRelationIFace_addFans_result.prototype = {};
PRelationIFace_addFans_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.error = new Exception_ttypes.EngineException();
        this.error.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PRelationIFace_addFans_result.prototype.write = function(output) {
  output.writeStructBegin('PRelationIFace_addFans_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  if (this.error) {
    output.writeFieldBegin('error', Thrift.Type.STRUCT, 1);
    this.error.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PRelationIFace_getFollow_args = function(args) {
  this.uid = null;
  this.start = null;
  this.len = null;
  if (args) {
    if (args.uid !== undefined) {
      this.uid = args.uid;
    }
    if (args.start !== undefined) {
      this.start = args.start;
    }
    if (args.len !== undefined) {
      this.len = args.len;
    }
  }
};
PRelationIFace_getFollow_args.prototype = {};
PRelationIFace_getFollow_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.start = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.len = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PRelationIFace_getFollow_args.prototype.write = function(output) {
  output.writeStructBegin('PRelationIFace_getFollow_args');
  if (this.uid) {
    output.writeFieldBegin('uid', Thrift.Type.STRING, 1);
    output.writeString(this.uid);
    output.writeFieldEnd();
  }
  if (this.start) {
    output.writeFieldBegin('start', Thrift.Type.I32, 2);
    output.writeI32(this.start);
    output.writeFieldEnd();
  }
  if (this.len) {
    output.writeFieldBegin('len', Thrift.Type.I32, 3);
    output.writeI32(this.len);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PRelationIFace_getFollow_result = function(args) {
  this.success = null;
  this.error = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.error !== undefined) {
      this.error = args.error;
    }
  }
};
PRelationIFace_getFollow_result.prototype = {};
PRelationIFace_getFollow_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.success = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString();
          this.success.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.error = new Exception_ttypes.EngineException();
        this.error.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PRelationIFace_getFollow_result.prototype.write = function(output) {
  output.writeStructBegin('PRelationIFace_getFollow_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter7 in this.success)
    {
      if (this.success.hasOwnProperty(iter7))
      {
        iter7 = this.success[iter7];
        output.writeString(iter7);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.error) {
    output.writeFieldBegin('error', Thrift.Type.STRUCT, 1);
    this.error.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PRelationIFace_getFans_args = function(args) {
  this.uid = null;
  this.start = null;
  this.len = null;
  if (args) {
    if (args.uid !== undefined) {
      this.uid = args.uid;
    }
    if (args.start !== undefined) {
      this.start = args.start;
    }
    if (args.len !== undefined) {
      this.len = args.len;
    }
  }
};
PRelationIFace_getFans_args.prototype = {};
PRelationIFace_getFans_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.start = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.len = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PRelationIFace_getFans_args.prototype.write = function(output) {
  output.writeStructBegin('PRelationIFace_getFans_args');
  if (this.uid) {
    output.writeFieldBegin('uid', Thrift.Type.STRING, 1);
    output.writeString(this.uid);
    output.writeFieldEnd();
  }
  if (this.start) {
    output.writeFieldBegin('start', Thrift.Type.I32, 2);
    output.writeI32(this.start);
    output.writeFieldEnd();
  }
  if (this.len) {
    output.writeFieldBegin('len', Thrift.Type.I32, 3);
    output.writeI32(this.len);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PRelationIFace_getFans_result = function(args) {
  this.success = null;
  this.error = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.error !== undefined) {
      this.error = args.error;
    }
  }
};
PRelationIFace_getFans_result.prototype = {};
PRelationIFace_getFans_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.success = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = input.readString();
          this.success.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.error = new Exception_ttypes.EngineException();
        this.error.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PRelationIFace_getFans_result.prototype.write = function(output) {
  output.writeStructBegin('PRelationIFace_getFans_result');
  if (this.success) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter15 in this.success)
    {
      if (this.success.hasOwnProperty(iter15))
      {
        iter15 = this.success[iter15];
        output.writeString(iter15);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.error) {
    output.writeFieldBegin('error', Thrift.Type.STRUCT, 1);
    this.error.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PRelationIFaceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this.seqid = 0;
    this._reqs = {};
};
PRelationIFaceClient.prototype = {};
PRelationIFaceClient.prototype.addFollow = function(uid, followId, type, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_addFollow(uid, followId, type);
};

PRelationIFaceClient.prototype.send_addFollow = function(uid, followId, type) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('addFollow', Thrift.MessageType.CALL, this.seqid);
  var args = new PRelationIFace_addFollow_args();
  args.uid = uid;
  args.followId = followId;
  args.type = type;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PRelationIFaceClient.prototype.recv_addFollow = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PRelationIFace_addFollow_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.error) {
    return callback(result.error);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('addFollow failed: unknown result');
};
PRelationIFaceClient.prototype.isFollow = function(uid, followId, type, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_isFollow(uid, followId, type);
};

PRelationIFaceClient.prototype.send_isFollow = function(uid, followId, type) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('isFollow', Thrift.MessageType.CALL, this.seqid);
  var args = new PRelationIFace_isFollow_args();
  args.uid = uid;
  args.followId = followId;
  args.type = type;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PRelationIFaceClient.prototype.recv_isFollow = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PRelationIFace_isFollow_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.error) {
    return callback(result.error);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('isFollow failed: unknown result');
};
PRelationIFaceClient.prototype.cancelFollow = function(uid, followId, type, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_cancelFollow(uid, followId, type);
};

PRelationIFaceClient.prototype.send_cancelFollow = function(uid, followId, type) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('cancelFollow', Thrift.MessageType.CALL, this.seqid);
  var args = new PRelationIFace_cancelFollow_args();
  args.uid = uid;
  args.followId = followId;
  args.type = type;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PRelationIFaceClient.prototype.recv_cancelFollow = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PRelationIFace_cancelFollow_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.error) {
    return callback(result.error);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('cancelFollow failed: unknown result');
};
PRelationIFaceClient.prototype.addFans = function(uid, fansId, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_addFans(uid, fansId);
};

PRelationIFaceClient.prototype.send_addFans = function(uid, fansId) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('addFans', Thrift.MessageType.CALL, this.seqid);
  var args = new PRelationIFace_addFans_args();
  args.uid = uid;
  args.fansId = fansId;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PRelationIFaceClient.prototype.recv_addFans = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PRelationIFace_addFans_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.error) {
    return callback(result.error);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('addFans failed: unknown result');
};
PRelationIFaceClient.prototype.getFollow = function(uid, start, len, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_getFollow(uid, start, len);
};

PRelationIFaceClient.prototype.send_getFollow = function(uid, start, len) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getFollow', Thrift.MessageType.CALL, this.seqid);
  var args = new PRelationIFace_getFollow_args();
  args.uid = uid;
  args.start = start;
  args.len = len;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PRelationIFaceClient.prototype.recv_getFollow = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PRelationIFace_getFollow_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.error) {
    return callback(result.error);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getFollow failed: unknown result');
};
PRelationIFaceClient.prototype.getFans = function(uid, start, len, callback) {
  this.seqid += 1;
  this._reqs[this.seqid] = callback;
  this.send_getFans(uid, start, len);
};

PRelationIFaceClient.prototype.send_getFans = function(uid, start, len) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getFans', Thrift.MessageType.CALL, this.seqid);
  var args = new PRelationIFace_getFans_args();
  args.uid = uid;
  args.start = start;
  args.len = len;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PRelationIFaceClient.prototype.recv_getFans = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PRelationIFace_getFans_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.error) {
    return callback(result.error);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getFans failed: unknown result');
};
var PRelationIFaceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
PRelationIFaceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.Exception, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

PRelationIFaceProcessor.prototype.process_addFollow = function(seqid, input, output) {
  var args = new PRelationIFace_addFollow_args();
  args.read(input);
  input.readMessageEnd();
  var result = new PRelationIFace_addFollow_result();
  this._handler.addFollow(args.uid, args.followId, args.type, function (success) {
    result.success = success;
    output.writeMessageBegin("addFollow", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

PRelationIFaceProcessor.prototype.process_isFollow = function(seqid, input, output) {
  var args = new PRelationIFace_isFollow_args();
  args.read(input);
  input.readMessageEnd();
  var result = new PRelationIFace_isFollow_result();
  this._handler.isFollow(args.uid, args.followId, args.type, function (success) {
    result.success = success;
    output.writeMessageBegin("isFollow", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

PRelationIFaceProcessor.prototype.process_cancelFollow = function(seqid, input, output) {
  var args = new PRelationIFace_cancelFollow_args();
  args.read(input);
  input.readMessageEnd();
  var result = new PRelationIFace_cancelFollow_result();
  this._handler.cancelFollow(args.uid, args.followId, args.type, function (success) {
    result.success = success;
    output.writeMessageBegin("cancelFollow", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

PRelationIFaceProcessor.prototype.process_addFans = function(seqid, input, output) {
  var args = new PRelationIFace_addFans_args();
  args.read(input);
  input.readMessageEnd();
  var result = new PRelationIFace_addFans_result();
  this._handler.addFans(args.uid, args.fansId, function (success) {
    result.success = success;
    output.writeMessageBegin("addFans", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

PRelationIFaceProcessor.prototype.process_getFollow = function(seqid, input, output) {
  var args = new PRelationIFace_getFollow_args();
  args.read(input);
  input.readMessageEnd();
  var result = new PRelationIFace_getFollow_result();
  this._handler.getFollow(args.uid, args.start, args.len, function (success) {
    result.success = success;
    output.writeMessageBegin("getFollow", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

PRelationIFaceProcessor.prototype.process_getFans = function(seqid, input, output) {
  var args = new PRelationIFace_getFans_args();
  args.read(input);
  input.readMessageEnd();
  var result = new PRelationIFace_getFans_result();
  this._handler.getFans(args.uid, args.start, args.len, function (success) {
    result.success = success;
    output.writeMessageBegin("getFans", Thrift.MessageType.REPLY, seqid);
    result.write(output);
    output.writeMessageEnd();
    output.flush();
  })
}

