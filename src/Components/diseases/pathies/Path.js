import React from 'react'
import './pathStyles.css'
import pic from './logo192.png'

export const Path = (props) => {
  return (
    <div className='container_path'>

        {/* <div className='logocontainer_path'>
            <img className="logo"  src={props.pic} alt="logo" />
        </div>
        <div className='text_path'>
            <h1 className='heading_path'>
                {props.name}
            </h1>
            <div className='data_path'>
              <p>{props.data}</p>
            </div>
        </div> */}

        <div className='card'>
          <div className='logocontainer_path'>
              <img className="logo"  src={props.pic} alt="logo" />
          </div>
          {/* <div className='heading_path'> */}
            <a  href='/pathy/homeopathy'>
              <h2 className='heading_path'>{props.name} </h2>
              </a>
          {/* </div> */}
          <p className='data_path'>{props.data}</p>
        </div>

    </div>
  )
}
