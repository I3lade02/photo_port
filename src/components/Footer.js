import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <footer className='bg-light text-center py-4 mt-5 shadow-sm' sticky='bottom'>
            <Container>
                <p className='mb-1'>&copy; {new Date().getFullYear()} My photography portfolio</p>
                <p className='mb-0'>
                    Built by: Ondřej Beránek
                </p>
            </Container>
        </footer>
    );
}