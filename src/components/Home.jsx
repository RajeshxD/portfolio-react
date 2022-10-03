import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#023a66]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#00b2e1] font-mono">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Rajesha T
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#22ea4b]">
          I'm a Web Developer.
        </h2>
        <p className="text-[#fbfcff] py-4 max-w-[700px]">
          I'm a Engineer with a great passion for programming. I am
          passionate about delivering solutions that add to people's lives and
          at the same time challenge me.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00b2e1] hover:border[#00b2e1]">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
