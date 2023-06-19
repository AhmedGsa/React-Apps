import React, { useState } from "react";
import { v4 } from "uuid";
export function Form({addItem}) {
  const [value, setValue] = useState("")
  const handleInputChange = (e) => {
    setValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(value) {
      const newItem = {
        name: value,
        completed: false,
        id: v4()
      }
      addItem(newItem);
      setValue("")
    }
  }
  return <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input className="form-input" value={value} onChange={handleInputChange}></input>
        <button className="btn" type="submit">Add Item</button>
      </div>
    </form>;
}
  