import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import {
  colors,
  typography,
  gradients,
  spacing,
  radius,
  shadows,
  transitions,
} from "../theme/theme";

const Fallback = () => {
  return (
    <>
    <Helmet>
  {/* Basic SEO */}
  <title>404 - Page Not Found | RAM Solutions</title>
  <meta
    name="description"
    content="The page you're looking for doesn't exist. Explore RAM Solutions to discover our web development, mobile app, and digital services."
  />
  <meta
    name="keywords"
    content="404 error, page not found, RAM Solutions, web development Pune, software company India"
  />
  <meta name="robots" content="noindex, follow" />

  {/* Open Graph (Facebook, LinkedIn) */}
  <meta property="og:title" content="404 - Page Not Found | RAM Solutions" />
  <meta
    property="og:description"
    content="Oops! This page doesn't exist. Visit RAM Solutions to explore our services and solutions."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourwebsite.com/404" />
  <meta property="og:image" content="https://yourwebsite.com/ram-logo.jpg" />

  {/* Twitter SEO */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="404 - Page Not Found | RAM Solutions" />
  <meta
    name="twitter:description"
    content="This page couldn't be found. Visit RAM Solutions to explore our digital services."
  />
  <meta name="twitter:image" content="https://yourwebsite.com/ram-logo.jpg" />

  {/* Canonical */}
  <link rel="canonical" href="https://yourwebsite.com/404" />
</Helmet>
    <div
      style={{
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: colors.bgPage,
        padding: `${spacing.xl}px ${spacing.sectionPadXMob ?? 16}px`,
        fontFamily: typography.paragraph.fontFamily,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 640,
          minHeight: 460,
          background: gradients.hero,
          borderRadius: radius.lg,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: `24px 24px 28px`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dot grid overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle, ${colors.whiteTint6} 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
            pointerEvents: "none",
          }}
        />

        {/* Orb blobs */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 320, height: 320,
            top: -100, right: -80,
            borderRadius: radius.full,
            background: colors.primaryTint22,
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 200, height: 200,
            bottom: -60, left: -60,
            borderRadius: radius.full,
            background: colors.primaryTint15,
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>

          {/* Icon ring */}
          <div
            style={{
              width: 76, height: 76,
              borderRadius: radius.full,
              background: colors.whiteTint7,
              border: `1px solid ${colors.borderLighter}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: 16,
            }}
          >
            {/* Replace with your icon component */}
            <span style={{ fontSize: 32, color: colors.textOnDark60 }}>🗺</span>
          </div>

          {/* Eyebrow tag */}
          <span
            style={{
              fontFamily: typography.fontFamily.secondaryHeading,
              fontSize: 12,
              fontWeight: typography.weight.semibold,
              letterSpacing: typography.letterSpacing.widest,
              textTransform: "uppercase",
              color: colors.accent,
              background: colors.accentTint12,
              border: `1px solid ${colors.accentTint25}`,
              padding: `7px 14px`,
              borderRadius: radius.pill,
              marginBottom: 12,
            }}
          >
            Error
          </span>

          {/* 404 number */}
          <div
            style={{
              fontFamily: typography.heading.fontFamily,
              fontSize: 96,
              fontWeight: typography.weight.bold,
              lineHeight: typography.lineHeight.tight,
              letterSpacing: typography.letterSpacing.tight,
              color: colors.textOnDark,
              margin: `0 0 6px`,
            }}
          >
            4<span style={{ color: colors.accent }}>0</span>4
          </div>

          {/* Divider */}
          <div
            style={{
              width: 56, height: 3,
              background: colors.accent,
              borderRadius: radius.sm,
              margin: `10px auto 16px`,
            }}
          />

          {/* Title */}
          <h1
            style={{
              fontFamily: typography.heading.fontFamily,
              fontSize: 24,
              fontWeight: typography.heading.h2.fontWeight,
              lineHeight: typography.heading.h2.lineHeight,
              color: colors.textOnDark,
              margin: `0 0 10px`,
            }}
          >
            Page Not Found
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: typography.paragraph.fontFamily,
              fontSize: 15,
              fontWeight: typography.paragraph.fontWeight,
              lineHeight: typography.paragraph.lineHeight,
              color: colors.textOnDarkSub,
              maxWidth: 420,
              margin: `0 0 22px`,
            }}
          >
            The page you're looking for doesn't exist or may have been moved.
            Let's get you back on track.
          </p>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <button
              onClick={() => window.location.href = "/"}
              style={{
                fontFamily: typography.fontFamily.secondaryHeading,
                fontSize: 15,
                fontWeight: typography.weight.semibold,
                letterSpacing: typography.letterSpacing.wider,
                background: colors.accent,
                color: colors.primaryDark,
                border: "none",
                padding: `11px 20px`,
                borderRadius: radius.pill,
                cursor: "pointer",
                boxShadow: shadows.cta,
                transition: transitions.fast,
                display: "inline-flex",
                alignItems: "center",
                gap: spacing.sm,
              }}
            >
              🏠 Go Home
            </button>

            <button
              onClick={() => window.history.back()}
              style={{
                fontFamily: typography.fontFamily.secondaryHeading,
                fontSize: 15,
                fontWeight: typography.weight.semibold,
                letterSpacing: typography.letterSpacing.wider,
                background: colors.whiteTint10,
                color: colors.textOnDark,
                border: `1px solid ${colors.borderLight}`,
                padding: `11px 20px`,
                borderRadius: radius.pill,
                cursor: "pointer",
                transition: transitions.fast,
                display: "inline-flex",
                alignItems: "center",
                gap: spacing.sm,
              }}
            >
              ← Go Back
            </button>
          </div>

        

        </div>
      </div>
    </div>
    <Footer/></>
  );
};

export default Fallback;