"use strict";

var mongoose = require('mongoose');
var schema = require('../model/Count');

var Count = mongoose.model('Count', schema);

module.exports = {

  // TODO - write mongoose queries

  create($) {

    console.log('create');

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
