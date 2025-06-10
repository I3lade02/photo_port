import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import ImageCard from './ImageCard';

const images = [
  { src: 'https://picsum.photos/id/1015/600/400', title: 'Mountains' },
  { src: 'https://picsum.photos/id/1025/600/400', title: 'Dog Portrait' },
  { src: 'https://picsum.photos/id/1035/600/400', title: 'Sea' },
  { src: 'https://picsum.photos/id/1045/600/400', title: 'City Life' },
  { src: 'https://picsum.photos/id/1055/600/400', title: 'Waves' },
  { src: 'https://picsum.photos/id/1065/600/400', title: 'Countryside' },
];

export default function Gallery() {
    
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (img) => {
        setSelectedImage(img);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedImage(null);
    }

    return (
    <div className="gallery-section" style={{ padding: '4rem 0', backgroundColor: 'var(--bg)' }}>
      <Container>
        <h2 className="mb-4 text-center">Gallery</h2>
        <Row>
          {images.map((img, index) => (
            <Col key={index} xs={12} sm={6} md={4}>
              <div onClick={() => handleImageClick(img)}>
                <ImageCard src={img.src} title={img.title} />
              </div>
            </Col>
          ))}
        </Row>

        <Modal show={showModal} onHide={handleClose} centered size="lg">
          <Modal.Body className="p-0 position-relative">
            <button
              onClick={handleClose}
              className="btn btn-light position-absolute"
              style={{ top: '10px', right: '10px', zIndex: 10 }}
            >
              ✕
            </button>
            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-100"
                style={{ maxHeight: '90vh', objectFit: 'contain' }}
              />
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}