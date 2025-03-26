import React from 'react'

export default function SelectedImg(props) {
    const {url,className}=props;
  return (
    <>
        <h3>Selected Image</h3>
        <img className={className}  src={url} alt="" />
       
    </>
  )
}
