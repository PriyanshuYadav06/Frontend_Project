import { useState } from 'react'
import './App.css'
import Star from './components/Star'
function App() {
  const [isHovered, setIsHovered] = useState(false);
  const[index,setIndex]=useState(1);
  return (
    <>
      <div>
            <Star onMouseEnter={() =>{setIsHovered(true); setIndex(1)}} 
            onMouseLeave={() => setIsHovered(false)} symbol="★" />
            <Star   onMouseEnter={() =>{setIsHovered(true); setIndex(2)}} onMouseLeave={() => setIsHovered(false)} symbol={(isHovered && index>=2)? "★":"☆"} />
            <Star   onMouseEnter={() =>{setIsHovered(true); setIndex(3)}}onMouseLeave={() => setIsHovered(false)} symbol={(isHovered && index>=3)? "★":"☆"} />
            <Star   onMouseEnter={() =>{setIsHovered(true); setIndex(4)}} onMouseLeave={() => setIsHovered(false)} symbol={(isHovered && index>=4)? "★":"☆"} />
            <Star  onMouseEnter={() =>{setIsHovered(true); setIndex(5)}}onMouseLeave={() => setIsHovered(false)} symbol={(isHovered && index==5)? "★":"☆"} />
          
      </div>
    </>
  )
}
export default App
