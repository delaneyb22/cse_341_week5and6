const mongoose = require('mongoose');

const collection2Schema = new mongoose.Schema({
  title: String,
  content: String
});

module.exports = mongoose.model('Collection2', collection2Schema);