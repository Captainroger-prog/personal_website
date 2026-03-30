import React, { useState } from "react";
import "./Projects.css";

const createdProjects = [
  {
    title: "StudentServe",
    description: "Student Services and Booking Platform.",
    tech: "PHP, MySQL, Bootstrap",
    images: ["/images/1.png", "/images/2.png"]
  },
  {
    title: "BlaireShop",
    description: "Online POS System.",
    tech: "PHP, MySQL, Bootstrap",
    images: ["/images/3.png", "/images/4.png"]
  },
  {
    title: "Personal Website",
    description: "My personal portfolio website.",
    tech: "React, CSS",
    images: ["/images/5.png", "/images/9.png"]
  },
];

const creatingProjects = [
  {
    title: "Bajaj Grab",
    description: "Ride-hailing app with driver tracking.",
    tech: "Flutter, PHP, MySQL",
    images: ["/images/6.png", "/images/7.png"]
  },
  {
    title: "School Portal",
    description: "School portal system",
    tech: "Laravel, MySQL, Bootstrap",
    images: ["/images/8.png"]
  },
];

const Projects = () => {
  const [lightboxImg, setLightboxImg] = useState(null);

  const openLightbox = (img) => setLightboxImg(img);
  const closeLightbox = () => setLightboxImg(null);

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <h3>Created</h3>
      <div className="grid">
        {createdProjects.map((proj, i) => (
          <div key={i} className="card">
            {proj.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={proj.title}
                className="project-img"
                onClick={() => openLightbox(img)}
              />
            ))}
            <h4>{proj.title}</h4>
            <p>{proj.description}</p>
            <small>{proj.tech}</small>
            <span className="badge">Created</span>
          </div>
        ))}
      </div>

      <h3>Currently Building</h3>
      <div className="grid">
        {creatingProjects.map((proj, i) => (
          <div key={i} className="card">
            {proj.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={proj.title}
                className="project-img"
                onClick={() => openLightbox(img)}
              />
            ))}
            <h4>{proj.title}</h4>
            <p>{proj.description}</p>
            <small>{proj.tech}</small>
            <span className="badge gray">Creating</span>
          </div>
        ))}
      </div>

      {/* Lightbox overlay */}
      {lightboxImg && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxImg} alt="Project" className="lightbox-img" />
        </div>
      )}
    </section>
  );
};

export default Projects;      