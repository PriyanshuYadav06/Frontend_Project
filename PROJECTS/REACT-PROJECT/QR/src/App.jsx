import { useRef, useState } from 'react'
import QRCode from "react-qr-code";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const[text,setText]=useState("");
  const [qrValue, setQrValue] = useState(""); 
  function handleChange(){
      setQrValue(text);
  }
  return (
    <>
       <div className='flex flex-col gap-3.5 items-center w-max'>
          <div className='flex gap-x-1'>
          <input className='bg-black p-2.5 rounded-xl w-[80%]' type="text" placeholder='enter what do you want to store inside the scanner' onChange={(e)=>{setText(e.target.value)}} />
          <button onClick={handleChange}>Generate</button>
          </div>
          <div className='bg-white p-5 rounded-2xl flex justify-center items-center'>
          <QRCode value={qrValue} />
          </div>
       </div>
    </>
  )
}

export default App
