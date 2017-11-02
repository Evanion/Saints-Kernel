"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.types = undefined;
exports.default = Store;

var _modules = require("./modules");

Object.defineProperty(exports, "types", {
  enumerable: true,
  get: function get() {
    return _modules.types;
  }
});
Object.defineProperty(exports, "actions", {
  enumerable: true,
  get: function get() {
    return _modules.actions;
  }
});

require("babel-polyfill");

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var storeType = {
  action: String,
  length: Number,
  location: String
};
function Store(history) {
  // Init
  var sagaMiddleware = (0, _reduxSaga2.default)();
  var composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
  var middleware = [
    (0, _reactRouterRedux.routerMiddleware)(history),
    sagaMiddleware
  ];

  // Store
  var createdStore = (0, _redux.createStore)(
    _reducers2.default,
    composeEnhancers(_redux.applyMiddleware.apply(undefined, middleware))
  );
  sagaMiddleware.run(_sagas2.default, _api2.default);

  return createdStore;
}
