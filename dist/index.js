"use strict";

require("babel-polyfill");

var _createBrowserHistory = require("history/createBrowserHistory");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouterRedux = require("react-router-redux");

var _redux = require("redux");

var _reduxSaga = require("redux-saga");

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _api = require("./api");

var _api2 = _interopRequireDefault(_api);

var _reducers = require("./reducers");

var _reducers2 = _interopRequireDefault(_reducers);

var _sagas = require("./sagas");

var _sagas2 = _interopRequireDefault(_sagas);

var _modules = require("./modules");

var _user = require("./modules/user");

var userModule = _interopRequireWildcard(_user);

var _forum = require("./modules/forum");

var forumModule = _interopRequireWildcard(_forum);

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

// Init

// modules
var history = (0, _createBrowserHistory2.default)(); // @flow

var sagaMiddleware = (0, _reduxSaga2.default)();
var composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

// Middleware
var middleware = [
  (0, _reactRouterRedux.routerMiddleware)(history),
  sagaMiddleware
];
// Store
var store = (0, _redux.createStore)(
  _reducers2.default,
  composeEnhancers(_redux.applyMiddleware.apply(undefined, middleware))
);

sagaMiddleware.run(_sagas2.default, _api2.default);

module.exports = {
  store: store,
  history: history,
  actions: _modules.actions,
  types: _modules.types
};
