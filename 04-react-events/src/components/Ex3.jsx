import React, { useState } from 'react'

const Ex3 = () => {

    // const [state,handler] = useState(initValue);

    // useState is a hook -> functional components
    // state variables => value
    // state handler => method => used change/modify the values of the state
    
    const [count, setCount] = useState(1);

    const sayHello = (parameter1) => {
        alert(`Hello!, ${parameter1}`);
    };

  return (
    <div className='container'>
        <div className="row">
            <div className="col">
                <div className="lead my-3 p-3 border rounded shadow-sm">
                    <p><b>3) Call multiple functions in an onClick event handler</b></p>
                    <button className="btn btn-outline-info" onClick={()=>{sayHello(" React"); setCount(count+1)}}>Ex3 - Say Hello and Increment </button>
                    <p><b>Increment : </b> {count}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ex3;