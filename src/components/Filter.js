import React from "react";
import ShoppingList from "./ShoppingList";

function Filter({ onCategoryChange }) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={"All"} onChange={SearchChange} />
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
