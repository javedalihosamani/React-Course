import React from 'react'

const Bank = (props) => {
    const {accNo, bName, type} = props;
  return (
    <div>
        <h4 className='text-success'>Bank</h4>
        <p><b>A/C No : </b> {accNo}</p>
        <p><b>Bank Name : </b> {bName}</p>
        <p><b>Bank Type : </b> {type}</p>
        <hr />
    </div>
  )
}

export default Bank