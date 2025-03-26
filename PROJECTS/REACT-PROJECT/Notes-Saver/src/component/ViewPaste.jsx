import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { createWebSocketModuleRunnerTransport } from "vite/module-runner";
import { addToPastes, updateToPastes } from "../redux/PasteSlice";
export default function ViewPaste() {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);
  return (
    <div className="flex flex-col gap-7 items-center">
      <div className="flex flex-row gap-7  justify-between w-[100%]">
        <input
          className="p-2 rounded-xl grow bg-black mt-2"
          type="text"
          placeholder="enter title here"
          value={paste.title}
          disabled
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="min-w-[500px]">
        <div>
          <textarea
            className="bg-black rounded-2xl w-[100%] p-3.5"
            value={paste.content}
            disabled
            placeholder="enter content here"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            rows={20}
          />
        </div>
      </div>
    </div>
  );
}
