import './App.css';
import Routes from "./Routes"
import { decodeToken } from "react-jwt"
import { useState } from "react"
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./common/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from "./auth/UserContext";
import JoblyApi from './JoblyAPI';

function App() {
  const [token, setToken] = useState(checkToken)
  const user = token ? decodeToken(token) : null;
  
  function checkToken() {
    if(localStorage.getItem('token')) {
      const lToken = localStorage.getItem('token');
      JoblyApi.token = lToken;
      return lToken;
    }
    return null;
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

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user }}>
      <div className="App">
        <NavBar />
        <Routes updateToken={updateToken} removeToken={removeToken} />
      </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
