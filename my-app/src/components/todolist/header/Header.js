import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, checkAllTodo } from "../../../actions/todoActions";

export default function Header(props) {
  const { todos } = props;
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleEventEnter = (e) => {
    if (e.key === "Enter") {
      dispatch(
        addTodo({
          id: Date.now(),
          text,
          isCompleted: false,
        })
      );
      setText("");
    }
  };

  const isCheckAll = () => {
    return todos.every((todo) => todo.isCompleted);
  };

  return (
    <header className="flex items-center border-2 border-b-0 py-4 text-xl">
      <input
        id="check-all"
        className="hidden h-full"
        type="checkbox"
        onClick={() => dispatch(checkAllTodo(isCheckAll()))}
      ></input>
      <label htmlFor="check-all" className="px-5 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={`${isCheckAll() ? "green" : "silver"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </label>
      <input
        className="w-full outline-none"
        placeholder="What needs to be done ?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleEventEnter}
      ></input>
    </header>
  );
}
