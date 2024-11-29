import React, { Component, Fragment } from 'react';

class Ex6 extends Component {
    constructor(props) {
        super(props)
        this.state = {
          message: 'Event Bind'
        }
    }

    clickHandler() {
        this.setState({
          message: 'change state'
        })
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="lead my-3 p-3 border rounded">
                                <p><b>6) Binding by passing arrow function inside the event listener</b></p>

                                <p><b>MESSAGE : </b> {this.state.message}</p>

                                <button
                                className="btn btn-outline-info" 
                                onClick={()=>this.clickHandler()}>
                                    Ex6 - Click Handler
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Ex6;
