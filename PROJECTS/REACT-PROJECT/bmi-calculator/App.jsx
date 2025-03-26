import { useState } from "react";
import Heading from './components/Heading'
import Input from './components/Input'
import Button from './components/Button'
import BmiInfo from './components/BmiInfo'
import Result from "./components/Result";
import './App.css'
export default function App() {
  const [Weight, setWeight] = useState("");
  const [Height, setHeight] = useState("");
  const [bmiResult, setBmiResult] = useState("");
  const calculateBMI = () => {
    const heightInMeters = parseFloat(Height) / 100;
    const weightInKg = parseFloat(Weight);
    if (isNaN(heightInMeters) || isNaN(weightInKg) || heightInMeters <= 0 || weightInKg <= 0) {
      alert("Please enter valid height and weight values.");
      return;
    }
    const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    setBmiResult(bmi);
  };


  return (
    <div className='container'>
      <Heading />
       <div className='input-container'>
       <Input
        className="input Height" 
        label="Height in CM:"
        placeholder="Height in CM"
        onChange={(e)=>{
          setHeight(e.target.value)
        }}
        value={Height}
       />
       <Input 
        className="input Weight" 
        label="Weight in KG:"
        placeholder="Weight in KG"
        onChange={(e)=>{
          setWeight(e.target.value)
        }}
        value={Weight}
       />
        <Button
         onClick={calculateBMI}
         className="btn"
        />
       </div>
        {((Weight != "" && Height !="" && bmiResult!="") &&  <Result 
          bmi={bmiResult}
        />)}
       <BmiInfo />
    </div>
  )
}
