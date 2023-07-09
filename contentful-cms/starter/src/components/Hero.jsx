import React from 'react'
import img from '../assets/pair.svg'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-center">
        <div className="hero-title">
        <h1>Contentful CMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit libero ex numquam quidem rerum magni officia animi! Doloremque neque sint quisquam, praesentium labore dicta enim veritatis officia earum id perferendis.</p>
      </div>
      <div className="img-container">
        <img src={img}></img>
      </div>
      </div>
      
    </section>
  )
}

export default Hero