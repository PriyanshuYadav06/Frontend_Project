import React from 'react'

export default function Image({src}) {
  return (
    <img className='w-[150px] h-[150px] rounded-[50%]' src={src} alt="" />
  )
}
