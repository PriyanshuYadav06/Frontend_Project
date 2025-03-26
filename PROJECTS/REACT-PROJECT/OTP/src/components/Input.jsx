import React from 'react'
export default function Input({onChange,ref}) {
  return (
    <input
    ref={ref}
    onChange={onChange}
    className="bg-black w-[48px] h-[48px] text-white text-center cursor-pointer"
    type="text"
    inputMode="numeric"
    pattern="[0-9]"
    maxLength={1}
/>
  )
}
