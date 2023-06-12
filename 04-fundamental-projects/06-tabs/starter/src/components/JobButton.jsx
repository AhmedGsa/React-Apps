import React from 'react'

const JobButton = (props) => {
    const {job, activeJob, changeActiveJob} = props;
  return (
    <button className={`job-btn ${job.id === activeJob.id ? "active-btn" : ""}`} onClick={() => {changeActiveJob(job)}}>{job.company}</button>
  )
}

export default JobButton