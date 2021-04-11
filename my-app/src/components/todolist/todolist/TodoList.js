import React from "react";
import Todo from "../todo/Todo";

export default function TodoList(props) {
  const { todos } = props;

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} {...props} />
          </li>
        ))}
      </ul>
    </div>
  );
}
