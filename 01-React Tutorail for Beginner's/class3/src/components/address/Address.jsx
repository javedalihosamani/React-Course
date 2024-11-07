import React from 'react'

const Address = (props) => {
    const {city, state} = props;
  return (
    <div>
        <h4 className='text-success'>Address</h4>
        <p><b>CITY : </b>{city}</p>
        <p><b>STATE : </b>{state}</p>
    </div>
  )
}

export default Address