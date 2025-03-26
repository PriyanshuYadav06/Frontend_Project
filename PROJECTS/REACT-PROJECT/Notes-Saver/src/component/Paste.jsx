import { removeListener } from '@reduxjs/toolkit';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/PasteSlice'
import toast from 'react-hot-toast';
export default function Paste() {
  const pastes=useSelector((state)=>state.paste.pastes)
  const[searchTerm,setSearchTerm]=useState('');
  console.log(pastes) 
  const dispatch=useDispatch();
  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
  }

  function handleShare(paste) {
    const shareData = {
      title: paste?.title,
      text: `Check out this paste: "${paste?.title}" - ${paste?.content}`,
      url: window.location.origin + `/pastes/${paste?._id}`,
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => toast.success("Shared successfully!"))
        .catch((error) => toast.error("Sharing failed: " + error.message));
    } else {
      navigator.clipboard.writeText(shareData.url);
      toast.success("Link copied to clipboard!");
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown Date";
    return new Date(dateString).toLocaleString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
  };
  return (
    <div className='w-[80vw]'>
      <input
      className='p-2 rounded-2xl mt-5 bg-black w-[50%]'
      type="search"
      placeholder='search here'
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      />
      <div className='flex flex-col gap-5 mt-5'>
        {
           filteredData.length > 0 && filteredData.map(
            (paste)=>{
              return(
                <div className='border rounded-2xl mt-2.5 flex justify-between bg-black p-3 '>
                  <div className='flex flex-col text-left justify-between '>
                      <div className='text-4xl pb-1'>{paste.title}</div>
                      <div className='text-gray-500'>{paste.content}</div>
                  </div>
                   <div className='flex flex-col gap-4 justify-end'>
                      <div className='flex gap-1.5'>
                      <button>
                        <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                      </button>
                      <button>
                        <Link  to={`/pastes/${paste?._id}`}>View</Link>
                      </button>
                      <button onClick={()=>{handleDelete(paste?._id)}}>Delete</button>
                      <button onClick={()=>{
                        navigator.clipboard.writeText(paste.content);
                        toast.success("Copied to Clipboard")
                      }}>Copy</button>
                      <button onClick={() => handleShare(paste)} >Share</button>
                      </div>
                      <div className='flex justify-end'>{formatDate(paste?.createdAt)}</div>
                   </div>
                  
                </div>
                
              )
            }
           )
        }

      </div>
    </div>
  )
}
