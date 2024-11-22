import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Container, Image, Row } from 'react-bootstrap'
import axios from 'axios';
const MealsApi = () => {
    const [items, setItem] = useState([]);
    //console.log("State : ", items);

    // fetch().then().then().catch();
    useEffect(()=>{
      axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) =>{
        //console.table(res.data.meals);
        setItem(res.data.meals)
      })
      .catch(error => console.error(error));
    },[]);

    // User Defined Function
    const MealsCard = (props) => {
      //console.log(props);
      const {idMeal, strMeal, strMealThumb} = props;
      return(
        <Card className='shadow' bg='light' text='secondary' border="primary">
          <CardHeader>
            <Image src={strMealThumb} alt={strMeal} fluid/>
          </CardHeader>
          <CardBody>
            <CardText>Meals ID : <span className='float-end'>{idMeal}</span></CardText>
            <hr />
            <CardTitle className='text-center'>{strMeal}</CardTitle>
          </CardBody>
          <CardFooter>
            <Button variant='outline-primary' className="w-100">Order</Button>
          </CardFooter>
        </Card>
      )
    }
  return (
    <>
      <Container className='my-5'>
        <Row>
          <Col>
            <h1 className="display-5 text-center bg-primary text-white p-3 border-radius rounded">MEALS API COMPONENT</h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {
            items.map((item, index) => (
              <Col key={index} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4} className='my-3'>
                <MealsCard {...item} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </>
  )
}

export default MealsApi