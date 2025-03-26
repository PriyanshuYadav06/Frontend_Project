import React from 'react'
import './ToggleCon.css'
export default function ToggleCon(props) {
    const{isOn}=props;
  return (
    <div className={`toggle ${isOn ? 'ON' : 'OFF'}`}>
         {props.children}
    </div>
  )
}
