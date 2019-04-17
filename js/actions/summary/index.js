/**
 * @flow
 */

"use strict";

import type { Action } from "../types";
import type { Item, Promo } from "./types";


const updateItem = (item: Item): Action => ({
  type: "UPDATE_ITEM",
  item
});

const submitPromo = (promo: Promo): Action => ({
  type: "SUBMIT_PROMO",
  promo
});

export {
  updateItem,
  submitPromo
};
