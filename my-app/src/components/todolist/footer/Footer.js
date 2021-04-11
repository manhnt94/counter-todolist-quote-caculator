import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCompleted } from "../../../actions/todoActions";

export default function Footer(props) {
  const [filterBy, setFilterBy] = useState("All");
  const { todos, handleFilter } = props;
  const dispatch = useDispatch();

  const handleFilterChange = (item) => {
    handleFilter(item);
    setFilterBy(item);
  };

  const isShowClearBtn = () => {
    return todos.some((todo) => todo.isCompleted);
  };

  const getTodoLeft = () => {
    return todos.reduce(
      (count, todo) => (todo.isCompleted ? count : count + 1),
      0
    );
  };

  return (
    <footer className="todo-footer border-2 flex justify-between py-1">
      <label className="flex-0025 pl-5 flex items-center">
        {getTodoLeft() > 1 ? `${getTodoLeft()} items` : `${getTodoLeft()} item`}{" "}
        left
      </label>
      <div className="flex-0050 flex justify-center items-center">
        {["All", "Active", "Completed"].map((item, index) => (
          <li
            key={index}
            className={`mr-2 px-2 h-7 list-none cursor-pointer hover:border-2 rounded ${
              filterBy === item ? "border-2 rounded border-red-100" : ""
            }`}
            onClick={() => handleFilterChange(item)}
          >
            {item}
          </li>
        ))}
      </div>
      <div className="flex-0025 pr-5">
        <button
          className={`text-right hover:border-b-2 ${
            isShowClearBtn() ? "" : "invisible"
          }`}
          onClick={() => dispatch(clearCompleted())}
        >
          Clear Completed
        </button>
      </div>
    </footer>
  );
}
