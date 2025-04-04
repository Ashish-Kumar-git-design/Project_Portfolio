// import React from "react";
// import ReviewAfterScroll from "../ReviewAfterScroll";

// const Home = () => {
//   return (
//     <section
//       id="Home"
//       className="min-h-screen flex items-center justify-center relative"
//     >
//       <ReviewAfterScroll>
//         <div className="text-center z-10 px-4">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent gradiant-text loading-right"></h1>
//           <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
//             I am a dedicated Computer Science student with a strong foundation
//             in programming, and full-stack development. With hands-on experience
//             from project, I have honed my skills in technologies such as C ,
//             Java, MSSQL, and the MERN stack. My commitment to continuous
//             learning drives me to excel in every challenge.
//           </p>
//           <div className="flex justify-center space-x-4">
//             <a
//               href="#projects"
//               className="bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
//             >
//               View Projects
//             </a>
//             <a
//               href="#contact"
//               className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200  hover:translate-y-0.5 hover:bg-blue-500/10"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>
//       </ReviewAfterScroll>
//     </section>
//   );
// };

// export default Home;
import React from "react";
import ReviewAfterScroll from "../ReviewAfterScroll";
import image from "../../assets/my3image.jpg";
import image2 from "../../assets/mysecondimage.jpg";

const Home = () => {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <ReviewAfterScroll>
        <div className="flex flex-col md:flex-row items-center z-10 max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent gradiant-text loading-right">
              Hi I'm Ashish Kumar
            </h1>
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
                className="bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                My Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:translate-y-0.5 hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src={image} // Replace with your image URL or import it
              alt="Your Picture"
              className="w-150 h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </ReviewAfterScroll>
    </section>
  );
};

export default Home;
