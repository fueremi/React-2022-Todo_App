import React from "react";

const TodosComponent = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onDoubleClick={() => deleteTodo(todo.id)}>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left, Yay!</p>
  );
  return (
    <>
      <small>Double click to delete todo</small>
      <div className="todos collection">{todoList}</div>
    </>
  );
};

export default TodosComponent;
