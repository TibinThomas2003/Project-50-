  import React, { useState } from 'react';
  import styled from 'styled-components'; // Add this import statement
  import cart_icon from '../Components/Assets/cart_icon.png';
  import delete_icon from '../Components/Assets/delete_icon.png';
  import gamingPCImage from '../Pages/Assets/PC1.png';

  const Container = styled.div`
    width: 60%;
    max-width: 1000px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  `;

  const Header = styled.div`
    text-align: center;
    margin-bottom: 20px;
  `;

  const ProductContainer = styled.div`
    width: 100%;
    margin-bottom: 20px;
  `;

  const GridItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: 12px;
    border: 2px solid #3d5a80; /* Ocean Blue */
    transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    }
  `;

  const CartIcon = styled.img`
    width: 60px;
    margin-bottom: 15px;
    filter: invert(48%) sepia(54%) saturate(1033%) hue-rotate(319deg) brightness(88%) contrast(93%);
  `;

  const ProductImage = styled.img`
    width: 80px;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  `;

  const ProductDetails = styled.div`
    flex-grow: 1;
    text-align: left;
  `;

  const StepperContainer = styled.div`
    display: flex;
    align-items: center;
  `;

  const StepperButton = styled.button`
    background-color: #f2cc8f; /* Sand Yellow */
    border: none;
    border-radius: 50%;
    color: #3d5a80; /* Ocean Blue */
    font-size: 14px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #d8b67a; /* Darker Sand Yellow */
    }
  `;

  const QuantityDisplay = styled.div`
    margin: 0 10px;
    font-size: 14px;
    color: #3d5a80; /* Ocean Blue */
  `;

  const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
  `;

  const BuyNowButton = styled.button`
    background-color: #00688b; /* Teal Blue */
    color: white;
    width: 100px;
    height: 50px;
    padding: 12px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.4s ease-in-out;

    &:hover {
      background-color: #004165; /* Darker Teal Blue */
    }
  `;

  const DeleteIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    cursor: pointer;
  `;

  const Subtotal = styled.div`
    text-align: left;
    margin-bottom: 10px;
    font-size: 16px;
  `;

  const ProceedToBuyButton = styled.button`
    background-color: #008000; /* Green */
    color: white;
    padding: 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.4s ease-in-out;
    display: block;
    margin: 0 auto;

    &:hover {
      background-color: #006400; /* Darker Green */
    }
  `;

  const Cart = () => {
    const [cartItems, setCartItems] = useState([
      {
        _id: 1,
        name: 'Gaming PC - Stealth Edition',
        price: 1500,
        description: 'A powerful gaming PC with RGB lighting and high-end components.',
        image: gamingPCImage,
        quantity: 1,
      },
      {
        _id: 2,
        name: 'Gaming PC - Galactic Beast',
        price: 2000,
        description: 'Unleash the power of the Galactic Beast with the latest graphics card and ultra-fast processor.',
        image: gamingPCImage,
        quantity: 1,
      },
      {
        _id: 3,
        name: 'Gaming PC - Neon Ninja',
        price: 1800,
        description: 'Become a gaming ninja with the Neon Ninja PC featuring sleek design and exceptional performance.',
        image: gamingPCImage,
        quantity: 1,
      },
      {
        _id: 4,
        name: 'Gaming PC - Neon Ninja',
        price: 1800,
        description: 'Become a gaming ninja with the Neon Ninja PC featuring sleek design and exceptional performance.',
        image: gamingPCImage,
        quantity: 1,
      },
      {
        _id: 5,
        name: 'Gaming PC - Neon Ninja',
        price: 1800,
        description: 'Become a gaming ninja with the Neon Ninja PC featuring sleek design and exceptional performance.',
        image: gamingPCImage,
        quantity: 1,
      },
    ]);


    const handleQuantityChange = (itemId, newQuantity) => {
      if (newQuantity > 0 && newQuantity <= 10) {
        setCartItems((prevItems) =>
          prevItems.map((item) => (item._id === itemId ? { ...item, quantity: newQuantity } : item))
        );
      } else if (newQuantity <= 0) {
        alert('At least one should be selected');
      } else if (newQuantity > 10) {
        alert('Maximum limit reached');
      }
    };

    const handleDelete = (itemId) => {
      // Display an alert box before deleting the item
      const confirmDelete = window.confirm('Are you sure you want to remove this item from the cart?');
    
      if (confirmDelete) {
        setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
      }
    };
    

    const handleBuyNow = (item) => {
      console.log(`Buying ${item.quantity} ${item.name}(s)`);
    };

    const calculateSubtotal = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const cartItemCount = cartItems.length;

    return (
      <Container>
        <Header>
          <h1 style={{ color: '#3d5a80', fontSize: '24px' }}>Welcome to Cart</h1>
        </Header>
        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center' }}>
            <CartIcon src={cart_icon} alt="Cart Icon" />
            <p style={{ color: '#8b4513', fontSize: '16px' }}>Oh no! Your cart is empty. Time to add some magic!</p>
          </div>
        ) : (
          <>
            <Subtotal>
              <strong>Subtotal: ${calculateSubtotal()}</strong>
            </Subtotal>
            <ProceedToBuyButton style={{ fontSize: '16px' }}>Proceed to Buy ({cartItemCount} items)</ProceedToBuyButton>
            <br />
            {cartItems.map((item) => (
              <ProductContainer key={item._id}>
                <GridItem>
                  <ProductImage src={item.image} alt={`${item.name} Image`} />
                  <ProductDetails>
                    <h3 style={{ color: '#3d5a80', fontSize: '20px' }}>{item.name}</h3>
                    <p>${item.price}</p>
                    <p>{item.description}</p>
                  </ProductDetails>
                  <QuantityContainer>
                    <StepperContainer>
                      <StepperButton onClick={() => handleQuantityChange(item._id, item.quantity - 1)}>-</StepperButton>
                      <QuantityDisplay>{item.quantity}</QuantityDisplay>
                      <StepperButton onClick={() => handleQuantityChange(item._id, item.quantity + 1)}>+</StepperButton>
                    </StepperContainer>
                    &nbsp;&nbsp;
                    <BuyNowButton onClick={() => handleBuyNow(item)}> Buy Now </BuyNowButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <DeleteIcon src={delete_icon} alt="Delete Icon" onClick={() => handleDelete(item._id)} />
                  </QuantityContainer>
                </GridItem>
              </ProductContainer>
            ))}
          </>
        )}
      </Container>
    );
  };

  export default Cart;
