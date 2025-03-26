import React from 'react'
import Dice from './Dice'
import './DiceTwo.css'

export default function DiceTwo() {
  return (
     <Dice className="two-container">
          <div className='dot'></div>
          <div></div>
          <div className='dot dot-two'></div>
     </Dice>
  )
}
