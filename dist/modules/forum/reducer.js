"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require("babel-runtime/helpers/extends");

var _extends4 = _interopRequireDefault(_extends3);

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

//import {REHYDRATE} from 'redux-persist/constants';

var forum = function forum() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : _initialState.ForumState;
  var action =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var boards = {};
  switch (action.type) {
    /**
       * @description User registration
       */
    case type.FORUM_CREATE_BOARD_REQUESTED:
      return (0, _extends4.default)({}, state);

    case type.FORUM_CREATE_BOARD_SUCCEEDED:
      return (0, _extends4.default)({}, state, {
        boards: (0, _extends4.default)(
          {},
          state.boards,
          (0, _defineProperty3.default)({}, action.payload._id, action.payload)
        ),
        error: null
      });

    case type.FORUM_CREATE_BOARD_FAILED:
      return (0, _extends4.default)({}, state, {
        loading: false,
        fetched: true,
        error: action.payload
      });

    case type.FORUM_GET_BOARD_REQUESTED:
    case type.FORUM_GET_BOARDS_REQUESTED:
      return (0, _extends4.default)({}, state, {
        board: {},
        boards: {},
        loading: true,
        fetched: false,
        error: null
      });

    case type.FORUM_GET_BOARD_SUCCEEDED:
      return (0, _extends4.default)({}, state, {
        board: action.payload,
        loading: false,
        fetched: true,
        error: null
      });

    case type.FORUM_GET_BOARDS_SUCCEEDED:
      action.payload.forEach(function(board) {
        boards[board._id] = board;
      });
      return (0, _extends4.default)({}, state, {
        boards: boards,
        loading: false,
        fetched: true,
        error: null
      });

    case type.FORUM_GET_BOARD_FAILED:
    case type.FORUM_GET_BOARDS_FAILED:
      return (0, _extends4.default)({}, state, {
        loading: false,
        fetched: true,
        error: action.payload
      });

    case type.FORUM_CREATE_THREAD_REQUESTED:
      return (0, _extends4.default)({}, state);

    case type.FORUM_CREATE_THREAD_SUCCEEDED:
      return (0, _extends4.default)({}, state, {
        board: (0, _extends4.default)({}, state.board, {
          threads: (0, _extends4.default)({}, state.board.threads, {
            data: [].concat(
              (0, _toConsumableArray3.default)(state.board.threads.data),
              [action.payload]
            )
          })
        }),
        error: null
      });

    case type.FORUM_CREATE_THREAD_FAILED:
      return (0, _extends4.default)({}, state, {
        loading: false,
        fetched: true,
        error: action.payload
      });

    /**
       * @description forum current state
       */
    default:
      return state;
  }
};

exports.default = forum;
