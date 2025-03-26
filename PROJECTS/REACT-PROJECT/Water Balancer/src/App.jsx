import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Container from './components/Container'
import MainCon from './components/MainCon'
function App() {
  const [litersArray, setLitersArray] = useState([0, 0, 0, 0]);
  const totalWater = litersArray.reduce((sum, liters) => sum + liters, 0);
  return (
    <div className='OutsideApp'>
      <p>Press and Hold "Add" to start filling the tanks</p>
      <div className='InsideApp'>
        {litersArray.map((liters,index)=>{
          return <MainCon
          totalWater={totalWater}
          key={index}
          index={index}
          litersArray={litersArray}
          setLitersArray={setLitersArray}
          />
        })}
    </div>
    </div>
  )
}
export default App
