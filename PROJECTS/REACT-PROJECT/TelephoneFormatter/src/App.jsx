import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Example from './components/Example'
function App() {
  const[input,setInput]=useState("");
  const[arr,setArr]=useState([]);
  function HandelChange(e) {
    if(input.length===16) return;
    const value = e.target.value;
    const lastChar = value[value.length - 1];
    console.log(lastChar,input.length+1);
    if (Number.isInteger(Number(e.target.value)))
    { 
      setInput(e.target.value);
      setArr([...e.target.value])
    }
    if(input.length+1>3){
      arr.push(lastChar);
      let formattedString = `+(${arr.slice(0,3).join('')}) - ${arr.slice(3).join('')}`;
      setInput(formattedString)
    }
   
}

  return (
    <>
      <Input onChange={HandelChange} input={input} />
      <Example />
    </>
   
  )
}

export default App
