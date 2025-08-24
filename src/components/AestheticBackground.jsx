import React from "react";

export default function AestheticBackground({ variant = "" }) {
  return (
    <div style={{ pointerEvents: "none", position: "fixed", inset: 0, zIndex: -1, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "#0b0d14" }} />
      {variant === "aurora" && <Aurora />}
      {variant === "mesh" && <Mesh />}
      {variant === "stars" && <Stars />}
      {variant === "blobs" && <Blobs />}
      <div style={{ position: "absolute", inset: 0, opacity: 0.12, mixBlendMode: "overlay", backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(grainSVG)}')` }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 60% at 50% 120%, rgba(0,0,0,.45), transparent 60%)" }} />
    </div>
  );
}

function Aurora() {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <div style={{ position: "absolute", inset: "-20%", filter: "blur(60px)", background: "conic-gradient(from 180deg at 50% 50%, rgba(75,192,255,.12), rgba(168,85,247,.18), rgba(34,197,94,.14), rgba(75,192,255,.12))", animation: "aurora 18s ease-in-out infinite" }} />
      <div style={{ position: "absolute", inset: "-25%", filter: "blur(90px)", background: "conic-gradient(from 0deg at 50% 50%, rgba(56,189,248,.10), rgba(244,63,94,.12), rgba(59,130,246,.14), rgba(56,189,248,.10))", animation: "aurora 28s ease-in-out infinite reverse" }} />
      <style>{`@keyframes aurora{0%{transform:translate3d(0,0,0) rotate(0) scale(1)}50%{transform:translate3d(2%,-3%,0) rotate(60deg) scale(1.05)}100%{transform:translate3d(0,0,0) rotate(120deg) scale(1)}}`}</style>
    </div>
  );
}

function Mesh() {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <div style={{ position: "absolute", inset: "-10%", background: "radial-gradient(60% 40% at 20% 10%, rgba(56,189,248,.18), transparent), radial-gradient(60% 40% at 80% 20%, rgba(168,85,247,.18), transparent), radial-gradient(50% 35% at 30% 80%, rgba(59,130,246,.18), transparent), radial-gradient(50% 35% at 70% 70%, rgba(244,63,94,.14), transparent), linear-gradient(180deg, rgba(2,6,23,1), rgba(2,6,23,.92))", animation: "meshMove 32s ease-in-out infinite" }} />
      <style>{`@keyframes meshMove{0%,100%{transform:translate3d(0,0,0) scale(1)}50%{transform:translate3d(0,-1.5%,0) scale(1.02)}}`}</style>
    </div>
  );
}

function Stars() {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <StarLayer density={0.8} size={1} duration={6} opacity={0.6} />
      <StarLayer density={0.5} size={1.6} duration={9} opacity={0.45} />
      <StarLayer density={0.25} size={2.2} duration={14} opacity={0.35} />
    </div>
  );
}

function StarLayer({ density, size, duration, opacity }) {
  const count = Math.floor(120 * density);
  const items = Array.from({ length: count });
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      {items.map((_, i) => (
        <span key={i} style={{ position: "absolute", width: size, height: size, borderRadius: "50%", background: "#fff", opacity, top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animation: `twinkle ${duration + Math.random() * 6}s ease-in-out ${Math.random() * 6}s infinite` }} />
      ))}
      <style>{`@keyframes twinkle{0%,100%{opacity:${opacity}}50%{opacity:${opacity * 0.3}}}`}</style>
    </div>
  );
}

function Blobs() {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <Blob className="a" hue={200} delay={0} />
      <Blob className="b" hue={290} delay={4} />
      <Blob className="c" hue={150} delay={8} />
    </div>
  );
}

function Blob({ className, hue = 180, delay = 0 }) {
  const color = `hsla(${hue},95%,65%,.18)`;
  return (
    <div className={className} style={{ position: "absolute", width: "46vmax", height: "46vmax", filter: "blur(70px)", background: `radial-gradient(45% 35% at 50% 50%, ${color}, transparent 60%)`, animation: `float 28s ease-in-out ${delay}s infinite`, willChange: "transform" }} />
  );
}

const grainSVG = `<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='1.5' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.25 0'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`;

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `.a{left:-10%;top:5%}.b{right:-8%;top:20%}.c{left:10%;bottom:-10%}@keyframes float{0%{transform:translate3d(0,0,0) rotate(0)}50%{transform:translate3d(6%,-4%,0) rotate(30deg)}100%{transform:translate3d(0,0,0) rotate(60deg)}}`;
  document.head.appendChild(style);
}
