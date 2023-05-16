import React from "react";

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <div className="content">
        <p className="text">{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div className="action-buttons">
        <button className="complete">Completar</button>
        <button className="delete">X</button>
      </div>
    </div>
  );
};

export default Todo;
