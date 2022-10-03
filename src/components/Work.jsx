import React from "react";
import Todo from "../assets/todo.jpg";
import Notes from "../assets/notes.jpg";
import MemeGenerator from "../assets/memegenerator.jpg";
const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-[#ccd6f6] bg-[#023a66]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-[#00b2e1]">
            Work
          </p>
          <p className="py-6 text-white">Check out some of my recent work</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid-item */}
          <div
            style={{ backgroundImage: `url(${MemeGenerator})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Meme Generator
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://react-memesgenerator.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white to-gray-700 font-black text-lg text-gray-800">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/RajeshxD/Meme-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white to-gray-700 font-black text-lg text-gray-800">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Notes})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Notes Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://notes-rajesha.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white to-gray-700 font-black text-lg text-gray-800">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/RajeshxD/Notes-Application"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white to-gray-700 font-black text-lg text-gray-800">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid-item */}
          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                TODO Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://todo-rajesha.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white to-gray-700 font-black text-lg text-gray-800">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/RajeshxD/todo-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white to-gray-700 font-black text-lg text-gray-800">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
