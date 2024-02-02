import React from "react";
import logo2 from "../../images/logo2.png";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="p-24 bg-[#00193D] flex flex-col justify-center items-center">
      <div>
        <img src={logo2} alt="" />
      </div>
      <p className={`font-light text-white text-xs mt-6 w-[300px] md:w-[400px] text-center`}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam eaque.
      </p>
      <div className="flex gap-6 mt-6">
        <FaTwitter className="bg-white rounded-full p-1" size={24} />
        <FaLinkedinIn className="bg-white rounded-full p-1" size={24} />
        <FaFacebookF className="bg-white rounded-full p-1" size={24} />
      </div>
      <p className="mt-20 font-semibold text-sm text-white">&copy; All rights reserve by <span className="text-[#F60E0E]">MAAC</span></p>
    </footer>
  );
}

export default Footer;
