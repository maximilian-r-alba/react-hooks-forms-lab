import React from "react";

function Filter({ onCategoryChange, onSearchChange, search, category}) {
  return (
    <div className="Filter">
      <input onChange={onSearchChange} type="text" name="search" placeholder="Search..." value = {search}/>
      <select name="filter" onChange={onCategoryChange} value = {category}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
