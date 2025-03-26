import React from 'react'
export default function Input({label,id,name,onChange,value,error,pattern}) {
  return (
    <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      name={name}
      onChange={onChange}
      value={value}
      pattern={pattern}
    />
    <p className="errs">{error}</p>
  </div>
  )
}
 