const mongoose = require('mongoose');

const collection4Schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true }
});

const Collection4 = mongoose.model('Collection4', collection4Schema);

module.exports = Collection4;