import React from "react";
import ReviewAfterScroll from "../ReviewAfterScroll";

const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "Javascript",
    "TailwindCSS",
    "Bootstrap",
  ];
  const BackendSkills = ["Node.js", "Java", "MSSQL", "MVC", "Python", "JDBC"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReviewAfterScroll>
        <div className="max-w-3xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>
          <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am a dedicated Computer Science student with a strong foundation
              in programming, and full-stack development. With hands-on
              experience from project, I have honed my skills in technologies
              such as C , Java, MSSQL, and the MERN stack. My commitment to
              continuous learning drives me to excel in every challenge.
            </p>
            <div className="grid grid-cols-1 md-grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {BackendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md-grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Bachelor's of Computer Applicatio</strong> - Aisect
                  University (2022-2025)
                </li>
                <li>
                  Course Work : Data Structure, Web Developement, Data Analyst..
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ReviewAfterScroll>
    </section>
  );
};

export default About;
