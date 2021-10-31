import React, { useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const saveTodo = () => {
    setTodos((oldArray) => [...oldArray, todo]);
    setTodo("");
  };

  return (
    <div className="App">
      <TodoHeader title="Todo" />
      <div id="form">
        <input
          type="text"
          placeholder="enter your todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        ></input>
        <input type="button" onClick={() => saveTodo()} value="save"></input>
      </div>
      <TodoList todolist={todos} />
    </div>
  );
}

export default TodoApp;
