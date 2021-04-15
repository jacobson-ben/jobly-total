import {useContext} from 'react';
import UserContext from './UserContext';
import {Route, Redirect} from 'react-router-dom'

function PrivateRoute (path) {
  const { user } = useContext(UserContext)
  console.log(path)
  
  if(!user) {
    return (
    <Redirect to="/"/>
    )
  }

  return (
    <Route exact path={path.path}>{path.children}</Route>
  )
}

export default PrivateRoute;
