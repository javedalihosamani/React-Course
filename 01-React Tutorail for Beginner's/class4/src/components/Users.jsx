import React, { Component } from 'react'
import Address from './Address';
import Bank from './Bank';

export default class Users extends Component {
  render() {
    const {firstName, lastName, image, email, address, bank} = this.props;
    return (
      <>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="card my-2 text-center">
                <div className="card-header">
                    <img src={image ? image : "#"} alt="" className='rounded-circle img-fluid' />
                </div>
                <div className="card-body">
                    <h4 className='card-title'>{firstName + " " + lastName}</h4>
                    <p className="text-secondary">
                        <i className="bi bi-envelope-open-fill"></i>
                        <span className="text-primary"> {email} </span> 
                    </p>
                    <details>
                        <summary>Address</summary>
                        <Address address = {address}/>
                    </details>
                    <details>
                        <summary>Bank Details</summary>
                        <Bank bank={bank}/>
                    </details>
                </div>
            </div>
        </div>               
      </>
    )
  }
}
