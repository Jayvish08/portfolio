// models/ClientMessage.js

const mongoose = require('mongoose');

const clientMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Export the model
module.exports = mongoose.model('ClientMessage', clientMessageSchema);