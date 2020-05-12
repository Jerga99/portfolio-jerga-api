

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  title: { type: String },
  description: String
})

module.exports = mongoose.model('Portfolio', portfolioSchema);
