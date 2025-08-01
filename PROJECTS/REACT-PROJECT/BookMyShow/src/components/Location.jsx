import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
export default function Location() {
    const[isCity,setIsCity]=useState(false);
  return (
    <div className={`absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white p-3.5 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
        isCity ? "scale-100 opacity-100" : "scale-95 opacity-100"
      }`}>
      <div className="flex flex-col gap-3">
      <div className="bg-white border border-gray-200 rounded-md flex   items-center">
        <div className="p-3 text-2xl text-[#999999]">
          <IoIosSearch />
        </div>
        <input
          className="text-[#999999] p-2 outline-none flex-grow"
          type="text"
          placeholder="Search for your city"
        />
      </div>
     <div className="w-[100%] border border-[#999999]"></div>
      <div className="text-center">Popular Cities</div>
      <div className="flex flex-wrap justify-center  ">
        <img className="cursor-pointer" src="https://in.bmscdn.com/m6/images/common-modules/regions/mumbai-selected.png" alt="" />
        <img className="cursor-pointer" src="https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png" alt="" />
        <img className="cursor-pointer" src="https://in.bmscdn.com/m6/images/common-modules/regions/bang.png" alt="" />
        <img className="cursor-pointer" src="https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png" alt="" />
        <img className="cursor-pointer" src="https://in.bmscdn.com/m6/images/common-modules/regions/chd.png" alt="" />
        <img className="cursor-pointer" src="https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png" alt="" />
        <img className="cursor-pointer" src="https://in.bmscdn.com/m6/images/common-modules/regions/chen.png" alt="" />
        <img className="cursor-pointer" src="https://in.bmscdn.com/m6/images/common-modules/regions/pune.png" alt="" />
        <img className="cursor-pointer" src="https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png" alt="" />
      </div>
      {!isCity?<div onClick={()=>{setIsCity(!isCity )}} className="text-center text-[#e24b63] cursor-pointer">View All Cities</div>:""}
      </div>
      {
        isCity?
        <div className="mt-1.5">
        <div className="flex justify-between"> 
                <div className="flex flex-col text-[12px] text-[#999999]">
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                </div>
                <div className="flex flex-col text-[12px] text-[#999999]">
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                </div>
                <div className="flex flex-col text-[12px] text-[#999999]">
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                </div>
                <div className="flex flex-col text-[12px] text-[#999999]">
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                </div>
                <div className="flex flex-col text-[12px] text-[#999999]">
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                    <span>Aalo</span>
                </div>
            </div>
            <div onClick={()=>{
                setIsCity(!isCity);
            }} className="text-center text-[#e24b63] cursor-pointer mt-3">Hide All Cities</div>
        </div>
      :""
      }
    </div>
  );
}
