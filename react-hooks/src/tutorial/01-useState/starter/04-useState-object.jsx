import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 19,
    enjoys: "reading books"
  })
  const handleClickBtn = () => {
    setPerson({
      name: "john",
      age: 20,
      enjoys: "screaming at the computer"
    })
  }
  return <div>
    <h1>UseState object example</h1>
    <h2>{person.name}</h2>
    <h2>{person.age}</h2>
    <h3>Enjoys: {person.enjoys}</h3>
    <button className='btn' onClick={handleClickBtn} >Show Jhon</button>
  </div>;
};

export default UseStateObject;
