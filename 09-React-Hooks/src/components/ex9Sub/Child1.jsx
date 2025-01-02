import React, { Fragment } from 'react'
import GrandChild1 from './sub/GrandChild1';

const Child1 = (props) => {
    const {age, name} = props;

  return (
    <Fragment>
        <div className="container my-5">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-secondary">This is the Child Component - 1.</h3>
                </div>
                <div className="col-12">
                    <div className="lead border p-3 rounded">
                        <p>User Age is = <span>{age}</span></p>
                        <p>User Name is = <span>{name}</span></p>
                    </div>
                </div>
            </div>
        </div>
        <GrandChild1 {...props}/>
    </Fragment>
  )
}

export default Child1;