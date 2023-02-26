import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { baseReducer, initialState } from "./reducers";

export const configureStore = () => {
  const store = createStore(baseReducer, initialState, composeWithDevTools());
  return store;
};
