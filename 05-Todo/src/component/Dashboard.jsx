import React, { useEffect, useState } from 'react'
import { readAllUsers } from '../db/usersData';
import Users from './Users';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    setUsers(readAllUsers());
  },[]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className='text-center text-secondary'>USER'S DASHBOARD</h3>
          </div>
        </div>
        <div className="row">
          {
            users.map((item, index)=>{
              return (<Users {...item} key={index}/>)
            })
          }
        </div>
      </div>
    </>
  )
}

export default Dashboard
