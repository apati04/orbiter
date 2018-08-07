import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Route</h1>
      <Link to='/login'><button>To Login</button></Link>
      <Link to='/signup'><button>To Signup</button></Link>
    </div>
  );
};

export default Home;
