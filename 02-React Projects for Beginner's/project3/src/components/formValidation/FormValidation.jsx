import React, { useState } from 'react'
import { Card, CardFooter, CardHeader, CardTitle, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'

function FormValidation() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  function validate(e){
    e.preventDefault();
    
    if(username.length > 8){
      setErrorUserName("");
      setUserColor("green");
    } else {
        setErrorUserName("Username must be 8 letters long.");
        setUserColor("red");
    }

    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setEmailColor("red");
      setErrorEmail("Email should have @gmail");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password should be 8 letters long ");
      setPasswordColor("red");
    }

    if (password !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("Passwords didn't matched.");
      setConfirmPasswordColor("red");
    }
  }
  return (
    <>
      <Container className='my-5'>
          <Row>
            <Col>
                <h1 className="display-5 text-center bg-secondary text-white p-3 border-radius rounded">FORM VALIDATION</h1>
            </Col>
          </Row>
      </Container>
      <Container className='my-5'>
        <Row>
          <Col xs={12} sm={12} md={12} lg={{span:6, offset:3}} xl={{span:6, offset:3}} xxl={{span:6, offset:3}} >   
            <Card className='shadow'>
              <CardHeader>
                <CardTitle className='text-center text-secondary'>Form Validation</CardTitle>
              </CardHeader>
              <CardFooter>
                <Form onSubmit={validate}>
                  <FormGroup className='mb-3'>
                    <FormLabel>Name</FormLabel>
                    <FormControl
                      type="text" 
                      placeholder="Name"
                      value={username}
                      onChange={(e)=> setUsername(e.target.value)}
                      style={{ borderColor: userColor }}
                    ></FormControl>
                    <p className="text-danger">{errorUserName}</p>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <FormLabel>Email</FormLabel>
                    <FormControl
                      type="email" 
                      placeholder="name@example.com"
                      value={email} 
                      onChange={(e)=> setEmail(e.target.value)}
                      style={{ borderColor: emailColor }}
                    ></FormControl>
                    <p className="text-danger">{errorEmail}</p>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <FormLabel>Password</FormLabel>
                    <FormControl
                      type="password" 
                      placeholder="Password"
                      value={password} 
                      onChange={(e)=> setPassword(e.target.value)}
                      style={{ borderColor: passwordColor }}
                    ></FormControl>
                    <p className="text-danger">{errorPassword}</p>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl
                      type="password" 
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      style={{ borderColor: confirmPasswordColor }}
                    ></FormControl>
                    <p className="text-danger">{errorConfirmPassword}</p>
                  </FormGroup>
                  <FormGroup className='mb-3'>
                    <FormControl
                      type="submit" 
                      value="Submit" 
                      className="btn btn-outline-secondary"
                    ></FormControl>
                  </FormGroup>
                </Form>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FormValidation