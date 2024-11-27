import React from 'react'

const Ex2 = () => {
    const showAlert = () => {
        alert("I'm an alert");
    }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-12">
                <div className="lead my-3 p-3 border rounded shadow-sm">
                    <p><b>2) React event listeners</b></p>
                    <p>To listen to events in React, add the onClick attribute which is the event handler to the target element. This specifies the function to be executed when that element is clicked</p>
                    <button className="btn btn-outline-info" onClick={showAlert}>Ex2- Show Alert</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ex2