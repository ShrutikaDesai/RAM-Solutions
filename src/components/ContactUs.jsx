import React, { useState, useEffect } from 'react';

// ── FAQ DATA ────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Q1. What services does RAM (Right Analysis Matter) provide?",
    a: "We offer end-to-end digital solutions including website development, mobile app development, software development, data analytics, and AI-driven insights.",
  },
  {
    q: "Q2. How long does it take to develop a website?",
    a: "A standard business website typically takes 7–14 days, depending on the design and functionality. Complex web apps may take longer.",
  },
  {
    q: "Q3. Do you build Android and iOS apps?",
    a: "Yes. We develop native, hybrid, and cross-platform apps tailored to your business requirements.",
  },
  {
    q: "Q4. Do you offer custom solutions for businesses?",
    a: "Yes. Every solution we build is fully customized based on your goals, workflows, and business challenges.",
  },
  {
    q: "Q5. Is there post-delivery support?",
    a: "Yes. We provide free support for a limited period after delivery and offer extended support packages for long-term assistance.",
  },
  {
    q: "Q6. Can you redesign an existing website or app?",
    a: "Absolutely. We enhance performance, UI/UX, security, SEO, and modernize the look and feel of your digital product.",
  },
  {
    q: "Q7. Do you provide maintenance and support?",
    a: "Yes. We offer monthly and yearly maintenance plans including updates, bug fixes, backups, security checks, and performance improvements.",
  },
  {
    q: "Q8. How do I get a quote for my project?",
    a: "Simply contact us through our form, call us, or email your requirements. Our team will analyze your needs and provide a detailed quote within 24 hours.",
  },
  {
    q: "Q9. What technologies do you work with?",
    a: "We work with React, Node.js, Python, Django, Flutter, SQL, AWS, WordPress, and more. We recommend the best-fit technology stack based on your specific project requirements.",
  },
  {
    q: "Q10. Do you work with clients outside India?",
    a: "Yes. We serve clients worldwide, offering remote collaboration, flexible communication, and global support.",
  },
];

// ── CONTACT CHANNELS ────────────────────────────────────────────────
const CHANNELS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M5 5h18a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="#e8a020" strokeWidth="2" fill="none"/>
        <path d="M3 7l11 8 11-8" stroke="#e8a020" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: "Email Us",
    value: "support@ramsolutions.in",
    sub: "We reply within 24 hours",
    href: "mailto:support@ramsolutions.in",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M6.5 4C6.5 4 4 4 4 6.5c0 10.77 8.73 19.5 19.5 19.5 2.5 0 2.5-2.5 2.5-2.5v-4s0-2-2-2.5l-3.5-1s-1.5-.5-2.5.5l-1.5 1.5S15 19 9 13s-.5-7.5-.5-7.5L9.5 4c1-1 .5-2.5.5-2.5L8.5 1s-2-.5-2 3z" stroke="#e8a020" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Call Us",
    value: "+91 84849 05526",
    sub: "+91 84849 06643",
    href: "tel:+918484905526",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C8.48 3 4 7.25 4 12.5c0 2.83 1.3 5.37 3.36 7.14L6 25l5.56-1.74A10.45 10.45 0 0014 23.5c5.52 0 10-4.25 10-9.5S19.52 3 14 3z" stroke="#e8a020" strokeWidth="2" fill="none"/>
        <path d="M10.5 11.5c0 4 7 4 7 0" stroke="#e8a020" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "Chat with us instantly",
    sub: "Quick response guaranteed",
    href: "https://wa.me/918484905526",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
        <path d="M14 3a9 9 0 100 18A9 9 0 0014 3z" stroke="#e8a020" strokeWidth="2" fill="none"/>
        <path d="M14 8v6l4 2" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Working Hours",
    value: "Mon – Sat: 9AM – 7PM",
    sub: "IST (India Standard Time)",
    href: null,
  },
];

// ── HOOK: track viewport width ───────────────────────────────────────
function useWindowWidth() {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handle = () => setW(window.innerWidth);
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);
  return w;
}

// ════════════════════════════════════════════════════════════════════
const ContactUs = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [hovCard, setHovCard] = useState(null);
  const width = useWindowWidth();

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  const toggle = (i) => setOpenFaq(openFaq === i ? null : i);

  // On mobile/tablet show single column FAQ
  const showTwoColFaq = width >= 860;
  const leftFaqs  = showTwoColFaq ? FAQS.filter((_, i) => i < 5) : FAQS;
  const rightFaqs = showTwoColFaq ? FAQS.filter((_, i) => i >= 5) : [];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f8f9fc",
      fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif",
      overflowX: "hidden",
    }}>

      {/* ── HERO ── */}
      <div style={{
        background: "linear-gradient(135deg, #0d2b6e 0%, #1a3e8c 60%, #1e4fa8 100%)",
        padding: isMobile ? "52px 20px 70px" : "72px 24px 90px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -60, right: -60, width: isMobile ? 160 : 260, height: isMobile ? 160 : 260, borderRadius: "50%", border: "2px solid rgba(232,160,32,0.18)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -20, right: -20, width: isMobile ? 90 : 150, height: isMobile ? 90 : 150, borderRadius: "50%", border: "2px solid rgba(232,160,32,0.12)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -50, left: isMobile ? 20 : 60, width: 200, height: 200, borderRadius: "50%", background: "rgba(232,160,32,0.05)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 18 }}>
            <div style={{ width: isMobile ? 24 : 36, height: 3, background: "#e8a020", borderRadius: 2 }} />
            <span style={{ color: "#e8a020", fontWeight: 700, fontSize: isMobile ? 11 : 13, letterSpacing: "0.12em", textTransform: "uppercase" }}>Get In Touch</span>
            <div style={{ width: isMobile ? 24 : 36, height: 3, background: "#e8a020", borderRadius: 2 }} />
          </div>
          <h1 style={{
            fontSize: isMobile ? "1.8rem" : isTablet ? "2.4rem" : "3rem",
            fontWeight: 800,
            color: "#fff",
            margin: "0 0 18px",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}>
            We'd Love to Hear<br />
            <span style={{ color: "#e8a020" }}>From You</span>
          </h1>
          <p style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: isMobile ? 14 : 16,
            maxWidth: 500,
            lineHeight: 1.75,
            margin: "0 auto",
          }}>
            Reach out through any channel below. Our team is ready to discuss your project, answer your questions, or schedule a free consultation.
          </p>
        </div>
      </div>

      {/* Curved overlap */}
      <div style={{ height: 40, background: "#f8f9fc", marginTop: -40, borderRadius: "40px 40px 0 0", position: "relative", zIndex: 2 }} />

      {/* ── CONTACT CHANNEL CARDS ── */}
      <div style={{ maxWidth: 1060, margin: "-16px auto 0", padding: isMobile ? "0 16px" : "0 24px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr 1fr"
            : isTablet
            ? "repeat(2, 1fr)"
            : "repeat(4, 1fr)",
          gap: isMobile ? 12 : 20,
          alignItems: "stretch",
        }}>
          {CHANNELS.map((ch, i) => {
            const hov = hovCard === i;
            const inner = (
              <div
                onMouseEnter={() => setHovCard(i)}
                onMouseLeave={() => setHovCard(null)}
                style={{
                  background: hov ? "#1a3e8c" : "#fff",
                  borderRadius: isMobile ? 12 : 16,
                  padding: isMobile ? "18px 14px" : "28px 24px",
                  border: `2px solid ${hov ? "#1a3e8c" : "rgba(26,62,140,0.10)"}`,
                  boxShadow: hov ? "0 16px 40px rgba(26,62,140,0.18)" : "0 2px 12px rgba(26,62,140,0.06)",
                  transition: "all 0.25s ease",
                  transform: hov ? "translateY(-5px)" : "none",
                  cursor: ch.href ? "pointer" : "default",
                  display: "flex",
                  flexDirection: "column",
                  gap: isMobile ? 10 : 14,
                  height: "100%",
                  textDecoration: "none",
                  boxSizing: "border-box",
                }}
              >
                <div style={{
                  width: isMobile ? 40 : 52,
                  height: isMobile ? 40 : 52,
                  borderRadius: "50%",
                  background: hov ? "rgba(232,160,32,0.15)" : "rgba(232,160,32,0.10)",
                  border: "1.5px solid rgba(232,160,32,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.25s",
                  flexShrink: 0,
                }}>
                  {ch.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: isMobile ? 9 : 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: hov ? "rgba(232,160,32,0.9)" : "#e8a020", margin: "0 0 4px" }}>{ch.label}</p>
                  <p style={{ fontSize: isMobile ? 12 : 15, fontWeight: 700, color: hov ? "#fff" : "#0d2b6e", margin: "0 0 3px", lineHeight: 1.3, wordBreak: "break-word" }}>{ch.value}</p>
                  <p style={{ fontSize: isMobile ? 11 : 12, color: hov ? "rgba(255,255,255,0.6)" : "#8a94b0", margin: 0, fontWeight: 500 }}>{ch.sub}</p>
                </div>
                {ch.href && !isMobile && (
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                    <span style={{ fontSize: 12, fontWeight: 700, color: hov ? "#e8a020" : "#1a3e8c", letterSpacing: "0.06em", textTransform: "uppercase" }}>Connect</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: hov ? "translateX(3px)" : "none", transition: "transform 0.2s" }}>
                      <path d="M2 7h10M8 4l3 3-3 3" stroke={hov ? "#e8a020" : "#1a3e8c"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            );
            return ch.href
              ? <a key={i} href={ch.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none", height: "100%" }}>{inner}</a>
              : <div key={i} style={{ height: "100%" }}>{inner}</div>;
          })}
        </div>
      </div>

      {/* ── OFFICE ADDRESS + MAP ── */}
      <div style={{ maxWidth: 1060, margin: isMobile ? "52px auto 0" : "94px auto 0", padding: isMobile ? "0 16px" : "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div style={{ width: 28, height: 3, background: "#e8a020", borderRadius: 2 }} />
          <span style={{ color: "#e8a020", fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>Our Location</span>
        </div>
        <h2 style={{
          fontSize: isMobile ? "1.3rem" : isTablet ? "1.6rem" : "1.9rem",
          fontWeight: 800,
          color: "#0d2b6e",
          margin: "0 0 24px",
          letterSpacing: "-0.01em",
        }}>
          Visit Our Office
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 2fr",
          gap: 20,
          alignItems: "stretch",
        }}>
          {/* Address card */}
          <div style={{
            background: "#1a3e8c",
            borderRadius: 18,
            padding: isMobile ? "28px 20px" : "36px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -20, right: -20, width: 120, height: 120, borderRadius: "50%", border: "2px solid rgba(232,160,32,0.2)", pointerEvents: "none" }} />
            <div>
              <p style={{ color: "#e8a020", fontWeight: 700, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 6px" }}>Registered Office</p>
              <h3 style={{ color: "#fff", fontSize: isMobile ? "0.95rem" : "1.1rem", fontWeight: 800, margin: "0 0 16px" }}>Right Analysis Matter Technology Pvt. Ltd.</h3>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 14, lineHeight: 1.8, margin: 0 }}>
                Golden Arch, B1 Flat No. 4, 1st Floor, Shivangya,
                Apartment, Lane No. 4C, next to Prabhat Society,
                Bavdhan, Pune, Maharashtra 411021
              </p>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 20 }}>
              <InfoRow label="Phone" value="+91 84849 05526 | +91 84849 06643" />
              <InfoRow label="Email" value="support@ramsolutions.in" />
              <InfoRow label="Hours" value="Mon–Sat · 9AM–7PM IST" />
            </div>
            {/* Social links */}
            <div style={{ display: "flex", gap: 14, marginTop: 4 }}>
              <a
                href="https://www.facebook.com/people/Right-Analysis-Matters-Pvt-Ltd/61584691050212/"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 42, height: 42, borderRadius: "50%",
                  border: "1px solid rgba(232,160,32,0.35)",
                  background: "rgba(232,160,32,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#e8a020">
                  <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07C2 17.1 5.66 21.27 10.44 22v-7.03H7.9v-2.9h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.48h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.9h-2.34V22C18.34 21.27 22 17.1 22 12.07z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/rightanalysismatters/"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 42, height: 42, borderRadius: "50%",
                  border: "1px solid rgba(232,160,32,0.35)",
                  background: "rgba(232,160,32,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  textDecoration: "none",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div style={{
            borderRadius: 18,
            overflow: "hidden",
            border: "2px solid rgba(26,62,140,0.12)",
            boxShadow: "0 4px 24px rgba(26,62,140,0.09)",
            minHeight: isMobile ? 260 : 380,
          }}>
            <iframe
              title="RAM Solutions Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7566.5991357932335!2d73.779194!3d18.51536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfe4646d6b4b%3A0x219b303b5a942de2!2sGolden%20Arch!5e0!3m2!1sen!2sin!4v1778828164249!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: isMobile ? 260 : 380 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* ── FAQ SECTION ── */}
      <div style={{ maxWidth: 1060, margin: isMobile ? "52px auto 0" : "72px auto 0", padding: isMobile ? "0 16px 60px" : "0 24px 80px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 52 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 28, height: 3, background: "#e8a020", borderRadius: 2 }} />
            <span style={{ color: "#e8a020", fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>F.A.Q.</span>
            <div style={{ width: 28, height: 3, background: "#e8a020", borderRadius: 2 }} />
          </div>
          <h2 style={{
            fontSize: isMobile ? "1.4rem" : isTablet ? "1.8rem" : "2.2rem",
            fontWeight: 800,
            color: "#0d2b6e",
            margin: "0 0 12px",
            letterSpacing: "-0.01em",
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: "#8a94b0", fontSize: isMobile ? 13 : 15, maxWidth: 480, margin: "0 auto", lineHeight: 1.7 }}>
            Can't find what you're looking for? Reach us on WhatsApp or email — we're happy to help.
          </p>
        </div>

        {/* FAQ columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: showTwoColFaq ? "1fr 1fr" : "1fr",
          gap: showTwoColFaq ? "0 40px" : 0,
        }}>
          <div>{leftFaqs.map((faq, i) => <FaqItem key={i} faq={faq} index={i} openFaq={openFaq} toggle={toggle} />)}</div>
          {showTwoColFaq && (
            <div>{rightFaqs.map((faq, i) => <FaqItem key={i + 5} faq={faq} index={i + 5} openFaq={openFaq} toggle={toggle} />)}</div>
          )}
        </div>
      </div>

      {/* ── BOTTOM CTA STRIP ── */}
      <div style={{
        background: "linear-gradient(135deg, #0d2b6e 0%, #1a3e8c 100%)",
        margin: isMobile ? "0 16px 48px" : "0 24px 60px",
        borderRadius: isMobile ? 16 : 20,
        padding: isMobile ? "36px 24px" : "48px 40px",
        maxWidth: 1012,
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "space-between",
        flexDirection: isMobile ? "column" : "row",
        flexWrap: "wrap",
        gap: isMobile ? 20 : 24,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -30, right: 60, width: 160, height: 160, borderRadius: "50%", border: "2px solid rgba(232,160,32,0.15)", pointerEvents: "none" }} />
        <div>
          <p style={{ color: "#e8a020", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 8px" }}>Still have questions?</p>
          <h3 style={{ color: "#fff", fontSize: isMobile ? "1.2rem" : "1.5rem", fontWeight: 800, margin: "0 0 6px" }}>Let's talk about your project</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, margin: 0 }}>Call, WhatsApp, or email — we respond fast.</p>
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", width: isMobile ? "100%" : "auto" }}>
          <a
            href="tel:+918484905526"
            style={{
              display: "inline-block",
              background: "#e8a020",
              color: "#fff",
              fontWeight: 700,
              fontSize: isMobile ? 12 : 13,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: isMobile ? "12px 20px" : "13px 28px",
              borderRadius: 8,
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 20px rgba(232,160,32,0.4)",
              flex: isMobile ? "1" : "none",
              textAlign: "center",
            }}
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/918484905526"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              fontWeight: 700,
              fontSize: isMobile ? 12 : 13,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: isMobile ? "12px 20px" : "13px 28px",
              borderRadius: 8,
              textDecoration: "none",
              whiteSpace: "nowrap",
              border: "1px solid rgba(255,255,255,0.2)",
              flex: isMobile ? "1" : "none",
              textAlign: "center",
            }}
          >
            💬 WhatsApp
          </a>
        </div>
      </div>

    </div>
  );
};

// ── FAQ Accordion Item ───────────────────────────────────────────────
const FaqItem = ({ faq, index, openFaq, toggle }) => {
  const isOpen = openFaq === index;
  return (
    <div style={{ borderBottom: "1px solid rgba(26,62,140,0.10)" }}>
      <button
        onClick={() => toggle(index)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "18px 0",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 700, color: isOpen ? "#1a3e8c" : "#1a2340", lineHeight: 1.45, flex: 1 }}>
          {faq.q}
        </span>
        <span style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          border: `2px solid ${isOpen ? "#1a3e8c" : "rgba(26,62,140,0.25)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          background: isOpen ? "#1a3e8c" : "transparent",
          transition: "all 0.2s",
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            {isOpen
              ? <path d="M2 6h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
              : <>
                  <path d="M6 2v8" stroke="#1a3e8c" strokeWidth="2" strokeLinecap="round" />
                  <path d="M2 6h8" stroke="#1a3e8c" strokeWidth="2" strokeLinecap="round" />
                </>
            }
          </svg>
        </span>
      </button>
      {isOpen && (
        <div style={{ paddingBottom: 18 }}>
          <p style={{ fontSize: 14, color: "#4a5275", lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
        </div>
      )}
    </div>
  );
};

// ── Address info row ─────────────────────────────────────────────────
const InfoRow = ({ label, value }) => (
  <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
    <span style={{ fontSize: 11, fontWeight: 700, color: "#e8a020", textTransform: "uppercase", letterSpacing: "0.08em", minWidth: 44, paddingTop: 2 }}>{label}</span>
    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", fontWeight: 500, lineHeight: 1.5, wordBreak: "break-word" }}>{value}</span>
  </div>
);

export default ContactUs;