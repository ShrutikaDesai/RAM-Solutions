import  { useState } from 'react';
//import React from 'react';
import ProductCaseStudy from '../components/ProductCaseStudy';
import theme from '../theme/theme';   // ← single import; use named exports if preferred
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
const { colors, typography, spacing, radius, shadows, transitions, gradients, layout, iconSize } = theme;

// ── Shared style helpers ─────────────────────────────────────
const text = typography; // alias for brevity

// ─────────────────────────────────────────────────────────────
//  PRODUCTS DATA
// ─────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    id: 1,
    tag: "Digital Career Counselling",
    name: "Counselling Platform",
    fullName: "All-in-One Digital Career Counselling Platform",
    description:
      "A complete digital ecosystem for career counselling organizations that streamlines student onboarding, assessments, counselling workflows, report delivery, slot booking, and communication — helping institutions scale counselling operations efficiently.",
    features: [
      "Lead capture & registration management",
      "Program & package-based access control",
      "Online & manual payment verification",
      "Assessment tracking & report management",
      "Slot booking & counselling workflows",
      "Role-based access for 7 user types",
    ],
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Central person / counsellor */}
        <circle
          cx="32"
          cy="18"
          r="7"
          fill={colors.primary}
          opacity="0.12"
          stroke={colors.primary}
          strokeWidth="2.5"
        />
        <circle cx="32" cy="16" r="3" fill={colors.primary} opacity="0.6" />
        <path
          d="M25 25c1.8-2.5 12.2-2.5 14 0"
          stroke={colors.primary}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />

        {/* Journey flow line */}
        <path
          d="M12 38 Q20 28 32 32 Q44 36 52 26"
          stroke={colors.accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="3 2"
          fill="none"
        />

        {/* Step nodes */}
        <circle
          cx="12"
          cy="38"
          r="4"
          fill={colors.accent}
          opacity="0.25"
          stroke={colors.accent}
          strokeWidth="2"
        />
        <circle
          cx="32"
          cy="32"
          r="4"
          fill={colors.accent}
          opacity="0.5"
          stroke={colors.accent}
          strokeWidth="2"
        />
        <circle
          cx="52"
          cy="26"
          r="4"
          fill={colors.accent}
          opacity="0.85"
          stroke={colors.accent}
          strokeWidth="2"
        />

        {/* Labels */}
        <rect
          x="4"
          y="44"
          width="16"
          height="5"
          rx="2"
          fill={colors.primary}
          opacity="0.15"
        />
        <rect
          x="24"
          y="38"
          width="16"
          height="5"
          rx="2"
          fill={colors.primary}
          opacity="0.15"
        />
        <rect
          x="44"
          y="32"
          width="16"
          height="5"
          rx="2"
          fill={colors.primary}
          opacity="0.20"
        />

        {/* Progress */}
        <rect
          x="8"
          y="54"
          width="48"
          height="3"
          rx="1.5"
          fill={colors.primary}
          opacity="0.10"
        />
        <rect
          x="8"
          y="54"
          width="30"
          height="3"
          rx="1.5"
          fill={colors.accent}
          opacity="0.6"
        />
      </svg>
    ),
    color: colors.primary,
    accent: colors.accent,
  },

  {
    id: 2,
    tag: "Preschool & Daycare",
    name: "Preschool ERP",
    fullName: "Smart Preschool & Daycare Management System",
    description:
      "An intelligent preschool and daycare management platform that empowers schools with automation, real-time parent communication, child safety monitoring, attendance, fee management, and development tracking — all from a single platform.",
    features: [
      "Daily child tracking & care monitoring",
      "OTP / QR-based safe pickup system",
      "Parent communication app & real-time updates",
      "Child development & milestone tracking",
      "Smart fee management & online payments",
      "Multi-branch & franchise ready",
    ],
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* School building */}
        <rect
          x="10"
          y="28"
          width="44"
          height="26"
          rx="3"
          fill={colors.primary}
          opacity="0.10"
          stroke={colors.primary}
          strokeWidth="2.5"
        />

        {/* Roof */}
        <path
          d="M6 30 L32 10 L58 30"
          stroke={colors.accent}
          strokeWidth="2.5"
          strokeLinejoin="round"
          fill={colors.accent}
          fillOpacity="0.15"
        />

        {/* Door */}
        <rect
          x="27"
          y="38"
          width="10"
          height="16"
          rx="2"
          fill={colors.accent}
          opacity="0.5"
        />

        {/* Windows */}
        <rect
          x="14"
          y="34"
          width="9"
          height="8"
          rx="2"
          fill={colors.primary}
          opacity="0.20"
          stroke={colors.primary}
          strokeWidth="1.8"
        />
        <rect
          x="41"
          y="34"
          width="9"
          height="8"
          rx="2"
          fill={colors.primary}
          opacity="0.20"
          stroke={colors.primary}
          strokeWidth="1.8"
        />

        {/* Heart */}
        <path
          d="M32 36 C32 36 28 32 28 29.5 C28 27.5 30 26 32 28 C34 26 36 27.5 36 29.5 C36 32 32 36 32 36Z"
          fill={colors.accent}
          opacity="0.85"
        />
      </svg>
    ),
    color: colors.accent,
    accent: colors.primary,
  },

  {
    id: 3,
    tag: "Career Intelligence",
    name: "Career Intelligence",
    fullName:
      "AI-Ready Student Career Assessment & Intelligence Platform",
    description:
      "An AI-powered student career intelligence ecosystem designed for schools, counsellors, and educational institutions — offering psychometric analysis, career recommendations, advanced analytics, and personalized student guidance workflows.",
    features: [
      "Psychometric & aptitude assessments",
      "AI-ready career recommendation engine",
      "Dynamic student personalization",
      "Comprehensive career reports & analytics",
      "Counselling workflow management",
      "Multi-tenant SaaS for schools & institutes",
    ],
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle
          cx="32"
          cy="22"
          r="12"
          fill={colors.primary}
          opacity="0.10"
          stroke={colors.primary}
          strokeWidth="2.5"
        />
        <circle cx="32" cy="22" r="5" fill={colors.accent} opacity="0.7" />

        <path
          d="M20 22 C20 14 44 14 44 22"
          stroke={colors.primary}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />

        <path
          d="M16 38 C16 30 48 30 48 38 L48 46 C48 48 46 50 44 50 L20 50 C18 50 16 48 16 46 Z"
          fill={colors.primary}
          opacity="0.08"
          stroke={colors.primary}
          strokeWidth="2.5"
        />

        <rect
          x="23"
          y="36"
          width="6"
          height="10"
          rx="1.5"
          fill={colors.accent}
          opacity="0.5"
        />
        <rect
          x="32"
          y="32"
          width="6"
          height="14"
          rx="1.5"
          fill={colors.accent}
          opacity="0.75"
        />
        <rect
          x="41"
          y="38"
          width="4"
          height="8"
          rx="1.5"
          fill={colors.primary}
          opacity="0.3"
        />

        <path
          d="M14 54 h36"
          stroke={colors.primary}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.2"
        />
      </svg>
    ),
    color: colors.primary,
    accent: colors.accent,
  },

  {
    id: 4,
    tag: "Multi-School ERP",
    name: "School ERP",
    fullName:
      "Smart Multi-School ERP Platform for Modern Educational Institutions",
    description:
      "A scalable and modern multi-school ERP platform that digitizes admissions, academics, attendance, examinations, transport, fee management, parent communication, and operational workflows with enterprise-grade control and transparency.",
    features: [
      "Approval-driven admissions & enrollment",
      "Multi-level exam & result management",
      "Fee management & payment verification",
      "Attendance with locking & audit trail",
      "Transport, library & inventory control",
      "Multi-school SaaS with tenant isolation",
    ],
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Roof */}
        <path
          d="M32 6L6 20v2h52v-2L32 6z"
          fill={colors.accent}
          opacity="0.20"
          stroke={colors.accent}
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Building */}
        <rect
          x="8"
          y="22"
          width="48"
          height="28"
          rx="2"
          fill={colors.primary}
          opacity="0.08"
          stroke={colors.primary}
          strokeWidth="2.2"
        />

        {/* Windows */}
        <rect
          x="13"
          y="28"
          width="9"
          height="8"
          rx="1.5"
          fill={colors.primary}
          opacity="0.18"
          stroke={colors.primary}
          strokeWidth="1.8"
        />
        <rect
          x="42"
          y="28"
          width="9"
          height="8"
          rx="1.5"
          fill={colors.primary}
          opacity="0.18"
          stroke={colors.primary}
          strokeWidth="1.8"
        />

        {/* Door */}
        <rect
          x="27"
          y="34"
          width="10"
          height="16"
          rx="2"
          fill={colors.accent}
          opacity="0.35"
          stroke={colors.accent}
          strokeWidth="1.8"
        />

        {/* Approval Badge */}
        <circle
          cx="49"
          cy="15"
          r="7"
          fill={colors.accent}
          opacity="0.20"
          stroke={colors.accent}
          strokeWidth="2"
        />

        <path
          d="M46 15l2.5 2.5L53 12"
          stroke={colors.accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Ground */}
        <rect
          x="6"
          y="50"
          width="52"
          height="3"
          rx="1.5"
          fill={colors.primary}
          opacity="0.15"
        />
      </svg>
    ),
    color: colors.primary,
    accent: colors.accent,
  },
];

// const PRODUCTS = [
//  {
//   id: 1,
//   tag: "Counselling Management System",
//   name: "CMS",
//   fullName: "Career Counselling & Assessment Platform",
//   description:
//     "An end-to-end digital platform that centralizes career counselling operations — from lead capture, registrations, and payments to assessments, report management, slot booking, and content delivery — reducing manual work and scaling counselling workflows for educational organizations.",
//   features: [
//     "Lead capture & registration management",
//     "Program & package-based access control",
//     "Online & manual payment verification",
//     "Assessment tracking & report management",
//     "Slot booking & counselling workflows",
//     "Role-based access for 7 user types",
//   ],
//   icon: (
//     <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//       {/* Central person / counsellor */}
//       <circle cx="32" cy="18" r="7" fill={colors.primary} opacity="0.12" stroke={colors.primary} strokeWidth="2.5" />
//       <circle cx="32" cy="16" r="3" fill={colors.primary} opacity="0.6" />
//       <path d="M25 25c1.8-2.5 12.2-2.5 14 0" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
//       {/* Journey flow line */}
//       <path d="M12 38 Q20 28 32 32 Q44 36 52 26" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 2" fill="none" />
//       {/* Step nodes on journey */}
//       <circle cx="12" cy="38" r="4" fill={colors.accent} opacity="0.25" stroke={colors.accent} strokeWidth="2" />
//       <circle cx="32" cy="32" r="4" fill={colors.accent} opacity="0.5"  stroke={colors.accent} strokeWidth="2" />
//       <circle cx="52" cy="26" r="4" fill={colors.accent} opacity="0.85" stroke={colors.accent} strokeWidth="2" />
//       {/* Step labels */}
//       <rect x="4"  y="44" width="16" height="5" rx="2" fill={colors.primary} opacity="0.15" />
//       <rect x="24" y="38" width="16" height="5" rx="2" fill={colors.primary} opacity="0.15" />
//       <rect x="44" y="32" width="16" height="5" rx="2" fill={colors.primary} opacity="0.20" />
//       {/* Bottom progress bar */}
//       <rect x="8"  y="54" width="48" height="3" rx="1.5" fill={colors.primary} opacity="0.10" />
//       <rect x="8"  y="54" width="30" height="3" rx="1.5" fill={colors.accent} opacity="0.6" />
//     </svg>
//   ),
//   color:  colors.primary,
//   accent: colors.accent,
// },
//  {
//   id: 2,
//   tag: "Preschool & Daycare",
//   name: "Preschool ERP",
//   fullName: "Preschool ERP Platform",
//   description:
//     "A complete digital ecosystem for preschools and daycare centres — giving parents real-time visibility into their child's daily care, activities, and development while helping schools automate operations, ensure child safety, and deliver exceptional early childhood experiences.",
//   features: [
//     "Daily child tracking & care monitoring",
//     "OTP / QR-based safe pickup system",
//     "Parent communication app & real-time updates",
//     "Child development & milestone tracking",
//     "Smart fee management & online payments",
//     "Multi-branch & franchise ready",
//   ],
//   icon: (
//     <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//       {/* School building */}
//       <rect x="10" y="28" width="44" height="26" rx="3" fill={colors.primary} opacity="0.10" stroke={colors.primary} strokeWidth="2.5" />
//       {/* Roof / triangle */}
//       <path d="M6 30 L32 10 L58 30" stroke={colors.accent} strokeWidth="2.5" strokeLinejoin="round" fill={colors.accent} fillOpacity="0.15" />
//       {/* Door */}
//       <rect x="27" y="38" width="10" height="16" rx="2" fill={colors.accent} opacity="0.5" />
//       {/* Left window */}
//       <rect x="14" y="34" width="9" height="8" rx="2" fill={colors.primary} opacity="0.20" stroke={colors.primary} strokeWidth="1.8" />
//       {/* Right window */}
//       <rect x="41" y="34" width="9" height="8" rx="2" fill={colors.primary} opacity="0.20" stroke={colors.primary} strokeWidth="1.8" />
//       {/* Heart above door — child safety symbol */}
//       <path d="M32 36 C32 36 28 32 28 29.5 C28 27.5 30 26 32 28 C34 26 36 27.5 36 29.5 C36 32 32 36 32 36Z" fill={colors.accent} opacity="0.85" />
//     </svg>
//   ),
//   color:  colors.accent,
//   accent: colors.primary,
// },
// {
//   id: 3,
//   tag: "Career Intelligence",
//   name: "Career Assessment Platform",
//   fullName: "Student Career Assessment & Intelligence Platform",
//   description:
//     "A complete AI-ready Career Intelligence Ecosystem built for schools, counsellors, and students — combining psychometric assessments, personalized career recommendations, counselling workflows, and powerful analytics to transform student potential into data-driven career success.",
//   features: [
//     "Psychometric & aptitude assessments",
//     "AI-ready career recommendation engine",
//     "Dynamic student personalization",
//     "Comprehensive career reports & analytics",
//     "Counselling workflow management",
//     "Multi-tenant SaaS for schools & institutes",
//   ],
//   icon: (
//     <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//       <circle cx="32" cy="22" r="12" fill={colors.primary} opacity="0.10" stroke={colors.primary} strokeWidth="2.5" />
//       <circle cx="32" cy="22" r="5" fill={colors.accent} opacity="0.7" />
//       <path d="M20 22 C20 14 44 14 44 22" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.4" />
//       <path d="M16 38 C16 30 48 30 48 38 L48 46 C48 48 46 50 44 50 L20 50 C18 50 16 48 16 46 Z" fill={colors.primary} opacity="0.08" stroke={colors.primary} strokeWidth="2.5" />
//       <rect x="23" y="36" width="6" height="10" rx="1.5" fill={colors.accent} opacity="0.5" />
//       <rect x="32" y="32" width="6" height="14" rx="1.5" fill={colors.accent} opacity="0.75" />
//       <rect x="41" y="38" width="4" height="8" rx="1.5" fill={colors.primary} opacity="0.3" />
//       <path d="M14 54 h36" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" opacity="0.2" />
//     </svg>
//   ),
//   color:  colors.primary,
//   accent: colors.accent,
// },

// {
//   id: 4,
//   tag: "K+12 Education",
//   name: "K+12 School ERP",
//   fullName: "School ERP Management System",
//   description:
//     "A complete multi-school SaaS ERP that digitizes every operational workflow of a school — admissions, academics, attendance, examinations, fees, transport, library, and parent communication — built on a strict Action → Verification → Approval → Lock → Visibility workflow for full accountability and transparency.",
//   features: [
//     "Approval-driven admissions & enrollment",
//     "Multi-level exam & result management",
//     "Fee management & payment verification",
//     "Attendance with locking & audit trail",
//     "Transport, library & inventory control",
//     "Multi-school SaaS with tenant isolation",
//   ],
//   icon: (
//     <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//       {/* School rooftop */}
//       <path d="M32 6L6 20v2h52v-2L32 6z" fill={colors.accent} opacity="0.20" stroke={colors.accent} strokeWidth="2.2" strokeLinejoin="round" />
//       {/* Building body */}
//       <rect x="8" y="22" width="48" height="28" rx="2" fill={colors.primary} opacity="0.08" stroke={colors.primary} strokeWidth="2.2" />
//       {/* Left window */}
//       <rect x="13" y="28" width="9" height="8" rx="1.5" fill={colors.primary} opacity="0.18" stroke={colors.primary} strokeWidth="1.8" />
//       {/* Right window */}
//       <rect x="42" y="28" width="9" height="8" rx="1.5" fill={colors.primary} opacity="0.18" stroke={colors.primary} strokeWidth="1.8" />
//       {/* Door */}
//       <rect x="27" y="34" width="10" height="16" rx="2" fill={colors.accent} opacity="0.35" stroke={colors.accent} strokeWidth="1.8" />
//       {/* Approval checkmark badge — represents the workflow */}
//       <circle cx="49" cy="15" r="7" fill={colors.accent} opacity="0.20" stroke={colors.accent} strokeWidth="2" />
//       <path d="M46 15l2.5 2.5L53 12" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//       {/* Ground line */}
//       <rect x="6" y="50" width="52" height="3" rx="1.5" fill={colors.primary} opacity="0.15" />
//     </svg>
//   ),
//   color:  colors.primary,
//   accent: colors.accent,
// },
//   // {
//   //   id: 4,
//   //   tag: "K+12 Education",
//   //   name: "K+12 School ERP",
//   //   fullName: "K+12 Complete School ERP",
//   //   description:
//   //     "A comprehensive school management ecosystem covering admissions, academics, finance, timetable, library, transport, and parent portals — purpose-built for K-12 institutions.",
//   //   features: ["End-to-end admissions flow", "Academic & timetable planner", "Parent & student portals"],
//   //   icon: (
//   //     <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//   //       <path d="M32 8L6 22v2h52v-2L32 8z" fill={colors.accent} opacity="0.25" stroke={colors.accent} strokeWidth="2.2" strokeLinejoin="round" />
//   //       <rect x="12" y="24" width="8" height="22" rx="2" fill={colors.primary} opacity="0.15" stroke={colors.primary} strokeWidth="2" />
//   //       <rect x="28" y="24" width="8" height="22" rx="2" fill={colors.primary} opacity="0.15" stroke={colors.primary} strokeWidth="2" />
//   //       <rect x="44" y="24" width="8" height="22" rx="2" fill={colors.primary} opacity="0.15" stroke={colors.primary} strokeWidth="2" />
//   //       <rect x="8" y="46" width="48" height="4" rx="2" fill={colors.primary} opacity="0.2" stroke={colors.primary} strokeWidth="2" />
//   //       <rect x="28" y="36" width="8" height="10" rx="1.5" fill={colors.accent} opacity="0.4" />
//   //       <circle cx="32" cy="17" r="2.5" fill={colors.accent} />
//   //     </svg>
//   //   ),
//   //   color:  colors.primary,
//   //   accent: colors.accent,
//   // },
// ];

// ─────────────────────────────────────────────────────────────
//  PRODUCTS PAGE
// ─────────────────────────────────────────────────────────────
const Products = () => {
  const [hovered, setHovered]          = useState(null);
  const [selectedProduct, setSelected] = useState(null);

  if (selectedProduct !== null) {
    return (
      <ProductCaseStudy
        productId={selectedProduct}
        onBack={() => setSelected(null)}
      />
    );
  }

  return (
  <><Helmet>
  {/* PRIMARY SEO */}
  <title>Software Products | School ERP, CMS & Aptitude Test Platform | RAM Solutions</title>

  <meta
    name="description"
    content="Explore powerful education software products including Counsellor Management System (CMS), School ERP, Day Care ERP, and Aptitude Test Platform. Built for schools, institutes, and organizations in India."
  />

  <meta
    name="keywords"
    content="school ERP India, CMS software, counsellor management system, aptitude test platform, education ERP software, student management system, school management software"
  />

  <meta name="author" content="Right Analysis Matter Technology Pvt. Ltd." />
  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://your-domain.com/products" />

  {/* OPEN GRAPH */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Education Software Products | ERP, CMS & Assessment Platform" />
  <meta
    property="og:description"
    content="Discover scalable education software products designed for modern schools and institutions."
  />
  <meta property="og:url" content="https://your-domain.com/products" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Education Software Products | RAM Solutions" />
  <meta
    name="twitter:description"
    content="School ERP, CMS and aptitude testing platforms for modern education systems."
  />

  {/* STRUCTURED DATA (IMPORTANT FOR GOOGLE) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Education Software Products",
      "description":
        "Software products including ERP, CMS, and assessment systems for schools and institutions.",
      "url": "https://your-domain.com/products",
      "hasPart": PRODUCTS.map((p) => ({
        "@type": "Product",
        "name": p.fullName,
        "description": p.description
      }))
    })}
  </script>
</Helmet>
    <div style={{ minHeight: "100vh", background: colors.bgPage, fontFamily: text.fontFamily }}>

      {/* ── HERO ── */}
      <div style={{
        background: gradients.hero,
        padding: `${spacing.hero.paddingY}px ${spacing.hero.paddingX}px ${spacing.hero.paddingBottom}px`,
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative rings */}
        <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: radius.full, border: `2px solid ${colors.accentTint20}`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: -20, right: -20, width: 140, height: 140, borderRadius: radius.full, border: `2px solid ${colors.accentTint18}`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -40, left: 80, width: 180, height: 180, borderRadius: radius.full, background: "rgba(232,160,32,0.06)", pointerEvents: "none" }} />

        <div style={{ maxWidth: layout.maxWidthContent, margin: "0 auto", position: "relative" }}>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <div style={{ width: 36, height: 3, background: colors.accent, borderRadius: radius.sm }} />
            <span style={{ color: colors.accent, fontWeight: text.weight.bold, fontSize: text.size.xs, letterSpacing: text.letterSpacing.widest, textTransform: "uppercase" }}>
              Our Products
            </span>
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: text.weight.extrabold, color: colors.textOnDark, margin: `0 0 ${spacing.lg}px`, lineHeight: text.lineHeight.tight, letterSpacing: text.letterSpacing.tight }}>
            Solutions That Power<br />
            <span style={{ color: colors.accent }}>Modern Organisations</span>
          </h1>

          {/* Sub-copy */}
          <p style={{ color: colors.textOnDarkSub, fontSize: text.size.xl, maxWidth: 520, lineHeight: text.lineHeight.body, margin: 0 }}>
            From content publishing to full school management — our product suite is engineered to simplify operations and drive smarter decisions.
          </p>
        </div>
      </div>

      {/* Curved overlap strip */}
      <div style={{ height: 32, background: colors.bgPage, marginTop: -32, borderRadius: "32px 32px 0 0", position: "relative", zIndex: 2 }} />

      {/* Click hint */}
      <p style={{ textAlign: "center", fontSize: text.size.base, color: colors.textMuted, fontWeight: text.weight.medium, margin: `${spacing.lg}px 0 -${spacing.sm}px`, letterSpacing: text.letterSpacing.wide }}>
        Click any product card to explore its full case study →
      </p>

      {/* ── CARDS GRID ── */}
      <div style={{
        maxWidth: layout.maxWidthGrid,
        margin: "0 auto",
        padding: `${spacing.xl}px ${spacing.xl}px 80px`,
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${layout.gridMinCard}px, 1fr))`,
        gap: layout.gridGap,
      }}>
        {PRODUCTS.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            isHovered={hovered === p.id}
            onEnter={() => setHovered(p.id)}
            onLeave={() => setHovered(null)}
            onClick={() => setSelected(p.id)}
          />
        ))}
      </div>

      {/* ── BOTTOM CTA ── */}
      <div style={{
        background: gradients.cta,
        margin: `0 ${spacing.xl}px 60px`,
        borderRadius: radius.xl,
        padding: "48px 40px",
        maxWidth: layout.maxWidthGrid,
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: spacing.xl,
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -30, right: 60, width: 160, height: 160, borderRadius: radius.full, border: `2px solid ${colors.accentTint18}`, pointerEvents: "none" }} />

        <div>
          <p style={{ color: colors.accent, fontWeight: text.weight.bold, fontSize: text.size.xs, letterSpacing: text.letterSpacing.widest, textTransform: "uppercase", margin: `0 0 ${spacing.sm}px` }}>
            Get Started Today
          </p>
          <h2 style={{ color: colors.textOnDark, fontSize: "1.6rem", fontWeight: text.weight.extrabold, margin: `0 0 ${spacing.sm}px`, letterSpacing: text.letterSpacing.tight }}>
            Not sure which product fits?
          </h2>
          <p style={{ color: colors.textOnDarkSub, fontSize: text.size.lg, margin: 0 }}>
            Our team will help you pick the right solution for your needs.
          </p>
        </div>

        <a href="/contact-us" style={{
          display: "inline-block",
          background: colors.accent,
          color: colors.white,
          fontWeight: text.weight.bold,
          fontSize: text.size.md,
          letterSpacing: text.letterSpacing.wider,
          textTransform: "uppercase",
          padding: "14px 32px",
          borderRadius: radius.md,
          textDecoration: "none",
          whiteSpace: "nowrap",
          boxShadow: shadows.cta,
        }}>
          Contact Us →
        </a>
      </div>
    </div>
    <Footer/></>
  );
};

// ─────────────────────────────────────────────────────────────
//  PRODUCT CARD
// ─────────────────────────────────────────────────────────────
const ProductCard = ({ product: p, isHovered, onEnter, onLeave, onClick }) => (
  <div
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    onClick={onClick}
    style={{
      background: colors.bgCard,
      borderRadius: radius.lg,
      border: `2px solid ${isHovered ? p.color : colors.borderDefault}`,
      padding: `${spacing.xxl}px 28px 28px`,
      cursor: "pointer",
      transition: `transform ${transitions.default}, box-shadow ${transitions.default}, border-color ${transitions.default}`,
      transform: isHovered ? "translateY(-6px)" : "translateY(0)",
      boxShadow: isHovered ? shadows.cardHover : shadows.card,
      display: "flex",
      flexDirection: "column",
      gap: 0,
    }}
  >
    {/* Icon */}
    <div style={{ width: iconSize.card, height: iconSize.card, marginBottom: spacing.lg, transition: `transform ${transitions.default}`, transform: isHovered ? "scale(1.08)" : "scale(1)" }}>
      {p.icon}
    </div>

    {/* Tag chip */}
    <span style={{
      display: "inline-block",
      fontSize: text.size.xs,
      fontWeight: text.weight.bold,
      letterSpacing: text.letterSpacing.widest,
      textTransform: "uppercase",
      color: p.accent,
      background: isHovered ? `${p.accent}18` : `${p.accent}10`,
      border: `1px solid ${p.accent}30`,
      padding: "3px 10px",
      borderRadius: radius.pill,
      marginBottom: spacing.sm + 2,
      width: "fit-content",
      transition: `background ${transitions.default}`,
    }}>
      {p.tag}
    </span>

    {/* Product name */}
    <h3 style={{ fontSize: "1.25rem", fontWeight: text.weight.extrabold, color: colors.textHeading, margin: `0 0 6px`, lineHeight: text.lineHeight.normal, letterSpacing: text.letterSpacing.tight }}>
      {p.name}
    </h3>

    {/* Full name subtitle */}
    <p style={{ fontSize: text.size.sm, color: colors.textMuted, fontWeight: text.weight.semibold, margin: `0 0 ${spacing.md}px`, letterSpacing: text.letterSpacing.wide }}>
      {p.fullName}
    </p>

    {/* Animated divider */}
    <div style={{ width: isHovered ? 56 : 36, height: 3, borderRadius: radius.sm, background: p.accent, marginBottom: spacing.lg - 4, transition: `width ${transitions.default}` }} />

    {/* Description */}
    <p style={{ fontSize: text.size.md, color: colors.textBody, lineHeight: text.lineHeight.body, margin: `0 0 ${spacing.lg}px`, flexGrow: 1 }}>
      {p.description}
    </p>

    {/* Feature list */}
    <ul style={{ listStyle: "none", padding: 0, margin: `0 0 ${spacing.xl}px`, display: "flex", flexDirection: "column", gap: spacing.sm }}>
      {p.features.map((f) => (
        <li key={f} style={{ display: "flex", alignItems: "center", gap: spacing.sm }}>
          <span style={{
            width: 18, height: 18,
            borderRadius: radius.full,
            background: `${p.accent}18`,
            border: `1.5px solid ${p.accent}50`,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
              <path d="M1 3.5l2.5 2.5L8 1" stroke={p.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span style={{ fontSize: text.size.base, color: colors.textBody, fontWeight: text.weight.medium }}>{f}</span>
        </li>
      ))}
    </ul>

    {/* CTA link row */}
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ fontSize: text.size.base, fontWeight: text.weight.bold, color: p.color, letterSpacing: text.letterSpacing.wider, textTransform: "uppercase" }}>
        View Case Study
      </span>
      <span style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 26, height: 26,
        borderRadius: radius.full,
        background: `${p.color}15`,
        transition: `transform ${transitions.fast}`,
        transform: isHovered ? "translateX(4px)" : "translateX(0)",
      }}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6h8M7 3l3 3-3 3" stroke={p.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  </div>
);

export default Products;


// import React, { useState } from 'react';
// import ProductCaseStudy from '../components/ProductCaseStudy';
// import theme from '../theme/theme';   

// const { colors, typography, spacing, radius, shadows, transitions, gradients, layout, iconSize } = theme;

// // ── Shared style helpers ─────────────────────────────────────
// const text = typography; 

// // ─────────────────────────────────────────────────────────────
// //  PRODUCTS DATA
// // ─────────────────────────────────────────────────────────────
// const PRODUCTS = [
//   {
//     id: 1,
//     tag: "Counsellor Management System",
//     name: "CMS",
//     fullName: "Counsellor Management System",
//     description:
//       "A smart and efficient counsellor management platform designed to streamline student counselling, inquiry handling, admissions tracking, and communication workflows for educational organizations and institutes.",
//     features: [
//       "Student inquiry & lead management",
//       "Counsellor assignment & tracking",
//       "Admission follow-up automation",
//       "Student communication history",
//       "Dashboard analytics & reports",
//       "Role-based access control",
//     ],
//     icon: (
//       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//         <rect x="6" y="10" width="52" height="40" rx="5" fill={colors.primary} opacity="0.10" />
//         <rect x="6" y="10" width="52" height="40" rx="5" stroke={colors.primary} strokeWidth="2.5" />
//         <rect x="14" y="18" width="24" height="4" rx="2" fill={colors.accent} />
//         <rect x="14" y="28" width="30" height="2.5" rx="1" fill={colors.primary} opacity="0.45" />
//         <rect x="14" y="34" width="24" height="2.5" rx="1" fill={colors.primary} opacity="0.30" />
//         <circle cx="47" cy="26" r="7" fill={colors.accent} opacity="0.20" stroke={colors.accent} strokeWidth="2" />
//         <circle cx="47" cy="24" r="2.5" fill={colors.accent} />
//         <path d="M43 31c1.5-2 6.5-2 8 0" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" />
//         <rect x="18" y="46" width="28" height="3" rx="1.5" fill={colors.primary} opacity="0.25" />
//       </svg>
//     ),
//     color:  colors.primary,
//     accent: colors.accent,
//   },
//   {
//     id: 2,
//     tag: "Enterprise Resource",
//     name: "Day Care ERP",
//     fullName: "Enterprise Resource Planning + Day Care",
//     description:
//       "An all-in-one ERP tailored for businesses and day care centres — streamline enrolments, billing, staff scheduling, attendance, and parent communication from one dashboard.",
//     features: ["Child enrolment & attendance", "Billing & fee automation", "Staff & shift management"],
//     icon: (
//       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//         <rect x="8" y="16" width="20" height="16" rx="3" fill={colors.primary} opacity="0.15" stroke={colors.primary} strokeWidth="2.5" />
//         <rect x="36" y="16" width="20" height="16" rx="3" fill={colors.accent} opacity="0.15" stroke={colors.accent} strokeWidth="2.5" />
//         <rect x="22" y="36" width="20" height="14" rx="3" fill={colors.primary} opacity="0.12" stroke={colors.primary} strokeWidth="2.5" />
//         <path d="M18 32v4M46 32v4M32 32v4" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" />
//         <path d="M18 36h28" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" />
//         <circle cx="18" cy="24" r="3" fill={colors.primary} />
//         <circle cx="46" cy="24" r="3" fill={colors.accent} />
//         <circle cx="32" cy="43" r="3" fill={colors.primary} />
//       </svg>
//     ),
//     color:  colors.accent,
//     accent: colors.primary,
//   },
//   {
//     id: 3,
//     tag: "Assessment Platform",
//     name: "Aptitude Test Manager",
//     fullName: "Aptitude Test Management System",
//     description:
//       "Design, schedule, and evaluate aptitude assessments at scale. Automate scoring, generate detailed analytics, and give candidates a seamless online testing experience.",
//     features: ["Question bank & randomisation", "Auto-grading & analytics", "Anti-cheat proctoring tools"],
//     icon: (
//       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//         <rect x="10" y="8" width="34" height="44" rx="4" fill={colors.primary} opacity="0.1" stroke={colors.primary} strokeWidth="2.5" />
//         <circle cx="46" cy="46" r="10" fill={colors.accent} opacity="0.2" stroke={colors.accent} strokeWidth="2.5" />
//         <path d="M42 46l3 3 5-5" stroke={colors.accent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
//         <rect x="18" y="18" width="5" height="5" rx="1.5" fill={colors.accent} />
//         <rect x="18" y="28" width="5" height="5" rx="1.5" fill={colors.primary} opacity="0.3" />
//         <rect x="18" y="38" width="5" height="5" rx="1.5" fill={colors.primary} opacity="0.3" />
//         <rect x="27" y="19.5" width="12" height="2" rx="1" fill={colors.primary} opacity="0.5" />
//         <rect x="27" y="29.5" width="10" height="2" rx="1" fill={colors.primary} opacity="0.35" />
//         <rect x="27" y="39.5" width="8" height="2" rx="1" fill={colors.primary} opacity="0.25" />
//       </svg>
//     ),
//     color:  colors.primary,
//     accent: colors.accent,
//   },
//   {
//     id: 4,
//     tag: "K+12 Education",
//     name: "K+12 School ERP",
//     fullName: "K+12 Complete School ERP",
//     description:
//       "A comprehensive school management ecosystem covering admissions, academics, finance, timetable, library, transport, and parent portals — purpose-built for K-12 institutions.",
//     features: ["End-to-end admissions flow", "Academic & timetable planner", "Parent & student portals"],
//     icon: (
//       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//         <path d="M32 8L6 22v2h52v-2L32 8z" fill={colors.accent} opacity="0.25" stroke={colors.accent} strokeWidth="2.2" strokeLinejoin="round" />
//         <rect x="12" y="24" width="8" height="22" rx="2" fill={colors.primary} opacity="0.15" stroke={colors.primary} strokeWidth="2" />
//         <rect x="28" y="24" width="8" height="22" rx="2" fill={colors.primary} opacity="0.15" stroke={colors.primary} strokeWidth="2" />
//         <rect x="44" y="24" width="8" height="22" rx="2" fill={colors.primary} opacity="0.15" stroke={colors.primary} strokeWidth="2" />
//         <rect x="8" y="46" width="48" height="4" rx="2" fill={colors.primary} opacity="0.2" stroke={colors.primary} strokeWidth="2" />
//         <rect x="28" y="36" width="8" height="10" rx="1.5" fill={colors.accent} opacity="0.4" />
//         <circle cx="32" cy="17" r="2.5" fill={colors.accent} />
//       </svg>
//     ),
//     color:  colors.primary,
//     accent: colors.accent,
//   },
// ];

// // ─────────────────────────────────────────────────────────────
// //  PRODUCTS PAGE
// // ─────────────────────────────────────────────────────────────
// const Products = () => {
//   const [hovered, setHovered]          = useState(null);
//   const [selectedProduct, setSelected] = useState(null);

//   if (selectedProduct !== null) {
//     return (
//       <ProductCaseStudy
//         productId={selectedProduct}
//         onBack={() => setSelected(null)}
//       />
//     );
//   }

//   return (
//     <div style={{ minHeight: "100vh", background: colors.bgPage, fontFamily: text.fontFamily }}>

//       {/* ── HERO ── */}
//       <div style={{
//         background: gradients.hero,
//         padding: `${spacing.hero.paddingY}px ${spacing.hero.paddingX}px ${spacing.hero.paddingBottom}px`,
//         position: "relative",
//         overflow: "hidden",
//       }}>
//         {/* Decorative rings */}
//         <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: radius.full, border: `2px solid ${colors.accentTint20}`, pointerEvents: "none" }} />
//         <div style={{ position: "absolute", top: -20, right: -20, width: 140, height: 140, borderRadius: radius.full, border: `2px solid ${colors.accentTint18}`, pointerEvents: "none" }} />
//         <div style={{ position: "absolute", bottom: -40, left: 80, width: 180, height: 180, borderRadius: radius.full, background: "rgba(232,160,32,0.06)", pointerEvents: "none" }} />

//         <div style={{ maxWidth: layout.maxWidthContent, margin: "0 auto", position: "relative" }}>
//           {/* Eyebrow */}
//           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
//             <div style={{ width: 36, height: 3, background: colors.accent, borderRadius: radius.sm }} />
//             <span style={{ color: colors.accent, fontWeight: text.weight.bold, fontSize: text.size.xs, letterSpacing: text.letterSpacing.widest, textTransform: "uppercase" }}>
//               Our Products
//             </span>
//           </div>

//           {/* Headline */}
//           <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: text.weight.extrabold, color: colors.textOnDark, margin: `0 0 ${spacing.lg}px`, lineHeight: text.lineHeight.tight, letterSpacing: text.letterSpacing.tight }}>
//             Solutions That Power<br />
//             <span style={{ color: colors.accent }}>Modern Organisations</span>
//           </h1>

//           {/* Sub-copy */}
//           <p style={{ color: colors.textOnDarkSub, fontSize: text.size.xl, maxWidth: 520, lineHeight: text.lineHeight.body, margin: 0 }}>
//             From content publishing to full school management — our product suite is engineered to simplify operations and drive smarter decisions.
//           </p>
//         </div>
//       </div>

//       {/* Curved overlap strip */}
//       <div style={{ height: 32, background: colors.bgPage, marginTop: -32, borderRadius: "32px 32px 0 0", position: "relative", zIndex: 2 }} />

//       {/* Click hint */}
//       <p style={{ textAlign: "center", fontSize: text.size.base, color: colors.textMuted, fontWeight: text.weight.medium, margin: `${spacing.lg}px 0 -${spacing.sm}px`, letterSpacing: text.letterSpacing.wide }}>
//         Click any product card to explore its full case study →
//       </p>

//       {/* ── CARDS GRID ── */}
//       <div style={{
//         maxWidth: layout.maxWidthGrid,
//         margin: "0 auto",
//         padding: `${spacing.xl}px ${spacing.xl}px 80px`,
//         display: "grid",
//         gridTemplateColumns: `repeat(auto-fit, minmax(${layout.gridMinCard}px, 1fr))`,
//         gap: layout.gridGap,
//       }}>
//         {PRODUCTS.map((p) => (
//           <ProductCard
//             key={p.id}
//             product={p}
//             isHovered={hovered === p.id}
//             onEnter={() => setHovered(p.id)}
//             onLeave={() => setHovered(null)}
//             onClick={() => setSelected(p.id)}
//           />
//         ))}
//       </div>

//       {/* ── BOTTOM CTA ── */}
//       <div style={{
//         background: gradients.cta,
//         margin: `0 ${spacing.xl}px 60px`,
//         borderRadius: radius.xl,
//         padding: "48px 40px",
//         maxWidth: layout.maxWidthGrid,
//         marginLeft: "auto",
//         marginRight: "auto",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         flexWrap: "wrap",
//         gap: spacing.xl,
//         position: "relative",
//         overflow: "hidden",
//       }}>
//         <div style={{ position: "absolute", top: -30, right: 60, width: 160, height: 160, borderRadius: radius.full, border: `2px solid ${colors.accentTint18}`, pointerEvents: "none" }} />

//         <div>
//           <p style={{ color: colors.accent, fontWeight: text.weight.bold, fontSize: text.size.xs, letterSpacing: text.letterSpacing.widest, textTransform: "uppercase", margin: `0 0 ${spacing.sm}px` }}>
//             Get Started Today
//           </p>
//           <h2 style={{ color: colors.textOnDark, fontSize: "1.6rem", fontWeight: text.weight.extrabold, margin: `0 0 ${spacing.sm}px`, letterSpacing: text.letterSpacing.tight }}>
//             Not sure which product fits?
//           </h2>
//           <p style={{ color: colors.textOnDarkSub, fontSize: text.size.lg, margin: 0 }}>
//             Our team will help you pick the right solution for your needs.
//           </p>
//         </div>

//         <a href="/contact" style={{
//           display: "inline-block",
//           background: colors.accent,
//           color: colors.white,
//           fontWeight: text.weight.bold,
//           fontSize: text.size.md,
//           letterSpacing: text.letterSpacing.wider,
//           textTransform: "uppercase",
//           padding: "14px 32px",
//           borderRadius: radius.md,
//           textDecoration: "none",
//           whiteSpace: "nowrap",
//           boxShadow: shadows.cta,
//         }}>
//           Contact Us →
//         </a>
//       </div>
//     </div>
//   );
// };

// // ─────────────────────────────────────────────────────────────
// //  PRODUCT CARD
// // ─────────────────────────────────────────────────────────────
// const ProductCard = ({ product: p, isHovered, onEnter, onLeave, onClick }) => (
//   <div
//     onMouseEnter={onEnter}
//     onMouseLeave={onLeave}
//     onClick={onClick}
//     style={{
//       background: colors.bgCard,
//       borderRadius: radius.lg,
//       border: `2px solid ${isHovered ? p.color : colors.borderDefault}`,
//       padding: `${spacing.xxl}px 28px 28px`,
//       cursor: "pointer",
//       transition: `transform ${transitions.default}, box-shadow ${transitions.default}, border-color ${transitions.default}`,
//       transform: isHovered ? "translateY(-6px)" : "translateY(0)",
//       boxShadow: isHovered ? shadows.cardHover : shadows.card,
//       display: "flex",
//       flexDirection: "column",
//       gap: 0,
//     }}
//   >
//     {/* Icon */}
//     <div style={{ width: iconSize.card, height: iconSize.card, marginBottom: spacing.lg, transition: `transform ${transitions.default}`, transform: isHovered ? "scale(1.08)" : "scale(1)" }}>
//       {p.icon}
//     </div>

//     {/* Tag chip */}
//     <span style={{
//       display: "inline-block",
//       fontSize: text.size.xs,
//       fontWeight: text.weight.bold,
//       letterSpacing: text.letterSpacing.widest,
//       textTransform: "uppercase",
//       color: p.accent,
//       background: isHovered ? `${p.accent}18` : `${p.accent}10`,
//       border: `1px solid ${p.accent}30`,
//       padding: "3px 10px",
//       borderRadius: radius.pill,
//       marginBottom: spacing.sm + 2,
//       width: "fit-content",
//       transition: `background ${transitions.default}`,
//     }}>
//       {p.tag}
//     </span>

//     {/* Product name */}
//     <h3 style={{ fontSize: "1.25rem", fontWeight: text.weight.extrabold, color: colors.textHeading, margin: `0 0 6px`, lineHeight: text.lineHeight.normal, letterSpacing: text.letterSpacing.tight }}>
//       {p.name}
//     </h3>

//     {/* Full name subtitle */}
//     <p style={{ fontSize: text.size.sm, color: colors.textMuted, fontWeight: text.weight.semibold, margin: `0 0 ${spacing.md}px`, letterSpacing: text.letterSpacing.wide }}>
//       {p.fullName}
//     </p>

//     {/* Animated divider */}
//     <div style={{ width: isHovered ? 56 : 36, height: 3, borderRadius: radius.sm, background: p.accent, marginBottom: spacing.lg - 4, transition: `width ${transitions.default}` }} />

//     {/* Description */}
//     <p style={{ fontSize: text.size.md, color: colors.textBody, lineHeight: text.lineHeight.body, margin: `0 0 ${spacing.lg}px`, flexGrow: 1 }}>
//       {p.description}
//     </p>

//     {/* Feature list */}
//     <ul style={{ listStyle: "none", padding: 0, margin: `0 0 ${spacing.xl}px`, display: "flex", flexDirection: "column", gap: spacing.sm }}>
//       {p.features.map((f) => (
//         <li key={f} style={{ display: "flex", alignItems: "center", gap: spacing.sm }}>
//           <span style={{
//             width: 18, height: 18,
//             borderRadius: radius.full,
//             background: `${p.accent}18`,
//             border: `1.5px solid ${p.accent}50`,
//             display: "flex", alignItems: "center", justifyContent: "center",
//             flexShrink: 0,
//           }}>
//             <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
//               <path d="M1 3.5l2.5 2.5L8 1" stroke={p.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </span>
//           <span style={{ fontSize: text.size.base, color: colors.textBody, fontWeight: text.weight.medium }}>{f}</span>
//         </li>
//       ))}
//     </ul>

//     {/* CTA link row */}
//     <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//       <span style={{ fontSize: text.size.base, fontWeight: text.weight.bold, color: p.color, letterSpacing: text.letterSpacing.wider, textTransform: "uppercase" }}>
//         View Case Study
//       </span>
//       <span style={{
//         display: "inline-flex", alignItems: "center", justifyContent: "center",
//         width: 26, height: 26,
//         borderRadius: radius.full,
//         background: `${p.color}15`,
//         transition: `transform ${transitions.fast}`,
//         transform: isHovered ? "translateX(4px)" : "translateX(0)",
//       }}>
//         <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//           <path d="M2 6h8M7 3l3 3-3 3" stroke={p.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </span>
//     </div>
//   </div>
// );

// export default Products;


// import React, { useState } from 'react';
// import ProductCaseStudy from '../components/ProductCaseStudy';

// const PRODUCTS = [
//   {
//     id: 1,
//     tag: "Counsellor Management System",
//     name: "CMS",
//     fullName: "Counsellor Management System",
//     description:
//       "A smart and efficient counsellor management platform designed to streamline student counselling, inquiry handling, admissions tracking, and communication workflows for educational organizations and institutes.",
//     features: [
//       "Student inquiry & lead management",
//       "Counsellor assignment & tracking",
//       "Admission follow-up automation",
//       "Student communication history",
//       "Dashboard analytics & reports",
//       "Role-based access control",
//     ],
//     icon: (
//       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//         <rect x="6" y="10" width="52" height="40" rx="5" fill="#1a3e8c" opacity="0.10" />
//         <rect x="6" y="10" width="52" height="40" rx="5" stroke="#1a3e8c" strokeWidth="2.5" />
//         <rect x="14" y="18" width="24" height="4" rx="2" fill="#e8a020" />
//         <rect x="14" y="28" width="30" height="2.5" rx="1" fill="#1a3e8c" opacity="0.45" />
//         <rect x="14" y="34" width="24" height="2.5" rx="1" fill="#1a3e8c" opacity="0.30" />
//         <circle cx="47" cy="26" r="7" fill="#e8a020" opacity="0.20" stroke="#e8a020" strokeWidth="2" />
//         <circle cx="47" cy="24" r="2.5" fill="#e8a020" />
//         <path d="M43 31c1.5-2 6.5-2 8 0" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" />
//         <rect x="18" y="46" width="28" height="3" rx="1.5" fill="#1a3e8c" opacity="0.25" />
//       </svg>
//     ),
//     color: "#1a3e8c",
//     accent: "#e8a020",
//   },
//   {
//     id: 2,
//     tag: "Enterprise Resource",
//     name: "Day Care ERP",
//     fullName: "Enterprise Resource Planning + Day Care",
//     description:
//       "An all-in-one ERP tailored for businesses and day care centres — streamline enrolments, billing, staff scheduling, attendance, and parent communication from one dashboard.",
//     features: ["Child enrolment & attendance", "Billing & fee automation", "Staff & shift management"],
//     icon: (
//       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//         <rect x="8" y="16" width="20" height="16" rx="3" fill="#1a3e8c" opacity="0.15" stroke="#1a3e8c" strokeWidth="2.5" />
//         <rect x="36" y="16" width="20" height="16" rx="3" fill="#e8a020" opacity="0.15" stroke="#e8a020" strokeWidth="2.5" />
//         <rect x="22" y="36" width="20" height="14" rx="3" fill="#1a3e8c" opacity="0.12" stroke="#1a3e8c" strokeWidth="2.5" />
//         <path d="M18 32v4M46 32v4M32 32v4" stroke="#1a3e8c" strokeWidth="2" strokeLinecap="round" />
//         <path d="M18 36h28" stroke="#1a3e8c" strokeWidth="2" strokeLinecap="round" />
//         <circle cx="18" cy="24" r="3" fill="#1a3e8c" />
//         <circle cx="46" cy="24" r="3" fill="#e8a020" />
//         <circle cx="32" cy="43" r="3" fill="#1a3e8c" />
//       </svg>
//     ),
//     color: "#e8a020",
//     accent: "#1a3e8c",
//   },
//   {
//     id: 3,
//     tag: "Assessment Platform",
//     name: "Aptitude Test Manager",
//     fullName: "Aptitude Test Management System",
//     description:
//       "Design, schedule, and evaluate aptitude assessments at scale. Automate scoring, generate detailed analytics, and give candidates a seamless online testing experience.",
//     features: ["Question bank & randomisation", "Auto-grading & analytics", "Anti-cheat proctoring tools"],
//     icon: (
//       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//         <rect x="10" y="8" width="34" height="44" rx="4" fill="#1a3e8c" opacity="0.1" stroke="#1a3e8c" strokeWidth="2.5" />
//         <circle cx="46" cy="46" r="10" fill="#e8a020" opacity="0.2" stroke="#e8a020" strokeWidth="2.5" />
//         <path d="M42 46l3 3 5-5" stroke="#e8a020" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
//         <rect x="18" y="18" width="5" height="5" rx="1.5" fill="#e8a020" />
//         <rect x="18" y="28" width="5" height="5" rx="1.5" fill="#1a3e8c" opacity="0.3" />
//         <rect x="18" y="38" width="5" height="5" rx="1.5" fill="#1a3e8c" opacity="0.3" />
//         <rect x="27" y="19.5" width="12" height="2" rx="1" fill="#1a3e8c" opacity="0.5" />
//         <rect x="27" y="29.5" width="10" height="2" rx="1" fill="#1a3e8c" opacity="0.35" />
//         <rect x="27" y="39.5" width="8" height="2" rx="1" fill="#1a3e8c" opacity="0.25" />
//       </svg>
//     ),
//     color: "#1a3e8c",
//     accent: "#e8a020",
//   },
//   {
//     id: 4,
//     tag: "K+12 Education",
//     name: "K+12 School ERP",
//     fullName: "K+12 Complete School ERP",
//     description:
//       "A comprehensive school management ecosystem covering admissions, academics, finance, timetable, library, transport, and parent portals — purpose-built for K-12 institutions.",
//     features: ["End-to-end admissions flow", "Academic & timetable planner", "Parent & student portals"],
//     icon: (
//       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//         <path d="M32 8L6 22v2h52v-2L32 8z" fill="#e8a020" opacity="0.25" stroke="#e8a020" strokeWidth="2.2" strokeLinejoin="round" />
//         <rect x="12" y="24" width="8" height="22" rx="2" fill="#1a3e8c" opacity="0.15" stroke="#1a3e8c" strokeWidth="2" />
//         <rect x="28" y="24" width="8" height="22" rx="2" fill="#1a3e8c" opacity="0.15" stroke="#1a3e8c" strokeWidth="2" />
//         <rect x="44" y="24" width="8" height="22" rx="2" fill="#1a3e8c" opacity="0.15" stroke="#1a3e8c" strokeWidth="2" />
//         <rect x="8" y="46" width="48" height="4" rx="2" fill="#1a3e8c" opacity="0.2" stroke="#1a3e8c" strokeWidth="2" />
//         <rect x="28" y="36" width="8" height="10" rx="1.5" fill="#e8a020" opacity="0.4" />
//         <circle cx="32" cy="17" r="2.5" fill="#e8a020" />
//       </svg>
//     ),
//     color: "#1a3e8c",
//     accent: "#e8a020",
//   },
// ];

// // ════════════════════════════════════════════════════════════════════
// const Products = () => {
//   const [hovered, setHovered]           = useState(null);
//   const [selectedProduct, setSelected] = useState(null); // ← tracks which card was clicked

//   // If a product is selected, show its case study page
//   if (selectedProduct !== null) {
//     return (
//       <ProductCaseStudy
//         productId={selectedProduct}
//         onBack={() => setSelected(null)}
//       />
//     );
//   }

//   return (
//     <div style={{ minHeight: "100vh", background: "#f8f9fc", fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif" }}>

//       {/* ── HERO ── */}
//       <div style={{ background: "linear-gradient(135deg, #0d2b6e 0%, #1a3e8c 60%, #1e4fa8 100%)", padding: "72px 24px 80px", position: "relative", overflow: "hidden" }}>
//         <div style={{ position: "absolute", top: -60, right: -60, width: 240, height: 240, borderRadius: "50%", border: "2px solid rgba(232,160,32,0.2)", pointerEvents: "none" }} />
//         <div style={{ position: "absolute", top: -20, right: -20, width: 140, height: 140, borderRadius: "50%", border: "2px solid rgba(232,160,32,0.15)", pointerEvents: "none" }} />
//         <div style={{ position: "absolute", bottom: -40, left: 80, width: 180, height: 180, borderRadius: "50%", background: "rgba(232,160,32,0.06)", pointerEvents: "none" }} />

//         <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
//             <div style={{ width: 36, height: 3, background: "#e8a020", borderRadius: 2 }} />
//             <span style={{ color: "#e8a020", fontWeight: 700, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase" }}>Our Products</span>
//           </div>
//           <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#fff", margin: "0 0 20px", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
//             Solutions That Power<br />
//             <span style={{ color: "#e8a020" }}>Modern Organisations</span>
//           </h1>
//           <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 16, maxWidth: 520, lineHeight: 1.7, margin: 0 }}>
//             From content publishing to full school management — our product suite is engineered to simplify operations and drive smarter decisions.
//           </p>
//         </div>
//       </div>

//       <div style={{ height: 32, background: "#f8f9fc", marginTop: -32, borderRadius: "32px 32px 0 0", position: "relative", zIndex: 2 }} />

//       {/* Click hint */}
//       <p style={{ textAlign: "center", fontSize: 13, color: "#8a94b0", fontWeight: 500, margin: "16px 0 -8px", letterSpacing: "0.03em" }}>
//         Click any product card to explore its full case study →
//       </p>

//       {/* ── CARDS GRID ── */}
//       <div style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 24px 80px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
//         {PRODUCTS.map((p) => (
//           <ProductCard
//             key={p.id}
//             product={p}
//             isHovered={hovered === p.id}
//             onEnter={() => setHovered(p.id)}
//             onLeave={() => setHovered(null)}
//             onClick={() => setSelected(p.id)}   // ← opens case study
//           />
//         ))}
//       </div>

//       {/* ── BOTTOM CTA ── */}
//       <div style={{ background: "linear-gradient(135deg, #0d2b6e 0%, #1a3e8c 100%)", margin: "0 24px 60px", borderRadius: 20, padding: "48px 40px", maxWidth: 1052, marginLeft: "auto", marginRight: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24, position: "relative", overflow: "hidden" }}>
//         <div style={{ position: "absolute", top: -30, right: 60, width: 160, height: 160, borderRadius: "50%", border: "2px solid rgba(232,160,32,0.18)", pointerEvents: "none" }} />
//         <div>
//           <p style={{ color: "#e8a020", fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 8px" }}>Get Started Today</p>
//           <h2 style={{ color: "#fff", fontSize: "1.6rem", fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.01em" }}>Not sure which product fits?</h2>
//           <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, margin: 0 }}>Our team will help you pick the right solution for your needs.</p>
//         </div>
//         <a href="/contact" style={{ display: "inline-block", background: "#e8a020", color: "#fff", fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 32px", borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 4px 20px rgba(232,160,32,0.4)" }}>
//           Contact Us →
//         </a>
//       </div>
//     </div>
//   );
// };

// // ── Product Card ────────────────────────────────────────────────────
// const ProductCard = ({ product: p, isHovered, onEnter, onLeave, onClick }) => (
//   <div
//     onMouseEnter={onEnter}
//     onMouseLeave={onLeave}
//     onClick={onClick}
//     style={{
//       background: "#fff",
//       borderRadius: 18,
//       border: `2px solid ${isHovered ? p.color : "rgba(26,62,140,0.1)"}`,
//       padding: "32px 28px 28px",
//       cursor: "pointer",
//       transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
//       transform: isHovered ? "translateY(-6px)" : "translateY(0)",
//       boxShadow: isHovered ? "0 20px 48px rgba(26,62,140,0.14)" : "0 2px 12px rgba(26,62,140,0.06)",
//       display: "flex",
//       flexDirection: "column",
//       gap: 0,
//     }}
//   >
//     <div style={{ width: 72, height: 72, marginBottom: 20, transition: "transform 0.25s ease", transform: isHovered ? "scale(1.08)" : "scale(1)" }}>
//       {p.icon}
//     </div>

//     <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: p.accent, background: isHovered ? `${p.accent}18` : `${p.accent}10`, border: `1px solid ${p.accent}30`, padding: "3px 10px", borderRadius: 20, marginBottom: 10, width: "fit-content", transition: "background 0.25s" }}>
//       {p.tag}
//     </span>

//     <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0d2b6e", margin: "0 0 6px", lineHeight: 1.25, letterSpacing: "-0.01em" }}>
//       {p.name}
//     </h3>

//     <p style={{ fontSize: 12, color: "#8a94b0", fontWeight: 600, margin: "0 0 14px", letterSpacing: "0.03em" }}>
//       {p.fullName}
//     </p>

//     <div style={{ width: isHovered ? 56 : 36, height: 3, borderRadius: 2, background: p.accent, marginBottom: 16, transition: "width 0.25s" }} />

//     <p style={{ fontSize: 14, color: "#4a5275", lineHeight: 1.7, margin: "0 0 20px", flexGrow: 1 }}>
//       {p.description}
//     </p>

//     <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
//       {p.features.map((f) => (
//         <li key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
//           <span style={{ width: 18, height: 18, borderRadius: "50%", background: `${p.accent}18`, border: `1.5px solid ${p.accent}50`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//             <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
//               <path d="M1 3.5l2.5 2.5L8 1" stroke={p.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </span>
//           <span style={{ fontSize: 13, color: "#4a5275", fontWeight: 500 }}>{f}</span>
//         </li>
//       ))}
//     </ul>

//     <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
//       <span style={{ fontSize: 13, fontWeight: 700, color: p.color, letterSpacing: "0.06em", textTransform: "uppercase" }}>
//         View Case Study
//       </span>
//       <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: "50%", background: `${p.color}15`, transition: "transform 0.2s", transform: isHovered ? "translateX(4px)" : "translateX(0)" }}>
//         <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//           <path d="M2 6h8M7 3l3 3-3 3" stroke={p.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </span>
//     </div>
//   </div>
// );

// export default Products;