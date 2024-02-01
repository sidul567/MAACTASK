import React from "react";
import tablet1 from "../../images/tablet 1.png";
import phone1 from "../../images/phone1.png";
import ProductFeatures from "./ProductFeatures";
import About from "./About";
import FAQ from "./FAQ";
import Sponsor from "./Sponsor";

function Home() {
  return (
    <>
    <section className="h-screen">
      <div className="bg-[url('images/background1.png')] bg-[#F0F6FF] text-center p-12 bg-blend-lighten flex justify-center items-center flex-col h-[65vh]">
        <h1 className="text-6xl text-[#0B141F] font-bold mb-6 w-[55rem]">
          Analytics that transform your product inside-out
        </h1>
        <div className="flex justify-center gap-4 mt-5">
          <button className=" bg-[#0052CC] text-white font-bold py-3 px-6 rounded-lg">
            Request for Demo
          </button>
          <button className="bg-[#F2F7FF] text-[#0052CC] font-bold text-xl py-3 px-6 border border-r-4 border-b-4 border-[#0052CC] rounded-lg">
            Download
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center -mt-[100px]">
        <div className="relative">
          <img src={tablet1} className="object-contain w-[30vw] shadow-tl rounded-3xl" alt="" />
          <div className="absolute -bottom-12 right-12">
            <img src={phone1} className="object-contain w-[10vw]" alt="" />
          </div>
        </div>
      </div>
    </section>
    <ProductFeatures />
    <About />
    <FAQ />
    <Sponsor />
    </>
  );
}

export default Home;
