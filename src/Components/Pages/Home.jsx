import { useState, useEffect } from "react";
import React from "react";
import ReviewAfterScroll from "../ReviewAfterScroll";
import image from "../../assets/my3image34.jpg";

const Home = () => {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <ReviewAfterScroll>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-8">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <div className="h-30 text-wrap text-5xl md:text-6xl mt-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent">
                <span className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                  I'm
                </span>
                <br /> Rinki Kumari
              </h1>
            </div>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              I am a dedicated Computer Science student with a strong foundation
              in programming, and full-stack development. With hands-on
              experience from projects, I have honed my skills in technologies
              such as C, Java, MSSQL, and the MERN stack. My commitment to
              continuous learning drives me to excel in every challenge.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-green-500 text-white py-3 px-6 rounded font-medium transition hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                My Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:translate-y-0.5 hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image on Right Side */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-60 h-60 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 p-1 hover:scale-110 transition duration-500 hover:animate-pulse">
              <img
                src={image}
                alt="Your Picture"
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </ReviewAfterScroll>
    </section>
  );
};

export default Home;
