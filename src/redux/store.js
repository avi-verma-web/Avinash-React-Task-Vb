import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { countriesReducer } from "./reducer";

const store = createStore(countriesReducer, applyMiddleware(thunk));

export default store;
