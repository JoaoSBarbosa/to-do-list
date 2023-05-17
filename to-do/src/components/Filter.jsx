const Filter = () => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select>
            <option value="All">Todos</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Order alfabética</p>
          <div className="action-buttons">
            <button>Asc</button>
            <button>Desc</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
