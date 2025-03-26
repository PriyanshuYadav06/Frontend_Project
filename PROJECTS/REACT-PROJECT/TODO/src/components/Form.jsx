import React, { useEffect, useState } from 'react'

export default function Form({setTask}) {
    const [inputValue, setInputValue] = useState({});
     function HandelFormSubmit(e){
            e.preventDefault();
            if(!inputValue.content.trim()){
                return;
            }
            setTask((prev)=>{
                if(prev.includes(inputValue.content)){
                    return prev;
                }else{
                    return [...prev, inputValue.content];
                }
            });
            setInputValue('');
        }
  return (
    <section className='form'>
                        <form onSubmit={HandelFormSubmit}>
                            <div>
                                <input type="text" className='todo-input' autoComplete='off' value={inputValue.content} onChange={(e)=>{setInputValue({id:value,content:e.target.value,checked:false})}} />
                            </div>
                            <div><button type="submit" className='todo-btn'>Add Task</button></div>
                        </form>
                </section>
  )
}
