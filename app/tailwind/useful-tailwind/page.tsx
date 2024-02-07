"use client";
import { useState } from "react";

export default function Page() {
  const group1 = {
    flex: "display: flex;",
    "flex-col": "flex-direction: column;",
    "items-center": "align-items: center;",
    "justify-center": "justify-content: center;",
    absolute: "position: absolute;",
    rounded: "border-radius: 2px;",
  };
  const group2 = {
    "w-16": "width: 16px;",
    "h-16": "height: 16px;",
    "p-16": "padding: 16px;",
    "m-16": "margin: 16px;",
    "t-16": "top: 16px;",
    "r-16": "right: 16px;",
  };
  const group3 = {
    "text-black-65": "color: var(rgba(0,0,0,0.65));",
    "bg-black": "background-color: var(--black);",
    "text-base": "font-size: 12px;",
    "font-medium": "font-weight: 500;",
    "border-2": "border-width: 2px;",
    "border-white": "border-color: var(--white);",
  };
  const TailwindList = ({ group }) => {
    return (
      <div className="flex flex-col gap-12">
        {Object.keys(group).map((key) => {
          return <TailwindItem tailwind={key} css={group[key]}></TailwindItem>;
        })}
      </div>
    );
  };
  const TailwindItem = ({ tailwind, css }) => {
    const [inputVal, setInputVal] = useState("");
    return (
      <div className="flex flex-col items-between justify-center transition-all">
        <div className={`ml-8 ${inputVal === tailwind && "text-success"} peer`}>
          {css}
        </div>
        <input
          placeholder={tailwind}
          className={`rounded-lg w-2/3 px-4 py-1 mt-2 outline outline-2 mx-4 placeholder:transition-all  placeholder:duration-1000 placeholder:text-transparent transition-all peer-hover:placeholder:text-black-25 ${
            inputVal === tailwind
              ? " outline-success-border"
              : " outline-black-10"
          }`}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-6 h-full">
      <TailwindList group={group1}></TailwindList>
      <TailwindList group={group2}></TailwindList>
      <TailwindList group={group3}></TailwindList>
    </div>
  );
}
