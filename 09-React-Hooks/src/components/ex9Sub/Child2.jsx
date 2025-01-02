import React, { Fragment } from 'react'
import GrandChild2 from './sub/GrandChild2';

const Child2 = () => {
  return (
    <Fragment>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h3 className="text-secondary">This is the Child Component - 2.</h3>
                </div>
            </div>
        </div>
        <GrandChild2/>
    </Fragment>
  )
}

export default Child2;