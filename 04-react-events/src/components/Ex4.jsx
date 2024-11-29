import React, {useState} from 'react'

const Ex4 = () => {
    // const [state,handler] = useState(initValue)
    let [num,setNum] = useState(0)
    const [isView,setIsView] = useState(true)
    const [count, setCount] = useState(0);

    const clickHandler = () => {
        setNum(num+1);
        setIsView(!isView);
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="lead my-3 p-3 border">
                    <p><b>4) Update the state inside an onClick event handler</b></p>
                    <p><b>Increment : </b> {num}</p>
                    <div>
                        {isView && <p className='text-success'>Welcome to React</p>}
                    </div>
                    <div>
                        {isView ? <p className='text-success'>Welcome to React</p> : <p className="text-danger">Try Next Time</p>}
                    </div>
                    <button className="btn btn-outline-info" onClick={clickHandler}>Ex4 - Click Handler</button>

                    <p><b>Count : </b> {count}</p>
                    <button className='btn btn-outline-success mx-2' onClick={() => setCount(count + 1)}>Increment</button>
                    <button className='btn btn-outline-danger' onClick={() => setCount(count - 1)}>Decrement</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ex4