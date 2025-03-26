import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleCon from './components/ToggleCon'
import Circle from './components/Circle'
import { IoIosSwitch } from "react-icons/io";

function App() {
  const[isOn,setIsOn]=useState(false);
  const handleClick=()=>{
    setIsOn(!isOn);
  }
  return (
    <>
      <div className='title'>
          <h1>Toggle-Switch </h1>
          <IoIosSwitch style={{ fontSize: "2em",color:isOn?"green":"red"}} />
      </div>
      <ToggleCon isOn={isOn}>
          <Circle text={isOn?'ON':'OFF'} isOn={isOn} onClick={handleClick} />
      </ToggleCon>
    </>
  )
}
export default App
