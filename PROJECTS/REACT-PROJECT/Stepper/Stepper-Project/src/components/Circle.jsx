import React from 'react'
import './Circle.css'
export default function Circle(props) {
  const{text,number,className,extraClass,isCompleted}=props;
  return (
   <>
         <div className= {className}>
         <div className={`circle ${extraClass || ''} ${isCompleted || ''}`}>{number}</div>
         <span>{text}</span>
         </div>
   </>
  )
}
