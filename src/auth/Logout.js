import { Redirect } from 'react-router-dom';

function Logout({ removeToken }) {
  //logic to remove user from conext
  // redirect to home
  removeToken();

  return (
    <Redirect to="/"/>
  )
}

export default Logout; 