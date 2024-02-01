import React from "react";
import icon1 from "../../images/icon1.png";
import phone2 from "../../images/phone2.png";
import FeatureCard from "../../utils/FeatureCard";

function ProductFeatures() {
  return (
    <section className="py-6 px-24">
      <h5 className="text-[#0052CC] text-center font-semibold text-sm">
        Products Features
      </h5>
      <h2 className="text-center text-[#0B141F] font-extrabold mt-2 text-2xl">
        Make more out of your data
      </h2>
      <div className="flex justify-between items-center gap-4 mt-10">
        <div className="space-y-6">
          <FeatureCard title="Real-time analytics" end={true} />
          <FeatureCard title="Intuitive dashboard" end={true} />
          <FeatureCard title="Smart suggestions" end={true} />
        </div>
        <div class="relative w-[40%] flex justify-center items-center">
          <div class="absolute bg-[#0052CC] w-[350px] h-[350px] z-[-1] rounded-full"></div>
          <img src={phone2} className="w-[220px] shadow-tl2 rounded-3xl" alt="" />
        </div>
        <div className="space-y-6">
          <FeatureCard title="Multiple views" />
          <FeatureCard title="AI-led diagnoses" />
          <FeatureCard title="Responsive" />
        </div>
      </div>
    </section>
  );
}

export default ProductFeatures;
