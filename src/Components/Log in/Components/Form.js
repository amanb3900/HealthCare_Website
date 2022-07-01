import React from 'react';

import './Form.css';
import google from '../Images/google.jpg';
import facebook from '../Images/facebook.png';
import SocialsButton from './SocialsButton';

const Form = () =>{
    return(
        <div className='prabhav1'>
        <form className='form'>
            <div className="button-socials">
                <SocialsButton link = {google} name = "Google"/>
                <SocialsButton link = {facebook} name = "Facebook"/>
            </div>
            <div className="or">- OR -</div>
            <div className="fields">
                <input type="text" placeholder='Username/Email address' />
                <input type="text" placeholder='password' />
            </div>
            <button>Sign In</button>
            <p className='forgot-password'> <a href="#">Forgot Password?</a> </p>
        </form>
        </div>
    );
};

export default Form;