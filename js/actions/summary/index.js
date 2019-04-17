/**
 * @flow
 */

"use strict";

import type { Action } from "../types";
import type { Item, Promo } from "./types";

const updateItem = () => Action = (item: Item) => ({
  type: "UPDATE_ITEM",
  item
});

const submitPromo = () => Action = (promo: Promo) => ({
  type: "SUBMIT_PROMO",
  promo
});

export {
  updateItem,
  submitPromo
};
