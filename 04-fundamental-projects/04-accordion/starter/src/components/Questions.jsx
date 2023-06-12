import React from 'react'
import data from '../data'
import Question from './Question'

const Questions = () => {
  return (
    <>
        {data.map((qst) => (
            <Question {...qst} key={qst.id} />
        ))}
    </>
  )
}

export default Questions