import React, { Fragment, useState } from 'react'

const Track = () => {
  const [tracks, setTracks] = useState([]);
    const [view, setView] = useState(false); // true = card , false = list

  return (
    <Fragment>
      <div className='container my-5'>
        <div className="row ">
          <div className="col">
            <div className='d-flex justify-content-evenly align-items-center'>
              <h1 className="text-danger">TRACK</h1>
              <p className="border border-danger rounded text-danger shadow btn px-3" onClick={()=>{setView(!view)}}>
                { 
                view ? 
                  <i className="bi bi-list-ul display-5"></i> :  
                  <i className="bi bi-grid-3x3-gap display-5"></i>
                }
              </p>
            </div>
          </div>
        </div>
      </div>
        
        {/* <div className="container my-5">
          <div className="row my-5">
            <div className="col">
              <i className="border border-danger btn rounded text-danger" onClick={()=>{setView(!view)}}>
                {view ? <i className="bi bi-list-ul display-5"></i> :  <i className="bi bi-grid-3x3-gap display-5"></i>}
              </i>
            </div>
          </div>
        </div> */}
    </Fragment>
  )
}

export default Track