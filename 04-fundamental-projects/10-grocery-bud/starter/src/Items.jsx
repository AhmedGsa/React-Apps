import { SingleItem } from './SingleItem';
import React from "react";
export function Items({items, removeItem, updateItem}) {
  return <div className="items">
    {items.map((item) => <SingleItem  key={item.id} item={item} removeItem={removeItem} updateItem={updateItem} />)}
    </div>;
}
  