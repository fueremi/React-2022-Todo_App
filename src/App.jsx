import React, { Component } from "react";
import TodosComponent from "./Components/TodosComponent";
import AddTodoComponent from "./Components/AddTodoComponent";

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
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <TodosComponent todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodoComponent addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
