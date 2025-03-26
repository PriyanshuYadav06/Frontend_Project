import { useEffect, useState } from "react";
import './App.css'
import SelectedImg from './component/SelectedImg'
import CatCard from './component/CatCard'
import cat1 from './assest/cat1.webp'
import cat2 from './assest/cat2.webp'
import cat3 from './assest/cat3.webp'
import cat4 from './assest/cat4.webp'
import CallSelectedImg from './component/CallSelectedImg'

export default function App() {
  const [select,setSelect]=useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  },[]);
  
  return (
    <>
        <div className='cat-container'>
          <CatCard
          url={cat1}
          onClick={(e)=>{
              setSelect(cat1);
          }}
        />
          <CatCard
          url={cat2}
          onClick={(e)=>{
            setSelect(cat2);
        }}
        />
          <CatCard
          url={cat3}
          onClick={(e)=>{
            setSelect(cat3);
        }}
        />
          <CatCard
          url={cat4}
          onClick={(e)=>{
            setSelect(cat4);
        }}
        />
        </div>
        {select !== "" && <CallSelectedImg className='simg' url={select} />}
    </>
  )
}
