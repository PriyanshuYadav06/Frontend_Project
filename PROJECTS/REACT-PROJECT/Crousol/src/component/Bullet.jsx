import React from 'react'
import './Bullet.css'

export default function Bullet({style,onClick}) {
  return (
    <div className='dot' onClick={onClick}><div style={style}></div></div>
  )
}
