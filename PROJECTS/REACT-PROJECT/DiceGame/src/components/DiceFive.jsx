import React from 'react'
import Dice from './Dice'
import './DiceFive.css'
export default function DiceFive() {
  return (
    <Dice className='five-container'>
         <div className='five-container1'>
            <div className='dot'></div>
            <div className='dot'></div>
         </div>
         <div className='dot mid-dot'></div>
         <div className='five-container1'>
            <div className='dot'></div>
            <div className='dot'></div>
         </div>
         
    </Dice>
  )
}
