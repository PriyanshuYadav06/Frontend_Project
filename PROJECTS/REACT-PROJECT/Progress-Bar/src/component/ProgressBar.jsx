import React from 'react'
import './ProgressBar.css'
export default function ProgressBar({width}) {
  return (
    <div className='Container'>
        <div className="progress" style={{ width:`${width}%`}}></div>
    </div>
  )
}
