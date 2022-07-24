import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchName, setSearchName] = useState("")
  const [itemList, setNewItem] = useState(items)
  

  

  const itemsToDisplay = itemList.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => {
    
    if (searchName === "") return true;
    
    return item.name.toUpperCase().includes(searchName.toUpperCase()) 
  });



  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSearchName(event.target.value)
  }

  function handleItemChange(newItem){
   setNewItem([...itemList, newItem])
  }
  
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {handleItemChange}
      />

      <Filter onSearchChange = {handleSearchChange}onCategoryChange={handleCategoryChange} search = {searchName} category = {selectedCategory}/>


      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
