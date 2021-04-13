import {Switch, Route, Redirect} from "react-router-dom"
import { useState } from "react"
import Home from "./home/Home"
import Login from "./auth/Login"
import Signup from "./auth/Signup"
import Companies from "./companies/Companies"
import Jobs from "./jobs/Jobs"
import Profile from "./profiles/Profile"
import Company from "./companies/Company"



function Routes({user}) {

  return (
    <div>
      <Switch>
        <Route exact path="/"><Home user={user}/></Route>
        <Route exact path="/signup"><Signup/></Route>
        <Route exact path="/login"><Login/></Route>
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