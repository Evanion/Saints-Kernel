"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _redux = require("redux");

var _reactRouterRedux = require("react-router-redux");

var _reduxForm = require("redux-form");

var _modules = require("./modules");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = (0, _redux.combineReducers)(
  (0, _extends3.default)(
    {
      form: _reduxForm.reducer,
      router: _reactRouterRedux.routerReducer
    },
    _modules.reducers
  )
);
