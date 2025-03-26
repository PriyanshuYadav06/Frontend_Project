import React, { useState } from 'react'
import './Todo.css'
import Form from './Form';
import TodoList from './TodoList';
import TodoDate from './TodoDate';
export default function Todo() {
    const [task, setTask] = useState([]);
  return (
         <section className='todo-container'>
                <header>
                    <h1>Todo List</h1>
                     <TodoDate />
                </header>
                 <Form setTask={setTask} />
                <section className='myUnOrdList'>
                        <ul>
                            {
                                task.map((item, index)=>{
                                  return(
                                    <TodoList task={task} setTask={setTask} index={index} item={item} />
                                  )
                                })
                            }
                        </ul>
                </section>
                <section>
                    <button className='clear-btn' onClick={()=>{setTask([])}}>Clear All</button>
                </section>
         </section>
  )
}
