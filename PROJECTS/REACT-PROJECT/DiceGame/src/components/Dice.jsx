import React from 'react'
import './Dice.css'

export default function Dice(props) {
    const{children,className}=props;
  return (
    <div  className={`MainDice ${className}`}>{children}</div>
  )
}
