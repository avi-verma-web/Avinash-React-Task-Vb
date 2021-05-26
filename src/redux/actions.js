import { FETCH_COUNTRIES, FETCH_ERROR, FETCH_LOADING } from "./actionTypes";
import axios from "axios";

export const fetchCountries = (country) => {
  return (dispatch) => {
    dispatch({ type: FETCH_LOADING, payload: true });
    axios
      .get("https://restcountries.eu/rest/v2/name/" + country)
      .then((res) => {
        const data = res.data;
        dispatch({
          type: FETCH_COUNTRIES,
          payload: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_ERROR,
          payload: err.message,
        });
      });
  };
};
