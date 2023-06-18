import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p className="text">{todo.text}</p>
        <p className="category" style={{ color: "#45aab8" }}>
          [{todo.category}]
        </p>
      </div>
      <div className="action-buttons">
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="delete" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
