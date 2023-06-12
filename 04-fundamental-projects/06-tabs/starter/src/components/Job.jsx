import React from 'react'
import JobInfo from './JobInfo'
import JobDuties from './JobDuties'

const Job = (props) => {
    const {job} = props;
  return (
    <div>
        <JobInfo {...job}/>
        <JobDuties duties={job.duties} />
    </div>
  )
}

export default Job