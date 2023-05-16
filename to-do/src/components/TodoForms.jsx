import { useState } from "react";

const TodoForms = () => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const heandleSubmit = (event) => {
    event.preventDefault();
    if (!value || !category) return;

    setCategory("");
    setValue("");
  };
  return (
    <div className="todo-form">
      <h2>Criar Tarefa</h2>
      <form onSubmit={heandleSubmit}>
        <input
          value={value}
          type="text"
          placeholder="Digite o titulo"
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
