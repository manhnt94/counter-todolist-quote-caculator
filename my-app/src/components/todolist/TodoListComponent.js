import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusTodo } from "../../actions/todoActions";
import { SIGNATURE } from "../../constants/common";
import Loading from "../loading/Loading";
import MyFooter from "../my-footer/MyFooter";
import Title from "../title/Title";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import TodoList from "./todolist/TodoList";

export default function TodoListComponent() {
  const { todos } = useSelector((state) => state.todoList);
  const [filterValue, setFilterValue] = useState("All");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

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
  };

  const handleCompleted = (id) => {
    dispatch(changeStatusTodo(id));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-indigo-200 w-full h-screen box-border">
          <Title title="My Todolist" />
          <div className="bg-white xl:w-2/5 lg:w-3/5 md:w-3/5 xsm:w-4/5 m-auto shadow-xl rounded-xl overflow-hidden">
            <Header todos={todos} />
            <TodoList
              todos={filterTodos(todos, filterValue)}
              handleCompleted={handleCompleted}
            />
            <Footer todos={todos} handleFilter={handleFilter} />
          </div>
          <MyFooter
            styles="text-gray-600"
            information="Double-click to edit a todo"
            description="Functional Component, Demo Redux"
            signature={SIGNATURE}
          />
        </div>
      )}
    </>
  );
}
