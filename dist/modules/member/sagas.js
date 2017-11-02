"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.getMember = getMember;

var _effects = require("redux-saga/effects");

var _constants = require("./constants");

var types = _interopRequireWildcard(_constants);

var _service = require("./service");

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

var _marked = /*#__PURE__*/ _regenerator2.default.mark(getMember);

function getMember(api, action) {
  var member;
  return _regenerator2.default.wrap(
    function getMember$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _effects.call)(_service.fetchMember, api, action);

          case 3:
            member = _context.sent;
            _context.next = 6;
            return (0, _effects.put)({
              type: types.MEMBER_GET_SUCCEEDED,
              payload: member
            });

          case 6:
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            _context.next = 12;
            return (0, _effects.put)({
              type: types.MEMBER_GET_FAILED,
              payload: _context.t0.message
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    },
    _marked,
    this,
    [[0, 8]]
  );
}
