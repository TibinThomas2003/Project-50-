require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define your product schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  category: String,
});

const Product = mongoose.model('Product', productSchema);

// Define your cart schema
const cartSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: Number,
});

const Cart = mongoose.model('Cart', cartSchema);

// Route to handle adding a product to the cart
app.post('/api/cart/add', async (req, res) => {
  try {
    console.log('Received request to add item to the cart:', req.body);
    const { productId, quantity } = req.body;

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Create a new item in the cart
    const cartItem = new Cart({
      name: String,
      description: String,
      price: Number,
      category: String,
    });

    // Save the cart item to the database
    await cartItem.save();

    console.log('Item added to the cart:', cartItem);
    res.status(201).json({ message: 'Item added to the cart', cartItem });
  } catch (error) {
    console.error('Error adding item to the cart:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to get product details by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Other routes...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 