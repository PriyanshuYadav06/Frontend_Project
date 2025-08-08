import React from "react";

export default function Button({
  text,
  onClick,
  disabled,
  variant = "primary",
  className = "",
}) {
  const baseStyles = `
    px-5 py-2.5 
    font-semibold text-white 
    rounded-lg shadow-md 
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    transform hover:-translate-y-0.5
  `;
  const variants = {
    primary: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
    danger: "bg-red-600 hover:bg-red-700 focus:ring-red-500",
    special: "bg-sky-500 hover:bg-sky-600 focus:ring-sky-500",
    warning: "bg-orange-500 hover:bg-orange-600 focus:ring-orange-500",
  };
  const disabledStyles = `
    disabled:bg-slate-300 
    disabled:text-slate-500 
    disabled:shadow-none 
    disabled:cursor-not-allowed
    disabled:transform-none
  `;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`}
    >
      {text}
    </button>
  );
}
