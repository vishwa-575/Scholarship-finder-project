const mongoose = require('mongoose');

const ScholarshipSchema = new mongoose.Schema({
  title: String,
  eligibility: String,
  category: String,
  academicLevel: String,
  gender: String,
  state: String,
  income: Number,
  link: String
});

module.exports = mongoose.model('Scholarship', ScholarshipSchema);