import React, { Fragment } from 'react';
import { Card, Col, Container, Form, FormControl, Row, FormLabel } from 'react-bootstrap';
import InvoiceItem from './InvoiceItem';

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
        this.editField = this.editField.bind(this)
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

    onItemizedItemEdit(evt){
        var item = {
            id:evt.target.id,
            name:evt.target.name,
            value:evt.target.value,
        };
        var items = this.state.items.slice();
        var newItems = items.map(function(items){
            for (const key in items) {
                if (key === item.name && items.id === item.id) {
                    items[key] = item.value;                    
                }
            }
            return items;
        })
        this.setState({items:newItems});
        this.handleCalculateTotal();
    }

    handleAddEvent(evt){
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var items = {
        id: id,
        name: '',
        price: '1.00',
        description: '',
        quantity: 1
        }
        this.state.items.push(items);
        this.setState(this.state.items);
    }

    handleRowDel(items){
        var index = this.state.items.indexOf(items);
        this.state.items.splice(index, 1);
        this.setState(this.state.items);
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
                                            <span className="fw-bold me-2">Invoice Number: </span>
                                            <FormControl type="number" value={this.state.invoiceNumber} name={"invoiceNumber"} onChange={(event) => this.editField(event)} min="1" style={{
                                            maxWidth: '70px'}} required="required"/>
                                        </div>
                                    </div>
                                    <hr className="my-4"/>

                                    <Row className="mb-5">
                                        <Col>
                                            <FormLabel className="fw-bold">Bill to:</FormLabel>
                                            <FormControl placeholder={"Who is this invoice to?"} value={this.state.billTo} type="text" name="billTo" className="my-2" onChange={(event) => this.editField(event)} autoComplete="name" required="required"/>
                                            <FormControl placeholder={"Email address"} value={this.state.billToEmail} type="email" name="billToEmail" className="my-2" onChange={(event) => this.editField(event)} autoComplete="email" required="required"/>
                                            <FormControl placeholder={"Billing address"} value={this.state.billToAddress} type="text" name="billToAddress" className="my-2" autoComplete="address" onChange={(event) => this.editField(event)} required="required"/>
                                        </Col>
                                        <Col>
                                            <FormLabel className="fw-bold">Bill from:</FormLabel>
                                            <FormControl placeholder={"Who is this invoice from?"} value={this.state.billFrom} type="text" name="billFrom" className="my-2" onChange={(event) => this.editField(event)} autoComplete="name" required="required"/>
                                            <FormControl placeholder={"Email address"} value={this.state.billFromEmail} type="email" name="billFromEmail" className="my-2" onChange={(event) => this.editField(event)} autoComplete="email" required="required"/>
                                            <FormControl placeholder={"Billing address"} value={this.state.billFromAddress} type="text" name="billFromAddress" className="my-2" autoComplete="address" onChange={(event) => this.editField(event)} required="required"/>
                                        </Col>
                                    </Row>
                                    <InvoiceItem onItemizedItemEdit={this.onItemizedItemEdit.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} currency={this.state.currency} items={this.state.items}/>
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