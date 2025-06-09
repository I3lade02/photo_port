import React from 'react';
import { Card } from 'react-bootstrap';

export default function ImageCard({ src, title}) {
    return (
        <Card className='mb-4 shadow-sm'>
            <Card.Img variant='top' src={src} alt={title} />
            {title && (
                <Card.Body>
                    <Card.Text>{title}</Card.Text>
                </Card.Body>
            )}
        </Card>
    );
}