import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';

const Counter = () => {
  // const [stateName(Name of Variable), stateHandler(is Used for to update the state value)] = useState(initial Value);

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
      <Container className='my-5'>
        <Row>
          <Col>
            <h1 className="display-5 text-center bg-primary text-white p-3 border-radius rounded">COUNTER COMPONENT</h1>
          </Col>
        </Row>
      </Container>
      <Container className='my-5'>
        <Row>
          <Col>
            <h1 className='text-center text-primary display-3'>{count}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="success rounded-circle" onClick={increment}>+</Button>
            <Button variant="danger rounded-circle float-end" onClick={decrement}>-</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Counter