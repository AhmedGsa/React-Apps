import React, { useState } from "react";
export function SingleItem({item, removeItem, updateItem}) {
  const handleChange = (e) => {
    updateItem(item.id)
  }
  return <div className="single-item">
          <input type="checkbox" checked={item.completed} onChange={handleChange}></input>
          <p style={{
            textDecoration: item.completed ? "line-through" : "auto"
          }}>{item.name}</p>
          <button className="remove-btn btn" onClick={() => {removeItem(item.id)}}>remove</button>
        </div>;
}
  