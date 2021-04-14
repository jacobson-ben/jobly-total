import {NavLink} from "react-router-dom"
import {useContext} from 'react';
import UserContext from '../auth/UserContext';
import './navbar.css'

function NavBar() {
  const { user } = useContext(UserContext);
  console.log(user)
  return (
    <nav className="NavBar">
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
      <NavLink exact to="/logout">{`Log out ${user.username}`}</NavLink>
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