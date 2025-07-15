const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  answers: [String], // customize as per your form structure
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FormData', formSchema);
