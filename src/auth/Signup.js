import AuthForm from './AuthForm'
import JoblyApi from '../JoblyAPI'

function Signup({updateToken}) {

  async function register(formData) {
    let response = await JoblyApi.signup(formData);
    updateToken(response)
  }

  return (
    <div>
      <h1>Signup</h1>
      <AuthForm authentication={register} type={"signup"}/>
    </div>
  )
}

export default Signup;