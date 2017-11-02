"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.createBoard = createBoard;
exports.loadBoard = loadBoard;
exports.loadBoards = loadBoards;
exports.editBoard = editBoard;
exports.createThread = createThread;

var _effects = require("redux-saga/effects");

var _constants = require("./constants");

var types = _interopRequireWildcard(_constants);

var _service = require("./service");

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

var _marked = /*#__PURE__*/ _regenerator2.default.mark(createBoard),
  _marked2 = /*#__PURE__*/ _regenerator2.default.mark(loadBoard),
  _marked3 = /*#__PURE__*/ _regenerator2.default.mark(loadBoards),
  _marked4 = /*#__PURE__*/ _regenerator2.default.mark(editBoard),
  _marked5 = /*#__PURE__*/ _regenerator2.default.mark(createThread);

function createBoard(api, action) {
  var board;
  return _regenerator2.default.wrap(
    function createBoard$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _effects.call)(_service.postBoard, api, action);

          case 3:
            board = _context.sent;
            _context.next = 6;
            return (0, _effects.put)({
              type: types.FORUM_CREATE_BOARD_SUCCEEDED,
              payload: board
            });

          case 6:
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            _context.next = 12;
            return (0, _effects.put)({
              type: types.FORUM_CREATE_BOARD_FAILED,
              payload: _context.t0.message
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    },
    _marked,
    this,
    [[0, 8]]
  );
}

function loadBoard(api, action) {
  var board;
  return _regenerator2.default.wrap(
    function loadBoard$(_context2) {
      while (1) {
        switch ((_context2.prev = _context2.next)) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _effects.call)(_service.getBoard, api, action);

          case 3:
            board = _context2.sent;
            _context2.next = 6;
            return (0, _effects.put)({
              type: types.FORUM_GET_BOARD_SUCCEEDED,
              payload: board
            });

          case 6:
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            _context2.next = 12;
            return (0, _effects.put)({
              type: types.FORUM_GET_BOARD_FAILED,
              payload: _context2.t0.message
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    },
    _marked2,
    this,
    [[0, 8]]
  );
}

function loadBoards(api, action) {
  var boards;
  return _regenerator2.default.wrap(
    function loadBoards$(_context3) {
      while (1) {
        switch ((_context3.prev = _context3.next)) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _effects.call)(_service.getBoards, api, action);

          case 3:
            boards = _context3.sent;
            _context3.next = 6;
            return (0, _effects.put)({
              type: types.FORUM_GET_BOARDS_SUCCEEDED,
              payload: boards
            });

          case 6:
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            _context3.next = 12;
            return (0, _effects.put)({
              type: types.FORUM_GET_BOARDS_FAILED,
              payload: _context3.t0.message
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    },
    _marked3,
    this,
    [[0, 8]]
  );
}

function editBoard(api, action) {
  var board;
  return _regenerator2.default.wrap(
    function editBoard$(_context4) {
      while (1) {
        switch ((_context4.prev = _context4.next)) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _effects.call)(_service.putBoard, api, action);

          case 3:
            board = _context4.sent;
            _context4.next = 6;
            return (0, _effects.put)({
              type: types.FORUM_CREATE_BOARD_SUCCEEDED,
              payload: board
            });

          case 6:
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            _context4.next = 12;
            return (0, _effects.put)({
              type: types.FORUM_CREATE_BOARD_FAILED,
              payload: _context4.t0.message
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    },
    _marked4,
    this,
    [[0, 8]]
  );
}

function createThread(api, action) {
  var board;
  return _regenerator2.default.wrap(
    function createThread$(_context5) {
      while (1) {
        switch ((_context5.prev = _context5.next)) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _effects.call)(_service.postThread, api, action);

          case 3:
            board = _context5.sent;
            _context5.next = 6;
            return (0, _effects.put)({
              type: types.FORUM_CREATE_THREAD_SUCCEEDED,
              payload: board
            });

          case 6:
            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            _context5.next = 12;
            return (0, _effects.put)({
              type: types.FORUM_CREATE_THREAD_FAILED,
              payload: _context5.t0.message
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    },
    _marked5,
    this,
    [[0, 8]]
  );
}
