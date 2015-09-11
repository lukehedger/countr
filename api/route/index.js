"use strict";

var UserController = require('../controller/user');
var CounterController = require('../controller/counter');
var CountController = require('../controller/count');

let routes = function (server) {

  server.get('/', function($){

    $.end('Hello World!');

  });


  // /user

  server.post('/user/create', UserController.create, function($){

    $.end();

  });

  server.get('/user/read/:id', UserController.read, function($){

    // TODO - $.json -> return JSON
    // $.json inherits any props of $.data
    // use $.error to add error prop to $.data

    $.end(`Hello ${$.data.id}!`);

  });

  server.put('/user/update/:id', UserController.update, function($){

    $.end();

  });

  server.delete('/user/delete/:id', UserController.delete, function($){

    $.end();

  });


  // /counter

  server.post('/counter/create', CounterController.create, function($){

    $.end();

  });

  server.get('/counter/read/:owner', CounterController.read, function($){

    $.end();

  });

  server.put('/counter/update/:id', CounterController.update, function($){

    $.end();

  });

  server.delete('/counter/delete/:id', CounterController.delete, function($){

    $.end();

  });


  // /count

  server.post('/count/create', CountController.create, function($){

    $.end();

  });

  server.get('/count/read/:counter', CountController.read, function($){

    $.end();

  });

  server.put('/count/update/:id', CountController.update, function($){

    $.end();

  });

  server.delete('/count/delete/:id', CountController.delete, function($){

    $.end();

  });

};

module.exports = routes;
