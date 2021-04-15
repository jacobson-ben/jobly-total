import {useContext} from 'react';
import UserContext from './UserContext';
import {Route, Redirect} from 'react-router-dom'

function PrivateRoute (props) {
  const { user } = useContext(UserContext)
  
  if(!user) {
    return (
    <Redirect to="/"/>
    )
  }

  return (
    <Route exact={props.exact} path={props.path}>{props.children}</Route>
  )
}

export default PrivateRoute;
