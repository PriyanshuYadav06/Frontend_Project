import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Tag from "./Tag";
import Options from "./Options";
import logo from "../assets/logo.svg";
import Next from "./Next";
import questions from "./questions";
export default function Ques({ score, setScore }) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [flag, setFlag] = useState(false);
  const [time, setTime] = useState(30);
  const timerRef = useRef(null);
  const currentQuestion = questions[currentIndex];
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev === 1) {
          handleNext();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [currentIndex]);
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setTime(30);
    } else {
      navigate("/result");
    }
  };
  const handleOption = (option) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setSelectedAnswer(option);
    if (currentQuestion.correctAnswer === option) {
      setFlag(true);
      setScore((prev) => prev + 1);
    }
    timerRef.current = setTimeout(() => {
      handleNext();
    },1000);
  };
  return (
    <div
      className={`w-[100vw] h-[100vh] flex flex-col items-center  relative
      ${
        time >= 15
          ? "bg-[#cce2c2]"
          : time > 5
          ? "bg-[#D4D69F8C]"
          : "bg-[#dbadad]"
      } 
      `}
    >
      <div className="relative lg:w-[45vw] h-[100vh] flex flex-col items-center ">
        <div className="w-[100%] flex justify-start mt-1.5">
          <div className="w-[200px]">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="w-[100%] flex justify-end m-0">
          <div className="bg-[#FEC33D] text-black text-[36px] font-semibold rounded-[10px] p-[5px]">
            {currentIndex + 1}/{questions.length}
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <div className="text-[#000000] w-[80vw]   lg:w-[45vw] p-6 bg-[#F5F5F57A] rounded-[13px] flex justify-center items-center  text-2xl font-semibold">
            {currentQuestion.question}
          </div>
          <div className="w-[100%] flex justify-end m-0">
            <div
              className={`${
                time >= 15
                  ? "bg-[#23ab10]"
                  : time > 5
                  ? "bg-[#c5b100]"
                  : "bg-[#c50c00]"
              } text-[36px] font-semibold rounded-[10px] p-[5px] my-3.5 text-[white]`}
            >
              00:{time}
            </div>
          </div>
          <div className="text-[#000000] w-[80vw] lg:w-[45vw] bg-[#F5F5F57A] rounded-[13px] flex flex-col gap-y-2.5 text-2xl font-semibold p-3.5">
            {currentQuestion.options.map((option, index) => {
              return (
                <Options
                  key={index}
                  text={option}
                  onClick={() => handleOption(option)}
                  isSelected={selectedAnswer === option}
                  correctAnswer={currentQuestion.correctAnswer}
                />
              );
            })}
          </div>
        </div>
        <div className="w-[100%] flex justify-end m-0">
          <Next onClick={handleNext} />
        </div>
      </div>
      <div className="absolute bottom-0 left-[50%] -translate-x-1/2">
        <Tag />
      </div>
    </div>
  );
}
