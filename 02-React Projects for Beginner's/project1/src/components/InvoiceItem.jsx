import React, { Component } from 'react'
import { Button, Table } from 'react-bootstrap';

export default class InvoiceItem extends Component {
  render() {
    var onItemizedItemEdit = this.props.onItemizedItemEdit;
    var currency = this.props.currency;
    var rowDel = this.props.onRowDel;
    var itemTable = this.props.items.map(function(item) {
      return (
        <ItemRow onItemizedItemEdit={onItemizedItemEdit} item={item} onDelEvent={rowDel.bind(this)} key={item.id} currency={currency}/>
      )
    });
    return (
      <div>
        <Table>
            <thead>
                <tr>
                    <th>ITEM</th>
                    <th>QTY</th>
                    <th>PRICE/RATE</th>
                    <th className="text-center">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {itemTable}
            </tbody>
        </Table>
        <Button className="fw-bold" onClick={this.props.onRowAdd}>Add Item</Button>
      </div>
    )
  }
}
class ItemRow extends React.Component {
    onDelEvent() {
        this.props.onDelEvent(this.props.item);
      }
    render(){
        return(
            <tr>
                
            </tr>
        )
    }
}