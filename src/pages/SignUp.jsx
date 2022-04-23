import React, { useState, useEffect } from 'react'
import Navbar from '../component/NavBar';
import { Link, Navigate } from 'react-router-dom';


const SignUp = () => {
  const [state, setState] = useState ({name:"", userName:"", email:"", password:"" })
  const [LoggedIn, setLoggedIn] = useState(false)

  const handleSignUp = (e) => {
    const {name, value} = e.target;
    setState(prevState => ({...prevState, [name]:value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(state))

    if(state.email != "" && state.password != "" )  {
      // submit registration details
      localStorage.setItem("user", JSON.stringify(state))
      setLoggedIn(true)
    }else{
      alert("email and password field is required")
    }
  }
  return (
    LoggedIn ? <Navigate to="/login" /> :
    <div>
      <Navbar />
        <div className='container'>
      <form className='loginForm' action="" onSubmit={handleSubmit}>
      <legend><h1>Sign Up</h1></legend>
        <div className="fillform">
        <label htmlFor="name"> Name</label>
        <input type="text" name='name' value={state.name} placeholder="Please, input your full Name" onChange={handleSignUp} />          
        </div>
        <div className="fillform">
        <label htmlFor="">UserN</label>
        <input type="text" name='userName' value={state.userName} placeholder="Please, input your User Name" onChange={handleSignUp}/>          
        </div>
        <div className="fillform">
        <label htmlFor="">Email</label>
        <input type="email" name='email' value={state.email} placeholder="Please, input your User email" onChange={handleSignUp} />
        </div>
        <div className="fillform">
        <label htmlFor="">Password</label>
        <input type="password" name='password' value={state.password} placeholder="Please, input your password" onChange={handleSignUp} />
        </div>
        <input id='formSubmit' type="submit" value={"Login"} />
      </form>

    </div>
    </div>
  )
}

export default SignUp