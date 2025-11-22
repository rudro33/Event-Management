import React, { useState } from "react";
import Group from "../assets/images/Group 1.png";
import Photo from "../assets/images/Photo.png"

const Navbar = ({ homeRef, aboutRef, contactRef }) => {
  const [loginOpen, setLoginOpen] = useState(false);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0A0F]/60 backdrop-blur-md text-white shadow-lg flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={Group} alt="Logo" className="w-10 h-10 rounded-full shadow-lg" />
          <h1 className="text-2xl font-grif text-purple-600">Tech Event</h1>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li onClick={() => scrollTo(homeRef)} className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li onClick={() => scrollTo(prebookRef)} className="hover:text-yellow-400 cursor-pointer">Prebook</li> 
          <li onClick={() => scrollTo(aboutRef)} className="hover:text-yellow-400 cursor-pointer">About</li>
          <li onClick={() => scrollTo(videoRef)} className="hover:text-yellow-400 cursor-pointer">Video</li> 
          <li onClick={() => scrollTo(contactRef)} className="hover:text-yellow-400 cursor-pointer">Contact</li>
          <li onClick={() => scrollTo(footerRef)} className="hover:text-yellow-400 cursor-pointer">Footer</li>
        </ul>
        

        {/* Login Button + Avatar */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setLoginOpen(true)}
            className="bg-transparent border border-purple-500 text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
          >
            Log In
          </button>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring-2 ring-offset-2">
              <img src={Photo} alt="avatar" />
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-base-100 w-full max-w-xl p-6 rounded-xl shadow-2xl flex flex-col gap-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold">Login now!</h2>
              <button
                onClick={() => setLoginOpen(false)}
                className="text-red-600 font-bold hover:text-red-400 transition"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-500 mb-4">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
            </p>
            <div className="card-body p-0">
              <fieldset className="flex flex-col gap-4">
                <div>
                  <label className="label">Email</label>
                  <input type="email" className="input w-full" placeholder="Email" />
                </div>
                <div>
                  <label className="label">Password</label>
                  <input type="password" className="input w-full" placeholder="Password" />
                </div>
                <div>
                  <a className="link link-hover text-blue-500">Forgot password?</a>
                </div>
                <button className="btn mt-4 bg-red-200 text-red-700 hover:bg-red-300 hover:text-red-900 transition">
                  Login
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
