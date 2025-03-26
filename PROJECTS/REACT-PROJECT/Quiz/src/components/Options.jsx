import React from 'react'
import correct from '../assets/correct.svg'
import wrong from '../assets/wrong.svg'
export default function Options({ text, onClick, flag, isSelected, correctAnswer}) {
  return (
    <div className="relative">
    <div
      onClick={onClick}
      className={`bg-[#f5f5f583] cursor-pointer border-3 border-[#D9D9D9] p-[10px] text-[24px] font-semibold rounded-[10px] 
      ${isSelected ? 'border-[#007bff]' : ''} // Optional: highlight selected option
      `}
    >
      {text}
    </div>
    {isSelected && text === correctAnswer && (
      <div className="absolute right-2.5 bottom-[50%] translate-y-1/2">
        <img src={correct} alt="Correct Answer" />
      </div>
    )}
    {isSelected && text !== correctAnswer && (
      <div className="absolute right-2.5 bottom-[50%] translate-y-1/2">
        <img src={wrong} alt="Wrong Answer" />
      </div>
    )}
  </div>
  )
}
