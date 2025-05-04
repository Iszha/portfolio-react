import React from "react";
import { FaBriefcase, FaCalendarAlt, FaLaptopCode } from "react-icons/fa";

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
                <h3>Software Engineering Intern</h3>
                <h4>Company Group Name</h4>
                <div className="experience-duration">
                  <FaCalendarAlt className="duration-icon" />
                  <span>June 2023 - August 2023</span>
                </div>
              </div>
            </div>
            <div className="experience-body">
              <p>
                During my internship, I worked on developing and maintaining web applications 
                using React.js and Node.js. I collaborated with senior developers to implement 
                new features and fix bugs in existing applications.
              </p>
              <div className="responsibilities">
                <h5>Key Responsibilities:</h5>
                <ul>
                  <li>Developed responsive UI components using React.js</li>
                  <li>Implemented RESTful API integration</li>
                  <li>Participated in code reviews and team meetings</li>
                  <li>Optimized application performance</li>
                </ul>
              </div>
              <div className="tech-used">
                <h5>Technologies Used:</h5>
                <div className="tech-tags">
                  <span className="tech-tag">React.js</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">Git</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional experience - you can add more or remove this */}
          <div className="experience-card">
            <div className="experience-header">
              <div className="company-logo">
                <FaLaptopCode />
              </div>
              <div className="experience-info">
                <h3>Web Development Freelancer</h3>
                <h4>Self-employed</h4>
                <div className="experience-duration">
                  <FaCalendarAlt className="duration-icon" />
                  <span>January 2023 - Present</span>
                </div>
              </div>
            </div>
            <div className="experience-body">
              <p>
                Working as a freelance web developer, creating custom websites and web applications
                for various clients. Focusing on delivering high-quality, responsive, and user-friendly
                solutions.
              </p>
              <div className="responsibilities">
                <h5>Key Responsibilities:</h5>
                <ul>
                  <li>Designing and developing custom websites</li>
                  <li>Creating responsive layouts</li>
                  <li>Implementing client requirements</li>
                  <li>Providing maintenance and support</li>
                </ul>
              </div>
              <div className="tech-used">
                <h5>Technologies Used:</h5>
                <div className="tech-tags">
                  <span className="tech-tag">HTML5</span>
                  <span className="tech-tag">CSS3</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">WordPress</span>
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