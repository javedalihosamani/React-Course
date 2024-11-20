import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Accordions = (props) => {
  const {accordion} = props;

    console.log(props); 

    const AccordionCard = (props) => {
      const {content, title} = props;
      return(
        <>
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>{title}</Accordion.Header>
              <Accordion.Body>
                {content}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        </>
      )
    }
  return (
    <>
      <Container className='my-5'>
        <Row>
          <Col>
            <h1 className="display-5 text-center bg-secondary text-white p-3 border-radius rounded shadow">ACCORDION COMPONENT</h1>
          </Col>
        </Row>
      </Container>

      <Container className='my-5'>
        <Row>
          {
            accordion.map((item,index)=>{
              return(<AccordionCard {...item} key={index}/>)
            })
          }
        </Row>
      </Container>
    </>
  )
}

export default Accordions