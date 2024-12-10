import React, { Component } from 'react'
import { Fragment } from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
        console.log("THIS IS A CHILD COMPONENT CONSTRUCTOR METHOD");
    }

    componentWillMount(){
        console.log("THIS IS A CHILD COMPONENT componentWillMount METHOD");
    }

    componentDidMount(){
        console.log("THIS IS A CHILD COMPONENT componentDidMount METHOD");
    }

    
  render() {
    console.log("THIS IS A CHILD COMPONENT RENDER METHOD");
    return (
      <Fragment>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="display-2 text-success text-center">Counter Child Component</h1>
                </div>
            </div>
        </div>
      </Fragment>
    )
  }
}
