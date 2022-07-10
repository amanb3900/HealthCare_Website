import React,{useState} from 'react'
import PhoneInput from 'react-phone-input-2'

import img from './images/img-info.png'
import face from './images/facebook.png'
import linkedin from './images/linkedin.png'
import insta from './images/instagram.png'

import './infoStyles.css'
import './infoResponsive.css'

export const Info = (props) => {
  const {onChangeInfo}=props
    const [details,setDetails]=useState({
      fn:'',
      ln:'',
      email:'',
      pn:''
    })
    const [phone,setPhone]=useState();
    const handleChange=(e,s)=>{
      switch(s){
        case 'f':
          setDetails((prevState)=>({
            ...prevState,
            fn:e.target.value
          }))
        break;
        case 'l':
          setDetails((prevState)=>({
            ...prevState,
            ln:e.target.value
          }))
        break;
        case 'e':
          setDetails((prevState)=>({
            ...prevState,
            email:e.target.value
          }))
        break;
        default:
      }
      // console.log(details)
    }
    const handleSubmit=(event)=>{
      event.preventDefault();
      setDetails((prevState)=>({
        ...prevState,
        ph:phone
      }))
      onChangeInfo(details.fn,details.ln,details.email,phone);
    }
    return (
      <div className='donate-us-info'>
        <div className='container-background'>

            <div className='input-div'>
                <form className='form' onSubmit={handleSubmit}>
                  <input required className='input fn' value={details.fn} type='text' onChange={(e)=>handleChange(e,'f')} placeholder='First Name'/>
                  <input required className='input ln' value={details.ln}  type='text' onChange={(e)=>handleChange(e,'l')} placeholder='Last Name'/>
                  <input required className='input email' value={details.email} type='email' onChange={(e)=>handleChange(e,'e')} placeholder='Email Address'/>
                  <PhoneInput required className='input phone' value={phone} onChange={setPhone} placeholder='Phone Number' country={'in'}/>
                  <div className='background-button'>
                    <button className='submit button' type='submit'>Donate Now</button>
                  </div>
                </form>
            </div>
            <div className='right-div'>
                <img className='img' src={img} alt='img'/>
                <div className='text-div'>Find us on social network</div>
                <div className='logo-div'>
                    <img className='logo facebook' src={face} alt='f'/>
                    <img className='logo linkedin' src={linkedin} alt='l'/>
                    <img className='logo instagram' src={insta} alt='i'/>
                </div>
            </div>

        </div>
      </div>
    )
}


