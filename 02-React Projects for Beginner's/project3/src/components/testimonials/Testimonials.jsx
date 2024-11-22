import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <>
      <Container className='my-5'>
        <Row>
          <Col>
            <h1 className="display-5 text-center text-light bg-secondary  p-3 border-radius rounded shadow">TESTIMONIALS COMPONENT</h1>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className='my-5'>
          <Col>
            <div className='shadow bg-secondary p-5 text-center rounded text-white'>
              <div >
                <p className='lead'>{testimonials[currentIndex].quote}</p>
                <h4>{testimonials[currentIndex].author}</h4>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={prevSlide} variant='outline-secondary w-25' className='my-3'>Prev</Button>
            <Button onClick={nextSlide} variant='outline-secondary w-25 float-end' >Next</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Testimonials