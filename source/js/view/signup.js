var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {

    return {

    };

  },

  onSignupSubmit: function(e) {

    e.preventDefault();

    console.log('signup');

    // TODO - fire controllers/userCreate -> how?

  },

  render: function() {

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

});
