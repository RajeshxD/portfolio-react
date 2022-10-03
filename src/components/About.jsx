import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#023a66] text-[#ccd6f6]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00b2e1]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl font-bold ">
            <p>Hi. i'm Rajesha, Nice to meet you. Please take a look around</p>
          </div>
          <div>
            <p className="text-[#fbfcff] text-xl">
              I am very interested in web development. I've worked on a few
              front-end web development projects and am looking for an
              opportunity that will allow me to hone my skills in a more
              competitive environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
