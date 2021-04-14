import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AuthForm({authentication, type}) {
  const initialState = (type === 'signup' ?
  {username:"", password:"", firstName: "", lastName: "", email:""} 
  : {username: "", password: ""});
  const history = useHistory();
  const [formData, setFormData] = useState(initialState)

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData( fData => ({ ...fData, [name]: value }));
  }
  
  function handleSubmit(evt) {
    evt.preventDefault();
    authentication({ ...formData });
    setFormData(initialState);
    history.push("/");
  }
  
  function signUpOrLogin() {
    if(type === 'signup') {
      return (
        <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          />
        </div>
        )
      }
    }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        { signUpOrLogin() }
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AuthForm;