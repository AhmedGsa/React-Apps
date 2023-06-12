import React from 'react'
import Tour from './Tour'
import { useState } from 'react'

const Tours = (props) => {
    let {items, removeTour} = props;
  return (
    <div className='tours'>
        {items.map((tour) => (
            <Tour key={tour.id} {...tour} removeTour={removeTour}/>
        ))}
    </div>
  )
}

export default Tours