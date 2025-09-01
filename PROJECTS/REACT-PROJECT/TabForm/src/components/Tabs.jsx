import React from "react";

export default function Tabs({ setTab }) {
  return (
    <div className="tabs">
      <div
        onClick={() => {
          setTab(1);
        }}
      >
        Profile
      </div>
      <div
        onClick={() => {
          setTab(2);
        }}
      >
        Interest
      </div>
      <div
        onClick={() => {
          setTab(3);
        }}
      >
        settings
      </div>
    </div>
  );
}
