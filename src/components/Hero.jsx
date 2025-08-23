import React, { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import "./Hero.css";

const headlineWords = ["Solutions", "Interfaces", "Experiences", "Ideas"];
const defaultHTML = `<h2>Hello, World! 👋</h2>`;
const defaultCSS = `h2 { color: #15ecfc; font-size: 2.1rem; text-align: center; margin-top: 36px; }`;
const defaultJS = `// Try some JS here\ndocument.querySelector('h2').onclick = () => alert('Hello!');`;

export default function HeroWithEditor() {
  const [wordIdx, setWordIdx] = useState(0);
  const [prevWordIdx, setPrevWordIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [tab, setTab] = useState("HTML");
  const [html, setHtml] = useState(defaultHTML);
  const [css, setCss] = useState(defaultCSS);
  const [js, setJs] = useState(defaultJS);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setPrevWordIdx(wordIdx);
        setWordIdx(i => (i + 1) % headlineWords.length);
        setAnimating(false);
      }, 350); 
    }, 2200);
    return () => clearInterval(interval);
    // 
  }, [wordIdx]);

  const srcDoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <section className="hero-liveeditor-bg">
      <div className="hero-liveeditor-container">
        
        <div className="hero-liveeditor-left">
          <h1 className="catchy-headline">
            Crafting{" "}
            <span className="animated-word-wrapper">
              <span
                key={prevWordIdx}
                className={`animated-word animated-word--out ${animating ? "active" : ""}`}
                aria-hidden="true"
              >
                {headlineWords[prevWordIdx]}
              </span>
              <span
                key={wordIdx}
                className={`animated-word animated-word--in ${animating ? "active" : ""}`}
              >
                {headlineWords[wordIdx]}
              </span>
            </span>
            {" "}into Digital Reality.
          </h1>
          <p className="unique-intro">
            Aryan builds web and AI experiences where technology feels effortless.
          </p>
          <div className="hero-liveeditor-btns">
            <a href="#projects" className="btn-modern btn-primary">Explore Projects</a>
            <a href="#contact" className="btn-modern btn-outline">Let’s Talk</a>
          </div>
        </div>
        
        <div className="hero-liveeditor-right">
          <div className="editor-panel">
            <div className="editor-tabs">
              {["HTML", "CSS", "JS"].map((name) => (
                <button
                  key={name}
                  className={`editor-tab ${tab === name ? "active" : ""}`}
                  onClick={() => setTab(name)}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="editor-area">
              {tab === "HTML" && (
                <Editor
                  value={html}
                  onValueChange={setHtml}
                  highlight={code => Prism.highlight(code, Prism.languages.markup, "markup")}
                  padding={10}
                  className="code-editor"
                />
              )}
              {tab === "CSS" && (
                <Editor
                  value={css}
                  onValueChange={setCss}
                  highlight={code => Prism.highlight(code, Prism.languages.css, "css")}
                  padding={10}
                  className="code-editor"
                />
              )}
              {tab === "JS" && (
                <Editor
                  value={js}
                  onValueChange={setJs}
                  highlight={code => Prism.highlight(code, Prism.languages.javascript, "javascript")}
                  padding={10}
                  className="code-editor"
                />
              )}
            </div>
            {/* Live Preview for HTML/CSS/JS */}
            <div className="editor-preview-title">Live Preview</div>
            <iframe
              srcDoc={srcDoc}
              title="Live Code Preview"
              sandbox="allow-scripts"
              frameBorder="0"
              className="editor-iframe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
