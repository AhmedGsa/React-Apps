import React, { useState } from 'react'

const Tour = (props) => {
    const [showMore, setShowMore] = useState(false)
    const {name, info, image, price, removeTour, id} = props;
    const handleShowMoreBtn = () => {
      setShowMore(true)
    }
  return (
    <div className='single-tour'>
        <img src={image} style={{width: "300px", height: "300px", objectFit: "cover"}}></img>
        <span className='tour-price'>{`$${price}`}</span>
        <div className="tour-info">
            <h5 className='title'>{name}</h5>
            {showMore ? <p>{info}</p> : <p>{info.substring(0, 100)}... <span className='info-btn' onClick={handleShowMoreBtn}>Read more</span></p>}
            <button className='btn delete-btn' onClick={() => {removeTour(id)}}>Not interested</button>
        </div>
    </div>
  )
}

export default Tour