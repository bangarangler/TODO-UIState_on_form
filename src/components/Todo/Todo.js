import React from "react";

import EditTodoForm from "../EditTodoForm/EditTodoForm.js";
import styles from "./Todo.module.scss";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpdate = e => {
    e.preventDefault();
    let upTodo = this.state.edit;
    this.props.updateTodo(this.props.todo.id, upTodo);
    this.setState({ edit: "" });
  };

  render() {
    return (
      <>
        <li
          className={this.props.todo.completed ? styles.Completed : null}
          onClick={e => this.props.toggleCompleted(this.props.todo.id)}
        >
          {this.props.todo.todoInput}
        </li>
        <button onClick={e => this.props.removeTodo(this.props.todo.id)}>
          Delete Todo
        </button>
        <button onClick={e => this.props.editTodo(this.props.todo.id)}>
          Edit Todo
        </button>
        {this.props.todo.canEdit ? (
          <EditTodoForm
            handleUpdate={this.handleUpdate}
            edit={this.state.edit}
            handleChange={this.handleChange}
          />
        ) : null}
      </>
    );
  }
}

export default Todo;
