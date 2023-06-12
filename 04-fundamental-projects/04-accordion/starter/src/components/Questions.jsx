import React from 'react'
import data from '../data'
import Question from './Question'
import { useState } from 'react'

const Questions = () => {
    const [activeQst, setActiveQst] = useState(null)
    const toggleQst = (id) => {
        setActiveQst(id);
    }
  return (
    <>
        {data.map((qst) => (
            <Question {...qst} key={qst.id} activeQst={activeQst} toggleQst={toggleQst} />
        ))}
    </>
  )
}

export default Questions