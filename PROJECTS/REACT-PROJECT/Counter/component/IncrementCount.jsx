import React from 'react'

export default function IncrementCount(props) {
    const {value, onChange}=props
  return (
   <>
        <label htmlFor="">Increment/Decrement by:</label>
        <input onChange={onChange}  type="number" name="" id="" value={value} />
   </>
  )
}
