import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Link, Outlet } from "react-router-dom";
import user2 from "../../images/user2.png";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useLogout } from "../../redux/features/auth/authSlice";

function RegionHeader() {
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const logout = ()=>{
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Logout Successful!");
    dispatch(useLogout());
  }
  return (
    <>
      <header className="bg-transparent py-2 px-24 fixed w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <div className="flex gap-3 items-center relative">
            <img src={user2} alt="" />
            <p className="text-[#555B6D] text-sm font-normal">{user.name}</p>
            <IoIosArrowDown onClick={()=>setOpen(!open)} className="cursor-pointer" />
            {
              open && <button className="text-sm font-normal text-[#555B6D] bg-white shadow-md px-6 py-2 absolute right-0 -bottom-8 duration-200" onClick={logout}>Logout</button>
            }
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default RegionHeader;
