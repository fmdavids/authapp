// import userEvent from '@testing-library/user-event';
import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../component/NavBar';

export const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <>
      <Navbar />
    <div className='loginForm'>
      <h1>Welcome to Your Dashboard</h1>
      <p>Your Full name : {user.name} </p>
      <p>Your User name : {user.userName} </p>
      <p>Your Email is : {user.email}</p>
      <Link to="/logout">Logout</Link>
    </div>
    </>
  )
}
export default Dashboard;