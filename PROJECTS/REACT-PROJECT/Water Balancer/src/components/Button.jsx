import React from 'react'
import './Button.css'
export default function Button({text,className,onMouseDown,onMouseUp,onClick}) {
  return (
    <button onClick={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp} className={className}>
      {text}
    </button>
  )
}
