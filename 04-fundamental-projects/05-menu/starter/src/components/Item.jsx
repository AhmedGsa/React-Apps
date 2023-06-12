import React from 'react'

const Item = (props) => {
    const {title, price, category, desc, img} = props;
  return (
    <div className='menu-item'>
        <img src={img} className='img' style={{objectFit: "cover", width: "100%"}} ></img>
        <div className="item-info">
            <header>
                <h5>{title}</h5>
                <span className='item-price'>{price}</span>
            </header>
            <p className='item-text'>{desc}</p>
        </div>
    </div>
  )
}

export default Item