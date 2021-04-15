import { useState, useEffect, useContext } from 'react';
import JoblyApi from '../JoblyAPI';
import UserContext from '../auth/UserContext';
import ProfileForm from './ProfileForm';

function Profile() {
  const { user } = useContext(UserContext);
  const [userData, setUserData] = useState(null)
  // const [formSubmitted, setFormSubmitted] = useState(false);
  
  useEffect( function getUserData() {
    async function requestUserData() {
      const res = await JoblyApi.getUser(user.username);
      setUserData(userData => res);
      // return setFormSubmitted(false)
    }
   requestUserData();
  }, [])

  async function updateUser(formData) {
    let response = await JoblyApi.updateUser(user.username, formData);
    
  }
  
  if (!userData) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <ProfileForm 
        userData={userData} 
        updateUser={updateUser} 
        // formSubmitted={formSubmitted}
      />
    </div>
  )
}

export default Profile;