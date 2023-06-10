import {data} from '../../../data'
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    const newArray = people.filter((person) => {
      return person.id != id;
    })
    setPeople(newArray)
  }

  const clearAllItems = () => {
    setPeople([])
  }

  return <>
    {people.map((person) => (
      <div key={person.id}>
        <h2>{person.name}</h2>
        <button onClick={() => {removeItem(person.id)}} >remove</button>
      </div>
    ))}
    <button className='btn' style={{marginTop: "1rem"}} onClick={clearAllItems} >Clear all</button>
  </>;
};

export default UseStateArray;
