import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from '../actions';
import { Link } from 'react-router-dom';

class Home extends Component {
  componentDidMount() {
    this.props.fetchUserData();
  };

  render() {
    console.log(this.props.users);
    return (
      <div>
        <h1>Home Route</h1>
        <Link to='/login'><button>To Login</button></Link>
        <Link to='/signup'><button>To Signup</button></Link>
      </div>
    );
  }
};

function mapStateToProps({ users }) {
  return {
    users
  }
};

export default connect(mapStateToProps, { fetchUserData })(Home);
