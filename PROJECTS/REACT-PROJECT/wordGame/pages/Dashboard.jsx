import React, { useEffect, useState } from "react";
import Output from "../src/components/Output";
import Button from "../src/components/Button";
import Hint from "../src/components/Hint";
import Alphabate from "../src/components/Alphabate";
import wordList from "../data/hints";
import "@ant-design/v5-patch-for-react-19";
import { Flex, Progress, Tooltip, message, Space, Row, Statistic } from "antd";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const [hints, setHints] = useState(3);
  const [arr, setArr] = useState([]);
  const [idx, setIdx] = useState(() => {
    return Math.floor(Math.random() * 40);
  });
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [total, setTotal] = useState(0);
  const currentWord = wordList[idx].word;
  const navigate = useNavigate();
  const { Timer } = Statistic;
  console.log(currentWord);
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();

      if (key === "BACKSPACE") {
        setArr((prevArr) => prevArr.slice(0, -1));
      } else if (
        /^[A-Z]$/.test(key) &&
        arr.length !== wordList[idx].word.length
      ) {
        setArr((prevArr) => [...prevArr, key]);
      } else if (key === "ENTER") {
        clickGuess();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [arr, idx]);
  useEffect(() => {
    if (total == 10) {
      navigate("/result", { state: { correct, wrong } });
    }
  }, [total]);
  const chars = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );
  function clickRestart() {
    setArr([]);
    setCorrect(0);
    setWrong(0);
    setTotal(0);
    setHints(3);
    setIdx(() => {
      return Math.floor(Math.random() * 14);
    });
  }
  function clickRemove() {
    let upadtedArr = [...arr];
    upadtedArr.pop();
    setArr(upadtedArr);
  }
  function clickGuess() {
    const word = arr.join("");
    if (word == currentWord) {
      message.success("Correct Guess");
      setCorrect((prev) => prev + 1);
    } else {
      message.error("Wrong Guess");
      setWrong((prev) => prev + 1);
    }
    setTotal((prev) => prev + 1);
    setIdx(() => Math.floor(Math.random() * 40));
    setArr([]);
  }
  function clickHint() {
    let word = wordList[idx].word;
    let a;
    if (hints == 3) {
      a = word[0];
    } else if (hints == 2) {
      a = word[1];
    } else if (hints == 1) {
      a = word[2];
    }
    setArr((prev) => {
      const update = [...prev, a];
      return update;
    });
    setHints((prev) => prev - 1);
  }
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500 pb-2">
            Word Guess Game
          </h1>
        </div>
        <div className="flex justify-center items-center gap-2 sm:gap-4">
          {Array.from({ length: currentWord.length }).map((_, i) => (
            <Output
              key={i}
              text={arr[i]}
              className={`
                w-16 h-16 sm:w-20 sm:h-20 
                flex items-center justify-center 
                bg-slate-200 border-2 border-slate-300 rounded-full
                text-3xl sm:text-4xl font-bold text-slate-700
                transition-all duration-300 ease-in-out
                ${arr[i] ? "bg-yellow-300 border-yellow-400 scale-110" : ""}
              `}
            />
          ))}
        </div>
        <div className="text-center space-y-4 pt-4">
          <Hint
            text={`${wordList[idx].hint}`}
            className="text-slate-600 italic"
          />
          <div className="flex justify-center items-center gap-3 sm:gap-5">
            <Button
              onClick={clickRestart}
              text="Restart"
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-200"
            />
            <Button
              onClick={clickRemove}
              disabled={arr.length === 0}
              text="Remove Letter"
              className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-200 disabled:bg-slate-300 disabled:opacity-70"
            />
          </div>
        </div>
        <Flex gap="small" vertical>
          <Tooltip
            title={`${correct} correct / ${wrong} wrong / ${
              10 - (correct + wrong)
            }  to do`}
          >
            <Progress
              percent={((correct + wrong) / 10) * 100}
              success={{ percent: (correct / 10) * 100 }}
              strokeColor="#ff4d4f"
            />
          </Tooltip>
        </Flex>

        <div className="grid grid-cols-7 sm:grid-cols-9 gap-2 pt-4">
          {chars.map((char, i) => (
            <Alphabate
              key={i}
              char={char}
              arr={arr}
              size={wordList[idx].word.length}
              setArr={setArr}
              className={`
                w-10 h-10 sm:w-12 sm:h-12
                flex items-center justify-center
                font-bold text-lg rounded-lg
                transition-all duration-200
                bg-white text-slate-700 shadow-md border border-slate-200
                hover:bg-green-100 hover:border-green-400 hover:-translate-y-1
                disabled:bg-slate-300 disabled:text-slate-500 disabled:opacity-50 disabled:transform-none disabled:shadow-none
              `}
            />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <div className="flex items-center gap-3">
            <span className="font-medium text-slate-700">
              Hints Remaining: {hints}
            </span>
            <Button
              onClick={clickHint}
              disabled={hints === 0}
              text="Get Hint"
              className="px-4 py-2 bg-sky-500 text-white font-semibold rounded-lg shadow-md hover:bg-sky-600 transition duration-200 disabled:bg-slate-300"
            />
          </div>
          <Button
            onClick={clickGuess}
            disabled={arr.length !== currentWord.length}
            text="Guess"
            className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white font-bold text-lg rounded-lg shadow-xl hover:bg-green-700 transition duration-200 disabled:bg-slate-400 disabled:shadow-none"
          />
        </div>
      </div>
    </div>
  );
}
