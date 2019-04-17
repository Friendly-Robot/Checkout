"use strict";

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from '../middleware/logger';

import rootReducer from "../reducers";

const isDebuggingInChrome = false;

const createAppStore = applyMiddleware(thunk, logger)(createStore);

const configureStore = () => {
  let store = createAppStore(rootReducer);

  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

export default configureStore;
