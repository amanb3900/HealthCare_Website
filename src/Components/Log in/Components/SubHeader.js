import React from 'react';

import './SubHeader.css';

const SubHeader = () =>{
    return (
        <div className='sub-header-container'>
            <div className="header">
                <div className="option active">Sign In</div>
                <div className="option">Sign Up</div>
            </div>
            <div className="sub-heading">Sign in to complete to our application</div>
        </div>
    );
};

export default SubHeader;