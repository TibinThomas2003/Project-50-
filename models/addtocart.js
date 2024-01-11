// models/models.js
const mongoose = require('mongoose');

// Product model
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  category: String,
  imgurl: String, // Assuming you want to store the image URL
});

const Product = mongoose.model('Product', productSchema);

// Cart model
const cartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  Imageurl:String,
  quantity: Number,
  description: String,
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = { Product, Cart };
