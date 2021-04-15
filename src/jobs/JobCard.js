import './JobCard.css'
import ApplyButton from './ApplyButton'
import { useContext } from "react";
import UserContext from '../auth/UserContext';


function JobCard({job}) {
  const {applicationIds} = useContext(UserContext)
  console.log(applicationIds)

  const {id, title, salary, equity, companyName} = job
  return (
      <div className="card"> 
        <h6>{title}</h6>
        <h6>{companyName}</h6>
        <p>Salary: {salary} </p>
        <p>Equity: {equity}</p>
        <ApplyButton jobId={id}/>
      </div>
  );
}

export default JobCard;