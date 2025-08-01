import { useRef, useState } from "react";
import "./App.css";
import Input from "./components/Input";
function App() {
  const inputRefs = useRef([]);
  function handleChange(i, e) {
    if (e.target.value.length > 0 && i < inputRefs.current.length - 1) {
      inputRefs.current[i + 1].focus();
    }
    if (e.target.value === "") {
      inputRefs.current[i - 1].focus();
    }
  }
  return (
    <div className="flex gap-x-1">
      {[...Array(10)].map((_, i) => {
        return (
          <Input
            ref={(el) => (inputRefs.current[i] = el)}
            key={i}
            onChange={(e) => {
              handleChange(i, e);
            }}
          />
        );
      })}
    </div>
  );
}
export default App;
