// src/Components/Login.js

import React from 'react';
import './style.css'; // Import the CSS file
import bannerImage from "../asserts/images/repo.png"

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="login-image">
        <img src={bannerImage} alt="Banner" />
      </div>
    </div>
  );
};

export default Login;
