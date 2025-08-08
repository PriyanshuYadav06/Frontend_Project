import React from "react";

export default function Output({ text, className = "" }) {
  const baseStyles =
    "w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center text-3xl sm:text-4xl font-bold transition-all duration-300 ease-in-out";
  const dynamicStyles = text
    ? "bg-amber-300 border-2 border-amber-400 text-green-800 scale-110 shadow-lg"
    : "bg-slate-200 border-2 border-slate-300 text-slate-400";
  return (
    <div className={`${baseStyles} ${dynamicStyles} ${className}`}>{text}</div>
  );
}
