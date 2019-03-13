import React from "react";

const todo = props => {
  return (
    <>
      <li>{props.todo.todoInput}</li>
      <button onClick={(e) => props.removeTodo(props.todo.id)}>Delete Todo</button>
      <button>Edit Todo</button>
    </>
  );
};

export default todo;
