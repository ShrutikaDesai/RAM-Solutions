import React from "react";

const BRAND = "#378ADD"; // ← your brand color

const keyframes = `
  @keyframes spin-outer { to { transform: rotate(360deg); } }
  @keyframes spin-inner { to { transform: rotate(-360deg); } }
  @keyframes pulse-logo { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
  @keyframes fade-in-up {
    from { opacity:0; transform:translateY(10px); }
    to   { opacity:1; transform:translateY(0);    }
  }
  @keyframes dot1 { 0%,20%,100%{opacity:.2} 10%{opacity:1} }
  @keyframes dot2 { 0%,30%,100%{opacity:.2} 20%{opacity:1} }
  @keyframes dot3 { 0%,40%,100%{opacity:.2} 30%{opacity:1} }
`;

const Loader = () => (
  <>
    <style>{keyframes}</style>

    <div style={s.page}>
      <div style={s.wrap}>

        {/* Ring stack */}
        <div style={s.ringStack}>

          {/* Outer segmented arc */}
          <svg style={s.outerRing} viewBox="0 0 140 140" fill="none">
            <circle cx="70" cy="70" r="67" stroke="#e5e7eb" strokeWidth="2"/>
            <path d="M70 3 A67 67 0 0 1 137 70"
              stroke={BRAND} strokeWidth="3" strokeLinecap="round"/>
            <path d="M137 70 A67 67 0 0 1 70 137"
              stroke={BRAND} strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
            <path d="M70 137 A67 67 0 0 1 3 70"
              stroke={BRAND} strokeWidth="3" strokeLinecap="round" opacity="0.2"/>
          </svg>

          {/* Inner counter-rotating arc */}
          <svg style={s.innerRing} viewBox="0 0 112 112" fill="none">
            <circle cx="56" cy="56" r="53" stroke="#e5e7eb" strokeWidth="1.5"/>
            <path d="M56 3 A53 53 0 0 1 109 56"
              stroke={BRAND} strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
            <path d="M109 56 A53 53 0 0 1 56 109"
              stroke={BRAND} strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
          </svg>

          {/* Logo at center */}
          <div style={s.logoCircle}>
            <img src="/logo.png" alt="Company logo" style={s.logo} />
          </div>

        </div>

        {/* Text + dots */}
        <div style={{ textAlign: "center" }}>
          <p style={s.title}>Loading your experience</p>
          <p style={s.sub}>
            Please wait 
            <span style={{...s.dot, animation:"dot1 1.2s ease-in-out infinite"}}/>
            <span style={{...s.dot, animation:"dot2 1.2s ease-in-out infinite"}}/>
            <span style={{...s.dot, animation:"dot3 1.2s ease-in-out infinite"}}/>
          </p>
        </div>

      </div>
    </div>
  </>
);

const s = {
  page: {
    position: "fixed", inset: 0, zIndex: 9999,
    background: "#ffffff",
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  wrap: {
    display: "flex", flexDirection: "column",
    alignItems: "center", gap: 24,
    animation: "fade-in-up 0.5s ease both",
  },
  ringStack: {
    position: "relative", width: 140, height: 140,
    display: "flex", alignItems: "center", justifyContent: "center",
  },
  outerRing: {
    position: "absolute", inset: 0, borderRadius: "50%",
    animation: "spin-outer 1.6s linear infinite",
  },
  innerRing: {
    position: "absolute", inset: 14, borderRadius: "50%",
    animation: "spin-inner 2.2s linear infinite",
  },
  logoCircle: {
    position: "relative", zIndex: 2,
    width: 72, height: 72, borderRadius: "50%",
    background: "#ffffff", border: "1px solid #e5e7eb",
    display: "flex", alignItems: "center", justifyContent: "center",
    animation: "pulse-logo 2.4s ease-in-out infinite",
    overflow: "hidden",
  },
  logo:  { width: 52, height: 52, objectFit: "contain" },
  title: { fontSize: 15, fontWeight: 500, margin: "0 0 4px", color: "#111" },
  sub:   { fontSize: 13, color: "#9ca3af", margin: 0,
           display: "flex", alignItems: "center", justifyContent: "center", gap: 3 },
  dot:   { width: 4, height: 4, borderRadius: "50%", background: BRAND, display: "inline-block" },
};

export default Loader;