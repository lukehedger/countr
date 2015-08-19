import React, { Component } from 'react';

export default class Signup extends Component {

  constructor(props) {

    super(props);
    this.onSignupSubmit = this.onSignupSubmit.bind(this);

  }

  render() {

    return (
      <div>
        <h1>Signup</h1>
        <form action="">
          <input type="text" value="" placeholder="username" />
          <input type="password" value="" placeholder="password" />
          <input type="submit" value="Signup" onClick={this.onSignupSubmit} />
        </form>
      </div>
    );

  }

  onSignupSubmit(e) {

    e.preventDefault();

    console.log('signup');

  }

}
