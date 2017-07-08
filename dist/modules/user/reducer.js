"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

var _constants = require("./constants");

var type = _interopRequireWildcard(_constants);

var _initialState = require("./initialState");

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

//import {REHYDRATE} from 'redux-persist/constants';

var user = function user() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : _initialState.UserState;
  var action =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    /**
     * @description User registration
     */
    case type.USER_CREATE_REQUESTED:
      return _extends({}, state, { registering: true });

    case type.USER_CREATE_SUCCEEDED:
      return _extends({}, state, {
        created: action.payload,
        registering: false,
        registered: true,
        error: null
      });

    case type.USER_CREATE_FAILED:
      return _extends({}, state, {
        registering: false,
        fetched: true,
        error: action.payload
      });

    /**
     * @description User authentication
     */
    case type.USER_AUTH_REQUESTED:
      return _extends({}, state, { authenticating: true });

    case type.USER_AUTH_SUCCEEDED:
      return _extends({}, state, {
        details: action.payload,
        authenticating: false,
        authenticated: true
      });

    case type.USER_AUTH_FAILED:
      return _extends({}, state, {
        authenticating: false,
        authenticated: false,
        error: action.payload
      });

    /**
     * @description User logout
     */
    case type.USER_LOGOUT_SUCCEEDED:
      return _extends({}, state, {
        details: {},
        authenticating: false,
        authenticated: false
      });

    /*case REHYDRATE:
     let incoming = action.payload.user;
     if (incoming) return {...state, ...incoming};
     return state;*/
    /**
     * @description User current state
     */
    default:
      return state;
  }
};

exports.default = user;
