import React from "react";
import { TodoItem } from "./TodoItem";
import { TodoType } from "./Todo";

export function TodoList({
  todos,
  toggleTodo,
}: {
  todos: TodoType[];
  toggleTodo: (id: string) => void;
}) {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}
