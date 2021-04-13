

function Home({user}) {
  return (
    <div>
      <h1><b>Jobly</b></h1>
      <h4>All the jobs in one, convenient place.</h4>
      <h2>Welcome Back, {user.username} </h2>
    </div>
  )
}

export default Home;