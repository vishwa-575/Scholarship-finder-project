const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  scholarship: { type: mongoose.Schema.Types.ObjectId, ref: 'Scholarship' },
  status: { type: String, default: "Applied" }
});

module.exports = mongoose.model('Application', ApplicationSchema);