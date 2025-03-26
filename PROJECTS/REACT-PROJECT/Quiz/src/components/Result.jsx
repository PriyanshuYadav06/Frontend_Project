import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import Tag from './Tag'
import { Navigate, useNavigate } from 'react-router-dom';
import { FaInstagram, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
export default function Result({ score }) {
    const [width, setWidth] = useState("0%");
    const navigate = useNavigate(); 
    function handleRetry(){
        navigate("/");
    }
    useEffect(() => {
        const timer = setTimeout(() => {
          setWidth(`${score * 10}%`);
        },100);
        return () => clearTimeout(timer);
      },[score]);
      const quizUrl = `https://quizbypruiyanshu.netlify.app/result?score=${score}`;
      const shareLinks = {
        instagram: "https://www.instagram.com",
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(quizUrl)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`I scored ${score}/10 in this quiz! Try it yourself: ${quizUrl}`)}`,
    };
  return (
    <div className="w-[100vw] h-[100vh]  bg-[#cce2c2] flex flex-col items-center justify-around">
      <div className="flex justify-center items-center flex-col">
        <img className="w-[222px]" src={logo} alt="" />
        <div className="font-bold text-[24px]">Result</div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="w-[80vw] lg:w-[40vw] h-24 bg-[#ff7a7a] rounded-2xl">
          <div
            className={`h-full bg-[#35BD3A] rounded-2xl transition-all duration-500 ease-out`}
            style={{ width }}
          ></div>
        </div>
        <div className="text-[20px] font-bold">{score}/10</div>
      </div>
      {score !== 10 ? (
        <div className="mb-20 flex justify-center items-center flex-col">
          <div className="text-center lg:text-3xl text-2xl font-bold">
            Keep learning, you have a good score!
          </div>
          <button onClick={handleRetry} className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition flex items-center space-x-2">
            <span className="text-lg">‹‹‹</span>
            <span>Retry</span>
          </button>
        </div>
      ) : (
        <div className="mb-20 flex justify-center items-center flex-col">
          <div className="text-center lg:text-3xl text-2xl font-bold">
            Outstanding! A perfect 10/10! Keep up the great work!
          </div>
          <button onClick={handleRetry} className="px-6 py-2 bg-green-600 text-white font-bold rounded-lg shadow-lg hover:bg-green-700 transition flex items-center space-x-2">
            <span className="text-lg">‹‹‹</span>
            <span>Retry</span>
          </button>
        </div>
      )}

      <div className="flex flex-col justify-between items-center mb-7">
         <div className="text-2xl text-[#535353] font-bold">Share Your Score</div>
         <div className="flex justify-center items-center gap-x-3.5">
         <a target="_blank"  className="text-2xl" href={shareLinks.instagram} rel="noopener noreferrer"><FaInstagramSquare /></a>
         <a target="_blank"  className="text-2xl" href={shareLinks.linkedin}  rel="noopener noreferrer"><FaLinkedin /></a>
         <a target="_blank"  className="text-2xl" href={shareLinks.twitter} rel="noopener noreferrer"><FaTwitterSquare /></a>
         </div>
      </div>

    <div className='absolute bottom-0 left-[50%] -translate-x-1/2'><Tag/></div>
    </div>
  );
}
