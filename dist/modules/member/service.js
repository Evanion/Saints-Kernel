"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @description Fetches a member from the server
 * @param client {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
var fetchMember = (exports.fetchMember = function fetchMember(client, action) {
  return client
    .service("/users")
    .find({
      query: {
        username: action.payload
      }
    })
    .then(function(result, error) {
      console.log("API error", error);
      console.log("API result", result);
      return error || result.data[0];
    })
    .catch(function(error) {
      return error;
    });
});
