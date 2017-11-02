"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.createUser = createUser;
exports.login = login;
exports.isLoggedIn = isLoggedIn;
exports.logout = logout;
exports.setToken = setToken;

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

var _marked = /*#__PURE__*/ _regenerator2.default.mark(createUser),
  _marked2 = /*#__PURE__*/ _regenerator2.default.mark(login),
  _marked3 = /*#__PURE__*/ _regenerator2.default.mark(isLoggedIn),
  _marked4 = /*#__PURE__*/ _regenerator2.default.mark(logout),
  _marked5 = /*#__PURE__*/ _regenerator2.default.mark(setToken);

function createUser(api, action) {
  var user;
  return _regenerator2.default.wrap(
    function createUser$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _effects.call)(_service.newUser, api, action);

          case 3:
            user = _context.sent;
            _context.next = 6;
            return (0, _effects.put)({
              type: types.USER_CREATE_SUCCEEDED,
              payload: user
            });

          case 6:
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            _context.next = 12;
            return (0, _effects.put)({
              type: types.USER_CREATE_FAILED,
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

function login(api, action) {
  var user;
  return _regenerator2.default.wrap(
    function login$(_context2) {
      while (1) {
        switch ((_context2.prev = _context2.next)) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _effects.call)(_service.loginUser, api, action);

          case 3:
            user = _context2.sent;
            _context2.next = 6;
            return (0, _effects.put)({
              type: types.USER_AUTH_SUCCEEDED,
              payload: user
            });

          case 6:
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            _context2.next = 12;
            return (0, _effects.put)({
              type: types.USER_AUTH_FAILED,
              payload: _context2.t0
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    },
    _marked2,
    this,
    [[0, 8]]
  );
}

function isLoggedIn(api, action) {
  var user;
  return _regenerator2.default.wrap(
    function isLoggedIn$(_context3) {
      while (1) {
        switch ((_context3.prev = _context3.next)) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return (0, _effects.call)(_service.isAuthenticated, api, action);

          case 3:
            user = _context3.sent;
            _context3.next = 6;
            return (0, _effects.put)({
              type: types.USER_CHECK_AUTH_SUCCEEDED,
              payload: user
            });

          case 6:
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            _context3.next = 12;
            return (0, _effects.put)({
              type: types.USER_CHECK_AUTH_FAILED,
              payload: _context3.t0
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    },
    _marked3,
    this,
    [[0, 8]]
  );
}

function logout(api, action) {
  var result;
  return _regenerator2.default.wrap(
    function logout$(_context4) {
      while (1) {
        switch ((_context4.prev = _context4.next)) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _effects.call)(_service.logoutUser, api, action);

          case 3:
            result = _context4.sent;
            _context4.next = 6;
            return (0, _effects.put)({
              type: types.USER_LOGOUT_SUCCEEDED,
              payload: result
            });

          case 6:
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            _context4.next = 12;
            return (0, _effects.put)({
              type: types.USER_LOGOUT_FAILED,
              payload: _context4.t0.message
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    },
    _marked4,
    this,
    [[0, 8]]
  );
}

function setToken(api, action) {
  var result;
  return _regenerator2.default.wrap(
    function setToken$(_context5) {
      while (1) {
        switch ((_context5.prev = _context5.next)) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return (0, _effects.call)(_service.saveToken, api, action);

          case 3:
            result = _context5.sent;
            _context5.next = 6;
            return (0, _effects.put)({
              type: types.USER_SET_TOKEN_SUCCEEDED,
              payload: result
            });

          case 6:
            _context5.next = 8;
            return (0, _effects.put)({ type: types.USER_CHECK_AUTH_REQUESTED });

          case 8:
            _context5.next = 14;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            _context5.next = 14;
            return (0, _effects.put)({
              type: types.USER_SET_TOKEN_FAILED,
              payload: _context5.t0.message
            });

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    },
    _marked5,
    this,
    [[0, 10]]
  );
}
