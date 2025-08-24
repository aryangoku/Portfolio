import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Contact.css";

const SERVICE_ID = "service_y8f891r";
const TEMPLATE_ID = "template_kql2y6g";
const PUBLIC_KEY = "oatySakN_yKgiUeWu";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setErr("");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          email: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setOk(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setOk(false), 4000);
    } catch (e) {
      setErr("Could not send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section" id = "contact">
      <h2 className="contact-title gradient-text">Let’s Connect</h2>
      <p className="contact-subtitle">
        Drop a message or connect with me on social media!
      </p>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={onSubmit}>
          <label>
            Name
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={onChange}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={onChange}
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={onChange}
            />
          </label>
          <button type="submit" disabled={sending} className="contact-submit">
            {sending ? "Sending..." : "Send Message"}
          </button>
          {ok && <div className="contact-success">Message sent successfully ✅</div>}
          {err && <div className="contact-error">{err}</div>}
        </form>

        <div className="contact-socials">
          <h3>Find me online</h3>
          <img
            src="/avatar.jpg"
            alt="Aryan Sadvelkar"
            className="contact-avatar"
          />
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/aryan-sadvelkar-510555311/"
              target="_blank"
              rel="noreferrer"
              className="social-link linkedin"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/aryan_s.16/"
              target="_blank"
              rel="noreferrer"
              className="social-link instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/Aryan-Sadvelkar/"
              target="_blank"
              rel="noreferrer"
              className="social-link facebook"
            >
              <FaFacebook />
            </a>
          </div>
          <div className="contact-email">
            <span>Email:</span>
            <a href="mailto:asadvelk@syr.edu">asadvelk@syr.edu</a>
          </div>
        </div>
      </div>
    </section>
  );
}
