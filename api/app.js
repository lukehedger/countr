"use strict";

var mongoose = require('mongoose');
var userSchema = require('./model/User');

let App = function () {

  var User = mongoose.model('User', userSchema);

  var user = new User({
    name: 'Luke',
    password: 'safe'
  });

  // user.save(function (err, user) {
  //   if (err) return console.error(err);
  //
  //   User.find(function (err, users) {
  //     if (err) return console.error(err);
  //     console.log(users);
  //   })
  // });

}

module.exports = App;
