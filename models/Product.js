// C:/backend/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: false, // You can change this to true if description is always required
  },
  category: {
    type: String,
    required: false, // You can change this to true if category is always required
  },
  image: {
    type: String, // URL to the image
    required: false,
  },
  // Add other fields as needed, e.g.,
  // stock: { type: Number, default: 0 },
  // createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Product',productSchema);
