import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Fragment>
        <Container fluid className='shadow'>
            <Row>
                <Col className='bg-secondary p-5 text-center'>
                    <p>Copyright © 2025 Javed Ali.</p>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default Footer