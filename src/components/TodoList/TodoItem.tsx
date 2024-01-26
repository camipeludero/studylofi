import React from "react";
import "../css/Todo.css";
import { TodoType } from "./Todo";

export function TodoItem({
  todo,
  toggleTodo,
}: {
  todo: TodoType;
  toggleTodo: (id: string) => void;
}) {
  const { id, task, completed } = todo;

  const handleTodoClick = () => {
    toggleTodo(id);
  };

  return (
    <li>
      <label className="control control-checkbox">
        <input type="checkbox" checked={completed} onChange={handleTodoClick} />
        <p>{task}</p>
        <div className="control_indicator"></div>
      </label>
    </li>
  );
}
