import React from "react";
import aboutus1 from "../../images/aboutus1.png";
import aboutus2 from "../../images/aboutus2.png";
import aboutus3 from "../../images/aboutus3.png";
import user1 from "../../images/user1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import icon4 from "../../images/icon4.png";
import icon5 from "../../images/icon5.png";
import CountUp from "react-countup";
import Counter from "../../utils/Counter";

function About() {
  return (
    <div className="bg-[url('images/background1.png')] bg-[#F0F6FF] px-24 py-16 pt-24 flex flex-col">
      <div className="flex justify-between">
        <div className="w-[300px] h-[320px] bg-[#F1F6FF] relative">
          <img
            src={aboutus1}
            className="absolute w-[190px] -top-[50px] left-[35px]"
            alt=""
          />
          <img
            src={aboutus2}
            className="absolute w-[190px] -left-[20px] -bottom-[50px]"
            alt=""
          />
          <img
            src={aboutus3}
            className="absolute w-[190px] bottom-0 -right-[50px]"
            alt=""
          />
        </div>
        <div className="w-[32%] mx-auto">
          <h5 className="text-[#0052CC] font-semibold text-sm">About Us</h5>
          <h2 className="text-[#0B141F] font-extrabold mt-2 text-2xl">
            A dedicated solution for startups and enterprises
          </h2>
          <p className={`font-light text-xs mt-3`}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div className="flex gap-6 items-top mt-12">
            <img src={user1} className="w-14 h-14" alt="" />
            <div>
              <p className="text-[#4E4E4E] text-base">
                "Fieldx is for teams that care about their product growth."
              </p>
              <p className="text-[#0B141F] font-bold text-base">CEO, FieldX</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-24">
        <Counter icon={icon2} number="10" symbol="+" title="Platforms Created" />
        <Counter icon={icon3} number="1559"symbol="+"  title="Total Users" />
        <Counter icon={icon4} number="10" symbol="+" title="Total Clients" />
        <Counter icon={icon5} number="300" symbol="Days" title="In Operations" />
      </div>
    </div>
  );
}

export default About;
