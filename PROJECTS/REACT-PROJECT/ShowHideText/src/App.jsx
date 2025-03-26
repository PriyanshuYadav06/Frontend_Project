import React, { useState } from 'react'
import './App.css'
import Text from './components/Text'
import Button from './components/Button'
function App() {
  const[showText,setShowText]=useState(true);
  function ToggleShow(){
    setShowText(prevShowText => {
      console.log(!prevShowText);
      return !prevShowText;
    });
  }
  return (
     <div id='app'>
          <Text showText={showText} title='Welcome to React' text='Learning React is fun and powerful. Start by understanding components!' style={{display: showText ? "block" : "none" }}/>
          <div id="btn"> 
            {showText? <Button onClick={ToggleShow} text='Hide Text'/>:<Button onClick={ToggleShow} text='Show Text'/>}
          </div>
     </div>
  )
}

export default App
