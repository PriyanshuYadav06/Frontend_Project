import { useState,useRef } from 'react'
import './App.css'
import ProgressBar from './component/ProgressBar'
import Button from './component/Button'
function App() {
  const [width,setWidth]=useState(0);
  const intervalRef = useRef(null);
  function handleStart(){
    intervalRef.current= setInterval(()=>{
            setWidth((prev)=>{
              if(prev==100) handleStop();
              return prev+1
            });
          },100)
  }
  function handleStop(){
    clearInterval(intervalRef.current);
    intervalRef.current=null;
  }
  function handleReset(){
    handleStop();
    setWidth(0);
  }
  return (
    <>
       <ProgressBar width={width} handleStop={handleStop}/>
       <div className='btn-container'>
          <Button onClick={handleStart} btnName="Start" />
          <Button onClick={handleStop} btnName="Stop" />
          <Button onClick={handleReset} btnName="Reset" />
       </div>
    </>
  )
}

export default App
