import React from "react";
import { FaHome, FaUser, FaCode, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">C.C.</div>
      <ul className="nav-links">
        <li>
          <a href="#home">
            <FaHome className="nav-icon" />
            Home
          </a>
        </li>
        <li>
          <a href="#about">
            <FaUser className="nav-icon" />
            About
          </a>
        </li>
        <li>   
          <a href="#projects">
            <FaCode className="nav-icon" />
            Projects
          </a>
        </li>
        <li>
          <a href="#contact">
            <FaEnvelope className="nav-icon" />
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; 
