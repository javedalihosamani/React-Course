import React from 'react'
import { NavLink } from 'react-router-dom';
import Image from './../image/Image';

const Artist = (props) => {
    const { id, name , images, followers } = props;
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 my-3">
        <NavLink to={`/track/${id}`} className='text-decoration-none'>
            <div className="card p-2 shadow bg-light">
                <Image data={images? images[0] : false}/>
                <div className="card-body">
                    <h4 className='text-center text-danger'>{name}</h4>
                    <ul className="list-group">
                        <li className='list-group-item text-danger shadow-sm'>
                            <>
                                <span>Followers</span>
                                <span className='float-end'>{followers.total}</span>
                            </>
                        </li>
                        <li className='list-group-item text-danger shadow-sm'>
                            <b className="btn btn-outline-danger d-block">
                                <i className="bi bi-music-note-list"></i>
                            </b>
                        </li>
                    </ul>
                </div>
            </div>
        </NavLink>
    </div>
  )
}

export default Artist