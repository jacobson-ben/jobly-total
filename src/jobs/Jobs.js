import { useEffect, useState } from 'react';
import JoblyApi from '../JoblyAPI';
import SearchForm from '../common/SearchForm'
import JobCard from './JobCard';


function Jobs() {
  const [jobs, setJobs] = useState([]);
  
  useEffect(function showJobsOnLoad() {
    searchJobs();
  }, []);
  
  async function searchJobs(title={}) {
    let currJobs= await JoblyApi.getJobs(title);
    setJobs(currJobs);
  }
  
  return (
    <div className="jobs">
      <SearchForm search={searchJobs} name={"title"} />
      { jobs.map(j => ( <JobCard key={j.id} job={j} /> )) }
    </div>
  )
}

export default Jobs;