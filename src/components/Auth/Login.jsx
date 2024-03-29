import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import { useLoginMutation } from "../../redux/features/auth/authApi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFun, {isLoading, isSuccess, isError, error}] = useLoginMutation();
  const {user, token} = useSelector((state)=>state.auth);
  const navigate = useNavigate();
  useEffect(()=>{
    if(Object.keys(user).length > 0){
      navigate("/region");
    }
    if(isSuccess){
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
      toast.success("Login Successful!");
      navigate("/region");
    }
    if(isError){
      const {data} = error;
      toast.error(data.message);
    }
  }, [isSuccess, isError, user])

  const login = (e)=>{
    e.preventDefault();
    loginFun({email, password});
  }

  return (
    <section className="bg-[url('images/background1.png')] bg-[#F0F6FF] text-center pt-16 md:p-24 bg-blend-lighten flex justify-center items-center flex-col">
     {isLoading && <Loader />} 
      <div className="bg-white p-16 md:min-w-[600px] rounded-xl">
        <h2 className="text-[#0B141F] font-extrabold mt-2 text-3xl">
          Welcome Back!
        </h2>
        <h5 className="text-[#4E4E4E] font-light text-sm mb-10 mt-4">
          Please login to your account
        </h5>
        <form className="flex flex-col gap-5 w-[20rem] md:w-[25rem] mx-auto" onSubmit={login}>
            <input type="text" required placeholder="Enter Your Email"  className="input" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="input" />
            <input type="submit" required value="Sign in" className="btn mt-4 cursor-pointer" />
        </form>
        <p className="text-[#0B141F] font-semibold text-base mt-12">Don’t have any account?  <span className="text-[#0052CC]"><Link to="/registration">Sign Up</Link></span></p>
      </div>
    </section>
  );
}

export default Login;
