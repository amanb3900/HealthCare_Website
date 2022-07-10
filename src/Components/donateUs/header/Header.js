import React from 'react'
import './backgroundStyles.css'
import './headerStyles.css'
import './headerResponsive.css'
import img from './images/homeImg.png'
import Navbar from '../../Navbar/Navbar'


export const Header = ({header,handleClick}) => {
  return (
    <div className='donate-us-header'>
      <Navbar/>
        <div className='ellipse container-background'>
          
            
            <div className='img-div'>
                <img className='img' src={img} alt='img' />
            </div>

            <div className='text-div'>
                <div className='title'>{header.title}</div>
                <div className='subtitle'>{header.subtitle}</div>
                <button className='donate-button' onClick={handleClick}>Donate Us</button>
            </div>

        </div>
    </div>
  )
}
/** used div instead of h1 and h2 so that I can define the margin */
