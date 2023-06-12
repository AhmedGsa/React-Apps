import React from 'react'
import JobButton from './JobButton';

const SideBar = (props) => {
    const {jobs, activeJob, changeActiveJob} = props;
  return (
    <div className='btn-container'>
        {jobs.map((job) => (<JobButton key={job.id} job={job} activeJob={activeJob} changeActiveJob={changeActiveJob} />))}
    </div>
  )
}

export default SideBar