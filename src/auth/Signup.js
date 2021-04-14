import SignupForm from './SignupForm'
import JoblyApi from '../JoblyAPI'

function Signup({updateToken}) {

  async function register(formData) {
    let response = await JoblyApi.signup(formData);
    updateToken(response)
  }

  return (
    <div>
      <h1>Signup</h1>
      <SignupForm authentication={register} type={"signup"}/>
    </div>
  )
}

export default Signup;