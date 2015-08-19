import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  constructor(props) {

    super(props);

  }

  render() {

    return (
      <div>
        <h1>App</h1>

        {/* TODO - move this to a nav component */}
        <Link to="/login">Login</Link>{' | '}
        <Link to="/signup">Signup</Link>{' | '}
        <Link to="/counters">Counters</Link>{' | '}
        <Link to="/profile">Profile</Link>

        {/* render containers dynamically based on route */}
        {this.props.children}
      </div>
    );

  }

}
