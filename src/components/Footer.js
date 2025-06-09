import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer({ darkMode }) {
    return (
        <footer bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'}  className='text-center py-4 mt-5 shadow-sm'>
            <Container>
                <p className='mb-1'>&copy; {new Date().getFullYear()} My photography portfolio</p>
                <p className='mb-0'>
                    Built by: Ondřej Beránek
                </p>
            </Container>
        </footer>
    );
}