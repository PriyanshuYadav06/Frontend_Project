import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
export default function Hint({ text, className = "" }) {
  const containerStyles =
    "flex items-center justify-center gap-3 bg-slate-100/70 p-3 rounded-lg border border-slate-200 w-full max-w-md mx-auto";
  const textStyles = "text-sm sm:text-base text-slate-700";
  return (
    <div className={`${containerStyles} ${className}`}>
      <HiOutlineLightBulb className="text-5xl" color="Yellow" />
      <p className={textStyles}>
        <span className="font-bold not-italic text-slate-800 mr-1">Hint:</span>
        <span className="italic">{text}</span>
      </p>
    </div>
  );
}
