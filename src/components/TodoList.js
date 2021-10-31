import React from "react";

export default function TodoList(props) {
  return (
    <>
      <div id="todolist">
        {props.todolist.map((todo, i) => {
          return <li key={i}>{todo}</li>;
        })}
      </div>
    </>
  );
}
