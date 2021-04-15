import UserContext from "../auth/UserContext";
import { useContext } from "react";

function ApplyButton({jobId}) {
  const {user, applytoJob, applicationIds} = useContext(UserContext)
  
  function handleClick() {
    applytoJob(user.username, jobId);
  }
  
  return (
    <div>
      {applicationIds.includes(jobId) ? 
      <button disabled type="button" className="btn btn-danger">Applied</button>
      :
      <button onClick={handleClick} type="button" className="btn btn-danger">Apply</button>
      }
      </div>
  )
}

export default ApplyButton;