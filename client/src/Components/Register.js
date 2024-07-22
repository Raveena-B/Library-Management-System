import React from 'react';
import image1 from '../asserts/images/rr.jpg';
import './style.css';
import { Card } from '@mui/material';

const Register = () => {
  return (
    <div className="login-container">
      <div className="login-banner">
        <img src={image1} alt="Banner" />
      </div>
      <div className="login-form">
        <h2 style={{ textAlign: "center" }}>Register</h2>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
          
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirm-password" required />
          
          <button type="submit" className="styleform">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
