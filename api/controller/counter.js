"use strict";

var mongoose = require('mongoose');
var uniqid = require('uniqid');
var schema = require('../model/Counter');

var Counter = mongoose.model('Counter', schema);

module.exports = {

  // TODO - write mongoose queries

  create($) {

    console.log('create counter');

    let id = uniqid();

    // TODO - get form values from $.body
    console.log($.body);

    // create a new user
    var newCounter = Counter({
      id: id,
      name: 'beer',
      value: 4,
      owner: '',
      icon: 'beer.png'
    });

    // newCounter.save(function(err) {
    //   if (err) throw err;
    //
    //   console.log('Counter created!');
    // });

    $.return();

  },

  read($) {

    console.log('read');

    $.return();

  },

  update($) {

    console.log('update');

    $.return();

  },

  delete($) {

    console.log('delete');

    $.return();

  }

}
