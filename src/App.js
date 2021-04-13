import './App.css';
import Routes from "./Routes"
import { decodeToken } from "react-jwt"
import {useState} from "react"
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./nav/NavBar"

function App() {
  const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0.FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc")
  const user = token ? decodeToken(token) : null;

  function updateToken(token) {
    setToken(token);
  }

  function removeToken() {
    setToken(null);
  }


  return (
    <BrowserRouter>
    <div className="App">
      <NavBar user={user}/>
      <Routes updateToken={updateToken} removeToken={removeToken} user={user}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
