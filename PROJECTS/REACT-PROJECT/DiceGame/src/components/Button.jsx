import React from 'react'
import './Button.css'

export default function Button(props) {
  const{onClick}=props;
  return (
    <button onClick={onClick}>Click</button>
  )
}
