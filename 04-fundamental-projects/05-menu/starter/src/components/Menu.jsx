import React from 'react'
import data from '../data'
import { useState } from 'react'
import Item from './Item'

const Menu = () => {
    const [items, setItems] = useState(data)
    const filter = (category) => {
        if(category === "All") {
            setItems(data);
        } else {
            const newItems = data.filter((item) => item.category === category );
            setItems(newItems)
        }
    }
  return (
    <main className='menu'>
        <div className="btn-container">
            <button className='btn' onClick={() => {filter("All")}}>All</button>
            <button className='btn' onClick={() => {filter("breakfast")}}>Breakfast</button>
            <button className='btn' onClick={() => {filter("lunch")}}>Lunch</button>
            <button className='btn' onClick={() => {filter("shakes")}}>Shakes</button>
        </div>
        <section className='section-center'>
            {items.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </section>
    </main>
  )
}

export default Menu