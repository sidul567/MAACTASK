import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRegistrationMutation } from "../../redux/features/auth/authApi";
import Loader from "../Loader/Loader";

function Registration() {
  const {user: cuser, token} = useSelector((state)=>state.auth);
  const [registration, {isSuccess, isError, error, isLoading}] = useRegistrationMutation();
  const [user, setUser] = useState({
    name: "",
    email: "",
    employeeId: "",
    password: "",
    passwordConfirm: "",
    role: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  useEffect(()=>{
    if(Object.keys(cuser).length > 0){
      navigate("/region");
    }
    if(isSuccess){
      localStorage.setItem("user", JSON.stringify(cuser));
      localStorage.setItem("token", JSON.stringify(token));
      toast.success("Registration Successful!");
      navigate("/region");
    }
    if(isError){
      const {data} = error;
      toast.error(data.message);
    }
  }, [isSuccess, isError, cuser])

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registration(user);
  };

  return (
    <section className="bg-[url('images/background1.png')] bg-[#F0F6FF] text-center pt-16 md:p-24 bg-blend-lighten flex justify-center items-center flex-col">
      {isLoading && <Loader />} 
      <div className="bg-white py-8 md:min-w-[600px] rounded-xl">
        <h2 className="text-[#0B141F] font-extrabold mt-2 text-3xl">
          Create Account
        </h2>
        <h5 className="text-[#4E4E4E] font-light text-sm mb-10 mt-4">
          Fill in the details below to create an account
        </h5>
        <form
          className="flex flex-col gap-5 md:w-[25rem] mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="input"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="input"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Your ID"
            className="input"
            name="employeeId"
            value={user.employeeId}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Your Mobile Number"
            className="input"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
            name="passwordConfirm"
            value={user.passwordConfirm}
            onChange={handleChange}
            required
          />
          <select
            name="role"
            id=""
            className="input font-normal"
            onChange={handleChange}
            required
            value={user.role}
          >
            <option value="" className="">
              Select Your Role
            </option>
            <option value="HUB">HUB</option>
            <option value="HUB2">HUB2</option>
            <option value="HUB3">HUB3</option>
          </select>
          <div className="flex gap-2 px-2">
            <input
              type="checkbox"
              name="toc"
              id="toc"
              className="w-[17px]"
              required
            />
            <label htmlFor="toc" className="text-sm font-semibold text-black">
              I read and agree to the{" "}
              <span className="text-[#0052CC]">Terms & Conditions</span>
            </label>
          </div>
          <input
            type="submit"
            value="Create Account"
            className="btn mt-3 cursor-pointer"
          />
        </form>
        <p className="text-[#0B141F] font-semibold text-base mt-6">
          Already have an account?{" "}
          <span className="text-[#0052CC]"><Link to="/login">Sign In</Link></span>
        </p>
      </div>
    </section>
  );
}

export default Registration;
