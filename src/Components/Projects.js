import React from "react";
import projectsData from "./projectsData";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Project Samples</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={`/images/${project.image}`} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* Add links to GitHub, live demo, etc. */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
