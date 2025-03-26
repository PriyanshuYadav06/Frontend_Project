import { useState,useEffect } from 'react'
import './App.css'
import Dice from './components/Dice'
import DiceOne from './components/DiceOne'
import DiceTwo from './components/DiceTwo'
import DiceThree from './components/DiceThree'
import DiceFour from './components/DiceFour'
import DiceFive from './components/DiceFive'
import Result from './components/Result'
import Player from './components/Player'
import Button from './components/Button'
function App() {
  const [arr, setArr] = useState([]);
  const[dice1,setDice1]=useState(4);
  const[dice2,setDice2]=useState(4);
  useEffect(() => {
    setArr([
      <DiceOne key={1} />,
      <DiceTwo key={2} />,
      <DiceThree key={3} />,
      <DiceFour key={4} />,
      <DiceFive key={5} />
    ]);
  },[]);
  const getRandomNumber = () => Math.floor(Math.random() * 5);
  return (
      <div className='MAIN'>
          <Result result={dice1 === dice2?"Match Draw!":dice1 >dice2 ?"Player1 Wins!": "Player2 Wins!"}/>
          <div className='DiceClass'>
              <div className='InsideDiceClass'>
                <Player text={"Player 1"} />
                {dice1===0 ? <DiceOne/> : ""}
                {dice1===1 ? <DiceTwo/> : ""}
                {dice1===2 ? <DiceThree/> : ""}
                {dice1===3 ? <DiceFour/> : ""}
                {dice1===4 ? <DiceFive/> : ""}
              </div>
              <div className='InsideDiceClass'>
                <Player text={"Player 2"}  />
                {dice2===0 ? <DiceOne/> : ""}
                {dice2===1 ? <DiceTwo/> : ""}
                {dice2===2 ? <DiceThree/> : ""}
                {dice2===3 ? <DiceFour/> : ""}
                {dice2===4 ? <DiceFive/> : ""}
              </div>
          </div>
          <Button onClick={()=>{
              setDice1(getRandomNumber());
              setDice2(getRandomNumber()); 
          }} />
      </div>
  )
}
export default App
