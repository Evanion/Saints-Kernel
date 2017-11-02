"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMember = undefined;

var _constants = require("./constants");

var types = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

var getMember = (exports.getMember = function getMember(payload) {
  return {
    type: types.MEMBER_GET_REQUESTED,
    payload: payload
  };
});
