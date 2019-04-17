/**
 * @flow
 */

"use strict";

import type { Action } from "../types";
import type { Item, Promo } from "./types";

updateItem = (): => Action = (item: Item): Action => ({
  type: "UPDATE_ITEM",
  item
}),

submitPromo = (): => Action = (promo: Promo): Action => ({
  type: "SUBMIT_PROMO",
  promo
})

export {
  updateItem,
  submitpromo
};
