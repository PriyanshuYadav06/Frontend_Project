import { useEffect, useState } from "react";
import "./App.css";
import Box from "./components/Box";
function App() {
  const [arr, setArr] = useState([]);
  const [flag, setFlag] = useState(false);
  const [index, setIndex] = useState(0);
  function handelClick(e) {
    e.target.style.backgroundColor = "green";
  }
  function AddItem(newIndex) {
    if (arr.length == 9) return;
    setArr([...arr, newIndex]);
  }
  useEffect(() => {
    if (arr.length === 9 && !flag) {
      setFlag(true);
    }
  }, [arr, flag]);

  useEffect(() => {
    if (flag && arr.length > 0) {
      setTimeout(() => {
        const lastItem = arr[arr.length - 1];
        setIndex(lastItem);
        let newarr = arr.slice(0, arr.length - 1);
        setArr(newarr);
      }, 1000);
    }
  }, [arr, flag]);

  return (
    <>
      <div className="container">
        <Box
          onClick={(e) => {
            handelClick(e);
            AddItem(1);
          }}
          style={{
            backgroundColor: flag && index === 1 ? "transparent" : "initial",
          }}
        />
        <Box
          onClick={(e) => {
            handelClick(e);
            AddItem(2);
          }}
          style={{
            backgroundColor: flag && index === 2 ? "transparent" : "initial",
          }}
        />
        <Box
          onClick={(e) => {
            handelClick(e);
            AddItem(3);
          }}
          style={{
            backgroundColor: flag && index === 3 ? "transparent" : "initial",
          }}
        />
        <Box
          onClick={(e) => {
            handelClick(e);
            AddItem(4);
          }}
          style={{
            backgroundColor: flag && index === 4 ? "transparent" : "initial",
          }}
        />
        <Box
          onClick={(e) => {
            handelClick(e);
            AddItem(5);
          }}
          style={{
            backgroundColor: flag && index === 5 ? "transparent" : "initial",
          }}
        />
        <Box
          onClick={(e) => {
            handelClick(e);
            AddItem(6);
          }}
          style={{
            backgroundColor: flag && index === 6 ? "transparent" : "initial",
          }}
        />
        <Box
          onClick={(e) => {
            handelClick(e);
            AddItem(7);
          }}
          style={{
            backgroundColor: flag && index === 7 ? "transparent" : "initial",
          }}
        />
        <Box
          onClick={(e) => {
            handelClick(e);
            AddItem(8);
          }}
          style={{
            backgroundColor: flag && index === 8 ? "transparent" : "initial",
          }}
        />
        <Box
          onClick={(e) => {
            handelClick(e);
            AddItem(9);
          }}
          style={{
            backgroundColor: flag && index === 9 ? "transparent" : "initial",
          }}
        />
      </div>
    </>
  );
}

export default App;
