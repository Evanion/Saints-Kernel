"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @description gets all the boards from the API
 * @param client {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
var loginUser = exports.loginUser = function loginUser(client, action) {
  var payload = _extends({
    strategy: "local"
  }, action.payload);
  return client.authenticate(payload).then(function (result, error) {
    console.log("API error", error);
    console.log("API result", result);
    return result.accessToken;
  }).then(function (jwt) {
    return client.passport.verifyJWT(jwt);
  }).then(function (decoded) {
    return client.service("/users").get(decoded.userId).then(function (result, error) {
      return result || error;
    });
  });
};

/**
 * @description Checks if the user is authenticated.
 * Returns the current user object from the server.
 * If the check fails, the user is logged out.
 * @param client
 * @param action
 * @return {Promise.<T>}
 */
var isAuthenticated = exports.isAuthenticated = function isAuthenticated(client, action) {
  var token = client.settings.storage.getItem("feathers-jwt");
  return client.passport.verifyJWT(token).then(function (decoded) {
    return client.service("/users").get(decoded.userId).then(function (result, error) {
      return result || error;
    });
  }).catch(function () {
    return client.logout();
  });
};

/**
 * @description Logs out the current user
 * @param client
 * @returns {Promise<any>}
 */
var logoutUser = exports.logoutUser = function logoutUser(client) {
  return client.logout().then(function (result, error) {
    return result || error;
  });
};

/**
 * @description gets specific board from the API
 * @param client {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
var newUser = exports.newUser = function newUser(client, action) {
  console.log(client, action);
  return client.service("/users").create(action.payload).then(function (result, error) {
    console.log("API error", error);
    console.log("API result", result);
    return result;
  });
};