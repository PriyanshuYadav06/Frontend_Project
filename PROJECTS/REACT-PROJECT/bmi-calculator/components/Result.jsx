import React from 'react'

export default function Result(props) {
  const {bmi}=props
  return (
    <div >
         <span>YOUR BMI IS:{bmi}</span>
    </div>
  )
}
