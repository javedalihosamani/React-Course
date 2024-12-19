import React, { Fragment, useEffect, useState } from 'react'
import './Music.css';
import token from './../../token/Token';
import Artist from '../artist/Artist';
import Search from './../search/Search';

const URL = 'https://api.spotify.com';
const Music = () => {

    const [artist, setArtist] = useState([]);

    const getArtists = async (artistName) => {
        await fetch(`${URL}/v1/search?q=${artistName}&type=artist`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            }
          })
          .then(res => res.json())
          .then(out =>{
            /* console.log(out.artists.items) */
            setArtist(out.artists.items);
          }).catch(err=> console.log(err.message));
    };

    useEffect(()=>{
        //statements
        getArtists('Ilayaraj')
      }, []);
  return (
    <Fragment>
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-danger mt-5'>WELCOME TO REACT MUSIC PLAYER APP</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className='container my-5'>
            <div className="row">
                <div className="col">
                    <h2 className="text-center text-danger">ARTISTS</h2>
                </div>
            </div>
        </div>
        <Search searchName={getArtists}/>
        <div className="container">
            <div className="row">
                {
                    artist.map((item, index) => (
                        <Artist key={index} {...item} />
                    ))
                }
            </div>
        </div>
    </Fragment>
  )
}

export default Music