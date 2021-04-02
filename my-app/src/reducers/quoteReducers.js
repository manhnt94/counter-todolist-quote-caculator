import {
  GET_QUOTE_FAIL,
  GET_QUOTE_REQUEST,
  GET_QUOTE_SUCCESS,
} from "../constants/quoteConstants";

const initialState = {
  quotes: [],
  loading: false,
};

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTE_REQUEST:
      return { loading: true };
    case GET_QUOTE_SUCCESS:
      return { loading: false, quotes: action.payload };
    case GET_QUOTE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
