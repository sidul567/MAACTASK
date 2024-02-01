import React from "react";
import icon1 from "../images/icon1.png";

function FeatureCard({ title, end=false }) {
  return (
    <div className={`flex flex-col ${end && "items-end"}`}>
      <div className="bg-white shadow-md rounded-lg w-12 h-12 p-2 flex justify-center items-center mb-2">
        <img src={icon1} alt="" />
      </div>
      <p className="text-xl font-extrabold">{title}</p>
      <p className={`font-light text-xs mt-3 ${end && "text-right"} w-[210px]`}>
        See product usage, sign-ins, feature metrics change as users work on
        your.
      </p>
    </div>
  );
}

export default FeatureCard;
