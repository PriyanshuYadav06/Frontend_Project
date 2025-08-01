import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Logo from "./Logo";
import DownArrow from "./DownArrow";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "./Button";
import SignIn from "./SignIn";
import Location from "./Location";
export default function NavBar() {
  const [isSign,setIsSign]=useState(false);
  const [city,setIsCity]=useState(false);
  function SignClick(){
    setIsSign(!isSign);
  }
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        setIsSign(false);
        setIsCity(false);
      }
    }
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  },[]);
  return (
    <>
    <div className=" bg-white">
      <nav className="w-[90vw] mx-auto p-2.5">
      <div className="flex justify-between gap-x-14 items-center">
        <div className="flex justify-start items-center gap-x-6 w-[80%]">
          <Logo/>
          <div className="bg-white border border-gray-200 rounded-md flex  w-full max-w-lg items-center">
          <div className="p-3 text-2xl text-[#999999]">
            <IoIosSearch />
          </div>
          <input
            className="text-[#999999] p-2 outline-none flex-grow"
            type="text"
            placeholder="Search for Movies,Events,Plays,Sports and Activities"
          />
          </div>
        </div>
        <div className="min-w-[200px]">
           <div className="flex gap-x-3.5 items-center">
              <span>Mumbai</span>
              <div onClick={()=>{setIsCity(!city)}}  className="cursor-pointer"><DownArrow/></div>
              <Button onClick={SignClick} text={"Sign in"}/>
              <div className="text-[20px] cursor-pointer"><RxHamburgerMenu/></div>
           </div>
        </div>
      </div>
    </nav>
    </div>
    <SignIn isSign={isSign} setIsSign={setIsSign}/>
    {city?<Location/>:""}
    </>
  );
}
