// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      
      {/* Links */}
      <nav className="grid grid-flow-col gap-4">
        <a href="/about" className="link link-hover">About us</a>
        <a href="/contact" className="link link-hover">Contact</a>
        <a href="/jobs" className="link link-hover">Jobs</a>
        <a href="/press-kit" className="link link-hover">Press kit</a>
      </nav>

      {/* Social Icons */}
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          {/* GitHub */}
          <a href="https://github.com/rudro33" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/pritom-majumder-7b4008314/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/prite.mojomder/about" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </nav>

      {/* Copyright */}
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
