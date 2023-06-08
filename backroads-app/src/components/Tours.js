import React from 'react'
import Title from './Title'
import {tours} from '../data'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title firstWord="featured" secondWord="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => (
          <article className="tour-card">
          <div className="tour-img-container">
            <img src={tour.img} className="tour-img" alt="" />
            <p className="tour-date">{tour.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{tour.title}</h4>
            </div>
            <p>
              {tour.text}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {tour.location}
              </p>
              <p>6 days</p>
              <p>{`from $${tour.price}`}</p>
            </div>
          </div>
        </article>
        ))}
      </div>
    </section>
  )
}

export default Tours