import React from 'react'
import './Star.css'
// ★ is a star character
//☆ is a star character
export default function Star(props) {
  let {onMouseEnter,onMouseLeave,symbol} = props;
  return (
     <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>{symbol}</span>
  )
}
