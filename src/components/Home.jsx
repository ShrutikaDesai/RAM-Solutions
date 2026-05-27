import React, { useState, useEffect, useRef } from "react";
import theme from "../theme/theme";
import { useNavigate } from "react-router-dom";
import {  ChevronDown, ArrowRight,   Info, Rocket } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
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
const SERVICES = [
  { icon: "🖥️", title: "Web Development", desc: "We design and build responsive, high-performance websites that boost your brand, improve engagement, and convert visitors into customers.", color: colors.primaryDark },
  { icon: "☁️", title: "Cloud Services", desc: "Secure, scalable cloud infrastructure setup, DevOps automation, and cloud migration tailored for long-term growth.", color: colors.primary },
  { icon: "📊", title: "Analytical Services", desc: "Transform your raw data into meaningful insights with advanced dashboards, analytics pipelines, and reporting automation.", color: colors.primaryDark },
  { icon: "📱", title: "App Development", desc: "End-to-end mobile and web application development with modern UI/UX, APIs, integrations, and robust architecture.", color: colors.primary },
];

const FEATURES = [
  { icon: "🔷", title: "Custom software applications" },
  { icon: "☁️", title: "Cloud infrastructure setup" },
  { icon: "⚙️", title: "Business automation workflows" },
  { icon: "🗄️", title: "Data engineering" },
  { icon: "📈", title: "Dashboards & analytics" },
];

const WEB_DEV_COLS = [
  {
    label: "Responsive web apps",
    color: colors.accent,
    points: [
      "Mobile-first, fully responsive layouts that adapt to all screen sizes.",
      "Smooth UI/UX using modern frameworks like React, Vue, and responsive CSS techniques.",
      "Fast performance with optimized assets, lazy loading, and code-splitting.",
      "Touch-friendly navigation and interactive elements for mobile users.",
      "PWA-ready architecture offering offline access and app-like experiences.",
      "Consistent user experience across all devices and browsers.",
    ],
  },
  {
    label: "API integration & microservices",
    color: colors.primary,
    points: [
      "Seamless integration of third-party APIs for payments, authentication, and business tools.",
      "Scalable microservice architecture ensuring modular, independent, and reliable systems.",
      "Secure API communication using standards like OAuth2, JWT, and SSL/TLS.",
      "Real-time data exchange using REST APIs, GraphQL, and event-driven services.",
      "Cloud-ready deployment with containerized microservices using Docker & Kubernetes.",
    ],
  },
  {
    label: "E-commerce, payment integrations, PWA support",
    color: colors.green,
    points: [
      "End-to-end e-commerce solutions with cart, checkout, product management, and order tracking.",
      "Secure payment gateway integrations including Razorpay, Stripe, PayPal, and UPI.",
      "Mobile-first design for smooth shopping experiences on all devices.",
      "PWA-enabled features like offline access, push notifications, and app-like performance.",
      "Fast, optimized, and scalable architecture for high-traffic online stores.",
    ],
  },
];

const SECURITY_FEATURES = [
  { icon: "🌐", title: "Modern cloud hosting setup", desc: "Modern cloud hosting setup with encrypted data transfers & backups." },
  { icon: "🔧", title: "Scalable architecture", desc: "Scalable architecture to handle growth & peak loads." },
  { icon: "⚡", title: "Performance-optimized systems", desc: "Performance-optimized systems ensuring smooth operations." },
];

const TESTIMONIALS = [
    {
    text:
      "RAM developed our counselling platform with a clean design and smooth user experience. Their team clearly understood our requirements and delivered a reliable, professional solution for our counselling services.",
    name: "Reena Bhutada",
    role: "Director",
    avatar: "RB",
  },
  {
    text:
      "RAM Technologies created a modern and user-friendly website for St. John High School & Junior College, Pulgaon. Their professionalism and technical expertise made the entire process smooth and successful.",
    name: "Mr. Santosh Yadav",
    role: "Management Representative",
    avatar: "SY",
  },

{
  text:
    "RAM built our mobile app with a smooth user experience and reliable performance. Their technical expertise and professional approach made the project delivery seamless and successful.",
  name: "Ravi Kulkarni",
  role: "Operations Head",
  avatar: "RK",
},
];

const STATS = [
  { num: "⚡", label: "Fast Delivery" },
  { num: "🔒", label: "Secure Solutions" },
  { num: "☁️", label: "Cloud Ready" },
  { num: "💡", label: "Smart Innovation" },
];

// ── SECTION HEADER ───────────────────────────────────────────────────
const SectionHeader = ({ label, title, inView, isMobile, dark = false }) => (
  <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 52, ...animation.fadeIn(inView) }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 10 }}>
      <div style={{ width: 28, height: 3, background: colors.accent, borderRadius: radius.sm }} />
      <span
        style={{
          color: colors.accent,
          fontWeight: t.weight.bold,
          fontSize: t.size.xs,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
        }}
      >
        {label}
      </span>
      <div style={{ width: 28, height: 3, background: colors.accent, borderRadius: radius.sm }} />
    </div>
    <h2
      style={{
        fontSize: isMobile ? "1.5rem" : "2.1rem",
        fontWeight: t.weight.extrabold,
        color: dark ? colors.white : colors.textHeading,
        margin: 0,
        letterSpacing: "-0.015em",
        fontFamily: t.fontFamily.heading,  // ← Titillium Web
      }}
    >
      {title}
    </h2>
  </div>
);

// ── WHATSAPP LINK ─────────────────────────────────────────────────────
const WA = "https://wa.me/918484905526";

// ── MAIN ─────────────────────────────────────────────────────────────
const Home = () => {
  const width = useWindowWidth();
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;
  const navigate = useNavigate();

  const [heroRef, heroIn] = useInView(0.05);
  const [servRef, servIn] = useInView(0.1);
  const [featRef, featIn] = useInView(0.1);
  const [webRef, webIn] = useInView(0.1);
  const [secRef, secIn] = useInView(0.1);
  const [testRef, testIn] = useInView(0.1);
  const [statsRef, statsIn] = useInView(0.1);
  const [activeTest, setActiveTest] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActiveTest(p => (p + 1) % TESTIMONIALS.length), 4500);
    return () => clearInterval(id);
  }, []);

  const secPad = isMobile
    ? `${layout.sectionPadYMob}px ${layout.sectionPadXMob}px`
    : `${layout.sectionPadY}px ${layout.sectionPadX}px`;

  return (
    <>
    <Helmet>
  {/*  Primary SEO */}
  <title>
    Website Development Company in Pune | Cloud & Software Solutions | RAM Technology
  </title>

  <meta
    name="description"
    content="Top Web Development Company in Pune. We provide mobile app development, cloud solutions, and data analytics to help your business grow. Get a free consultation today!"
  />

  <meta
    name="keywords"
    content="Web Development Company Pune, Software Company India, Cloud Services Pune, App Development Pune, Data Analytics India, IT Consulting Pune, RAM Technology"
  />

  <meta name="author" content="Right Analysis Matter Technology Pvt. Ltd." />

  {/* 📱 Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  {/* 🌍 Canonical */}
  <link rel="canonical" href="https://ramsolutions.in/" />

  {/* 📍 Local SEO */}
  <meta name="geo.region" content="IN-MH" />
  <meta name="geo.placename" content="Pune" />
  <meta name="geo.position" content="18.5204;73.8567" />
  <meta name="ICBM" content="18.5204, 73.8567" />

  {/* 🤖 Robots */}
  <meta name="robots" content="index, follow, max-image-preview:large" />

  {/* 🎨 Theme */}
  <meta name="theme-color" content="#0d2b6e" />



  {/* 📘 Open Graph (Facebook / LinkedIn) */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Web Development Company in Pune | RAM Technology"
  />
  <meta
    property="og:description"
    content="We build modern websites, mobile apps, and cloud solutions to scale your business in Pune and across India."
  />
  <meta property="og:url" content="https://ramsolutions.in/" />
  <meta property="og:image" content="https://ramsolutions.in/ram-logo.jpg" />
  <meta property="og:locale" content="en_IN" />
  <meta property="og:site_name" content="RAM Technology" />

  {/* 🐦 Twitter SEO */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Top Web Development Company in Pune | RAM Technology"
  />
  <meta
    name="twitter:description"
    content="Build, scale, and automate your business with expert web, cloud, and software solutions."
  />
  <meta name="twitter:image" content="https://ramsolutions.in/ram-logo.jpg" />

  {/* 📊 Structured Data - Organization + LocalBusiness */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness"],
      name: "Right Analysis Matter Technology Pvt. Ltd.",
      url: "https://ramsolutions.in",
      logo: "https://ramsolutions.in/ram-logo.jpg",
      image: "https://ramsolutions.in/ram-logo.jpg",
      description:
        "Web development, mobile apps, cloud services, and data analytics company in Pune.",
      telephone: "+91-8484905526",
      email: "info@ramsolutions.in",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Golden Arch, Bavdhan",
        addressLocality: "Pune",
        addressRegion: "MH",
        postalCode: "411021",
        addressCountry: "IN"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 18.5204,
        longitude: 73.8567
      },
      areaServed: {
        "@type": "Country",
        name: "India"
      },
      sameAs: [
        "https://www.instagram.com/rightanalysismatters/",
        "https://www.facebook.com/people/Right-Analysis-Matters-Pvt-Ltd/61584691050212/"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8484905526",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"]
      }
    })}
  </script>

  {/* ⭐ Structured Data - FAQ (Add if FAQ section exists) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does RAM Technology provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide web development, mobile app development, cloud services, and data analytics solutions."
          }
        },
        {
          "@type": "Question",
          name: "Do you provide services in Pune?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we are based in Pune and serve clients across India."
          }
        },
        {
          "@type": "Question",
          name: "How can I start a project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact us via phone or WhatsApp to get a free consultation."
          }
        }
      ]
    })}
  </script>

  {/* ⭐ Structured Data - Reviews */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Web Development Services",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "25"
      }
    })}
  </script>
</Helmet>
    <div
      style={{
        minHeight: "100vh",
        background: colors.bgPage,
        fontFamily: t.fontFamily.paragraph,   // ← Raleway as base
        overflowX: "hidden",
        marginTop: -60,
      }}
    >
      <style>{`
        @keyframes floatUp    { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes slideRight { from{opacity:0;transform:translateX(-30px)} to{opacity:1;transform:translateX(0)} }
        @keyframes glowPulse  { 0%,100%{box-shadow:0 0 0 0 rgba(232,160,32,0.4)} 50%{box-shadow:0 0 0 16px rgba(232,160,32,0)} }
        @keyframes spinRing   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes spinRingRev{ from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes marqueeScroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .service-card:hover { transform: translateY(-8px) !important; box-shadow: ${shadows.cardMdHover} !important; }
        .service-card { transition: all ${transitions.slow} !important; }
        .web-col:hover { background: ${colors.bgLight} !important; }
      `}</style>

      {/* ── HERO ── */}
      <div ref={heroRef} style={{ position: "relative", minHeight: isMobile ? "auto" : "100vh", display: "flex", flexDirection: isMobile ? "column" : "row", overflow: "hidden", background: colors.bgPage }}>

        {/* LEFT DARK PANEL */}
        <div style={{
          flex: isMobile ? "none" : "0 0 54%",
          background: colors.primaryDark,
          position: "relative",
          overflow: "hidden",
          padding: isMobile ? "72px 24px 48px" : "0",
          display: "flex",
          alignItems: "center",
          minHeight: isMobile ? "auto" : "100vh",
          clipPath: isMobile ? "none" : "polygon(0 0, 92% 0, 100% 100%, 0 100%)",
        }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle, ${colors.whiteTint6} 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />
          <div style={{ position: "absolute", bottom: -30, right: isMobile ? -10 : -50, fontSize: isMobile ? "140px" : "220px", fontWeight: 900, color: "transparent", WebkitTextStroke: `2px ${colors.accentTint10}`, userSelect: "none", letterSpacing: "-0.05em", pointerEvents: "none", fontFamily: t.fontFamily.heading }}>RAM</div>
          {!isMobile && (<>
            <div style={{ position: "absolute", top: 60, right: 20, width: 120, height: 120, borderRadius: radius.full, border: `1.5px dashed ${colors.accentTint20}`, animation: "spinRing 18s linear infinite" }} />
            <div style={{ position: "absolute", top: 80, right: 40, width: 80, height: 80, borderRadius: radius.full, border: `1.5px solid ${colors.whiteTint8}`, animation: "spinRingRev 12s linear infinite" }} />
          </>)}

          <div style={{ position: "relative", zIndex: 2, padding: isMobile ? "0" : "64px 56px 64px 60px", maxWidth: isMobile ? "100%" : 560 }}>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, opacity: heroIn ? 1 : 0, animation: heroIn ? "slideRight 0.6s ease forwards" : "none" }}>
              <div style={{ width: 36, height: 3, background: colors.accent, borderRadius: radius.sm }} />
              <span style={{
                color: colors.accent,
                fontSize: t.size.xs,
                fontWeight: t.weight.extrabold,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
              }}>
                Right Analysis Matters
              </span>
            </div>

            {/* Headline */}
            <div style={{ marginBottom: spacing.xl }}>
              {["Right Analysis", "Matters", "Pvt. Ltd."].map((line, i) => (
                <div key={i} style={{ overflow: "hidden", lineHeight: 1.05, marginBottom: spacing.xs }}>
                  <div style={{
                    fontSize: isMobile ? (i < 2 ? "2.2rem" : "1.8rem") : (i < 2 ? "3.6rem" : "2.8rem"),
                    fontWeight: i % 2 === 0 ? 900 : 300,
                    color: i === 1 ? colors.accent : colors.white,
                    fontStyle: i === 3 ? "italic" : "normal",
                    letterSpacing: i === 0 ? "-0.04em" : "-0.02em",
                    opacity: heroIn ? 1 : 0,
                    transform: heroIn ? "translateY(0)" : "translateY(100%)",
                    transition: `opacity 0.7s ease ${0.1 + i * 0.12}s, transform 0.7s ease ${0.1 + i * 0.12}s`,
                    display: "block",
                    fontFamily: t.fontFamily.heading,  // ← Titillium Web
                  }}>{line}</div>
                </div>
              ))}
            </div>

            <p style={{
              color: colors.textOnDark55,
              fontSize: isMobile ? t.size.base : t.size.md,
              margin: `0 0 12px`,
              fontWeight: t.weight.bold,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              opacity: heroIn ? 1 : 0,
              transition: "all 0.8s ease 0.5s",
              fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans (sub-label)
            }}>
              Software, Cloud, Data &amp; Automation Solutions
            </p>
            <p style={{
              color: colors.textOnDark60,
              fontSize: isMobile ? t.size.base : t.size.lg,
              lineHeight: t.lineHeight.body,
              margin: `0 0 36px`,
              maxWidth: 440,
              opacity: heroIn ? 1 : 0,
              transition: "all 0.8s ease 0.58s",
              fontFamily: t.fontFamily.paragraph,  // ← Raleway
            }}>
              We build modern digital solutions that help businesses scale faster, operate smarter, and deliver exceptional customer experiences.
            </p>

            <div style={{ display: "flex", gap: spacing.md, flexWrap: "wrap", opacity: heroIn ? 1 : 0, transition: "all 0.8s ease 0.68s" }}>
              <a href={WA} target="_blank" rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: colors.accent, color: colors.white,
                  padding: "14px 30px", borderRadius: radius.md,
                  textDecoration: "none", fontWeight: t.weight.extrabold,
                  fontSize: t.size.sm, letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans (CTA)
                  animation: "glowPulse 2.5s ease-in-out infinite",
                }}
              >
                <Info size={17} />
                Know More
              </a>

              <a href="#services"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "transparent", color: colors.textOnDark85,
                  padding: "14px 26px", borderRadius: radius.md,
                  textDecoration: "none", fontWeight: t.weight.semibold,
                  fontSize: t.size.sm, letterSpacing: "0.08em",
                  textTransform: "uppercase", border: `1px solid ${colors.borderLight}`,
                  fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans (CTA)
                }}
              >
                Our Services
                <ChevronDown size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div style={{ flex: 1, background: colors.bgPage, display: "flex", flexDirection: "column", justifyContent: "center", padding: isMobile ? "40px 24px 52px" : "64px 48px 64px 80px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: radius.full, background: colors.primaryTint5, zIndex: 0 }} />
          <div style={{ position: "absolute", bottom: 40, left: isMobile ? -60 : -20, width: 180, height: 180, borderRadius: radius.full, border: `2px solid ${colors.accentTint15}`, zIndex: 0 }} />

          {/* Stats */}
          <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: isMobile ? spacing.lg : 28, marginBottom: isMobile ? 28 : 40 }}>
            {STATS.map((item, i) => (
              <div key={i} style={{ opacity: heroIn ? 1 : 0, transition: `all 0.6s ease ${0.3 + i * 0.13}s`, borderLeft: "3px solid", borderColor: i % 2 === 0 ? colors.accent : colors.primaryDark, paddingLeft: spacing.xl }}>
                <div style={{ fontSize: isMobile ? "2rem" : "2.8rem", fontWeight: 900, color: colors.textHeading, lineHeight: 1, letterSpacing: "-0.04em" }}>{item.num}</div>
                <div style={{
                  fontSize: t.size.xs,
                  fontWeight: t.weight.bold,
                  color: colors.textMuted,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: 6,
                  fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
                }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28, opacity: heroIn ? 1 : 0, transition: "all 0.7s ease 0.75s" }}>
            {["Web Development", "Mobile Apps", "Data Analytics", "UI/UX Design", "Cloud & DevOps", "IT Consulting"].map((tag, i) => (
              <span key={i} style={{
                fontSize: t.size.xs,
                fontWeight: t.weight.bold,
                color: i % 3 === 1 ? colors.accent : colors.primaryDark,
                background: i % 3 === 1 ? colors.accentTint10 : colors.primaryTint7,
                border: `1px solid ${i % 3 === 1 ? colors.accentTint25 : colors.primaryTint12}`,
                borderRadius: radius.pill,
                padding: "6px 14px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
              }}>
                {tag}
              </span>
            ))}
          </div>

          <div style={{ position: "relative", zIndex: 1, height: 1, background: `linear-gradient(90deg,${colors.borderDefault},transparent)`, marginBottom: 28, opacity: heroIn ? 1 : 0, transition: "all 0.7s ease 0.85s" }} />

          {/* Trust row */}
          <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", gap: spacing.xl, opacity: heroIn ? 1 : 0, transition: "all 0.7s ease 0.95s", flexWrap: "wrap" }}>
            <div>
              <div style={{
                fontSize: t.size.base,
                fontWeight: t.weight.bold,
                color: colors.textHeading,
                fontFamily: t.fontFamily.heading,  // ← Titillium Web
              }}>
                Building Modern Digital Solutions
              </div>
              <div style={{
                fontSize: t.size.xs,
                color: colors.textMuted,
                fontFamily: t.fontFamily.paragraph,  // ← Raleway
              }}>
                Web • Cloud • Analytics • Automation
              </div>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 12px rgba(34,197,94,0.6)" }} />
              <span style={{
                fontSize: t.size.xs,
                color: colors.textMuted,
                fontWeight: t.weight.semibold,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
              }}>
                Available for Projects
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MARQUEE ── */}
      <div style={{ background: colors.primaryDark, padding: "14px 0", overflow: "hidden", position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", animation: "marqueeScroll 20s linear infinite", width: "max-content" }}>
          {[...Array(2)].map((_, rep) => (
            <div key={rep} style={{ display: "flex", alignItems: "center" }}>
              {["Web Development", "Mobile Apps", "Data Analytics", "UI/UX Design", "Cloud & DevOps", "IT Consulting", "Performance Optimization", "Security Solutions"].map((item, i) => (
                <React.Fragment key={i}>
                  <span style={{
                    color: colors.textOnDark85,
                    fontSize: t.size.sm,
                    fontWeight: t.weight.bold,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    padding: "0 20px",
                    fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
                  }}>
                    {item}
                  </span>
                  <span style={{ color: colors.accent, fontSize: 16 }}>◆</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <div id="services" style={{ background: colors.bgPage }}>
        <div ref={servRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
          <SectionHeader label="Our Services" title="End-to-end technology solutions for your business" inView={servIn} isMobile={isMobile} />
          <p style={{
            textAlign: "center",
            color: colors.textBodyAlt,
            fontSize: t.size.lg,
            maxWidth: 680,
            margin: `0 auto ${spacing.xxl * 1.5}px`,
            lineHeight: t.lineHeight.body,
            fontFamily: t.fontFamily.paragraph,  // ← Raleway
            ...animation.fadeIn(servIn, 0.2),
          }}>
            We deliver powerful, secure, and future-ready digital systems tailored to your needs — whether you're launching a website, building an app, migrating to cloud, or automating workflows.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4,1fr)", gap: isMobile ? spacing.xl : 22 }}>
            {SERVICES.map((s, i) => (
              <div key={i} className="service-card" style={{ background: colors.bgCard, borderRadius: radius.xl, padding: isMobile ? "28px 22px" : "36px 28px", border: `2px solid ${colors.borderDefault}`, boxShadow: shadows.cardMd, ...animation.fadeIn(servIn, i * 0.12), cursor: "default" }}>
                <div style={{ fontSize: 36, marginBottom: spacing.xl }}>{s.icon}</div>
                <div style={{ width: 32, height: 3, background: colors.accent, borderRadius: radius.sm, marginBottom: spacing.md }} />
                <h3 style={{
                  fontSize: t.size.xl,
                  fontWeight: t.weight.extrabold,
                  color: colors.textHeading,
                  margin: `0 0 12px`,
                  lineHeight: t.lineHeight.normal,
                  fontFamily: t.fontFamily.heading,  // ← Titillium Web
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontSize: t.size.base,
                  color: colors.textSub,
                  lineHeight: t.lineHeight.body,
                  margin: `0 0 20px`,
                  fontFamily: t.fontFamily.paragraph,  // ← Raleway
                }}>
                  {s.desc}
                </p>
                <a href={WA} target="_blank" rel="noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  color: colors.accent, fontWeight: t.weight.extrabold,
                  fontSize: t.size.xs, letterSpacing: "0.1em",
                  textTransform: "uppercase", textDecoration: "none",
                  fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
                }}>
                  Click Here
                  <ArrowRight size={12} />
                </a>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36, ...animation.fadeIn(servIn, 0.5) }}>
            <button
              onClick={() => navigate("/services")}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: gradients.primary,
                color: colors.white,
                padding: "14px 36px",
                borderRadius: radius.md + 2,
                fontWeight: t.weight.bold,
                fontSize: t.size.base,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                boxShadow: shadows.primary,
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0px)"; }}
            >
              All Services <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <div style={{ background: colors.bgCard }}>
        <div ref={featRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 60, alignItems: "center" }}>
            {/* Left */}
            <div style={{ ...animation.fadeIn(featIn, 0, "left") }}>
              <p style={{
                color: colors.accent,
                fontWeight: t.weight.bold,
                fontSize: t.size.xs,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                margin: `0 0 ${spacing.md}px`,
                fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
              }}>
                Our Features
              </p>
              <h2 style={{
                fontSize: isMobile ? "1.6rem" : "2.1rem",
                fontWeight: 900,
                color: colors.textHeading,
                margin: `0 0 ${spacing.lg}px`,
                lineHeight: t.lineHeight.normal,
                letterSpacing: "-0.02em",
                fontFamily: t.fontFamily.heading,  // ← Titillium Web
              }}>
                Software, Cloud, Data &amp; Automation Solutions
              </h2>
              <p style={{
                color: colors.textBodyAlt,
                fontSize: t.size.lg,
                lineHeight: t.lineHeight.body,
                margin: `0 0 28px`,
                fontFamily: t.fontFamily.paragraph,  // ← Raleway
              }}>
                We specialize in building reliable, scalable, and intelligent digital solutions. Whether it's automating manual tasks, building secure platforms, or analyzing business performance — we help you stay ahead.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
                {FEATURES.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, ...animation.fadeIn(featIn, 0.3 + i * 0.1) }}>
                    <div style={{ width: iconSize.featureSm, height: iconSize.featureSm, borderRadius: radius.full, background: colors.primaryTint7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: t.size.md, flexShrink: 0 }}>{f.icon}</div>
                    <span style={{
                      fontSize: t.size.base,
                      color: "#3a4260",
                      fontWeight: t.weight.semibold,
                      lineHeight: 1.4,
                      fontFamily: t.fontFamily.paragraph,  // ← Raleway
                    }}>
                      {f.title}
                    </span>
                  </div>
                ))}
              </div>
              <a href={WA} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: spacing.sm,
                background: gradients.primary, color: colors.white,
                padding: "13px 26px", borderRadius: radius.md + 2,
                textDecoration: "none", fontWeight: t.weight.bold,
                fontSize: t.size.base, letterSpacing: "0.07em",
                textTransform: "uppercase", boxShadow: shadows.primary,
                fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
              }}>
                Learn More <ArrowRight size={14} />
              </a>
            </div>

            {/* Right: illustration */}
            <div style={{ ...animation.fadeIn(featIn, 0.2, "right") }}>
              <div style={{ background: gradients.primary, borderRadius: radius.xl + 4, padding: isMobile ? "32px 24px" : "44px 40px", position: "relative", overflow: "hidden", minHeight: 280, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ position: "absolute", top: -30, right: -30, width: 200, height: 200, borderRadius: radius.full, border: `2px solid ${colors.accentTint12}` }} />
                <div style={{ position: "absolute", bottom: -50, left: -20, width: 200, height: 200, borderRadius: radius.full, background: colors.accentTint5 }} />
                <div style={{ position: "relative", display: "flex", justifyContent: "center", marginBottom: spacing.xl }}>
                  <div style={{ width: 80, height: 60, background: colors.accentTint15, borderRadius: 12, border: `2px solid ${colors.accentTint25 + "80"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>☁️</div>
                  <div style={{ position: "absolute", top: 10, left: "50%", marginLeft: -64, width: 64, height: 44, background: colors.whiteTint7, borderRadius: 10, border: `1px solid ${colors.whiteTint8}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🖥️</div>
                  <div style={{ position: "absolute", top: 10, left: "50%", marginLeft: 0, width: 64, height: 44, background: colors.whiteTint7, borderRadius: 10, border: `1px solid ${colors.whiteTint8}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>📊</div>
                </div>
                <p style={{
                  color: colors.textOnDark85,
                  fontSize: t.size.lg,
                  fontWeight: t.weight.bold,
                  textAlign: "center",
                  margin: `0 0 ${spacing.sm}px`,
                  fontFamily: t.fontFamily.heading,  // ← Titillium Web
                }}>
                  End-to-End Digital Ecosystem
                </p>
                <p style={{
                  color: colors.textOnDark60,
                  fontSize: t.size.base,
                  textAlign: "center",
                  lineHeight: t.lineHeight.body,
                  margin: 0,
                  fontFamily: t.fontFamily.paragraph,  // ← Raleway
                }}>
                  From concept to deployment — we handle every layer of your digital transformation journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── WEB DEV DETAIL ── */}
      <div style={{ background: colors.bgPage }}>
        <div ref={webRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
          <SectionHeader label="Services" title="Web & Website Development" inView={webIn} isMobile={isMobile} />
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? spacing.xl : 22 }}>
            {WEB_DEV_COLS.map((col, i) => (
              <div
                key={i}
                className="web-col"
                style={{
                  background: colors.bgCard,
                  borderRadius: radius.xl,
                  padding: isMobile ? "28px 22px" : "36px 28px",
                  border: `2px solid ${colors.borderDefault}`,
                  boxShadow: "0 2px 16px rgba(13,43,110,0.05)",
                  ...animation.fadeIn(webIn, i * 0.15),
                  cursor: "default",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <h3 style={{
                  fontSize: t.size.md,
                  fontWeight: t.weight.extrabold,
                  color: col.color,
                  margin: `0 0 20px`,
                  lineHeight: 1.4,
                  fontFamily: t.fontFamily.heading,  // ← Titillium Web
                }}>
                  {col.label}
                </h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", flex: 1 }}>
                  {col.points.map((pt, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: spacing.sm, marginBottom: 10 }}>
                      <div style={{ width: 6, height: 6, borderRadius: radius.full, background: col.color, flexShrink: 0, marginTop: 6 }} />
                      <span style={{
                        fontSize: t.size.base,
                        color: colors.textBody,
                        lineHeight: t.lineHeight.body,
                        fontFamily: t.fontFamily.paragraph,  // ← Raleway
                      }}>
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: -20 }}>
                  <a
                    href={WA}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                      background: col.color, color: colors.white,
                      padding: "12px 24px", borderRadius: radius.md,
                      textDecoration: "none", fontWeight: t.weight.bold,
                      fontSize: t.size.base, letterSpacing: "0.1em",
                      textTransform: "uppercase", transition: "all 0.3s ease",
                      boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
                      fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0px)"; }}
                  >
                    <Rocket size={16} />
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECURITY / FILE MANAGEMENT ── */}
      <div style={{ background: colors.bgCard }}>
        <div ref={secRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 60, alignItems: "center" }}>
            {/* Left visual */}
            <div style={{ ...animation.fadeIn(secIn, 0, "left"), order: isMobile ? 2 : 1 }}>
              <div style={{ background: gradients.featureCard, borderRadius: radius.xl + 4, padding: "40px", display: "flex", flexDirection: "column", gap: spacing.lg }}>
                {["🔒 SSL & Encrypted Data Transfer", "🛡️ DDoS Protection Layer", "⚡ CDN & Performance Boost", "🔁 Auto Backups & Recovery"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: spacing.md, background: colors.bgCard, borderRadius: 12, padding: "16px 20px", boxShadow: shadows.section, ...animation.fadeIn(secIn, 0.2 + i * 0.1) }}>
                    <span style={{ fontSize: 18 }}>{item.split(" ")[0]}</span>
                    <span style={{
                      fontSize: t.size.base,
                      fontWeight: t.weight.semibold,
                      color: colors.textHeading,
                      fontFamily: t.fontFamily.paragraph,  // ← Raleway
                    }}>
                      {item.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right text */}
            <div style={{ ...animation.fadeIn(secIn, 0.2, "right"), order: isMobile ? 1 : 2 }}>
              <p style={{
                color: colors.accent,
                fontWeight: t.weight.bold,
                fontSize: t.size.xs,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                margin: `0 0 ${spacing.md}px`,
                fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
              }}>
                File Management
              </p>
              <h2 style={{
                fontSize: isMobile ? "1.5rem" : "2rem",
                fontWeight: 900,
                color: colors.textHeading,
                margin: `0 0 28px`,
                lineHeight: t.lineHeight.normal,
                fontFamily: t.fontFamily.heading,  // ← Titillium Web
              }}>
                Safe and Secure Web Application
              </h2>
              {SECURITY_FEATURES.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: spacing.xl, marginBottom: 22, ...animation.fadeIn(secIn, 0.3 + i * 0.12) }}>
                  <div style={{ width: iconSize.feature, height: iconSize.feature, borderRadius: 12, background: gradients.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{f.icon}</div>
                  <div>
                    <h4 style={{
                      fontSize: t.size.md,
                      fontWeight: t.weight.extrabold,
                      color: colors.textHeading,
                      margin: `0 0 ${spacing.xs / 2}px`,
                      fontFamily: t.fontFamily.heading,  // ← Titillium Web
                    }}>
                      {f.title}
                    </h4>
                    <p style={{
                      fontSize: t.size.base,
                      color: colors.textSub,
                      lineHeight: t.lineHeight.body,
                      margin: 0,
                      fontFamily: t.fontFamily.paragraph,  // ← Raleway
                    }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
              <a href={WA} target="_blank" rel="noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: gradients.primary, color: colors.white,
                padding: "13px 28px", borderRadius: radius.md + 2,
                textDecoration: "none", fontWeight: t.weight.bold,
                fontSize: t.size.base, letterSpacing: "0.07em",
                textTransform: "uppercase", boxShadow: shadows.primary,
                marginTop: spacing.sm,
                fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
              }}>
                Learn More <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div ref={statsRef} style={{ background: gradients.cta, padding: isMobile ? "48px 16px" : "56px 24px" }}>
        <div style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: spacing.xl, textAlign: "center" }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ ...animation.fadeIn(statsIn, i * 0.12) }}>
              <div style={{ fontSize: isMobile ? "2.4rem" : "3rem", fontWeight: 900, color: colors.accent, lineHeight: 1, letterSpacing: "-0.04em" }}>{s.num}</div>
              <div style={{
                fontSize: t.size.sm,
                fontWeight: t.weight.bold,
                color: colors.textOnDark60,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: spacing.sm,
                fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TESTIMONIALS ── */}
      <div style={{ background: colors.bgPage }}>
        <div ref={testRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
          <SectionHeader label="Client Testimonials" title="What Our Clients Say" inView={testIn} isMobile={isMobile} />
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: 24 }}>
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  padding: isMobile ? "26px 22px" : "32px 28px",
                  border: "2px solid rgba(26,62,140,0.09)",
                  boxShadow: "0 4px 20px rgba(26,62,140,0.07)",
                  opacity: testIn ? 1 : 0,
                  transform: testIn ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 0.5s ease ${idx * 0.12}s, transform 0.5s ease ${idx * 0.12}s`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: 3 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 16 16">
                      <path d="M8 1l1.8 4h4.2l-3.4 2.5 1.3 4.1L8 9.1l-3.9 2.5 1.3-4.1L2 5h4.2z" fill="#e8a020" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p style={{
                  fontSize: 14,
                  color: "#4a5275",
                  lineHeight: 1.8,
                  margin: 0,
                  fontStyle: "italic",
                  fontFamily: t.fontFamily.paragraph,  // ← Raleway
                }}>
                  "{item.text}"
                </p>

                {/* User */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid rgba(26,62,140,0.08)", paddingTop: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                    background: "linear-gradient(135deg, #0d2b6e, #1a3e8c)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#e8a020", fontWeight: 800, fontSize: 14,
                    letterSpacing: "0.05em",
                    fontFamily: t.fontFamily.heading,  // ← Titillium Web
                  }}>
                    {item.avatar}
                  </div>
                  <div>
                    <p style={{
                      fontSize: 14, fontWeight: 800, color: "#0d2b6e", margin: "0 0 2px",
                      fontFamily: t.fontFamily.heading,  // ← Titillium Web
                    }}>
                      {item.name}
                    </p>
                    <p style={{
                      fontSize: 12, color: "#8a94b0", margin: 0, fontWeight: 500,
                      fontFamily: t.fontFamily.paragraph,  // ← Raleway
                    }}>
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA STRIP ── */}
      <div style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: isMobile ? `0 ${layout.sectionPadXMob}px 52px` : `0 ${layout.sectionPadX}px 64px` }}>
        <div style={{ background: gradients.cta, borderRadius: isMobile ? radius.lg : radius.xl + 2, padding: isMobile ? "40px 24px" : "56px 48px", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: isMobile ? spacing.xl : 32, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -40, right: 80, width: 200, height: 200, borderRadius: radius.full, border: `2px solid ${colors.accentTint12}`, pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -60, right: -40, width: 260, height: 260, borderRadius: radius.full, background: colors.accentTint4, pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <p style={{
              color: colors.accent, fontWeight: t.weight.bold,
              fontSize: t.size.sm, letterSpacing: "0.1em",
              textTransform: "uppercase", margin: `0 0 10px`,
              fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
            }}>
              Ready to get started?
            </p>
            <h3 style={{
              color: colors.white, fontSize: isMobile ? "1.3rem" : "1.8rem",
              fontWeight: t.weight.extrabold, margin: `0 0 ${spacing.sm}px`,
              lineHeight: t.lineHeight.normal,
              fontFamily: t.fontFamily.heading,  // ← Titillium Web
            }}>
              Let's build something great together
            </h3>
            <p style={{
              color: colors.textOnDark60, fontSize: t.size.md, margin: 0,
              fontFamily: t.fontFamily.paragraph,  // ← Raleway
            }}>
              Talk to our team — free consultation, no commitment.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", width: isMobile ? "100%" : "auto" }}>
            <a href="tel:+918484905526" style={{
              display: "inline-block", background: colors.accent, color: colors.white,
              fontWeight: t.weight.bold, fontSize: t.size.base,
              letterSpacing: "0.06em", textTransform: "uppercase",
              padding: "14px 28px", borderRadius: radius.md,
              textDecoration: "none", boxShadow: shadows.ctaLg,
              flex: isMobile ? "1" : "none", textAlign: "center",
              fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
            }}>
              📞 Call Now
            </a>
            <a href={WA} target="_blank" rel="noreferrer" style={{
              display: "inline-block", background: colors.whiteTint10, color: colors.white,
              fontWeight: t.weight.bold, fontSize: t.size.base,
              letterSpacing: "0.06em", textTransform: "uppercase",
              padding: "14px 28px", borderRadius: radius.md,
              textDecoration: "none", border: `1px solid ${colors.borderLight}`,
              flex: isMobile ? "1" : "none", textAlign: "center",
              fontFamily: t.fontFamily.secondaryHeading,  // ← Josefin Sans
            }}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer/></>
  );
};

export default Home;


// import React, { useState, useEffect, useRef } from "react";
// import theme from "../theme/theme";
// import { useNavigate } from "react-router-dom";
// import { MessageCircle, ChevronDown, ArrowRight, Phone, MoveRight, Info, Rocket } from "lucide-react";

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
// const SERVICES = [
//   { icon: "🖥️", title: "Web Development", desc: "We design and build responsive, high-performance websites that boost your brand, improve engagement, and convert visitors into customers.", color: colors.primaryDark },
//   { icon: "☁️", title: "Cloud Services", desc: "Secure, scalable cloud infrastructure setup, DevOps automation, and cloud migration tailored for long-term growth.", color: colors.primary },
//   { icon: "📊", title: "Analytical Services", desc: "Transform your raw data into meaningful insights with advanced dashboards, analytics pipelines, and reporting automation.", color: colors.primaryDark },
//   { icon: "📱", title: "App Development", desc: "End-to-end mobile and web application development with modern UI/UX, APIs, integrations, and robust architecture.", color: colors.primary },
// ];

// const FEATURES = [
//   { icon: "🔷", title: "Custom software applications" },
//   { icon: "☁️", title: "Cloud infrastructure setup" },
//   { icon: "⚙️", title: "Business automation workflows" },
//   { icon: "🗄️", title: "Data engineering" },
//   { icon: "📈", title: "Dashboards & analytics" },
// ];

// const WEB_DEV_COLS = [
//   {
//     label: "Responsive web apps",
//     color: colors.accent,
//     points: [
//       "Mobile-first, fully responsive layouts that adapt to all screen sizes.",
//       "Smooth UI/UX using modern frameworks like React, Vue, and responsive CSS techniques.",
//       "Fast performance with optimized assets, lazy loading, and code-splitting.",
//       "Touch-friendly navigation and interactive elements for mobile users.",
//       "PWA-ready architecture offering offline access and app-like experiences.",
//       "Consistent user experience across all devices and browsers.",
//     ],
//   },
//   {
//     label: "API integration & microservices",
//     color: colors.primary,
//     points: [
//       "Seamless integration of third-party APIs for payments, authentication, and business tools.",
//       "Scalable microservice architecture ensuring modular, independent, and reliable systems.",
//       "Secure API communication using standards like OAuth2, JWT, and SSL/TLS.",
//       "Real-time data exchange using REST APIs, GraphQL, and event-driven services.",
//       "Cloud-ready deployment with containerized microservices using Docker & Kubernetes.",
//     ],
//   },
//   {
//     label: "E-commerce, payment integrations, PWA support",
//     color: colors.green,
//     points: [
//       "End-to-end e-commerce solutions with cart, checkout, product management, and order tracking.",
//       "Secure payment gateway integrations including Razorpay, Stripe, PayPal, and UPI.",
//       "Mobile-first design for smooth shopping experiences on all devices.",
//       "PWA-enabled features like offline access, push notifications, and app-like performance.",
//       "Fast, optimized, and scalable architecture for high-traffic online stores.",
//     ],
//   },
// ];

// const SECURITY_FEATURES = [
//   { icon: "🌐", title: "Modern cloud hosting setup", desc: "Modern cloud hosting setup with encrypted data transfers & backups." },
//   { icon: "🔧", title: "Scalable architecture", desc: "Scalable architecture to handle growth & peak loads." },
//   { icon: "⚡", title: "Performance-optimized systems", desc: "Performance-optimized systems ensuring smooth operations." },
// ];

// const TESTIMONIALS = [
//   {
//     text: "RAM helped us streamline our operations with a modern, high-performance website and smart analytics dashboards. Their strong understanding of both business and technology made the entire transformation smooth and impactful.",
//     name: "Priya Patil",
//     role: "Founder",
//     avatar: "PP",
//   },

//   {
//     text: "RAM developed our counselling platform with a clean design and smooth user experience. Their team clearly understood our requirements and delivered a reliable, professional solution for our counselling services.",
//     name: "Reena Bhutada",
//     role: "Director",
//     avatar: "RB",
//   },

//   {
//     text: "RAM built our mobile app with precision and clarity, delivering a solution that matched our goals exactly. Their communication, technical expertise, and problem-solving skills consistently stood out throughout the project.",
//     name: "Ravi Kulkarni",
//     role: "Operations Head",
//     avatar: "RK",
//   },
// ];

// const STATS = [
//   { num: "⚡", label: "Fast Delivery" },
//   { num: "🔒", label: "Secure Solutions" },
//   { num: "☁️", label: "Cloud Ready" },
//   { num: "💡", label: "Smart Innovation" },
// ];

// // ── SECTION HEADER ───────────────────────────────────────────────────
// const SectionHeader = ({ label, title, inView, isMobile, dark = false }) => (
//   <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 52, ...animation.fadeIn(inView) }}>
//     <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 10 }}>
//       <div style={{ width: 28, height: 3, background: colors.accent, borderRadius: radius.sm }} />
//       <span style={{ color: colors.accent, fontWeight: t.weight.bold, fontSize: t.size.xs, letterSpacing: "0.14em", textTransform: "uppercase" }}>{label}</span>
//       <div style={{ width: 28, height: 3, background: colors.accent, borderRadius: radius.sm }} />
//     </div>
//     <h2 style={{ fontSize: isMobile ? "1.5rem" : "2.1rem", fontWeight: t.weight.extrabold, color: dark ? colors.white : colors.textHeading, margin: 0, letterSpacing: "-0.015em" }}>{title}</h2>
//   </div>
// );

// // ── WHATSAPP LINK ─────────────────────────────────────────────────────
// const WA = "https://wa.me/918484905526";

// // ── MAIN ─────────────────────────────────────────────────────────────
// const Home = () => {
//   const width = useWindowWidth();
//   const isMobile = width < 640;
//   const isTablet = width >= 640 && width < 1024;
//   const navigate = useNavigate();

//   const [heroRef, heroIn] = useInView(0.05);
//   const [servRef, servIn] = useInView(0.1);
//   const [featRef, featIn] = useInView(0.1);
//   const [webRef, webIn] = useInView(0.1);
//   const [secRef, secIn] = useInView(0.1);
//   const [testRef, testIn] = useInView(0.1);
//   const [statsRef, statsIn] = useInView(0.1);
//   const [activeTest, setActiveTest] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => setActiveTest(p => (p + 1) % TESTIMONIALS.length), 4500);
//     return () => clearInterval(id);
//   }, []);

//   /* ── shared section padding ── */
//   const secPad = isMobile
//     ? `${layout.sectionPadYMob}px ${layout.sectionPadXMob}px`
//     : `${layout.sectionPadY}px ${layout.sectionPadX}px`;

//   return (
//     <div style={{ minHeight: "100vh", background: colors.bgPage, fontFamily: t.fontFamily, overflowX: "hidden" ,marginTop: -60}}>
//       <style>{`
//         @keyframes floatUp    { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes slideRight { from{opacity:0;transform:translateX(-30px)} to{opacity:1;transform:translateX(0)} }
//         @keyframes glowPulse  { 0%,100%{box-shadow:0 0 0 0 rgba(232,160,32,0.4)} 50%{box-shadow:0 0 0 16px rgba(232,160,32,0)} }
//         @keyframes spinRing   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
//         @keyframes spinRingRev{ from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
//         @keyframes marqueeScroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
//         .service-card:hover { transform: translateY(-8px) !important; box-shadow: ${shadows.cardMdHover} !important; }
//         .service-card { transition: all ${transitions.slow} !important; }
//         .web-col:hover { background: ${colors.bgLight} !important; }
//       `}</style>

//       {/* ── HERO ── */}
//       <div ref={heroRef} style={{ position: "relative", minHeight: isMobile ? "auto" : "100vh", display: "flex", flexDirection: isMobile ? "column" : "row", overflow: "hidden", background: colors.bgPage }}>

//         {/* LEFT DARK PANEL */}
//         <div style={{
//           flex: isMobile ? "none" : "0 0 54%",
//           background: colors.primaryDark,
//           position: "relative",
//           overflow: "hidden",
//           padding: isMobile ? "72px 24px 48px" : "0",
//           display: "flex",
//           alignItems: "center",
//           minHeight: isMobile ? "auto" : "100vh",
//           clipPath: isMobile ? "none" : "polygon(0 0, 92% 0, 100% 100%, 0 100%)",
//         }}>
//           {/* Dot texture */}
//           <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle, ${colors.whiteTint6} 1px, transparent 1px)`, backgroundSize: "28px 28px" }} />
//           {/* Watermark */}
//           <div style={{ position: "absolute", bottom: -30, right: isMobile ? -10 : -50, fontSize: isMobile ? "140px" : "220px", fontWeight: 900, color: "transparent", WebkitTextStroke: `2px ${colors.accentTint10}`, userSelect: "none", letterSpacing: "-0.05em", pointerEvents: "none" }}>RAM</div>
//           {/* Rings */}
//           {!isMobile && (<>
//             <div style={{ position: "absolute", top: 60, right: 20, width: 120, height: 120, borderRadius: radius.full, border: `1.5px dashed ${colors.accentTint20}`, animation: "spinRing 18s linear infinite" }} />
//             <div style={{ position: "absolute", top: 80, right: 40, width: 80, height: 80, borderRadius: radius.full, border: `1.5px solid ${colors.whiteTint8}`, animation: "spinRingRev 12s linear infinite" }} />
//           </>)}

//           <div style={{ position: "relative", zIndex: 2, padding: isMobile ? "0" : "64px 56px 64px 60px", maxWidth: isMobile ? "100%" : 560 }}>
//             {/* Eyebrow */}
//             <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, opacity: heroIn ? 1 : 0, animation: heroIn ? "slideRight 0.6s ease forwards" : "none" }}>
//               <div style={{ width: 36, height: 3, background: colors.accent, borderRadius: radius.sm }} />
//               <span style={{ color: colors.accent, fontSize: t.size.xs, fontWeight: t.weight.extrabold, letterSpacing: "0.22em", textTransform: "uppercase" }}>Right Analysis Matters</span>
//             </div>

//             {/* Headline */}
//             <div style={{ marginBottom: spacing.xl }}>
//               {["Right Analysis", "Matters",  "Pvt. Ltd."].map((line, i) => (
//                 <div key={i} style={{ overflow: "hidden", lineHeight: 1.05, marginBottom: spacing.xs }}>
//                   <div style={{
//                     fontSize: isMobile ? (i < 2 ? "2.2rem" : "1.8rem") : (i < 2 ? "3.6rem" : "2.8rem"),
//                     fontWeight: i % 2 === 0 ? 900 : 300,
//                     color: i === 1 ? colors.accent : colors.white,
//                     fontStyle: i === 3 ? "italic" : "normal",
//                     letterSpacing: i === 0 ? "-0.04em" : "-0.02em",
//                     opacity: heroIn ? 1 : 0,
//                     transform: heroIn ? "translateY(0)" : "translateY(100%)",
//                     transition: `opacity 0.7s ease ${0.1 + i * 0.12}s, transform 0.7s ease ${0.1 + i * 0.12}s`,
//                     display: "block",
//                   }}>{line}</div>
//                 </div>
//               ))}
//             </div>

//             <p style={{ color: colors.textOnDark55, fontSize: isMobile ? t.size.base : t.size.md, margin: `0 0 12px`, fontWeight: t.weight.bold, letterSpacing: colors.letterSpacingWider, textTransform: "uppercase", opacity: heroIn ? 1 : 0, transition: "all 0.8s ease 0.5s" }}>
//               Software, Cloud, Data &amp; Automation Solutions
//             </p>
//             <p style={{ color: colors.textOnDark60, fontSize: isMobile ? t.size.base : t.size.lg, lineHeight: t.lineHeight.body, margin: `0 0 36px`, maxWidth: 440, opacity: heroIn ? 1 : 0, transition: "all 0.8s ease 0.58s" }}>
//               We build modern digital solutions that help businesses scale faster, operate smarter, and deliver exceptional customer experiences.
//             </p>

//            <div style={{ display: "flex", gap: spacing.md, flexWrap: "wrap", opacity: heroIn ? 1 : 0, transition: "all 0.8s ease 0.68s" }}>

//   <a href={WA} target="_blank" rel="noreferrer"
//     style={{
//       display: "inline-flex", alignItems: "center", gap: 8,
//       background: colors.accent, color: colors.white,
//       padding: "14px 30px", borderRadius: radius.md,
//       textDecoration: "none", fontWeight: t.weight.extrabold,
//       fontSize: t.size.sm, letterSpacing: "0.1em",
//       textTransform: "uppercase",
//       animation: "glowPulse 2.5s ease-in-out infinite",
//     }}
//   >
//     <Info size={17} />
//     Know More
//   </a>

//   <a href="#services"
//     style={{
//       display: "inline-flex", alignItems: "center", gap: 8,
//       background: "transparent", color: colors.textOnDark85,
//       padding: "14px 26px", borderRadius: radius.md,
//       textDecoration: "none", fontWeight: t.weight.semibold,
//       fontSize: t.size.sm, letterSpacing: "0.08em",
//       textTransform: "uppercase", border: `1px solid ${colors.borderLight}`,
//     }}
//   >
//     Our Services
//     <ChevronDown size={16} />
//   </a>

// </div>
//           </div>
//         </div>

//         {/* RIGHT PANEL */}
//         <div style={{ flex: 1, background: colors.bgPage, display: "flex", flexDirection: "column", justifyContent: "center", padding: isMobile ? "40px 24px 52px" : "64px 48px 64px 80px", position: "relative", overflow: "hidden" }}>
//           <div style={{ position: "absolute", top: -80, right: -80, width: 320, height: 320, borderRadius: radius.full, background: colors.primaryTint5, zIndex: 0 }} />
//           <div style={{ position: "absolute", bottom: 40, left: isMobile ? -60 : -20, width: 180, height: 180, borderRadius: radius.full, border: `2px solid ${colors.accentTint15}`, zIndex: 0 }} />

//           {/* Stats */}
//           <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: isMobile ? spacing.lg : 28, marginBottom: isMobile ? 28 : 40 }}>
//             {STATS.map((item, i) => (
//               <div key={i} style={{ opacity: heroIn ? 1 : 0, transition: `all 0.6s ease ${0.3 + i * 0.13}s`, borderLeft: "3px solid", borderColor: i % 2 === 0 ? colors.accent : colors.primaryDark, paddingLeft: spacing.xl }}>
//                 <div style={{ fontSize: isMobile ? "2rem" : "2.8rem", fontWeight: 900, color: colors.textHeading, lineHeight: 1, letterSpacing: "-0.04em" }}>{item.num}</div>
//                 <div style={{ fontSize: t.size.xs, fontWeight: t.weight.bold, color: colors.textMuted, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 6 }}>{item.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* Tags */}
//           <div style={{ position: "relative", zIndex: 1, display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28, opacity: heroIn ? 1 : 0, transition: "all 0.7s ease 0.75s" }}>
//             {["Web Development", "Mobile Apps", "Data Analytics", "UI/UX Design", "Cloud & DevOps", "IT Consulting"].map((tag, i) => (
//               <span key={i} style={{ fontSize: t.size.xs, fontWeight: t.weight.bold, color: i % 3 === 1 ? colors.accent : colors.primaryDark, background: i % 3 === 1 ? colors.accentTint10 : colors.primaryTint7, border: `1px solid ${i % 3 === 1 ? colors.accentTint25 : colors.primaryTint12}`, borderRadius: radius.pill, padding: "6px 14px", letterSpacing: colors.letterSpacingWider, textTransform: "uppercase" }}>
//                 {tag}
//               </span>
//             ))}
//           </div>

//           <div style={{ position: "relative", zIndex: 1, height: 1, background: `linear-gradient(90deg,${colors.borderDefault},transparent)`, marginBottom: 28, opacity: heroIn ? 1 : 0, transition: "all 0.7s ease 0.85s" }} />

//           {/* Trust row */}
//         <div
//   style={{
//     position: "relative",
//     zIndex: 1,
//     display: "flex",
//     alignItems: "center",
//     gap: spacing.xl,
//     opacity: heroIn ? 1 : 0,
//     transition: "all 0.7s ease 0.95s",
//     flexWrap: "wrap",
//   }}
// >

//   {/* Text */}
//   <div>
//     <div
//       style={{
//         fontSize: t.size.base,
//         fontWeight: t.weight.bold,
//         color: colors.textHeading,
//       }}
//     >
//       Building Modern Digital Solutions
//     </div>

//     <div
//       style={{
//         fontSize: t.size.xs,
//         color: colors.textMuted,
//       }}
//     >
//       Web • Cloud • Analytics • Automation
//     </div>
//   </div>

//   {/* Right mini indicator */}
//   <div
//     style={{
//       marginLeft: "auto",
//       display: "flex",
//       alignItems: "center",
//       gap: 8,
//     }}
//   >
//     <div
//       style={{
//         width: 10,
//         height: 10,
//         borderRadius: "50%",
//         background: "#22c55e",
//         boxShadow: "0 0 12px rgba(34,197,94,0.6)",
//       }}
//     />

//     <span
//       style={{
//         fontSize: t.size.xs,
//         color: colors.textMuted,
//         fontWeight: t.weight.semibold,
//         letterSpacing: "0.05em",
//         textTransform: "uppercase",
//       }}
//     >
//       Available for Projects
//     </span>
//   </div>
// </div>
//         </div>
//       </div>

//       {/* ── MARQUEE ── */}
//       <div style={{ background: colors.primaryDark, padding: "14px 0", overflow: "hidden", position: "relative", zIndex: zIndex => 2 }}>
//         <div style={{ display: "flex", animation: "marqueeScroll 20s linear infinite", width: "max-content" }}>
//           {[...Array(2)].map((_, rep) => (
//             <div key={rep} style={{ display: "flex", alignItems: "center" }}>
//               {["Web Development", "Mobile Apps", "Data Analytics", "UI/UX Design", "Cloud & DevOps", "IT Consulting", "Performance Optimization", "Security Solutions"].map((item, i) => (
//                 <React.Fragment key={i}>
//                   <span style={{ color: colors.textOnDark85, fontSize: t.size.sm, fontWeight: t.weight.bold, letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap", padding: "0 20px" }}>{item}</span>
//                   <span style={{ color: colors.accent, fontSize: 16 }}>◆</span>
//                 </React.Fragment>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── SERVICES ── */}
//       <div id="services" style={{ background: colors.bgPage }}>
//         <div ref={servRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
//           <SectionHeader label="Our Services" title="End-to-end technology solutions for your business" inView={servIn} isMobile={isMobile} />
//           <p style={{ textAlign: "center", color: colors.textBodyAlt, fontSize: t.size.lg, maxWidth: 680, margin: `0 auto ${spacing.xxl * 1.5}px`, lineHeight: t.lineHeight.body, ...animation.fadeIn(servIn, 0.2) }}>
//             We deliver powerful, secure, and future-ready digital systems tailored to your needs — whether you're launching a website, building an app, migrating to cloud, or automating workflows.
//           </p>
//           <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4,1fr)", gap: isMobile ? spacing.xl : 22 }}>
//             {SERVICES.map((s, i) => (
//               <div key={i} className="service-card" style={{ background: colors.bgCard, borderRadius: radius.xl, padding: isMobile ? "28px 22px" : "36px 28px", border: `2px solid ${colors.borderDefault}`, boxShadow: shadows.cardMd, ...animation.fadeIn(servIn, i * 0.12), cursor: "default" }}>
//                 <div style={{ fontSize: 36, marginBottom: spacing.xl }}>{s.icon}</div>
//                 <div style={{ width: 32, height: 3, background: colors.accent, borderRadius: radius.sm, marginBottom: spacing.md }} />
//                 <h3 style={{ fontSize: t.size.xl, fontWeight: t.weight.extrabold, color: colors.textHeading, margin: `0 0 12px`, lineHeight: t.lineHeight.normal }}>{s.title}</h3>
//                 <p style={{ fontSize: t.size.base, color: colors.textSub, lineHeight: t.lineHeight.body, margin: `0 0 20px` }}>{s.desc}</p>
//                 <a href={WA} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: colors.accent, fontWeight: t.weight.extrabold, fontSize: t.size.xs, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
//                   Click Here  
//                   <ArrowRight size={12} />
//                   {/* <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke={colors.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg> */}
//                 </a>
//               </div>
//             ))}
//           </div>
//           <div
//             style={{
//               textAlign: "center",
//               marginTop: 36,
//               ...animation.fadeIn(servIn, 0.5),
//             }}
//           >
//             <button
//               onClick={() => navigate("/services")}
//               style={{
//                 display: "inline-block",
//                 background: gradients.primary,
//                 color: colors.white,
//                 padding: "14px 36px",
//                 borderRadius: radius.md + 2,
//                 textDecoration: "none",
//                 fontWeight: t.weight.bold,
//                 fontSize: t.size.base,
//                 letterSpacing: "0.08em",
//                 textTransform: "uppercase",
//                 boxShadow: shadows.primary,
//                 border: "none",
//                 cursor: "pointer",
//                 transition: "all 0.3s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-3px)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0px)";
//               }}
//             >
//               All Services  <ArrowRight size={16} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* ── FEATURES ── */}
//       <div style={{ background: colors.bgCard }}>
//         <div ref={featRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
//           <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 60, alignItems: "center" }}>
//             {/* Left */}
//             <div style={{ ...animation.fadeIn(featIn, 0, "left") }}>
//               <p style={{ color: colors.accent, fontWeight: t.weight.bold, fontSize: t.size.xs, letterSpacing: "0.14em", textTransform: "uppercase", margin: `0 0 ${spacing.md}px` }}>Our Features</p>
//               <h2 style={{ fontSize: isMobile ? "1.6rem" : "2.1rem", fontWeight: 900, color: colors.textHeading, margin: `0 0 ${spacing.lg}px`, lineHeight: t.lineHeight.normal, letterSpacing: t.letterSpacing ? t.letterSpacing.tight : "-0.02em" }}>
//                 Software, Cloud, Data &amp; Automation Solutions
//               </h2>
//               <p style={{ color: colors.textBodyAlt, fontSize: t.size.lg, lineHeight: t.lineHeight.body, margin: `0 0 28px` }}>
//                 We specialize in building reliable, scalable, and intelligent digital solutions. Whether it's automating manual tasks, building secure platforms, or analyzing business performance — we help you stay ahead.
//               </p>
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
//                 {FEATURES.map((f, i) => (
//                   <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, ...animation.fadeIn(featIn, 0.3 + i * 0.1) }}>
//                     <div style={{ width: iconSize.featureSm, height: iconSize.featureSm, borderRadius: radius.full, background: colors.primaryTint7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: t.size.md, flexShrink: 0 }}>{f.icon}</div>
//                     <span style={{ fontSize: t.size.base, color: "#3a4260", fontWeight: t.weight.semibold, lineHeight: 1.4 }}>{f.title}</span>
//                   </div>
//                 ))}
//               </div>
//               <a href={WA} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: spacing.sm, background: gradients.primary, color: colors.white, padding: "13px 26px", borderRadius: radius.md + 2, textDecoration: "none", fontWeight: t.weight.bold, fontSize: t.size.base, letterSpacing: "0.07em", textTransform: "uppercase", boxShadow: shadows.primary }}>
//                 Learn More   <ArrowRight size={14} />
//                 {/* <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 4l3 3-3 3" stroke={colors.white} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg> */}
//               </a>
//             </div>

//             {/* Right: illustration */}
//             <div style={{ ...animation.fadeIn(featIn, 0.2, "right") }}>
//               <div style={{ background: gradients.primary, borderRadius: radius.xl + 4, padding: isMobile ? "32px 24px" : "44px 40px", position: "relative", overflow: "hidden", minHeight: 280, display: "flex", flexDirection: "column", justifyContent: "center" }}>
//                 <div style={{ position: "absolute", top: -30, right: -30, width: 200, height: 200, borderRadius: radius.full, border: `2px solid ${colors.accentTint12}` }} />
//                 <div style={{ position: "absolute", bottom: -50, left: -20, width: 200, height: 200, borderRadius: radius.full, background: colors.accentTint5 }} />
//                 <div style={{ position: "relative", display: "flex", justifyContent: "center", marginBottom: spacing.xl }}>
//                   <div style={{ width: 80, height: 60, background: colors.accentTint15, borderRadius: 12, border: `2px solid ${colors.accentTint25 + "80"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>☁️</div>
//                   <div style={{ position: "absolute", top: 10, left: "50%", marginLeft: -64, width: 64, height: 44, background: colors.whiteTint7, borderRadius: 10, border: `1px solid ${colors.whiteTint8}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🖥️</div>
//                   <div style={{ position: "absolute", top: 10, left: "50%", marginLeft: 0, width: 64, height: 44, background: colors.whiteTint7, borderRadius: 10, border: `1px solid ${colors.whiteTint8}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>📊</div>
//                 </div>
//                 <p style={{ color: colors.textOnDark85, fontSize: t.size.lg, fontWeight: t.weight.bold, textAlign: "center", margin: `0 0 ${spacing.sm}px` }}>End-to-End Digital Ecosystem</p>
//                 <p style={{ color: colors.textOnDark60, fontSize: t.size.base, textAlign: "center", lineHeight: t.lineHeight.body, margin: 0 }}>From concept to deployment — we handle every layer of your digital transformation journey.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── WEB DEV DETAIL ── */}
//    <div style={{ background: colors.bgPage }}>
//   <div
//     ref={webRef}
//     style={{
//       maxWidth: layout.maxWidthGrid,
//       margin: "0 auto",
//       padding: secPad,
//     }}
//   >
//     <SectionHeader
//       label="Services"
//       title="Web & Website Development"
//       inView={webIn}
//       isMobile={isMobile}
//     />

//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: isMobile
//           ? "1fr"
//           : "repeat(3,1fr)",
//         gap: isMobile ? spacing.xl : 22,
//       }}
//     >
//       {WEB_DEV_COLS.map((col, i) => (
//         <div
//           key={i}
//           className="web-col"
//           style={{
//             background: colors.bgCard,
//             borderRadius: radius.xl,
//             padding: isMobile ? "28px 22px" : "36px 28px",
//             border: `2px solid ${colors.borderDefault}`,
//             boxShadow: "0 2px 16px rgba(13,43,110,0.05)",
//             ...animation.fadeIn(webIn, i * 0.15),
//             cursor: "default",

//             /* IMPORTANT */
//             display: "flex",
//             flexDirection: "column",
//             height: "100%",
//           }}
//         >
//           {/* Heading */}
//           <h3
//             style={{
//               fontSize: t.size.md,
//               fontWeight: t.weight.extrabold,
//               color: col.color,
//               margin: `0 0 20px`,
//               lineHeight: 1.4,
//             }}
//           >
//             {col.label}
//           </h3>

//           {/* Content */}
//           <ul
//             style={{
//               margin: 0,
//               padding: 0,
//               listStyle: "none",
//               flex: 1,
//             }}
//           >
//             {col.points.map((pt, j) => (
//               <li
//                 key={j}
//                 style={{
//                   display: "flex",
//                   alignItems: "flex-start",
//                   gap: spacing.sm,
//                   marginBottom: 10,
//                 }}
//               >
//                 <div
//                   style={{
//                     width: 6,
//                     height: 6,
//                     borderRadius: radius.full,
//                     background: col.color,
//                     flexShrink: 0,
//                     marginTop: 6,
//                   }}
//                 />

//                 <span
//                   style={{
//                     fontSize: t.size.base,
//                     color: colors.textBody,
//                     lineHeight: t.lineHeight.body,
//                   }}
//                 >
//                   {pt}
//                 </span>
//               </li>
//             ))}
//           </ul>

//           {/* Button */}
//           <div style={{ marginTop: -20}}>
//             <a
//               href={WA}
//               target="_blank"
//               rel="noreferrer"
//               style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: 8,
//                 background: col.color,
//                 color: colors.white,
//                 padding: "12px 24px",
//                 borderRadius: radius.md,
//                 textDecoration: "none",
//                   fontWeight: t.weight.bold,
//                 fontSize: t.size.base,
//                 letterSpacing: "0.1em",
//                 textTransform: "uppercase",
//                 transition: "all 0.3s ease",
//                 boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform =
//                   "translateY(-3px)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform =
//                   "translateY(0px)";
//               }}
//             >
//               <Rocket size={16} />
//               Get Started
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>

//       {/* ── SECURITY / FILE MANAGEMENT ── */}
//       <div style={{ background: colors.bgCard }}>
//         <div ref={secRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
//           <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 60, alignItems: "center" }}>
//             {/* Left visual */}
//             <div style={{ ...animation.fadeIn(secIn, 0, "left"), order: isMobile ? 2 : 1 }}>
//               <div style={{ background: gradients.featureCard, borderRadius: radius.xl + 4, padding: "40px", display: "flex", flexDirection: "column", gap: spacing.lg }}>
//                 {["🔒 SSL & Encrypted Data Transfer", "🛡️ DDoS Protection Layer", "⚡ CDN & Performance Boost", "🔁 Auto Backups & Recovery"].map((item, i) => (
//                   <div key={i} style={{ display: "flex", alignItems: "center", gap: spacing.md, background: colors.bgCard, borderRadius: 12, padding: "16px 20px", boxShadow: shadows.section, ...animation.fadeIn(secIn, 0.2 + i * 0.1) }}>
//                     <span style={{ fontSize: 18 }}>{item.split(" ")[0]}</span>
//                     <span style={{ fontSize: t.size.base, fontWeight: t.weight.semibold, color: colors.textHeading }}>{item.split(" ").slice(1).join(" ")}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/* Right text */}
//             <div style={{ ...animation.fadeIn(secIn, 0.2, "right"), order: isMobile ? 1 : 2 }}>
//               <p style={{ color: colors.accent, fontWeight: t.weight.bold, fontSize: t.size.xs, letterSpacing: "0.14em", textTransform: "uppercase", margin: `0 0 ${spacing.md}px` }}>File Management</p>
//               <h2 style={{ fontSize: isMobile ? "1.5rem" : "2rem", fontWeight: 900, color: colors.textHeading, margin: `0 0 28px`, lineHeight: t.lineHeight.normal }}>
//                 Safe and Secure Web Application
//               </h2>
//               {SECURITY_FEATURES.map((f, i) => (
//                 <div key={i} style={{ display: "flex", gap: spacing.xl, marginBottom: 22, ...animation.fadeIn(secIn, 0.3 + i * 0.12) }}>
//                   <div style={{ width: iconSize.feature, height: iconSize.feature, borderRadius: 12, background: gradients.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{f.icon}</div>
//                   <div>
//                     <h4 style={{ fontSize: t.size.md, fontWeight: t.weight.extrabold, color: colors.textHeading, margin: `0 0 ${spacing.xs / 2}px` }}>{f.title}</h4>
//                     <p style={{ fontSize: t.size.base, color: colors.textSub, lineHeight: t.lineHeight.body, margin: 0 }}>{f.desc}</p>
//                   </div>
//                 </div>
//               ))}
//               <a href={WA} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: gradients.primary, color: colors.white, padding: "13px 28px", borderRadius: radius.md + 2, textDecoration: "none", fontWeight: t.weight.bold, fontSize: t.size.base, letterSpacing: "0.07em", textTransform: "uppercase", boxShadow: shadows.primary, marginTop: spacing.sm }}>
//                 Learn More   <ArrowRight size={14} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── STATS STRIP ── */}
//       <div ref={statsRef} style={{ background: gradients.cta, padding: isMobile ? "48px 16px" : "56px 24px" }}>
//         <div style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: spacing.xl, textAlign: "center" }}>
//           {STATS.map((s, i) => (
//             <div key={i} style={{ ...animation.fadeIn(statsIn, i * 0.12) }}>
//               <div style={{ fontSize: isMobile ? "2.4rem" : "3rem", fontWeight: 900, color: colors.accent, lineHeight: 1, letterSpacing: "-0.04em" }}>{s.num}</div>
//               <div style={{ fontSize: t.size.sm, fontWeight: t.weight.bold, color: colors.textOnDark60, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: spacing.sm }}>{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── TESTIMONIALS ── */}


//       {/* ── TESTIMONIALS ── */}
//       <div style={{ background: colors.bgPage }}>
//         <div
//           ref={testRef}
//           style={{
//             maxWidth: layout.maxWidthGrid,
//             margin: "0 auto",
//             padding: secPad,
//           }}
//         >
//           <SectionHeader
//             label="Client Testimonials"
//             title="What Our Clients Say"
//             inView={testIn}
//             isMobile={isMobile}
//           />

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
//               gap: 24,
//             }}
//           >
//             {TESTIMONIALS.map((t, idx) => (
//               <div
//                 key={idx}
//                 style={{
//                   background: "#fff",
//                   borderRadius: 18,
//                   padding: isMobile ? "26px 22px" : "32px 28px",
//                   border: "2px solid rgba(26,62,140,0.09)",
//                   boxShadow: "0 4px 20px rgba(26,62,140,0.07)",

//                   opacity: testIn ? 1 : 0,
//                   transform: testIn
//                     ? "translateY(0)"
//                     : "translateY(28px)",

//                   transition: `opacity 0.5s ease ${idx * 0.12
//                     }s, transform 0.5s ease ${idx * 0.12}s`,

//                   display: "flex",
//                   flexDirection: "column",
//                   gap: 18,
//                 }}
//               >
//                 {/* Stars */}
//                 <div style={{ display: "flex", gap: 3 }}>
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <svg
//                       key={i}
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                     >
//                       <path
//                         d="M8 1l1.8 4h4.2l-3.4 2.5 1.3 4.1L8 9.1l-3.9 2.5 1.3-4.1L2 5h4.2z"
//                         fill="#e8a020"
//                       />
//                     </svg>
//                   ))}
//                 </div>

//                 {/* Text */}
//                 <p
//                   style={{
//                     fontSize: 14,
//                     color: "#4a5275",
//                     lineHeight: 1.8,
//                     margin: 0,
//                     fontStyle: "italic",
//                   }}
//                 >
//                   "{t.text}"
//                 </p>

//                 {/* User */}
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 12,
//                     borderTop: "1px solid rgba(26,62,140,0.08)",
//                     paddingTop: 16,
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: 44,
//                       height: 44,
//                       borderRadius: "50%",
//                       flexShrink: 0,
//                       background:
//                         "linear-gradient(135deg, #0d2b6e, #1a3e8c)",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: "#e8a020",
//                       fontWeight: 800,
//                       fontSize: 14,
//                       letterSpacing: "0.05em",
//                     }}
//                   >
//                     {t.avatar}
//                   </div>

//                   <div>
//                     <p
//                       style={{
//                         fontSize: 14,
//                         fontWeight: 800,
//                         color: "#0d2b6e",
//                         margin: "0 0 2px",
//                       }}
//                     >
//                       {t.name}
//                     </p>

//                     <p
//                       style={{
//                         fontSize: 12,
//                         color: "#8a94b0",
//                         margin: 0,
//                         fontWeight: 500,
//                       }}
//                     >
//                       {t.role}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
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

// export default Home;





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
// const SERVICES = [
//   { icon: "🖥️", title: "Web Development",    desc: "We design and build responsive, high-performance websites that boost your brand, improve engagement, and convert visitors into customers.",            color: colors.primaryDark },
//   { icon: "☁️", title: "Cloud Services",      desc: "Secure, scalable cloud infrastructure setup, DevOps automation, and cloud migration tailored for long-term growth.",                               color: colors.primary },
//   { icon: "📊", title: "Analytical Services", desc: "Transform your raw data into meaningful insights with advanced dashboards, analytics pipelines, and reporting automation.",                        color: colors.primaryDark },
//   { icon: "📱", title: "App Development",     desc: "End-to-end mobile and web application development with modern UI/UX, APIs, integrations, and robust architecture.",                               color: colors.primary },
// ];

// const FEATURES = [
//   { icon: "🔷", title: "Custom software applications" },
//   { icon: "☁️", title: "Cloud infrastructure setup" },
//   { icon: "⚙️", title: "Business automation workflows" },
//   { icon: "🗄️", title: "Data engineering" },
//   { icon: "📈", title: "Dashboards & analytics" },
// ];

// const WEB_DEV_COLS = [
//   {
//     label: "Responsive web apps",
//     color: colors.accent,
//     points: [
//       "Mobile-first, fully responsive layouts that adapt to all screen sizes.",
//       "Smooth UI/UX using modern frameworks like React, Vue, and responsive CSS techniques.",
//       "Fast performance with optimized assets, lazy loading, and code-splitting.",
//       "Touch-friendly navigation and interactive elements for mobile users.",
//       "PWA-ready architecture offering offline access and app-like experiences.",
//       "Consistent user experience across all devices and browsers.",
//     ],
//   },
//   {
//     label: "API integration & microservices",
//     color: colors.primary,
//     points: [
//       "Seamless integration of third-party APIs for payments, authentication, and business tools.",
//       "Scalable microservice architecture ensuring modular, independent, and reliable systems.",
//       "Secure API communication using standards like OAuth2, JWT, and SSL/TLS.",
//       "Real-time data exchange using REST APIs, GraphQL, and event-driven services.",
//       "Cloud-ready deployment with containerized microservices using Docker & Kubernetes.",
//     ],
//   },
//   {
//     label: "E-commerce, payment integrations, PWA support",
//     color: colors.green,
//     points: [
//       "End-to-end e-commerce solutions with cart, checkout, product management, and order tracking.",
//       "Secure payment gateway integrations including Razorpay, Stripe, PayPal, and UPI.",
//       "Mobile-first design for smooth shopping experiences on all devices.",
//       "PWA-enabled features like offline access, push notifications, and app-like performance.",
//       "Fast, optimized, and scalable architecture for high-traffic online stores.",
//     ],
//   },
// ];

// const SECURITY_FEATURES = [
//   { icon: "🌐", title: "Modern cloud hosting setup",    desc: "Modern cloud hosting setup with encrypted data transfers & backups." },
//   { icon: "🔧", title: "Scalable architecture",         desc: "Scalable architecture to handle growth & peak loads." },
//   { icon: "⚡", title: "Performance-optimized systems", desc: "Performance-optimized systems ensuring smooth operations." },
// ];

// const TESTIMONIALS = [
//   { text: "RAM helped us streamline our operations with a modern, high-performance website and smart analytics dashboards. Their strong understanding of both business and technology made the entire transformation smooth and impactful.", name: "Priya Patil",  role: "Founder",         avatar: "PP" },
//   { text: "RAM built our mobile app with precision and clarity, delivering a solution that matched our goals exactly. Their communication, technical expertise, and problem-solving skills consistently stood out throughout the project.", name: "Ravi Kulkarni", role: "Director",         avatar: "RK" },
//   { text: "The RAM team delivered exactly what we needed — a well-designed website integrated with automation that significantly reduced our manual workload. Their support after launch has been exceptional and truly reliable.",        name: "Arjun Mehta",  role: "Operations Head", avatar: "AM" },
// ];

// const STATS = [
//   { num: "50+",  label: "Projects Delivered" },
//   { num: "98%",  label: "Client Satisfaction" },
//   { num: "3+",   label: "Years of Experience" },
//   { num: "24/7", label: "Support Available" },
// ];

// const HUB_NODES = [
//   { icon: "☁️",  label: "Cloud & DevOps", sub: "AWS · Azure · GCP",    color: "rgba(37,99,235,0.25)",  textColor: "#93c5fd", pos: "top" },
//   { icon: "📊",  label: "Analytics",      sub: "Dashboards · BI",      color: "rgba(232,160,32,0.25)", textColor: "#fcd34d", pos: "right" },
//   { icon: "📱",  label: "Mobile Apps",    sub: "iOS · Android · PWA",  color: "rgba(139,92,246,0.25)", textColor: "#c4b5fd", pos: "bottom" },
//   { icon: "🖥️", label: "Web Dev",        sub: "React · Node · API",   color: "rgba(16,185,129,0.25)", textColor: "#6ee7b7", pos: "left" },
// ];

// // ── SECTION HEADER ───────────────────────────────────────────────────
// const SectionHeader = ({ label, title, inView, isMobile, dark = false }) => (
//   <div style={{ textAlign: "center", marginBottom: isMobile ? 36 : 52, ...animation.fadeIn(inView) }}>
//     <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 10 }}>
//       <div style={{ width: 28, height: 3, background: colors.accent, borderRadius: radius.sm }} />
//       <span style={{ color: colors.accent, fontWeight: t.weight.bold, fontSize: t.size.xs, letterSpacing: "0.14em", textTransform: "uppercase" }}>{label}</span>
//       <div style={{ width: 28, height: 3, background: colors.accent, borderRadius: radius.sm }} />
//     </div>
//     <h2 style={{ fontSize: isMobile ? "1.5rem" : "2.1rem", fontWeight: t.weight.extrabold, color: dark ? colors.white : colors.textHeading, margin: 0, letterSpacing: "-0.015em" }}>{title}</h2>
//   </div>
// );

// // ── WHATSAPP LINK ─────────────────────────────────────────────────────
// const WA = "https://wa.me/918484905526";

// // ── TECH ECOSYSTEM HERO PANEL ─────────────────────────────────────────
// const TechEcosystemPanel = ({ heroIn, isMobile }) => {
//   const nodePositions = {
//     top:    { top: "4%",  left: "50%", transform: "translateX(-50%)" },
//     right:  { top: "42%", right: "0%", transform: "translateY(-50%)" },
//     bottom: { bottom: "14%", left: "50%", transform: "translateX(-50%)" },
//     left:   { top: "42%", left: "0%",  transform: "translateY(-50%)" },
//   };

//   const nodeAnimations = {
//     top:    "nodeFloatTop",
//     right:  "nodeFloatRight",
//     bottom: "nodeFloatBottom",
//     left:   "nodeFloatLeft",
//   };

//   return (
//     <div style={{
//       flex: 1,
//       background: "#07101f",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       padding: isMobile ? "48px 24px 60px" : "0",
//       position: "relative",
//       overflow: "hidden",
//       minHeight: isMobile ? "420px" : "100vh",
//     }}>
//       {/* Grid background */}
//       <div style={{
//         position: "absolute", inset: 0,
//         backgroundImage: "linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)",
//         backgroundSize: "36px 36px",
//       }} />

//       {/* Radial glow */}
//       <div style={{
//         position: "absolute",
//         width: "340px", height: "340px",
//         borderRadius: "50%",
//         background: "radial-gradient(circle, rgba(37,99,235,0.13) 0%, transparent 70%)",
//         top: "50%", left: "50%",
//         transform: "translate(-50%, -50%)",
//         animation: "bgGlowPulse 4s ease-in-out infinite",
//         pointerEvents: "none",
//       }} />

//       {/* Live badge */}
//       <div style={{
//         position: "absolute", top: 20, right: 20,
//         background: "rgba(34,197,94,0.12)",
//         border: "1px solid rgba(34,197,94,0.35)",
//         borderRadius: "999px",
//         padding: "5px 14px",
//         display: "flex", alignItems: "center", gap: 7,
//         opacity: heroIn ? 1 : 0,
//         transition: "opacity 0.8s ease 1s",
//         zIndex: 30,
//       }}>
//         <div style={{
//           width: 8, height: 8, borderRadius: "50%",
//           background: "#22c55e",
//           boxShadow: "0 0 0 0 rgba(34,197,94,0.4)",
//           animation: "livePulse 2s ease-out infinite",
//         }} />
//         <span style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700, color: "#4ade80", letterSpacing: "0.1em" }}>LIVE SYSTEMS</span>
//       </div>

//       {/* Canvas */}
//       <div style={{
//         position: "relative",
//         width: isMobile ? "300px" : "360px",
//         height: isMobile ? "300px" : "360px",
//         opacity: heroIn ? 1 : 0,
//         transition: "opacity 0.7s ease 0.4s",
//       }}>
//         {/* Rings */}
//         {[
//           { size: 170, color: "rgba(96,165,250,0.2)",  dur: "18s",  dir: "normal" },
//           { size: 250, color: "rgba(232,160,32,0.12)", dur: "28s",  dir: "reverse" },
//           { size: 340, color: "rgba(96,165,250,0.07)", dur: "42s",  dir: "normal" },
//         ].map((ring, i) => (
//           <div key={i} style={{
//             position: "absolute",
//             width: ring.size, height: ring.size,
//             borderRadius: "50%",
//             border: `1px solid ${ring.color}`,
//             top: "50%", left: "50%",
//             marginTop: -ring.size / 2, marginLeft: -ring.size / 2,
//             animation: `spinRing ${ring.dur} linear infinite ${ring.dir === "reverse" ? "" : ""}`,
//             animationDirection: ring.dir,
//           }} />
//         ))}

//         {/* SVG connectors */}
//         <svg
//           style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
//           viewBox="0 0 360 360"
//         >
//           <defs>
//             <marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
//               <path d="M2 2L8 5L2 8" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
//             </marker>
//             <marker id="arrowAmber" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
//               <path d="M2 2L8 5L2 8" fill="none" stroke="#e8a020" strokeWidth="1.5" strokeLinecap="round" />
//             </marker>
//           </defs>
//           {/* Top → center */}
//           <line x1="180" y1="72"  x2="180" y2="138" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 3" opacity="0.55" markerEnd="url(#arrowBlue)">
//             <animate attributeName="strokeDashoffset" from="70" to="0" dur="2s" repeatCount="indefinite" />
//           </line>
//           {/* Right → center */}
//           <line x1="288" y1="180" x2="222" y2="180" stroke="#e8a020" strokeWidth="1" strokeDasharray="4 3" opacity="0.55" markerEnd="url(#arrowAmber)">
//             <animate attributeName="strokeDashoffset" from="70" to="0" dur="2.4s" repeatCount="indefinite" />
//           </line>
//           {/* Bottom → center */}
//           <line x1="180" y1="288" x2="180" y2="222" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 3" opacity="0.55" markerEnd="url(#arrowBlue)">
//             <animate attributeName="strokeDashoffset" from="70" to="0" dur="1.9s" repeatCount="indefinite" />
//           </line>
//           {/* Left → center */}
//           <line x1="72"  y1="180" x2="138" y2="180" stroke="#e8a020" strokeWidth="1" strokeDasharray="4 3" opacity="0.55" markerEnd="url(#arrowAmber)">
//             <animate attributeName="strokeDashoffset" from="70" to="0" dur="2.2s" repeatCount="indefinite" />
//           </line>
//           {/* Animated endpoint dots */}
//           <circle cx="180" cy="72"  r="3.5" fill="#3b82f6" opacity="0.8"><animate attributeName="cy" values="72;62;72" dur="3.8s" repeatCount="indefinite" /></circle>
//           <circle cx="288" cy="180" r="3.5" fill="#e8a020" opacity="0.8"><animate attributeName="cx" values="288;300;288" dur="4.5s" repeatCount="indefinite" /></circle>
//           <circle cx="180" cy="288" r="3.5" fill="#3b82f6" opacity="0.8"><animate attributeName="cy" values="288;298;288" dur="4s" repeatCount="indefinite" /></circle>
//           <circle cx="72"  cy="180" r="3.5" fill="#e8a020" opacity="0.8"><animate attributeName="cx" values="72;60;72" dur="3.5s" repeatCount="indefinite" /></circle>
//         </svg>

//         {/* Center hub */}
//         <div style={{
//           position: "absolute",
//           width: 100, height: 100,
//           top: "50%", left: "50%",
//           transform: "translate(-50%, -50%)",
//           borderRadius: "50%",
//           background: "#0f2050",
//           border: "2px solid rgba(96,165,250,0.5)",
//           display: "flex", alignItems: "center", justifyContent: "center",
//           flexDirection: "column", gap: 3,
//           zIndex: 20,
//           animation: "hubFloat 3.5s ease-in-out infinite",
//           boxShadow: "0 0 32px rgba(37,99,235,0.25)",
//         }}>
//           <span style={{ fontFamily: "sans-serif", fontSize: 13, fontWeight: 800, color: "#e8a020", letterSpacing: "0.14em" }}>RAM</span>
//           <span style={{ fontFamily: "sans-serif", fontSize: 9, color: "rgba(96,165,250,0.7)", letterSpacing: "0.08em" }}>TECH CORE</span>
//         </div>

//         {/* Nodes */}
//         {HUB_NODES.map((node, i) => (
//           <div key={i} style={{
//             position: "absolute",
//             ...nodePositions[node.pos],
//             background: "rgba(15,32,80,0.88)",
//             border: "1px solid rgba(255,255,255,0.1)",
//             borderRadius: 14,
//             padding: "10px 14px",
//             display: "flex", alignItems: "center", gap: 9,
//             zIndex: 15,
//             minWidth: 130,
//             backdropFilter: "blur(6px)",
//             animation: `${nodeAnimations[node.pos]} ${3.5 + i * 0.4}s ease-in-out infinite`,
//             transition: "transform 0.3s ease",
//           }}>
//             <div style={{
//               width: 34, height: 34, borderRadius: 9,
//               background: node.color,
//               display: "flex", alignItems: "center", justifyContent: "center",
//               fontSize: 17, flexShrink: 0,
//             }}>{node.icon}</div>
//             <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
//               <span style={{ fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>{node.label}</span>
//               <span style={{ fontFamily: "sans-serif", fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.04em" }}>{node.sub}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Stats strip */}
//       <div style={{
//         display: "flex",
//         gap: isMobile ? 10 : 14,
//         marginTop: isMobile ? 28 : 32,
//         flexWrap: "wrap",
//         justifyContent: "center",
//         opacity: heroIn ? 1 : 0,
//         transition: "opacity 0.8s ease 0.9s",
//       }}>
//         {STATS.map((s, i) => (
//           <div key={i} style={{
//             background: "rgba(255,255,255,0.05)",
//             border: "1px solid rgba(255,255,255,0.1)",
//             borderRadius: "999px",
//             padding: "6px 18px",
//             display: "flex", alignItems: "center", gap: 8,
//           }}>
//             <span style={{ fontFamily: "sans-serif", fontSize: 15, fontWeight: 800, color: "#e8a020" }}>{s.num}</span>
//             <span style={{ fontFamily: "sans-serif", fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // ── MAIN ─────────────────────────────────────────────────────────────
// const Home = () => {
//   const width    = useWindowWidth();
//   const isMobile = width < 640;
//   const isTablet = width >= 640 && width < 1024;

//   const [heroRef,  heroIn]  = useInView(0.05);
//   const [servRef,  servIn]  = useInView(0.1);
//   const [featRef,  featIn]  = useInView(0.1);
//   const [webRef,   webIn]   = useInView(0.1);
//   const [secRef,   secIn]   = useInView(0.1);
//   const [testRef,  testIn]  = useInView(0.1);
//   const [statsRef, statsIn] = useInView(0.1);
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
//         @keyframes floatUp      { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
//         @keyframes slideRight   { from{opacity:0;transform:translateX(-30px)} to{opacity:1;transform:translateX(0)} }
//         @keyframes glowPulse    { 0%,100%{box-shadow:0 0 0 0 rgba(232,160,32,0.4)} 50%{box-shadow:0 0 0 16px rgba(232,160,32,0)} }
//         @keyframes spinRing     { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
//         @keyframes spinRingRev  { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
//         @keyframes marqueeScroll{ from{transform:translateX(0)} to{transform:translateX(-50%)} }
//         @keyframes bgGlowPulse  { 0%,100%{opacity:0.6} 50%{opacity:1} }
//         @keyframes livePulse    { 0%{box-shadow:0 0 0 0 rgba(34,197,94,0.5)} 100%{box-shadow:0 0 0 10px rgba(34,197,94,0)} }
//         @keyframes hubFloat     { 0%,100%{transform:translate(-50%,-50%) scale(1)} 50%{transform:translate(-50%,-54%) scale(1.03)} }
//         @keyframes nodeFloatTop    { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-9px)} }
//         @keyframes nodeFloatRight  { 0%,100%{transform:translateY(-50%) translateX(0)} 50%{transform:translateY(-50%) translateX(8px)} }
//         @keyframes nodeFloatBottom { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }
//         @keyframes nodeFloatLeft   { 0%,100%{transform:translateY(-50%) translateX(0)} 50%{transform:translateY(-50%) translateX(-8px)} }
//         .service-card:hover { transform: translateY(-8px) !important; box-shadow: ${shadows.cardMdHover} !important; }
//         .service-card { transition: all ${transitions.slow} !important; }
//         .web-col:hover { background: ${colors.bgLight} !important; }

//         @keyframes orbFloat1 {
//   0%,100% {
//     transform: translate(0,0) scale(1);
//   }
//   50% {
//     transform: translate(40px,30px) scale(1.08);
//   }
// }

// @keyframes orbFloat2 {
//   0%,100% {
//     transform: translate(0,0) scale(1);
//   }
//   50% {
//     transform: translate(-30px,-20px) scale(1.05);
//   }
// }

// @keyframes pulseDot {
//   0% {
//     transform: scale(1);
//     opacity: 1;
//   }
//   50% {
//     transform: scale(1.4);
//     opacity: 0.6;
//   }
//   100% {
//     transform: scale(1);
//     opacity: 1;
//   }
// }
//       `}</style>

//     {/* ── HERO ───────────────────────────────────────────────────────── */}
// <div
//   ref={heroRef}
//   style={{
//     position: "relative",
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: isMobile ? "column" : "row",
//     overflow: "hidden",
//     background: "#030712",
//   }}
// >
//   {/* ── GLOBAL BACKGROUND EFFECTS ── */}
//   <div
//     style={{
//       position: "absolute",
//       inset: 0,
//       background:
//         "radial-gradient(circle at top left, rgba(59,130,246,0.16), transparent 28%), radial-gradient(circle at bottom right, rgba(232,160,32,0.10), transparent 30%), #030712",
//       zIndex: 0,
//     }}
//   />

//   {/* Animated Grid */}
//   <div
//     style={{
//       position: "absolute",
//       inset: 0,
//       backgroundImage:
//         "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
//       backgroundSize: "40px 40px",
//       maskImage:
//         "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.2))",
//       zIndex: 0,
//     }}
//   />

//   {/* Floating Blur Orbs */}
//   <div
//     style={{
//       position: "absolute",
//       top: "-120px",
//       left: "-120px",
//       width: "380px",
//       height: "380px",
//       borderRadius: "50%",
//       background: "rgba(59,130,246,0.22)",
//       filter: "blur(90px)",
//       animation: "orbFloat1 10s ease-in-out infinite",
//     }}
//   />

//   <div
//     style={{
//       position: "absolute",
//       bottom: "-140px",
//       right: "-120px",
//       width: "420px",
//       height: "420px",
//       borderRadius: "50%",
//       background: "rgba(232,160,32,0.14)",
//       filter: "blur(100px)",
//       animation: "orbFloat2 12s ease-in-out infinite",
//     }}
//   />

//   {/* ── LEFT CONTENT ── */}
//   <div
//     style={{
//       flex: isMobile ? "none" : "0 0 54%",
//       position: "relative",
//       zIndex: 2,
//       display: "flex",
//       alignItems: "center",
//       padding: isMobile
//         ? "90px 24px 60px"
//         : "0 70px 0 90px",
//       minHeight: "100vh",
//     }}
//   >
//     {/* Decorative Side Line */}
//     {!isMobile && (
//       <>
//         <div
//           style={{
//             position: "absolute",
//             left: 42,
//             top: "20%",
//             width: 2,
//             height: "58%",
//             background:
//               "linear-gradient(to bottom, transparent, rgba(232,160,32,0.8), transparent)",
//           }}
//         />

//         <div
//           style={{
//             position: "absolute",
//             left: 36,
//             top: "50%",
//             width: 14,
//             height: 14,
//             borderRadius: "50%",
//             background: "#e8a020",
//             boxShadow: "0 0 25px rgba(232,160,32,0.9)",
//             animation: "pulseDot 2s infinite",
//           }}
//         />
//       </>
//     )}

//     <div
//       style={{
//         maxWidth: 620,
//         position: "relative",
//       }}
//     >
//       {/* Top Badge */}
//       <div
//         style={{
//           display: "inline-flex",
//           alignItems: "center",
//           gap: 10,
//           background: "rgba(255,255,255,0.06)",
//           border: "1px solid rgba(255,255,255,0.12)",
//           backdropFilter: "blur(12px)",
//           padding: "10px 18px",
//           borderRadius: "999px",
//           marginBottom: 28,
//           opacity: heroIn ? 1 : 0,
//           transform: heroIn
//             ? "translateY(0px)"
//             : "translateY(20px)",
//           transition: "all 0.7s ease",
//         }}
//       >
//         <div
//           style={{
//             width: 9,
//             height: 9,
//             borderRadius: "50%",
//             background: "#22c55e",
//             boxShadow: "0 0 0 0 rgba(34,197,94,0.5)",
//             animation: "livePulse 2s infinite",
//           }}
//         />

//         <span
//           style={{
//             color: "#dbeafe",
//             fontSize: t.size.xs,
//             fontWeight: 800,
//             letterSpacing: "0.16em",
//             textTransform: "uppercase",
//           }}
//         >
//           Future-ready digital solutions
//         </span>
//       </div>

//       {/* ── KEEPING YOUR ORIGINAL TEXT ── */}
//       <div style={{ marginBottom: 28 }}>
//         {[
//           "Right Analysis",
//           "Matter",
//           "Technology",
//           "Pvt. Ltd.",
//         ].map((line, i) => (
//           <div
//             key={i}
//             style={{
//               overflow: "hidden",
//               lineHeight: 1.02,
//               marginBottom: 4,
//             }}
//           >
//             <div
//               style={{
//                 fontSize: isMobile
//                   ? i < 2
//                     ? "2.7rem"
//                     : "2rem"
//                   : i < 2
//                   ? "5rem"
//                   : "3.6rem",
//                 fontWeight: i % 2 === 0 ? 900 : 300,
//                 color:
//                   i === 1
//                     ? colors.accent
//                     : colors.white,
//                 fontStyle:
//                   i === 3 ? "italic" : "normal",
//                 letterSpacing:
//                   i === 0 ? "-0.06em" : "-0.03em",
//                 textShadow:
//                   i === 1
//                     ? "0 0 30px rgba(232,160,32,0.35)"
//                     : "0 0 40px rgba(255,255,255,0.06)",
//                 opacity: heroIn ? 1 : 0,
//                 transform: heroIn
//                   ? "translateY(0)"
//                   : "translateY(110%)",
//                 transition: `all 0.7s ease ${0.12 + i * 0.12}s`,
//               }}
//             >
//               {line}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Subtitle */}
//       <p
//         style={{
//           color: "#93c5fd",
//           fontSize: isMobile
//             ? t.size.base
//             : t.size.md,
//           marginBottom: 16,
//           fontWeight: 700,
//           letterSpacing: "0.18em",
//           textTransform: "uppercase",
//           opacity: heroIn ? 1 : 0,
//           transition: "all 0.8s ease 0.6s",
//         }}
//       >
//         Software, Cloud, Data & Automation Solutions
//       </p>

//       {/* Description */}
//       <p
//         style={{
//           color: "rgba(255,255,255,0.72)",
//           fontSize: isMobile
//             ? t.size.base
//             : "1.08rem",
//           lineHeight: 1.9,
//           marginBottom: 38,
//           maxWidth: 560,
//           opacity: heroIn ? 1 : 0,
//           transition: "all 0.8s ease 0.7s",
//         }}
//       >
//         We build modern digital solutions that help
//         businesses scale faster, operate smarter, and
//         deliver exceptional customer experiences.
//       </p>

//       {/* Buttons */}
//       <div
//         style={{
//           display: "flex",
//           gap: 16,
//           flexWrap: "wrap",
//           opacity: heroIn ? 1 : 0,
//           transition: "all 0.8s ease 0.8s",
//         }}
//       >
//         {/* Primary */}
//         <a
//           href={WA}
//           target="_blank"
//           rel="noreferrer"
//           style={{
//             position: "relative",
//             overflow: "hidden",
//             background:
//               "linear-gradient(135deg,#e8a020,#fbbf24)",
//             color: "#fff",
//             padding: "16px 34px",
//             borderRadius: 16,
//             textDecoration: "none",
//             fontWeight: 800,
//             fontSize: t.size.sm,
//             letterSpacing: "0.1em",
//             textTransform: "uppercase",
//             boxShadow:
//               "0 14px 40px rgba(232,160,32,0.35)",
//           }}
//         >
//           Know More
//         </a>

//         {/* Secondary */}
//         <a
//           href="#services"
//           style={{
//             background: "rgba(255,255,255,0.05)",
//             color: "#fff",
//             padding: "16px 30px",
//             borderRadius: 16,
//             textDecoration: "none",
//             fontWeight: 700,
//             fontSize: t.size.sm,
//             letterSpacing: "0.08em",
//             textTransform: "uppercase",
//             border:
//               "1px solid rgba(255,255,255,0.12)",
//             backdropFilter: "blur(12px)",
//           }}
//         >
//           Our Services ↓
//         </a>
//       </div>

//       {/* Bottom Stats */}
//       <div
//         style={{
//           display: "flex",
//           gap: isMobile ? 14 : 26,
//           marginTop: 54,
//           flexWrap: "wrap",
//         }}
//       >
//         {[
//           { value: "50+", label: "Projects" },
//           { value: "98%", label: "Success Rate" },
//           { value: "24/7", label: "Support" },
//         ].map((item, i) => (
//           <div
//             key={i}
//             style={{
//               minWidth: 110,
//             }}
//           >
//             <div
//               style={{
//                 color: "#fff",
//                 fontSize: isMobile
//                   ? "1.4rem"
//                   : "1.9rem",
//                 fontWeight: 900,
//                 marginBottom: 4,
//               }}
//             >
//               {item.value}
//             </div>

//             <div
//               style={{
//                 color: "rgba(255,255,255,0.5)",
//                 fontSize: 12,
//                 letterSpacing: "0.12em",
//                 textTransform: "uppercase",
//               }}
//             >
//               {item.label}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>

//   {/* ── RIGHT SIDE PANEL ── */}
//   <TechEcosystemPanel
//     heroIn={heroIn}
//     isMobile={isMobile}
//   />
// </div>

//       {/* ── MARQUEE ── */}
//       <div style={{ background: colors.primaryDark, padding: "14px 0", overflow: "hidden", position: "relative", zIndex: 2 }}>
//         <div style={{ display: "flex", animation: "marqueeScroll 20s linear infinite", width: "max-content" }}>
//           {[...Array(2)].map((_, rep) => (
//             <div key={rep} style={{ display: "flex", alignItems: "center" }}>
//               {["Web Development","Mobile Apps","Data Analytics","UI/UX Design","Cloud & DevOps","IT Consulting","Performance Optimization","Security Solutions"].map((item, i) => (
//                 <React.Fragment key={i}>
//                   <span style={{ color: colors.textOnDark85, fontSize: t.size.sm, fontWeight: t.weight.bold, letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap", padding: "0 20px" }}>{item}</span>
//                   <span style={{ color: colors.accent, fontSize: 16 }}>◆</span>
//                 </React.Fragment>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── SERVICES ── */}
//       <div id="services" style={{ background: colors.bgPage }}>
//         <div ref={servRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
//           <SectionHeader label="Our Services" title="End-to-end technology solutions for your business" inView={servIn} isMobile={isMobile} />
//           <p style={{ textAlign: "center", color: colors.textBodyAlt, fontSize: t.size.lg, maxWidth: 680, margin: `0 auto ${spacing.xxl * 1.5}px`, lineHeight: t.lineHeight.body, ...animation.fadeIn(servIn, 0.2) }}>
//             We deliver powerful, secure, and future-ready digital systems tailored to your needs — whether you're launching a website, building an app, migrating to cloud, or automating workflows.
//           </p>
//           <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4,1fr)", gap: isMobile ? spacing.xl : 22 }}>
//             {SERVICES.map((s, i) => (
//               <div key={i} className="service-card" style={{ background: colors.bgCard, borderRadius: radius.xl, padding: isMobile ? "28px 22px" : "36px 28px", border: `2px solid ${colors.borderDefault}`, boxShadow: shadows.cardMd, ...animation.fadeIn(servIn, i * 0.12), cursor: "default" }}>
//                 <div style={{ fontSize: 36, marginBottom: spacing.xl }}>{s.icon}</div>
//                 <div style={{ width: 32, height: 3, background: colors.accent, borderRadius: radius.sm, marginBottom: spacing.md }} />
//                 <h3 style={{ fontSize: t.size.xl, fontWeight: t.weight.extrabold, color: colors.textHeading, margin: `0 0 12px`, lineHeight: t.lineHeight.normal }}>{s.title}</h3>
//                 <p style={{ fontSize: t.size.base, color: colors.textSub, lineHeight: t.lineHeight.body, margin: `0 0 20px` }}>{s.desc}</p>
//                 <a href={WA} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: colors.accent, fontWeight: t.weight.extrabold, fontSize: t.size.xs, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
//                   Click Here
//                   <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke={colors.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
//                 </a>
//               </div>
//             ))}
//           </div>
//           <div style={{ textAlign: "center", marginTop: 36, ...animation.fadeIn(servIn, 0.5) }}>
//             <a href={WA} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: gradients.primary, color: colors.white, padding: "14px 36px", borderRadius: radius.md + 2, textDecoration: "none", fontWeight: t.weight.bold, fontSize: t.size.base, letterSpacing: "0.08em", textTransform: "uppercase", boxShadow: shadows.primary }}>
//               All Services
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* ── FEATURES ── */}
//       <div style={{ background: colors.bgCard }}>
//         <div ref={featRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
//           <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 60, alignItems: "center" }}>
//             {/* Left */}
//             <div style={{ ...animation.fadeIn(featIn, 0, "left") }}>
//               <p style={{ color: colors.accent, fontWeight: t.weight.bold, fontSize: t.size.xs, letterSpacing: "0.14em", textTransform: "uppercase", margin: `0 0 ${spacing.md}px` }}>Our Features</p>
//               <h2 style={{ fontSize: isMobile ? "1.6rem" : "2.1rem", fontWeight: 900, color: colors.textHeading, margin: `0 0 ${spacing.lg}px`, lineHeight: t.lineHeight.normal, letterSpacing: "-0.02em" }}>
//                 Software, Cloud, Data &amp; Automation Solutions
//               </h2>
//               <p style={{ color: colors.textBodyAlt, fontSize: t.size.lg, lineHeight: t.lineHeight.body, margin: `0 0 28px` }}>
//                 We specialize in building reliable, scalable, and intelligent digital solutions. Whether it's automating manual tasks, building secure platforms, or analyzing business performance — we help you stay ahead.
//               </p>
//               <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
//                 {FEATURES.map((f, i) => (
//                   <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, ...animation.fadeIn(featIn, 0.3 + i * 0.1) }}>
//                     <div style={{ width: iconSize.featureSm, height: iconSize.featureSm, borderRadius: radius.full, background: colors.primaryTint7, display: "flex", alignItems: "center", justifyContent: "center", fontSize: t.size.md, flexShrink: 0 }}>{f.icon}</div>
//                     <span style={{ fontSize: t.size.base, color: "#3a4260", fontWeight: t.weight.semibold, lineHeight: 1.4 }}>{f.title}</span>
//                   </div>
//                 ))}
//               </div>
//               <a href={WA} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: spacing.sm, background: gradients.primary, color: colors.white, padding: "13px 26px", borderRadius: radius.md + 2, textDecoration: "none", fontWeight: t.weight.bold, fontSize: t.size.base, letterSpacing: "0.07em", textTransform: "uppercase", boxShadow: shadows.primary }}>
//                 Learn More
//                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 4l3 3-3 3" stroke={colors.white} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
//               </a>
//             </div>

//             {/* Right illustration */}
//             <div style={{ ...animation.fadeIn(featIn, 0.2, "right") }}>
//               <div style={{ background: gradients.primary, borderRadius: radius.xl + 4, padding: isMobile ? "32px 24px" : "44px 40px", position: "relative", overflow: "hidden", minHeight: 280, display: "flex", flexDirection: "column", justifyContent: "center" }}>
//                 <div style={{ position: "absolute", top: -30, right: -30, width: 200, height: 200, borderRadius: radius.full, border: `2px solid ${colors.accentTint12}` }} />
//                 <div style={{ position: "absolute", bottom: -50, left: -20, width: 200, height: 200, borderRadius: radius.full, background: colors.accentTint5 }} />
//                 <div style={{ position: "relative", display: "flex", justifyContent: "center", marginBottom: spacing.xl }}>
//                   <div style={{ width: 80, height: 60, background: colors.accentTint15, borderRadius: 12, border: `2px solid ${colors.accentTint25 + "80"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>☁️</div>
//                   <div style={{ position: "absolute", top: 10, left: "50%", marginLeft: -64, width: 64, height: 44, background: colors.whiteTint7, borderRadius: 10, border: `1px solid ${colors.whiteTint8}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🖥️</div>
//                   <div style={{ position: "absolute", top: 10, left: "50%", marginLeft: 0,   width: 64, height: 44, background: colors.whiteTint7, borderRadius: 10, border: `1px solid ${colors.whiteTint8}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>📊</div>
//                 </div>
//                 <p style={{ color: colors.textOnDark85, fontSize: t.size.lg, fontWeight: t.weight.bold, textAlign: "center", margin: `0 0 ${spacing.sm}px` }}>End-to-End Digital Ecosystem</p>
//                 <p style={{ color: colors.textOnDark60, fontSize: t.size.base, textAlign: "center", lineHeight: t.lineHeight.body, margin: 0 }}>From concept to deployment — we handle every layer of your digital transformation journey.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── WEB DEV DETAIL ── */}
//       <div style={{ background: colors.bgPage }}>
//         <div ref={webRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
//           <SectionHeader label="Services" title="Web & Website Development" inView={webIn} isMobile={isMobile} />
//           <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)", gap: isMobile ? spacing.xl : 22 }}>
//             {WEB_DEV_COLS.map((col, i) => (
//               <div key={i} className="web-col" style={{ background: colors.bgCard, borderRadius: radius.xl, padding: isMobile ? "28px 22px" : "36px 28px", border: `2px solid ${colors.borderDefault}`, boxShadow: "0 2px 16px rgba(13,43,110,0.05)", ...animation.fadeIn(webIn, i * 0.15), cursor: "default" }}>
//                 <h3 style={{ fontSize: t.size.md, fontWeight: t.weight.extrabold, color: col.color, margin: `0 0 20px`, lineHeight: 1.4 }}>{col.label}</h3>
//                 <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
//                   {col.points.map((pt, j) => (
//                     <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: spacing.sm, marginBottom: 10 }}>
//                       <div style={{ width: 6, height: 6, borderRadius: radius.full, background: col.color, flexShrink: 0, marginTop: 6 }} />
//                       <span style={{ fontSize: t.size.base, color: colors.textBody, lineHeight: t.lineHeight.body }}>{pt}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <div style={{ marginTop: spacing.xl }}>
//                   <a href={WA} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: col.color, color: colors.white, padding: "11px 24px", borderRadius: radius.md, textDecoration: "none", fontWeight: t.weight.bold, fontSize: t.size.xs, letterSpacing: "0.1em", textTransform: "uppercase" }}>
//                     Get Started
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── SECURITY / FILE MANAGEMENT ── */}
//       <div style={{ background: colors.bgCard }}>
//         <div ref={secRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
//           <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 32 : 60, alignItems: "center" }}>
//             {/* Left visual */}
//             <div style={{ ...animation.fadeIn(secIn, 0, "left"), order: isMobile ? 2 : 1 }}>
//               <div style={{ background: gradients.featureCard, borderRadius: radius.xl + 4, padding: "40px", display: "flex", flexDirection: "column", gap: spacing.lg }}>
//                 {["🔒 SSL & Encrypted Data Transfer", "🛡️ DDoS Protection Layer", "⚡ CDN & Performance Boost", "🔁 Auto Backups & Recovery"].map((item, i) => (
//                   <div key={i} style={{ display: "flex", alignItems: "center", gap: spacing.md, background: colors.bgCard, borderRadius: 12, padding: "16px 20px", boxShadow: shadows.section, ...animation.fadeIn(secIn, 0.2 + i * 0.1) }}>
//                     <span style={{ fontSize: 18 }}>{item.split(" ")[0]}</span>
//                     <span style={{ fontSize: t.size.base, fontWeight: t.weight.semibold, color: colors.textHeading }}>{item.split(" ").slice(1).join(" ")}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/* Right text */}
//             <div style={{ ...animation.fadeIn(secIn, 0.2, "right"), order: isMobile ? 1 : 2 }}>
//               <p style={{ color: colors.accent, fontWeight: t.weight.bold, fontSize: t.size.xs, letterSpacing: "0.14em", textTransform: "uppercase", margin: `0 0 ${spacing.md}px` }}>File Management</p>
//               <h2 style={{ fontSize: isMobile ? "1.5rem" : "2rem", fontWeight: 900, color: colors.textHeading, margin: `0 0 28px`, lineHeight: t.lineHeight.normal }}>
//                 Safe and Secure Web Application
//               </h2>
//               {SECURITY_FEATURES.map((f, i) => (
//                 <div key={i} style={{ display: "flex", gap: spacing.xl, marginBottom: 22, ...animation.fadeIn(secIn, 0.3 + i * 0.12) }}>
//                   <div style={{ width: iconSize.feature, height: iconSize.feature, borderRadius: 12, background: gradients.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{f.icon}</div>
//                   <div>
//                     <h4 style={{ fontSize: t.size.md, fontWeight: t.weight.extrabold, color: colors.textHeading, margin: `0 0 ${spacing.xs / 2}px` }}>{f.title}</h4>
//                     <p style={{ fontSize: t.size.base, color: colors.textSub, lineHeight: t.lineHeight.body, margin: 0 }}>{f.desc}</p>
//                   </div>
//                 </div>
//               ))}
//               <a href={WA} target="_blank" rel="noreferrer" style={{ display: "inline-block", background: gradients.primary, color: colors.white, padding: "13px 28px", borderRadius: radius.md + 2, textDecoration: "none", fontWeight: t.weight.bold, fontSize: t.size.base, letterSpacing: "0.07em", textTransform: "uppercase", boxShadow: shadows.primary, marginTop: spacing.sm }}>
//                 Learn More
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ── STATS STRIP ── */}
//       <div ref={statsRef} style={{ background: gradients.cta, padding: isMobile ? "48px 16px" : "56px 24px" }}>
//         <div style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4,1fr)", gap: spacing.xl, textAlign: "center" }}>
//           {STATS.map((s, i) => (
//             <div key={i} style={{ ...animation.fadeIn(statsIn, i * 0.12) }}>
//               <div style={{ fontSize: isMobile ? "2.4rem" : "3rem", fontWeight: 900, color: colors.accent, lineHeight: 1, letterSpacing: "-0.04em" }}>{s.num}</div>
//               <div style={{ fontSize: t.size.sm, fontWeight: t.weight.bold, color: colors.textOnDark60, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: spacing.sm }}>{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── TESTIMONIALS ── */}
//       <div style={{ background: colors.bgPage }}>
//         <div ref={testRef} style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: secPad }}>
//           <SectionHeader label="Client Testimonials" title="What Our Clients Say" inView={testIn} isMobile={isMobile} />
//           <div style={{ ...animation.fadeIn(testIn, 0, "up") }}>
//             <div style={{ background: gradients.card, borderRadius: radius.xl + 4, padding: isMobile ? "36px 24px" : "60px 72px", textAlign: "center", minHeight: isMobile ? 300 : 260, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
//               <div style={{ position: "absolute", top: 20, left: isMobile ? 20 : 48, fontSize: 80, color: colors.primaryTint7, fontWeight: 900, lineHeight: 1, userSelect: "none", fontFamily: "Georgia,serif" }}>"</div>
//               <div style={{ position: "absolute", bottom: 10, right: isMobile ? 20 : 48, fontSize: 80, color: colors.accentTint10, fontWeight: 900, lineHeight: 1, userSelect: "none", fontFamily: "Georgia,serif" }}>"</div>
//               <p style={{ fontSize: isMobile ? t.size.lg : 19, fontWeight: t.weight.bold, color: colors.primary, lineHeight: t.lineHeight.body, maxWidth: 760, margin: `0 0 28px`, fontStyle: "italic", position: "relative", zIndex: 1 }}>
//                 "{TESTIMONIALS[activeTest].text}"
//               </p>
//               <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center" }}>
//                 <div style={{ width: iconSize.avatar, height: iconSize.avatar, borderRadius: radius.full, background: gradients.avatar, display: "flex", alignItems: "center", justifyContent: "center", color: colors.accent, fontWeight: t.weight.extrabold, fontSize: t.size.base }}>
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

// export default Home;