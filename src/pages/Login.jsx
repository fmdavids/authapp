import React, {useState, useEffect} from 'react'
import Navbar from '../component/NavBar';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
  
  const [state, setState] = useState({email:"", password:""})
  const user = JSON.parse(localStorage.getItem("user"))
  const [LoggedIn, setLoggedIn] = useState(false)

  const handleLogin = (e) => {
    const {name, value} = e.target
    setState(prevState =>({...prevState, [name]:value}))
  }



  const handleSumit = (e) => {
    e.preventDefault();
    if(state.email == user.email && state.password == user.password){
      setLoggedIn(true)
    } else{
      alert("email or password incorrect")
    }

    // useEffect = () =>{
    //   const user = JSON.parse(localStorage.getItem("user"))
    //   console.log(user.name)
    //   console.log(user.userName)
    //   console.log(user.email)
    // }
  }
  console.log(user)
  return (
    LoggedIn ? <Navigate to="/dashboard" /> :
    <div className="">
    <div className='container'>
      <form className='loginForm' action="" onSubmit={handleSumit}>
      <legend><h1>Login</h1></legend>
        <div className="fillform">
        <label htmlFor="">Email</label>
        <input type="email" name='email' value={state.email} placeholder="Please, input your email" onChange={handleLogin} />
        </div>
        <div className="fillform">
        <label htmlFor="">Password</label>
        <input type="password" name='password' value={state.password} placeholder="Please, input your password" onChange={handleLogin} />
        </div>
        <input id='formSubmit' type="submit" value={"Login"} />
      </form>

    </div>
    </div>
  )
}

export default Login;