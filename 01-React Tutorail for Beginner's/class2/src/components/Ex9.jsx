import React, { Component } from 'react'

export default class Ex9 extends Component {
  render() {
    const {img, lorem, name} = this.props;
    return (
      <>
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <h1 className="bg-warning text-white p-3 text-center rounded">
                        EXAMPLE-9 : REACT CLASS COMPONENT DESTRUCTURING PROPS
                    </h1>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="lead p-3 border rounded">
                        {/* <p>{this.props}</p> */}
                        <p>{img}</p>
                        <p>{name}</p>
                        <p>{lorem}</p>
                    </div>

                    <div className="card my-3">
                        <img src={img} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{lorem}</p>
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
