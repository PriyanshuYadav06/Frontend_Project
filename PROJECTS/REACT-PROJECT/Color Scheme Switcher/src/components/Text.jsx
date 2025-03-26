import React from 'react'

export default function Text(props) {
  const{text,className}=props;
  return (
    <p className={className} >{text}</p>
  )
}
