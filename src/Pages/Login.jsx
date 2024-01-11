// Login.jsx
import React from 'react';
import styled from 'styled-components';

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

const Link = styled.span`
  cursor: pointer;
  color: #007bff;
`;

const Login = () => {
  const handleLogin = () => {
    // Add your login logic here
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleLogin}>
        <Label htmlFor="email">Email ID:</Label>
        <Input type="email" id="email" name="email" />

        <Label htmlFor="password">Password:</Label>
        <Input type="password" id="password" name="password" />

        <Button type="submit">Login</Button>

        <Message>
          Don't have an account? <Link>Sign up here</Link>
        </Message>
      </Form>
    </Container>
  );
};

export default Login;
