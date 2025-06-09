import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';

export default function NavigationBar({ darkMode, setDarkMode }) {
  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Form.Check 
              type="switch"
              id="theme-switch"
              label={darkMode ? 'Dark' : 'Light'}
              className="ms-3 mt-1"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

