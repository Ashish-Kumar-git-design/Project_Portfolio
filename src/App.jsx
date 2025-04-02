import { useState } from "react";
import "./App.css";
import LoadingScreen from "./Components/LoadingScreen";
import Navbar from "./Components/Navbar";
import MobileMenu from "./Components/MobileMenu";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About.jsx";
import Projects from "./Components/Pages/Projects.jsx";
//import Router from "react-router-dom";

import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-200`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default App;
