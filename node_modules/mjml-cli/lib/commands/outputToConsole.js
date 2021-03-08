"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = ({
  compiled: {
    html
  },
  file
}) => new Promise(resolve => {
  process.stdout.write(`<!-- FILE: ${file} -->\n${html}\n`, resolve);
});

exports.default = _default;
module.exports = exports.default;