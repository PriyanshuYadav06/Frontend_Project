import React from 'react'
export default function Button(props) {
  const { Text ,onClick} = props;
  return (
    <button onClick={onClick} className="btn">{Text}</button>
  )
}
