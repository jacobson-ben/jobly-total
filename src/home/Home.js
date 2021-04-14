import {Link} from "react-router-dom"

function Home({user}) {
  
  function loginStatus() {
    if(user) {
      return (
        <div>
          <h2>Welcome Back, {user.username} </h2>
        </div>
      )
    }
    else {
      return (
        <div>
          <Link to="/login"><button>Login</button></Link>
          <Link to="/signup"><button>Signup</button></Link>
        </div>
      )
    }
  }
  
  return (
    <div>
      <h1><b>Jobly</b></h1>
      <h4>All the jobs in one, convenient place.</h4>
      {loginStatus()}
    </div>
  )
}

export default Home;