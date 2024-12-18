import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import token from './../../token/Token';
const URL = 'https://api.spotify.com';

const Track = () => {
  const [tracks, setTracks] = useState([]);
  const [view, setView] = useState(false); // true = card , false = list

  const params = useParams();

  const searchTracks = async () => {
    await fetch(`${URL}/v1/artists/${params.id}/top-tracks?market=IN`, {
        method: `GET`,
        headers :{
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(out => {
        /* console.log(out.tracks) */
        setTracks(out.tracks);
    }).catch(error => console.log(error.message));
  }

  useEffect(()=>{searchTracks()});
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
        
        <div className="container">
          <div className="row">
           {
            tracks.map((item,index)=>{
              const {id, name, album, preview_url, duration_ms}= item;
              return(
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2" key={index}>
                  {
                    view ? (
                      <div className="card">
                        <img src={album ? album.images[0].url : ''} alt="" className='img-fluid card-img-top' style={{height:'300px'}} />
                        <div className="card-body">
                          <h5 className="text-success text-center"> { name } </h5>
                        </div>
                        <div className="card-footer">
                        </div>
                      </div>
                    ) : "list"
                  }
                </div>
              );
            })
           }
          </div>
        </div>
    </Fragment>
  )
}

export default Track