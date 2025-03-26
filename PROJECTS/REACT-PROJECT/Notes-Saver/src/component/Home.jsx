import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { createWebSocketModuleRunnerTransport } from 'vite/module-runner';
import { addToPastes,  updateToPastes} from '../redux/PasteSlice';
export default function Home() {
  const[title,setTitle]=useState('');
  const[value,setValue]=useState('');
  const [searchParams,setSearchParams]=useSearchParams();
  const pasteId=searchParams.get("pasteId");
  const dispatch=useDispatch();
  const allPastes=useSelector((state)=>state.paste.pastes)
  useEffect(()=>{
     if(pasteId){
      const paste=allPastes.find((p)=>p._id===pasteId)
      setTitle(paste.title);
      setValue(paste.content);
     }
  },[pasteId])
  function createPaste(){
    const paste={
      title:title,
      content:value,
      _id: pasteId || Date.now().toString(36),
      createdAt:new Date().toISOString(),
    }
    if(pasteId){
      // Update
      dispatch( updateToPastes(paste));
    }else{
      // Create
      dispatch(addToPastes(paste));
      
    }
    setTitle('');
    setValue('');
    setSearchParams({});
  }
  return (
    <div className='flex flex-col gap-7 items-center'>
      <div className='flex flex-row gap-7  justify-between w-[100%]'>
      <input className='p-2 rounded-xl grow bg-black mt-2' 
      type="text"
      placeholder='enter title here'
      value={title}
      onChange={(e)=>{setTitle(e.target.value)}}
      />
      <button onClick={createPaste} className='p-2 rounded-xl mt-2'>{pasteId?"Update Paste":"Create My Paste"} </button>
      </div>
      <div className='min-w-[500px]'>
         <div>
             <textarea
             className='bg-black rounded-2xl w-[100%] p-3.5'
             value={value}
             placeholder='enter content here'
             onChange={(e)=>{setValue(e.target.value)}}
             rows={20}
             />
         </div>
      </div>
    </div>
  )
}
