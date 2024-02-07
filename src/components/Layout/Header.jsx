import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import user2 from "../../images/user2.png";
import { IoIosArrowDown } from "react-icons/io";
import { toast } from "react-toastify";
import { useLogout } from "../../redux/features/auth/authSlice";

function Header() {
  const { user } = useSelector((state) => state.auth);  
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(useLogout());
    toast.success("Logout Successful!");
  };
  return (
    <header className="bg-transparent py-2 px-2 md:px-24 fixed md:w-full top-0 border border-b-[#C2D2EB] z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="flex gap-4">
          {Object.keys(user).length > 0 ? (
            <div className="flex gap-3 items-center relative">
              <img src={user2} alt="" />
              <p className="text-[#555B6D] text-sm font-normal">
                {user.name}
              </p>
              <IoIosArrowDown
                onClick={() => setOpen(!open)}
                className="cursor-pointer"
              />
              {open && (
                <button
                  className="text-sm font-normal text-[#555B6D] bg-white shadow-md px-6 py-2 absolute right-0 -bottom-8 duration-200"
                  onClick={logout}
                >
                  Logout
                </button>
              )}
            </div>
          ) : (
            <>
              <Link
                to={"/login"}
                className="text-sm bg-[#0052CC] text-white font-medium py-2 px-6 border rounded-lg"
              >
                Login
              </Link>
              <Link
                to={"/registration"}
                className="text-sm bg-[#F2F7FF] text-[#0052CC] font-medium  py-2 px-6 border border-r-4 border-b-4 border-[#0052CC] rounded-lg"
              >
                Registration
              </Link>
            </>
          )} 
        </div>
      </div>
    </header>
  );
}

export default Header;
