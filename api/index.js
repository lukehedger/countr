"use strict";

var server = require('diet')();
var mongoose = require('mongoose');

// App
var App = require('./app');

// database
mongoose.connect('mongodb://localhost/countr');

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

  // db connected - launch app
  App();

});

// server
server.listen('http://localhost:8000');

// routes
require('./route')(server);
