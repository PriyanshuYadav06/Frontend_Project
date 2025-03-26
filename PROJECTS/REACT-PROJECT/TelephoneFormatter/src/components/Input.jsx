import React from 'react'
import './Input.css'
export default function Input({onChange,input}) {
  return (
    <input type="text"  placeholder='Mobile Number' onChange={onChange} value={input}/>
  )
}
