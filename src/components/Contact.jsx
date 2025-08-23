import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <motion.h2
        className="contact-title gradient-text"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 40 }}
      >
        Let’s Connect
      </motion.h2>
      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 30 }}
      >
        Have an opportunity, want to collaborate, or just want to say hi?  
        Drop a message or connect with me on social media!
      </motion.p>
      <div className="contact-grid">

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 40 }}
          onSubmit={handleSubmit}
        >
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              autoComplete="off"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              autoComplete="off"
              value={form.email}
              onChange={handleChange}
              placeholder="you@email.com"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
            />
          </label>
          <motion.button
            type="submit"
            className="contact-submit"
            whileHover={{ scale: 1.05, boxShadow: "0 2px 16px #0ff1ff55" }}
            whileTap={{ scale: 0.97 }}
          >
            Send Message
          </motion.button>
          {submitted && (
            <motion.div
              className="contact-success"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thank you! I'll get back to you soon. 🚀
            </motion.div>
          )}
        </motion.form>
        <motion.div
          className="contact-socials"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, type: "spring", stiffness: 40 }}
        >
          <h3>Find me online</h3>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/aryan-sadvelkar-510555311/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/aryan_s.16/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/Aryan-Sadvelkar/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link facebook"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
          <div className="contact-email">
            <span>Email:</span>
            <a href="mailto:asadvelk@syr.edu">asadvelk@syr.edu</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
