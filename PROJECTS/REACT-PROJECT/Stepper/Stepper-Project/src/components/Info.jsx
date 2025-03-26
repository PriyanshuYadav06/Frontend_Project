import React from 'react'
import './Info.css'
export default function Info(props) {
    const { innerText } = props;
  return (
   <h2>{innerText}</h2>
  )
}
