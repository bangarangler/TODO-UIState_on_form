import React, { Component } from "react";

import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import Search from "./components/Search/Search.js";
import styles from "./App.module.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      searchedTodos: [],
      selectedTodo: []
    };
  }

  handleSearchTodos = searchTodo => {
    console.log("searchTodo", searchTodo);
    if (searchTodo === "") {
      console.log("empty search", searchTodo);
      this.setState({ searchedTodos: "" });
      return null;
    } else {
      const filtTodo = this.state.todos.filter(td => {
        console.log("td :", td);
        if (td.todoInput.includes(searchTodo)) {
          console.log("inside if", searchTodo);
          return td;
        } else {
          console.log("else :", td);
          return null;
        }
      });
      this.setState({ searchedTodos: filtTodo });
    }
  };

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

  updateTodo = (id, upTodo) => {
    //debugger;
    //console.log("is firing!");
    this.setState(prevState => ({
      todos: [
        ...prevState.todos.map(todo => {
          if (todo.id === id) {
            return { ...todo, todoInput: upTodo };
          } else {
            return todo;
          }
        })
      ]
    }));
  };

  render() {
    return (
      <div className={styles.App}>
        <Search
          todos={this.state.todos}
          selectedTodo={this.state.selectedTodo}
          handleSearchTodos={this.handleSearchTodos}
        />
        <TodoList
          todos={
            this.state.searchedTodos.length > 0
              ? this.state.searchedTodos
              : this.state.todos
          }
          removeTodo={this.removeTodo}
          toggleCompleted={this.toggleCompleted}
          editTodo={this.editTodo}
          updateTodo={this.updateTodo}
        />
        <TodoForm addTodo={this.addTodo} clearAll={this.clearCompleteHandler} />
      </div>
    );
  }
}

export default App;

{
  /*handleSearch={this.handleSearch}*/
}
{
  /*}search={this.search}*/
}
