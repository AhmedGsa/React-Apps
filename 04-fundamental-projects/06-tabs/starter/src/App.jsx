const url = 'https://course-api.com/react-tabs-project';
import { useState, useEffect } from "react";
import SideBar from "./components/SideBar";
import Job from "./components/Job";

const App = () => {
  const [jobs, setJobs] = useState(null)
  const [active, setActive] = useState(null)
  const changeActiveJob = (job) => {
    setActive(job)
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data)
      setActive(data[0])
    }
    fetchData()
  }, [])
  return <div className="jobs-center">
    {jobs && <SideBar jobs={jobs} activeJob={active} changeActiveJob={changeActiveJob}/>}
    {active && <Job job={active}/>}
  </div>;
};
export default App;
