import React from 'react'

export default function CheckBox({labelCon,checked,setChecked}) {
  return (
     <>
         <label>{labelCon}</label>
         <input type="checkbox" onChange={()=>{setChecked(!checked)}}  style={{cursor:"pointer"}}/>
     </>
  )
}
