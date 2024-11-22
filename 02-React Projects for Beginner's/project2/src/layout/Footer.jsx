import React from 'react'
import {Col, Container, Row} from 'react-bootstrap';
const Footer = () => {
  return (
    <>
        <Container fluid className='shadow'>
            <Row>
                <Col className='bg-primary p-5 text-center'>
                    <p className='text-white'>Copyright © 2025 Javed Ali.</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Footer