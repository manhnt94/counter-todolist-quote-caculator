import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../../actions/todoActions";

export default function Todo(props) {
  const { id, text, isCompleted } = props.todo;
  const { handleCompleted } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.code === "Enter") {
      dispatch(editTodo(id, editValue));
      setIsEditing(false);
    }
  };

  return (
    <div className="flex items-center border-2 border-b-0 h-16 text-xl">
      <input
        id={id}
        type="checkbox"
        className="hidden"
        onClick={() => handleCompleted(id)}
      />
      {isEditing ? (
        <input
          type="text"
          className="w-full h-3/4 rounded shadow-inner-custom outline-none ml-14 mr-14 border-2 border-gray-300"
          value={editValue}
          ref={inputRef => inputRef && inputRef.focus()}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={() => setIsEditing(false)}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <>
          <label htmlFor={id} className="px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke={`${isCompleted ? "green" : "silver"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </label>
          <label
            className={`w-full ${
              isCompleted ? "line-through text-gray-300" : ""
            }`}
            onDoubleClick={() => {
              setIsEditing(true);
              setEditValue(text);
            }}
          >
            {text}
          </label>
          <button className="px-5" onClick={() => dispatch(deleteTodo(id))}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer hover:stroke-red"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
