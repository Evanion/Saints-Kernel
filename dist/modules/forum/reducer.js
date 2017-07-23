"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };

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

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
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
      return _extends({}, state);

    case type.FORUM_CREATE_BOARD_SUCCEEDED:
      return _extends({}, state, {
        boards: _extends(
          {},
          state.boards,
          _defineProperty({}, action.payload._id, action.payload)
        ),
        error: null
      });

    case type.FORUM_CREATE_BOARD_FAILED:
      return _extends({}, state, {
        loading: false,
        fetched: true,
        error: action.payload
      });

    case type.FORUM_GET_BOARD_REQUESTED:
    case type.FORUM_GET_BOARDS_REQUESTED:
      return _extends({}, state, {
        board: {},
        boards: {},
        loading: true,
        fetched: false,
        error: null
      });

    case type.FORUM_GET_BOARD_SUCCEEDED:
      return _extends({}, state, {
        board: action.payload,
        loading: false,
        fetched: true,
        error: null
      });

    case type.FORUM_GET_BOARDS_SUCCEEDED:
      action.payload.forEach(function(board) {
        boards[board._id] = board;
      });
      return _extends({}, state, {
        boards: boards,
        loading: false,
        fetched: true,
        error: null
      });

    case type.FORUM_GET_BOARD_FAILED:
    case type.FORUM_GET_BOARDS_FAILED:
      return _extends({}, state, {
        loading: false,
        fetched: true,
        error: action.payload
      });

    case type.FORUM_CREATE_THREAD_REQUESTED:
      return _extends({}, state);

    case type.FORUM_CREATE_THREAD_SUCCEEDED:
      return _extends({}, state, {
        board: _extends({}, state.board, {
          threads: _extends({}, state.board.threads, {
            data: [].concat(_toConsumableArray(state.board.threads.data), [
              action.payload
            ])
          })
        }),
        error: null
      });

    case type.FORUM_CREATE_THREAD_FAILED:
      return _extends({}, state, {
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
