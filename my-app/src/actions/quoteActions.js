import axios from "axios";
import {
  GET_QUOTE_FAIL,
  GET_QUOTE_REQUEST,
  GET_QUOTE_SUCCESS,
} from "../constants/quoteConstants";

const quoteApi =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

export const getQuotes = () => async (dispatch) => {
  dispatch({ type: GET_QUOTE_REQUEST });
  try {
    const { data } = await axios.get(quoteApi);
    dispatch({ type: GET_QUOTE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_QUOTE_FAIL, payload: error });
  }
};
