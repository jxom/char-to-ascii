'use strict';
module.exports = input => {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`);
  }

  return input.split('').map(char => char.charCodeAt(0));
};
