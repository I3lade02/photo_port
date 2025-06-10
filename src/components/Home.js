import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className='home-section' style={{ backgroundColor: 'var(--bg)', padding: '4rem 0'}}>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <h1 className='display-4'>{t('home.headline')}</h1>
                        <p className='lead mt-4'>
                            {t('home.subtext')}
                        </p>
                        <Button variant='dark' href='/gallery' className='mt-3'>
                            {t('home.viewGallery')}
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