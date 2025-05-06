import React from "react";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const Certification = () => {
  const certifications = [
    {
      id: 1,
      title: "Introduction to Front End Development",
      issuer: "Krishna Kumar",
      date: "May 2025",
      description: "Validates expertise in designing distributed systems on AWS.",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Networking"],
      image: "/cert (1).jpeg"
    },
    {
      id: 2,
      title: "AL ML Project",
      issuer: "Krishna Kumar",
      date: "May 2025",
      description: "Demonstrates understanding of Scrum framework and its application.",
      skills: ["Agile Methodologies", "Scrum", "Team Leadership"],
      image: "/cert (2).jpeg"
    },
    {
      id: 3,
      title: "Salesforce Administrator & App Builder",
      issuer: "Krishna Kumar",
      date: "May 2025",
      description: "Certifies ability to design and build data processing systems on Google Cloud.",
      skills: ["Data Engineering", "Machine Learning", "Big Data", "Google Cloud"],
      image: "/cert (3).jpeg"
    },
    {
      id: 4,
      title: "Business Intelligence Fundamentals",
      issuer: "Krishna Kumar",
      date: "May 2025",
      description: "Validates skills in developing solutions using Azure services.",
      skills: ["Azure", "Cloud Development", ".NET", "Serverless"],
      image: "/cert (4).jpeg"
    },
    {
      id: 5,
      title: "Java Programming for Beginners",
      issuer: "Krishna Kumar",
      date: "May 2025",
      description: "Demonstrates proficiency in Kubernetes administration and container orchestration.",
      skills: ["Kubernetes", "Container Orchestration", "DevOps", "Cloud Native"],
      image: "/cert (5).jpeg"
    },
    {
      id: 6,
      title: "Introduction to Cloud Security",
      issuer: "Krishna Kumar",
      date: "May 2025",
      description: "Validates skills in identifying vulnerabilities in systems and networks.",
      skills: ["Ethical Hacking", "Penetration Testing", "Security", "Network Security"],
      image: "/cert (6).jpeg"
    },
    {
      id: 7,
      title: "Fundamentals of Data Structure in C",
      issuer: "Krishna Kumar",
      date: "May 2025",
      description: "Demonstrates ability to configure Salesforce, maintain users, and manage security.",
      skills: ["Salesforce", "CRM", "Business Administration", "Cloud Computing"],
      image: "/cert (7).jpeg"
    },
    {
      id: 8,
      title: "Salesforce Administrator & App Builder",
      issuer: "Krishna Kumar",
      date: "May 2025",
      description: "Validates expertise in designing, implementing, and managing cybersecurity programs.",
      skills: ["Cybersecurity", "Risk Management", "Security Architecture", "Compliance"],
      image: "/cert (8).jpeg"
    },
    {
      id: 9,
      title: "Introduction to IoT",
      issuer: "Krishna Kumar",
      date: "May 2025",
      description: "Certifies proficiency in Java programming and application development.",
      skills: ["Java", "Object-Oriented Programming", "Software Development", "API Design"],
      image: "/cert (9).jpeg"
    },
    {
      id: 10,
      title: "Getting Started with Full Stack Java Development",
      issuer: "Krishna Kumar",
      date: "May 2025",
      description: "Validates skills in data analysis, machine learning, and statistical modeling.",
      skills: ["Data Science", "Machine Learning", "Python", "Statistical Analysis"],
      image: "/cert (10).jpeg"
    }
  ];

  return (
    <div className="certification-section">
      <div className="certification-container">
        <h1 className="section-title">My Certifications</h1>
        <p className="certification-intro">
          Professional certifications that validate my expertise and commitment to continuous learning.
        </p>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div className="certification-card" key={cert.id}>
              <div className="certification-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certification-content">
                <div className="certification-icon">
                  <FaCertificate />
                </div>
                <h3>{cert.title}</h3>
                <div className="certification-issuer">
                  <span>Issued by:</span> {cert.issuer}
                </div>
                <div className="certification-date">
                  <span>Date:</span> {cert.date}
                </div>
                <p className="certification-description">{cert.description}</p>
                
                <div className="certification-skills">
                  {cert.skills.map((skill, index) => (
                    <span className="skill-tag" key={index}>
                      {skill}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={cert.image} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="credential-link"
                >
                  View Certificate <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
