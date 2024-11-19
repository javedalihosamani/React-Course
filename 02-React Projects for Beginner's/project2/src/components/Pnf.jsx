import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Pnf = () => {
  return (
    <Container className='my-5'>
        <Row>
            <Col>
                <div className='p-5 bg-danger text-white text-center border rounded shadow'>
                    <h1>PAGE NOT FOUND..!</h1>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Pnf;