import React from 'react'

export default function Button({btnName,onClick}) {
  return (
     <button onClick={onClick}>{btnName}</button>
  )
}
