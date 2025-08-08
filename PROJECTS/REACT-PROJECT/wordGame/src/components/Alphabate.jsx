import React from "react";
export default function Alphabate({ char, setArr, size, arr, className = "" }) {
  function handleClick() {
    if (arr.length == size) return;
    setArr((currentArr) => [...currentArr, char]);
  }
  const baseStyles = `
    w-10 h-10 sm:w-12 sm:h-12
    flex items-center justify-center
    font-bold text-lg rounded-lg
    transition-all duration-200
    cursor-pointer
  `;
  return (
    <button onClick={handleClick} className={`${baseStyles} ${className}`}>
      {char}
    </button>
  );
}
