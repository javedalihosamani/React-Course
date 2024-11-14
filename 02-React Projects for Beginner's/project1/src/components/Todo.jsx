import React from 'react'
import { Button, Card, CardBody, Col, Container, FormControl, FormGroup, Row } from 'react-bootstrap'

const Todo = () => {
  return (
    <>
      <Container className='my-5'>
          <Row>
              <Col>
                  <h1 className="display-5 text-center bg-primary text-white p-3 border-radius rounded">TODO COMPONENT</h1>
              </Col>
          </Row>
      </Container>
      <Container className='my-5 '>
        <Row>
          <Col>
            <Card>
              <CardBody>
                <FormGroup as={Row}>
                  <Col xs={12} sm={12} md={12} lg={{offset:3, span:6}} xl={{offset:3, span:6}} xxl={{offset:3, span:6}} className='my-3'>
                    <FormControl style={{'border':'1px solid var(--bs-primary-border-subtle)'}} type='text' placeholder="Enter Some Data.." />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className='my-3'>
                    <Button variant='outline-primary'>Submit</Button>
                  </Col>
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Todo