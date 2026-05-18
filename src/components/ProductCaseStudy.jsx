import React, { useState } from "react";

// ── CASE STUDY DATA ─────────────────────────────────────────────────
export const CASE_STUDIES = {
  1: {
    id: 1,
    productName: "CMS",
    fullName: "Counsellor Management System",
    tagline: "Transforming Student Counselling with Smart Automation",
    heroColor: "#1a3e8c",
    accent: "#e8a020",
    overview:
      "Educational institutions lose up to 40% of prospective students due to poor inquiry follow-up and uncoordinated counselling workflows. Our CMS was built to eliminate that gap — giving institutes a single intelligent platform to manage every student interaction from first inquiry to final admission.",
    stats: [
      { value: "3x", label: "Faster inquiry response" },
      { value: "68%", label: "Reduction in lead drop-off" },
      { value: "5,000+", label: "Students managed" },
      { value: "92%", label: "Counsellor efficiency gain" },
    ],
    challenge: {
      title: "The Challenge",
      body:
        "Institutes were managing student inquiries through spreadsheets, WhatsApp groups, and scattered emails. Counsellors had no visibility into prior interactions, leading to repeated conversations, missed follow-ups, and frustrated applicants. Leadership had zero real-time insight into admission funnel performance.",
      points: [
        "No centralised inquiry tracking",
        "Manual follow-up reminders via WhatsApp",
        "Zero funnel analytics for management",
        "Counsellors duplicating effort across students",
      ],
    },
    solution: {
      title: "Our Solution",
      body:
        "We built a role-layered CMS that gives every stakeholder — from front-desk counsellors to the institute director — exactly the view and tools they need.",
      modules: [
        {
          icon: "👤",
          name: "Lead Management",
          desc: "Capture inquiries from web forms, walk-ins, and phone calls into a unified pipeline with automatic stage progression.",
        },
        {
          icon: "📅",
          name: "Follow-up Automation",
          desc: "Set scheduled follow-up reminders and automated SMS/email nudges so no student inquiry goes cold.",
        },
        {
          icon: "📊",
          name: "Counsellor Dashboard",
          desc: "Real-time view of each counsellor's pipeline, conversion rate, and pending actions — prioritised by urgency.",
        },
        {
          icon: "🔒",
          name: "Role-Based Access",
          desc: "Granular permissions ensure counsellors see only their students while managers get the full picture.",
        },
        {
          icon: "📋",
          name: "Communication History",
          desc: "Every call note, email, and meeting log is timestamped and attached to the student profile permanently.",
        },
        {
          icon: "📈",
          name: "Analytics & Reports",
          desc: "Weekly and monthly reports on inquiry volume, conversion by source, and counsellor performance — exportable to PDF.",
        },
      ],
    },
    results: {
      title: "Results Achieved",
      body:
        "Within 3 months of deployment at a mid-sized educational institute with 12 counsellors, the platform delivered measurable transformation across every metric that matters.",
      outcomes: [
        { metric: "Inquiry-to-admission conversion", before: "22%", after: "61%" },
        { metric: "Average follow-up response time", before: "3.2 days", after: "4 hours" },
        { metric: "Counsellor daily student capacity", before: "18 students", after: "54 students" },
        { metric: "Reporting effort (weekly)", before: "6 hours manual", after: "Automated" },
      ],
    },
    testimonial: {
      quote:
        "Before CMS, our counsellors were drowning in sticky notes and WhatsApp messages. Now every inquiry is tracked, every follow-up is on time, and our director sees the full picture in one dashboard.",
      author: "Admissions Head",
      org: "Leading Education Institute, Pune",
    },
    techStack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Twilio SMS"],
  },
  2: {
    id: 2,
    productName: "Day Care ERP",
    fullName: "Day Care ERP System",
    tagline: "Complete Operations Management for Modern Day Care Centres",
    heroColor: "#1a3e8c",
  accent: "#e8a020",
    overview:
      "Day care centres juggle child safety, parent communication, fee collection, staff rostering, and compliance — all simultaneously. Our Day Care ERP unifies every operational thread into one simple, reliable platform.",
    stats: [
      { value: "80%", label: "Reduction in admin time" },
      { value: "100%", label: "Fee collection accuracy" },
      { value: "2,000+", label: "Children managed" },
      { value: "4.9★", label: "Parent satisfaction score" },
    ],
    challenge: {
      title: "The Challenge",
      body:
        "Day care operators were managing attendance in paper registers, sending fee reminders via individual WhatsApp messages, and handling staff shifts on physical notice boards. Parent communication was inconsistent and incident records were kept in physical files.",
      points: [
        "Paper-based attendance & incident records",
        "Manual fee collection and reminder calls",
        "No real-time parent notifications",
        "Staff scheduling done on whiteboards",
      ],
    },
    solution: {
      title: "Our Solution",
      body:
        "A mobile-first ERP built specifically for day care workflows, with dedicated portals for operators, staff, and parents.",
      modules: [
        { icon: "🧒", name: "Child Enrolment", desc: "Digital enrolment with health records, allergy tracking, and emergency contacts stored securely." },
        { icon: "✅", name: "Attendance Tracking", desc: "QR-code check-in/check-out with real-time parent notifications on pickup and drop." },
        { icon: "💳", name: "Fee Automation", desc: "Auto-generate invoices, send reminders, and accept online payments with reconciliation built in." },
        { icon: "👩‍💼", name: "Staff Rostering", desc: "Drag-and-drop shift planner with overtime alerts and leave management." },
        { icon: "📱", name: "Parent Portal", desc: "Parents see daily activity logs, meal updates, nap records, and photos — all in real time." },
        { icon: "📑", name: "Compliance Reports", desc: "Auto-generated regulatory compliance reports with audit trail for licensing bodies." },
      ],
    },
    results: {
      title: "Results Achieved",
      body: "Deployed across 8 day care centres with 2,000+ children enrolled.",
      outcomes: [
        { metric: "Admin hours per week", before: "32 hrs", after: "6 hrs" },
        { metric: "Fee collection rate", before: "71%", after: "99.8%" },
        { metric: "Parent complaint rate", before: "High", after: "Near zero" },
        { metric: "Staff scheduling conflicts", before: "Weekly", after: "Eliminated" },
      ],
    },
    testimonial: {
      quote: "Parents love the real-time updates. Our staff love the simple shift planner. And I love that I can see everything from my phone without being on site.",
      author: "Centre Director",
      org: "Sunshine Day Care Network, Mumbai",
    },
    techStack: ["React Native", "Node.js", "MongoDB", "Firebase", "Stripe", "GCP"],
  },
  3: {
    id: 3,
    productName: "Aptitude Test Manager",
    fullName: "Aptitude Test Management System",
    tagline: "Enterprise-Grade Assessments, Delivered at Scale",
    heroColor: "#1a3e8c",
    accent: "#e8a020",
    overview:
      "Running large-scale aptitude assessments — whether for campus placements, competitive entrance tests, or internal HR screening — demands zero tolerance for errors. Our platform gives assessment teams complete control from question authoring to result publication.",
    stats: [
      { value: "50,000+", label: "Tests conducted" },
      { value: "99.99%", label: "Platform uptime" },
      { value: "0", label: "Paper used" },
      { value: "< 2 min", label: "Auto-result generation" },
    ],
    challenge: {
      title: "The Challenge",
      body:
        "Colleges and corporates running placement drives were using paper-based or basic Google Form assessments. These were vulnerable to cheating, slow to evaluate, and provided no analytics on candidate performance.",
      points: [
        "Paper tests with manual evaluation taking days",
        "No randomisation — widespread paper sharing",
        "Zero analytics on candidate performance",
        "High logistics cost for exam coordination",
      ],
    },
    solution: {
      title: "Our Solution",
      body:
        "A secure, browser-based assessment platform with AI-assisted proctoring, question randomisation, and instant analytics.",
      modules: [
        { icon: "📝", name: "Question Bank", desc: "Build categorised question banks with difficulty tagging, import from Excel, and version history." },
        { icon: "🔀", name: "Randomisation Engine", desc: "Each candidate receives a unique question set and option order — eliminating copying entirely." },
        { icon: "👁️", name: "AI Proctoring", desc: "Tab-switch detection, fullscreen enforcement, webcam monitoring, and suspicious activity flagging." },
        { icon: "⚡", name: "Instant Evaluation", desc: "Objective questions auto-graded in under 2 minutes. Subjective answers routed to human evaluators." },
        { icon: "📊", name: "Analytics Dashboard", desc: "Rank lists, percentile scores, topic-wise performance heatmaps, and downloadable report cards." },
        { icon: "🔗", name: "Integration APIs", desc: "Connect with HRMS, college ERP, or LMS platforms via REST APIs for seamless result sync." },
      ],
    },
    results: {
      title: "Results Achieved",
      body: "Used by 30+ institutions for campus placements, entrance tests, and internal assessments.",
      outcomes: [
        { metric: "Result processing time", before: "3-5 days", after: "< 2 minutes" },
        { metric: "Suspected malpractice cases", before: "~15% per exam", after: "0.2%" },
        { metric: "Exam logistics cost", before: "₹80/candidate", after: "₹8/candidate" },
        { metric: "Candidate satisfaction", before: "62%", after: "94%" },
      ],
    },
    testimonial: {
      quote: "We ran a 4,000-candidate placement test with results published within 5 minutes of the last submission. Our placement team couldn't believe it.",
      author: "TPO",
      org: "Engineering College, Nashik",
    },
    techStack: ["React", "Python", "PostgreSQL", "WebSockets", "OpenCV", "Azure"],
  },
  4: {
    id: 4,
    productName: "K+12 School ERP",
    fullName: "K+12 Complete School ERP",
    tagline: "One Platform for Every Corner of Your School",
    heroColor: "#1a3e8c",
    accent: "#e8a020",
    overview:
      "Managing a K-12 school means coordinating academics, finance, admissions, transport, library, HR, and parent relationships — often across multiple campuses. Our School ERP was designed ground-up for this complexity, giving every stakeholder exactly what they need.",
    stats: [
      { value: "15,000+", label: "Students on platform" },
      { value: "40+", label: "Schools deployed" },
      { value: "60%", label: "Admin cost reduction" },
      { value: "98%", label: "Parent portal adoption" },
    ],
    challenge: {
      title: "The Challenge",
      body:
        "Schools were running on a patchwork of disconnected tools — one software for fees, another for attendance, Excel for timetables, and paper for library records. Data never talked to each other, causing errors, double-entry, and frustrated teachers.",
      points: [
        "7+ disconnected tools across departments",
        "Fee and academic data never synced",
        "Timetable built manually every term",
        "Parent communication via circular notices",
      ],
    },
    solution: {
      title: "Our Solution",
      body:
        "A unified school ERP with dedicated role portals for admin, teachers, students, parents, and management — all connected to a single database.",
      modules: [
        { icon: "🎓", name: "Admissions Module", desc: "Online inquiry, document collection, entrance test integration, and offer letter generation in one flow." },
        { icon: "📚", name: "Academic Management", desc: "Curriculum planning, lesson scheduling, assignment publishing, and marks entry for every class." },
        { icon: "💰", name: "Fee Management", desc: "Fee structure setup, invoice generation, online payment gateway, defaulter reports, and receipts." },
        { icon: "🚌", name: "Transport Module", desc: "Route planning, GPS-linked bus tracking, and real-time parent notifications on pickup/drop." },
        { icon: "📖", name: "Library System", desc: "Book catalogue, issue/return tracking, fine calculation, and availability search for students." },
        { icon: "👨‍👩‍👧", name: "Parent Portal", desc: "Attendance, marks, fee status, homework, circulars, and teacher messages — all in one parent app." },
      ],
    },
    results: {
      title: "Results Achieved",
      body: "Rolled out across a 3-campus school group with 6,000 students.",
      outcomes: [
        { metric: "Fee collection processing time", before: "2 days/month", after: "2 hours/month" },
        { metric: "Parent circular distribution", before: "3-day delay", after: "Instant push notification" },
        { metric: "Timetable preparation time", before: "1 week", after: "4 hours" },
        { metric: "Teacher admin burden per week", before: "12 hours", after: "3 hours" },
      ],
    },
    testimonial: {
      quote: "For the first time in 20 years, our principal, accountant, and class teachers are all working from the same data. The clarity this has brought to our school is remarkable.",
      author: "School Trustee",
      org: "Multi-campus CBSE School Group, Pune",
    },
    techStack: ["React", "Node.js", "MySQL", "Redis", "Google Maps API", "Razorpay"],
  },
};

// ════════════════════════════════════════════════════════════════════
//  ProductCaseStudy Page
// ════════════════════════════════════════════════════════════════════
const ProductCaseStudy = ({ productId, onBack }) => {
  const cs = CASE_STUDIES[productId];
  if (!cs) return null;

  const { heroColor, accent } = cs;

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fc", fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif" }}>

      {/* ── HERO ── */}
      <div style={{ background: `linear-gradient(135deg, #0d2b6e 0%, ${heroColor} 55%, #1e4fa8 100%)`, padding: "60px 24px 72px", position: "relative", overflow: "hidden" }}>
        {/* Decorative */}
        <div style={{ position: "absolute", top: -50, right: -50, width: 220, height: 220, borderRadius: "50%", border: `2px solid ${accent}25`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -30, left: 60, width: 160, height: 160, borderRadius: "50%", background: `${accent}08`, pointerEvents: "none" }} />

        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
          {/* Back button */}
          <button
            onClick={onBack}
            style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 600, marginBottom: 32, transition: "background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Back to Products
          </button>

          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <div style={{ width: 32, height: 3, background: accent, borderRadius: 2 }} />
            <span style={{ color: accent, fontWeight: 700, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>Case Study</span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#fff", margin: "0 0 8px", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
                {cs.productName}
              </h1>
              <p style={{ color: accent, fontWeight: 700, fontSize: 14, margin: "0 0 16px", letterSpacing: "0.02em" }}>
                {cs.fullName}
              </p>
              <p style={{ color: "rgba(255,255,255,0.80)", fontSize: 17, lineHeight: 1.65, margin: 0, maxWidth: 520 }}>
                {cs.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Curved overlap */}
      <div style={{ height: 32, background: "#f8f9fc", marginTop: -32, borderRadius: "32px 32px 0 0", position: "relative", zIndex: 2 }} />

      {/* ── STATS BAR ── */}
      <div style={{ maxWidth: 900, margin: "-8px auto 0", padding: "0 24px" }}>
        <div style={{ background: "#fff", borderRadius: 16, padding: "28px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 24, boxShadow: "0 4px 24px rgba(26,62,140,0.10)", border: "1px solid rgba(26,62,140,0.08)" }}>
          {cs.stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: heroColor, lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#8a94b0", fontWeight: 600, marginTop: 6, letterSpacing: "0.04em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── OVERVIEW ── */}
      <Section>
        <div style={{ maxWidth: 680 }}>
          <EyebrowLabel color={accent}>Overview</EyebrowLabel>
          <h2 style={headingStyle}>What is {cs.productName}?</h2>
          <p style={bodyStyle}>{cs.overview}</p>
        </div>
      </Section>

      {/* ── CHALLENGE ── */}
      <div style={{ background: "#fff", padding: "56px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <EyebrowLabel color={accent}>{cs.challenge.title}</EyebrowLabel>
            <h2 style={headingStyle}>What were the pain points?</h2>
            <p style={{ ...bodyStyle, marginBottom: 24 }}>{cs.challenge.body}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {cs.challenge.points.map((pt, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "#fef7ec", border: `1px solid ${accent}30`, borderRadius: 10, padding: "14px 16px" }}>
                <span style={{ fontSize: 18, lineHeight: 1 }}>⚠️</span>
                <span style={{ fontSize: 14, color: "#4a5275", fontWeight: 500, lineHeight: 1.5 }}>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SOLUTION MODULES ── */}
      <Section>
        <EyebrowLabel color={accent}>{cs.solution.title}</EyebrowLabel>
        <h2 style={{ ...headingStyle, marginBottom: 8 }}>How we solved it</h2>
        <p style={{ ...bodyStyle, maxWidth: 620, marginBottom: 40 }}>{cs.solution.body}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
          {cs.solution.modules.map((mod) => (
            <ModuleCard key={mod.name} mod={mod} accent={accent} heroColor={heroColor} />
          ))}
        </div>
      </Section>

      {/* ── RESULTS TABLE ── */}
      <div style={{ background: "#fff", padding: "56px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <EyebrowLabel color={accent}>{cs.results.title}</EyebrowLabel>
          <h2 style={{ ...headingStyle, marginBottom: 8 }}>Before vs After</h2>
          <p style={{ ...bodyStyle, marginBottom: 32 }}>{cs.results.body}</p>
          <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid rgba(26,62,140,0.10)" }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", background: heroColor, padding: "14px 24px" }}>
              {["Metric", "Before", "After"].map((h) => (
                <span key={h} style={{ color: "#fff", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>{h}</span>
              ))}
            </div>
            {cs.results.outcomes.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", padding: "16px 24px", background: i % 2 === 0 ? "#f8f9fc" : "#fff", borderTop: "1px solid rgba(26,62,140,0.07)", alignItems: "center" }}>
                <span style={{ fontSize: 14, color: "#1a2340", fontWeight: 600 }}>{row.metric}</span>
                <span style={{ fontSize: 14, color: "#dc2626", fontWeight: 600 }}>{row.before}</span>
                <span style={{ fontSize: 14, color: "#16a34a", fontWeight: 700 }}>{row.after}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TESTIMONIAL ── */}
      <Section>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 48, lineHeight: 1, marginBottom: 12, color: accent }}>"</div>
          <p style={{ fontSize: 18, color: "#1a2340", fontWeight: 600, lineHeight: 1.7, margin: "0 0 24px", fontStyle: "italic" }}>
            {cs.testimonial.quote}
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg, ${heroColor}, ${accent})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 16 }}>
              {cs.testimonial.author[0]}
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#1a2340" }}>{cs.testimonial.author}</div>
              <div style={{ fontSize: 12, color: "#8a94b0", fontWeight: 500 }}>{cs.testimonial.org}</div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── TECH STACK ── */}
      <div style={{ background: "#fff", padding: "40px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <EyebrowLabel color={accent}>Technology</EyebrowLabel>
          <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#1a2340", margin: "0 0 20px" }}>Built With</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {cs.techStack.map((t) => (
              <span key={t} style={{ fontSize: 13, fontWeight: 600, color: heroColor, background: `${heroColor}10`, border: `1px solid ${heroColor}25`, padding: "6px 16px", borderRadius: 20 }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ background: `linear-gradient(135deg, #0d2b6e 0%, ${heroColor} 100%)`, margin: "40px 24px 60px", borderRadius: 20, padding: "48px 40px", maxWidth: 852, marginLeft: "auto", marginRight: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -30, right: 60, width: 160, height: 160, borderRadius: "50%", border: `2px solid ${accent}20`, pointerEvents: "none" }} />
        <div>
          <p style={{ color: accent, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 8px" }}>Ready to transform?</p>
          <h2 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 800, margin: "0 0 6px" }}>Want {cs.productName} for your organisation?</h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, margin: 0 }}>Talk to our team for a free demo and personalised walkthrough.</p>
        </div>
        <a href="/contact" style={{ display: "inline-block", background: accent, color: "#fff", fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 32px", borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap", boxShadow: `0 4px 20px ${accent}50` }}>
          Request a Demo →
        </a>
      </div>

    </div>
  );
};

// ── Sub-components ──────────────────────────────────────────────────
const Section = ({ children }) => (
  <div style={{ padding: "56px 24px" }}>
    <div style={{ maxWidth: 900, margin: "0 auto" }}>{children}</div>
  </div>
);

const EyebrowLabel = ({ color, children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
    <div style={{ width: 28, height: 3, background: color, borderRadius: 2 }} />
    <span style={{ color, fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>{children}</span>
  </div>
);

const headingStyle = { fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#0d2b6e", margin: "0 0 14px", lineHeight: 1.2, letterSpacing: "-0.01em" };
const bodyStyle = { fontSize: 15, color: "#4a5275", lineHeight: 1.75, margin: "0 0 0" };

const ModuleCard = ({ mod, accent, heroColor }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background: hov ? "#fff" : "#f8f9fc", borderRadius: 14, padding: "22px 20px", border: `1.5px solid ${hov ? heroColor : "rgba(26,62,140,0.09)"}`, transition: "all 0.22s ease", boxShadow: hov ? "0 8px 28px rgba(26,62,140,0.10)" : "none", transform: hov ? "translateY(-3px)" : "none" }}
    >
      <div style={{ fontSize: 28, marginBottom: 12 }}>{mod.icon}</div>
      <h4 style={{ fontSize: 15, fontWeight: 700, color: "#0d2b6e", margin: "0 0 8px" }}>{mod.name}</h4>
      <p style={{ fontSize: 13, color: "#4a5275", lineHeight: 1.6, margin: 0 }}>{mod.desc}</p>
    </div>
  );
};

export default ProductCaseStudy;