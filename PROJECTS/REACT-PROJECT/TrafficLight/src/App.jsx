import { useEffect, useState } from 'react'
import './App.css'
import Circle from './components/Circle'
import Timer from './Timer';
function App() {
  const[isred,setIsred]=useState(true);
  const[isyellow,setIsyellow]=useState(false);
  const[isgreen,setIsgreen]=useState(false);
  const[count,setCount]=useState(5);
  useEffect(()=>{
    let intervalId;
    let timeout;
     if(isred){
      setCount(5);
       timeout = setTimeout(()=>{
        setIsred(false);
        setIsgreen(true);
      },5000)
     }else if(isgreen){
        setCount(3);
         timeout = setTimeout(() => {
          setIsgreen(false);
          setIsyellow(true);         
        },3000);
      }else if(isyellow){
        setCount(2);
         timeout = setTimeout(()=>{
          setIsyellow(false);
          setIsred(true);
        },2000)
      }
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => {
        clearTimeout(timeout);
        clearInterval(intervalId);
      };

  },[isred, isgreen, isyellow])
  return (
      <div className='container'>
         <div className='Circle-Con'>
              <Circle className={isred?"red":""} />
              <Circle className={isyellow ? "yellow" : ""} />
              <Circle   className={isgreen?"green":""} />
        </div>
         <Timer count={count} />
      </div>
  )
}
export default App
