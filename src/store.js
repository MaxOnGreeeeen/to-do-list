import { compose, createStore } from "redux";

import { rootReducer } from "./redux/reducers/routeReducer";

const initialState = {};

//will add Middleware later
export const store = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
