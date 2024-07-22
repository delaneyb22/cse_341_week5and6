const mongoose = require('mongoose');

const collection3Schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

const Collection3 = mongoose.model('Collection3', collection3Schema);

module.exports = Collection3;