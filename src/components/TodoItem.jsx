import React from 'react';
import './css/Todo.css';

export function TodoItem({ todo, toggleTodo }) {
    const { id, task, completed } = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    };

    return (
        <li>
            <label class="control control-checkbox">
            <input type="checkbox" checked={completed} onChange={handleTodoClick} />
            <p>{task}</p>
              <div class="control_indicator"></div>
    </label>
        </li>
    );
}
