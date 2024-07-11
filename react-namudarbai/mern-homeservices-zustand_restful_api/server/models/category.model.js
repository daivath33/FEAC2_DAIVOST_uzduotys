const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
  iconUrl: {
    type: String,
    required: true,
  }
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;