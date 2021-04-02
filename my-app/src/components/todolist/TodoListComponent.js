import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusTodo } from "../../actions/todoActions";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import TodoList from "./todolist/TodoList";

export default function TodoListComponent() {
  const { todos } = useSelector((state) => state.todoList);
  const [filterValue, setFilterValue] = useState("All");
  const dispatch = useDispatch();

  const filterTodos = (todos, filterValue) => {
    return todos.filter((todo) => {
      switch (filterValue) {
        case "Active":
          return todo.isCompleted === false;
        case "Completed":
          return todo.isCompleted === true;
        default:
          return todo;
      }
    });
  };

  const handleFilter = (filterBy) => {
    setFilterValue(filterBy);
  }

  const handleCompleted = (id) => {
    dispatch(changeStatusTodo(id));
  }

  return (
    <div className="w-2/5 m-auto mt-10">
      <Header todos={todos} />
      <TodoList todos={filterTodos(todos, filterValue)} handleCompleted={handleCompleted} />
      <Footer
        todos={todos}
        handleFilter={handleFilter}
      />
    </div>
  );
}
