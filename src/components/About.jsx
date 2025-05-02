import React from "react";
import { motion } from "framer-motion";
import {
  FaCode, FaBrain, FaRocket, FaLaptopCode, FaHtml5,
  FaCss3Alt, FaJs, FaReact, FaBootstrap, FaBriefcase,
  FaCloud, FaBookReader, FaLightbulb, FaStar
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const About = () => {
  const skills = [
    { icon: FaCode, title: "Frontend Development", desc: "React, Vue, Angular" },
    { icon: FaBrain, title: "Problem Solving", desc: "Algorithmic thinking" },
    { icon: FaRocket, title: "Performance", desc: "Optimization expert" },
    { icon: FaLaptopCode, title: "Clean Code", desc: "Best practices advocate" }
  ];

  const techStack = [
    { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
    { icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
    { icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#38B2AC" },
    { icon: FaBootstrap, name: "Bootstrap", color: "#7952B3" }
  ];

  const careerGoals = [
    { icon: <FaBriefcase />, text: "Frontend Developer within 1 years" },
    { icon: <FaBookReader />, text: "Contribute to Open Source Projects" },
    { icon: <FaLightbulb />, text: "Created a friendly UI/UX design" },
  ];

  const currentProjects = [
    {
      title: "E-commerce Platform",
      description: "Building a modern shopping experience with React and Node.js",
      status: "In Progress"
    }
  ];

  const funFacts = [
    {
      icon: <FaCloud />,
      title: "Professional Day Dreamer",
      description: "Spending 50% of my time imagining creative solutions"
    },
    {
      icon: <FaLightbulb />,
      title: "Idea Generator",
      description: "Turn daydreams into digital reality"
    },
    {
      icon: <FaStar />,
      title: "Star Gazer",
      description: "Finding inspiration in the cosmos"
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <motion.div
            className="bio-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p>
              Hi, I'm Crisha Campomayor a 22 years old, 4th Year IT student at Western Mindanao State University. 
              Passionate about frontend development, I enjoy creating visually appealing and user-friendly web interfaces. 
              During my studies, I've grind my skills in HTML, CSS, JavaScript and modern frameworks to build flawlessly digital experiences.
              I am eager to continue learning and applying my knowledge to real-world projects. Feel free to explore my projects and connect with me.
            </p>
          </motion.div>

          <div className="skills-section">
            <h3>Tech Stack</h3>
            <div className="tech-grid">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="tech-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <tech.icon style={{ color: tech.color, fontSize: '3rem' }} />
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="career-section">
            <h3>Career Goals</h3>
            <div className="goals-grid">
              {careerGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  className="goal-card"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="goal-icon">{goal.icon}</span>
                  <p>{goal.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="fun-facts-section">
            <h3>Fun Facts About Me</h3>
            <div className="fun-facts-grid">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  className="fun-fact-card"
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <motion.div
                    className="fact-icon"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {fact.icon}
                  </motion.div>
                  <h4>{fact.title}</h4>
                  <p>{fact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;