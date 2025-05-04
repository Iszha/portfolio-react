import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaCode, FaEnvelope, FaMoon, FaSun, FaBook, FaBriefcase, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">C.C.</div>
      
      <div className="hamburger-menu" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <FaHome className="nav-icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            <FaUser className="nav-icon" />
            About
          </Link>
        </li>
        <li>
          <Link to="/experience" onClick={() => setIsMenuOpen(false)}>
            <FaBriefcase className="nav-icon" />
            Experience
          </Link>
        </li>
        <li>   
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
            <FaCode className="nav-icon" />
            Projects
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
            <FaBook className="nav-icon" />
            Blog
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            <FaEnvelope className="nav-icon" />
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
