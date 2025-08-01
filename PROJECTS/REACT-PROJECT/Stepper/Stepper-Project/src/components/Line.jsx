import React from "react";
import "./Line.css";

export default function Line({ step }) {
  return (
    <div className="Line-container">
      <div
        className="Line"
        style={{
          width:
            step === 2 ? "33%" : step === 3 ? "70%" : step >= 4 ? "100%" : "0",
        }}
      ></div>
    </div>
  );
}
