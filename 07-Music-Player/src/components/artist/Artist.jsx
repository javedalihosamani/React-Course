import React from 'react'
import { NavLink } from 'react-router-dom';
import Image from './../image/Image';

const Artist = (props) => {
    const { id, name , images, followers } = props;
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 my-3">
        <div className="card p-2 shadow">
            <Image data={images? images[0] : false}/>
            <div className="card-body">
                <h5 className='text-center text-danger'>{name}</h5>
                <ul className="list-group">
                    <li className='list-group-item text-danger'>
                        <p>
                            <i className="bi bi-person-bounding-box"></i>
                            <span className='float-end'>{followers.total}</span>
                        </p>
                    </li>
                </ul>
            </div>
            <div className="card-footer">
                <NavLink to={`/track/${id}`} className="btn btn-outline-danger"><i class="bi bi-music-note-list"></i></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Artist