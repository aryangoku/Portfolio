import React from "react";
import { skills } from "../data/skills.jsx"; // <-- correct relative path
import "./Skills.css";


export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">
        <span className="skills-gradient">Skills</span>
      </h2>
      <div className="skills-grid-animated">
        {skills.map(({ icon, name, color }) => (
          <div className="skill-card-animated" key={name} style={{ "--accent": color }}>
            <div className="skill-icon-wrap">{icon}</div>
            <div className="skill-label">{name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

