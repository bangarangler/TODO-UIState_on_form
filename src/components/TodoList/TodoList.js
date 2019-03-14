import React from "react";

import Todo from "../Todo/Todo";

const uuid4 = require("uuid4");
const todoList = props => {
  return (
    <ul>
      {props.todos.map(todo => {
        return (
          <Todo
            key={uuid4()}
            todo={todo}
            removeTodo={props.removeTodo}
            toggleCompleted={props.toggleCompleted}
          />
        );
      })}
    </ul>
  );
};

export default todoList;
