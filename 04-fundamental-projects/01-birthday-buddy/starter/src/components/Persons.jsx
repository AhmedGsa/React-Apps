import React from "react";
import data from '../data';
import Person from "./Person";
import { useState } from "react";

const Persons = () => {
  const [persons, setPersons] = useState(data);
  const handleClickBtn = () => {
    setPersons([]);
  };
  return (
    <div className="container">
      <h3>5 Birhdays Today</h3>
      {persons.map((person) => (
        <Person {...person} key={person.id} />
      ))}
      <button onClick={handleClickBtn} className="btn">
        Clear All
      </button>
    </div>
  );
};

export default Persons;
