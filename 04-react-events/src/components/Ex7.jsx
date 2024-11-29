import React, { Component, Fragment } from 'react';

class Ex7 extends Component {
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
                        <div className="col">
                            <div className="lead my-3 p-3 border rounded">
                                <p><b>7) Binding directly when passing the function</b></p>
                                <p><b>MESSAGE : </b> {this.state.message}</p>

                                <button className='btn btn-outline-info' onClick={this.clickHandler.bind(this)}>Ex7 - Click Handler</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Ex7;
