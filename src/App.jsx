// import { useState } from "react";
// import "./App.css";
// import LoadingScreen from "./Components/LoadingScreen";
// import Navbar from "./Components/Navbar";
// import MobileMenu from "./Components/MobileMenu";
// import Home from "./Components/Pages/Home";
// import About from "./Components/Pages/About.jsx";
// import Projects from "./Components/Pages/Projects.jsx";

// //import Router from "react-router-dom";

// import "./index.css";
// import Contact from "./Components/Pages/Contact.jsx";

// function App() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

//       <div
//         className={`min-h-screen transition-opacity duration-700 ${
//           isLoaded ? "opacity-100" : "opacity-0"
//         } bg-black text-gray-200`}
//       >
//         <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//         <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//         <Home />
//         <About />
//         <Projects />
//         <Contact />
//       </div>
//     </>
//   );
// }

// export default App;

//----------------
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes and Route from react-router-dom v6
import "./App.css";
import LoadingScreen from "./Components/LoadingScreen";
import Navbar from "./Components/Navbar";
import MobileMenu from "./Components/MobileMenu";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About.jsx";
import Projects from "./Components/Pages/Projects.jsx";
import Contact from "./Components/Pages/Contact.jsx"; // Ensure all components are correctly imported

import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      {" "}
      {/* Wrap your app with Router */}
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-200`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Use Routes instead of Switch */}
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          {/* Use element instead of component */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
