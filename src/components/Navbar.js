import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function NavigationBar({ darkMode, setDarkMode }) {
  const handleToggle = () => {
    setDarkMode(prev => !prev);
  };

  const { i18n } = useTranslation();
  return (
    <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <div className='ms-3'>
              <button 
                onClick={handleToggle}
                className={`magic-toggle ${darkMode ? 'active' : ''}`}
                aria-label='Toggle theme'
              >
                <span className='magic-knob'>
                  <span className='icon-sun'>🌞</span>
                  <span className='icon-moon'>🌙</span>
                </span>
              </button>
              <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className='form-select form-select-sm ms-3'
              > 
                <option value='cz'>CS</option>
                <option value='en'>EN</option>
              </select>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

