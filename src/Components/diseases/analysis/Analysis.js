import React from 'react'
import img1 from './bar.png'
import img2 from './bar2.png'
import './analysisStyles.css'

export const Analysis = () => {
  return (
    <div className='container_analysis'>
        <div className='Analysis-Card'>

            <h2 className='heading_analysis'>Analysis</h2>
            <div className='pics_container'>
            <img className='pic_right'  src={img2} alt='pic_right' />
                <img className='pic_graph' src={img1} alt='pic_graph' />
            </div>

        </div>
    </div>
  )
}
