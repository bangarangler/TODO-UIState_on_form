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
    //console.log("is firing!");
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }));
  };

  removeTodo = id => {
    let newList = [];
    this.state.todos.filter(todo => {
      if (todo.id !== id) {
        //console.log(todo);
        return newList.push(todo);
      } else {
        return null;
      }
    });
    //console.log(this.state.todos);
    this.setState({ todos: newList });
  };

  toggleCompleted = id => {
    this.state.todos.filter(todo => {
      if (todo.id === id) {
        //console.log(todo);
        return (todo.completed = !todo.completed);
      } else {
        return null;
      }
    });
    //this.setState(prevState => {
    //return { ...prevState, todos: [...prevState.todos] };
    //});
    this.setState(prevState => ({
      ...prevState.todos,
      todos: [...prevState.todos]
    }));
  };

  clearCompleteHandler = e => {
    e.preventDefault();
    let clearCompleted = [];
    this.state.todos.filter(todo => {
      if (!todo.completed) {
        //console.log(clearCompleted);
        clearCompleted.push(todo);
        return clearCompleted;
      }
    });
    this.setState({ todos: clearCompleted });
  };

  editTodo = id => {
    this.state.todos.filter(todo => {
      if (todo.id === id) {
        return (todo.canEdit = !todo.canEdit);
      } else {
        return null;
      }
    });
    this.setState(prevState => ({
      ...prevState.todos,
      todos: [...prevState.todos]
    }));
  };

  render() {
    return (
      <div className={styles.App}>
        <TodoList
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          toggleCompleted={this.toggleCompleted}
          editTodo={this.editTodo}
        />
        <TodoForm addTodo={this.addTodo} clearAll={this.clearCompleteHandler} />
      </div>
    );
  }
}

export default App;
