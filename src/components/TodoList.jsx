import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList({ todos, toggleTodo }) {
    return (
        <div className="todo-list">
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo = {toggleTodo} />
            ))}
        </ul>
        </div>
    );
}
