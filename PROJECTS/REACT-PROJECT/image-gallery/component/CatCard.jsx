import React from 'react'

export default function CatCard(props) {
    const {url,onClick}=props;
  return (
    
      <img onClick={onClick} src={url} alt="" />
   
  )
}
