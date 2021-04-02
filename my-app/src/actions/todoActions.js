import {
  ADD_TODO,
  CHANGE_STATUS_TODO,
  CHECK_ALL_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED,
  EDIT_TODO,
} from "../constants/todolistConstants";

export const addTodo = (todo) => (dispatch, getState) => {
  dispatch({
    type: ADD_TODO,
    payload: todo,
  });
  localStorage.setItem("todos", JSON.stringify(getState().todoList.todos));
};

export const changeStatusTodo = (todoId) => (dispatch, getState) => {
  dispatch({
    type: CHANGE_STATUS_TODO,
    payload: todoId,
  });
  localStorage.setItem("todos", JSON.stringify(getState().todoList.todos));
};

export const checkAllTodo = (isCheckAll) => (dispatch, getState) => {
  dispatch({
    type: CHECK_ALL_TODO,
    payload: isCheckAll,
  });
  localStorage.setItem("todos", JSON.stringify(getState().todoList.todos));
};

export const deleteTodo = (id) => (dispatch, getState) => {
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
  localStorage.setItem("todos", JSON.stringify(getState().todoList.todos));
};

export const clearCompleted = () => (dispatch, getState) => {
  console.log("hi")
  dispatch({
    type: CLEAR_COMPLETED,
  });
  localStorage.setItem("todos", JSON.stringify(getState().todoList.todos));
};

export const editTodo = (id, text) => (dispatch, getState) => {
  dispatch({
    type: EDIT_TODO,
    payload: {
      id,
      text
    } 
  });
  localStorage.setItem("todos", JSON.stringify(getState().todoList.todos));
};