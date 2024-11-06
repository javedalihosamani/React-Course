import React, { Component } from 'react'

export default class Ex8 extends Component {
  render() {
    return (
      <>
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <h1 className="bg-warning text-white p-3 text-center rounded">
                        EXAMPLE-8 : REACT CLASS COMPONENT PROPS
                    </h1>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="lead p-3 border rounded">
                        {/* <p>{this.props}</p> */}
                        <p>{this.props.img}</p>
                        <p>{this.props.name}</p>
                        <p>{this.props.lorem}</p>
                    </div>

                    <div className="card my-3">
                        <img src={this.props.img} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className="card-text">{this.props.lorem}</p>
                            <button type="button" className='btn btn-outline-primary'>View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
