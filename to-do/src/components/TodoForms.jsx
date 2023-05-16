import React from "react";

const TodoForms = () => {
  return (
    <div className="todo-form">
      <h2>Criar Tarefa</h2>
      <form>
        <input type="text" placeholder="Digite o titulo" />
        <select>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudos">Estudos</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Contas">Contas</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForms;