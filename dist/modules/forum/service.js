"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @name postBoard
 * @description Create a new forum board
 * @param client {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
var postBoard = exports.postBoard = function postBoard(client, action) {
  var service = client.service("/boards");
  return service.create(action.payload).then(function (result, error) {
    return result;
  });
};

/**
 * @name putBoard
 * @description update an existing board
 * @param client {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
var putBoard = exports.putBoard = function putBoard(client, action) {
  var service = client.service("/boards");
  return service.update({ id: action.payload.id, data: action.payload }).then(function (result, error) {
    return result;
  });
};

/**
 * @name deleteBoard
 * @description Delete a board
 * @param client {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
var deleteBoard = exports.deleteBoard = function deleteBoard(client, action) {
  var service = client.service("/boards");
  return service.update({ id: action.payload._id }).then(function (result, error) {
    return result.data;
  });
};

/**
 * @description gets all the boards from the API
 * @param client {Object}
 * @returns {Promise.<TResult>}
 */
var getBoards = exports.getBoards = function getBoards(client) {
  var service = client.service("/boards");
  return service.find().then(function (result, error) {
    return result.data;
  });
};

/**
 * @description gets specific board from the API
 * @param client {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
var getBoard = exports.getBoard = function getBoard(client, action) {
  var boards = client.service("/boards");
  var threads = client.service("/threads");
  var boardOpt = {
    query: {
      $limit: 1,
      slug: action.payload
    }
  };
  return boards.find(boardOpt).then(function (result, error) {
    return result.data[0] || error;
  }).then(function (board) {
    return threads.find({
      query: {
        board: board._id
      }
    }).then(function (result) {
      board.threads = result;
      return board;
    });
  }).catch(function (error) {
    return error;
  });
};

/**
 * @name postThread
 * @description Create a new forum thread
 * @param client {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
var postThread = exports.postThread = function postThread(client, action) {
  var service = client.service("/threads");
  return service.create(action.payload).then(function (result, error) {
    return result || error;
  });
};