var domready = require('domready');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

// Views
var Main = require('./view/main');
var Home = require('./view/home');
var Login = require('./view/login');
var Signup = require('./view/signup');

var app = {

  /**
   * Setup and configs
   */
  init: function() {

    React.initializeTouchEvents(true);

  },


  /**
   * Renders a React instance
   */
  render: function() {

    // setup routes
    var routes = (
      <Route handler={Main}>
        <Route path="/" handler={Home}/>
        <Route path="login" handler={Login}/>
        <Route path="signup" handler={Signup}/>
      </Route>
    );

    // render view componenets dynamically thru Router
    Router.run(routes, Router.HistoryLocation, function(Root) {
      React.render(<Root/>, document.querySelector('.main'));
    }.bind(this));

  }

};


domready(function() {

  app.init();
  app.render();

});
