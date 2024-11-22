import React, { Fragment } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';

class InvoiceForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            currency: '$',
            currentDate: '',
            invoiceNumber: 1,
            dateOfIssue: '',
            billTo: '',
            billToEmail: '',
            billToAddress: '',
            billFrom: '',
            billFromEmail: '',
            billFromAddress: '',
            notes: '',
            total: '0.00',
            subTotal: '0.00',
            taxRate: '',
            taxAmmount: '0.00',
            discountRate: '',
            discountAmmount: '0.00'
        };
        this.state.items = [
            {
              id: 0,
              name: '',
              description: '',
              price: '1.00',
              quantity: 1
            }
          ];
    }   
    editField = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
        this.handleCalculateTotal();
    };

    handleCalculateTotal(){
        var items = this.state.items;
        var subTotal = 0;

        items.forEach(function(items){
            subTotal = parseFloat(subTotal + (parseFloat(items.price).toFixed(2) * parseInt(items.quantity))).toFixed(2);
        })

        this.setState({
            subTotal : parseFloat(subTotal).toFixed(2)
            },() => {
                this.setState({
                    taxAmmount: parseFloat(parseFloat(subTotal) * (this.state.taxRate / 100)).toFixed(2)
                }, ()=>{
                    this.setState({
                        discountAmmount: parseFloat(parseFloat(subTotal) * (this.state.discountRate / 100)).toFixed(2)
                    }, ()=>{
                        this.setState({
                            total: ((subTotal - this.state.discountAmmount) + parseFloat(this.state.taxAmmount))
                        });
                    })
                })
            })
    }
    render(){
        return(
            <Fragment>
                <Container>
                    <Form>
                        <Row>
                            <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                                <Card className='p-4 my-3 bg-light shadow-sm'>
                                    <div className="d-flex flex-row align-items-start justify-content-between mb-3">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex flex-column">
                                                <div className="mb-2">
                                                    <span className="fw-bold">Current&nbsp;Date:&nbsp;</span>
                                                    <span className="current-date">{new Date().toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center">
                                                <span className="fw-bold d-block me-2">Due&nbsp;Date:</span>
                                                <Form.Control type="date" value={this.state.dateOfIssue} name={"dateOfIssue"} onChange={(event) => this.editField(event)} style={{
                                                maxWidth: '150px'
                                                }} required="required"/>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center">

                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                            <h1>Invoice Form </h1>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Fragment>
        )
    }
}
export default InvoiceForm;