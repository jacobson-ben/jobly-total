import {Switch, Route, Redirect} from "react-router-dom"
import Home from "./home/Home"
import Login from "./auth/Login"
import Logout from "./auth/Logout"
import Signup from "./auth/Signup"
import Companies from "./companies/Companies"
import Jobs from "./jobs/Jobs"
import Profile from "./profiles/Profile"
import Company from "./companies/Company"
import {useContext} from 'react';
import UserContext from './auth/UserContext';

function Routes({ updateToken, removeToken }) {
  return (
    <div>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/logout"><Logout removeToken={removeToken}/></Route>
        <Route exact path="/signup"><Signup updateToken={updateToken}/></Route>
        <Route exact path="/login"><Login updateToken={updateToken}/></Route>
        <Route exact path="/companies"><Companies/></Route>
        <Route exact path="/companies/:handle"><Company/></Route>
        <Route exact path="/jobs"><Jobs/></Route>
        <Route exact path="/profile"><Profile/></Route>
        <Redirect to="/"/>
      </Switch>
    </div>
  )

}

export default Routes;