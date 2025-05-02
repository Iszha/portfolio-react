import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
<<<<<<< HEAD
import Projects from "./components/Project";
import Contact from "./components/Contact";
import BlogPage from "./components/BlogPage";
=======
>>>>>>> origin/main
import "./App.css";

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
=======
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
>>>>>>> origin/main
    </Router>
  );
}

export default App;
