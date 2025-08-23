import React, { useState } from "react";
import "./About.css";
import { FaRobot, FaMapMarkerAlt, FaGraduationCap, FaReact, FaPython, FaBrain } from "react-icons/fa";

const funFacts = [
  "Started coding at 16—never stopped since.",
  "Can build a React UI faster than I can make chai.",
  "Published research in AI/ML during undergrad.",
  "Obsessed with building tools that solve real problems.",
  "Fitness enthusiast & foodie outside of code."
];

export default function About() {
  const [factIdx, setFactIdx] = useState(0);

  return (
    <section className="about-section" id = "about">
      <div className="about-card">
        <div className="about-left">
          <h2>
            <span className="about-gradient">About Aryan</span>
          </h2>
          <p className="about-intro">
            I'm Aryan Sadvelkar—a developer & problem-solver who loves bringing AI and the web together.
            <br /><br />
            Currently pursuing my Master’s at Syracuse, I specialize in crafting intelligent, intuitive products with React, Python, and machine learning.
            <br /><br />
            Always looking for ways to make tech more human—and have fun along the way!
          </p>
          <ul className="about-quickfacts">
            <li><FaMapMarkerAlt /> Syracuse, NY</li>
            <li><FaGraduationCap /> Master’s in CS, Class of 2026</li>
            <li><FaBrain /> AI/ML Researcher</li>
            <li><FaRobot /> Building web + AI products</li>
            <li><FaReact /> React & Modern Frontend</li>
            <li><FaPython /> Python & ML</li>
          </ul>
          <button className="fact-btn"
            onClick={() => setFactIdx((factIdx+1)%funFacts.length)}>
            🎲 Fun Aryan Fact
          </button>
          <div className="about-funfact">{funFacts[factIdx]}</div>
        </div>
        <div className="about-right">
          <img className="about-img" src="images/profile1.HEIC" alt="Aryan Sadvelkar" />
        </div>
      </div>
    </section>
  );
}
