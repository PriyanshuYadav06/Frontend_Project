import React, { useEffect, useRef, useState } from "react";
import "./Container.css";
export default function Container({litersArray, setLitersArray, index, waterLen, flag, setWaterLen, isempty,setLiters,totalWater}) {
  const intervalRef = useRef(null);
  useEffect(() => {
    if (flag) {
      intervalRef.current = setInterval(() => {
        setWaterLen((prev) => Math.min(prev + 1, 100));
        setLiters((prev) => (prev >= 20000 ? prev : prev + 200));
        setLitersArray((prev) => {
          const updated = [...prev];
          updated[index] = Math.min(updated[index] + 200, 20000);
          return updated;
        });
      },100); 
    } else {
      clearInterval(intervalRef.current);
      setLitersArray((prev) => {
        const avgWater = totalWater / prev.length;
        return prev.map(() => avgWater);
      });
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [flag]);
  useEffect(() => {
    if (isempty) {
      setLitersArray((prev) => {
        const updated = [...prev];
        updated[index] = 0;
        return updated;
      });
      setWaterLen(0);
    }
  }, [isempty, setLitersArray, setWaterLen]);
  return (
    <div className="container">
      <div
        className="water"
        style={{
          height:`${(litersArray[index] / 20000) * 100}%`
        }}
      ></div>
    </div>
  );
}
