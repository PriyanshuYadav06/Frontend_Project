import React from 'react'
import Dice from './Dice'
import './DiceThree.css'
export default function DiceThree() {
  return (
     <Dice className='three-container'>
         <div className='dot'></div>
         <div className='dot mid-dot'></div>
         <div className='dot dot-two'></div>
     </Dice>
  )
}
