import React, { useState, useEffect, useRef } from "react";
import theme from "../theme/theme";

const { colors, typography: t, spacing, radius, shadows, transitions, gradients, layout, iconSize, animation } = theme;

// ── HOOKS ────────────────────────────────────────────────────────────
function useWindowWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const handle = () => setW(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return w;
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── DATA ─────────────────────────────────────────────────────────────
const STATS = [
  { num: "50+",  label: "Projects Delivered" },
  { num: "98%",  label: "Client Satisfaction" },
  { num: "3+",   label: "Years of Experience" },
  { num: "24/7", label: "Support Available" },
];

const MISSION_VISION = [
  {
    label: "Our Company Mission",
    color: gradients.primaryLg,
    icon: "🚀",
    points: [
      "At RAM, our mission is to help businesses unlock their true potential through technology and data.",
      "We aim to deliver high-quality solutions that are efficient, secure, and aligned with each client's unique objectives.",
      "Every project we take on is guided by transparency, innovation, and consistent communication.",
    ],
  },
  {
    label: "Our Vision",
    color: gradients.accent,
    icon: "🌐",
    points: [
      "Our vision is to become a trusted global partner for digital transformation.",
      "We aim to empower organizations with the right tools, the right analysis, and the right technology — enabling smarter decision-making, seamless user experiences, and sustainable growth.",
      "We believe that when the analysis is right, the results always follow.",
    ],
  },
];

const TESTIMONIALS = [
  { text: "RAM helped us streamline our operations with a modern, high-performance website and smart analytics dashboards. Their strong understanding of both business and technology made the entire transformation smooth and impactful.", name: "Priya Patil",  role: "Founder",         avatar: "PP" },
  { text: "RAM built our mobile app with precision and clarity, delivering a solution that matched our goals exactly. Their communication, technical expertise, and problem-solving skills consistently stood out throughout the project.", name: "Ravi Kulkarni", role: "Director",         avatar: "RK" },
  { text: "The RAM team delivered exactly what we needed — a well-designed website integrated with automation that significantly reduced our manual workload. Their support after launch has been exceptional and truly reliable.",        name: "Arjun Mehta",  role: "Operations Head", avatar: "AM" },
];

const VALUES = [
  { icon: "💡", title: "Innovation",    desc: "We stay ahead of the curve by embracing modern tech and creative problem-solving." },
  { icon: "🤝", title: "Transparency",  desc: "Clear communication and honest collaboration at every step of your project." },
  { icon: "⚡", title: "Speed",         desc: "Fast delivery without compromise — we move with urgency and purpose." },
  { icon: "🔒", title: "Security",      desc: "Every product we ship meets industry-grade security and performance standards." },
];

const WA = "https://wa.me/918484905526";

// ── SECTION HEADER ───────────────────────────────────────────────────
const SectionHeader = ({ label, title, inView, isMobile }) => (
  <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 52, ...animation.fadeIn(inView) }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 10 }}>
      <div style={{ width: 28, height: 3, background: colors.accent, borderRadius: radius.sm }} />
      <span style={{ color: colors.accent, fontWeight: t.weight.bold, fontSize: t.size.xs, letterSpacing: "0.14em", textTransform: "uppercase" }}>{label}</span>
      <div style={{ width: 28, height: 3, background: colors.accent, borderRadius: radius.sm }} />
    </div>
    <h2 style={{ fontSize: isMobile ? "1.5rem" : "2.1rem", fontWeight: t.weight.extrabold, color: colors.textHeading, margin: 0, letterSpacing: "-0.015em" }}>{title}</h2>
  </div>
);

// ── MISSION CARD ─────────────────────────────────────────────────────
const MissionCard = ({ item, idx, inView, isMobile }) => (
  <div style={{ background: item.color, borderRadius: radius.xl + 2, padding: isMobile ? "32px 24px" : "44px 40px", position: "relative", overflow: "hidden", ...animation.fadeIn(inView, idx * 0.15) }}>
    <div style={{ position: "absolute", bottom: -20, right: -10, fontSize: 120, opacity: 0.08, userSelect: "none" }}>{item.icon}</div>
    <h3 style={{ color: colors.white, fontWeight: t.weight.extrabold, fontSize: isMobile ? "1.15rem" : "1.35rem", margin: `0 0 20px`, lineHeight: t.lineHeight.normal }}>{item.label}</h3>
    {item.points.map((pt, i) => (
      <p key={i} style={{ color: colors.textOnDark85, fontSize: t.size.md, lineHeight: t.lineHeight.body, margin: i < item.points.length - 1 ? `0 0 ${spacing.md}px` : 0 }}>{pt}</p>
    ))}
  </div>
);

// ── VALUE CARD ───────────────────────────────────────────────────────
const ValueCard = ({ v, idx, inView, isMobile }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background:    hov ? colors.primary : colors.bgCard,
        borderRadius:  radius.lg,
        padding:       isMobile ? "22px 18px" : "30px 24px",
        border:        `2px solid ${hov ? "transparent" : colors.borderDefault}`,
        boxShadow:     hov ? shadows.cardSmHover : shadows.cardSm,
        transform:     hov ? "translateY(-6px)" : inView ? "translateY(0)" : "translateY(30px)",
        opacity:       inView ? 1 : 0,
        transition:    `all ${transitions.slow} ${idx * 0.08}s`,
        cursor:        "default",
        textAlign:     "center",
      }}
    >
      <div style={{ fontSize: 32, marginBottom: spacing.md }}>{v.icon}</div>
      <h4 style={{ fontSize: t.size.lg, fontWeight: t.weight.extrabold, color: hov ? colors.white : colors.textHeading, margin: `0 0 10px` }}>{v.title}</h4>
      <p style={{ fontSize: t.size.base, color: hov ? colors.textOnDark72 : colors.textSub, lineHeight: t.lineHeight.body, margin: 0 }}>{v.desc}</p>
    </div>
  );
};

// ── MAIN ─────────────────────────────────────────────────────────────
const AboutUs = () => {
  const width    = useWindowWidth();
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  const [heroRef,  heroIn]  = useInView(0.1);
  const [aboutRef, aboutIn] = useInView(0.1);
  const [mvRef,    mvIn]    = useInView(0.1);
  const [valRef,   valIn]   = useInView(0.1);
  const [testRef,  testIn]  = useInView(0.1);
  const [activeTest, setActiveTest] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActiveTest(p => (p + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(id);
  }, []);

  const secPad = isMobile
    ? `${layout.sectionPadYMob}px ${layout.sectionPadXMob}px`
    : `${layout.sectionPadY}px ${layout.sectionPadX}px`;

  return (
    <div style={{ minHeight: "100vh", background: colors.bgPage, fontFamily: t.fontFamily, overflowX: "hidden" }}>
      <style>{`
        @keyframes pulse        { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.7;transform:scale(1.15)} }
        @keyframes spinRing     { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes glowPulse    { 0%,100%{box-shadow:0 0 0 0 rgba(232,160,32,0.4)} 50%{box-shadow:0 0 0 16px rgba(232,160,32,0)} }
        @keyframes marqueeScroll{ from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes orb1         { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(40px,-30px) scale(1.1)} }
        @keyframes orb2         { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-30px,20px) scale(0.9)} }
      `}</style>

      {/* ── HERO ── */}
      <div ref={heroRef} style={{
        position: "relative",
        minHeight: isMobile ? "auto" : "100vh",
        background: gradients.hero,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: isMobile ? "90px 20px 60px" : isTablet ? "120px 30px 100px" : "12px 40px 140px",
      }}>
        {/* Orbs */}
        <div style={{ position: "absolute", top: "10%", left: "-8%", width: isMobile ? 220 : 420, height: isMobile ? 220 : 420, borderRadius: radius.full, background: colors.primaryTint22, filter: "blur(80px)", animation: "orb1 9s ease-in-out infinite", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", right: "-8%", width: isMobile ? 180 : 380, height: isMobile ? 180 : 380, borderRadius: radius.full, background: colors.accentTint12, filter: "blur(90px)", animation: "orb2 12s ease-in-out infinite", pointerEvents: "none" }} />
        {/* Dot grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle, ${colors.whiteTint4} 1px, transparent 1px)`, backgroundSize: "32px 32px", pointerEvents: "none" }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 900, width: "100%" }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28, background: colors.accentTint10, border: `1px solid ${colors.accentTint25}`, borderRadius: 40, padding: "8px 20px" }}>
            <div style={{ width: 6, height: 6, borderRadius: radius.full, background: colors.accent, animation: "pulse 2s ease infinite" }} />
            <span style={{ color: colors.accent, fontSize: t.size.xs, fontWeight: t.weight.extrabold, letterSpacing: "0.22em", textTransform: "uppercase" }}>About Us</span>
          </div>

          {/* Headline */}
          <h1 style={{ margin: `0 0 24px`, lineHeight: 1.05 }}>
            <span style={{ display: "block", fontSize: isMobile ? "2.6rem" : isTablet ? "4rem" : "5.5rem", fontWeight: 900, color: colors.white, letterSpacing: "-0.04em" }}>Digital</span>
            <span style={{ display: "block", fontSize: isMobile ? "2.6rem" : isTablet ? "4rem" : "5.5rem", fontWeight: 200, color: colors.accent, letterSpacing: "-0.04em" }}>Solutions</span>
            <span style={{ display: "block", marginTop: 10, fontSize: isMobile ? "1.1rem" : isTablet ? "1.6rem" : "2.4rem", fontWeight: 300, color: colors.textOnDark55, fontStyle: "italic", lineHeight: 1.4 }}>That Drive Real Results.</span>
          </h1>

          {/* Description */}
          <p style={{ color: colors.textOnDark60, fontSize: isMobile ? t.size.md : 17, lineHeight: 1.9, maxWidth: 650, margin: `0 auto 40px` }}>
            At RAM (Right Analysis Matters), we combine technology and data to build solutions that create impact, efficiency, and long-term success for businesses of every scale.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: spacing.md, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={WA} target="_blank" rel="noreferrer" style={{ background: colors.accent, color: colors.white, padding: isMobile ? "14px 24px" : "15px 36px", borderRadius: radius.md + 2, textDecoration: "none", fontWeight: t.weight.extrabold, fontSize: t.size.base, letterSpacing: "0.08em", textTransform: "uppercase", boxShadow: shadows.primaryLg }}>
              Get Free Consultation
            </a>
            <a href="#mission" style={{ background: colors.whiteTint7, color: colors.textOnDark85, padding: isMobile ? "14px 24px" : "15px 32px", borderRadius: radius.md + 2, textDecoration: "none", fontWeight: t.weight.semibold, fontSize: t.size.base, letterSpacing: "0.08em", textTransform: "uppercase", border: `1px solid ${colors.borderLight}` }}>
              Our Story ↓
            </a>
          </div>
        </div>

        {/* Stats */}
        <div style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? 12 : 18, width: "100%", maxWidth: 950, marginTop: isMobile ? 50 : 80 }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ background: colors.whiteTint5, backdropFilter: "blur(12px)", border: `1px solid ${colors.borderLighter}`, borderRadius: radius.lg, padding: isMobile ? "20px 12px" : "24px", textAlign: "center" }}>
              <div style={{ fontSize: isMobile ? "1.6rem" : "2.3rem", fontWeight: 900, color: colors.accent, lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: t.size.xs, fontWeight: t.weight.bold, color: colors.textOnDark55, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: spacing.sm, lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: `linear-gradient(to top, ${colors.bgPage}, transparent)`, pointerEvents: "none" }} />
      </div>

      {/* ── MARQUEE STRIP ── */}
      <div style={{ background: colors.primaryDark, padding: "14px 0", overflow: "hidden", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", animation: "marqueeScroll 18s linear infinite", width: "max-content" }}>
          {[...Array(2)].map((_, rep) => (
            <div key={rep} style={{ display: "flex", alignItems: "center" }}>
              {["Web Development","Mobile Apps","Data Analytics","UI/UX Design","Cloud & DevOps","IT Consulting","Performance Optimization","Security Solutions"].map((item, i) => (
                <React.Fragment key={i}>
                  <span style={{ color: colors.textOnDark85, fontSize: t.size.sm, fontWeight: t.weight.bold, letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap", padding: "0 20px" }}>{item}</span>
                  <span style={{ color: colors.accent, fontSize: 16, lineHeight: 1 }}>◆</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT SECTION ── */}
      <div style={{ background: colors.bgPage }}>
        <div ref={aboutRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
          <SectionHeader label="About Us" title="Who We Are" inView={aboutIn} isMobile={isMobile} />
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 56, alignItems: "center" }}>
            {/* Left text */}
            <div style={{ ...animation.fadeIn(aboutIn, 0, "left") }}>
              <p style={{ color: colors.accent, fontWeight: t.weight.bold, fontSize: t.size.xs, letterSpacing: "0.14em", textTransform: "uppercase", margin: `0 0 ${spacing.md}px` }}>Our Features</p>
              <h2 style={{ fontSize: isMobile ? "1.5rem" : "2rem", fontWeight: 900, color: colors.textHeading, margin: `0 0 ${spacing.lg}px`, lineHeight: t.lineHeight.normal, letterSpacing: "-0.02em" }}>
                Smart, Scalable &amp; Future-Ready Digital Solutions
              </h2>
              <p style={{ color: colors.textBodyAlt, fontSize: t.size.lg, lineHeight: t.lineHeight.body, margin: `0 0 16px` }}>
                We deliver solutions that adapt to your business — not the other way around. Our development approach ensures flexibility, performance, and complete control so your website, app, or analytics system grows with you.
              </p>
              <p style={{ color: colors.textBodyAlt, fontSize: t.size.lg, lineHeight: t.lineHeight.body, margin: `0 0 28px` }}>
                Whether you're looking for a simple business website or a complex software platform, our team designs and develops with precision and purpose.
              </p>
              <a href={WA} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: spacing.sm, background: gradients.primary, color: colors.white, padding: "13px 26px", borderRadius: radius.md + 2, textDecoration: "none", fontWeight: t.weight.bold, fontSize: t.size.base, letterSpacing: "0.07em", textTransform: "uppercase", boxShadow: shadows.primary }}>
                Know More
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 4l3 3-3 3" stroke={colors.white} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>

            {/* Right visual */}
            <div style={{ ...animation.fadeIn(aboutIn, 0.2, "right") }}>
              <div style={{ background: gradients.primary, borderRadius: radius.xl + 4, padding: isMobile ? "28px 22px" : "40px 36px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, borderRadius: radius.full, border: `2px solid ${colors.accentTint15}` }} />
                <div style={{ position: "absolute", bottom: -50, left: -30, width: 200, height: 200, borderRadius: radius.full, background: colors.accentTint5 }} />
                <p style={{ color: colors.accent, fontWeight: t.weight.bold, fontSize: t.size.xs, letterSpacing: "0.12em", textTransform: "uppercase", margin: `0 0 ${spacing.md}px`, position: "relative" }}>Our Capabilities</p>
                <p style={{ color: colors.textOnDarkSub, fontSize: t.size.md, lineHeight: t.lineHeight.body, margin: `0 0 ${spacing.xl}px`, position: "relative" }}>
                  With expertise across multiple technologies, we build tailor-made digital experiences that fit your needs. From clean UI/UX design and secure development to data insights and automation, we provide end-to-end support.
                </p>
                <p style={{ color: colors.textOnDarkSub, fontSize: t.size.md, lineHeight: t.lineHeight.body, margin: `0 0 28px`, position: "relative" }}>
                  Our goal is to provide solutions that are reliable, user-friendly, and built to deliver measurable value.
                </p>
                {["End-to-end product development", "Data-driven decision making", "Always-on client support"].map((pt, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, position: "relative" }}>
                    <div style={{ width: 20, height: 20, borderRadius: radius.full, background: colors.accentTint20, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5l2.5 2.5L8 3" stroke={colors.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
                    </div>
                    <span style={{ color: colors.textOnDark85, fontSize: t.size.base, fontWeight: t.weight.medium }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MISSION & VISION ── */}
      <div id="mission" style={{ background: colors.bgCard }}>
        <div ref={mvRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
          <SectionHeader label="Our Purpose" title="Mission & Vision" inView={mvIn} isMobile={isMobile} />
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? spacing.lg : 28 }}>
            {MISSION_VISION.map((item, i) => (
              <MissionCard key={i} item={item} idx={i} inView={mvIn} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CORE VALUES ── */}
      <div style={{ background: colors.bgPage }}>
        <div ref={valRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
          <SectionHeader label="What Drives Us" title="Our Core Values" inView={valIn} isMobile={isMobile} />
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr" : "repeat(4,1fr)", gap: isMobile ? spacing.md : 22 }}>
            {VALUES.map((v, i) => (
              <ValueCard key={i} v={v} idx={i} inView={valIn} isMobile={isMobile} />
            ))}
          </div>
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <div style={{ background: colors.bgCard }}>
        <div ref={testRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
          <SectionHeader label="Client Testimonials" title="What Our Clients Say" inView={testIn} isMobile={isMobile} />
          <div style={{ position: "relative", overflow: "hidden", ...animation.fadeIn(testIn) }}>
            <div style={{ background: gradients.card, borderRadius: radius.xl + 4, padding: isMobile ? "36px 24px" : "60px 72px", textAlign: "center", minHeight: isMobile ? 280 : 260, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 20, left: isMobile ? 20 : 48, fontSize: 80, color: colors.primaryTint7, fontWeight: 900, lineHeight: 1, userSelect: "none", fontFamily: "Georgia,serif" }}>"</div>
              <div style={{ position: "absolute", bottom: 10, right: isMobile ? 20 : 48, fontSize: 80, color: colors.accentTint10, fontWeight: 900, lineHeight: 1, userSelect: "none", fontFamily: "Georgia,serif" }}>"</div>
              <p style={{ fontSize: isMobile ? t.size.lg : 19, fontWeight: t.weight.bold, color: colors.primary, lineHeight: t.lineHeight.body, maxWidth: 760, margin: `0 0 28px`, fontStyle: "italic", position: "relative", zIndex: 1 }}>
                "{TESTIMONIALS[activeTest].text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center" }}>
                <div style={{ width: iconSize.avatar - 2, height: iconSize.avatar - 2, borderRadius: radius.full, background: gradients.avatar, display: "flex", alignItems: "center", justifyContent: "center", color: colors.accent, fontWeight: t.weight.extrabold, fontSize: t.size.base }}>
                  {TESTIMONIALS[activeTest].avatar}
                </div>
                <div style={{ textAlign: "left" }}>
                  <p style={{ margin: 0, fontWeight: t.weight.extrabold, fontSize: t.size.md, color: colors.textHeading }}>{TESTIMONIALS[activeTest].name}</p>
                  <p style={{ margin: 0, fontSize: t.size.sm, color: colors.textMuted }}>{TESTIMONIALS[activeTest].role}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: spacing.sm, justifyContent: "center", marginTop: spacing.xl }}>
                {TESTIMONIALS.map((_, i) => (
                  <button key={i} onClick={() => setActiveTest(i)} style={{ width: i === activeTest ? 24 : 8, height: 8, borderRadius: radius.sm / 2, background: i === activeTest ? colors.accent : colors.borderDefault, border: "none", cursor: "pointer", transition: `all ${transitions.slow}`, padding: 0 }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA STRIP ── */}
      <div style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: isMobile ? `0 ${layout.sectionPadXMob}px 52px` : `0 ${layout.sectionPadX}px 64px` }}>
        <div style={{ background: gradients.cta, borderRadius: isMobile ? radius.lg : radius.xl + 2, padding: isMobile ? "40px 24px" : "56px 48px", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: isMobile ? spacing.xl : 32, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: 80, width: 200, height: 200, borderRadius: radius.full, border: `2px solid ${colors.accentTint12}`, pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -60, right: -40, width: 260, height: 260, borderRadius: radius.full, background: colors.accentTint4, pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <p style={{ color: colors.accent, fontWeight: t.weight.bold, fontSize: t.size.sm, letterSpacing: "0.1em", textTransform: "uppercase", margin: `0 0 10px` }}>Ready to get started?</p>
            <h3 style={{ color: colors.white, fontSize: isMobile ? "1.3rem" : "1.8rem", fontWeight: t.weight.extrabold, margin: `0 0 ${spacing.sm}px`, lineHeight: t.lineHeight.normal }}>Let's build something great together</h3>
            <p style={{ color: colors.textOnDark60, fontSize: t.size.md, margin: 0 }}>Talk to our team — free consultation, no commitment.</p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", width: isMobile ? "100%" : "auto" }}>
            <a href="tel:+918484905526" style={{ display: "inline-block", background: colors.accent, color: colors.white, fontWeight: t.weight.bold, fontSize: t.size.base, letterSpacing: "0.06em", textTransform: "uppercase", padding: "14px 28px", borderRadius: radius.md, textDecoration: "none", boxShadow: shadows.ctaLg, flex: isMobile ? "1" : "none", textAlign: "center" }}>📞 Call Now</a>
            <a href={WA} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: colors.whiteTint10, color: colors.white, fontWeight: t.weight.bold, fontSize: t.size.base, letterSpacing: "0.06em", textTransform: "uppercase", padding: "14px 28px", borderRadius: radius.md, textDecoration: "none", border: `1px solid ${colors.borderLight}`, flex: isMobile ? "1" : "none", textAlign: "center" }}>💬 WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

// import React, { useState, useEffect, useRef } from "react";
// import theme from "../theme/theme";

// const { colors, typography: t, spacing, radius, shadows, transitions, gradients, layout, iconSize, animation } = theme;

// // ── HOOKS ────────────────────────────────────────────────────────────
// function useWindowWidth() {
//   const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
//   useEffect(() => {
//     const handle = () => setW(window.innerWidth);
//     window.addEventListener("resize", handle);
//     return () => window.removeEventListener("resize", handle);
//   }, []);
//   return w;
// }

// function useInView(threshold = 0.15) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// // ── DATA ─────────────────────────────────────────────────────────────
// const STATS = [
//   { num: "50+",  label: "Projects Delivered" },
//   { num: "98%",  label: "Client Satisfaction" },
//   { num: "3+",   label: "Years of Experience" },
//   { num: "24/7", label: "Support Available" },
// ];

// const MISSION_VISION = [
//   {
//     label: "Our Company Mission",
//     color: gradients.primaryLg,
//     icon: "🚀",
//     points: [
//       "At RAM, our mission is to help businesses unlock their true potential through technology and data.",
//       "We aim to deliver high-quality solutions that are efficient, secure, and aligned with each client's unique objectives.",
//       "Every project we take on is guided by transparency, innovation, and consistent communication.",
//     ],
//   },
//   {
//     label: "Our Vision",
//     color: gradients.accent,
//     icon: "🌐",
//     points: [
//       "Our vision is to become a trusted global partner for digital transformation.",
//       "We aim to empower organizations with the right tools, the right analysis, and the right technology — enabling smarter decision-making, seamless user experiences, and sustainable growth.",
//       "We believe that when the analysis is right, the results always follow.",
//     ],
//   },
// ];

// const TESTIMONIALS = [
//   { text: "RAM helped us streamline our operations with a modern, high-performance website and smart analytics dashboards. Their strong understanding of both business and technology made the entire transformation smooth and impactful.", name: "Priya Patil",  role: "Founder",         avatar: "PP" },
//   { text: "RAM built our mobile app with precision and clarity, delivering a solution that matched our goals exactly. Their communication, technical expertise, and problem-solving skills consistently stood out throughout the project.", name: "Ravi Kulkarni", role: "Director",         avatar: "RK" },
//   { text: "The RAM team delivered exactly what we needed — a well-designed website integrated with automation that significantly reduced our manual workload. Their support after launch has been exceptional and truly reliable.",        name: "Arjun Mehta",  role: "Operations Head", avatar: "AM" },
// ];

// const VALUES = [
//   { icon: "💡", title: "Innovation",    desc: "We stay ahead of the curve by embracing modern tech and creative problem-solving." },
//   { icon: "🤝", title: "Transparency",  desc: "Clear communication and honest collaboration at every step of your project." },
//   { icon: "⚡", title: "Speed",         desc: "Fast delivery without compromise — we move with urgency and purpose." },
//   { icon: "🔒", title: "Security",      desc: "Every product we ship meets industry-grade security and performance standards." },
// ];

// const WA = "https://wa.me/918484905526";

// // ── SECTION HEADER ───────────────────────────────────────────────────
// const SectionHeader = ({ label, title, inView, isMobile }) => (
//   <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 52, ...animation.fadeIn(inView) }}>
//     <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 10 }}>
//       <div style={{ width: 28, height: 3, background: colors.accent, borderRadius: radius.sm }} />
//       <span style={{ color: colors.accent, fontWeight: t.weight.bold, fontSize: t.size.xs, letterSpacing: "0.14em", textTransform: "uppercase" }}>{label}</span>
//       <div style={{ width: 28, height: 3, background: colors.accent, borderRadius: radius.sm }} />
//     </div>
//     <h2 style={{ fontSize: isMobile ? "1.5rem" : "2.1rem", fontWeight: t.weight.extrabold, color: colors.textHeading, margin: 0, letterSpacing: "-0.015em" }}>{title}</h2>
//   </div>
// );

// // ── MISSION CARD ─────────────────────────────────────────────────────
// const MissionCard = ({ item, idx, inView, isMobile }) => (
//   <div style={{ background: item.color, borderRadius: radius.xl + 2, padding: isMobile ? "32px 24px" : "44px 40px", position: "relative", overflow: "hidden", ...animation.fadeIn(inView, idx * 0.15) }}>
//     <div style={{ position: "absolute", bottom: -20, right: -10, fontSize: 120, opacity: 0.08, userSelect: "none" }}>{item.icon}</div>
//     <h3 style={{ color: colors.white, fontWeight: t.weight.extrabold, fontSize: isMobile ? "1.15rem" : "1.35rem", margin: `0 0 20px`, lineHeight: t.lineHeight.normal }}>{item.label}</h3>
//     {item.points.map((pt, i) => (
//       <p key={i} style={{ color: colors.textOnDark85, fontSize: t.size.md, lineHeight: t.lineHeight.body, margin: i < item.points.length - 1 ? `0 0 ${spacing.md}px` : 0 }}>{pt}</p>
//     ))}
//   </div>
// );

// // ── VALUE CARD ───────────────────────────────────────────────────────
// const ValueCard = ({ v, idx, inView, isMobile }) => {
//   const [hov, setHov] = useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         background:    hov ? colors.primary : colors.bgCard,
//         borderRadius:  radius.lg,
//         padding:       isMobile ? "22px 18px" : "30px 24px",
//         border:        `2px solid ${hov ? "transparent" : colors.borderDefault}`,
//         boxShadow:     hov ? shadows.cardSmHover : shadows.cardSm,
//         transform:     hov ? "translateY(-6px)" : inView ? "translateY(0)" : "translateY(30px)",
//         opacity:       inView ? 1 : 0,
//         transition:    `all ${transitions.slow} ${idx * 0.08}s`,
//         cursor:        "default",
//         textAlign:     "center",
//       }}
//     >
//       <div style={{ fontSize: 32, marginBottom: spacing.md }}>{v.icon}</div>
//       <h4 style={{ fontSize: t.size.lg, fontWeight: t.weight.extrabold, color: hov ? colors.white : colors.textHeading, margin: `0 0 10px` }}>{v.title}</h4>
//       <p style={{ fontSize: t.size.base, color: hov ? colors.textOnDark72 : colors.textSub, lineHeight: t.lineHeight.body, margin: 0 }}>{v.desc}</p>
//     </div>
//   );
// };

// // ── MAIN ─────────────────────────────────────────────────────────────
// const AboutUs = () => {
//   const width    = useWindowWidth();
//   const isMobile = width < 640;
//   const isTablet = width >= 640 && width < 1024;

//   const [heroRef,  heroIn]  = useInView(0.1);
//   const [aboutRef, aboutIn] = useInView(0.1);
//   const [mvRef,    mvIn]    = useInView(0.1);
//   const [valRef,   valIn]   = useInView(0.1);
//   const [testRef,  testIn]  = useInView(0.1);
//   const [activeTest, setActiveTest] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setActiveTest(p => (p + 1) % TESTIMONIALS.length), 4500);
//     return () => clearInterval(id);
//   }, []);

//   const secPad = isMobile
//     ? `${layout.sectionPadYMob}px ${layout.sectionPadXMob}px`
//     : `${layout.sectionPadY}px ${layout.sectionPadX}px`;

//   return (
//     <div style={{ minHeight: "100vh", background: colors.bgPage, fontFamily: t.fontFamily, overflowX: "hidden" }}>
//       <style>{`
//         @keyframes pulse        { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.7;transform:scale(1.15)} }
//         @keyframes spinRing     { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
//         @keyframes glowPulse    { 0%,100%{box-shadow:0 0 0 0 rgba(232,160,32,0.4)} 50%{box-shadow:0 0 0 16px rgba(232,160,32,0)} }
//         @keyframes marqueeScroll{ from{transform:translateX(0)} to{transform:translateX(-50%)} }
//         @keyframes orb1         { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(40px,-30px) scale(1.1)} }
//         @keyframes orb2         { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-30px,20px) scale(0.9)} }
//       `}</style>

//       {/* ── HERO ── */}
//       <div ref={heroRef} style={{
//         position: "relative",
//         minHeight: isMobile ? "auto" : "100vh",
//         background: colors.primaryDeep,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         overflow: "hidden",
//         padding: isMobile ? "90px 20px 60px" : isTablet ? "120px 30px 100px" : "120px 40px 140px",
//       }}>
//         {/* Orbs */}
//         <div style={{ position: "absolute", top: "10%", left: "-8%", width: isMobile ? 220 : 420, height: isMobile ? 220 : 420, borderRadius: radius.full, background: gradients.hero, filter: "blur(80px)", animation: "orb1 9s ease-in-out infinite", pointerEvents: "none" }} />
//         <div style={{ position: "absolute", bottom: "5%", right: "-8%", width: isMobile ? 180 : 380, height: isMobile ? 180 : 380, borderRadius: radius.full, background: gradients.hero, filter: "blur(90px)", animation: "orb2 12s ease-in-out infinite", pointerEvents: "none" }} />
//         {/* Dot grid */}
//         <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle, ${colors.whiteTint4} 1px, transparent 1px)`, backgroundSize: "32px 32px", pointerEvents: "none" }} />

//         {/* Content */}
//         <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 900, width: "100%" }}>
//           {/* Badge */}
//           <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28, background: colors.accentTint10, border: `1px solid ${colors.accentTint25}`, borderRadius: 40, padding: "8px 20px" }}>
//             <div style={{ width: 6, height: 6, borderRadius: radius.full, background: colors.accent, animation: "pulse 2s ease infinite" }} />
//             <span style={{ color: colors.accent, fontSize: t.size.xs, fontWeight: t.weight.extrabold, letterSpacing: "0.22em", textTransform: "uppercase" }}>About Us</span>
//           </div>

//           {/* Headline */}
//           <h1 style={{ margin: `0 0 24px`, lineHeight: 1.05 }}>
//             <span style={{ display: "block", fontSize: isMobile ? "2.6rem" : isTablet ? "4rem" : "5.5rem", fontWeight: 900, color: colors.white, letterSpacing: "-0.04em" }}>Digital</span>
//             <span style={{ display: "block", fontSize: isMobile ? "2.6rem" : isTablet ? "4rem" : "5.5rem", fontWeight: 200, color: colors.accent, letterSpacing: "-0.04em" }}>Solutions</span>
//             <span style={{ display: "block", marginTop: 10, fontSize: isMobile ? "1.1rem" : isTablet ? "1.6rem" : "2.4rem", fontWeight: 300, color: colors.textOnDark55, fontStyle: "italic", lineHeight: 1.4 }}>That Drive Real Results.</span>
//           </h1>

//           {/* Description */}
//           <p style={{ color: colors.textOnDark60, fontSize: isMobile ? t.size.md : 17, lineHeight: 1.9, maxWidth: 650, margin: `0 auto 40px` }}>
//             At RAM (Right Analysis Matters), we combine technology and data to build solutions that create impact, efficiency, and long-term success for businesses of every scale.
//           </p>

//           {/* Buttons */}
//           <div style={{ display: "flex", gap: spacing.md, justifyContent: "center", flexWrap: "wrap" }}>
//             <a href={WA} target="_blank" rel="noreferrer" style={{ background: colors.accent, color: colors.white, padding: isMobile ? "14px 24px" : "15px 36px", borderRadius: radius.md + 2, textDecoration: "none", fontWeight: t.weight.extrabold, fontSize: t.size.base, letterSpacing: "0.08em", textTransform: "uppercase", boxShadow: shadows.primaryLg }}>
//               Get Free Consultation
//             </a>
//             <a href="#mission" style={{ background: colors.whiteTint7, color: colors.textOnDark85, padding: isMobile ? "14px 24px" : "15px 32px", borderRadius: radius.md + 2, textDecoration: "none", fontWeight: t.weight.semibold, fontSize: t.size.base, letterSpacing: "0.08em", textTransform: "uppercase", border: `1px solid ${colors.borderLight}` }}>
//               Our Story ↓
//             </a>
//           </div>
//         </div>

//         {/* Stats */}
//         <div style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "repeat(2,1fr)" : "repeat(4,1fr)", gap: isMobile ? 12 : 18, width: "100%", maxWidth: 950, marginTop: isMobile ? 50 : 80 }}>
//           {STATS.map((s, i) => (
//             <div key={i} style={{ background: colors.whiteTint5, backdropFilter: "blur(12px)", border: `1px solid ${colors.borderLighter}`, borderRadius: radius.lg, padding: isMobile ? "20px 12px" : "24px", textAlign: "center" }}>
//               <div style={{ fontSize: isMobile ? "1.6rem" : "2.3rem", fontWeight: 900, color: colors.accent, lineHeight: 1 }}>{s.num}</div>
//               <div style={{ fontSize: t.size.xs, fontWeight: t.weight.bold, color: colors.textOnDark55, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: spacing.sm, lineHeight: 1.5 }}>{s.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom fade */}
//         <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: `linear-gradient(to top, ${colors.bgPage}, transparent)`, pointerEvents: "none" }} />
//       </div>

//       {/* ── MARQUEE STRIP ── */}
//       <div style={{ background: colors.primaryDark, padding: "14px 0", overflow: "hidden", position: "relative", zIndex: 2 }}>
//         <div style={{ display: "flex", animation: "marqueeScroll 18s linear infinite", width: "max-content" }}>
//           {[...Array(2)].map((_, rep) => (
//             <div key={rep} style={{ display: "flex", alignItems: "center" }}>
//               {["Web Development","Mobile Apps","Data Analytics","UI/UX Design","Cloud & DevOps","IT Consulting","Performance Optimization","Security Solutions"].map((item, i) => (
//                 <React.Fragment key={i}>
//                   <span style={{ color: colors.textOnDark85, fontSize: t.size.sm, fontWeight: t.weight.bold, letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap", padding: "0 20px" }}>{item}</span>
//                   <span style={{ color: colors.accent, fontSize: 16, lineHeight: 1 }}>◆</span>
//                 </React.Fragment>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── ABOUT SECTION ── */}
//       <div style={{ background: colors.bgPage }}>
//         <div ref={aboutRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
//           <SectionHeader label="About Us" title="Who We Are" inView={aboutIn} isMobile={isMobile} />
//           <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 56, alignItems: "center" }}>
//             {/* Left text */}
//             <div style={{ ...animation.fadeIn(aboutIn, 0, "left") }}>
//               <p style={{ color: colors.accent, fontWeight: t.weight.bold, fontSize: t.size.xs, letterSpacing: "0.14em", textTransform: "uppercase", margin: `0 0 ${spacing.md}px` }}>Our Features</p>
//               <h2 style={{ fontSize: isMobile ? "1.5rem" : "2rem", fontWeight: 900, color: colors.textHeading, margin: `0 0 ${spacing.lg}px`, lineHeight: t.lineHeight.normal, letterSpacing: "-0.02em" }}>
//                 Smart, Scalable &amp; Future-Ready Digital Solutions
//               </h2>
//               <p style={{ color: colors.textBodyAlt, fontSize: t.size.lg, lineHeight: t.lineHeight.body, margin: `0 0 16px` }}>
//                 We deliver solutions that adapt to your business — not the other way around. Our development approach ensures flexibility, performance, and complete control so your website, app, or analytics system grows with you.
//               </p>
//               <p style={{ color: colors.textBodyAlt, fontSize: t.size.lg, lineHeight: t.lineHeight.body, margin: `0 0 28px` }}>
//                 Whether you're looking for a simple business website or a complex software platform, our team designs and develops with precision and purpose.
//               </p>
//               <a href={WA} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: spacing.sm, background: gradients.primary, color: colors.white, padding: "13px 26px", borderRadius: radius.md + 2, textDecoration: "none", fontWeight: t.weight.bold, fontSize: t.size.base, letterSpacing: "0.07em", textTransform: "uppercase", boxShadow: shadows.primary }}>
//                 Know More
//                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 4l3 3-3 3" stroke={colors.white} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
//               </a>
//             </div>

//             {/* Right visual */}
//             <div style={{ ...animation.fadeIn(aboutIn, 0.2, "right") }}>
//               <div style={{ background: gradients.primary, borderRadius: radius.xl + 4, padding: isMobile ? "28px 22px" : "40px 36px", position: "relative", overflow: "hidden" }}>
//                 <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, borderRadius: radius.full, border: `2px solid ${colors.accentTint15}` }} />
//                 <div style={{ position: "absolute", bottom: -50, left: -30, width: 200, height: 200, borderRadius: radius.full, background: colors.accentTint5 }} />
//                 <p style={{ color: colors.accent, fontWeight: t.weight.bold, fontSize: t.size.xs, letterSpacing: "0.12em", textTransform: "uppercase", margin: `0 0 ${spacing.md}px`, position: "relative" }}>Our Capabilities</p>
//                 <p style={{ color: colors.textOnDarkSub, fontSize: t.size.md, lineHeight: t.lineHeight.body, margin: `0 0 ${spacing.xl}px`, position: "relative" }}>
//                   With expertise across multiple technologies, we build tailor-made digital experiences that fit your needs. From clean UI/UX design and secure development to data insights and automation, we provide end-to-end support.
//                 </p>
//                 <p style={{ color: colors.textOnDarkSub, fontSize: t.size.md, lineHeight: t.lineHeight.body, margin: `0 0 28px`, position: "relative" }}>
//                   Our goal is to provide solutions that are reliable, user-friendly, and built to deliver measurable value.
//                 </p>
//                 {["End-to-end product development", "Data-driven decision making", "Always-on client support"].map((pt, i) => (
//                   <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, position: "relative" }}>
//                     <div style={{ width: 20, height: 20, borderRadius: radius.full, background: colors.accentTint20, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                       <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5l2.5 2.5L8 3" stroke={colors.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" /></svg>
//                     </div>
//                     <span style={{ color: colors.textOnDark85, fontSize: t.size.base, fontWeight: t.weight.medium }}>{pt}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── MISSION & VISION ── */}
//       <div id="mission" style={{ background: colors.bgCard }}>
//         <div ref={mvRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
//           <SectionHeader label="Our Purpose" title="Mission & Vision" inView={mvIn} isMobile={isMobile} />
//           <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? spacing.lg : 28 }}>
//             {MISSION_VISION.map((item, i) => (
//               <MissionCard key={i} item={item} idx={i} inView={mvIn} isMobile={isMobile} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── CORE VALUES ── */}
//       <div style={{ background: colors.bgPage }}>
//         <div ref={valRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
//           <SectionHeader label="What Drives Us" title="Our Core Values" inView={valIn} isMobile={isMobile} />
//           <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr" : "repeat(4,1fr)", gap: isMobile ? spacing.md : 22 }}>
//             {VALUES.map((v, i) => (
//               <ValueCard key={i} v={v} idx={i} inView={valIn} isMobile={isMobile} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── TESTIMONIALS ── */}
//       <div style={{ background: colors.bgCard }}>
//         <div ref={testRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
//           <SectionHeader label="Client Testimonials" title="What Our Clients Say" inView={testIn} isMobile={isMobile} />
//           <div style={{ position: "relative", overflow: "hidden", ...animation.fadeIn(testIn) }}>
//             <div style={{ background: gradients.card, borderRadius: radius.xl + 4, padding: isMobile ? "36px 24px" : "60px 72px", textAlign: "center", minHeight: isMobile ? 280 : 260, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
//               <div style={{ position: "absolute", top: 20, left: isMobile ? 20 : 48, fontSize: 80, color: colors.primaryTint7, fontWeight: 900, lineHeight: 1, userSelect: "none", fontFamily: "Georgia,serif" }}>"</div>
//               <div style={{ position: "absolute", bottom: 10, right: isMobile ? 20 : 48, fontSize: 80, color: colors.accentTint10, fontWeight: 900, lineHeight: 1, userSelect: "none", fontFamily: "Georgia,serif" }}>"</div>
//               <p style={{ fontSize: isMobile ? t.size.lg : 19, fontWeight: t.weight.bold, color: colors.primary, lineHeight: t.lineHeight.body, maxWidth: 760, margin: `0 0 28px`, fontStyle: "italic", position: "relative", zIndex: 1 }}>
//                 "{TESTIMONIALS[activeTest].text}"
//               </p>
//               <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center" }}>
//                 <div style={{ width: iconSize.avatar - 2, height: iconSize.avatar - 2, borderRadius: radius.full, background: gradients.avatar, display: "flex", alignItems: "center", justifyContent: "center", color: colors.accent, fontWeight: t.weight.extrabold, fontSize: t.size.base }}>
//                   {TESTIMONIALS[activeTest].avatar}
//                 </div>
//                 <div style={{ textAlign: "left" }}>
//                   <p style={{ margin: 0, fontWeight: t.weight.extrabold, fontSize: t.size.md, color: colors.textHeading }}>{TESTIMONIALS[activeTest].name}</p>
//                   <p style={{ margin: 0, fontSize: t.size.sm, color: colors.textMuted }}>{TESTIMONIALS[activeTest].role}</p>
//                 </div>
//               </div>
//               <div style={{ display: "flex", gap: spacing.sm, justifyContent: "center", marginTop: spacing.xl }}>
//                 {TESTIMONIALS.map((_, i) => (
//                   <button key={i} onClick={() => setActiveTest(i)} style={{ width: i === activeTest ? 24 : 8, height: 8, borderRadius: radius.sm / 2, background: i === activeTest ? colors.accent : colors.borderDefault, border: "none", cursor: "pointer", transition: `all ${transitions.slow}`, padding: 0 }} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── CTA STRIP ── */}
//       <div style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: isMobile ? `0 ${layout.sectionPadXMob}px 52px` : `0 ${layout.sectionPadX}px 64px` }}>
//         <div style={{ background: gradients.cta, borderRadius: isMobile ? radius.lg : radius.xl + 2, padding: isMobile ? "40px 24px" : "56px 48px", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: isMobile ? spacing.xl : 32, position: "relative", overflow: "hidden" }}>
//           <div style={{ position: "absolute", top: -40, right: 80, width: 200, height: 200, borderRadius: radius.full, border: `2px solid ${colors.accentTint12}`, pointerEvents: "none" }} />
//           <div style={{ position: "absolute", bottom: -60, right: -40, width: 260, height: 260, borderRadius: radius.full, background: colors.accentTint4, pointerEvents: "none" }} />
//           <div style={{ position: "relative" }}>
//             <p style={{ color: colors.accent, fontWeight: t.weight.bold, fontSize: t.size.sm, letterSpacing: "0.1em", textTransform: "uppercase", margin: `0 0 10px` }}>Ready to get started?</p>
//             <h3 style={{ color: colors.white, fontSize: isMobile ? "1.3rem" : "1.8rem", fontWeight: t.weight.extrabold, margin: `0 0 ${spacing.sm}px`, lineHeight: t.lineHeight.normal }}>Let's build something great together</h3>
//             <p style={{ color: colors.textOnDark60, fontSize: t.size.md, margin: 0 }}>Talk to our team — free consultation, no commitment.</p>
//           </div>
//           <div style={{ display: "flex", gap: 12, flexWrap: "wrap", width: isMobile ? "100%" : "auto" }}>
//             <a href="tel:+918484905526" style={{ display: "inline-block", background: colors.accent, color: colors.white, fontWeight: t.weight.bold, fontSize: t.size.base, letterSpacing: "0.06em", textTransform: "uppercase", padding: "14px 28px", borderRadius: radius.md, textDecoration: "none", boxShadow: shadows.ctaLg, flex: isMobile ? "1" : "none", textAlign: "center" }}>📞 Call Now</a>
//             <a href={WA} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: colors.whiteTint10, color: colors.white, fontWeight: t.weight.bold, fontSize: t.size.base, letterSpacing: "0.06em", textTransform: "uppercase", padding: "14px 28px", borderRadius: radius.md, textDecoration: "none", border: `1px solid ${colors.borderLight}`, flex: isMobile ? "1" : "none", textAlign: "center" }}>💬 WhatsApp</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

// import React, { useState, useEffect, useRef } from "react";

// // ── RESPONSIVE HOOK ──────────────────────────────────────────────────
// function useWindowWidth() {
//   const [w, setW] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 1200
//   );
//   useEffect(() => {
//     const handle = () => setW(window.innerWidth);
//     window.addEventListener("resize", handle);
//     return () => window.removeEventListener("resize", handle);
//   }, []);
//   return w;
// }

// // ── INTERSECTION OBSERVER HOOK ───────────────────────────────────────
// function useInView(threshold = 0.15) {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) setInView(true);
//       },
//       { threshold }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// }

// // ── DATA ─────────────────────────────────────────────────────────────

// const STATS = [
//   { num: "50+", label: "Projects Delivered" },
//   { num: "98%", label: "Client Satisfaction" },
//   { num: "3+", label: "Years of Experience" },
//   { num: "24/7", label: "Support Available" },
// ];

// const FEATURES_LIST = [
//   {
//     icon: "🎯",
//     title: "Smart, Scalable & Future-Ready Digital Solutions",
//     desc: "We deliver solutions that adapt to your business — not the other way around. Our development approach ensures flexibility, performance, and complete control so your website, app, or analytics system grows with you.",
//     desc2:
//       "Whether you're looking for a simple business website or a complex software platform, our team designs and develops with precision and purpose.",
//   },
//   {
//     icon: "🔧",
//     title: "Built for Performance & Reliability",
//     desc: "With expertise across multiple technologies, we build tailor-made digital experiences that fit your needs. From clean UI/UX design and secure development to data insights and automation, we provide end-to-end support so you can focus on scaling your business.",
//     desc2:
//       "Our goal is to provide solutions that are reliable, user-friendly, and built to deliver measurable value.",
//   },
// ];

// const MISSION_VISION = [
//   {
//     label: "Our Company Mission",
//     color: "linear-gradient(135deg, #0d2b6e 0%, #1649b5 100%)",
//     icon: "🚀",
//     points: [
//       "At RAM, our mission is to help businesses unlock their true potential through technology and data.",
//       "We aim to deliver high-quality solutions that are efficient, secure, and aligned with each client's unique objectives.",
//       "Every project we take on is guided by transparency, innovation, and consistent communication.",
//     ],
//   },
//   {
//     label: "Our Vision",
//     color: "linear-gradient(135deg, #e8a020 0%, #ffd27a 100%)",
//     icon: "🌐",
//     points: [
//       "Our vision is to become a trusted global partner for digital transformation.",
//       "We aim to empower organizations with the right tools, the right analysis, and the right technology — enabling smarter decision-making, seamless user experiences, and sustainable growth.",
//       "We believe that when the analysis is right, the results always follow.",
//     ],
//   },
// ];

// const TESTIMONIALS = [
//   {
//     text: "RAM helped us streamline our operations with a modern, high-performance website and smart analytics dashboards. Their strong understanding of both business and technology made the entire transformation smooth and impactful.",
//     name: "Priya Patil",
//     role: "Founder",
//     avatar: "PP",
//   },
//   {
//     text: "RAM built our mobile app with precision and clarity, delivering a solution that matched our goals exactly. Their communication, technical expertise, and problem-solving skills consistently stood out throughout the project.",
//     name: "Ravi Kulkarni",
//     role: "Director",
//     avatar: "RK",
//   },
//   {
//     text: "The RAM team delivered exactly what we needed — a well-designed website integrated with automation that significantly reduced our manual workload. Their support after launch has been exceptional and truly reliable.",
//     name: "Arjun Mehta",
//     role: "Operations Head",
//     avatar: "AM",
//   },
// ];

// const VALUES = [
//   { icon: "💡", title: "Innovation", desc: "We stay ahead of the curve by embracing modern tech and creative problem-solving." },
//   { icon: "🤝", title: "Transparency", desc: "Clear communication and honest collaboration at every step of your project." },
//   { icon: "⚡", title: "Speed", desc: "Fast delivery without compromise — we move with urgency and purpose." },
//   { icon: "🔒", title: "Security", desc: "Every product we ship meets industry-grade security and performance standards." },
// ];

// // ════════════════════════════════════════════════════════════════════
// const AboutUs = () => {
//   const width = useWindowWidth();
//   const isMobile = width < 640;
//   const isTablet = width >= 640 && width < 1024;

//   const [heroRef, heroIn] = useInView(0.1);
//   const [aboutRef, aboutIn] = useInView(0.1);
//   const [featRef, featIn] = useInView(0.1);
//   const [mvRef, mvIn] = useInView(0.1);
//   const [valRef, valIn] = useInView(0.1);
//   const [testRef, testIn] = useInView(0.1);
//   const [activeTest, setActiveTest] = useState(0);

//   // Auto-rotate testimonials
//   useEffect(() => {
//     const id = setInterval(() => {
//       setActiveTest((p) => (p + 1) % TESTIMONIALS.length);
//     }, 4500);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "#f8f9fc",
//         fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif",
//         overflowX: "hidden",
//       }}
//     >
//       <style>{`
//         @keyframes floatCard { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
//         @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.7;transform:scale(1.15)} }
//         @keyframes slideIn { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes spinRing { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
//         @keyframes spinRingRev { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
//         @keyframes dashDraw { from{stroke-dashoffset:800} to{stroke-dashoffset:0} }
//         @keyframes fadeUp { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes fadeRight { from{opacity:0;transform:translateX(-32px)} to{opacity:1;transform:translateX(0)} }
//         @keyframes fadeLeft { from{opacity:0;transform:translateX(32px)} to{opacity:1;transform:translateX(0)} }
//         @keyframes counterUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes glowPulse { 0%,100%{box-shadow:0 0 0 0 rgba(232,160,32,0.4)} 50%{box-shadow:0 0 0 16px rgba(232,160,32,0)} }
//         @keyframes marqueeScroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
//         @keyframes orb1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(40px,-30px) scale(1.1)} }
//   @keyframes orb2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-30px,20px) scale(0.9)} }
//   @keyframes floatCard { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
//   @keyframes revealMask { from{clip-path:inset(0 100% 0 0)} to{clip-path:inset(0 0% 0 0)} }
//   @keyframes countUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
//       `}</style>

//       {/* ── HERO — Split Asymmetric Layout ── */}
//   {/* ── HERO — FIXED RESPONSIVE VERSION ── */}
// <div
//   ref={heroRef}
//   style={{
//     position: "relative",
//     minHeight: isMobile ? "auto" : "100vh",
//     background: "#080f2e",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     overflow: "hidden",
//     padding: isMobile
//       ? "90px 20px 60px"
//       : isTablet
//       ? "120px 30px 100px"
//       : "120px 40px 140px",
//   }}
// >
//   {/* ORBS */}
//   <div
//     style={{
//       position: "absolute",
//       top: "10%",
//       left: "-8%",
//       width: isMobile ? 220 : 420,
//       height: isMobile ? 220 : 420,
//       borderRadius: "50%",
//       background: "rgba(22,73,181,0.22)",
//       filter: "blur(80px)",
//       animation: "orb1 9s ease-in-out infinite",
//       pointerEvents: "none",
//     }}
//   />

//   <div
//     style={{
//       position: "absolute",
//       bottom: "5%",
//       right: "-8%",
//       width: isMobile ? 180 : 380,
//       height: isMobile ? 180 : 380,
//       borderRadius: "50%",
//       background: "rgba(232,160,32,0.12)",
//       filter: "blur(90px)",
//       animation: "orb2 12s ease-in-out infinite",
//       pointerEvents: "none",
//     }}
//   />

//   {/* GRID */}
//   <div
//     style={{
//       position: "absolute",
//       inset: 0,
//       backgroundImage:
//         "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
//       backgroundSize: "32px 32px",
//       pointerEvents: "none",
//     }}
//   />

//   {/* CONTENT */}
//   <div
//     style={{
//       position: "relative",
//       zIndex: 2,
//       textAlign: "center",
//       maxWidth: 900,
//       width: "100%",
//     }}
//   >
//     {/* BADGE */}
//     <div
//       style={{
//         display: "inline-flex",
//         alignItems: "center",
//         gap: 10,
//         marginBottom: 28,
//         background: "rgba(232,160,32,0.1)",
//         border: "1px solid rgba(232,160,32,0.25)",
//         borderRadius: 40,
//         padding: "8px 20px",
//       }}
//     >
//       <div
//         style={{
//           width: 6,
//           height: 6,
//           borderRadius: "50%",
//           background: "#e8a020",
//           animation: "pulse 2s ease infinite",
//         }}
//       />
//       <span
//         style={{
//           color: "#e8a020",
//           fontSize: 11,
//           fontWeight: 800,
//           letterSpacing: "0.22em",
//           textTransform: "uppercase",
//         }}
//       >
//         About Us
//       </span>
//     </div>

//     {/* HEADING */}
//     <h1
//       style={{
//         margin: "0 0 24px",
//         lineHeight: 1.05,
//       }}
//     >
//       <span
//         style={{
//           display: "block",
//           fontSize: isMobile
//             ? "2.6rem"
//             : isTablet
//             ? "4rem"
//             : "5.5rem",
//           fontWeight: 900,
//           color: "#fff",
//           letterSpacing: "-0.04em",
//         }}
//       >
//         Digital
//       </span>

//       <span
//         style={{
//           display: "block",
//           fontSize: isMobile
//             ? "2.6rem"
//             : isTablet
//             ? "4rem"
//             : "5.5rem",
//           fontWeight: 200,
//           color: "#e8a020",
//           letterSpacing: "-0.04em",
//         }}
//       >
//         Solutions
//       </span>

//       <span
//         style={{
//           display: "block",
//           marginTop: 10,
//           fontSize: isMobile
//             ? "1.1rem"
//             : isTablet
//             ? "1.6rem"
//             : "2.4rem",
//           fontWeight: 300,
//           color: "rgba(255,255,255,0.55)",
//           fontStyle: "italic",
//           lineHeight: 1.4,
//         }}
//       >
//         That Drive Real Results.
//       </span>
//     </h1>

//     {/* DESCRIPTION */}
//     <p
//       style={{
//         color: "rgba(255,255,255,0.60)",
//         fontSize: isMobile ? 14 : 17,
//         lineHeight: 1.9,
//         maxWidth: 650,
//         margin: "0 auto 40px",
//       }}
//     >
//       At RAM (Right Analysis Matters), we combine technology and
//       data to build solutions that create impact, efficiency,
//       and long-term success for businesses of every scale.
//     </p>

//     {/* BUTTONS */}
//     <div
//       style={{
//         display: "flex",
//         gap: 14,
//         justifyContent: "center",
//         flexWrap: "wrap",
//       }}
//     >
//       <a
//         href="https://wa.me/918484905526"
//         target="_blank"
//         rel="noreferrer"
//         style={{
//           background: "#e8a020",
//           color: "#fff",
//           padding: isMobile ? "14px 24px" : "15px 36px",
//           borderRadius: 10,
//           textDecoration: "none",
//           fontWeight: 800,
//           fontSize: 13,
//           letterSpacing: "0.08em",
//           textTransform: "uppercase",
//           boxShadow: "0 8px 32px rgba(232,160,32,0.4)",
//         }}
//       >
//         Get Free Consultation
//       </a>

//       <a
//         href="#mission"
//         style={{
//           background: "rgba(255,255,255,0.07)",
//           color: "rgba(255,255,255,0.85)",
//           padding: isMobile ? "14px 24px" : "15px 32px",
//           borderRadius: 10,
//           textDecoration: "none",
//           fontWeight: 600,
//           fontSize: 13,
//           letterSpacing: "0.08em",
//           textTransform: "uppercase",
//           border: "1px solid rgba(255,255,255,0.15)",
//         }}
//       >
//         Our Story ↓
//       </a>
//     </div>
//   </div>

//   {/* STATS */}
//   <div
//     style={{
//       position: "relative",
//       zIndex: 2,
//       display: "grid",
//       gridTemplateColumns: isMobile
//         ? "1fr 1fr"
//         : isTablet
//         ? "repeat(2,1fr)"
//         : "repeat(4,1fr)",
//       gap: isMobile ? 12 : 18,
//       width: "100%",
//       maxWidth: 950,
//       marginTop: isMobile ? 50 : 80,
//     }}
//   >
//     {STATS.map((s, i) => (
//       <div
//         key={i}
//         style={{
//           background: "rgba(255,255,255,0.05)",
//           backdropFilter: "blur(12px)",
//           border: "1px solid rgba(255,255,255,0.10)",
//           borderRadius: 18,
//           padding: isMobile ? "20px 12px" : "24px",
//           textAlign: "center",
//         }}
//       >
//         <div
//           style={{
//             fontSize: isMobile ? "1.6rem" : "2.3rem",
//             fontWeight: 900,
//             color: "#e8a020",
//             lineHeight: 1,
//           }}
//         >
//           {s.num}
//         </div>

//         <div
//           style={{
//             fontSize: 11,
//             fontWeight: 700,
//             color: "rgba(255,255,255,0.55)",
//             letterSpacing: "0.1em",
//             textTransform: "uppercase",
//             marginTop: 8,
//             lineHeight: 1.5,
//           }}
//         >
//           {s.label}
//         </div>
//       </div>
//     ))}
//   </div>

//   {/* BOTTOM FADE */}
//   <div
//     style={{
//       position: "absolute",
//       bottom: 0,
//       left: 0,
//       right: 0,
//       height: 120,
//       background: "linear-gradient(to top,#f8f9fc,transparent)",
//       pointerEvents: "none",
//     }}
//   />
// </div>

 

//       {/* ── MARQUEE STRIP ── */}
//       <div style={{ background:"#0d2b6e", padding:"14px 0", overflow:"hidden", position:"relative", zIndex:2 }}>
//         <div style={{ display:"flex", animation:"marqueeScroll 18s linear infinite", width:"max-content" }}>
//           {[...Array(2)].map((_,rep) => (
//             <div key={rep} style={{ display:"flex", alignItems:"center", gap:0 }}>
//               {["Web Development","Mobile Apps","Data Analytics","UI/UX Design","Cloud & DevOps","IT Consulting","Performance Optimization","Security Solutions"].map((item,i) => (
//                 <React.Fragment key={i}>
//                   <span style={{ color:"rgba(255,255,255,0.85)", fontSize:12, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", whiteSpace:"nowrap", padding:"0 20px" }}>{item}</span>
//                   <span style={{ color:"#e8a020", fontSize:16, lineHeight:1 }}>◆</span>
//                 </React.Fragment>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── ABOUT SECTION ── */}
//       <div style={{ background:"#f8f9fc" }}>
//         <div ref={aboutRef} style={{ maxWidth:1060, margin:"0 auto", padding:isMobile?"52px 16px":"72px 24px" }}>
//           <SectionHeader label="About Us" title="Who We Are" inView={aboutIn} isMobile={isMobile} />
//           <div style={{ display:"grid", gridTemplateColumns:isMobile?"1fr":"1fr 1fr", gap:isMobile?32:56, alignItems:"center" }}>
//             {/* Left text */}
//             <div style={{ opacity:aboutIn?1:0, transform:aboutIn?"translateX(0)":"translateX(-30px)", transition:"all 0.8s ease" }}>
//               <p style={{ color:"#e8a020", fontWeight:700, fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase", margin:"0 0 14px" }}>Our Features</p>
//               <h2 style={{ fontSize:isMobile?"1.5rem":"2rem", fontWeight:900, color:"#0d2b6e", margin:"0 0 20px", lineHeight:1.25, letterSpacing:"-0.02em" }}>
//                 Smart, Scalable &amp; Future‑Ready Digital Solutions
//               </h2>
//               <p style={{ color:"#5a6380", fontSize:15, lineHeight:1.85, margin:"0 0 16px" }}>
//                 We deliver solutions that adapt to your business — not the other way around. Our development approach ensures flexibility, performance, and complete control so your website, app, or analytics system grows with you.
//               </p>
//               <p style={{ color:"#5a6380", fontSize:15, lineHeight:1.85, margin:"0 0 28px" }}>
//                 Whether you're looking for a simple business website or a complex software platform, our team designs and develops with precision and purpose.
//               </p>
//               <a href="https://wa.me/918484905526" target="_blank" rel="noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"linear-gradient(135deg,#0d2b6e,#1a3e8c)", color:"#fff", padding:"13px 26px", borderRadius:10, textDecoration:"none", fontWeight:700, fontSize:13, letterSpacing:"0.07em", textTransform:"uppercase", boxShadow:"0 8px 24px rgba(13,43,110,0.3)" }}>
//                 Know More
//                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 4l3 3-3 3" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
//               </a>
//             </div>

//             {/* Right visual */}
//             <div style={{ opacity:aboutIn?1:0, transform:aboutIn?"translateX(0)":"translateX(30px)", transition:"all 0.8s ease 0.2s" }}>
//               <div style={{ background:"linear-gradient(135deg,#0d2b6e,#1a3e8c)", borderRadius:24, padding:isMobile?"28px 22px":"40px 36px", position:"relative", overflow:"hidden" }}>
//                 <div style={{ position:"absolute", top:-30, right:-30, width:160, height:160, borderRadius:"50%", border:"2px solid rgba(232,160,32,0.15)" }} />
//                 <div style={{ position:"absolute", bottom:-50, left:-30, width:200, height:200, borderRadius:"50%", background:"rgba(232,160,32,0.05)" }} />
//                 <p style={{ color:"#e8a020", fontWeight:700, fontSize:11, letterSpacing:"0.12em", textTransform:"uppercase", margin:"0 0 14px", position:"relative" }}>Our Capabilities</p>
//                 <p style={{ color:"rgba(255,255,255,0.72)", fontSize:14, lineHeight:1.85, margin:"0 0 24px", position:"relative" }}>
//                   With expertise across multiple technologies, we build tailor-made digital experiences that fit your needs. From clean UI/UX design and secure development to data insights and automation, we provide end-to-end support.
//                 </p>
//                 <p style={{ color:"rgba(255,255,255,0.72)", fontSize:14, lineHeight:1.85, margin:"0 0 28px", position:"relative" }}>
//                   Our goal is to provide solutions that are reliable, user-friendly, and built to deliver measurable value.
//                 </p>
//                 {["End-to-end product development", "Data-driven decision making", "Always-on client support"].map((pt, i) => (
//                   <div key={i} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10, position:"relative" }}>
//                     <div style={{ width:20, height:20, borderRadius:"50%", background:"rgba(232,160,32,0.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
//                       <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5l2.5 2.5L8 3" stroke="#e8a020" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
//                     </div>
//                     <span style={{ color:"rgba(255,255,255,0.82)", fontSize:13, fontWeight:500 }}>{pt}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── MISSION & VISION ── */}
//       <div id="mission" style={{ background:"#fff" }}>
//         <div ref={mvRef} style={{ maxWidth:1060, margin:"0 auto", padding:isMobile?"52px 16px":"72px 24px" }}>
//           <SectionHeader label="Our Purpose" title="Mission & Vision" inView={mvIn} isMobile={isMobile} />
//           <div style={{ display:"grid", gridTemplateColumns:isMobile?"1fr":"1fr 1fr", gap:isMobile?20:28 }}>
//             {MISSION_VISION.map((item, i) => (
//               <MissionCard key={i} item={item} idx={i} inView={mvIn} isMobile={isMobile} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── CORE VALUES ── */}
//       <div style={{ background:"#f8f9fc" }}>
//         <div ref={valRef} style={{ maxWidth:1060, margin:"0 auto", padding:isMobile?"52px 16px":"72px 24px" }}>
//           <SectionHeader label="What Drives Us" title="Our Core Values" inView={valIn} isMobile={isMobile} />
//           <div style={{ display:"grid", gridTemplateColumns:isMobile?"1fr 1fr":isTablet?"1fr 1fr":"repeat(4,1fr)", gap:isMobile?14:22 }}>
//             {VALUES.map((v, i) => (
//               <ValueCard key={i} v={v} idx={i} inView={valIn} isMobile={isMobile} />
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── TESTIMONIALS ── */}
//       <div style={{ background:"#fff" }}>
//         <div ref={testRef} style={{ maxWidth:1060, margin:"0 auto", padding:isMobile?"52px 16px":"72px 24px" }}>
//           <SectionHeader label="Client Testimonials" title="What Our Clients Say" inView={testIn} isMobile={isMobile} />
//           {/* Carousel */}
//           <div style={{ position:"relative", overflow:"hidden", opacity:testIn?1:0, transform:testIn?"translateY(0)":"translateY(28px)", transition:"all 0.7s ease" }}>
//             <div style={{ background:"linear-gradient(135deg,#f0f5ff 0%,#f8f9fc 100%)", borderRadius:24, padding:isMobile?"36px 24px":"60px 72px", textAlign:"center", minHeight:isMobile?280:260, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden" }}>
//               {/* decorative quote */}
//               <div style={{ position:"absolute", top:20, left:isMobile?20:48, fontSize:80, color:"rgba(13,43,110,0.06)", fontWeight:900, lineHeight:1, userSelect:"none", fontFamily:"Georgia,serif" }}>"</div>
//               <div style={{ position:"absolute", bottom:10, right:isMobile?20:48, fontSize:80, color:"rgba(232,160,32,0.08)", fontWeight:900, lineHeight:1, userSelect:"none", fontFamily:"Georgia,serif" }}>"</div>

//               <p style={{ fontSize:isMobile?15:19, fontWeight:700, color:"#1a3e8c", lineHeight:1.7, maxWidth:760, margin:"0 0 28px", fontStyle:"italic", position:"relative", zIndex:1, transition:"all 0.5s ease", animation:testIn?"slideIn 0.5s ease":"none" }}>
//                 "{TESTIMONIALS[activeTest].text}"
//               </p>
//               <div style={{ display:"flex", alignItems:"center", gap:12, justifyContent:"center" }}>
//                 <div style={{ width:42, height:42, borderRadius:"50%", background:"linear-gradient(135deg,#0d2b6e,#1a3e8c)", display:"flex", alignItems:"center", justifyContent:"center", color:"#e8a020", fontWeight:800, fontSize:13 }}>
//                   {TESTIMONIALS[activeTest].avatar}
//                 </div>
//                 <div style={{ textAlign:"left" }}>
//                   <p style={{ margin:0, fontWeight:800, fontSize:14, color:"#0d2b6e" }}>{TESTIMONIALS[activeTest].name}</p>
//                   <p style={{ margin:0, fontSize:12, color:"#8a94b0" }}>{TESTIMONIALS[activeTest].role}</p>
//                 </div>
//               </div>

//               {/* Dots */}
//               <div style={{ display:"flex", gap:8, justifyContent:"center", marginTop:24 }}>
//                 {TESTIMONIALS.map((_, i) => (
//                   <button key={i} onClick={() => setActiveTest(i)} style={{ width:i===activeTest?24:8, height:8, borderRadius:4, background:i===activeTest?"#e8a020":"rgba(26,62,140,0.2)", border:"none", cursor:"pointer", transition:"all 0.3s ease", padding:0 }} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

   
//        {/* ── CTA STRIP ── */}
//       <div style={{ maxWidth: 1060, margin: "0 auto", padding: isMobile ? "0 16px 52px" : "0 24px 64px" }}>
//         <div style={{
//           background: "linear-gradient(135deg, #0d2b6e 0%, #1a3e8c 100%)",
//           borderRadius: isMobile ? 16 : 22,
//           padding: isMobile ? "40px 24px" : "56px 48px",
//           display: "flex",
//           flexDirection: isMobile ? "column" : "row",
//           alignItems: isMobile ? "flex-start" : "center",
//           justifyContent: "space-between",
//           gap: isMobile ? 24 : 32,
//           position: "relative", overflow: "hidden",
//         }}>
//           <div style={{ position: "absolute", top: -40, right: 80, width: 200, height: 200, borderRadius: "50%", border: "2px solid rgba(232,160,32,0.12)", pointerEvents: "none" }} />
//           <div style={{ position: "absolute", bottom: -60, right: -40, width: 260, height: 260, borderRadius: "50%", background: "rgba(232,160,32,0.04)", pointerEvents: "none" }} />
//           <div style={{ position: "relative" }}>
//             <p style={{ color: "#e8a020", fontWeight: 700, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 10px" }}>Ready to get started?</p>
//             <h3 style={{ color: "#fff", fontSize: isMobile ? "1.3rem" : "1.8rem", fontWeight: 800, margin: "0 0 8px", lineHeight: 1.25 }}>
//               Let's build something great together
//             </h3>
//             <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, margin: 0 }}>Talk to our team — free consultation, no commitment.</p>
//           </div>
//           <div style={{ display: "flex", gap: 12, flexWrap: "wrap", width: isMobile ? "100%" : "auto" }}>
//             <a href="tel:+918484905526" style={{
//               display: "inline-block", background: "#e8a020", color: "#fff",
//               fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase",
//               padding: "14px 28px", borderRadius: 8, textDecoration: "none",
//               boxShadow: "0 6px 20px rgba(232,160,32,0.4)",
//               flex: isMobile ? "1" : "none", textAlign: "center",
//             }}>📞 Call Now</a>
//             <a href="https://wa.me/918484905526" target="_blank" rel="noreferrer" style={{
//               display: "inline-block", background: "rgba(255,255,255,0.10)", color: "#fff",
//               fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase",
//               padding: "14px 28px", borderRadius: 8, textDecoration: "none",
//               border: "1px solid rgba(255,255,255,0.2)",
//               flex: isMobile ? "1" : "none", textAlign: "center",
//             }}>💬 WhatsApp</a>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// // ── SECTION HEADER ───────────────────────────────────────────────────
// const SectionHeader = ({ label, title, inView, isMobile }) => (
//   <div style={{ textAlign:"center", marginBottom:isMobile?36:52, opacity:inView?1:0, transform:inView?"translateY(0)":"translateY(24px)", transition:"opacity 0.6s ease, transform 0.6s ease" }}>
//     <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginBottom:10 }}>
//       <div style={{ width:28, height:3, background:"#e8a020", borderRadius:2 }} />
//       <span style={{ color:"#e8a020", fontWeight:700, fontSize:11, letterSpacing:"0.14em", textTransform:"uppercase" }}>{label}</span>
//       <div style={{ width:28, height:3, background:"#e8a020", borderRadius:2 }} />
//     </div>
//     <h2 style={{ fontSize:isMobile?"1.5rem":"2.1rem", fontWeight:800, color:"#0d2b6e", margin:0, letterSpacing:"-0.015em" }}>{title}</h2>
//   </div>
// );

// // ── MISSION CARD ─────────────────────────────────────────────────────
// const MissionCard = ({ item, idx, inView, isMobile }) => (
//   <div style={{ background:item.color, borderRadius:22, padding:isMobile?"32px 24px":"44px 40px", position:"relative", overflow:"hidden", opacity:inView?1:0, transform:inView?"translateY(0)":"translateY(30px)", transition:`all 0.6s ease ${idx*0.15}s` }}>
//     {/* Watermark */}
//     <div style={{ position:"absolute", bottom:-20, right:-10, fontSize:120, opacity:0.08, userSelect:"none" }}>{item.icon}</div>
//     <h3 style={{ color:"#fff", fontWeight:800, fontSize:isMobile?"1.15rem":"1.35rem", margin:"0 0 20px", lineHeight:1.3 }}>{item.label}</h3>
//     {item.points.map((pt, i) => (
//       <p key={i} style={{ color:"rgba(255,255,255,0.88)", fontSize:14, lineHeight:1.8, margin:i < item.points.length-1?"0 0 14px":0 }}>{pt}</p>
//     ))}
//   </div>
// );

// // ── VALUE CARD ───────────────────────────────────────────────────────
// const ValueCard = ({ v, idx, inView, isMobile }) => {
//   const [hov, setHov] = useState(false);
//   return (
//     <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{ background:hov?"#1a3e8c":"#fff", borderRadius:18, padding:isMobile?"22px 18px":"30px 24px", border:`2px solid ${hov?"transparent":"rgba(26,62,140,0.10)"}`, boxShadow:hov?"0 20px 48px rgba(26,62,140,0.22)":"0 2px 14px rgba(26,62,140,0.07)", transform:hov?"translateY(-6px)":inView?"translateY(0)":"translateY(30px)", opacity:inView?1:0, transition:`all 0.3s ease ${idx*0.08}s`, cursor:"default", textAlign:"center" }}>
//       <div style={{ fontSize:32, marginBottom:14 }}>{v.icon}</div>
//       <h4 style={{ fontSize:15, fontWeight:800, color:hov?"#fff":"#0d2b6e", margin:"0 0 10px" }}>{v.title}</h4>
//       <p style={{ fontSize:13, color:hov?"rgba(255,255,255,0.78)":"#6a7290", lineHeight:1.7, margin:0 }}>{v.desc}</p>
//     </div>
//   );
// };

// export default AboutUs;