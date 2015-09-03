import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Login from '../component/login';
import * as UserActions from '../action/user';

class LoginContainer extends Component {

  constructor(props) {

    super(props);

  }

  componentDidMount() {

    const { fetchUser } = this.props;

    // TODO - this would be called with username/password from Login dumb-component for authentication
    // or maybe abstacted within a authUser() action ?
    fetchUser(0);

  }

  render() {

    return (
      <div>
        <h1>Login</h1>
        {/* TODO - add Login dumb-component here */}
        {/* <Login /> */}
      </div>
    );

  }

}

function mapStateToProps(state) {

  const { user } = state;

  return {
    user
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
