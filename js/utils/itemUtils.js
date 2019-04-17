/**
 * @flow
 */

"use strict";

import type { Item } from "../actions/summary/types";

const findIndexOfItem: (array: array, item: Item) => number = (array, item) => {
  if (!item || !item.name) return NaN;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].name === item.name) {
      return i;
      break;
    }
  }
  return NaN;
}

export {
  findIndexOfItem
}
