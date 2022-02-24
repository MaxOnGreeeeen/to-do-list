import { combineReducers } from "redux";

import { notesReducer } from "./notesReducer";
import { modalWindowReducer } from "./modalWindowReducer";

export const rootReducer = combineReducers({
  notes: notesReducer,
  modal: modalWindowReducer,
});
