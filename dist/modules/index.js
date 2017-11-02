"use strict";

var _forum = require("./forum");

var forum = _interopRequireWildcard(_forum);

var _member = require("./member");

var member = _interopRequireWildcard(_member);

var _user = require("./user");

var user = _interopRequireWildcard(_user);

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

// register your module here
var modules = {
  forum: forum,
  member: member,
  user: user
};
var actions = {};
var reducers = {};
var sagas = {};
var types = [];

for (var key in modules) {
  if (!modules.hasOwnProperty(key)) continue;
  actions[key] = modules[key]["actions"];
  reducers[key] = modules[key]["reducer"].default;
  sagas[key] = modules[key]["sagas"];
  types.push(modules[key]["types"]);
}
module.exports = {
  actions: actions,
  reducers: reducers,
  sagas: sagas,
  types: types
};
