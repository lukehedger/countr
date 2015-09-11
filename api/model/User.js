"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let User = new Schema({
  id:  { type: String, required: true, unique: true },
  name:  { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

User.pre('save', function(next) {

  // get the current date
  var currentDate = new Date();

  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at) {
    this.created_at = currentDate;
  }

  next();

});

module.exports = User;
