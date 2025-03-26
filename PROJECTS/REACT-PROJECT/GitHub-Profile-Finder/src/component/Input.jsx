import React from "react";
export default function ({onChnage,onClick,setFlag,flag}) {
  return (
    <div className="flex gap-x-2">
      <input onChange={onChnage} className="p-1.5 grow border-1 border-black rounded-[8px]" type="text" placeholder="Search Github User Name..." />
      <button onClick={onClick}>Search</button>
    </div>
  );
}
