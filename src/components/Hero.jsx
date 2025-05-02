import React from "react";
import heroImage from "../assets/me.png";
import { FaGithub, FaLinkedin, FaBehance, FaArrowDown, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const recentContests = [
    { title: "Regional Web Dev 2023", position: "1st Place" },
    { title: "Hackathon 2023", position: "Finalist" }
  ];

  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Crisha Campomayor
        </motion.h1>
        
        <motion.div 
          className="typing-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >   
          <h4>Frontend Developer | Graphic Designer</h4>
        </motion.div>
  
        <motion.p
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Creating beautiful and functional web experiences
        </motion.p>

<<<<<<< HEAD
        <motion.div className="contests-showcase">
          {recentContests.map((contest, index) => (
            <motion.div
              key={index}
              className="contest-badge"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <FaTrophy className="trophy-icon" />
              <span>{contest.title}</span>
              <span className="position">{contest.position}</span>
            </motion.div>
          ))}
        </motion.div>

=======
>>>>>>> origin/main
        <div className="social-links">
          <motion.a whileHover={{ scale: 1.2 }} href="https://github.com" target="_blank"><FaGithub /></motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com" target="_blank"><FaLinkedin /></motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://behance.net" target="_blank"><FaBehance /></motion.a>
        </div>

        <motion.button 
          className="hero-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work <FaArrowDown className="arrow-icon" />
        </motion.button>
      </motion.div>

      <motion.div 
        className="hero-image-container"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="image-frame"
          whileHover={{ 
            scale: 1.05,
            rotateY: 10,
            boxShadow: "0px 0px 40px rgba(75, 96, 67, 0.3)"
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        >
          <motion.img 
            src={heroImage} 
            alt="Portfolio"
            whileTap={{ scale: 0.95 }}
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 50,
              bottom: 50
            }}
            dragElastic={0.2}
          />
          <motion.div 
            className="image-overlay"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span>👋 Hello there!</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;