import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";
import Tag from "./Tag";
export default function Home() {
  return (
    <div className="flex h-[100vh] flex-col justify-between items-center ">
      <div className="flex justify-center items-center flex-col">
          <img src={logo} alt="" />
        <Button text="Start Now >>>" />
      </div>
      <Tag/>
    </div>
  );
}
