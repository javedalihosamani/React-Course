import React, { useState } from 'react'
import { Button, ButtonGroup, Card, CardBody, Col, Container, FormControl, FormGroup, ListGroup, Row } from 'react-bootstrap'

const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleTextInput = (event) => {
    /* console.log(event);
    console.log(event.target);
    console.log(event.target.value); */
    setInput(event.target.value);
  }

  const generateID = () => Math.floor(Math.random() * 100);
  
  const addTodo = () => {
    setTodo(todo.concat({
      id: generateID(),
      title: input,
    }))
    setInput('');
  }

  const clearTodos = () => {
    setTodo([]);
  }
  
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
                  <Col xs={12} sm={12} md={12} lg={{offset:2, span:6}} xl={{offset:2, span:6}} xxl={{offset:2, span:6}} className='my-3'>
                    <FormControl style={{'border':'1px solid var(--bs-primary-border-subtle)'}} type='text' placeholder="Enter Some Data.." value={input} onChange={handleTextInput}/>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={3} xl={3} xxl={3} className='my-3'>
                  <ButtonGroup>
                    <Button variant='outline-primary' onClick={addTodo}>Submit</Button>
                    <Button variant='outline-primary float-end' onClick={clearTodos}>Clear Todo</Button>
                  </ButtonGroup>
                  </Col>
                </FormGroup>
                <ListGroup as="ol" numbered>
                {
                  todo.map((item, index) => (
                    <ListGroup.Item key={index} className='p-3 border-radius'>
                      {item.title}
                      <Button variant='outline-danger float-end' size='sm' onClick={()=> setTodo(todo.filter((todo) => todo.id!== item.id))} >Delete</Button>
                    </ListGroup.Item>
                  ))
                }
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Todo