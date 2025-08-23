import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} Aryan Sadvelkar • Built with React & 💡
      </span>
      <span>
        <a href="mailto:asadvelk@syr.edu">asadvelk@syr.edu</a>
      </span>
    </footer>
  );
}
