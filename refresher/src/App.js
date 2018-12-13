import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

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
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="center teal-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <br />
        <br />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
