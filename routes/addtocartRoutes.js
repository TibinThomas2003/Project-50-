// routes/routes.js
const express = require('express');
const { Product, Cart } = require('../models/addtocart'); // Adjust the path accordingly

const router = express.Router();

// Route to handle adding a product to the cart
router.post('/api/cart/add', async (req, res) => {
  try {
    const { productId,description, quantity ,price, Imageurl} = req.body;

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Check if there is enough stock
    if (quantity > product.stock) {
      return res.status(400).json({ error: 'Not enough stock available' });
    }

    // Create a new item in the cart
    const cartItem = new Cart({
      productId,
      description,
      quantity,
      price,
      Imageurl,
    });

    // Save the cart item to the database
    await cartItem.save();

    // Update the product stock
    product.stock -= quantity;
    await product.save();

    res.status(201).json({ message: 'Item added to the cart', cartItem });
  } catch (error) {
    console.error('Error adding item to the cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
