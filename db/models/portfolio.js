

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  title: { type: String, required: true, maxlength: 128 },
  company: { type: String, required: true, maxlength: 64},
  companyWebsite: { type: String, required: true, maxlength: 128},
  location: { type: String, required: true },
  jobTitle: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true},
  endDate: { type: Date },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Portfolio', portfolioSchema);
