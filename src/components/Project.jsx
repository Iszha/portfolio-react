import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiGithub, FiExternalLink, FiChevronRight } from 'react-icons/fi';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact,
  FaBootstrap,
  FaPhp
} from 'react-icons/fa';
import { SiVite, SiMysql } from 'react-icons/si';
import '../styles/Project.css';

const Project = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Add animation when changing projects
    const resetAnimation = () => {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 50);
    };
    
    resetAnimation();
  }, [activeProject]);

  const getTechIcon = (tech) => {
    const icons = {
      'HTML': <FaHtml5 style={{ color: '#E34F26' }} />,
      'CSS': <FaCss3Alt style={{ color: '#1572B6' }} />,
      'JavaScript': <FaJs style={{ color: '#F7DF1E' }} />,
      'React': <FaReact style={{ color: '#61DAFB' }} />,
      'Vite': <SiVite style={{ color: '#646CFF' }} />,
      'Bootstrap': <FaBootstrap style={{ color: '#7952B3' }} />,
      'PHP': <FaPhp style={{ color: '#777BB4' }} />,
      'MySQL': <SiMysql style={{ color: '#4479A1' }} />
    };
    return icons[tech] || null;
  };

  // Updated projects data with Scientific Calculator and Pokemon projects
  const projects = [
    {
      title: "Southcom National High School",
      subtitle: "Information Management System",
      description: "A comprehensive information management system developed for Southcom National High School. This system streamlines administrative processes, manages student records, tracks academic performance, and facilitates communication between staff, students, and parents through an intuitive web interface.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      github: "#",
      live: "https://snhssims.online",
      color: "#4479A1",
      image: "/snhs.jpeg"
    },
    {
      title: "Scientific Calculator",
      subtitle: "React-based Calculator App",
      description: "A comprehensive scientific calculator built with React and Vite. This application offers standard arithmetic operations along with advanced scientific functions, featuring a clean and intuitive user interface with responsive design.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Vite"],
      github: "https://github.com/Iszha/react-scical",   
      live: "https://ishascical.netlify.app",
      color: "#61DAFB",
      image: "/scical.jpeg"
    },
    {
      title: "Pokemon Explorer",
      subtitle: "PokeAPI Integration",
      description: "An interactive Pokemon application that leverages the PokeAPI to display detailed information about Pokemon. Users can browse through different Pokemon, view their stats, abilities, and more in a visually appealing interface built with React and Vite.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Vite"],
      github: "https://github.com/Eixaax/Pokemoncchi",
      live: "https://pokemongew.netlify.app",
      color: "#EF5350",
      image: "/pkmn.jpeg"
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <header className="projects-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Explore my recent work and creative solutions</p>
        </header>
        
        <div className="projects-content">
          <div className="project-selector">
            {projects.map((project, index) => (
              <button 
                key={index}
                className={`selector-button ${activeProject === index ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
              >
                <span className="selector-index">{(index + 1).toString().padStart(2, '0')}</span>
                <div className="selector-info">
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
                <FiChevronRight className="selector-icon" />
              </button>
            ))}
          </div>
          
          <div className="project-display">
            <div className={`project-card ${isVisible ? 'fade-in' : 'fade-out'}`}>
              <div className="project-image-container">
                <div className="project-image-wrapper" style={{ backgroundColor: projects[activeProject].color + '20' }}>
                  <img 
                    src={projects[activeProject].image} 
                    alt={projects[activeProject].title} 
                    className="project-image"
                  />
                  <div className="image-overlay" style={{ backgroundColor: projects[activeProject].color + '10' }}></div>
                </div>
                <div className="tech-badges">
                  {projects[activeProject].tech.map((tech, index) => (
                    <span key={index} className="tech-badge" title={tech}>
                      {getTechIcon(tech)}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="project-info">
                <div className="project-header">
                  <h2 className="project-title">{projects[activeProject].title}</h2>
                  <p className="project-subtitle">{projects[activeProject].subtitle}</p>
                </div>
                
                <div className="project-body">
                  <p className="project-description">{projects[activeProject].description}</p>
                  
                  <div className="project-tech">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {projects[activeProject].tech.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {getTechIcon(tech)}
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="project-footer">
                  <a href={projects[activeProject].github} className="project-link github" target="_blank" rel="noopener noreferrer">
                    <FiGithub /> Source Code
                  </a>
                  <a href={projects[activeProject].live} className="project-link demo" target="_blank" rel="noopener noreferrer">
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Project;
