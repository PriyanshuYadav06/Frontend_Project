import React from 'react'
import SelectedImg from './SelectedImg';

export default function CallSelectedImg(props) {
    const {url,className}=props;
  return (
       
       <div className='SelectedImg'>
            <SelectedImg
              className={className}
              url={url}
             />
        </div>
    
  )
}
