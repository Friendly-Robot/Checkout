/**
 * @flow
 */

"use strict";

import type { Action } from "../../actions/types";
import type { Item } from "../../actions/summary/types";
import getInitialItem from "../../api/getInitialItem";
import { findIndexOfItem } from "../../utils/itemUtils";
import promoCodes from "../../data/promoCodes";

type State = {
  items: Array<Item>,
  discount: number
};

const initialState: State = {
  items: [getInitialItem()],
  discount: 0
};

const summary: (state: State, action: Action) => State = (state = initialState, action = {}) => {
  if (action.type === "UPDATE_ITEM") {
    const itemIndex = findIndexOfItem(state.items, action.item);
    if (!isNaN(itemIndex)) {
      const updatedItems = [...state.links];
      updatedItems.splice(itemIndex, 1, action.item);
      return { ...state, items: updatedItems };
    }
    return state;
  }
  if (action.type === "SUBMIT_PROMO") {
    const promoIndex = promoCodes.indexOf(action.promo);
    if (promoIndex > -1) {
      return { ...state, discount: 10 };
    }
    return state;
  }
  return state;
}

export default summary;
