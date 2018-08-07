import React from 'react';
import LoginForm from './Form/LoginForm';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h1>Login Route</h1>
      <LoginForm />
      <Link to='/'><button>Back to home</button></Link>
    </div>
  );
};

export default Login;
