import React from 'react'
import './articlecardStyles.css'

export const ArticleCard = (props) => {
  return (
    <>
      <div className='container'>

        <div className='container_articlecard'>

          <div className='articlecard'>
            <h2 className='heading_articlecard'>{props.name} </h2>
            <p className='data_articlecard'>{props.data}</p>
          </div>

        </div>
        <div className='art_tit'>
          <h4 className='art_tit_link'>Link to pdf or something</h4>
        </div>
      </div>
    </>
  )
}
