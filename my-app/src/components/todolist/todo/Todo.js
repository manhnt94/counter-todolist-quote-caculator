import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../../actions/todoActions";

export default function Todo(props) {
  const { id, text, isCompleted } = props.todo;
  const { handleCompleted } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      dispatch(editTodo(id, editValue));
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center border-2 py-4">
      <input
        id={id}
        type="checkbox"
        className="hidden"
        onClick={() => handleCompleted(id)}
      />
      <label htmlFor={id} className="px-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke={`${isCompleted ? "black" : "silver"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </label>
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <label
          className={`w-full ${
            isCompleted ? "line-through text-gray-300" : ""
          }`}
          onDoubleClick={() => setIsEditing(true)}
        >
          {text}
        </label>
      )}
      <button className="px-5" onClick={() => dispatch(deleteTodo(id))}>
        x
      </button>
    </div>
  );
}
