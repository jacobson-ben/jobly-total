import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import JoblyApi from '../JoblyAPI';
import JobCard from '../jobs/JobCard';

function Company() {
  const {handle} = useParams()
  const [company, setCompany] = useState(null)
  console.log(company)

  useEffect( function getCompanyI() {
    async function getCompanyInfo() {
      const res = await JoblyApi.getCompany(handle);
      setCompany({...res})
    }
    getCompanyInfo()
  }, [])

  if(!company) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2>{company.name}</h2>
      <h6>{company.description}</h6>
      {company.jobs.map(j => <JobCard key={j.id} job={j}/>)}
    </div>
  )
}

export default Company;