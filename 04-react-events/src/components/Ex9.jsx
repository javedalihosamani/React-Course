import React, { Component, Fragment } from 'react';

class Ex9 extends Component {
    printMessage() {
        console.log("This is a message");
    }
    showAlert() {
        alert("button was clicked");
    }
    clickHandler() {
        this.printMessage();
        this.showAlert();
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p><b>9) Call multiple functions inside an onClick event handler</b></p>
                            <button
                                className="btn btn-outline-info" 
                                onClick={this.clickHandler.bind(this)}>
                                    Ex9 - Click Handler
                            </button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Ex9;
