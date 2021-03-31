import { createStore, combineReducers } from "redux";
import {
  counterReducer,
  counterReducerImmerjs,
} from "./reducers/counterReducers";

const initialState = {};

const reducer = combineReducers({
  counter: counterReducer,
  counterImmerjs: counterReducerImmerjs,
});

const store = createStore(reducer, initialState);

export default store;
