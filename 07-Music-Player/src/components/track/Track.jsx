import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import token from './../../token/Token';
const URL = 'https://api.spotify.com';

const Track = () => {
  const [tracks, setTracks] = useState([]);
  const [view, setView] = useState(false); // true = card , false = list

  const params = useParams();

  // player states
  const [audio, setAudio]= useState(false);
  const [playing,setPlaying] = useState(false) // true = play , false = pause
  const [preUrl, setPreUrl] = useState(false)  // song url

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

  const playAudio = (url) => {
    console.log('PLAY AUDIO URL :', url);
    const myAudio = new Audio(url);
    console.log('PLAY AUDIO MY AUDIO  OBJECT:', myAudio);
    
    setAudio(myAudio);
    setPreUrl(url);

    if (!playing) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      // Pause to Play Again
      if(preUrl === url){
        setPlaying(false);
      } else {
        myAudio.play();
        setPlaying(true);
        setPreUrl(url);
        setAudio(myAudio);
      }
    }
  }

  const trackIcon = (url) => {
    if (!url)
      return <strong className='text-danger'>No Track Records</strong>
   
    if(playing && url === preUrl)
      return  <button className="btn btn-outline-danger"> <i className="bi bi-pause-fill"></i></button> 
    else 
     return <button className="btn btn-outline-danger"> <i className="bi bi-play-fill"></i> </button>
  }

  const duration = (time) => {
    let seconds = Math.floor(( time / 1000 ) % 60);
    let minutes = Math.floor(( time / (1000 * 60)) % 60);
    return `${minutes} : ${seconds}`
  }
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
              const {name, album, preview_url, duration_ms}= item;
              return(
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2" key={index}>
                  {
                    view ? (
                      <div className="card shadow text-danger" onClick={()=>{playAudio(preview_url)}}>
                        <div className="row">
                          <div className="col">
                            <img src={album ? album.images[0].url : ''} alt={name} className='img-fluid card-img-top' style={{height:'100px'}} />
                          </div>
                          <div className="col">
                            <div className="card-body">
                              <h6 className="text-center"> { name.substring(0, 20)} ... </h6>
                              <div className='p-2 border rounded shadow-sm'>
                                <p>                                  
                                  <span>{trackIcon(preview_url)}</span>
                                  <span className='float-end'>Duration :{duration(duration_ms)}</span>
                                </p>                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <ul class="list-group" onClick={()=>{playAudio(preview_url)}}>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                          { name.substring(0, 20)} ... 
                          <>                                  
                            <span>{trackIcon(preview_url)}</span>
                            <span className='float-end'>Duration :{duration(duration_ms)}</span>
                          </>
                        </li>
                      </ul>
                    )
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