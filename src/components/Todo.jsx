import React, { Fragment, useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./TodoList";
import "./css/Todo.css";
import minIcon from "../img/icons/min.svg";
import maxIcon from "../img/icons/max.svg";
import closeIcon from "../img/icons/close.svg";
import plusIcon from "../img/icons/plus.svg";
import trashIcon from "../img/icons/trash.svg";
import Draggable from 'react-draggable';

const KEY = "todoTodo.todos";

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Soy una tarea de prueba!", completed: false },
  ]);

  const todoTaskRef = useRef();

  const window = useRef(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;

    if (task === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task, completed: false }];
    });

    todoTaskRef.current.value = null;
  };

  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const todosLeft = todos.filter((todo) => !todo.completed).length

  return (
    <>
    <Draggable>
      <div className="todo window" ref={window}>
        <div className="window-header">
          <p class="window-title">things to do</p>
          <div class="window-btns">
            <button id="min">
              <img src={minIcon} alt="Minimize Icon" />
            </button>
            <button id="max">
              <img src={maxIcon} alt="Maximize Icon" />
            </button>
            <button id="close">
              <img src={closeIcon} alt="Close Window Icon" />
            </button>
          </div>
        </div>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <div class="todo-new">
          <textarea
            ref={todoTaskRef}
            placeholder="New task..."
            rows="2"
            wrap="soft"
          />
          <div className="todo-btns">
            <button className="new-todo" onClick={handleTodoAdd}>
              <img src={plusIcon} alt="Add a new task" />
            </button>
            <button className="delete-todo" onClick={handleClearAll}>
              <img src={trashIcon} alt="Delete task" />
            </button>
          </div>
        </div>
        <div className="window-footer">
          <div id="todosLeft">
            {todosLeft === 0 ? 'Congrats! You nailed it today!':
            `You can do it! Only ${todosLeft}
            more ♥`
          }
          </div>
        </div>
      </div>
      </Draggable>
    </>
  );
}
