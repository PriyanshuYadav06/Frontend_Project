import { useState } from 'react'
import Button from "./Button";
import Container from "./Container";
import Measure from "./Measure";
import "./MainCon.css";
export default function MainCon({ index, litersArray, setLitersArray,totalWater}){
  const[waterLen,setWaterLen]=useState(0);
  const[flag,setFlag]=useState(false);
  const[isempty,setIsempty]=useState(false);
  const[liters,setLiters]=useState(0);
  function handleMouseDown(){
    setFlag(true);
  }
  function handleMouseUp(){
    setFlag(false);
  }
  function handleClick(){
    setIsempty(true);
    setTimeout(()=>{setIsempty(false)},200)
  }
  return (
    <div className="outerCon">
      <div className="innerConOne">
        <Button className="Add" text="ADD"  onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}  />
        <Button onClick={handleClick} className="Empty" text="EMPTY" />
      </div>
      <div className="innerConTwo">
        <Container
        totalWater={totalWater}
          litersArray={litersArray}
          setLitersArray={setLitersArray}
          index={index} liters={liters} setLiters={setLiters} isempty={isempty} flag={flag} waterLen={waterLen} setWaterLen={setWaterLen}/>
        <Measure liters={litersArray[index]}/>
      </div>
    </div>
  );
}
