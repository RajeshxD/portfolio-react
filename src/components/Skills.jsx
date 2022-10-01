import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/bootstrap.png";
import Api from "../assets/api.png";
// import Node from "../assets/node.png";
// import FireBase from "../assets/firebase.png";
// import AWS from "../assets/aws.png";
// import Mongo from "../assets/mongo.png";
const Skills = () => {
  return (
    <div name="skills" className="w-full md:h-screen bg-[#023a66]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-[#ccd6f6]">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#00b2e1]">
            Skiils
          </p>
          <p className="text-[#fbfcff] py-4">The techonolgies I've Worked</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#00b2e1] hover:scale-110 duration-500 p-4">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="javascript-icon"
            />
            <p className="my-3">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#00b2e1] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={HTML} alt="html-icon" />
            <p className="my-3">HTML</p>
          </div>
          <div className="shadow-md shadow-[#00b2e1] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={CSS} alt="css-icon" />
            <p className="my-3">CSS</p>
          </div>
          <div className="shadow-md shadow-[#00b2e1] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={ReactImg} alt="react-icon" />
            <p className="my-3">React</p>
          </div>
          <div className="shadow-md shadow-[#00b2e1] hover:scale-110 duration-500 p-4">
            <img
              className="w-20 mx-auto"
              src={Tailwind}
              alt="tailwindcss-icon"
            />
            <p className="my-3">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#00b2e1] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={GitHub} alt="github-icon" />
            <p className="my-3">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#00b2e1] hover:scale-110 duration-500 p-4">
            <img
              className="w-20 mx-auto"
              src={Bootstrap}
              alt="bootstrap-icon"
            />
            <p className="my-3">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#00b2e1] hover:scale-110 duration-500 p-4">
            <img className="w-20 mx-auto" src={Api} alt="restapi-icon" />
            <p className="my-3">REST API</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
