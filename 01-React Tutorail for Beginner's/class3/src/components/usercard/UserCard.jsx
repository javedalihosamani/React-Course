import React from 'react'
import Address from '../address/Address';
import Bank from './../bank/Bank';

const UserCard = (props) => {
    const {id, name, email, age, address, bank} = props;
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
                <div className="accordion my-2" id={id}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {name}
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent={`#${id}`}>
                            <div className="accordion-body text-center">
                                <p><b>ID : </b>{id}</p>
                                <p><b>NAME : </b>{name}</p>
                                <p><b>EMAIL : </b>{email}</p>
                                <p><b>AGE : </b>{age}</p>
                                {/* <p><b>CITY : </b>{address.city}</p>
                                <p><b>STATE : </b>{address.state}</p> */}
                                <hr />
                                <Address {...address}/>
                                <hr />
                                {
                                    bank.map((item, index)=>{
                                        return(<Bank key={index} {...item}/>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
    </>
  )
}

export default UserCard