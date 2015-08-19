import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import configureStore from '../store/configureStore';

// containers
import App from './App';
import Login from './Login';
import Signup from './Signup';
import Counters from './Counters';
import Profile from './Profile';

const store = configureStore();

export default class Root extends Component {

  render() {

    return (
      <div>
        <Provider store={store}>
          {() =>
            <Router history={this.props.history}>
              <Route path="/" component={App}>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/counters" component={Counters} />
                <Route path="/profile" component={Profile} />
              </Route>
            </Router>
          }
        </Provider>
      </div>
    );

  }

}
