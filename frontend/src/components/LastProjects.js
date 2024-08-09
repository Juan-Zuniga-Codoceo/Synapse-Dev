import React from "react";
import "../css/LastProjects.css";
import project1 from "../img/project1.webp";
import project2 from "../img/project2.webp";
import project3 from "../img/project3.webp";

const LastProjects = () => {
  const projects = [
    {
      img: project1,
      title: "Synapse Dev - Web Dev Solution",
      link: "https://juan-zuniga-codoceo.github.io/webDev.github.io/#",
    },
    {
      img: project3,
      title: "Synapse Dev - Pizzería",
      link: "https://synapsedev-pizzeria.netlify.app/",
    },
    {
      img: project2,
      title: "Synapse Dev - Abogados",
      link: "https://synapsedev-abogados.netlify.app/",
    },
    
  ];

  return (
    <div className="last-projects">
      <h2>Últimos Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="link-overlay">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Ir a la web
              </a>
            </div>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastProjects;
