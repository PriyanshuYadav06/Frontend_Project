import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});
  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const getData = async () => {
    try {
      if (cache[input]) {
        setResults(cache[input]);
        return;
      } else {
        const response = await axios.get(`https://dummyjson.com/recipes/search?q=${input}`);
        setResults(response.data.recipes);
        setCache((prev) => ({ ...prev, [input]: response.data.recipes }));
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const timerId = setTimeout(() => {
      getData();
    }, 300);
    return () => {
      clearTimeout(timerId);
    }
  }, [input])
  return (
    < >
      <div>
        <h1>Auto Complete Search-Bar</h1>
        <div className='InputCon'>
          <input
            onFocus={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
            onChange={handleChange}
            value={input}
            type="text" />
          {showResults && (<div className='suggestions'>
            {results.map((result) => {
              return <span key={result.id}>{result.name}</span>
            })}
          </div>)}
        </div>
      </div>
    </>
  )
}
export default App
