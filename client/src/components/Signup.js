import React from 'react';
import SignupForm from './Form/SignupForm';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <h1>Signup Route</h1>
      <SignupForm />
      <Link to='/'><button>Back to home</button></Link>
    </div>
  );
};

export default Signup;
