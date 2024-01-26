import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./TodoList";
import "../css/Todo.css";
import CustomIcon from "../Basic/CustomIcon";
import Window from "../Basic/Window";

const LS_KEY = "todoTodo.todos";

export type TodoType = {
  id: string;
  task: string;
  completed: boolean;
};

const DEMO_TASK = { id: "1", task: "I'm a task!", completed: false };

export default function Todo() {
  const [todos, setTodos] = useState<TodoType[]>([DEMO_TASK]);

  const todoTaskRef = useRef<HTMLTextAreaElement>(null);
  const window = useRef(null);

  useEffect(() => {
    const lsTodos = localStorage.getItem(LS_KEY);
    const storedTodos = lsTodos ? JSON.parse(lsTodos) : [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id: string) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo: TodoType) => todo.id === id);
    if (todo) todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleTodoAdd = () => {
    const task = todoTaskRef.current?.value as string;

    if (task === "") return;

    setTodos((prevTodos: TodoType[]) => {
      return [...prevTodos, { id: uuidv4(), task, completed: false }];
    });

    if (todoTaskRef.current) todoTaskRef.current.value = "";
  };

  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const todosLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <Window
        className="todo"
        title="things to do"
        footer={
          <div id="todosLeft">
            {todosLeft === 0
              ? "Congrats! You nailed it today!"
              : `You can do it! Only ${todosLeft}
              more ♥`}
          </div>
        }
      >
        <div>
          <TodoList todos={todos} toggleTodo={toggleTodo} />
          <div className="todo-new">
            <textarea
              ref={todoTaskRef}
              placeholder="New task..."
              rows={2}
              wrap="soft"
            />
            <div className="todo-btns">
              <button className="new-todo" onClick={handleTodoAdd}>
                <CustomIcon name="plus" color="#FC6095" />
              </button>
              <button className="delete-todo" onClick={handleClearAll}>
                <CustomIcon name="delete" color="#FC6095" />
              </button>
            </div>
          </div>
        </div>
      </Window>
    </>
  );
}
