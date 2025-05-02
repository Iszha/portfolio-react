import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaEnvelope, FaMoon, FaSun, FaBook } from "react-icons/fa";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">C.C.</div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            <FaHome className="nav-icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaUser className="nav-icon" />
            About
          </Link>
        </li>
        <li>   
          <Link to="/projects">
            <FaCode className="nav-icon" />
            Projects
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <FaBook className="nav-icon" />
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaEnvelope className="nav-icon" />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
