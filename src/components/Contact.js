import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Contact() {
    return (
        <div className="contact-section" style={{ padding: '4rem 0', backgroundColor: 'var(--bg)' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <h2 className="mb-4 text-center">Contact Me</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Your message..." />
                            </Form.Group>

                            <div className="text-center">
                                <Button variant="dark" type="submit">
                                    Send Message
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}