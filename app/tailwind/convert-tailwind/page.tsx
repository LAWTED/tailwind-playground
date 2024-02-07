"use client";

import { useState } from "react";

export default function Page() {
  const [classText, setClassText] = useState("");
  const usefulClasses = [
    "bg-brand",
    "text-white",
    "text-center",
    "rounded-2xl",
    "w-80",
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="w-full rounded-lg  bg-[#f5f5f5] p-8 grow text-[12px] text-[#999999] mt-4">
        <div>
          <span>
            {`<`}
            <span className="text-[#1E754F]">div</span>
            <span className="text-[#B07D48]">{` class=" `} </span>
          </span>
          <input
            className="rounded w-3/4 px-4 py-1"
            value={classText}
            onChange={(e) => setClassText(e.target.value)}
          />
          <span>{`">`}</span>
        </div>
        <span className="text-[#393A34] ml-16">Button</span>
        <div>
          {`</`}
          <span className="text-[#1E754F]">div</span>
          {`>`}
        </div>
      </div>
      <div className="flex items-center justify-center mt-32">
        <div className={classText}>Button</div>
      </div>
    </div>
  );
}
