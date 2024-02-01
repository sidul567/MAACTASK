import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Count({ icon, number, symbol, title }) {
  const [count, setCount] = useState(false);
  return (
    <ScrollTrigger onEnter={()=>setCount(true)} onExit={()=>setCount(false)}>
      <div className="flex flex-col justify-center items-center">
      <img src={icon} className="w-12 h-12 p-2" alt="" />
      <p className="font-sans font-extrabold text-xl text-[#0052CC]">
        {count && <CountUp start={0} end={number} duration={2} delay={0} />}
        {symbol === "+" ? "+" : ` ${symbol}`}
      </p>
      <p className="text-[#4E4E4E] font-regular text-sm">{title}</p>
    </div>
    </ScrollTrigger>
  );
}

export default Count;
