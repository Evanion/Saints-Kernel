"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doPasswordChange = exports.doLogout = exports.doLogin = exports.createUser = undefined;

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

var createUser = (exports.createUser = function createUser(payload) {
  return {
    type: types.USER_CREATE_REQUESTED,
    payload: payload
  };
});

var doLogin = (exports.doLogin = function doLogin(payload) {
  return {
    type: types.USER_AUTH_SUCCEEDED,
    payload: payload
  };
});

var doLogout = (exports.doLogout = function doLogout() {
  return {
    type: types.USER_LOGOUT_REQUESTED
  };
});

var doPasswordChange = (exports.doPasswordChange = function doPasswordChange() {
  return {
    type: types.USER_CHANGE_PASSWD_REQUESTED
  };
});
