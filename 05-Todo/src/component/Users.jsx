import React from 'react'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteUser } from './../db/usersData';

const Users = (props) => {
    const {address, email, id, image, mobile, name} = props;

    const deleteHandler = (id) => {
        (window.confirm(`Are you sure to delete ${name} records`)) ? deleteUser(id) : toast.warning('Delete terminated')
    }

  return (
    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mt-2 mb-2">
        <div className="card shadow p-1">
            <img src={image} className='img-fluid' style={{height:'200px'}} alt={name} />
            <div className="card-header">
                <h4 className="card-title text-secondary text-center"> {name} </h4>
            </div>
            <div className="card-body">
                <p>
                    <strong>Email</strong>
                    <span className="text-secondary float-end"> {email} </span>
                </p>
                <p>
                    <strong>Mobile</strong>
                    <span className="text-secondary float-end"> {mobile} </span>
                </p>
                <p>
                    <strong>Address</strong>
                    <span className="text-secondary float-end"> {address.substring(0, 20)}... </span>
                </p>
            </div>
            <div className="card-footer">
                <NavLink to={`/edit/${id}`}>
                    <i className="bi bi-pencil-square btn btn-outline-secondary"></i>
                </NavLink>
                <NavLink onClick={() => deleteHandler(id)}>
                    <i className="bi bi-archive btn btn-outline-danger float-end"></i>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Users