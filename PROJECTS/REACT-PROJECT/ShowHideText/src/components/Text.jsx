import React from 'react'

export default function Text(props) {
    const{title,text,showText,style} = props;
   
  return (
    <div className='container'>
      <h1>{title}</h1>
      <p style={style}>{text}</p>
    </div>
  )
}
