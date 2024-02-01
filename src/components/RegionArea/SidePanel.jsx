import React, { useState } from "react";
import { Sidebar } from "react-pro-sidebar";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function SidePanel({ active }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex h-screen px-6 py-16 pt-24 pr-0">
      <Sidebar
        className="bg-white shadow-none outline-none sidebar"
        collapsed={open}
      >
        <p className="text-xs text-[#6A7187] font-semibold relative">MENU</p>
        <div className="flex gap-3 items-center mt-4 text-sm text-[#757575]">
          <CiLocationOn size={20} fill="#757575" />
          <p>Geo Information</p>
        </div>
        <div className="mt-6 ml-7">
          <Link
            to="/region"
            className={`bg-white p-0 text-sm mb-2  font-normal block ${
              active === "region" ? "text-[#0052CC] border-r-8 border-r-[#0052CC]" : "text-[#757575]"
            }`}
          >
            Region
          </Link>
          <Link
            to="/area"
            className={`bg-white p-0 text-sm font-normal block ${
              active === "area" ? "text-[#0052CC] border-r-8 border-r-[#0052CC]" : "text-[#757575]"
            }`}
          >
            Area
          </Link>
        </div>
      </Sidebar>
      {open ? (
        <IoIosArrowDroprightCircle
          fill="#000"
          size={24}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      ) : (
        <IoIosArrowDropleftCircle
          fill="#000"
          size={24}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      )}
    </div>
  );
}

export default SidePanel;
