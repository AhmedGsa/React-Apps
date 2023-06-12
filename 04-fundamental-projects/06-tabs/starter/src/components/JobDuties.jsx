import React from 'react'
import {v4 as uuidv4} from 'uuid'
import {MdKeyboardDoubleArrowRight} from 'react-icons/md'

const JobDuties = (props) => {
  const {duties} = props
  return (
    <div>
      {duties.map((duty) => (
        <div className='job-desc' key={uuidv4()}>
          <MdKeyboardDoubleArrowRight className='job-icon' style={{scale: "1.5"}} />
          <p>{duty}</p>
        </div>
      ))}
    </div>
  )
}

export default JobDuties