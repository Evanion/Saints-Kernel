"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var member = function member() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : _initialState.MemberState;
  var action =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case type.MEMBER_GET_REQUESTED:
      return (0, _extends3.default)({}, state, {
        error: null,
        loading: true,
        fetched: false
      });

    case type.MEMBER_GET_SUCCEEDED:
      return (0, _extends3.default)({}, state, {
        error: null,
        loading: false,
        fetched: true,
        details: action.payload
      });

    case type.MEMBER_GET_FAILED:
      return (0, _extends3.default)({}, state, {
        loading: false,
        fetched: true,
        error: action.payload
      });
    /**
       * @description Member current state
       */
    default:
      return state;
  }
};

exports.default = member;
