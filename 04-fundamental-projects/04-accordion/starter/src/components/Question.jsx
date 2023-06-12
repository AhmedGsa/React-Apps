import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const Question = (props) => {
    const {title, info, toggleQst, activeQst, id} = props
    // const [displayInfo, setDisplayInfo] = useState(false)
    // const toggleInfo = () => {
    //     setDisplayInfo(!displayInfo)
    // }
  return (
    <div className='question'>
        <header>
            <h5>{title}</h5>
            <button className='question-btn' onClick={() => {toggleQst(id)}}>{activeQst === id ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        </header>
        {activeQst === id && <p>{info}</p>}
    </div>
  )
}

export default Question