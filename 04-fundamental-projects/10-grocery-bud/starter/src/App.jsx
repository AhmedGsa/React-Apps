import { Items } from './Items';
import { useState } from 'react';
import { Form } from './Form';

const getItemsFromLocalStorage = () => {
  const items = localStorage.getItem("items");
  return JSON.parse(items) || []
}

const setLocalStorageItems = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
} 

const App = () => {

  const [items, setItems] = useState(getItemsFromLocalStorage())
  const addItem = (item) => {
    setItems([...items, item])
    setLocalStorageItems([...items, item])
  }
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
    setLocalStorageItems(newItems)
  }
  const updateItem = (id) => {
    const newItems = items.map((item) => {
      if(item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    })
    setItems(newItems)
    setLocalStorageItems(newItems)
  }
  return <section className="section-center">
    <Form  addItem={addItem}  />
    <Items   items={items} removeItem={removeItem} updateItem={updateItem} />
  </section>;
};

export default App;
