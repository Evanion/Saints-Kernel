"use strict";

var _actions = require("./actions");

var actions = _interopRequireWildcard(_actions);

var _constants = require("./constants");

var types = _interopRequireWildcard(_constants);

var _reducer = require("./reducer");

var reducer = _interopRequireWildcard(_reducer);

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

module.exports = {
  actions: actions,
  types: types,
  reducer: reducer
};
