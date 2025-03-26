import React from 'react'
import './Box.css'
export default function Box({onClick,style}) {
  return (
    <div className='box' style={style} onClick={onClick}></div>
  )
}
