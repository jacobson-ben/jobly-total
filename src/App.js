import './App.css';
import Routes from "./Routes"
import { decodeToken } from "react-jwt"
import {useState, useEffect} from "react"
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./common/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from "./auth/UserContext";
import JoblyApi from './JoblyAPI';

function App() {
  const [token, setToken] = useState(null)
  const user = token ? decodeToken(token) : null;
  console.log('token', token);
  
  //pass down setter function instead of wrapper function. 
  function updateToken(token) {
    setToken(t => token);
  }

  function removeToken() {
    setToken(null);
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
