import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  // State for tracking the theme mode (light or dark)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to apply the theme mode to the body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav className="fixed w-full top-0 z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-2xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="font-mono text-xl text-white">
            Port<span className="text-blue-500"> folio</span>
          </NavLink>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </NavLink>
            {/* Button for toggling Light/Dark Mode */}
            <button
              onClick={() => setIsDarkMode((prev) => !prev)} // Toggle dark mode
              className="text-gray-300 w-30 rounded bg-blue-500 text-white hover:text-white transition-colors font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
