import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import RegionHeader from "./RegionHeader";
import SidePanel from "./SidePanel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useCreateAreaMutation, useGetRegionQuery } from "../../redux/features/regionArea/regionAreaApi";

function CreateArea() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const {data:region} = useGetRegionQuery(300);
  const [regionId, setRegionId] = useState("");
  const [area, {isLoading, isSuccess, error, isError}] = useCreateAreaMutation();


  useEffect(()=>{
    if(isSuccess){
      toast.success("Area created successfully!");
      navigate("/area");
    }
    if(isError){
      toast.error(error.data.message);
    }
  }, [isError, error, isSuccess])

  const handleSubmit = (e)=>{
    e.preventDefault();
    area({region: regionId, name})
  }
  return (
    <>
      <RegionHeader />
      <div className="flex">
        <SidePanel active="area" />
        {isLoading && <Loader />}
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
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <label
                    htmlFor="region"
                    className="text-xs mb-2 font-normal text-[#495057]"
                  >
                    Region
                  </label>
                  <select name="region" id="region" className="text-sm font-normal text-[#495057] p-2 border border-[#CED4DA] rounded-lg px-3 outline-none mb-8" required defaultValue="" onChange={(e)=>setRegionId(e.target.value)}>
                    <option value="" disabled>Select region</option>
                    {
                      region && region?.region?.map((reg)=>(
                        <option value={reg._id} key={reg._id}>{reg.name}</option>
                      ))
                    }
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
                    value={name}
                    onChange={(e)=>setName(e.target.value)} required
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
