import React from 'react'
import Navbar from '../../Navbar/Navbar'
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import image5 from "./images/image5.png"

import "./Header.css"


function Header() {
  return (
    <div className='header'>
        <Navbar />
        <div className='header_intro'>
            <div className="left">
                <h1>Confused about your medical treatment – </h1>
                <p>Let common man’s wisdom guide you to an integrative solution.</p>
                <div className="animated-button">
                    <button type="button" className="button">Click Here</button>
                    <div className="background"></div>
                </div>
            </div>
            <div className="right">
                <div className="background">
                    <img src={image1} alt="image1" />
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Header