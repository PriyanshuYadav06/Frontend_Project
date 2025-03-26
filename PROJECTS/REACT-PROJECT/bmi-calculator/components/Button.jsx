import React from 'react'

export default function Button(props) {
  const{className,onClick}=props;
  return (
    <button onClick={onClick} className={className}>Calculate</button>
  )
}
