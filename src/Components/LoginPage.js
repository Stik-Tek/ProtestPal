// LoginPage.js

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function LoginPage() {
  // State for storing user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // You can add login logic here, e.g., sending a request to your backend
    // for authentication.
    console.log('Email:', email);
    console.log('Password:', password);
    // Reset the form fields
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h2 className="mt-5">Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
