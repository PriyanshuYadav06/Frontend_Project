import React from "react";

export default function SignInCard({ logo, text }) {
  return (
    <div className="flex gap-x-4 items-center justify-center text-[#595959] text-[14px] rounded-[4px] font-medium border border-[#999999] p-4 cursor-pointer">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>{text}</div>
    </div>
  );
}
