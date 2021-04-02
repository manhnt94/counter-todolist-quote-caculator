import {
  ADD_TODO,
  CHANGE_STATUS_TODO,
  CHECK_ALL_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED,
  EDIT_TODO,
} from "../constants/todolistConstants";

const initialState = {
  todos: [],
};

export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case CHANGE_STATUS_TODO:
      const todoId = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === todoId
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    case CHECK_ALL_TODO:
      const isCompletedAll = action.payload;
      if (isCompletedAll) {
        return {
          ...state,
          todos: state.todos.map((todo) => ({
            ...todo,
            isCompleted: false,
          })),
        };
      } else {
        return {
          ...state,
          todos: state.todos.map((todo) => ({
            ...todo,
            isCompleted: true,
          })),
        };
      }
    case DELETE_TODO:
      const todoIdDelete = action.payload;
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== todoIdDelete),
      };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.isCompleted === false),
      };
    case EDIT_TODO:
      const { id, text } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) => todo.id === id ? {...todo, text} : todo),
      };
    default:
      return state;
  }
};
