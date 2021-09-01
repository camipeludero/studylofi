import React, { Fragment, useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from "./TodoList";
import './css/Todo.css';
import minIcon from '../img/icons/min.svg';
import maxIcon from '../img/icons/max.svg';
import closeIcon from '../img/icons/close.svg';

const KEY = "todoTodo.todos";

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Soy una tarea de prueba!", completed: false }
  ]);

  const todoTaskRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if(storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);
 
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo)=>todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;

    if(task === '') return;

    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), task, completed: false }];
    });

    todoTaskRef.current.value = null;
  };

  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <>
    <div className="todo window">
    <div className="window-header">
        <p class="window-title">things to do</p>
        <div class="window-btns">
          <button id="min"><img src={minIcon} alt="Minimize Icon"/></button>
          <button id="max"><img src={maxIcon} alt="Maximize Icon"/></button>
          <button id="close"><img src={closeIcon} alt="Close Window Icon"/></button>
        </div>
        </div>
  <TodoList todos={todos} toggleTodo={toggleTodo} />
  <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"/>
  <button onClick={handleTodoAdd}>➕</button>
  <button onClick={handleClearAll}>🗑️</button>
  <div id="todosLeft">Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar</div>
  
  <div className="window-footer"></div>
  </div>
  </>
  );
}
