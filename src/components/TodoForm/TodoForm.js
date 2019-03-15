import React from "react";

const uuid4 = require("uuid4");

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        todoInput: "",
        completed: false
      }
    };
  }

  handleChange = e => {
    e.persist();
    this.setState(prevState => ({
      todo: { ...prevState.todo, [e.target.name]: e.target.value }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    let newTodo = this.state.todo;
    newTodo.id = uuid4();
    //console.log("newTodo :", newTodo);
    this.props.addTodo(newTodo);
    this.setState({ todo: { todoInput: "", completed: false } });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="What do you need todo?"
          name="todoInput"
          value={this.state.todo.todoInput}
          onChange={this.handleChange}
        />
        {this.state.todo.todoInput}
        <button>Add Todo</button>
        <button onClick={this.props.clearAll}>Clear All Completed</button>
      </form>
    );
  }
}

export default TodoForm;
