import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function About() {
  return (
    <div className="about-section" style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={5} className="text-center mb-4 mb-md-0">
            <Image
              src="https://source.unsplash.com/300x300/?portrait,photographer"
              alt="Photographer"
              roundedCircle
              fluid
              className="shadow"
            />
          </Col>
          <Col md={7}>
            <h2>About Me</h2>
            <p className="mt-3">
              I'm a passionate photographer who finds beauty in everyday moments. Whether I'm capturing landscapes,
              portraits, or candid street scenes, I aim to tell authentic stories through light, texture, and emotion.
            </p>
            <p>
              With a background in [your background here], I approach photography as both an art and a form of connection.
              My goal is to make viewers feel something — to pause, reflect, and see the world a little differently.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


