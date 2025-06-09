import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageCard from './ImageCard';

const images = [
  { src: 'https://source.unsplash.com/600x400/?nature', title: 'Nature' },
  { src: 'https://source.unsplash.com/600x400/?portrait', title: 'Portrait' },
  { src: 'https://source.unsplash.com/600x400/?city', title: 'Urban' },
  { src: 'https://source.unsplash.com/600x400/?travel', title: 'Travel' },
  { src: 'https://source.unsplash.com/600x400/?wildlife', title: 'Wildlife' },
  { src: 'https://source.unsplash.com/600x400/?abstract', title: 'Abstract' },
];

export default function Gallery() {
    return (
        <div className='gallery-section' style={{ padding: '4rem 0', backgroungColor: '#f8f9fa' }}>
            <Container>
                <h2 className='mb-4 text-center'>Gallery</h2>
                <Row>
                    {images.map((img, index) => (
                        <Col key={index} xs={12} sm={6} md={4}>
                            <ImageCard src={img.src} title={img.title} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}