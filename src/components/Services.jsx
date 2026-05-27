import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Compass, PhoneCall } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  transitions,
  gradients,
  layout,
  animation,
} from '../theme/theme';
import Footer from "../components/Footer";
// ── RESPONSIVE HOOK ──────────────────────────────────────────────────
function useWindowWidth() {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  useEffect(() => {
    const handle = () => setW(window.innerWidth);
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);
  return w;
}

// ── INTERSECTION OBSERVER HOOK ───────────────────────────────────────
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
  {
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect x="4" y="8" width="30" height="22" rx="3" stroke={colors.accent} strokeWidth="2.2" fill="none" />
        <path d="M13 30l-2 4h14l-2-4" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" />
        <path d="M9 20l4 4 8-8" stroke={colors.accent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="28" cy="12" r="5" fill={colors.primaryDark} stroke={colors.accent} strokeWidth="2" />
        <path d="M26 12l1.5 1.5L30 10" stroke={colors.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: "Security",
    title: "Web & App Security",
    desc: "We implement advanced security protocols, secure coding practices, and monitoring systems to keep your digital assets protected from evolving threats.",
    highlight: false,
  },
  {
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="13" stroke={colors.accent} strokeWidth="2.2" fill="none" />
        <path d="M19 8v4M19 26v4M8 19h4M26 19h4" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" />
        <circle cx="19" cy="19" r="5" fill={colors.accentTint20} stroke={colors.accent} strokeWidth="2" />
        <path d="M13 13l2.5 2.5M22.5 22.5L25 25M13 25l2.5-2.5M22.5 15.5L25 13" stroke={colors.accent} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    tag: "Performance",
    title: "Performance Optimization",
    desc: "Your website and apps run faster, smoother, and more efficiently with our expert performance tuning, caching strategies, and optimization techniques.",
    highlight: true,
  },
  {
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <rect x="5" y="22" width="6" height="10" rx="1.5" fill={colors.accentTint25} stroke={colors.accent} strokeWidth="2" />
        <rect x="15" y="15" width="6" height="17" rx="1.5" fill={colors.accentTint25} stroke={colors.accent} strokeWidth="2" />
        <rect x="25" y="8" width="6" height="24" rx="1.5" fill={colors.accentTint25} stroke={colors.accent} strokeWidth="2" />
        <path d="M7 18l8-6 8 4 8-10" stroke={colors.accent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="2" fill={colors.accent} />
        <circle cx="15" cy="12" r="2" fill={colors.accent} />
        <circle cx="23" cy="16" r="2" fill={colors.accent} />
        <circle cx="31" cy="6" r="2" fill={colors.accent} />
      </svg>
    ),
    tag: "Analytics",
    title: "Data-Driven Decisions",
    desc: "We provide custom dashboards, reports, and analytics pipelines to help you extract insights from your data and make smarter business decisions.",
    highlight: false,
  },
  {
    icon: (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <path d="M19 6C12 6 6 11 6 19s6 13 13 13 13-6 13-13S26 6 19 6z" stroke={colors.accent} strokeWidth="2.2" fill="none" />
        <path d="M15 14h-4v10h4" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 19h3" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" />
        <path d="M22 14v10" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" />
        <path d="M27 14h-3a2 2 0 000 4h1a2 2 0 010 4h-3" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tag: "Support",
    title: "Dedicated Support",
    desc: "From deployment to long-term maintenance, our team offers reliable, round-the-clock support so your business stays up, running, and growing.",
    highlight: false,
  },
];

const FEATURES = [
  { icon: "🌐", title: "Custom Website Development", desc: "We design and develop responsive, fast, and scalable websites tailored to your business goals and brand identity." },
  { icon: "📱", title: "Mobile App Development", desc: "Build powerful Android, iOS, and cross-platform apps designed for performance, usability, and user experience." },
  { icon: "📊", title: "Data Analytics & Insights", desc: "Turn raw data into actionable insights using custom dashboards, reports, and predictive analytics solutions." },
  { icon: "🎨", title: "UI/UX Design Services", desc: "We create modern, intuitive, and user-friendly designs that improve engagement, retention, and conversions." },
  { icon: "⚙️", title: "Software & Application Development", desc: "From internal tools to full enterprise platforms, we build reliable and scalable software tailored to your workflows." },
  { icon: "☁️", title: "Cloud Deployment & DevOps", desc: "Set up secure cloud infrastructure, CI/CD pipelines, and deployment automation tailored for your project." },
  { icon: "🔍", title: "SEO & Digital Growth Solutions", desc: "Enhance your online presence with SEO, analytics, and performance optimization strategies that drive real traffic." },
  { icon: "🛒", title: "E-Commerce Development", desc: "Launch secure, scalable online stores with payment gateways, inventory tracking, and seamless automation." },
  { icon: "💡", title: "IT Consulting & Technical Strategy", desc: "Get expert guidance for scaling technology, improving systems architecture, and optimizing performance." },
];

const TESTIMONIALS = [
  {
    name: "Reena Bhutada", role: "Director",
    text: "RAM developed our counselling platform with a clean design and smooth user experience. Their team clearly understood our requirements and delivered a reliable, professional solution for our counselling services.",
    avatar: "RB", stars: 5,
  },
  {
    text:
      "RAM Technologies created a modern and user-friendly website for St. John High School & Junior College, Pulgaon. Their professionalism and technical expertise made the entire process smooth and successful.",
    name: "Mr. Santosh Yadav",
    role: "Management Representative",
    avatar: "SY",
    stars: 5,
  },
  {
    name: "Ravi Kulkarni", role: "Director",
    text: "The RAM team delivered exactly what we needed — a well-designed website integrated with automation that significantly reduced our manual workload. Their support after launch has been exceptional and truly reliable.",
    avatar: "RK", stars: 5,
  },
];

const EXPERTISE = [
  { label: "React / Next.js", pct: 95 },
  { label: "Node.js / Python", pct: 92 },
  { label: "Flutter / React Native", pct: 88 },
  { label: "AWS / Cloud DevOps", pct: 85 },
  { label: "Data Analytics & AI", pct: 90 },
  { label: "UI/UX & Figma", pct: 87 },
];

// ════════════════════════════════════════════════════════════════════
const Services = () => {
  const width = useWindowWidth();
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  const [heroRef, heroIn] = useInView(0.1);
  const [servRef, servIn] = useInView(0.1);
  const [featRef, featIn] = useInView(0.1);
  const [expRef, expIn] = useInView(0.1);
  const [testRef, testIn] = useInView(0.1);

  return (
    <>
    <Helmet>
  {/* Basic SEO */}
  <title>Web Development, Mobile Apps & Digital Services | RAM Technologies</title>

  <meta
    name="description"
    content="RAM Technologies offers web development, mobile app development, cloud solutions, SEO, and software services to help businesses grow and scale efficiently."
  />

  <meta
    name="keywords"
    content="web development, mobile app development, SEO services, cloud solutions, software development, UI UX design, RAM Technologies"
  />

  <meta name="author" content="RAM Technologies" />
  <meta name="robots" content="index, follow" />

  {/* Open Graph (Facebook / LinkedIn) */}
  <meta property="og:title" content="Digital Services | RAM Technologies" />
  <meta
    property="og:description"
    content="Explore our web, mobile, cloud, and software development services designed for modern businesses."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourwebsite.com/services" />
  <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="RAM Technologies Services" />
  <meta
    name="twitter:description"
    content="Web, mobile, and cloud solutions to scale your business."
  />
  <meta name="twitter:image" content="https://yourwebsite.com/og-image.jpg" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://yourwebsite.com/services" />

  {/* JSON-LD (Simple Structured Data) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "RAM Technologies",
      url: "https://yourwebsite.com",
      logo: "https://yourwebsite.com/logo.png",
      sameAs: [
        "https://www.linkedin.com",
        "https://www.instagram.com"
      ]
    })}
  </script>
</Helmet>
    <div style={{
      minHeight: "100vh",
      background: colors.bgPage,
      fontFamily: typography.fontFamily.paragraph,
      overflowX: "hidden",
    }}>

      {/* ── HERO ── */}
      <div
        ref={heroRef}
        style={{
          background: gradients.hero,
          padding: isMobile
            ? `${spacing.hero.paddingY - 22}px ${spacing.hero.paddingX - 4}px ${spacing.hero.paddingBottom - 20}px`
            : `${spacing.hero.paddingY}px ${spacing.hero.paddingX}px ${spacing.hero.paddingBottom}px`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background Blobs */}
        <div style={{
          position: "absolute", top: -120, left: -100,
          width: 320, height: 320, borderRadius: radius.full,
          background: colors.accentTint15,
          filter: "blur(60px)",
          animation: "floatBlob 8s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: -120, right: -100,
          width: 340, height: 340, borderRadius: radius.full,
          background: colors.whiteTint8,
          filter: "blur(70px)",
          animation: "floatBlob2 10s ease-in-out infinite",
        }} />

        {/* Animated Grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(${colors.whiteTint4} 1px, transparent 1px), linear-gradient(90deg, ${colors.whiteTint4} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.3))",
        }} />

        {/* Glowing Line */}
        <div style={{
          position: "absolute", top: 0, left: "-30%",
          width: "160%", height: 2,
          background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)`,
          animation: "lineMove 5s linear infinite",
        }} />

        <div style={{
          maxWidth: layout.maxWidthContent,
          margin: "0 auto",
          position: "relative", zIndex: 2,
          textAlign: "center",
        }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            marginBottom: spacing.lg - 2,
            background: colors.whiteTint8,
            border: `1px solid ${colors.borderLight}`,
            borderRadius: 40,
            padding: `${spacing.sm}px ${spacing.xl}px`,
            backdropFilter: "blur(10px)",
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(24px)",
            transition: `all ${transitions.slow} ease`,
          }}>
            <div style={{
              width: 10, height: 10, borderRadius: radius.full,
              background: colors.accent,
              boxShadow: `0 0 12px ${colors.accent}`,
            }} />
            <span style={{
              color: colors.textOnDark,
              fontFamily: typography.fontFamily.secondaryHeading,
              fontWeight: typography.weight.bold,
              fontSize: typography.size.sm,
              letterSpacing: typography.letterSpacing.wider,
              textTransform: "uppercase",
            }}>
              Premium Digital Solutions
            </span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: isMobile ? "2.1rem" : isTablet ? "3rem" : "3.8rem",
            fontFamily: typography.heading.fontFamily,
            fontWeight: typography.heading.h1.fontWeight,
            lineHeight: typography.heading.h1.lineHeight,
            margin: `0 0 ${spacing.lg + 2}px`,
            letterSpacing: typography.letterSpacing.tight,
            color: colors.textOnDark,
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0) scale(1)" : "translateY(30px) scale(0.96)",
            transition: `all 0.9s ease`,
          }}>
            Build Faster.
            <br />
            <span style={{
              background: `linear-gradient(90deg, ${colors.accent}, ${colors.accentLight}, ${colors.accent})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% auto",
              animation: "shineText 4s linear infinite",
            }}>
              Scale Smarter.
            </span>
          </h1>

          {/* Paragraph */}
          <p style={{
            color: colors.textOnDarkSub,
            fontFamily: typography.fontFamily.paragraph,
            fontSize: isMobile ? typography.size.md : typography.size.xl + 1,
            lineHeight: typography.lineHeight.body,
            maxWidth: 620,
            margin: `0 auto ${spacing.xxl - 2}px`,
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(28px)",
            transition: `all 1s ease 0.2s`,
          }}>
            We create powerful web platforms, mobile apps, analytics systems, and enterprise
            solutions designed to help modern businesses grow, automate, and lead with confidence.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: "flex", justifyContent: "center",
            gap: spacing.lg - 4, flexWrap: "wrap",
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "translateY(0)" : "translateY(25px)",
            transition: `all 1s ease 0.3s`,
          }}>
            <a
              href="https://wa.me/918484905526"
              target="_blank"
              rel="noreferrer"
              style={{
                background: gradients.accent,
                color: colors.textOnDark,
                padding: `${spacing.md}px ${spacing.xxl - 4}px`,
                borderRadius: radius.md,
                textDecoration: "none",
                fontFamily: typography.fontFamily.secondaryHeading,
                fontWeight: typography.weight.extrabold,
                fontSize: typography.size.base,
                letterSpacing: typography.letterSpacing.wide,
                textTransform: "uppercase",
                boxShadow: shadows.ctaLg,
                transition: `all ${transitions.default}`,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <PhoneCall size={18} strokeWidth={2.2} />
              Get Free Consultation
            </a>
            <a
              href="#features"
              style={{
                background: colors.whiteTint10,
                color: colors.textOnDark,
                padding: `${spacing.md}px ${spacing.xxl - 4}px`,
                borderRadius: radius.md,
                textDecoration: "none",
                fontFamily: typography.fontFamily.secondaryHeading,
                fontWeight: typography.weight.bold,
                fontSize: typography.size.base,
                border: `1px solid ${colors.borderLight}`,
                backdropFilter: "blur(10px)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Compass size={18} strokeWidth={2.2} />
              Explore Services
              <ArrowRight size={16} strokeWidth={2.2} />
            </a>
          </div>

          {/* Floating Cards */}
          {/* Hero Info Cards */}
          <div
            style={{
              marginTop: spacing.xl + spacing.md,
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
              gap: spacing.lg - 2,
            }}
          >
            {[
              {
                title: "Web Development",
                txt: "Modern, responsive, and scalable websites tailored for businesses.",
              },
              {
                title: "Mobile Applications",
                txt: "High-performance Android and iOS applications with smooth UX.",
              },
              {
                title: "Cloud & Analytics",
                txt: "Secure cloud deployment, automation, and smart data solutions.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: colors.whiteTint8,
                  border: `1px solid ${colors.borderLighter}`,
                  borderRadius: radius.lg,
                  padding: `${spacing.xl - 2}px ${spacing.lg - 2}px`,
                  backdropFilter: "blur(12px)",
                  animation: `floatCard ${4 + i}s ease-in-out infinite`,
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    color: colors.accent,
                    fontSize: isMobile ? "1.25rem" : "1.5rem",
                    fontFamily: typography.heading.fontFamily,
                    fontWeight: typography.weight.extrabold,
                  }}
                >
                  {item.title}
                </h2>

                <p
                  style={{
                    marginTop: spacing.sm,
                    color: colors.textOnDark60,
                    fontFamily: typography.fontFamily.paragraph,
                    fontSize: typography.size.sm,
                    lineHeight: typography.lineHeight.body,
                  }}
                >
                  {item.txt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ANIMATIONS */}
        <style>{`
          @keyframes floatBlob {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(30px); }
          }
          @keyframes floatBlob2 {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-25px); }
          }
          @keyframes shineText {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
          @keyframes lineMove {
            0% { transform: translateX(-20%); }
            100% { transform: translateX(20%); }
          }
          @keyframes floatCard {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </div>

      {/* Curve */}
      <div style={{
        height: 44,
        background: colors.bgPage,
        marginTop: -44,
        borderRadius: `${radius.xl + spacing.sm}px ${radius.xl + spacing.sm}px 0 0`,
        position: "relative",
        zIndex: 2,
      }} />

      {/* ── SERVICE CARDS ── */}
      <SectionWrap label="Core Services" title="What We Do Best" ref={servRef} inView={servIn} isMobile={isMobile} bg={colors.bgPage}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)",
          gap: isMobile ? spacing.lg - 4 : spacing.lg,
        }}>
          {SERVICES.map((svc, i) => (
            <ServiceCard key={i} svc={svc} idx={i} inView={servIn} isMobile={isMobile} />
          ))}
        </div>
      </SectionWrap>

      {/* ── FEATURES GRID ── */}
      <SectionWrap id="features" label="Everything You'll Need" title="Full-Spectrum Capabilities" ref={featRef} inView={featIn} isMobile={isMobile} bg={colors.bgCard}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)",
          gap: isMobile ? spacing.sm + 4 : spacing.lg,
        }}>
          {FEATURES.map((f, i) => (
            <FeatureItem key={i} f={f} idx={i} inView={featIn} />
          ))}
        </div>
      </SectionWrap>

      {/* ── OUR EXPERTISE ── */}
      <SectionWrap label="Our Expertise" title="Technologies & Skills" ref={expRef} inView={expIn} isMobile={isMobile} bg={colors.bgPage}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? spacing.xl : spacing.xxl,
          alignItems: "center",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: spacing.lg }}>
            {EXPERTISE.map((ex, i) => (
              <ExpertiseBar key={i} ex={ex} idx={i} inView={expIn} />
            ))}
          </div>
          <div style={{
            background: gradients.primary,
            borderRadius: radius.xl,
            padding: isMobile ? `${spacing.xxl}px ${spacing.xl}px` : `${spacing.hero.paddingY - 28}px ${spacing.hero.paddingX + 12}px`,
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: -30, right: -30,
              width: 140, height: 140, borderRadius: radius.full,
              border: `2px solid ${colors.accentTint15}`,
              pointerEvents: "none",
            }} />
            <p style={{
              color: colors.accent,
              fontFamily: typography.fontFamily.secondaryHeading,
              fontWeight: typography.weight.bold,
              fontSize: typography.size.xs,
              letterSpacing: typography.letterSpacing.widest,
              textTransform: "uppercase",
              margin: `0 0 ${spacing.sm + 4}px`,
            }}>Why Our Stack?</p>
            <h3 style={{
              color: colors.textOnDark,
              fontFamily: typography.heading.fontFamily,
              fontWeight: typography.weight.extrabold,
              fontSize: isMobile ? "1.25rem" : "1.55rem",
              margin: `0 0 ${spacing.lg - 4}px`,
              lineHeight: typography.lineHeight.normal,
            }}>
              Best-fit technology, chosen for your project
            </h3>
            <p style={{
              color: colors.textOnDarkSub,
              fontFamily: typography.fontFamily.paragraph,
              fontSize: typography.size.md,
              lineHeight: typography.lineHeight.body,
              margin: `0 0 ${spacing.xl}px`,
            }}>
              We don't use a one-size-fits-all stack. Every technology we recommend is chosen
              based on your project's scale, goals, and long-term maintainability.
            </p>
            {["Scalable & future-proof architecture", "Modern, battle-tested frameworks", "Optimized for speed & security"].map((pt, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: spacing.sm + 2, marginBottom: spacing.sm + 2 }}>
                <div style={{
                  width: 20, height: 20, borderRadius: radius.full,
                  background: colors.accentTint20,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="10" height="10" viewBox="0 0 10 10">
                    <path d="M2 5l2.5 2.5L8 3" stroke={colors.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <span style={{
                  color: colors.textOnDark85,
                  fontFamily: typography.fontFamily.paragraph,
                  fontSize: typography.size.base,
                  fontWeight: typography.weight.medium,
                }}>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrap>

      {/* ── TESTIMONIALS ── */}
      <SectionWrap label="Client Testimonials" title="What Our Clients Say" ref={testRef} inView={testIn} isMobile={isMobile} bg={colors.bgCard}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)",
          gap: isMobile ? spacing.lg - 4 : spacing.xl - 2,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} t={t} idx={i} inView={testIn} isMobile={isMobile} />
          ))}
        </div>
      </SectionWrap>

      {/* ── CTA STRIP ── */}
      <div style={{ maxWidth: layout.maxWidthGrid, margin: "0 auto", padding: isMobile ? `0 ${spacing.sectionPadXMob}px ${layout.sectionPadYMob}px` : `0 ${layout.sectionPadX}px ${layout.sectionPadY - 8}px` }}>
        <div style={{
          background: gradients.cta,
          borderRadius: isMobile ? radius.lg : radius.xl + 2,
          padding: isMobile ? `${spacing.xxl + 8}px ${spacing.xl}px` : `${spacing.hero.paddingY - 16}px ${spacing.hero.paddingX + 24}px`,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          justifyContent: "space-between",
          gap: isMobile ? spacing.xl : spacing.xxl,
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -40, right: 80, width: 200, height: 200, borderRadius: radius.full, border: `2px solid ${colors.accentTint12}`, pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -60, right: -40, width: 260, height: 260, borderRadius: radius.full, background: colors.accentTint4, pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <p style={{
              color: colors.accent,
              fontFamily: typography.fontFamily.secondaryHeading,
              fontWeight: typography.weight.bold,
              fontSize: typography.size.sm,
              letterSpacing: typography.letterSpacing.wider,
              textTransform: "uppercase",
              margin: `0 0 ${spacing.sm + 2}px`,
            }}>Ready to get started?</p>
            <h3 style={{
              color: colors.textOnDark,
              fontFamily: typography.heading.fontFamily,
              fontSize: isMobile ? "1.3rem" : "1.8rem",
              fontWeight: typography.weight.extrabold,
              margin: `0 0 ${spacing.sm}px`,
              lineHeight: typography.lineHeight.tight,
            }}>
              Let's build something great together
            </h3>
            <p style={{
              color: colors.textOnDark60,
              fontFamily: typography.fontFamily.paragraph,
              fontSize: typography.size.md,
              margin: 0,
            }}>Talk to our team — free consultation, no commitment.</p>
          </div>
          <div style={{ display: "flex", gap: spacing.sm + 4, flexWrap: "wrap", width: isMobile ? "100%" : "auto" }}>
            <a href="tel:+918484905526" style={{
              display: "inline-block",
              background: colors.accent,
              color: colors.textOnDark,
              fontFamily: typography.fontFamily.secondaryHeading,
              fontWeight: typography.weight.bold,
              fontSize: typography.size.base,
              letterSpacing: typography.letterSpacing.wide,
              textTransform: "uppercase",
              padding: `${spacing.md}px ${spacing.xxl - 4}px`,
              borderRadius: radius.md,
              textDecoration: "none",
              boxShadow: shadows.cta,
              flex: isMobile ? "1" : "none",
              textAlign: "center",
            }}>📞 Call Now</a>
            <a href="https://wa.me/918484905526" target="_blank" rel="noreferrer" style={{
              display: "inline-block",
              background: colors.whiteTint10,
              color: colors.textOnDark,
              fontFamily: typography.fontFamily.secondaryHeading,
              fontWeight: typography.weight.bold,
              fontSize: typography.size.base,
              letterSpacing: typography.letterSpacing.wide,
              textTransform: "uppercase",
              padding: `${spacing.md}px ${spacing.xxl - 4}px`,
              borderRadius: radius.md,
              textDecoration: "none",
              border: `1px solid ${colors.borderLight}`,
              flex: isMobile ? "1" : "none",
              textAlign: "center",
            }}>💬 WhatsApp</a>
          </div>
        </div>
      </div>

    </div>
    <Footer/></>
  );
};

// ── SECTION WRAPPER ──────────────────────────────────────────────────
const SectionWrap = React.forwardRef(({ label, title, children, inView, isMobile, bg, id }, ref) => (
  <div id={id} style={{ background: bg || colors.bgPage }}>
    <div ref={ref} style={{
      maxWidth: layout.maxWidthGrid,
      margin: "0 auto",
      padding: isMobile
        ? `${layout.sectionPadYMob}px ${layout.sectionPadXMob}px`
        : `${layout.sectionPadY}px ${layout.sectionPadX}px`,
    }}>
      <div style={{
        textAlign: "center",
        marginBottom: isMobile ? spacing.xxl + 4 : spacing.hero.paddingY - 20,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity ${transitions.revealFast}, transform ${transitions.revealFast}`,
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: spacing.sm + 2, marginBottom: spacing.sm + 2 }}>
          <div style={{ width: 28, height: 3, background: colors.accent, borderRadius: radius.sm - 2 }} />
          <span style={{
            color: colors.accent,
            fontFamily: typography.fontFamily.secondaryHeading,
            fontWeight: typography.weight.bold,
            fontSize: typography.size.xs,
            letterSpacing: typography.letterSpacing.widest,
            textTransform: "uppercase",
          }}>{label}</span>
          <div style={{ width: 28, height: 3, background: colors.accent, borderRadius: radius.sm - 2 }} />
        </div>
        <h2 style={{
          fontSize: isMobile ? "1.5rem" : "2.1rem",
          fontFamily: typography.heading.fontFamily,
          fontWeight: typography.weight.extrabold,
          color: colors.textHeading,
          margin: 0,
          letterSpacing: typography.letterSpacing.tight,
        }}>{title}</h2>
      </div>
      {children}
    </div>
  </div>
));

// ── SERVICE CARD ─────────────────────────────────────────────────────
const ServiceCard = ({ svc, idx, inView, isMobile }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? (svc.highlight ? colors.accent : colors.primary) : colors.bgCard,
        borderRadius: radius.lg,
        padding: isMobile ? `${spacing.xl}px ${spacing.lg}px` : `${spacing.xxl}px ${spacing.xl + 2}px`,
        border: `2px solid ${hov ? "transparent" : svc.highlight ? colors.accentTint25 : colors.borderDefault}`,
        boxShadow: hov ? shadows.cardSmHover : shadows.cardSm,
        transform: hov ? "translateY(-6px)" : inView ? "translateY(0)" : "translateY(30px)",
        opacity: inView ? 1 : 0,
        transition: `all ${transitions.default} ${idx * 0.08}s`,
        cursor: "default",
        display: "flex", flexDirection: "column", gap: spacing.lg - 4,
        position: "relative", overflow: "hidden",
      }}
    >
      {svc.highlight && !hov && (
        <div style={{
          position: "absolute", top: 14, right: 14,
          background: colors.accent,
          color: colors.textOnDark,
          fontFamily: typography.fontFamily.secondaryHeading,
          fontSize: typography.size.xs - 2,
          fontWeight: typography.weight.extrabold,
          letterSpacing: typography.letterSpacing.wider,
          padding: `3px ${spacing.sm}px`,
          borderRadius: radius.pill,
          textTransform: "uppercase",
        }}>
          Popular
        </div>
      )}
      <div style={{
        width: 58, height: 58, borderRadius: radius.md + 6,
        background: hov ? colors.whiteTint10 : svc.highlight ? colors.accentTint12 : colors.primaryTint6,
        display: "flex", alignItems: "center", justifyContent: "center",
        border: `1.5px solid ${hov ? colors.whiteTint10 : colors.accentTint25}`,
        transition: `all ${transitions.default}`,
      }}>
        {svc.icon}
      </div>
      <div>
        <p style={{
          fontSize: typography.size.xs - 1,
          fontFamily: typography.fontFamily.secondaryHeading,
          fontWeight: typography.weight.bold,
          letterSpacing: typography.letterSpacing.widest,
          textTransform: "uppercase",
          color: hov ? colors.textOnDark60 : colors.accent,
          margin: `0 0 ${spacing.xs + 2}px`,
        }}>{svc.tag}</p>
        <h3 style={{
          fontSize: 17,
          fontFamily: typography.heading.fontFamily,
          fontWeight: typography.weight.extrabold,
          color: hov ? colors.textOnDark : colors.textHeading,
          margin: `0 0 ${spacing.sm + 2}px`,
          lineHeight: typography.lineHeight.normal,
        }}>{svc.title}</h3>
        <p style={{
          fontSize: typography.size.lg - 0.5,
          fontFamily: typography.fontFamily.paragraph,
          color: hov ? colors.textOnDark85 : colors.textBodyAlt,
          lineHeight: typography.lineHeight.body,
          margin: 0,
        }}>{svc.desc}</p>
      </div>
      <a
        href={`https://wa.me/918484905526?text=${encodeURIComponent(`Hello, I am interested in your ${svc.title} services. Please tell more about it.`)}`}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "flex", alignItems: "center", gap: spacing.xs + 2,
          marginTop: spacing.xs,
          textDecoration: "none", width: "fit-content",
        }}
      >
        <span style={{
          fontSize: typography.size.xs - 1,
          fontFamily: typography.fontFamily.secondaryHeading,
          fontWeight: typography.weight.bold,
          color: hov ? colors.textOnDarkSub : colors.primary,
          letterSpacing: typography.letterSpacing.wide,
          textTransform: "uppercase",
        }}>Know More</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
          style={{ transform: hov ? "translateX(4px)" : "none", transition: `transform ${transitions.fast}` }}>
          <path d="M2 7h10M8 4l3 3-3 3" stroke={hov ? colors.textOnDark : colors.primary} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
};

// ── FEATURE ITEM ─────────────────────────────────────────────────────
const FeatureItem = ({ f, idx, inView }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", gap: spacing.lg - 4, alignItems: "flex-start",
        padding: `${spacing.lg}px ${spacing.lg - 2}px`,
        background: hov ? colors.bgLight : "transparent",
        borderRadius: radius.md + 6,
        border: `1.5px solid ${hov ? colors.primaryTint15 : colors.primaryTint7}`,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        opacity: inView ? 1 : 0,
        transition: `all ${transitions.default} ${(idx % 3) * 0.07 + Math.floor(idx / 3) * 0.12}s`,
        cursor: "default",
      }}
    >
      <div style={{
        width: 48, height: 48, borderRadius: radius.md, flexShrink: 0,
        background: hov ? colors.primary : colors.primaryTint7,
        border: `1.5px solid ${hov ? colors.primary : colors.primaryTint12}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 22,
        transition: `all ${transitions.fast}`,
      }}>
        {f.icon}
      </div>
      <div>
        <h4 style={{
          fontSize: typography.size.lg,
          fontFamily: typography.heading.fontFamily,
          fontWeight: typography.weight.bold,
          color: hov ? colors.textHeading : "#1a2340",
          margin: `0 0 ${spacing.xs + 2}px`,
          lineHeight: typography.lineHeight.normal,
        }}>{f.title}</h4>
        <p style={{
          fontSize: typography.size.base,
          fontFamily: typography.fontFamily.paragraph,
          color: colors.textSub,
          lineHeight: typography.lineHeight.body,
          margin: 0,
        }}>{f.desc}</p>
      </div>
    </div>
  );
};

// ── EXPERTISE BAR ────────────────────────────────────────────────────
const ExpertiseBar = ({ ex, idx, inView }) => (
  <div style={{
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-24px)",
    transition: `opacity 0.5s ease ${idx * 0.09}s, transform 0.5s ease ${idx * 0.09}s`,
  }}>
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: spacing.xs + 3 }}>
      <span style={{
        fontSize: typography.size.lg - 0.5,
        fontFamily: typography.fontFamily.paragraph,
        fontWeight: typography.weight.bold,
        color: "#1a2340",
      }}>{ex.label}</span>
      <span style={{
        fontSize: typography.size.sm,
        fontFamily: typography.fontFamily.secondaryHeading,
        fontWeight: typography.weight.bold,
        color: colors.accent,
      }}>{ex.pct}%</span>
    </div>
    <div style={{ height: 8, background: colors.primaryTint8, borderRadius: radius.sm + 4, overflow: "hidden" }}>
      <div style={{
        height: "100%",
        width: inView ? `${ex.pct}%` : "0%",
        background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
        borderRadius: radius.sm + 4,
        transition: `width 1s ease ${0.3 + idx * 0.1}s`,
      }} />
    </div>
  </div>
);

// ── TESTIMONIAL CARD ─────────────────────────────────────────────────
const TestimonialCard = ({ t, idx, inView, isMobile }) => (
  <div style={{
    background: colors.bgCard,
    borderRadius: radius.lg,
    padding: isMobile ? `${spacing.xl + 2}px ${spacing.xl - 2}px` : `${spacing.xxl}px ${spacing.xxl - 4}px`,
    border: `2px solid ${colors.primaryTint8}`,
    boxShadow: shadows.cardMd,
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.5s ease ${idx * 0.12}s, transform 0.5s ease ${idx * 0.12}s`,
    display: "flex", flexDirection: "column", gap: spacing.lg + 2,
  }}>
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: t.stars }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16">
          <path d="M8 1l1.8 4h4.2l-3.4 2.5 1.3 4.1L8 9.1l-3.9 2.5 1.3-4.1L2 5h4.2z" fill={colors.accent} />
        </svg>
      ))}
    </div>
    <p style={{
      fontSize: typography.size.md,
      fontFamily: typography.fontFamily.paragraph,
      color: colors.textBody,
      lineHeight: typography.lineHeight.body,
      margin: 0,
      fontStyle: "italic",
    }}>"{t.text}"</p>
    <div style={{
      display: "flex", alignItems: "center", gap: spacing.sm + 4,
      borderTop: `1px solid ${colors.primaryTint8}`,
      paddingTop: spacing.lg - 4,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: radius.full, flexShrink: 0,
        background: gradients.avatar,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: colors.accent,
        fontFamily: typography.heading.fontFamily,
        fontWeight: typography.weight.extrabold,
        fontSize: typography.size.md,
        letterSpacing: typography.letterSpacing.wide,
      }}>
        {t.avatar}
      </div>
      <div>
        <p style={{
          fontSize: typography.size.md,
          fontFamily: typography.heading.fontFamily,
          fontWeight: typography.weight.extrabold,
          color: colors.textHeading,
          margin: `0 0 2px`,
        }}>{t.name}</p>
        <p style={{
          fontSize: typography.size.sm,
          fontFamily: typography.fontFamily.paragraph,
          color: colors.textMuted,
          margin: 0,
          fontWeight: typography.weight.medium,
        }}>{t.role}</p>
      </div>
    </div>
  </div>
);

export default Services;

// import React, { useState, useEffect, useRef } from 'react';

// // ── RESPONSIVE HOOK ──────────────────────────────────────────────────
// function useWindowWidth() {
//   const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
//   useEffect(() => {
//     const handle = () => setW(window.innerWidth);
//     window.addEventListener('resize', handle);
//     return () => window.removeEventListener('resize', handle);
//   }, []);
//   return w;
// }

// // ── INTERSECTION OBSERVER HOOK ───────────────────────────────────────
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
//   {
//     icon: (
//       <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
//         <rect x="4" y="8" width="30" height="22" rx="3" stroke="#e8a020" strokeWidth="2.2" fill="none"/>
//         <path d="M13 30l-2 4h14l-2-4" stroke="#e8a020" strokeWidth="2" strokeLinecap="round"/>
//         <path d="M9 20l4 4 8-8" stroke="#e8a020" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
//         <circle cx="28" cy="12" r="5" fill="#0d2b6e" stroke="#e8a020" strokeWidth="2"/>
//         <path d="M26 12l1.5 1.5L30 10" stroke="#e8a020" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     ),
//     tag: "Security",
//     title: "Web & App Security",
//     desc: "We implement advanced security protocols, secure coding practices, and monitoring systems to keep your digital assets protected from evolving threats.",
//     highlight: false,
//   },
//   {
//     icon: (
//       <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
//         <circle cx="19" cy="19" r="13" stroke="#e8a020" strokeWidth="2.2" fill="none"/>
//         <path d="M19 8v4M19 26v4M8 19h4M26 19h4" stroke="#e8a020" strokeWidth="2" strokeLinecap="round"/>
//         <circle cx="19" cy="19" r="5" fill="#e8a020" fillOpacity="0.2" stroke="#e8a020" strokeWidth="2"/>
//         <path d="M13 13l2.5 2.5M22.5 22.5L25 25M13 25l2.5-2.5M22.5 15.5L25 13" stroke="#e8a020" strokeWidth="1.8" strokeLinecap="round"/>
//       </svg>
//     ),
//     tag: "Performance",
//     title: "Performance Optimization",
//     desc: "Your website and apps run faster, smoother, and more efficiently with our expert performance tuning, caching strategies, and optimization techniques.",
//     highlight: true,
//   },
//   {
//     icon: (
//       <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
//         <rect x="5" y="22" width="6" height="10" rx="1.5" fill="#e8a020" fillOpacity="0.25" stroke="#e8a020" strokeWidth="2"/>
//         <rect x="15" y="15" width="6" height="17" rx="1.5" fill="#e8a020" fillOpacity="0.25" stroke="#e8a020" strokeWidth="2"/>
//         <rect x="25" y="8" width="6" height="24" rx="1.5" fill="#e8a020" fillOpacity="0.25" stroke="#e8a020" strokeWidth="2"/>
//         <path d="M7 18l8-6 8 4 8-10" stroke="#e8a020" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
//         <circle cx="7" cy="18" r="2" fill="#e8a020"/>
//         <circle cx="15" cy="12" r="2" fill="#e8a020"/>
//         <circle cx="23" cy="16" r="2" fill="#e8a020"/>
//         <circle cx="31" cy="6" r="2" fill="#e8a020"/>
//       </svg>
//     ),
//     tag: "Analytics",
//     title: "Data-Driven Decisions",
//     desc: "We provide custom dashboards, reports, and analytics pipelines to help you extract insights from your data and make smarter business decisions.",
//     highlight: false,
//   },
//   {
//     icon: (
//       <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
//         <path d="M19 6C12 6 6 11 6 19s6 13 13 13 13-6 13-13S26 6 19 6z" stroke="#e8a020" strokeWidth="2.2" fill="none"/>
//         <path d="M15 14h-4v10h4" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//         <path d="M15 19h3" stroke="#e8a020" strokeWidth="2" strokeLinecap="round"/>
//         <path d="M22 14v10" stroke="#e8a020" strokeWidth="2" strokeLinecap="round"/>
//         <path d="M27 14h-3a2 2 0 000 4h1a2 2 0 010 4h-3" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//       </svg>
//     ),
//     tag: "Support",
//     title: "Dedicated Support",
//     desc: "From deployment to long-term maintenance, our team offers reliable, round-the-clock support so your business stays up, running, and growing.",
//     highlight: false,
//   },
// ];

// const FEATURES = [
//   { icon: "🌐", title: "Custom Website Development", desc: "We design and develop responsive, fast, and scalable websites tailored to your business goals and brand identity." },
//   { icon: "📱", title: "Mobile App Development", desc: "Build powerful Android, iOS, and cross-platform apps designed for performance, usability, and user experience." },
//   { icon: "📊", title: "Data Analytics & Insights", desc: "Turn raw data into actionable insights using custom dashboards, reports, and predictive analytics solutions." },
//   { icon: "🎨", title: "UI/UX Design Services", desc: "We create modern, intuitive, and user-friendly designs that improve engagement, retention, and conversions." },
//   { icon: "⚙️", title: "Software & Application Development", desc: "From internal tools to full enterprise platforms, we build reliable and scalable software tailored to your workflows." },
//   { icon: "☁️", title: "Cloud Deployment & DevOps", desc: "Set up secure cloud infrastructure, CI/CD pipelines, and deployment automation tailored for your project." },
//   { icon: "🔍", title: "SEO & Digital Growth Solutions", desc: "Enhance your online presence with SEO, analytics, and performance optimization strategies that drive real traffic." },
//   { icon: "🛒", title: "E-Commerce Development", desc: "Launch secure, scalable online stores with payment gateways, inventory tracking, and seamless automation." },
//   { icon: "💡", title: "IT Consulting & Technical Strategy", desc: "Get expert guidance for scaling technology, improving systems architecture, and optimizing performance." },
// ];

// const TESTIMONIALS = [
//   {
//     name: "Arjun Mehta", role: "Founder",
//     text: "RAM helped us streamline our operations with a modern, high-performance website and smart analytics dashboards. Their strong understanding of both business and technology made the entire transformation smooth and impactful.",
//     avatar: "AM", stars: 5,
//   },
//   {
//     name: "Priya Sharma", role: "Operation Head",
//     text: "RAM built our mobile app with precision and clarity, delivering a solution that matched our goals exactly. Their communication, technical expertise, and problem-solving skills consistently stood out throughout the project",
//     avatar: "PS", stars: 5,
//   },
//   {
//     name: "Ravi Kulkarni", role: "Director",
//     text: "The RAM team delivered exactly what we needed — a well-designed website integrated with automation that significantly reduced our manual workload. Their support after launch has been exceptional and truly reliable.",
//     avatar: "RK", stars: 5,
//   },
// ];

// const EXPERTISE = [
//   { label: "React / Next.js", pct: 95 },
//   { label: "Node.js / Python", pct: 92 },
//   { label: "Flutter / React Native", pct: 88 },
//   { label: "AWS / Cloud DevOps", pct: 85 },
//   { label: "Data Analytics & AI", pct: 90 },
//   { label: "UI/UX & Figma", pct: 87 },
// ];

// // ════════════════════════════════════════════════════════════════════
// const Services = () => {
//   const width = useWindowWidth();
//   const isMobile = width < 640;
//   const isTablet = width >= 640 && width < 1024;

//   const [heroRef, heroIn] = useInView(0.1);
//   const [servRef, servIn] = useInView(0.1);
//   const [featRef, featIn] = useInView(0.1);
//   const [expRef, expIn] = useInView(0.1);
//   const [testRef, testIn] = useInView(0.1);

//   return (
//     <div style={{ minHeight: "100vh", background: "#f8f9fc", fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif", overflowX: "hidden" }}>

//    {/* ── HERO ── */}
// <div
//   ref={heroRef}
//   style={{
//     background:
//       "linear-gradient(135deg, #081c4b 0%, #0d2b6e 40%, #1a3e8c 100%)",
//     padding: isMobile ? "50px 20px 60px" : "70px 24px 80px",
//     position: "relative",
//     overflow: "hidden",
//   }}
// >
//   {/* Animated Background Blobs */}
//   <div
//     style={{
//       position: "absolute",
//       top: -120,
//       left: -100,
//       width: 320,
//       height: 320,
//       borderRadius: "50%",
//       background: "rgba(232,160,32,0.15)",
//       filter: "blur(60px)",
//       animation: "floatBlob 8s ease-in-out infinite",
//     }}
//   />

//   <div
//     style={{
//       position: "absolute",
//       bottom: -120,
//       right: -100,
//       width: 340,
//       height: 340,
//       borderRadius: "50%",
//       background: "rgba(255,255,255,0.08)",
//       filter: "blur(70px)",
//       animation: "floatBlob2 10s ease-in-out infinite",
//     }}
//   />

//   {/* Animated Grid */}
//   <div
//     style={{
//       position: "absolute",
//       inset: 0,
//       backgroundImage:
//         "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
//       backgroundSize: "40px 40px",
//       maskImage:
//         "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.3))",
//     }}
//   />

//   {/* Glowing Line */}
//   <div
//     style={{
//       position: "absolute",
//       top: 0,
//       left: "-30%",
//       width: "160%",
//       height: 2,
//       background:
//         "linear-gradient(90deg, transparent, rgba(232,160,32,0.8), transparent)",
//       animation: "lineMove 5s linear infinite",
//     }}
//   />

//   <div
//     style={{
//       maxWidth: 900,
//       margin: "0 auto",
//       position: "relative",
//       zIndex: 2,
//       textAlign: "center",
//     }}
//   >
//     {/* Badge */}
//     <div
//       style={{
//         display: "inline-flex",
//         alignItems: "center",
//         gap: 10,
//         marginBottom: 18,
//         background: "rgba(255,255,255,0.08)",
//         border: "1px solid rgba(255,255,255,0.14)",
//         borderRadius: 40,
//         padding: "8px 20px",
//         backdropFilter: "blur(10px)",
//         opacity: heroIn ? 1 : 0,
//         transform: heroIn
//           ? "translateY(0)"
//           : "translateY(24px)",
//         transition: "all 0.7s ease",
//       }}
//     >
//       <div
//         style={{
//           width: 10,
//           height: 10,
//           borderRadius: "50%",
//           background: "#e8a020",
//           boxShadow: "0 0 12px #e8a020",
//         }}
//       />
//       <span
//         style={{
//           color: "#fff",
//           fontWeight: 700,
//           fontSize: 12,
//           letterSpacing: "0.15em",
//           textTransform: "uppercase",
//         }}
//       >
//         Premium Digital Solutions
//       </span>
//     </div>

//     {/* Heading */}
//     <h1
//       style={{
//         fontSize: isMobile
//           ? "2.1rem"
//           : isTablet
//           ? "3rem"
//           : "3.8rem",
//         fontWeight: 900,
//         lineHeight: 1.05,
//         margin: "0 0 18px",
//         letterSpacing: "-0.04em",
//         color: "#fff",
//         opacity: heroIn ? 1 : 0,
//         transform: heroIn
//           ? "translateY(0) scale(1)"
//           : "translateY(30px) scale(0.96)",
//         transition: "all 0.9s ease",
//       }}
//     >
//       Build Faster.
//       <br />

//       <span
//         style={{
//           background:
//             "linear-gradient(90deg, #e8a020, #ffd27a, #e8a020)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           backgroundSize: "200% auto",
//           animation: "shineText 4s linear infinite",
//         }}
//       >
//         Scale Smarter.
//       </span>
//     </h1>

//     {/* Paragraph */}
//     <p
//       style={{
//         color: "rgba(255,255,255,0.72)",
//         fontSize: isMobile ? 14 : 17,
//         lineHeight: 1.8,
//         maxWidth: 620,
//         margin: "0 auto 30px",
//         opacity: heroIn ? 1 : 0,
//         transform: heroIn
//           ? "translateY(0)"
//           : "translateY(28px)",
//         transition: "all 1s ease 0.2s",
//       }}
//     >
//       We create powerful web platforms, mobile apps,
//       analytics systems, and enterprise solutions
//       designed to help modern businesses grow,
//       automate, and lead with confidence.
//     </p>

//     {/* CTA Buttons */}
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         gap: 16,
//         flexWrap: "wrap",
//         opacity: heroIn ? 1 : 0,
//         transform: heroIn
//           ? "translateY(0)"
//           : "translateY(25px)",
//         transition: "all 1s ease 0.3s",
//       }}
//     >
//       <a
//         href="https://wa.me/918484905526"
//         target="_blank"
//         rel="noreferrer"
//         style={{
//           background:
//             "linear-gradient(135deg, #e8a020, #ffbe4d)",
//           color: "#fff",
//           padding: "14px 28px",
//           borderRadius: 12,
//           textDecoration: "none",
//           fontWeight: 800,
//           fontSize: 13,
//           letterSpacing: "0.08em",
//           textTransform: "uppercase",
//           boxShadow:
//             "0 10px 30px rgba(232,160,32,0.45)",
//           transition: "all 0.3s ease",
//         }}
//       >
//         🚀 Get Free Consultation
//       </a>

//       <a
//         href="#features"
//         style={{
//           background: "rgba(255,255,255,0.08)",
//           color: "#fff",
//           padding: "14px 28px",
//           borderRadius: 12,
//           textDecoration: "none",
//           fontWeight: 700,
//           fontSize: 13,
//           border: "1px solid rgba(255,255,255,0.16)",
//           backdropFilter: "blur(10px)",
//         }}
//       >
//         Explore Services
//       </a>
//     </div>

//     {/* Floating Cards */}
//     <div
//       style={{
//         marginTop: 40,
//         display: "grid",
//         gridTemplateColumns: isMobile
//           ? "1fr"
//           : "repeat(3,1fr)",
//         gap: 18,
//       }}
//     >
//       {[
//         { num: "50+", txt: "Projects Delivered" },
//         { num: "98%", txt: "Client Satisfaction" },
//         { num: "24/7", txt: "Support Available" },
//       ].map((item, i) => (
//         <div
//           key={i}
//           style={{
//             background: "rgba(255,255,255,0.08)",
//             border:
//               "1px solid rgba(255,255,255,0.12)",
//             borderRadius: 18,
//             padding: "22px 18px",
//             backdropFilter: "blur(12px)",
//             animation: `floatCard ${
//               4 + i
//             }s ease-in-out infinite`,
//           }}
//         >
//           <h2
//             style={{
//               margin: 0,
//               color: "#e8a020",
//               fontSize: isMobile ? "1.8rem" : "2.2rem",
//               fontWeight: 900,
//             }}
//           >
//             {item.num}
//           </h2>

//           <p
//             style={{
//               marginTop: 8,
//               color: "rgba(255,255,255,0.7)",
//               fontSize: 12,
//               letterSpacing: "0.08em",
//               textTransform: "uppercase",
//             }}
//           >
//             {item.txt}
//           </p>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* ANIMATIONS */}
//   <style>
//     {`
//       @keyframes floatBlob {
//         0% { transform: translateY(0px); }
//         50% { transform: translateY(30px); }
//         100% { transform: translateY(0px); }
//       }

//       @keyframes floatBlob2 {
//         0% { transform: translateY(0px); }
//         50% { transform: translateY(-25px); }
//         100% { transform: translateY(0px); }
//       }

//       @keyframes shineText {
//         0% { background-position: 0% center; }
//         100% { background-position: 200% center; }
//       }

//       @keyframes lineMove {
//         0% { transform: translateX(-20%); }
//         100% { transform: translateX(20%); }
//       }

//       @keyframes floatCard {
//         0% { transform: translateY(0px); }
//         50% { transform: translateY(-10px); }
//         100% { transform: translateY(0px); }
//       }
//     `}
//   </style>
// </div>

//       {/* Curve */}
//       <div style={{ height: 44, background: "#f8f9fc", marginTop: -44, borderRadius: "44px 44px 0 0", position: "relative", zIndex: 2 }} />

//       {/* ── SERVICE CARDS ── */}
//       <SectionWrap label="Core Services" title="What We Do Best" ref={servRef} inView={servIn} isMobile={isMobile} bg="#f8f9fc">
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)",
//           gap: isMobile ? 16 : 20,
//         }}>
//           {SERVICES.map((svc, i) => (
//             <ServiceCard key={i} svc={svc} idx={i} inView={servIn} isMobile={isMobile} />
//           ))}
//         </div>
//       </SectionWrap>

//       {/* ── FEATURES GRID ── */}
//       <SectionWrap id="features" label="Everything You'll Need" title="Full-Spectrum Capabilities" ref={featRef} inView={featIn} isMobile={isMobile} bg="#fff">
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)",
//           gap: isMobile ? 12 : 20,
//         }}>
//           {FEATURES.map((f, i) => (
//             <FeatureItem key={i} f={f} idx={i} inView={featIn} />
//           ))}
//         </div>
//       </SectionWrap>

//       {/* ── OUR EXPERTISE ── */}
//       <SectionWrap label="Our Expertise" title="Technologies & Skills" ref={expRef} inView={expIn} isMobile={isMobile} bg="#f8f9fc">
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
//           gap: isMobile ? 24 : 32,
//           alignItems: "center",
//         }}>
//           <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
//             {EXPERTISE.map((ex, i) => (
//               <ExpertiseBar key={i} ex={ex} idx={i} inView={expIn} />
//             ))}
//           </div>
//           <div style={{
//             background: "linear-gradient(135deg, #0d2b6e 0%, #1a3e8c 100%)",
//             borderRadius: 20, padding: isMobile ? "32px 24px" : "44px 36px",
//             position: "relative", overflow: "hidden",
//           }}>
//             <div style={{ position: "absolute", top: -30, right: -30, width: 140, height: 140, borderRadius: "50%", border: "2px solid rgba(232,160,32,0.15)", pointerEvents: "none" }} />
//             <p style={{ color: "#e8a020", fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 12px" }}>Why Our Stack?</p>
//             <h3 style={{ color: "#fff", fontWeight: 800, fontSize: isMobile ? "1.25rem" : "1.55rem", margin: "0 0 16px", lineHeight: 1.3 }}>
//               Best-fit technology, chosen for your project
//             </h3>
//             <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 14, lineHeight: 1.8, margin: "0 0 24px" }}>
//               We don't use a one-size-fits-all stack. Every technology we recommend is chosen based on your project's scale, goals, and long-term maintainability.
//             </p>
//             {["Scalable & future-proof architecture", "Modern, battle-tested frameworks", "Optimized for speed & security"].map((pt, i) => (
//               <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
//                 <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(232,160,32,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                   <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5l2.5 2.5L8 3" stroke="#e8a020" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>
//                 </div>
//                 <span style={{ color: "rgba(255,255,255,0.80)", fontSize: 13, fontWeight: 500 }}>{pt}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </SectionWrap>

//       {/* ── TESTIMONIALS ── */}
//       <SectionWrap label="Client Testimonials" title="What Our Clients Say" ref={testRef} inView={testIn} isMobile={isMobile} bg="#fff">
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)",
//           gap: isMobile ? 16 : 22,
//         }}>
//           {TESTIMONIALS.map((t, i) => (
//             <TestimonialCard key={i} t={t} idx={i} inView={testIn} isMobile={isMobile} />
//           ))}
//         </div>
//       </SectionWrap>

//       {/* ── CTA STRIP ── */}
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

// // ── SECTION WRAPPER ──────────────────────────────────────────────────
// const SectionWrap = React.forwardRef(({ label, title, children, inView, isMobile, bg, id }, ref) => (
//   <div id={id} style={{ background: bg || "#f8f9fc" }}>
//     <div ref={ref} style={{ maxWidth: 1060, margin: "0 auto", padding: isMobile ? "52px 16px" : "72px 24px" }}>
//       <div style={{
//         textAlign: "center", marginBottom: isMobile ? 36 : 52,
//         opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)",
//         transition: "opacity 0.6s ease, transform 0.6s ease",
//       }}>
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 10 }}>
//           <div style={{ width: 28, height: 3, background: "#e8a020", borderRadius: 2 }} />
//           <span style={{ color: "#e8a020", fontWeight: 700, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>{label}</span>
//           <div style={{ width: 28, height: 3, background: "#e8a020", borderRadius: 2 }} />
//         </div>
//         <h2 style={{ fontSize: isMobile ? "1.5rem" : "2.1rem", fontWeight: 800, color: "#0d2b6e", margin: 0, letterSpacing: "-0.015em" }}>{title}</h2>
//       </div>
//       {children}
//     </div>
//   </div>
// ));

// // ── SERVICE CARD ─────────────────────────────────────────────────────
// const ServiceCard = ({ svc, idx, inView, isMobile }) => {
//   const [hov, setHov] = useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         background: hov ? (svc.highlight ? "#e8a020" : "#1a3e8c") : "#fff",
//         borderRadius: 18,
//         padding: isMobile ? "24px 20px" : "32px 26px",
//         border: `2px solid ${hov ? "transparent" : svc.highlight ? "rgba(232,160,32,0.35)" : "rgba(26,62,140,0.10)"}`,
//         boxShadow: hov ? "0 20px 48px rgba(26,62,140,0.22)" : "0 2px 14px rgba(26,62,140,0.07)",
//         transform: hov ? "translateY(-6px)" : inView ? "translateY(0)" : "translateY(30px)",
//         opacity: inView ? 1 : 0,
//         transition: `all 0.3s ease ${idx * 0.08}s`,
//         cursor: "default",
//         display: "flex", flexDirection: "column", gap: 16,
//         position: "relative", overflow: "hidden",
//       }}
//     >
//       {svc.highlight && !hov && (
//         <div style={{ position: "absolute", top: 14, right: 14, background: "#e8a020", color: "#fff", fontSize: 9, fontWeight: 800, letterSpacing: "0.1em", padding: "3px 8px", borderRadius: 20, textTransform: "uppercase" }}>
//           Popular
//         </div>
//       )}
//       <div style={{
//         width: 58, height: 58, borderRadius: 14,
//         background: hov ? "rgba(255,255,255,0.15)" : svc.highlight ? "rgba(232,160,32,0.12)" : "rgba(26,62,140,0.06)",
//         display: "flex", alignItems: "center", justifyContent: "center",
//         border: `1.5px solid ${hov ? "rgba(255,255,255,0.25)" : "rgba(232,160,32,0.25)"}`,
//         transition: "all 0.3s",
//       }}>
//         {svc.icon}
//       </div>
//       <div>
//         <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: hov ? "rgba(255,255,255,0.7)" : "#e8a020", margin: "0 0 6px" }}>{svc.tag}</p>
//         <h3 style={{ fontSize: 17, fontWeight: 800, color: hov ? "#fff" : "#0d2b6e", margin: "0 0 10px", lineHeight: 1.3 }}>{svc.title}</h3>
//         <p style={{ fontSize: 13.5, color: hov ? "rgba(255,255,255,0.78)" : "#5a6380", lineHeight: 1.75, margin: 0 }}>{svc.desc}</p>
//       </div>
//       <a
//   href={`https://wa.me/918484905526?text=${encodeURIComponent(
//     `Hello, I am interested in your ${svc.title} services. Please tell more about it.`
//   )}`}
//   target="_blank"
//   rel="noreferrer"
//   style={{
//     display: "flex",
//     alignItems: "center",
//     gap: 6,
//     marginTop: 4,
//     textDecoration: "none",
//     width: "fit-content",
//   }}
// >
//   <span
//     style={{
//       fontSize: 11,
//       fontWeight: 700,
//       color: hov ? "rgba(255,255,255,0.9)" : "#1a3e8c",
//       letterSpacing: "0.06em",
//       textTransform: "uppercase",
//     }}
//   >
//     Know More
//   </span>

//   <svg
//     width="14"
//     height="14"
//     viewBox="0 0 14 14"
//     fill="none"
//     style={{
//       transform: hov ? "translateX(4px)" : "none",
//       transition: "transform 0.25s",
//     }}
//   >
//     <path
//       d="M2 7h10M8 4l3 3-3 3"
//       stroke={hov ? "#fff" : "#1a3e8c"}
//       strokeWidth="1.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// </a>
//     </div>
//   );
// };

// // ── FEATURE ITEM ─────────────────────────────────────────────────────
// const FeatureItem = ({ f, idx, inView }) => {
//   const [hov, setHov] = useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         display: "flex", gap: 16, alignItems: "flex-start",
//         padding: "20px 18px",
//         background: hov ? "#f0f4ff" : "transparent",
//         borderRadius: 14,
//         border: `1.5px solid ${hov ? "rgba(26,62,140,0.18)" : "rgba(26,62,140,0.07)"}`,
//         transform: inView ? "translateY(0)" : "translateY(24px)",
//         opacity: inView ? 1 : 0,
//         transition: `all 0.3s ease ${(idx % 3) * 0.07 + Math.floor(idx / 3) * 0.12}s`,
//         cursor: "default",
//       }}
//     >
//       <div style={{
//         width: 48, height: 48, borderRadius: 12, flexShrink: 0,
//         background: hov ? "#1a3e8c" : "rgba(26,62,140,0.07)",
//         border: `1.5px solid ${hov ? "#1a3e8c" : "rgba(26,62,140,0.12)"}`,
//         display: "flex", alignItems: "center", justifyContent: "center",
//         fontSize: 22, transition: "all 0.25s",
//       }}>
//         {f.icon}
//       </div>
//       <div>
//         <h4 style={{ fontSize: 15, fontWeight: 700, color: hov ? "#0d2b6e" : "#1a2340", margin: "0 0 6px", lineHeight: 1.35 }}>{f.title}</h4>
//         <p style={{ fontSize: 13, color: "#6a7290", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
//       </div>
//     </div>
//   );
// };

// // ── EXPERTISE BAR ────────────────────────────────────────────────────
// const ExpertiseBar = ({ ex, idx, inView }) => (
//   <div style={{
//     opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-24px)",
//     transition: `opacity 0.5s ease ${idx * 0.09}s, transform 0.5s ease ${idx * 0.09}s`,
//   }}>
//     <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
//       <span style={{ fontSize: 13.5, fontWeight: 700, color: "#1a2340" }}>{ex.label}</span>
//       <span style={{ fontSize: 12, fontWeight: 700, color: "#e8a020" }}>{ex.pct}%</span>
//     </div>
//     <div style={{ height: 8, background: "rgba(26,62,140,0.10)", borderRadius: 8, overflow: "hidden" }}>
//       <div style={{
//         height: "100%",
//         width: inView ? `${ex.pct}%` : "0%",
//         background: "linear-gradient(90deg, #1a3e8c 0%, #e8a020 100%)",
//         borderRadius: 8,
//         transition: `width 1s ease ${0.3 + idx * 0.1}s`,
//       }} />
//     </div>
//   </div>
// );

// // ── TESTIMONIAL CARD ─────────────────────────────────────────────────
// const TestimonialCard = ({ t, idx, inView, isMobile }) => (
//   <div style={{
//     background: "#fff", borderRadius: 18,
//     padding: isMobile ? "26px 22px" : "32px 28px",
//     border: "2px solid rgba(26,62,140,0.09)",
//     boxShadow: "0 4px 20px rgba(26,62,140,0.07)",
//     opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(28px)",
//     transition: `opacity 0.5s ease ${idx * 0.12}s, transform 0.5s ease ${idx * 0.12}s`,
//     display: "flex", flexDirection: "column", gap: 18,
//   }}>
//     <div style={{ display: "flex", gap: 3 }}>
//       {Array.from({ length: t.stars }).map((_, i) => (
//         <svg key={i} width="16" height="16" viewBox="0 0 16 16">
//           <path d="M8 1l1.8 4h4.2l-3.4 2.5 1.3 4.1L8 9.1l-3.9 2.5 1.3-4.1L2 5h4.2z" fill="#e8a020"/>
//         </svg>
//       ))}
//     </div>
//     <p style={{ fontSize: 14, color: "#4a5275", lineHeight: 1.8, margin: 0, fontStyle: "italic" }}>"{t.text}"</p>
//     <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid rgba(26,62,140,0.08)", paddingTop: 16 }}>
//       <div style={{
//         width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
//         background: "linear-gradient(135deg, #0d2b6e, #1a3e8c)",
//         display: "flex", alignItems: "center", justifyContent: "center",
//         color: "#e8a020", fontWeight: 800, fontSize: 14, letterSpacing: "0.05em",
//       }}>
//         {t.avatar}
//       </div>
//       <div>
//         <p style={{ fontSize: 14, fontWeight: 800, color: "#0d2b6e", margin: "0 0 2px" }}>{t.name}</p>
//         <p style={{ fontSize: 12, color: "#8a94b0", margin: 0, fontWeight: 500 }}>{t.role}</p>
//       </div>
//     </div>
//   </div>
// );

// export default Services;