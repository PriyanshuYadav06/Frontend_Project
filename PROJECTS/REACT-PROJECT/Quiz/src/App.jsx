import React, { useState } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Ques from "./components/Ques";
import Result from "./components/Result";
function App() {
  const[score,setScore]=useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path:"/ques",
      element:<Ques score={score} setScore={setScore} />
    },
    {
      path:"/result",
      element:<Result score={score}/>
    }
  ]);
  return <RouterProvider router={router} />;
}
export default App;
