import React from "react";
export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-[12px] bg-[#F84464] text-white cursor-pointer p-1.5 rounded-[4px]"
    >
      {text}
    </button>
  );
}
