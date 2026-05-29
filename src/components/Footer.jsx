import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

/**
 * Single-file Footer component (function export)
 * - Inline CSS included via <style> so no external CSS file required
 * - Subscribe form with client-side validation (simulated async)
 * - Accessible markup and responsive layout
 */

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    // Replace with real API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 900);
  };

  return (
    <footer className="fs-footer" role="contentinfo" aria-label="Footer">
      <style>{`
        :root{
          --bg:#071022;
          --overlay:linear-gradient(180deg, rgba(7,16,34,0.6), rgba(7,16,34,0.9));
          --accent:#ffb400;
          --text:#e6eef8;
          --muted:#9fb0c8;
          --card:#0f1a2a;
          --radius:10px;
          --gap:24px;
          --max-width:1200px;
        }

        .fs-footer{
          
          width: 100%;
  background-color: #0a2a5e;
  color: white;
  padding: 40px 60px;
  box-sizing: border-box;
  margin-top: auto;          /* starts from the very left */
  width: 100%;           /* stretches across the full width */
  background-color: #0a2a5e; /* your dark blue */
  color: white;
  padding: 40px 60px;    /* adjust spacing inside */
  box-sizing: border-box;
        }
.fs-logo {
  color:  var(--accent);            /* primary logo color */
  font-size: 1.6rem;
}
        .fs-overlay{
          position:absolute;
          inset:0;
          background:var(--overlay);
          opacity:0.12;
          pointer-events:none;
          z-index:0;
        }

        .fs-container{
          position:relative;
          z-index:1;
          max-width:var(--max-width);
          margin:0 auto;
          display:grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
          gap:var(--gap);
          align-items:start;
        }

        .fs-box{ min-width:0; }

        .fs-brand .fs-logo{
          margin:0 0 8px;
          font-size:20px;
          letter-spacing:0.4px;
          font-weight:700;
        }

        .fs-desc{ margin:0 0 14px; color:var(--muted); font-size:14px; }

        .fs-contact-compact{
          margin-top:8px;
          display:flex;
          flex-direction:column;
          gap:8px;
        }

        .fs-contact-line{
          display:flex;
          align-items:center;
          gap:10px;
          color:var(--muted);
          font-size:14px;
        }

        .fs-contact-line a{
          color:var(--text);
          text-decoration:none;
        }

        .fs-contact-line a:hover{
          color:var(--accent);
        }

        .fs-box h3{
          margin:0 0 12px;
          color:var(--accent);
          font-size:16px;
          font-weight:600;
        }

        .fs-box nav a,
        .fs-box a{
          display:block;
          color:var(--text);
          text-decoration:none;
          margin:8px 0;
          transition:color 160ms ease, transform 160ms ease;
          font-size:14px;
        }

        .fs-box nav a:hover,
        .fs-box a:hover,
        .fs-box nav a:focus{
          color:var(--accent);
          transform:translateX(6px);
          outline:none;
        }

        /* ✅ FIXED: spacing between social buttons */
        .fs-social{
          display:flex;
          gap:16px;
          margin-top:14px;
        }

        .fs-social-link{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          width:36px;
          height:36px;
          border-radius:8px;
          background:rgba(255,255,255,0.02);
          color:var(--text);
          text-decoration:none;
          transition:transform 160ms ease, background 160ms ease;
        }

        .fs-social-link svg{
          width:18px;
          height:18px;
          display:block;
        }

        .fs-social-link:hover{
          transform:translateY(-3px);
          background:rgba(255,180,0,0.12);
          color:var(--accent);
        }

        .fs-subscribe .fs-subtext{
          color:var(--muted);
          margin-bottom:8px;
          font-size:14px;
        }

        .fs-form{
          display:flex;
          gap:8px;
          align-items:center;
          margin-top:8px;
        }

        .fs-form input[type="email"]{
          flex:1;
          padding:10px 12px;
          border-radius:8px;
          border:1px solid rgba(255,255,255,0.06);
          background:rgba(255,255,255,0.02);
          color:var(--text);
          font-size:14px;
        }

        .fs-form button{
          background:var(--accent);
          color:#071018;
          border:none;
          padding:10px 14px;
          border-radius:8px;
          cursor:pointer;
          font-weight:700;
          transition:transform 120ms ease, box-shadow 120ms ease;
        }

        .fs-form button:disabled{
          opacity:0.8;
          cursor:wait;
          transform:none;
        }

        .fs-form button:hover:not(:disabled){
          transform:translateY(-2px);
          box-shadow:0 6px 18px rgba(255,180,0,0.08);
        }

        .fs-help{
          color:var(--muted);
          font-size:13px;
          margin-top:8px;
        }

        .fs-status{
          margin-top:8px;
          font-size:14px;
          min-height:20px;
          color:var(--muted);
        }

        .fs-status.success{
          color:#8fe08f;
        }

        .fs-status.error{
          color:#ffb4b4;
        }

        .fs-bottom{
          position:relative;
          z-index:1;
          max-width:var(--max-width);
          margin:22px auto 0;
          padding-top:18px;
          border-top:1px solid rgba(255,255,255,0.04);
          display:flex;
          justify-content:space-between;
          gap:12px;
          align-items:center;
          color:var(--muted);
          font-size:13px;
        }

        .fs-legal-links{
          display:flex;
          gap:12px;
        }

        .fs-legal-links a{
          color:var(--muted);
          text-decoration:none;
        }

        .fs-legal-links a:hover{
          color:var(--text);
        }

        @media (max-width:980px){
          .fs-container{
            grid-template-columns:repeat(2, 1fr);
          }
        }

        @media (max-width:560px){
          .fs-container{
            grid-template-columns:1fr;
          }

          .fs-form{
            flex-direction:column;
            align-items:stretch;
          }

          .fs-form button{
            width:100%;
          }

          .fs-bottom{
            flex-direction:column;
            align-items:flex-start;
            gap:8px;
          }
        }

        a:focus, button:focus, input:focus{
          outline:3px solid rgba(255,180,0,0.18);
          outline-offset:2px;
          border-radius:8px;
        }

        .visually-hidden{
          position:absolute !important;
          height:1px;
          width:1px;
          overflow:hidden;
          clip:rect(1px,1px,1px,1px);
          white-space:nowrap;
          border:0;
          padding:0;
          margin:-1px;
        }
      `}</style>

      <div className="fs-overlay" aria-hidden="true"></div>

      <div className="fs-container">
        {/* BRAND */}
        <div className="fs-box fs-brand">
          <h2 className="fs-logo">RAM Solutions</h2>
          <p className="fs-desc">
            We build scalable software products like ERP systems, CMS platforms, and digital solutions that help businesses grow faster.
          </p>

          <div className="fs-contact-compact" aria-label="Contact information">
            <div className="fs-contact-line">
              <Mail size={16} aria-hidden="true" />
              <a href="mailto:support@ramsolutions.in">support@ramsolutions.in</a>
            </div>
            <div className="fs-contact-line">
              <Phone size={16} aria-hidden="true" />
              <a href="tel:+918484905526">+91 84849 05526</a>
            </div>
            <div className="fs-contact-line">
              <MapPin size={16} aria-hidden="true" />
              <span>Pune, India</span>
            </div>
          </div>

          

  <div className="fs-social" aria-label="Follow RAM Solutions on social media">
  <a
    className="fs-social-link"
    href="https://www.facebook.com/people/Right-Analysis-Matters-Pvt-Ltd/61584691050212/"
    aria-label="Facebook"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2V12h2.2V9.7c0-2.2 1.3-3.4 3.3-3.4.95 0 1.95.17 1.95.17v2.1h-1.07c-1.06 0-1.39.66-1.39 1.34V12h2.36l-.38 2.9h-1.98v7A10 10 0 0022 12z"/>
    </svg>
  </a>

  <a
    className="fs-social-link"
    href="https://www.instagram.com/rightanalysismatters/"
    aria-label="Instagram"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-2.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z"/>
    </svg>
  </a>
</div>
        </div>

        {/* PRODUCTS */}
        <div className="fs-box">
          <h3>Products</h3>
          <nav>
            <a href="/products">School ERP</a>
            <a href="/products">CMS System</a>
            <a href="/products">Aptitude Platform</a>
            <a href="/products">Day Care ERP</a>
          </nav>
        </div>

        {/* COMPANY */}
        <div className="fs-box">
  <h3>Company</h3>
  <nav>
    <a href="/about-us">About</a>
    <a href="/services">Services</a>
    <a href="/products">Projects</a>
    <a href="/contact-us">Contact</a>
  </nav>
</div>


        {/* CONTACT + SUBSCRIBE */}
        <div className="fs-box fs-subscribe">
          <h3>Stay Updated</h3>

          <p className="fs-subtext">
            Get the latest product updates, tips, and offers.
          </p>

          <form className="fs-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="fs-email" className="visually-hidden">
              Email address
            </label>

            <input
              id="fs-email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Subscribing…" : "Subscribe"}
            </button>
          </form>

          <div className="fs-status">
            {status === "success" && "Thanks — you are subscribed."}
            {status === "error" && error}
          </div>
        </div>
      </div>

      <div className="fs-bottom">
        <div>© {new Date().getFullYear()} RAM Solutions. All rights reserved.</div>
        <div className="fs-legal-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}