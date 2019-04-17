/**
 * @flow
 */

"use strict";

const fixed = num => (num / 100).toFixed(2);

const x100 = num => num * 100;

function sum() {
  return fixed(Array.prototype.reduce.call(arguments, (acc, curr) => acc += x100(curr), 0))
}

export {
  fixed,
  sum,
  x100
}
