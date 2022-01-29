import React, { Component } from "react";
import TodosComponent from "./Components/TodosComponent";

export class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy Some Milk" },
      { id: 2, content: "Play PUBG Mobile" },
    ],
  };
  deleteTodo = (id) => {
    let todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <TodosComponent todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
