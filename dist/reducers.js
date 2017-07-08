"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require("redux");

var _reactRouterRedux = require("react-router-redux");

var _reduxForm = require("redux-form");

var _user = require("./modules/user");

var user = _user.reducer.default;
exports.default = (0, _redux.combineReducers)({
  form: _reduxForm.reducer,
  router: _reactRouterRedux.routerReducer,
  user: user
});
