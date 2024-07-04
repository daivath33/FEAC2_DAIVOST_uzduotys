const mongoose = require("mongoose");

const BusinessSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    contactPerson: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    photos: [{
      type: String,
    }]
  });
  
  const Business = mongoose.model('Business', BusinessSchema);
  module.exports = Business;