import React from 'react'
import pic from './sumImg.png'
import './summaryStyles.css'

export const Summary = (props) => {
  return (
    <div className='container_summary'>
      <div className='Summary-Card'>
        <div className='ImgDiv'>
          <img src={pic} className='pic_summary' alt='background-pic' />
        </div>
        <div className='text_summary'>
          <h1 className='heading_summary text'>Summary</h1>
          <p className='data_summary text'>{props.data} <br /> {props.data}</p>
        </div>
      </div>
    </div>
  )
}
