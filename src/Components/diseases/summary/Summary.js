import React from 'react'
import pic from './test.png'
import './summaryStyles.css'

export const Summary = (props) => {
  return (
    <div className='container_summary'>
      <div className='Summary-Card'>
        <img src={pic} className='pic_summary' alt='background-pic' />
        <div className='text_summary'>
          <h2 className='heading_summary text'>Summary</h2>
          <p className='data_summary text'>{props.data} <br /> {props.data}</p>
        </div>
      </div>
    </div>
  )
}
