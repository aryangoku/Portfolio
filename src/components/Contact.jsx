import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Contact.css";
import Reveal from "./Reveal";

const SERVICE_ID = "service_y8f891r";
const TEMPLATE_ID = "template_kql2y6g";
const PUBLIC_KEY = "oatySakN_yKgiUeWu";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => { emailjs.init(PUBLIC_KEY); }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setErr("");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        email: form.email,
        message: form.message,
      });
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
    <section id="contact" className="contact-wrap">
      <Reveal y={24}>
        <h2 className="contact-heading">
          <span className="grad">Let’s Connect</span>
        </h2>
        <p className="contact-sub">Drop a message or reach me on socials—promise I read everything.</p>
      </Reveal>

      <div className="contact-grid">
        <Reveal y={26}>
          <form className="card form-card" onSubmit={onSubmit}>
            <div className="field">
              <label>Your name</label>
              <input
                name="name"
                type="text"
                placeholder="What’s your good name?"
                value={form.name}
                onChange={onChange}
                required
              />
            </div>

            <div className="field">
              <label>Your email</label>
              <input
                name="email"
                type="email"
                placeholder="What’s your email address?"
                value={form.email}
                onChange={onChange}
                required
              />
            </div>

            <div className="field">
              <label>Your message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="How can I help you?"
                value={form.message}
                onChange={onChange}
                required
              />
            </div>

            <button className="btn-primary" type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>

            {ok && <div className="banner ok">Thanks! I’ll get back to you soon.</div>}
            {err && <div className="banner err">{err}</div>}
          </form>
        </Reveal>

        <Reveal y={26} delay={0.08}>
          <aside className="card profile-card">
            <h3 className="profile-title">Find me online</h3>

            <div className="avatar-ring">
              <img src="/avatar.jpg" alt="Aryan Sadvelkar" />
            </div>

            <div className="profile-bio">
              Building delightful web & AI experiences with a focus on clean UX and performance.
            </div>

            <div className="socials">
              <a
                href="https://www.linkedin.com/in/aryan-sadvelkar-510555311/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/aryan_s.16/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/Aryan-Sadvelkar/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>

            <div className="splitter" />

            <div className="reach-me">
              <span>Email</span>
              <a href="mailto:asadvelk@syr.edu">asadvelk@syr.edu</a>
            </div>
          </aside>
        </Reveal>
      </div>

      <Reveal y={16} delay={0.06}>
        <div className="contact-footer">
          <a href="#home">Back to top</a>
        </div>
      </Reveal>
    </section>
  );
}
