import React from 'react'
import Title from './Title'
import {tours} from '../data'
import Tour from './Tour'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title firstWord="featured" secondWord="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => (
          <Tour tour={tour} key={tour.id} />
        ))}
      </div>
    </section>
  )
}

export default Tours