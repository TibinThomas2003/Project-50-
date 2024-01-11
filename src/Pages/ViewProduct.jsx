import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ViewProduct.css'; // Import the CSS file

const ViewProduct = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products/659ee81f09a1dd2a8c37d42f');
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }

        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, []);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity >= 1 ? newQuantity : 1);
  };

  const handleAddToCart = async () => {
    const confirmMessage = `Are you sure you want to add ${quantity} ${product.pname} to the cart?`;

    if (window.confirm(confirmMessage)) {
      try {
        const { _id, description, price } = product;
        const response = await fetch('http://localhost:5000/api/cart/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            productId: _id,
            quantity,
            description,
            price,
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Failed to add item to the cart. Server response: ${errorText}`);
        }

        console.log(`Added ${quantity} ${product.pname} to the cart and database.`);
      } catch (error) {
        console.error('Error adding item to the cart:', error);
      }
    } else {
      console.log('Adding to cart canceled.');
    }
  };

  return (
    <div className="product-container">
      <h1 className="product-title">{product.pname}</h1>
      <div className="carousel-container">
        <Carousel showThumbs={false} showStatus={false} dynamicHeight={false}>
          <div>
            <img className="product-image" src={product.img} alt={product.pname} />
          </div>
        </Carousel>
      </div>
      <div className="product-details">
        <p className="product-description">Description: {product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
        <p className="product-category">Category: {product.category}</p>
        <p className="product-stock">Stock: {product.stock}</p>
      </div>
      <div className="quantity-container">
        <label className="quantity-label">
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="quantity-input"
          />
        </label>
      </div>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        <span>Add to Cart</span>
        <i className="fas fa-cart-plus"></i>
      </button>
    </div>
  );
};

export default ViewProduct;
