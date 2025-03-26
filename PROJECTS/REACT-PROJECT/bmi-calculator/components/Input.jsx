import React from 'react'

export default function Input(props) {
    const {label,placeholder,className,onChange,value}=props;
  return (
    <div className={className}>
      <label htmlFor="">{label}</label>
      <input onChange={onChange} type="text" placeholder={placeholder} value={value} />
    </div>
  )
}
