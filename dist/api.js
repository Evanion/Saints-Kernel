"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _feathersClient = require("feathers-client");

var _feathersClient2 = _interopRequireDefault(_feathersClient);

var _superagent = require("superagent");

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// @TODO: Refactor for react-native support
// @flow
var apiServerUrl = void 0;
switch (window.location.hostname) {
  case "localhost":
    apiServerUrl = "http://localhost:3030";
    break;

  case "https://stage.saints-gaming.com":
    apiServerUrl = "https://stage.api.saints-gaming.com";
    break;

  default:
    apiServerUrl = "https://api.saints-gaming.com";
    break;
}

var api = (0, _feathersClient2.default)()
  .configure(
    _feathersClient2.default.rest(apiServerUrl).superagent(_superagent2.default)
  )
  .configure(_feathersClient2.default.hooks())
  .configure(
    _feathersClient2.default.authentication({
      storage: window.localStorage
    })
  );

exports.default = api;
