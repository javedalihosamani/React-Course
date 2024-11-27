import React from 'react'

const Ex1 = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col">
                <div className="lead my-3 p-3 border rounded shadow-sm">
                    <p>
                        <b>1) Call an inline function in an onClick event handler</b>
                    </p>
                    <button type="button" className='btn btn-outline-info' onClick={()=>{alert("Hello")}}>Ex1 - Click-App</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ex1