import React, { Component } from "react";

import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import styles from "./App.module.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo = newTodo => {
    //debugger;
    console.log("is firing!");
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }));
  };

  removeTodo = id => {
    let newList = [];
    this.state.todos.filter(todo => {
      if (todo.id !== id) {
        console.log(todo);
        return newList.push(todo);
      } else {
        return null;
      }
    });
    console.log(this.state.todos);
    this.setState({ todos: newList });
  };

  render() {
    return (
      <div className={styles.App}>
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
