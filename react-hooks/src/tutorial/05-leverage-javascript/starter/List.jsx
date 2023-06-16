import { Person } from './Person';
import React from 'react'

const List = (props) => {
    const {people} = props;
  return (
    <div>
        {people.map(person => <Person person={person}    />)}
    </div>
  )
}

export default List