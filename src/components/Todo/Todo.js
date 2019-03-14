import React from "react";
import styles from "./Todo.module.scss";

const todo = props => {
  return (
    <>
      <li
        className={props.todo.completed ? styles.Completed : null}
        onClick={e => props.toggleCompleted(props.todo.id)}
      >
        {props.todo.todoInput}
      </li>
      <button onClick={e => props.removeTodo(props.todo.id)}>
        Delete Todo
      </button>
      <button>Edit Todo</button>
    </>
  );
};

export default todo;
