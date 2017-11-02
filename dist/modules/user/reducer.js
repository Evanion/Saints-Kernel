"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _constants = require("./constants");

var type = _interopRequireWildcard(_constants);

var _initialState = require("./initialState");

var _reactRouterRedux = require("react-router-redux");

var reduxRouter = _interopRequireWildcard(_reactRouterRedux);

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

//import {REHYDRATE} from 'redux-persist/constants';
var adminRoles = ["admin", "super-admin"];
function checkAdmin(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

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
      return (0, _extends3.default)({}, state, { registering: true });

    case type.USER_CREATE_SUCCEEDED:
      return (0, _extends3.default)({}, state, {
        created: action.payload,
        registering: false,
        registered: true,
        error: null
      });

    case type.USER_CREATE_FAILED:
      return (0, _extends3.default)({}, state, {
        registering: false,
        error: action.payload
      });

    /**
       * @description User authentication
       */
    case type.USER_AUTH_REQUESTED:
    case type.USER_CHECK_AUTH_REQUESTED:
      return (0, _extends3.default)({}, state, { authenticating: true });

    case type.USER_AUTH_SUCCEEDED:
    case type.USER_CHECK_AUTH_SUCCEEDED:
      return (0, _extends3.default)({}, state, {
        details: action.payload,
        authenticating: false,
        authenticated: Boolean(action.payload)
      });

    case type.USER_AUTH_FAILED:
    case type.USER_CHECK_AUTH_FAILED:
      return (0, _extends3.default)({}, state, {
        authenticating: false,
        authenticated: false,
        error: action.payload
      });

    /**
       * @description User logout
       */
    case type.USER_LOGOUT_SUCCEEDED:
      return (0, _extends3.default)({}, state, {
        details: {},
        authenticating: false,
        authenticated: false
      });

    case type.USER_IS_ADMIN_REQUESTED:
      return checkAdmin(adminRoles, state.details.roles);

    /**
       * @description User current state
       */
    default:
      return state;
  }
};

exports.default = user;
