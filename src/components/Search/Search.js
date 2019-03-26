import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    //this.selectSearch(e);
  };

  selectSearch = e => {
    e.preventDefault();
    //this.props.handleSearch(this.state.search);
    this.props.handleSearchTodos(this.state.search);
    //this.setState({ search: "" });
    //this.props.search(e);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search Todos"
          name="search"
          value={this.state.search}
          onChange={this.handleChange}
          required
          onKeyUp={this.selectSearch}
        />
        <h2>{this.props.selectedTodo.todoInput}</h2>
      </div>
    );
  }
}

export default Search;
