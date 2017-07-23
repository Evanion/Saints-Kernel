"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = createUser;
exports.login = login;
exports.isLoggedIn = isLoggedIn;
exports.logout = logout;

var _effects = require("redux-saga/effects");

var _constants = require("./constants");

var types = _interopRequireWildcard(_constants);

var _service = require("./service");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _marked = [createUser, login, isLoggedIn, logout].map(regeneratorRuntime.mark);

function createUser(api, action) {
  var user;
  return regeneratorRuntime.wrap(function createUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _effects.call)(_service.newUser, api, action);

        case 3:
          user = _context.sent;
          _context.next = 6;
          return (0, _effects.put)({ type: types.USER_CREATE_SUCCEEDED, payload: user });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return (0, _effects.put)({ type: types.USER_CREATE_FAILED, payload: _context.t0.message });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this, [[0, 8]]);
}

function login(api, action) {
  var user;
  return regeneratorRuntime.wrap(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _effects.call)(_service.loginUser, api, action);

        case 3:
          user = _context2.sent;
          _context2.next = 6;
          return (0, _effects.put)({ type: types.USER_AUTH_SUCCEEDED, payload: user });

        case 6:
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 12;
          return (0, _effects.put)({ type: types.USER_AUTH_FAILED, payload: _context2.t0 });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[0, 8]]);
}

function isLoggedIn(api, action) {
  var user;
  return regeneratorRuntime.wrap(function isLoggedIn$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _effects.call)(_service.isAuthenticated, api, action);

        case 3:
          user = _context3.sent;
          _context3.next = 6;
          return (0, _effects.put)({ type: types.USER_CHECK_AUTH_SUCCEEDED, payload: user });

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 12;
          return (0, _effects.put)({ type: types.USER_CHECK_AUTH_FAILED, payload: _context3.t0 });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked[2], this, [[0, 8]]);
}

function logout(api, action) {
  var result;
  return regeneratorRuntime.wrap(function logout$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0, _effects.call)(_service.logoutUser, api, action);

        case 3:
          result = _context4.sent;
          _context4.next = 6;
          return (0, _effects.put)({ type: types.USER_LOGOUT_SUCCEEDED, payload: result });

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 12;
          return (0, _effects.put)({ type: types.USER_LOGOUT_FAILED, payload: _context4.t0.message });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked[3], this, [[0, 8]]);
}