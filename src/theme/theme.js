// // 



// // ─────────────────────────────────────────────────────────────
// //  theme.js  —  Single source of truth for design tokens
// //  Used across: Products, ProductCaseStudy, and all shared UI
// // ─────────────────────────────────────────────────────────────

// // ── Palette ──────────────────────────────────────────────────
// export const colors = {
//   // Brand primaries
//   primary:       "#1a3e8c",   // deep blue — headings, borders, icons
//   primaryDark:   "#0d2b6e",   // darkest blue — hero bg start, CTA bg
//   primaryLight:  "#1e4fa8",   // lighter blue — hero bg end
//   primaryDeep:   "#080f2e",   // near-black blue — AboutUs hero bg
//   primaryMid:    "#1649b5",   // mid blue — mission card gradient
//   accent:        "#e8a020",   // gold/amber — highlights, tags, CTAs
//   accentLight:   "#ffd27a",   // light gold — vision card gradient end
//   green:         "#2a9d6e",   // green — e-commerce web dev column

//   // Neutrals
//   white:         "#ffffff",
//   bgPage:        "#f8f9fc",   // page background
//   bgCard:        "#ffffff",   // card background
//   bgLight:       "#f0f5ff",   // light blue-white — feature panels, testimonial

//   // Text
//   textHeading:   "#0d2b6e",   // h1, h2, h3
//   textBody:      "#4a5275",   // body copy
//   textBodyAlt:   "#5a6380",   // alternate body (slightly lighter)
//   textSub:       "#6a7290",   // card sub-copy
//   textMuted:     "#8a94b0",   // subtitles, hints
//   textOnDark:    "#ffffff",   // text on dark/primary backgrounds
//   textOnDarkSub: "rgba(255,255,255,0.72)", // secondary text on dark
//   textOnDark60:  "rgba(255,255,255,0.60)", // tertiary text on dark
//   textOnDark55:  "rgba(255,255,255,0.55)", // quaternary (AboutUs hero stats)
//   textOnDark85:  "rgba(255,255,255,0.85)", // near-opaque on dark

//   // Borders / dividers
//   borderDefault: "rgba(26,62,140,0.1)",
//   borderHover:   "#1a3e8c",   // same as primary — card hover border
//   borderLight:   "rgba(255,255,255,0.15)", // ghost borders on dark panels
//   borderLighter: "rgba(255,255,255,0.10)", // stat card borders on dark hero

//   // Overlays / tints
//   accentTint4:   "rgba(232,160,32,0.04)",
//   accentTint5:   "rgba(232,160,32,0.05)",
//   accentTint10:  "rgba(232,160,32,0.10)",
//   accentTint12:  "rgba(232,160,32,0.12)",
//   accentTint15:  "rgba(232,160,32,0.15)",
//   accentTint18:  "rgba(232,160,32,0.18)",
//   accentTint20:  "rgba(232,160,32,0.20)",
//   accentTint25:  "rgba(232,160,32,0.25)",
//   accentTint40:  "rgba(232,160,32,0.40)",
//   primaryTint5:  "rgba(13,43,110,0.05)",
//   primaryTint6:  "rgba(26,62,140,0.06)",
//   primaryTint7:  "rgba(13,43,110,0.07)",
//   primaryTint8:  "rgba(13,43,110,0.08)",
//   primaryTint12: "rgba(13,43,110,0.12)",
//   primaryTint14: "rgba(26,62,140,0.14)",
//   primaryTint15: "rgba(26,62,140,0.15)",
//   primaryTint22: "rgba(22,73,181,0.22)",   // orb blob — AboutUs hero
//   whiteTint5:    "rgba(255,255,255,0.05)",  // stat card bg on dark
//   whiteTint7:    "rgba(255,255,255,0.07)",  // feature box on dark
//   whiteTint10:   "rgba(255,255,255,0.10)",  // ghost button bg
//   whiteTint4:    "rgba(255,255,255,0.04)",  // dot grid on dark
//   whiteTint6:    "rgba(255,255,255,0.06)",  // dot grid on hero left panel
//   whiteTint8:    "rgba(255,255,255,0.08)",  // ring border on dark
// };

// // ── Typography ────────────────────────────────────────────────
// export const typography = {
//   fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",

//   // Font sizes
//   size: {
//     xs:    11,   // tags / eyebrow labels
//     sm:    12,   // subtitles, meta info
//     base:  13,   // feature list, hints
//     md:    14,   // body, buttons
//     lg:    15,   // sub-headings, lead copy
//     xl:    16,   // hero body
//   },

//   // Font weights
//   weight: {
//     regular:    400,
//     medium:     500,
//     semibold:   600,
//     bold:       700,
//     extrabold:  800,
//   },

//   // Line heights
//   lineHeight: {
//     tight:  1.15,
//     normal: 1.25,
//     body:   1.70,
//   },

//   // Letter spacings
//   letterSpacing: {
//     tight:  "-0.02em",
//     none:   "0",
//     wide:   "0.03em",
//     wider:  "0.06em",
//     widest: "0.12em",
//   },
// };

// // ── Spacing ───────────────────────────────────────────────────
// export const spacing = {
//   xs:  4,
//   sm:  8,
//   md:  14,
//   lg:  20,
//   xl:  24,
//   xxl: 32,
//   hero: { paddingY: 72, paddingX: 24, paddingBottom: 80 },
// };

// // ── Border Radius ─────────────────────────────────────────────
// export const radius = {
//   sm:   4,
//   md:   8,
//   lg:   18,
//   xl:   20,
//   pill: 20,     // tag chips / badges
//   full: "50%",  // circles
// };

// // ── Shadows ───────────────────────────────────────────────────
// export const shadows = {
//   card:         "0 2px 12px rgba(26,62,140,0.06)",
//   cardHover:    "0 20px 48px rgba(26,62,140,0.14)",
//   cardMd:       "0 2px 16px rgba(13,43,110,0.06)",
//   cardMdHover:  "0 24px 56px rgba(13,43,110,0.18)",
//   cardSm:       "0 2px 14px rgba(26,62,140,0.07)",
//   cardSmHover:  "0 20px 48px rgba(26,62,140,0.22)",
//   section:      "0 2px 12px rgba(13,43,110,0.08)",
//   cta:          "0 4px 20px rgba(232,160,32,0.40)",
//   ctaLg:        "0 6px 20px rgba(232,160,32,0.40)",
//   primary:      "0 8px 24px rgba(13,43,110,0.30)",
//   primaryLg:    "0 8px 32px rgba(232,160,32,0.40)",
// };

// // ── Transitions ───────────────────────────────────────────────
// export const transitions = {
//   default: "0.25s ease",
//   fast:    "0.2s ease",
//   slow:    "0.3s ease",
//   reveal:  "0.8s ease",
//   revealFast: "0.6s ease",
//   revealSlow: "0.7s ease",
// };

// // ── Gradients ─────────────────────────────────────────────────
// export const gradients = {
//   hero:       "linear-gradient(135deg, #0d2b6e 0%, #1a3e8c 60%, #1e4fa8 100%)",
//   cta:        "linear-gradient(135deg, #0d2b6e 0%, #1a3e8c 100%)",
//   primary:    "linear-gradient(135deg, #0d2b6e, #1a3e8c)",
//   primaryLg:  "linear-gradient(135deg, #0d2b6e 0%, #1649b5 100%)",  // mission card
//   accent:     "linear-gradient(135deg, #e8a020 0%, #ffd27a 100%)",   // vision card
//   card:       "linear-gradient(135deg, #f0f5ff 0%, #f8f9fc 100%)",   // testimonial bg
//   featureCard:"linear-gradient(135deg, #f0f5ff, #e8f0ff)",           // security panel
//   avatar:     "linear-gradient(135deg, #0d2b6e, #1a3e8c)",           // avatar circles
// };

// // ── Z-index ───────────────────────────────────────────────────
// export const zIndex = {
//   base:    1,
//   overlay: 2,
//   modal:   10,
// };

// // ── Icon sizes ────────────────────────────────────────────────
// export const iconSize = {
//   card:   72,   // product card icon box (px)
//   avatar: 44,   // testimonial avatar (px)
//   avatarSm: 36, // trust row avatar (px)
//   feature: 44,  // security feature icon box (px)
//   featureSm: 32,// feature grid icon box (px)
// };

// // ── Layout ───────────────────────────────────────────────────
// export const layout = {
//   maxWidthContent: 900,    // hero / text areas
//   maxWidthGrid:    1060,   // main content max-width (Home, About)
//   maxWidthGridLg:  1100,   // product grid & CTA banner
//   gridMinCard:     280,    // min card width in auto-fit grid
//   gridGap:         28,
//   sectionPadY:     72,     // desktop section padding top/bottom
//   sectionPadYMob:  52,     // mobile section padding top/bottom
//   sectionPadX:     24,     // desktop section padding left/right
//   sectionPadXMob:  16,     // mobile section padding left/right
// };

// // ── Animation helpers (for inline style transitions) ─────────
// export const animation = {
//   // Shared "fade in on scroll" pattern
//   fadeIn: (inView, delay = 0, dir = "up") => ({
//     opacity:    inView ? 1 : 0,
//     transform:  inView
//       ? "translate(0,0)"
//       : dir === "up"    ? "translateY(24px)"
//       : dir === "down"  ? "translateY(-24px)"
//       : dir === "left"  ? "translateX(-30px)"
//       : "translateX(30px)",
//     transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
//   }),
// };

// // ─────────────────────────────────────────────────────────────
// //  Convenience: full theme object (optional single import)
// // ─────────────────────────────────────────────────────────────
// const theme = {
//   colors,
//   typography,
//   spacing,
//   radius,
//   shadows,
//   transitions,
//   gradients,
//   zIndex,
//   iconSize,
//   layout,
//   animation,
// };

// export default theme;



  export const colors = {
    // Brand primaries
    primary: "#1a3e8c",
    primaryDark: "#0d2b6e",
    primaryLight: "#1e4fa8",
    primaryDeep: "#080f2e",
    primaryMid: "#1649b5",
    accent: "#e8a020",
    accentLight: "#ffd27a",
    green: "#2a9d6e",

    // Neutrals
    white: "#ffffff",
    bgPage: "#f8f9fc",
    bgCard: "#ffffff",
    bgLight: "#f0f5ff",

    // Text
    textHeading: "#0d2b6e",
    textBody: "#4a5275",
    textBodyAlt: "#5a6380",
    textSub: "#6a7290",
    textMuted: "#8a94b0",
    textOnDark: "#ffffff",
    textOnDarkSub: "rgba(255,255,255,0.72)",
    textOnDark60: "rgba(255,255,255,0.60)",
    textOnDark55: "rgba(255,255,255,0.55)",
    textOnDark85: "rgba(255,255,255,0.85)",

    // Borders / dividers
    borderDefault: "rgba(26,62,140,0.1)",
    borderHover: "#1a3e8c",
    borderLight: "rgba(255,255,255,0.15)",
    borderLighter: "rgba(255,255,255,0.10)",

    // Overlays / tints
    accentTint4: "rgba(232,160,32,0.04)",
    accentTint5: "rgba(232,160,32,0.05)",
    accentTint10: "rgba(232,160,32,0.10)",
    accentTint12: "rgba(232,160,32,0.12)",
    accentTint15: "rgba(232,160,32,0.15)",
    accentTint18: "rgba(232,160,32,0.18)",
    accentTint20: "rgba(232,160,32,0.20)",
    accentTint25: "rgba(232,160,32,0.25)",
    accentTint40: "rgba(232,160,32,0.40)",
    primaryTint5: "rgba(13,43,110,0.05)",
    primaryTint6: "rgba(26,62,140,0.06)",
    primaryTint7: "rgba(13,43,110,0.07)",
    primaryTint8: "rgba(13,43,110,0.08)",
    primaryTint12: "rgba(13,43,110,0.12)",
    primaryTint14: "rgba(26,62,140,0.14)",
    primaryTint15: "rgba(26,62,140,0.15)",
    primaryTint22: "rgba(22,73,181,0.22)",
    whiteTint5: "rgba(255,255,255,0.05)",
    whiteTint7: "rgba(255,255,255,0.07)",
    whiteTint10: "rgba(255,255,255,0.10)",
    whiteTint4: "rgba(255,255,255,0.04)",
    whiteTint6: "rgba(255,255,255,0.06)",
    whiteTint8: "rgba(255,255,255,0.08)",
  };

  // ── Typography ────────────────────────────────────────────────
  export const typography = {
    // Font Families
    fontFamily: {
      paragraph: "'Raleway', sans-serif",
      heading: "'Titillium Web', sans-serif",
      secondaryHeading: "'Josefin Sans', sans-serif",
    },

    // Paragraph Styles
    paragraph: {
      fontFamily: "'Raleway', sans-serif",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.7,
    },

    // Main Heading Styles
    heading: {
      fontFamily: "'Titillium Web', sans-serif",

      h1: {
        fontSize: 72,
        fontWeight: 700,
        lineHeight: 1.1,
      },

      h2: {
        fontSize: 42,
        fontWeight: 700,
        lineHeight: 1.2,
      },

      h3: {
        fontSize: 14,
        fontWeight: 600,
        lineHeight: 1.3,
      },
    },

    // Secondary Heading
    secondaryHeading: {
      fontFamily: "'Josefin Sans', sans-serif",
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.4,
    },

    // Extra reusable sizes
    size: {
      xs: 11,
      sm: 12,
      base: 13,
      md: 14,
      lg: 15,
      xl: 16,
    },

    // Font weights
    weight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },

    // Line heights
    lineHeight: {
      tight: 1.15,
      normal: 1.25,
      body: 1.7,
    },

    // Letter spacings
    letterSpacing: {
      tight: "-0.02em",
      none: "0",
      wide: "0.03em",
      wider: "0.06em",
      widest: "0.12em",
    },
  };

  // ── Spacing ───────────────────────────────────────────────────
  export const spacing = {
    xs: 4,
    sm: 8,
    md: 14,
    lg: 20,
    xl: 24,
    xxl: 32,
    hero: { paddingY: 72, paddingX: 24, paddingBottom: 80 },
  };

  // ── Border Radius ─────────────────────────────────────────────
  export const radius = {
    sm: 4,
    md: 8,
    lg: 18,
    xl: 20,
    pill: 20,
    full: "50%",
  };

  // ── Shadows ───────────────────────────────────────────────────
  export const shadows = {
    card: "0 2px 12px rgba(26,62,140,0.06)",
    cardHover: "0 20px 48px rgba(26,62,140,0.14)",
    cardMd: "0 2px 16px rgba(13,43,110,0.06)",
    cardMdHover: "0 24px 56px rgba(13,43,110,0.18)",
    cardSm: "0 2px 14px rgba(26,62,140,0.07)",
    cardSmHover: "0 20px 48px rgba(26,62,140,0.22)",
    section: "0 2px 12px rgba(13,43,110,0.08)",
    cta: "0 4px 20px rgba(232,160,32,0.40)",
    ctaLg: "0 6px 20px rgba(232,160,32,0.40)",
    primary: "0 8px 24px rgba(13,43,110,0.30)",
    primaryLg: "0 8px 32px rgba(232,160,32,0.40)",
  };

  // ── Transitions ───────────────────────────────────────────────
  export const transitions = {
    default: "0.25s ease",
    fast: "0.2s ease",
    slow: "0.3s ease",
    reveal: "0.8s ease",
    revealFast: "0.6s ease",
    revealSlow: "0.7s ease",
  };

  // ── Gradients ─────────────────────────────────────────────────
  export const gradients = {
    hero:
      "linear-gradient(135deg, #0d2b6e 0%, #1a3e8c 60%, #1e4fa8 100%)",

    cta:
      "linear-gradient(135deg, #0d2b6e 0%, #1a3e8c 100%)",

    primary:
      "linear-gradient(135deg, #0d2b6e, #1a3e8c)",

    primaryLg:
      "linear-gradient(135deg, #0d2b6e 0%, #1649b5 100%)",

    accent:
      "linear-gradient(135deg, #e8a020 0%, #ffd27a 100%)",

    card:
      "linear-gradient(135deg, #f0f5ff 0%, #f8f9fc 100%)",

    featureCard:
      "linear-gradient(135deg, #f0f5ff, #e8f0ff)",

    avatar:
      "linear-gradient(135deg, #0d2b6e, #1a3e8c)",
  };

  // ── Z-index ───────────────────────────────────────────────────
  export const zIndex = {
    base: 1,
    overlay: 2,
    modal: 10,
  };

  // ── Icon sizes ────────────────────────────────────────────────
  export const iconSize = {
    card: 72,
    avatar: 44,
    avatarSm: 36,
    feature: 44,
    featureSm: 32,
  };

  // ── Layout ────────────────────────────────────────────────────
  export const layout = {
    maxWidthContent: 900,
    maxWidthGrid: 1060,
    maxWidthGridLg: 1100,
    gridMinCard: 280,
    gridGap: 28,
    sectionPadY: 72,
    sectionPadYMob: 52,
    sectionPadX: 24,
    sectionPadXMob: 16,
  };

  // ── Animation helpers ─────────────────────────────────────────
  export const animation = {
    fadeIn: (inView, delay = 0, dir = "up") => ({
      opacity: inView ? 1 : 0,

      transform: inView
        ? "translate(0,0)"
        : dir === "up"
        ? "translateY(24px)"
        : dir === "down"
        ? "translateY(-24px)"
        : dir === "left"
        ? "translateX(-30px)"
        : "translateX(30px)",

      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    }),
  };

  // ─────────────────────────────────────────────────────────────
  //  Convenience: full theme object
  // ─────────────────────────────────────────────────────────────
  const theme = {
    colors,
    typography,
    spacing,
    radius,
    shadows,
    transitions,
    gradients,
    zIndex,
    iconSize,
    layout,
    animation,
  };

  export default theme;