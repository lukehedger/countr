"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let Count = new Schema({
  id:  { type: String, required: true, unique: true },
  counter:  { type: String, required: true },
  created_at: Date
});

Count.pre('save', function(next) {

  var currentDate = new Date();

  if (!this.created_at) {
    this.created_at = currentDate;
  }

  next();

});

module.exports = Count;
