import React from 'react'

const AgeInfo = (props) => {
  return (
    <div className="row">
      <div className="col">
        <h3 className="display-3 text-warning">Age Info {props.ageInfo()}</h3>
      </div>
  </div>  
  )
}

export default AgeInfo