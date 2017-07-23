"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getThreads = exports.getThread = exports.deleteThread = exports.editThread = exports.createThread = exports.getBoards = exports.getBoard = exports.deleteBoard = exports.editBoard = exports.createBoard = undefined;

var _constants = require("./constants");

var types = _interopRequireWildcard(_constants);

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

/**
 * @name createBoard
 * @description Creates a new board
 * @param payload
 */
var createBoard = (exports.createBoard = function createBoard(payload) {
  return {
    type: types.FORUM_CREATE_BOARD_REQUESTED,
    payload: payload
  };
});

/**
 * @name editBoard
 * @description Edits an existing board
 * @param payload
 */
var editBoard = (exports.editBoard = function editBoard(payload) {
  return {
    type: types.FORUM_EDIT_BOARD_REQUESTED,
    payload: payload
  };
});

/**
 * @name deleteBoard
 * @description Deletes a board
 * @param payload
 */
var deleteBoard = (exports.deleteBoard = function deleteBoard(payload) {
  return {
    type: types.FORUM_DELETE_BOARD_REQUESTED,
    payload: payload
  };
});

/**
 * @name getBoard
 * @description Fetches a specific board
 * @param payload
 */
var getBoard = (exports.getBoard = function getBoard(payload) {
  return {
    type: types.FORUM_GET_BOARD_REQUESTED,
    payload: payload
  };
});

/**
 * @name getBoards
 * @description Fetches all boards
 * @param payload
 */
var getBoards = (exports.getBoards = function getBoards(payload) {
  return {
    type: types.FORUM_GET_BOARDS_REQUESTED,
    payload: payload
  };
});

/**
 * @name createThread
 * @description Creates a new thread
 * @param payload
 */
var createThread = (exports.createThread = function createThread(payload) {
  return {
    type: types.FORUM_CREATE_THREAD_REQUESTED,
    payload: payload
  };
});

/**
 * @name editThread
 * @description Edits a thread
 * @param payload
 */
var editThread = (exports.editThread = function editThread(payload) {
  return {
    type: types.FORUM_EDIT_THREAD_REQUESTED,
    payload: payload
  };
});

/**
 * @name deleteThread
 * @description Removes a thread
 * @param payload
 */
var deleteThread = (exports.deleteThread = function deleteThread(payload) {
  return {
    type: types.FORUM_DELETE_THREAD_REQUESTED,
    payload: payload
  };
});

/**
 * @name getThread
 * @description Gets a thread
 * @param payload
 */
var getThread = (exports.getThread = function getThread(payload) {
  return {
    type: types.FORUM_GET_THREAD_REQUESTED,
    payload: payload
  };
});

/**
 * @name getThreads
 * @description Gets all threads in a board
 * @param payload
 */
var getThreads = (exports.getThreads = function getThreads(payload) {
  return {
    type: types.FORUM_GET_THREADS_REQUESTED,
    payload: payload
  };
});
