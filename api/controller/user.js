"use strict";

var mongoose = require('mongoose');
var schema = require('../model/User');

var User = mongoose.model('User', schema);

module.exports = {

  // TODO - write mongoose queries

  create($) {

    console.log('create');

    $.return();

  },

  read($) {

    console.log('read', $.params.id);

    $.data.id = $.params.id;

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
