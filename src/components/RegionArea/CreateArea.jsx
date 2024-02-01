import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import RegionHeader from "./RegionHeader";
import SidePanel from "./SidePanel";

function CreateArea() {
  return (
    <>
      <RegionHeader />
      <div className="flex">
        <SidePanel active="area" />
        <div className="flex w-full flex-col">
          <div className="mt-20 px-6 py-6 bg-[#F8F8FB] w-full h-full">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">Create Area</h3>
                <p className="text-sm font-light flex gap-2 items-center mt-2 text-[#77838F]">
                  Geo
                  <MdKeyboardArrowRight size={20} fill="#77838F" />
                  <span className="font-normal">Geo List</span>{" "}
                  <MdKeyboardArrowRight size={20} fill="#77838F" />
                  <span className="font-normal text-[#0052CC]">
                    Create Geo
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="p-8 rounded-lg w-[350px] bg-white mt-8 mx-auto">
              <form className="flex flex-col">
                <div className="flex flex-col">
                  <label
                    htmlFor="region"
                    className="text-xs mb-2 font-normal text-[#495057]"
                  >
                    Region
                  </label>
                  <select name="region" id="region" className="text-sm font-normal text-[#495057] p-2 border border-[#CED4DA] rounded-lg px-3 outline-none mb-8">
                    <option value="">Select region</option>
                    <option value="">Dhaka</option>
                    <option value="">Khulna</option>
                    <option value="">Rajshahi</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="area"
                    className="text-xs mb-2 font-normal text-[#495057]"
                  >
                    Area
                  </label>
                  <input
                    type="text"
                    name=""
                    id="area"
                    placeholder="Type Area"
                    className="text-sm font-normal text-[#495057] p-2 border border-[#CED4DA] rounded-lg px-3 outline-none"
                  />
                </div>
                <button className="bg-[#0B2E4E] font-normal text-white text-sm cursor-pointer px-10 py-2 mt-12 ml-auto rounded-xl">
                  Add Area
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateArea;
