import React from "react";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">My Experience</h2>
        
        <div className="experience-timeline">
          <div className="experience-card">
            <div className="experience-header">
              <div className="company-logo">
                <FaBriefcase />
              </div>
              <div className="experience-info">
                <h3>Frontend Developer</h3>
                <h4>Innoventure</h4>
                <div className="experience-duration">
                  <FaCalendarAlt className="duration-icon" />
                  <span>2023 - Present</span>
                </div>
              </div>
            </div>
            <div className="experience-body">
              <p>
                Working as a Frontend Developer at Innoventure, I focus on creating responsive and 
                user-friendly web interfaces. I collaborate with designers and backend developers 
                to implement effective web solutions for our clients.
              </p>
              <div className="responsibilities">
                <h5>Key Responsibilities:</h5>
                <ul>
                  <li>Developing responsive web interfaces using HTML, CSS, and JavaScript</li>
                  <li>Building and maintaining client websites with Bootstrap framework</li>
                  <li>Ensuring cross-browser compatibility and mobile responsiveness</li>
                  <li>Implementing UI/UX improvements based on user feedback</li>
                  <li>Collaborating with the design team to translate mockups into functional pages</li>
                </ul>
              </div>
              <div className="tech-used">
                <h5>Technologies Used:</h5>
                <div className="tech-tags">
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Bootstrap</span>
                  <span className="tech-tag">Git</span>
                  <span className="tech-tag">Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
