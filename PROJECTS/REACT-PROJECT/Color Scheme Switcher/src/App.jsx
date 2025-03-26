import React from 'react'
import './App.css'
import Card from './components/Card'
import Text from './components/Text'

function App() {
  return (
   <div className='Container'>        
       <Text text='Color Scheme Switcher' className='title' />
        <div className='App'>
            <Card style={{ 'backgroundColor': 'blue'}}/>
            <Card style={{'backgroundColor': 'red'}}/>
            <Card style={{'backgroundColor': 'yellow'}}/>
            <Card style={{'backgroundColor': 'green'}}/>
        </div>
        <Text text='Try clicking to one of the colors above to change the background color of this pages!' className='footer' />
   </div>
  )
}

export default App
