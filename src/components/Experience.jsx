import React from "react";
import { motion } from "framer-motion";
import timelineData from "../data/timeline";
import "./Experience.css";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 60, damping: 15 }
  }
};

export default function EducationExperience() {
  const handleDownload = () => {
    window.open("./resume/Aryan Sadvelkar_Resume.pdf", "_blank");
  };

  return (
    <section className="timeline-outer" id = "experience">
      <div className="timeline-header">
        <h2 className="timeline-title gradient-text">Education & Experience</h2>
        <button className="resume-btn" onClick={handleDownload}>
          <span>Download Resume</span>
        </button>
      </div>
      <div className="timeline-main">
        <div className="timeline-line" />
        {timelineData.map((item, idx) => (
          <div
            key={idx}
            className={`timeline-row ${idx % 2 === 0 ? "left" : "right"}`}
          >
            <motion.div
              className={`timeline-card ${item.type}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.0 }} // Triggers when 30% of card is visible
              whileHover={{ scale: 1.025, boxShadow: "0 8px 36px #0ff1ff55" }}
            >
              <div className="timeline-card-header">
                <img src={item.logo} alt={item.org} className="timeline-card-logo" />
                <div>
                  <div className="timeline-card-org">{item.org}</div>
                  <div className="timeline-card-title">{item.title}</div>
                </div>
              </div>
              <div className="timeline-card-date">
                <span>{item.date}</span>
                {item.cgpa && (
                  <>
                    {" | "}
                    <span className="timeline-card-cgpa">CGPA: {item.cgpa}</span>
                  </>
                )}
              </div>
              <ul className="timeline-card-highlights">
                {item.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
            <span className="timeline-dot"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
