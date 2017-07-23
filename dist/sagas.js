"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sagas;

var _effects = require("redux-saga/effects");

var _modules = require("./modules");

var _marked = [sagas].map(regeneratorRuntime.mark);

function sagas(api) {
  var Sagas, key;
  return regeneratorRuntime.wrap(function sagas$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          Sagas = [];
          _context.t0 = regeneratorRuntime.keys(_modules.sagas);

        case 2:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 9;
            break;
          }

          key = _context.t1.value;

          if (_modules.sagas.hasOwnProperty(key)) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("continue", 2);

        case 6:
          Sagas.push((0, _effects.fork)(_modules.sagas[key], api));
          _context.next = 2;
          break;

        case 9:
          _context.next = 11;
          return (0, _effects.all)(Sagas);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}