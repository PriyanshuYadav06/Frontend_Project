import { useState } from 'react'
import './App.css'
import json from './data.json'
import List from './Components/List'
function App() {
  const [data, setData] = useState(json);
  return (
    <div className='App'>
      <h1>File/Folder Explorer</h1>
      <List list={data} setData={setData} />
    </div>
  )
}
export default App
