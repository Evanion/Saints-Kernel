"use strict";

var _redux = require("redux");

var _createBrowserHistory = require("history/createBrowserHistory");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouterRedux = require("react-router-redux");

var _user = require("./modules/user");

var userModule = _interopRequireWildcard(_user);

var _reducers = require("./reducers");

var _reducers2 = _interopRequireDefault(_reducers);

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

var history = (0, _createBrowserHistory2.default)(); // @flow

var composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var middleware = (0, _reactRouterRedux.routerMiddleware)(history);

var store = (0, _redux.createStore)(
  _reducers2.default,
  undefined,
  composeEnhancers((0, _redux.applyMiddleware)(middleware))
);

module.exports = {
  store: store,
  history: history,
  userModule: userModule
};
