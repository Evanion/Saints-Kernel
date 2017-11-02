"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = require("redux-saga/effects");

var _actions = require("./actions");

var actions = _interopRequireWildcard(_actions);

var _constants = require("./constants");

var types = _interopRequireWildcard(_constants);

var _reducer = require("./reducer");

var reducer = _interopRequireWildcard(_reducer);

var _sagas = require("./sagas");

var Sagas = _interopRequireWildcard(_sagas);

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

var _marked = /*#__PURE__*/ _regenerator2.default.mark(sagas);

function sagas(api) {
  return _regenerator2.default.wrap(
    function sagas$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            _context.next = 2;
            return (0, _effects.takeLatest)(
              types.USER_CREATE_REQUESTED,
              Sagas.createUser,
              api
            );

          case 2:
            _context.next = 4;
            return (0, _effects.takeLatest)(
              types.USER_AUTH_REQUESTED,
              Sagas.login,
              api
            );

          case 4:
            _context.next = 6;
            return (0, _effects.takeLatest)(
              types.USER_LOGOUT_REQUESTED,
              Sagas.logout,
              api
            );

          case 6:
            _context.next = 8;
            return (0, _effects.takeLatest)(
              types.USER_CHECK_AUTH_REQUESTED,
              Sagas.isLoggedIn,
              api
            );

          case 8:
            _context.next = 10;
            return (0, _effects.takeLatest)(
              types.USER_SET_TOKEN_REQUESTED,
              Sagas.setToken,
              api
            );

          case 10:
          case "end":
            return _context.stop();
        }
      }
    },
    _marked,
    this
  );
}

module.exports = {
  actions: actions,
  types: types,
  reducer: reducer,
  sagas: sagas
};
