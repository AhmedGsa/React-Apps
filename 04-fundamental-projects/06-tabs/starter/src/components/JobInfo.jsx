import React from 'react'

const JobInfo = (props) => {
    const {title, company, dates} = props;
  return (
    <div>
        <h1>{title}</h1>
        <p className='job-company'>{company}</p>
        <p className='job-date'>{dates}</p>
    </div>
  )
}

export default JobInfo