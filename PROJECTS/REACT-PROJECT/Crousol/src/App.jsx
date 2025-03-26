import { useEffect, useState,useRef } from 'react'
import './App.css'
import Button from './component/Button'
import Bullet from './component/Bullet';
import CheckBox from './component/CheckBox';
function App() {
  const [count, setCount] = useState(1);
  const [checkOne,setCheckOne]=useState(false);
  const [checkTwo,setCheckTwo]=useState(false);
  const cat1="https://sadanandpai.github.io/frontend-mini-challenges/javascript/assets/1-6Q-Ljgvj.jpg";
  const cat2="https://sadanandpai.github.io/frontend-mini-challenges/javascript/assets/2-ts1ERVp4.jpg";
  const cat3="https://sadanandpai.github.io/frontend-mini-challenges/javascript/assets/3-BKsjAI35.jpg"
  const cat4="https://sadanandpai.github.io/frontend-mini-challenges/javascript/assets/4-jBKFNbbR.jpg";
  const cat5="https://sadanandpai.github.io/frontend-mini-challenges/javascript/assets/5-BdOPS-VD.jpg";
  const intervalRef = useRef(null); 
  useEffect(() => {
    if(checkTwo){
      intervalRef.current=setInterval(()=>{
        console.log("hello");
        handleClickFor();
      },1000)
    }else{
      clearInterval( intervalRef.current);
    }
    return () => {clearInterval( intervalRef.current)}
  })
  function handleClickBack(){
    if(count==1 && checkOne){
      setCount(5);
    }
    if(count==1) return;
    setCount(count-1);
  }
  function handleClickFor(){
    if(count==5 && checkOne){
      setCount(1);
    }
    if(count==5) return;
    setCount(count+1);
  }
  return (
    <div>
       <h1>Carousel</h1>
       <div className='con'>
             <Button onClick={handleClickBack} BtnName={"<"} disabled={count === 1 && !checkOne}/>
            <img src={count==1?cat1:count==2?cat2:count==3?cat3:count==4?cat4:count==5?cat5:""} alt="" /> 
            <Button onClick={handleClickFor} BtnName={">"} disabled={count === 5 && !checkOne}/>
       </div>
       <div className='dot-con'>
          <Bullet onClick={()=>{setCount(1)}} style={{backgroundColor:count==1?"royalblue":""}} />
          <Bullet onClick={()=>{setCount(2)}} style={{backgroundColor:count==2?"royalblue":""}} />
          <Bullet onClick={()=>{setCount(3)}} style={{backgroundColor:count==3?"royalblue":""}} />
          <Bullet onClick={()=>{setCount(4)}} style={{backgroundColor:count==4?"royalblue":""}} />
          <Bullet onClick={()=>{setCount(5)}} style={{backgroundColor:count==5?"royalblue":""}} />
        </div>
        <div className='checkOne-con'>
            <CheckBox labelCon={"Infinite-Scroll:"} checked={checkOne} setChecked={setCheckOne}/>
        </div>

        <div className='checkTwo-con'>
            <CheckBox labelCon={"Autoplay:"} checked={checkTwo} setChecked={setCheckTwo}/>
        </div>
    </div>
  )
}
export default App
