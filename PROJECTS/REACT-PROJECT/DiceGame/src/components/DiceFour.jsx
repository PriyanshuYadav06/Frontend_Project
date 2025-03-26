import React from 'react'
import Dice from './Dice'
import './DiceFour.css'

export default function DiceFour() {
  return (
    <Dice className='four-container'>
            <div className='four-container1'>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>
            <div className='four-container1'>
                <div className='dot'></div>
                <div className='dot'></div>
            </div>
    </Dice>
  )
}
