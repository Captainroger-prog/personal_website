import React, { useEffect, useState } from "react";
import "./Hero.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

import Resume from "./Resume"; // Import your Resume component

const skillsList = [
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
];

const Hero = () => {
  const [skills, setSkills] = useState([]);
  const [showResume, setShowResume] = useState(false); // State to toggle resume modal

  useEffect(() => {
    const initializedSkills = skillsList.map(skill => ({
      ...skill,
      x: Math.random() * 40 - 20,
      y: Math.random() * 20 - 10,
      rotate: Math.random() * 10 - 5,
      speed: Math.random() * 3 + 2
    }));
    setSkills(initializedSkills);
  }, []);

  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Hi, I'm <span className="highlight">Rogelio Roger Dela Cruz II</span> 👋
        </h1>
        <p className="subtitle">
          I am a Computer Science student with a passion for technology. I want to build web
          and mobile systems that solve real-world problems and continuously
          improve my skills in modern development.
        </p>

        {/* Button + Social Icons Container */}
        <div className="btn-socials">
          <a href="#projects" className="btn">
            View My Work
          </a>

          <a
            href="#!"
            className="btn btn-resume"
            onClick={() => setShowResume(true)}
          >
            View My Resume
          </a>

          <div className="socials">
            <a href="https://www.facebook.com/arar0928/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://github.com/Captainroger-prog" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>

        {/* Skills Logos */}
        <div className="skills">
          {skills.map((skill, i) => (
            <img
              key={i}
              src={skill.logo}
              alt={skill.name}
              title={skill.name}
              style={{
                width: "45px",
                height: "45px",
                transform: `translate(${skill.x}px, ${skill.y}px) rotate(${skill.rotate}deg)`,
                animation: `float ${skill.speed}s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-right">
        <img src="/profile.jpg" alt="Rogelio profile" />
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="resume-modal">
          <div className="resume-modal-content">
            <button className="close-btn" onClick={() => setShowResume(false)}>✕</button>
            <Resume />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;