import React from 'react'

export default function Button(props) {
    const{text,onClick}=props;
  return (
    <button onClick={onClick} style={{"cursor":"pointer"}}>{text}</button>
  )
}
