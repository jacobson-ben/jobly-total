import './JobCard.css'

function JobCard({job}) {

  const {title, salary, equity, companyName} = job
  return (
      <div className="card"> 
        <h6>{title}</h6>
        <h6>{companyName}</h6>
        <p>Salary: {salary} </p>
        <p>Equity: {equity}</p>
        <button type="button" className="btn btn-danger">Apply</button>
      </div>
  );
}

export default JobCard;