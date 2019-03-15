import React from "react";
import styles from "./Todo.module.scss";

let editForm = (
  <form>
    <input type="text" placeholder="Edit Todo..." />
  </form>
);

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
      <button onClick={e => props.editTodo(props.todo.id)}>Edit Todo</button>
      {props.todo.canEdit ? editForm : null}
    </>
  );
};

export default todo;
