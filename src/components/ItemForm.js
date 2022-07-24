import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  
  const [itemObj, setItemObj] = useState({name:"", category:"Produce"})

  function handleChange(event){
    setItemObj({...itemObj, [event.target.name]: event.target.value})
  }



  function handleSubmit(event){
    event.preventDefault()
    const newItemObj = {...itemObj, id: uuid()}
    onItemFormSubmit(newItemObj)

  }


  return (
    <form onSubmit = {handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange = {handleChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select  onChange = {handleChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
