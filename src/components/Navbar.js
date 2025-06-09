import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavigationBar() {
    return (
        <Navbar bg='light' expand='lg' sticky='top'>
            <Container>
                 <Navbar.Brand as={Link} to='/'>Lukáš Kadlec</Navbar.Brand>
                 <Navbar.Toggle aria-controls='basic-navbar-nav' />
                 <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/gallery'>Gallery</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                    </Nav>
                 </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

