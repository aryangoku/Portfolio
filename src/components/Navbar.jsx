import React, { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { name: "Home", to: "#home" },
  { name: "About", to: "#about" },
  { name: "Projects", to: "#projects" },
  { name: "Skills", to: "#skills" },
  { name: "Experience", to: "#experience" },
  { name: "Contact", to: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => { setFadeIn(true); }, []);
  return (
    <nav className={`navbar-pro ${fadeIn ? "fade-in" : ""}`}>
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <span className="brand-cyan">Aryan</span>
          <span className="brand-pink">Sadvelkar</span>
        </a>
        <div className={`navbar-links ${mobileOpen ? "mobile-open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.to} className="navbar-link" onClick={() => setMobileOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
        <div className={`navbar-hamburger ${mobileOpen ? "open" : ""}`} onClick={() => setMobileOpen((o) => !o)}>
          <span /><span /><span />
        </div>
      </div>
    </nav>
  );
}
