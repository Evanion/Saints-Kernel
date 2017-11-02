"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setToken = exports.isAdmin = exports.isLoggedIn = exports.doPasswordChange = exports.doLogout = exports.doLogin = exports.createUser = undefined;

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
    type: types.USER_AUTH_REQUESTED,
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

var isLoggedIn = (exports.isLoggedIn = function isLoggedIn() {
  return {
    type: types.USER_CHECK_AUTH_REQUESTED
  };
});

var isAdmin = (exports.isAdmin = function isAdmin() {
  return {
    type: types.USER_IS_ADMIN_REQUESTED
  };
});

var setToken = (exports.setToken = function setToken(payload) {
  return {
    type: types.USER_SET_TOKEN_REQUESTED,
    payload: payload
  };
});
