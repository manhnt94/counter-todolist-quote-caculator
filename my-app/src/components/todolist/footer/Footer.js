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
    <footer className="border-2 flex justify-between py-1">
      <label className="flex-0020 px-5">
        {getTodoLeft() > 1 ? `${getTodoLeft()} items` : `${getTodoLeft()} item`}{" "}
        left
      </label>
      <div className="flex-0050 flex justify-center">
        {["All", "Active", "Completed"].map((item, index) => (
          <li
            key={index}
            className={`mr-3 list-none ${
              filterBy === item ? "border-2 rounded" : ""
            }`}
            onClick={() => handleFilterChange(item)}
          >
            {item}
          </li>
        ))}
      </div>
      <button
        className={`flex-0030 text-right px-5 ${
          isShowClearBtn() ? "" : "invisible"
        }`}
        onClick={() => dispatch(clearCompleted())}
      >
        Clear Completed
      </button>
    </footer>
  );
}
