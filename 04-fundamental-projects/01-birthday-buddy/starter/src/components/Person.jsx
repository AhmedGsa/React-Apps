import React from 'react'

const Person = (props) => {
    const {image, name, age} = props;
  return (
    <div className='person'>
        <img src={image} ></img>
        <div>
            <h4>{name}</h4>
            <p>{age} years old</p>
        </div>
    </div>
  )
}

export default Person