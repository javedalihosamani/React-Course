import React from 'react'
import UserCard from './usercard/UserCard'

const Users = (props) => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className='text-center text-primary display-5'>User's Details</h2>
                </div>
            </div>
        </div>
        {
            props.users.map((item, index)=>{
                return (<UserCard key={index} {...item}/>)
            })
        }
    </>
  )
}

export default Users