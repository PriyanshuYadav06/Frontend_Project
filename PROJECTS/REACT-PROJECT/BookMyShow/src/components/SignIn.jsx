import React from "react";
import SignInCard from "./SignInCard";
import appleLogo from "../assets/apple.svg";
import { RxCross2 } from "react-icons/rx";
import { FaApple } from "react-icons/fa";
export default function SignIn({ isSign, setIsSign }) {
  function handleCross() {
    setIsSign(!isSign);
  }
  return (
    <div
      className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
         transition-all duration-300 ease-in-out
        ${
          !isSign
            ? "opacity-0 scale-95 pointer-events-none"
            : "opacity-100 scale-100"
        }`}
    >
      <div className="w-[500px] flex flex-col gap-5 bg-white rounded-2xl p-3.5">
        <div className="flex justify-center items-center">
          <div className="w-[90%] flex justify-center items-center text-[16px] font-medium">
            Get Started
          </div>
          <div onClick={handleCross} className="cursor-pointer">
            <RxCross2 />
          </div>
        </div>
        <SignInCard
          logo={"https://in.bmscdn.com/webin/common/icons/googlelogo.svg"}
          text="Continue With Google"
        />
        <SignInCard
          logo={"https://in.bmscdn.com/webin/common/icons/email.svg"}
          text="Continue With Email"
        />
        <SignInCard
          logo={"https://in.bmscdn.com/webin/common/icons/email.svg"}
          text="Continue With Apple"
        />
        <div className="text-center  text-[#595959] text-[14px]">OR</div>
        <div className="flex justify-start items-center gap-2">
          <img
            src="https://in.bmscdn.com/webin/common/icons/indianflag.svg"
            alt=""
          />
          <div>+91</div>
          <input
            className="w-[80%] p-2 outline-none border-b border-gray-300"
            type="tel"
            placeholder="Continue with mobile number"
          />
        </div>
        <div className="mt-4 text-center text-[12px]">
          I agree to the{" "}
          <span className="underline decoration-[#666666]">
            Terms & Conditions
          </span>{" "}
          & <span className="underline decoration-[#666666]">Privacy</span>
        </div>
      </div>
    </div>
  );
}
