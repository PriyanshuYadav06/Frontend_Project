import React, { useState } from 'react'
import Btn from './Btn';
export default function Accordion(props) {
  const{innertxt,answer,isOpen,toggleisActive,index}=props;
  return (
    <div className="accordion">
     <div className='ques'>
          <h3>{innertxt}</h3>
          <div className='ans' style={{ display: isOpen ? 'block' : 'none' }}>{answer} </div>
     </div>
     <Btn  onClick={() => toggleisActive(index)}  isOpen={isOpen} />
    </div>
  )
}
