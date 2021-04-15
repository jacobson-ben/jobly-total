import { useState } from 'react';
import '../form.css';

function ProfileForm({ userData, updateUser}) {

  const initialState = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: ""
  }
  
  
  const [formData, setFormData] = useState(initialState)

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData( fData => ({ ...fData, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    updateUser({...formData});
    setFormData({...formData, password:""});
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={userData.username}
          onChange={handleChange}
          disabled
        />
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
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ProfileForm;