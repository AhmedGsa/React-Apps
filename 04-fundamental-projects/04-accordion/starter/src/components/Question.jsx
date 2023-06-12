import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const Question = (props) => {
    const {title, info} = props
    const [displayInfo, setDisplayInfo] = useState(false)
    const toggleInfo = () => {
        setDisplayInfo(!displayInfo)
    }
  return (
    <div className='question'>
        <header>
            <h5>{title}</h5>
            <button className='question-btn' onClick={toggleInfo}>{displayInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        </header>
        {displayInfo && <p>{info}</p>}
    </div>
  )
}

export default Question