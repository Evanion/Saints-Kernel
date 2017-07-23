"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require("redux");

var _reactRouterRedux = require("react-router-redux");

var _reduxForm = require("redux-form");

var _modules = require("./modules");

exports.default = (0, _redux.combineReducers)(_extends({
  form: _reduxForm.reducer,
  router: _reactRouterRedux.routerReducer
}, _modules.reducers));