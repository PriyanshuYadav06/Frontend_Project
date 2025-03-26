import React from 'react'
import './Circle.css'
export default function Circle(props) {
    const{text,onClick,isOn}=props;
  return (
    <div id='circle' className={`${isOn ? 'on' : 'off'}`}  onClick={onClick}>
        {text}
    </div>
  )
}
