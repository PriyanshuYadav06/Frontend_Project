import React, { useEffect, useState } from 'react'
export default function TodoDate() {
      const[DateTime,setDateTime]=useState('');
        useEffect(()=>{
                const interval= setInterval(() => {
                const now=new Date();
                const formatedDate=now.toLocaleDateString();
                const formatedTime=now.toLocaleTimeString();
                setDateTime(`${formatedDate}-${formatedTime}`);
             }, 1000);
             return () => clearInterval(interval);
        })
  return (
    <h5 className='date-time'>{DateTime}</h5>
  )
}
