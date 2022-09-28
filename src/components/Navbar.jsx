import React, { useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between  items-center px-4 bg-[#023a66] text-[#ccd6f6]">
      <div>
        <img src={logo} alt="logo image" style={{ width: "80px" }} />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="hover:text-[#00b2e1]">Home</li>
        <li className="hover:text-[#00b2e1]">About</li>
        <li className="hover:text-[#00b2e1]">Skills</li>
        <li className="hover:text-[#00b2e1]">Work</li>
        <li className="hover:text-[#00b2e1]">Contact</li>
      </ul>
      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#023a66] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:text-[#00b2e1]">Home</li>
        <li className="py-6 text-4xl hover:text-[#00b2e1]">About</li>
        <li className="py-6 text-4xl hover:text-[#00b2e1]">Skills</li>
        <li className="py-6 text-4xl hover:text-[#00b2e1]">Work</li>
        <li className="py-6 text-4xl hover:text-[#00b2e1]">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-115px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-115px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-115px] hover:ml-[-10px] duration-300 bg-[#f1272a]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <SiGmail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-115px] hover:ml-[-10px] duration-300 bg-[#dc11b6]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
