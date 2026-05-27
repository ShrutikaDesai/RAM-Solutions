import React, { useEffect } from "react";

const KEYFRAMES = `
  @keyframes floatA { 0%,100%{transform:translateY(0) translateX(0)} 33%{transform:translateY(-18px) translateX(8px)} 66%{transform:translateY(10px) translateX(-6px)} }
  @keyframes floatB { 0%,100%{transform:translateY(0) translateX(0)} 40%{transform:translateY(14px) translateX(-10px)} 70%{transform:translateY(-10px) translateX(12px)} }
  @keyframes floatC { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-22px)} }
  @keyframes pulseDot { 0%,100%{transform:scale(1);opacity:0.6} 50%{transform:scale(1.4);opacity:1} }
  @keyframes twinkle { 0%,100%{opacity:0.15} 50%{opacity:0.55} }
  @keyframes spinRing { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  .ft-links a:before { content:''; width:4px; height:4px; border-radius:50%; background:#e8a020; opacity:0.45; flex-shrink:0; transition:opacity 0.2s; }
  .ft-links a:hover:before { opacity:1 !important; }
  .ft-links a:hover { color:#e8a020 !important; }
  .soc-btn:hover { border-color:#e8a020 !important; color:#e8a020 !important; background:rgba(232,160,32,0.12) !important; transform:translateY(-3px); }
  .ct-val a:hover { color:#e8a020 !important; }
  .cta-btn:hover { background:#cf8f1a !important; transform:translateY(-2px); }
  .ft-bl-link:hover { color:#e8a020 !important; }
  @media (max-width: 900px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr !important;
      gap: 32px !important;
    }
  }
  @media (max-width: 640px) {
    .footer-shell {
      text-align: center;
    }
    .footer-grid {
      grid-template-columns: 1fr !important;
      gap: 28px !important;
      padding: 40px 20px 32px !important;
    }
    .footer-brand-logo {
      width: 76px !important;
      height: 76px !important;
      margin: 0 auto;
    }
    .footer-socials {
      justify-content: center;
    }
    .footer-links {
      align-items: center;
    }
    .footer-contact-row {
      justify-content: center;
      text-align: left;
    }
    .footer-cta-wrap {
      display: flex;
      justify-content: center;
    }
    .footer-divider {
      margin: 0 20px !important;
    }
    .footer-bottom {
      padding: 16px 20px 24px !important;
      flex-direction: column !important;
      justify-content: center !important;
      text-align: center;
    }
    .footer-bottom-links {
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

const Footer = () => {
  useEffect(() => {
    if (!document.getElementById("ft-anim-styles")) {
      const s = document.createElement("style");
      s.id = "ft-anim-styles";
      s.textContent = KEYFRAMES;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <footer style={{
      background: "linear-gradient(135deg, #051840 0%, #0d2b6e 35%, #1a3e8c 60%, #0a1630 100%)",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif",
    }}>

      {/* ── Dot grid texture ── */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "26px 26px",
        pointerEvents: "none",
      }} />

      {/* ── Floating orbs ── */}
      <div style={{ position:"absolute", width:320, height:320, top:-80, right:-60, borderRadius:"50%", background:"radial-gradient(circle,rgba(232,160,32,0.1) 0%,transparent 70%)", animation:"floatA 9s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:200, height:200, bottom:40, left:-50, borderRadius:"50%", background:"radial-gradient(circle,rgba(26,62,140,0.5) 0%,transparent 70%)", animation:"floatB 7s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:140, height:140, top:"50%", left:"38%", borderRadius:"50%", background:"radial-gradient(circle,rgba(232,160,32,0.07) 0%,transparent 70%)", animation:"floatC 11s ease-in-out infinite", pointerEvents:"none" }} />

      {/* ── Spinning rings ── */}
      <div style={{ position:"absolute", width:220, height:220, top:-40, left:"30%", borderRadius:"50%", border:"1.5px solid rgba(232,160,32,0.18)", animation:"spinRing 18s linear infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", width:120, height:120, bottom:30, right:"18%", borderRadius:"50%", border:"1.5px solid rgba(255,255,255,0.1)", animation:"spinRing 12s linear infinite reverse", pointerEvents:"none" }} />

      {/* ── Pulsing dots ── */}
      {[
        { size:6, top:"18%", left:"12%",  color:"#e8a020",               anim:"pulseDot 2.4s ease-in-out infinite" },
        { size:4, top:"34%", left:"55%",  color:"#e8a020",               anim:"pulseDot 3.1s ease-in-out infinite 0.5s" },
        { size:5, top:"72%", left:"22%",  color:"rgba(255,255,255,0.5)", anim:"pulseDot 2.8s ease-in-out infinite 1s" },
        { size:3, top:"55%", right:"10%", color:"#e8a020",               anim:"pulseDot 2s ease-in-out infinite 0.3s" },
        { size:5, top:"82%", right:"32%", color:"rgba(255,255,255,0.4)", anim:"pulseDot 3.5s ease-in-out infinite 0.8s" },
        { size:4, top:"14%", right:"28%", color:"#e8a020",               anim:"twinkle 2.6s ease-in-out infinite" },
        { size:3, top:"42%", left:"8%",   color:"rgba(255,255,255,0.5)", anim:"twinkle 3.2s ease-in-out infinite 1.2s" },
        { size:6, bottom:"60px", left:"48%", color:"rgba(232,160,32,0.5)", anim:"floatC 5s ease-in-out infinite" },
      ].map((d, i) => (
        <div key={i} style={{
          position:"absolute", borderRadius:"50%", pointerEvents:"none",
          width:d.size, height:d.size, background:d.color,
          top:d.top, left:d.left, right:d.right, bottom:d.bottom,
          animation:d.anim,
        }} />
      ))}

      {/* ── Content ── */}
      <div className="footer-shell" style={{ position:"relative", zIndex:2 }}>
        <div className="footer-grid" style={{ maxWidth:1060, margin:"0 auto", padding:"56px 28px 44px", display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1.4fr", gap:40 }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 18 }}>
              <img
                className="footer-brand-logo"
                src="/logo.png"
                alt="Right Analysis Matters logo"
                style={{
                  width: 88,
                  height: 88,
                  objectFit: "contain",
                  borderRadius: 18,
                  background: "rgba(251, 236, 236, 0.06)",
                  padding: 10,
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.18)",
                }}
              />
            </div>
            <p style={{ fontSize:15, fontWeight:800, color:"#e8a020", letterSpacing:"0.01em", lineHeight:1.3, marginBottom:8 }}>
              Right Analysis Matters Pvt. Ltd.
            </p>
            <p style={{ fontSize:11, color:"rgba(255,255,255,0.35)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:14 }}>
              Right Analysis Matters
            </p>
            <p style={{ fontSize:13, color:"rgba(255,255,255,0.55)", lineHeight:1.75, marginBottom:22 }}>
              We build intelligent digital platforms for education, schools, and career guidance — helping organisations automate operations and deliver better outcomes.
            </p>
            <div className="footer-socials" style={{ display:"flex", gap:10 }}>
              {[
                { href:"https://www.facebook.com/people/Right-Analysis-Matters-Pvt-Ltd/61584691050212/", label:"Facebook",
                  svg:<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z"/></svg> },
                { href:"https://www.instagram.com/rightanalysismatters/", label:"Instagram",
                  svg:<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.88 1.12a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 8.5z"/></svg> },
                { href:"https://wa.me/918484905526", label:"WhatsApp",
                  svg:<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
              ].map(({ href, label, svg }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="soc-btn" aria-label={label}
                  style={{ width:36, height:36, borderRadius:9, border:"1px solid rgba(255,255,255,0.14)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.5)", textDecoration:"none", transition:"all 0.22s ease" }}>
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <ColTitle>Quick Links</ColTitle>
            <ul className="ft-links footer-links" style={{ listStyle:"none", padding:0, display:"flex", flexDirection:"column", gap:12 }}>
              {[["Home","/"],["About Us","/about-us"],["Services","/services"],["Products","/products"],["Contact Us","/contact-us"]].map(([label, href]) => (
                <li key={label}><a href={href} style={{ fontSize:13, color:"rgba(255,255,255,0.58)", textDecoration:"none", display:"flex", alignItems:"center", gap:9, transition:"color 0.2s" }}>{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <ColTitle>Our Products</ColTitle>
            <ul className="ft-links footer-links" style={{ listStyle:"none", padding:0, display:"flex", flexDirection:"column", gap:12 }}>
              {["CMS","Preschool ERP","Career Assessment","K+12 School ERP"].map((name) => (
                <li key={name}><a href="/products" style={{ fontSize:13, color:"rgba(255,255,255,0.58)", textDecoration:"none", display:"flex", alignItems:"center", gap:9, transition:"color 0.2s" }}>{name}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <ColTitle>Get In Touch</ColTitle>
            <ContactRow icon={<PhoneIcon />} label="Phone">
              <a href="tel:+918484905526" style={{ color:"rgba(255,255,255,0.68)", fontSize:13, textDecoration:"none" }}>+91 84849 05526</a><br />
              <a href="tel:+918484906643" style={{ color:"rgba(255,255,255,0.68)", fontSize:13, textDecoration:"none" }}>+91 84849 06643</a>
            </ContactRow>
            <ContactRow icon={<MailIcon />} label="Email">
              <a href="mailto:info@ramtechnology.in" style={{ color:"rgba(255,255,255,0.68)", fontSize:13, textDecoration:"none" }}>info@ramtechnology.in</a>
            </ContactRow>
            <ContactRow icon={<PinIcon />} label="Location">
              <span style={{ color:"rgba(255,255,255,0.68)", fontSize:13 }}>Bavdhan, Pune, Maharashtra, India</span>
            </ContactRow>
            <div className="footer-cta-wrap">
              <a href="/contact-us" className="cta-btn" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#e8a020", color:"#fff", fontSize:12, fontWeight:700, letterSpacing:"0.07em", textTransform:"uppercase", padding:"11px 22px", borderRadius:8, textDecoration:"none", marginTop:6, transition:"background 0.2s,transform 0.2s" }}>
                Request a Demo →
              </a>
            </div>
          </div>

        </div>

        <div className="footer-divider" style={{ borderTop:"1px solid rgba(255,255,255,0.08)", margin:"0 28px" }} />

        <div className="footer-bottom" style={{ maxWidth:1060, margin:"0 auto", padding:"18px 28px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:10 }}>
          <p style={{ fontSize:12, color:"rgba(255,255,255,0.28)", margin:0 }}>
            © {new Date().getFullYear()} <span style={{ color:"#e8a020" }}>Right Analysis Matters Pvt. Ltd.</span> All rights reserved.
          </p>
          <div className="footer-bottom-links" style={{ display:"flex", gap:20 }}>
            <a href="/privacy-policy" className="ft-bl-link" style={{ fontSize:12, color:"rgba(255,255,255,0.28)", textDecoration:"none" }}>Privacy Policy</a>
            <a href="/terms" className="ft-bl-link" style={{ fontSize:12, color:"rgba(255,255,255,0.28)", textDecoration:"none" }}>Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ColTitle = ({ children }) => (
  <p style={{ fontSize:11, fontWeight:700, color:"#e8a020", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:18, paddingBottom:10, borderBottom:"1px solid rgba(232,160,32,0.22)" }}>
    {children}
  </p>
);

const ContactRow = ({ icon, label, children }) => (
  <div className="footer-contact-row" style={{ display:"flex", alignItems:"flex-start", gap:10, marginBottom:15 }}>
    <div style={{ width:32, height:32, borderRadius:8, background:"rgba(232,160,32,0.12)", border:"1px solid rgba(232,160,32,0.22)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, color:"#e8a020" }}>
      {icon}
    </div>
    <div>
      <p style={{ fontSize:11, color:"rgba(255,255,255,0.3)", textTransform:"uppercase", letterSpacing:"0.07em", marginBottom:3 }}>{label}</p>
      {children}
    </div>
  </div>
);

const PhoneIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>;
const MailIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const PinIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;

export default Footer;
