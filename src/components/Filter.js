import React from "react";

function Filter({onSearchChange, onCategoryChange, search }) {
  return (
    <div className="Filter">
      <input onChange={onSearchChange} type="text" value={search} placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
