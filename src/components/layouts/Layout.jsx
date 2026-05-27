import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

function useWindowWidth() {
    const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
    useEffect(() => {
        const handle = () => setW(window.innerWidth);
        window.addEventListener("resize", handle);
        return () => window.removeEventListener("resize", handle);
    }, []);
    return w;
}

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
];

const Layout = ({ children }) => {
    const width = useWindowWidth();
    const isMobile = width < 768;
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const isLinkActive = (href) => {
        if (href === "/") {
            return location.pathname === "/";
        }

        return location.pathname === href;
    };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close menu on route change / resize
    useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

    return (
        <div style={{ minHeight: "100vh", fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif", background: "#f8f9fc" }}>
            <style>{`
        @keyframes marqueeScroll { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes dropDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes glowPulse { 0%,100%{box-shadow:0 0 0 0 rgba(232,160,32,0.4)} 50%{box-shadow:0 0 0 10px rgba(232,160,32,0)} }
        .nav-link {
          color: #0d2b6e;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 0.01em;
          position: relative;
          padding: 4px 0;
          transition: color 0.2s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: #e8a020;
          border-radius: 2px;
          transition: width 0.28s ease;
        }
        .nav-link:hover { color: #e8a020; }
        .nav-link:hover::after { width: 100%; }
        .nav-link.active {
          color: #0d2b6e;
        }
        .nav-link.active::after {
          width: 100%;
          background: #e8a020;
        }
        .mob-link {
          display: block;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 16px 28px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          transition: color 0.2s, background 0.2s;
        }
        .mob-link:hover { color: #e8a020; background: rgba(255,255,255,0.04); }
        .mob-link.active {
          color: #ffd27c;
          background: rgba(232, 160, 32, 0.14);
        }
        .top-icon { display:inline-flex; align-items:center; gap:6px; }
      `}</style>

            {/* ── TOP INFO BAR ── */}
            <div style={{
                background: "#0d2b6e",
                padding: isMobile ? "8px 16px" : "9px 0",
                position: "relative",
                zIndex: 100,
                overflow: "hidden",
            }}>
                {isMobile ? (
                    /* Mobile: scrolling marquee */
                    <div style={{ overflow: "hidden", width: "100%" }}>
                        <div style={{ display: "flex", animation: "marqueeScroll 14s linear infinite", width: "max-content", alignItems: "center", gap: 0 }}>
                            {[...Array(2)].map((_, rep) => (
                                <div key={rep} style={{ display: "flex", alignItems: "center", gap: 0 }}>
                                    <span className="top-icon" style={{ color: "rgba(255,255,255,0.82)", fontSize: 12, whiteSpace: "nowrap", padding: "0 20px" }}>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                                        +91 84849 05526
                                    </span>
                                    <span style={{ color: "#e8a020", fontSize: 14 }}>◆</span>
                                    <span className="top-icon" style={{ color: "rgba(255,255,255,0.82)", fontSize: 12, whiteSpace: "nowrap", padding: "0 20px" }}>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                        info@ramtechnology.in
                                    </span>
                                    <span style={{ color: "#e8a020", fontSize: 14 }}>◆</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    /* Desktop: left info + right social */
                    <div style={{ maxWidth: 1060, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
                        {/* Left: contact info */}
                        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                                <a href="tel:+918484905526" style={{ color: "rgba(255,255,255,0.78)", fontSize: 12, textDecoration: "none", transition: "color 0.2s" }}
                                    onMouseEnter={e => e.currentTarget.style.color = "#e8a020"}
                                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.78)"}>
                                    +91 84849 05526
                                </a>
                                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>|</span>
                                <a href="tel:+918484906643" style={{ color: "rgba(255,255,255,0.78)", fontSize: 12, textDecoration: "none", transition: "color 0.2s" }}
                                    onMouseEnter={e => e.currentTarget.style.color = "#e8a020"}
                                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.78)"}>
                                    +91 8484906643
                                </a>
                            </div>
                            <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)" }} />
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                <a href="mailto:info@ramtechnology.in" style={{ color: "rgba(255,255,255,0.78)", fontSize: 12, textDecoration: "none", transition: "color 0.2s" }}
                                    onMouseEnter={e => e.currentTarget.style.color = "#e8a020"}
                                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.78)"}>
                                    info@ramtechnology.in
                                </a>
                            </div>
                        </div>

                        {/* Right: tagline + social icons */}
                        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                            <span
                                style={{
                                    color: "rgba(255,255,255,0.4)",
                                    fontSize: 11,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                }}
                            >
                                Right Analysis Matters
                            </span>

                            <div
                                style={{
                                    width: 1,
                                    height: 14,
                                    background: "rgba(255,255,255,0.15)",
                                }}
                            />

                            {/* FACEBOOK */}
                            <a
                                href="https://www.facebook.com/people/Right-Analysis-Matters-Pvt-Ltd/61584691050212/"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: "rgba(255,255,255,0.5)",
                                    transition: "all 0.25s ease",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#e8a020";
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
                                </svg>
                            </a>

                            {/* INSTAGRAM */}
                            <a
                                href="https://www.instagram.com/rightanalysismatters/"
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    color: "rgba(255,255,255,0.5)",
                                    transition: "all 0.25s ease",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#e8a020";
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                }}
                            >
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.88 1.12a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 8.5z" />
                                </svg>
                            </a>


                        </div>
                    </div>
                )}
            </div>

            {/* ── NAVBAR ── */}
            <nav style={{
                position: "sticky",
                top: 0,
                zIndex: 99,
                background: scrolled ? "rgba(255,255,255,0.97)" : "#ffffff",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                boxShadow: scrolled ? "0 2px 24px rgba(13,43,110,0.10)" : "0 1px 0 rgba(13,43,110,0.08)",
                transition: "box-shadow 0.3s ease, background 0.3s ease",
            }}>
                <div style={{ maxWidth: 1060, margin: "0 auto", padding: isMobile ? "0 16px" : "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: isMobile ? 62 : 92, gap: isMobile ? 12 : 24 }}>

                    {/* ── LOGO ── */}
                    <a
                        href="/"
                        style={{
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            gap: isMobile ? 8 : 18,

                            /* MOBILE */
                            maxWidth: isMobile ? "78%" : "unset",
                            minWidth: isMobile ? 0 : 360,

                            /* DESKTOP */
                            flexShrink: isMobile ? 1 : 0,

                            overflow: "hidden",
                        }}
                    >
                        {/* LOGO IMAGE */}
                        <img
                            src="/logo.png"
                            alt="RAM Logo"
                            style={{
                                width: isMobile ? 66 : 84,
                                height: isMobile ? 46 : 54,
                                objectFit: isMobile ? "contain" : "cover",
                                display: "block",
                                flexShrink: 0,
                                borderRadius: isMobile ? 6 : 12,
                            }}
                        />

                        {/* TEXT */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                lineHeight: isMobile ? 1.05 : 1.2,

                                /* ONLY FOR MOBILE */
                                overflow: isMobile ? "hidden" : "visible",
                                minWidth: 0,
                            }}
                        >
                            <span
                                style={{
                                    fontWeight: 900,
                                    fontSize: isMobile ? 11 : 24,
                                    color: "#e8a020",
                                    letterSpacing: isMobile ? "0.01em" : "0.02em",

                                    /* MOBILE TEXT CONTROL */
                                    whiteSpace: isMobile ? "nowrap" : "normal",
                                    overflow: isMobile ? "hidden" : "visible",
                                    textOverflow: isMobile ? "ellipsis" : "unset",
                                }}
                            >
                                Right Analysis Matters Pvt. Ltd.
                            </span>
                        </div>
                    </a>
                    {/* ── RIGHT: DESKTOP NAV / CTA / MOBILE HAMBURGER ── */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: isMobile ? 12 : 32, marginLeft: "auto", flex: isMobile ? "0 0 auto" : "1 1 auto" }}>
                        {!isMobile && (
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 36, flexWrap: "wrap" }}>
                                {NAV_LINKS.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className={`nav-link ${isLinkActive(link.href) ? "active" : ""}`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        )}
                        {!isMobile && (
                            <a href="/contact-us" style={{
                                background: "#e8a020", color: "#fff",
                                padding: "12px 28px", borderRadius: 8,
                                textDecoration: "none", fontWeight: 700,
                                fontSize: 14, letterSpacing: "0.01em",
                                whiteSpace: "nowrap",
                                transition: "background 0.2s ease",
                            }}
                                onMouseEnter={e => e.currentTarget.style.background = "#cf8f1a"}
                                onMouseLeave={e => e.currentTarget.style.background = "#e8a020"}
                            >
                                Contact Us
                            </a>
                        )}

                        {/* Hamburger */}
                        {isMobile && (
                            <button
                                onClick={() => setMenuOpen(o => !o)}
                                style={{ background: "none", border: "none", cursor: "pointer", padding: 6, display: "flex", flexDirection: "column", gap: 5, alignItems: "flex-end" }}
                                aria-label="Toggle menu"
                            >
                                <span style={{ display: "block", width: menuOpen ? 22 : 24, height: 2.5, background: "#0d2b6e", borderRadius: 2, transition: "all 0.3s ease", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
                                <span style={{ display: "block", width: 16, height: 2.5, background: "#0d2b6e", borderRadius: 2, transition: "all 0.3s ease", opacity: menuOpen ? 0 : 1 }} />
                                <span style={{ display: "block", width: menuOpen ? 22 : 20, height: 2.5, background: "#0d2b6e", borderRadius: 2, transition: "all 0.3s ease", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
                            </button>
                        )}
                    </div>
                </div>

                {/* ── MOBILE DROPDOWN MENU ── */}
                {isMobile && menuOpen && (
                    <div style={{
                        background: "#0a1f5c",
                        animation: "dropDown 0.25s ease forwards",
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        paddingBottom: 8,
                    }}>
                        {/* Dot texture */}
                        <div style={{ position: "absolute", left: 0, right: 0, height: "100%", backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "22px 22px", pointerEvents: "none" }} />

                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`mob-link ${isLinkActive(link.href) ? "active" : ""}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Mobile CTA */}
                        <div style={{ padding: "16px 24px 8px" }}>
                            <a href="https://wa.me/918484905526" target="_blank" rel="noreferrer" style={{
                                display: "block", textAlign: "center",
                                background: "#e8a020", color: "#fff",
                                padding: "13px 24px", borderRadius: 8,
                                textDecoration: "none", fontWeight: 800,
                                fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
                            }}>
                                💬 Get a Quote on WhatsApp
                            </a>
                        </div>

                        {/* Mobile contact row */}
                        <div style={{ padding: "12px 24px", display: "flex", gap: 20, borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 8 }}>
                            <a href="tel:+918484905526" style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                                +91 84849 05526
                            </a>
                            <a href="mailto:info@ramtechnology.in" style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#e8a020" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                info@ramtechnology.in
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            {/* ── PAGE CONTENT ── */}
            <main>{children || <Outlet />}</main>
        </div>
    );
};

export default Layout;
