import React from 'react'

const Tour = (props) => {
    const {name, info, image, price, removeTour, id} = props;
    // const handleDeleteBtn = () => {
    //   setShowed(false)
    // }
  return (
    <div className='single-tour'>
        <img src={image} style={{width: "300px", height: "300px", objectFit: "cover"}}></img>
        <span className='tour-price'>{`$${price}`}</span>
        <div className="tour-info">
            <h5 className='title'>{name}</h5>
            <p>{info}</p>
            <button className='btn delete-btn' onClick={() => {removeTour(id)}}>Not interested</button>
        </div>
    </div>
  )
}

export default Tour