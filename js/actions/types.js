/**
 * @flow
 */

"use strict";

export type Action =
  | { type: "UPDATE_ITEM", update: object }
  | { type: "SUBMIT_PROMO", promo: string };
