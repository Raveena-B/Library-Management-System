import React from 'react';
import image1 from '../asserts/images/repo.png';
import './style.css';
import { Card } from '@mui/material';

const Login = () => {
  return (
    <div className="login-container">
       <div className="login-banner">
        <img src={image1} alt="Banner" />
      </div>
      <div className="login-form">
        <h2 style={{textAlign:"center"}}>Sign In</h2>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          
          <label htmlFor="password">Forget Password?</label>
          <button type="submit" className='styleform'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
