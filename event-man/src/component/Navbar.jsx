import React from "react";
import Group from "../assets/images/Group 1.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0A0F]/60 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src={Group}
            alt="Logo"
            className="w-10 h-10 object-contain rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)]"
          />
          <h1 className="text-2xl font-grif tracking-wide">SimplyBook</h1>
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li className="hover:text-white transition">Home</li>
          <li className="hover:text-white transition">About</li>
          <li className="hover:text-white transition">Speakers</li>
          <li className="hover:text-white transition">Gallery</li>
          <li className="hover:text-white transition">Contact</li>
        </ul>

        {/* Button */}
        <button className="bg-transparent border border-purple-500 text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
