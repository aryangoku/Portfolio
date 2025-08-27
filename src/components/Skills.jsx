import React from "react";
import { skills } from "../data/skills.jsx";
import "./Skills.css";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <Reveal y={20} duration={0.65}>
        <h2 className="skills-title">
          <span className="skills-gradient">Skills</span>
        </h2>
      </Reveal>
      <div className="skills-grid-animated">
        {skills.map(({ icon, name, color }, i) => (
          <Reveal key={name} y={24} delay={i * 0.06} duration={0.55}>
            <div className="skill-card-animated" style={{ "--accent": color }}>
              <div className="skill-icon-wrap">{icon}</div>
              <div className="skill-label">{name}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
