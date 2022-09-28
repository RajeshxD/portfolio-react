import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
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
          I am very interested in web development. I've worked on a few
          front-end web development projects and am looking for an opportunity
          that will allow me to hone my skills in a more competitive
          environment.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00b2e1] hover:border[#00b2e1]">
            View Work
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
