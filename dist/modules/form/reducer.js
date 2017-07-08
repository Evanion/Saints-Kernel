"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var form = function form() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : _initialState.FormState;
  var action =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    /**
     * @description Form current state
     */
    default:
      return state;
  }
};

exports.default = form;
