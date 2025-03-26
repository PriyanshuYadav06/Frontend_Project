import React from 'react'

export default function Button(props) {
    const {className, InnerText, onClick}=props;
  return (
    
      <button onClick={ onClick} className={className}>{InnerText}</button>
   
  )
}
