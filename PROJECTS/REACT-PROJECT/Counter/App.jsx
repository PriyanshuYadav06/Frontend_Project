import React, { useState } from 'react'
import Button from './component/Button'
import Count from './component/Count'
import './App.css'
import IncrementCount from './component/IncrementCount'
export default function App() {
    const [count, setCount] = useState(0);
    const [incrementValue, setIncrementValue] = useState(1);
  return (
    <div className='Container'>
         <Count 
            CountNum={count}
        />
      <div className='btn-container'>
            <Button
            onClick={() => setCount(count + Number(incrementValue))} 
            className="Plus btn"
            InnerText="+"
            />
            <Button
            onClick={() => setCount(count - Number(incrementValue))} 
            className="Minus btn"
            InnerText="-"
            />
      </div>
      <div className='input'>
        <IncrementCount
           value={incrementValue}
           onChange={(e) => setIncrementValue(e.target.value)}
         />
      </div>
      <Button
            onClick={() =>{
                setCount(0);
                setIncrementValue(1);
            }}  
            className="Reset btn"
            InnerText="Reset"
            />
    </div>
  )
}
