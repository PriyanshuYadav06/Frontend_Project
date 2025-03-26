import React from 'react'
import './Card.css'
export default function Card({style}) {
    function HandelClick(){
        document.body.style.backgroundColor = style.backgroundColor;
    }
  return (
    <div onClick={HandelClick} id='card' style={style}></div>
  )
}
