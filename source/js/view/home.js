var React = require('react');
var Firebase = require('firebase');
var ReactFire = require('reactfire');

var Counter = require('../module/counter');

module.exports = React.createClass({

  mixins: [ReactFire],

  getInitialState: function() {

    return {
        users: {}
    };

  },

  componentWillMount: function() {

    // connect to firebase
    var db = new Firebase('https://countrapp.firebaseio.com/users');

    // bind firebase ref to component state
    this.bindAsObject(db, 'users');

    // add user -> always make changes direct to DB and not to state as state will be reatively refreshed by DB one-way binding
    // this.firebaseRefs.users.push({
    //   username: "hello"
    // });

    // db.once('value', function(snapshot) {
    //   var data = snapshot.val();
    //   console.log(data);
    // }, function(err) {
    //   console.error(err);
    // });

  },

  render: function() {

    // will re-render whenever firebase/users changes
    console.log(this.state.users);

    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );

  }

});
