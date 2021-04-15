import { useState } from 'react';

function SignupForm({authentication, type}) {
  const initialState = {username:"", password:"", firstName: "", lastName: "", email:""}
  const [formData, setFormData] = useState(initialState)

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData( fData => ({ ...fData, [name]: value }));
  }
  
  function handleSubmit(evt) {
    evt.preventDefault();
    authentication({ ...formData });
    setFormData(initialState);
  }
  
  function signUpOrLogin() {
    if(type === 'signup') {
      return (
        <div>
        <label for="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label for="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          value={formData.username}
          onChange={handleChange}
        />
        <label for="email">Email</label>
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
        <label for="username">Username</label>
        <input
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {signUpOrLogin()}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SignupForm;