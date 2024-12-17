import React from 'react'
const noImage = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930';

const Image = (props) => {
  return (
    <img src={props.data ? props.data.url : noImage} alt="" className='rounded shadow' style={{height:'300px'}}/>
  )
}

export default Image