/**
 * @flow
 */

"use strict";

const fixed = num => typeof num === "number" ? parseFloat((num / 100).toFixed(2)) : num;

const x100 = num => typeof num === "number" ? num * 100 : num;

function sum() {
  return fixed(Array.prototype.reduce.call(arguments, (acc, curr) => acc += x100(curr), 0));
}

export {
  fixed,
  sum,
  x100
}
