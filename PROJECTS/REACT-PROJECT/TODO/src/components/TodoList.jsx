import React from 'react'
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
export default function TodoList(props) {
  const {index,item,task,setTask}=props;
  return (
    <li className='todo-item' key={index}>
    <span>{item}</span>
     <div className='btns'>
     <button className='check-btn'><MdCheck /></button>
     <button className='delete-btn' onClick={()=>{
         const UpdatedTask=task.filter((ele,i)=>i!==index);
         setTask(UpdatedTask);
     }}><MdDeleteForever /></button>
     </div>
     </li>
     
  )
}
