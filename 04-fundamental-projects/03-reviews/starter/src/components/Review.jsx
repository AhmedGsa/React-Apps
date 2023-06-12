import React from 'react'
import {FaQuoteRight} from 'react-icons/fa'
import {GrNext, GrPrevious} from 'react-icons/gr'

const Review = (props) => {
    const {data, previous, next, random} = props;
  return (
    <div className='review'>
        <div className="img-container">
            <img src={data.image} className='person-img'></img>
            <FaQuoteRight className='quote-icon' style={{padding: "10px"}}/>
        </div>
        <h3 className='author'>{data.name}</h3>
        <h5 className='job'>{data.job}</h5>
        <p className='info'>{data.text}</p>
        <div className="btn-container">
            <button className='prev-btn' onClick={previous}><GrPrevious/></button>
            <button className='next-btn' onClick={next}><GrNext/></button>
        </div>
        <button className='btn' onClick={random}>Surprise me</button>
    </div>
  )
}

export default Review