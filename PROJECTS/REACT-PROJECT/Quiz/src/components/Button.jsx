import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
export default function Button({text}) {
  const navigate = useNavigate(); 
  return (
    <button onClick={()=>{navigate("/ques");}} className='bg-[#35BD3A] text-4xl text-[#ffffff]'>{text}</button>
  )
}
