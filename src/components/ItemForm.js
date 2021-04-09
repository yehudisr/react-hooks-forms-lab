import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
const [name, setName] = useState("")
const [category, setCategory] = useState("Produce")

function handleSubmit(event){
  event.preventDefault()
 
  onItemFormSubmit({
    id: uuid(),
    name,
    category
  })
}

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={name}
          onChange={(event) => setName(event.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" value={category}
          onChange={(event) => setCategory(event.target.value)}>
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
