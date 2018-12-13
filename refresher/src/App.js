import React, { Component } from "react";
import Todos from "./Todos";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Take a nape" }
    ]
  };
  deleteTodo = id => {
    const todosFiltered = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: todosFiltered
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center teal-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
