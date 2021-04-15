import {Switch, Route, Redirect} from "react-router-dom"
import Home from "./home/Home"
import Login from "./auth/Login"
import Logout from "./auth/Logout"
import Signup from "./auth/Signup"
import Companies from "./companies/Companies"
import Jobs from "./jobs/Jobs"
import Profile from "./profiles/Profile"
import Company from "./companies/Company"
import PrivateRoute from './auth/PrivateRoute';

function Routes({ updateToken, removeToken }) {
  return (
    <div>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/logout"><Logout removeToken={removeToken}/></Route>
        <Route exact path="/signup"><Signup updateToken={updateToken}/></Route>
        <Route exact path="/login"><Login updateToken={updateToken}/></Route>
        <PrivateRoute exact path="/companies"><Companies/></PrivateRoute>
        <PrivateRoute exact path="/companies/:handle"><Company/></PrivateRoute>
        <PrivateRoute exact path="/jobs"><Jobs/></PrivateRoute>
        <PrivateRoute exact path="/profile"><Profile/></PrivateRoute>
        <Redirect to="/"/>
      </Switch>
    </div>
  )

}

export default Routes;