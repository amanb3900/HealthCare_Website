import React from 'react'
// import Navbar from '../../Navbar/Navbar'
// import image1 from "./images/image1.png"
// import image2 from "./images/image2.png"
// import image3 from "./images/image3.png"
// import image4 from "./images/image4.png"
// import image5 from "./images/image5.png"
import image1 from "./images/mainImg.png"
import Navbar from '../../Navbar/Navbar'

import "./Header.css"


function Header({disease}) {
  return (
    <div className='header'>
        <Navbar />
        <div className='header_intro'>
            <div className="left">
                <h1>{disease} </h1>
                <div className="animated-button">
                    <button type="button" className="button" href='#about'>Read More</button>
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