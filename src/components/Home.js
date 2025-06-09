import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Home() {
    return (
        <div className='home-section' style={{ backgroundColor: '#f8f9fa', padding: '4rem 0'}}>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <h1 className='display-4'>Capturing Moments, One shot at a time</h1>
                        <p className='lead mt-4'>
                            Welcome to my photography portfolio - a collection of memories, emotions and light
                        </p>
                        <Button variant='dakr' href='/gallery' className='mt-3'>
                            View gallery
                        </Button>
                    </Col>
                    <Col md={6}>
                        <img
                            src="https://picsum.photos/id/1043/800/600"
                            alt='Photography showcase'
                            className='img-fluid rounded shadow'
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}