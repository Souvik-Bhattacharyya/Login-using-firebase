import React, { useState } from 'react';
import { FaUser, FaUserPlus } from "react-icons/fa";
import Login from './Login/Login';
import Signup from './Signup/Signup';
import '../../App.css';

const Container = () => {
  const [isActive, setIsActive] = useState(true);


  return (
    <div className='card'>
      <div className="card-head">
        <button className={`btn ${isActive ? "active" : ""}`} onClick={() => setIsActive(true)}>
          <FaUser className='icons' />
          Login
        </button>
        <button className={`btn ${isActive ? "" : "active"}`} onClick={() => setIsActive(false)}>
          <FaUserPlus className='icons' />
          Sign Up
        </button>
      </div>
      <div className="card-body">
        <Login isActive={isActive} />
        <Signup isActive={isActive} />
      </div>
    </div>
  )
}

export default Container