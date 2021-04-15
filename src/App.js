import './App.css';
import Routes from "./Routes"
import { decodeToken } from "react-jwt"
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./common/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from "./auth/UserContext";
import JoblyApi from './JoblyAPI';
import { useEffect, useMemo, useState } from 'react';


function App() {
  const [token, setToken] = useState(checkToken)
  const user = useMemo(() => token ? decodeToken(token) : null, [token]);
  const [applicationIds, setApplicationIds] = useState(null)
  
  function checkToken() {
    if(localStorage.getItem('token')) {
      const lToken = localStorage.getItem('token');
      JoblyApi.token = lToken;
      return lToken;
    }
    return null;
  }

  useEffect(function updateGlobalUser() {
    async function getCurrentUser() {
      const currUser = await JoblyApi.getUser(user.username);
      setApplicationIds(currUser.applications)
    }
    getCurrentUser()
  }, [])

  
  async function applytoJob(username, jobId) {
    await JoblyApi.applyUserToJob(username, jobId);
    setApplicationIds(app => [...app, jobId])
  }

  //pass down setter function instead of wrapper function. 
  function updateToken(token) {
    setToken(t => token);
    JoblyApi.token = token;
    localStorage.setItem('token', token);
  }

  function removeToken() {
    setToken(null);
    JoblyApi.token = null;
    localStorage.removeItem('token');
  }

  if(!applicationIds) {
    return <p>Loading...</p>
  }

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, applytoJob, applicationIds }}>
      <div className="App">
        <NavBar />
        <Routes updateToken={updateToken} removeToken={removeToken} />
      </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
