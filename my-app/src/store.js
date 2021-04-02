import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  counterReducer,
  counterReducerImmerjs,
} from "./reducers/counterReducers";
import { todoReducers } from "./reducers/todolistReducers";

const initialState = {
  todoList: {
    todos: localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [],
  },
};

const reducer = combineReducers({
  counter: counterReducer,
  counterImmerjs: counterReducerImmerjs,
  todoList: todoReducers,
});

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
