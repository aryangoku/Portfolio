import React from "react";
import { projects } from "../data/project";
import "./Project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">
        <span className="projects-gradient">Projects</span>
      </h2>
      <div className="projects-grid-modern">
        {projects.map((proj, i) => (
          <div className="project-card-modern" key={i}>
            <div className="project-img-modern">
              <img src={proj.image} alt={proj.title} />
            </div>
            <div className="project-badges-modern">
              {proj.tech.map(t => (
                <span className="tech-badge-modern" key={t}>{t}</span>
              ))}
            </div>
            <h3 className="project-title-modern">{proj.title}</h3>
            <p className="project-desc-modern">{proj.description}</p>
            <div className="project-links-modern">
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> <span>GitHub</span>
                </a>
              )}
              {proj.demo && (
                <a href={proj.demo} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> <span>Demo</span>
                </a>
              )}
              {proj.publication && (
                <a href={proj.publication} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> <span>Publication</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
