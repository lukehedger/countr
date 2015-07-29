var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {

    return {
      count: 0
    };

  },

  onCounterClick: function(e) {

    this.setState({
      count: this.state.count + 1
    });

  },

  render: function() {

    return (
      <div>
        <h1>Counter</h1>
        <button onClick={this.onCounterClick}>count: {this.state.count}</button>
      </div>
    );

  }

});
