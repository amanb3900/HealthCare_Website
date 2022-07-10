import React,{useState} from 'react'
import './backgroundStyles.css'
import './amountStyles.css'
import './amountResponsive.css'


export const Amount = (props) => {
    const {onChangeAmount}=props
    const [value,setValue]=useState(0)
    const handleChangeValue=(value)=>{
        onChangeAmount(value);
        setValue(value)
    }
  return (
    <div className='donate-us-amount'>
        <div className='ellipse container-background'>
            
            <div className='select-amount'>Select an Amount (in Rs)</div>
            <div className='buttons'>
                <button className='button b5' onClick={()=>handleChangeValue(5)} >5</button>
                <button className='button b25' onClick={()=>handleChangeValue(25)}>25</button>
                <button className='button b100' onClick={()=>handleChangeValue(100)}>100</button>
                <button className='button b250' onClick={()=>handleChangeValue(250)}>250</button>
                <button className='button b500' onClick={()=>handleChangeValue(500)}>500</button>
            </div>
            <div className='input-text'>Other (in Rs)</div>
            <input className='input' type="number"  value={value} onChange={(e)=>handleChangeValue(e.target.value)} valuedefault={0}/>

        </div>
    </div>
  )
}
/* <input type="number"  value={amount} onChange={onChangeAmount} valuedefault={0}/>  */