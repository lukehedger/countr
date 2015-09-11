"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let Counter = new Schema({
  id:  { type: String, required: true, unique: true },
  name:  { type: String, required: true },
  value: { type: Number, required: true },
  owner: { type: String, required: true },
  icon: String,
  created_at: Date,
  updated_at: Date
});

Counter.pre('save', function(next) {

  var currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at) {
    this.created_at = currentDate;
  }

  next();

});

module.exports = Counter;
