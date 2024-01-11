// Signup.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #007bff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Message = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
`;

const LinkText = styled.span`
  cursor: pointer;
  color: #007bff;
`;

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    address: '',
    pincode: '',
    landmark: '',
    phoneNumber: '',
  });

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup by storing user data in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = {
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      pincode: formData.pincode,
      landmark: formData.landmark,
      phoneNumber: formData.phoneNumber,
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Signup Successful:', newUser);
    // Redirect or perform any action on successful signup
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSignup}>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" onChange={handleChange} required />

        <Label htmlFor="password">Password:</Label>
        <Input type="password" id="password" name="password" onChange={handleChange} required />

        <Label htmlFor="confirmPassword">Confirm Password:</Label>
        <Input type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange} required />

        <Label htmlFor="firstName">First Name:</Label>
        <Input type="text" id="firstName" name="firstName" onChange={handleChange} required />

        <Label htmlFor="lastName">Last Name:</Label>
        <Input type="text" id="lastName" name="lastName" onChange={handleChange} required />

        <Label htmlFor="address">Address:</Label>
        <Input type="text" id="address" name="address" onChange={handleChange} required />

        <Label htmlFor="pincode">Pincode:</Label>
        <Input type="text" id="pincode" name="pincode" onChange={handleChange} required />

        <Label htmlFor="landmark">Landmark:</Label>
        <Input type="text" id="landmark" name="landmark" onChange={handleChange} required />

        <Label htmlFor="phoneNumber">Phone Number:</Label>
        <Input type="tel" id="phoneNumber" name="phoneNumber" onChange={handleChange} required />

        <Button type="submit">Sign Up</Button>

        <Message>
          Already have an account? <LinkText as={Link} to="/login">Login here</LinkText>
        </Message>
      </Form>
    </Container>
  );
};

export default Signup;
