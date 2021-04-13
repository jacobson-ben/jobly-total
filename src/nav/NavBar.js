import {NavLink} from "react-router-dom"

function NavBar({user}) {
  
  return (
    <nav>
      <NavLink exact to="/">Jobly</NavLink>
      {user &&
      <NavLink exact to="/companies">Companies</NavLink>
      }
      {user &&
      <NavLink exact to="/jobs">Jobs</NavLink>
      }
      {user &&
      <NavLink exact to="/profile">Profile</NavLink>
      }
      {user &&
      <NavLink exact to="/">Logout</NavLink>
      }
      {!user &&
      <NavLink exact to="/login">Login</NavLink>
      }
      {!user &&
      <NavLink exact to="/signup">Signup</NavLink>
      }
    </nav>
  )
}

export default NavBar;