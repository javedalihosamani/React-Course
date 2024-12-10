import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { readSingleUser, updateSingleUser } from '../db/usersData';
import { toast } from 'react-toastify';

const UserEdit = (props ) => {
  const params = useParams();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [mobile,setMobile] = useState('');  
  const [image,setImage] = useState('');
  const [address,setAddress] = useState('');

  
  useEffect(() => {
    let user = readSingleUser(params.id);
    setName(user.name);;
    setEmail(user.email);
    setMobile(user.mobile);
    setImage(user.image);
    setAddress(user.address);
  },[params]);
  
  // Form Submit Event Handler
  const submitHandler = async (e) => {
    try {
        e.preventDefault(); // to avoid page refresh
        // Initial Object 
        const data = {
            name: name,
            email: email,
            mobile: mobile,
            image: image,
            address: address
        };
        console.log('Update contact =', data);
        updateSingleUser(params.id, data);
    } catch (error) {
        toast.error(error.message);
    }
}
  return (
    <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
                    <div className="card shadow">
                        <div className="card-header">
                            <h3 className='text-center text-secondary'>Update User ID {params.id}</h3>
                        </div>
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler} >
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}  className="form-control" required />
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email"  value={email} onChange={(e) => setEmail(e.target.value)}  id="email" className="form-control" required />
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name="mobile"  value={mobile} onChange={(e) => setMobile(e.target.value)}  id="mobile" className="form-control" required />
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="image">Image</label>
                                    <input type="url" name="image"  value={image} onChange={(e) => setImage(e.target.value)}  id="image" className="form-control" required />
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="address">Address</label>
                                    <textarea name="address"  value={address} onChange={(e) => setAddress(e.target.value)}  id="address" className="form-control" required></textarea>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Update" className="btn btn-outline-secondary w-100" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default UserEdit