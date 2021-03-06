import AuthForm from './AuthForm'
import JoblyApi from '../JoblyAPI'

function Login({updateToken}) {
    
  async function login(formData) {
    let response = await JoblyApi.login(formData);
    updateToken(response)
  }

  return (
    <div>
      <h1>Login</h1>
      <AuthForm authentication={login} type="login"/>
    </div>
  )
}

export default Login;