"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveToken = exports.newUser = exports.logoutUser = exports.isAuthenticated = exports.loginUser = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * @description gets all the boards from the API
 * @param client {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
var loginUser = (exports.loginUser = function loginUser(client, action) {
  var payload = (0, _extends3.default)(
    {
      strategy: "local"
    },
    action.payload
  );
  return client
    .authenticate(payload)
    .then(function(result, error) {
      console.log("API error", error);
      console.log("API result", result);
      return result.accessToken;
    })
    .then(function(jwt) {
      return client.passport.verifyJWT(jwt);
    })
    .then(function(decoded) {
      return client
        .service("/users")
        .get(decoded.userId)
        .then(function(result, error) {
          return result || error;
        });
    });
});

/**
 * @description Checks if the user is authenticated.
 * Returns the current user object from the server.
 * If the check fails, the user is logged out.
 * @param client
 * @return {Promise.<T>}
 */
var isAuthenticated = (exports.isAuthenticated = function isAuthenticated(
  client
) {
  var token = client.settings.storage.getItem("feathers-jwt");
  console.log("api", client);
  return client.passport
    .verifyJWT(token)
    .then(function(decoded) {
      return client
        .service("/users")
        .get(decoded.userId)
        .then(function(result, error) {
          return result || error;
        });
    })
    .catch(function() {
      return client.logout();
    });
});

/**
 * @description Logs out the current user
 * @param client
 * @returns {Promise<any>}
 */
var logoutUser = (exports.logoutUser = function logoutUser(client) {
  return client.logout().then(function(result, error) {
    return result || error;
  });
});

/**
 * @description gets specific board from the API
 * @param api {Object}
 * @param action {Object}
 * @returns {Promise.<TResult>}
 */
var newUser = (exports.newUser = function newUser(api, action) {
  console.log(client, action);
  return api
    .service("/users")
    .create(action.payload)
    .then(function(result, error) {
      console.log("API error", error);
      console.log("API result", result);
      return result;
    });
});

var saveToken = (exports.saveToken = function saveToken(client, action) {
  var currentToken = client.settings.storage.getItem("feathers-jwt");
  return client.passport
    .verifyJWT(currentToken)
    .then(function(decoded) {
      return client
        .service("/users")
        .get(decoded.userId)
        .then(function(result, error) {
          return result || error;
        });
    })
    .catch(function() {
      if (action.payload) {
        client.passport.setJWT(action.payload);
        window.location = "/";
        return true;
      }
      return client.logout();
    });
});
