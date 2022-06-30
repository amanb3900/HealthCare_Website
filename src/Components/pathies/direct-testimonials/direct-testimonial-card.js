import React from 'react'

import patientcard from './patientcard.png'
import cardrectangle from './cardrectangle.png'
import patientimg from './patientimg.png'
import patienttitle from './patienttitle.png'
import rating from './rating.png'
import './direct-testimonial-card.css'
import Stars from '../stars/stars'
import { Link } from 'react-router-dom';
function directcard({ name, casen, details }) {

    return (
        <>

            <div className='card'>
                <div className='identity'>
                    <img className='patient_img' src={patientimg} alt='patient_img' />
                    <div className='identity_name'>
                        <div className='inner_identity'>
                            <h6 className='inner_text'>Case {casen}</h6>
                            <img className='inner_rect' src={cardrectangle} alt='card' />
                        </div>
                        <h5 className='patient_name'>{name}</h5>
                    </div>
                </div>
                <div className='timeline'>
                    <img className='patient' src={patientcard} alt='card' />
                    <p className='timeline_text'>Ps/Hom/2022/00{casen}</p>
                </div>
                <div className='title'>
                    <img className='pateienttitleimg' src={patienttitle} alt='card' />
                    <p className='title_text'>LOREMIMPSUM</p>
                </div>
                <div>
                    <p className='patient_details'>{details}</p>
                </div>
                <div className='card_footer'>
                    <Stars className='rating' {...name}/>
                    <Link to='/pathy/homeopathy/direct-testimonials/case1'><button className='patient_card_btn'>Read More</button></Link>
                </div>
            </div>

        </>
    )
}

export default directcard