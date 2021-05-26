import { FETCH_COUNTRIES, FETCH_ERROR, FETCH_LOADING } from "./actionTypes";

const initialState = {
  items: [],
  error: "",
  loading: false,
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return { ...state, items: action.payload, error: "", loading: false };

    case FETCH_ERROR:
      return { ...state, items: [], error: action.payload, loading: false };

    case FETCH_LOADING:
      return { ...state, items: [], error: "", loading: action.payload };

    default:
      return state;
  }
};
