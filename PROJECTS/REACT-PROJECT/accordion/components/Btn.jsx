import React from 'react'

export default function Btn(props) {
    const {isOpen,onClick}=props;
  return (
    <>
      <div onClick={onClick} className="circle">
            <span>{isOpen? '-':'+'}</span>
      </div>
    </>
  )
}
