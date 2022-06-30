import React from 'react'
import img from './img.png'
import './aboutStyles.css'
function About(props) {
    return (
        <>
            <div className="About-Card">
                <div className='TextWrapper'>
                    <h2 className='Heading text'> About {props.disease}</h2>
                    <p className='para text'>{props.data}</p>
                </div>
                <div className='imgdiv'>
                    <img src={img} className='AboutIMG' />
                </div>
            </div>
        </>
    )
}

export default About