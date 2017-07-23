"use strict";

var _actions = require("./actions");

var actions = _interopRequireWildcard(_actions);

var _constants = require("./constants");

var types = _interopRequireWildcard(_constants);

var _reducer = require("./reducer");

var reducer = _interopRequireWildcard(_reducer);

var _effects = require("redux-saga/effects");

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

var _marked = [sagas].map(regeneratorRuntime.mark);

function sagas(api) {
  return regeneratorRuntime.wrap(
    function sagas$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            _context.next = 2;
            return (0, _effects.takeLatest)(
              types.FORUM_CREATE_BOARD_REQUESTED,
              Sagas.createBoard,
              api
            );

          case 2:
            _context.next = 4;
            return (0, _effects.takeLatest)(
              types.FORUM_GET_BOARD_REQUESTED,
              Sagas.loadBoard,
              api
            );

          case 4:
            _context.next = 6;
            return (0, _effects.takeLatest)(
              types.FORUM_GET_BOARDS_REQUESTED,
              Sagas.loadBoards,
              api
            );

          case 6:
            _context.next = 8;
            return (0, _effects.takeLatest)(
              types.FORUM_CREATE_THREAD_REQUESTED,
              Sagas.createThread,
              api
            );

          case 8:
          case "end":
            return _context.stop();
        }
      }
    },
    _marked[0],
    this
  );
}

module.exports = {
  actions: actions,
  types: types,
  reducer: reducer,
  sagas: sagas
};
