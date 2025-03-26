import React from 'react'
export default function Button({BtnName,onClick,disabled}) {
  return (
     <button onClick={onClick} disabled={disabled}>{BtnName}</button>
  )
}
