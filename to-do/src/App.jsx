import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "I para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <div className="todo">
            <div className="content">
              <p className="text">{todo.text}</p>
              <p className="category">({todo.category})</p>
              <div className="action-buttons">
                <button className="complete">Completar</button>
                <button className="delete">X</button>
              </div>

              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
