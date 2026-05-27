// import React, { useState } from "react";

// // ── CASE STUDY DATA ─────────────────────────────────────────────────
// export const CASE_STUDIES = {
// 1: {
//   id: 1,

//   productName: "CMS",

//   fullName: "Counselling Management System",

//   tagline:
//     "End-to-End Digital Platform for Career Guidance, Assessments & Student Counselling",

//   heroColor: "#1a3e8c",

//   accent: "#e8a020",

//   overview:
//     "Career counselling organizations often struggle with scattered inquiries, manual follow-ups, disconnected payment systems, and unstructured counselling workflows. Our Counselling Management System digitizes and centralizes the complete student journey — from inquiry and registration to assessments, counselling sessions, reports, payments, and post-session engagement — into one scalable and secure platform.",

//   stats: [
//     { value: "10,000+", label: "Student inquiries managed" },

//     { value: "70%", label: "Reduction in manual follow-ups" },

//     { value: "3x", label: "Faster counselling workflow" },

//     { value: "95%", label: "Improved operational efficiency" },
//   ],

//   challenge: {
//     title: "The Challenge",

//     body:
//       "Career counselling institutes were managing leads, payments, reports, and counselling sessions through spreadsheets, WhatsApp chats, calls, and disconnected tools. This created delays, poor visibility, inconsistent communication, missed follow-ups, and operational inefficiencies for both counsellors and management teams.",

//     points: [
//       "No centralized inquiry and student management system",

//       "Manual payment tracking and report sharing",

//       "Difficulty managing counselling sessions and follow-ups",

//       "No structured package-based workflow control",

//       "Free and paid content shared manually",

//       "Limited visibility into student conversion journey",
//     ],
//   },

//   solution: {
//     title: "Our Solution",

//     body:
//       "We developed a scalable role-based counselling management platform that streamlines registrations, assessments, counselling workflows, payments, reports, slot booking, notifications, and content delivery — while giving administrators complete operational visibility and control.",

//     modules: [
//       {
//         icon: "👤",

//         name: "Lead & Registration Management",

//         desc:
//           "Capture inquiries from website, WhatsApp, calls, email, and walk-ins with automated registration, login generation, and lead tracking workflows.",
//       },

//       {
//         icon: "📚",

//         name: "Programs & Package Management",

//         desc:
//           "Manage multiple career programs such as Engineering, Medical, Law, Design, BBA, BCA, and configure package-based feature access dynamically.",
//       },

//       {
//         icon: "💳",

//         name: "Payment & Verification System",

//         desc:
//           "Support online and manual payments with verification workflows, partial/full payment tracking, and secure transaction management.",
//       },

//       {
//         icon: "📝",

//         name: "Assessment & Exam Tracking",

//         desc:
//           "Manage aptitude assessments through third-party or in-house systems with exam instructions, completion tracking, and admin approval workflows.",
//       },

//       {
//         icon: "📄",

//         name: "Report & Document Management",

//         desc:
//           "Upload assessment reports securely, lock/unlock reports based on payment completion, and provide controlled student access.",
//       },

//       {
//         icon: "📅",

//         name: "Slot Booking & Counselling",

//         desc:
//           "Enable online/offline counselling session booking, counsellor assignment, rescheduling, follow-ups, and session status tracking.",
//       },

//       {
//         icon: "📢",

//         name: "Notifications & Follow-ups",

//         desc:
//           "Automated reminders for registrations, payments, exams, counselling sessions, and follow-ups through WhatsApp and email notifications.",
//       },

//       {
//         icon: "🎥",

//         name: "Content Library Management",

//         desc:
//           "Provide free and paid career guidance resources with package-wise and role-based access control for students and parents.",
//       },

//       {
//         icon: "🔒",

//         name: "Role-Based Access Control",

//         desc:
//           "Secure permission-based access for admins, counsellors, students, parents, and management teams with configurable roles.",
//       },

//       {
//         icon: "📊",

//         name: "Operational Tracking & Insights",

//         desc:
//           "Track registrations, payment conversions, counselling progress, exam completion rates, and user engagement through centralized dashboards.",
//       },
//     ],
//   },

//   results: {
//     title: "Results Achieved",

//     body:
//       "The platform streamlined counselling operations by reducing manual coordination, improving student engagement, and enabling scalable digital workflows for counselling organizations.",

//     outcomes: [
//       {
//         metric: "Lead response & follow-up time",

//         before: "2-3 days",

//         after: "Within hours",
//       },

//       {
//         metric: "Manual counselling coordination",

//         before: "Highly dependent on WhatsApp",

//         after: "Centralized digital workflow",
//       },

//       {
//         metric: "Payment tracking effort",

//         before: "Manual spreadsheets",

//         after: "Real-time status tracking",
//       },

//       {
//         metric: "Session scheduling conflicts",

//         before: "Frequent",

//         after: "Automated slot management",
//       },

//       {
//         metric: "Student report distribution",

//         before: "Manual sharing",

//         after: "Secure portal access",
//       },

//       {
//         metric: "Free-to-paid conversion tracking",

//         before: "Limited visibility",

//         after: "Complete operational insights",
//       },
//     ],
//   },

//   testimonial: {
//     quote:
//       "This platform transformed the way we manage counselling operations. From registrations and payments to assessments, reports, and follow-up sessions — everything is now streamlined, organized, and easy to track from one system.",

//     author: "Lead Career Counsellor",

//     org: "Career Guidance & Assessment Organization, Pune",
//   },

//   techStack: [
//     "React",

//     "Node.js",

//     "Express.js",

//     "PostgreSQL",

//     "Redis",

//     "AWS",

//     "Razorpay",

//     "WhatsApp API",
//   ],
// },
//   2: {
//     id: 2,
//     productName: "Day Care ERP",
//     fullName: "Day Care ERP System",
//     tagline: "Complete Operations Management for Modern Day Care Centres",
//     heroColor: "#1a3e8c",
//   accent: "#e8a020",
//     overview:
//       "Day care centres juggle child safety, parent communication, fee collection, staff rostering, and compliance — all simultaneously. Our Day Care ERP unifies every operational thread into one simple, reliable platform.",
//     stats: [
//       { value: "80%", label: "Reduction in admin time" },
//       { value: "100%", label: "Fee collection accuracy" },
//       { value: "2,000+", label: "Children managed" },
//       { value: "4.9★", label: "Parent satisfaction score" },
//     ],
//     challenge: {
//       title: "The Challenge",
//       body:
//         "Day care operators were managing attendance in paper registers, sending fee reminders via individual WhatsApp messages, and handling staff shifts on physical notice boards. Parent communication was inconsistent and incident records were kept in physical files.",
//       points: [
//         "Paper-based attendance & incident records",
//         "Manual fee collection and reminder calls",
//         "No real-time parent notifications",
//         "Staff scheduling done on whiteboards",
//       ],
//     },
//     solution: {
//       title: "Our Solution",
//       body:
//         "A mobile-first ERP built specifically for day care workflows, with dedicated portals for operators, staff, and parents.",
//       modules: [
//         { icon: "🧒", name: "Child Enrolment", desc: "Digital enrolment with health records, allergy tracking, and emergency contacts stored securely." },
//         { icon: "✅", name: "Attendance Tracking", desc: "QR-code check-in/check-out with real-time parent notifications on pickup and drop." },
//         { icon: "💳", name: "Fee Automation", desc: "Auto-generate invoices, send reminders, and accept online payments with reconciliation built in." },
//         { icon: "👩‍💼", name: "Staff Rostering", desc: "Drag-and-drop shift planner with overtime alerts and leave management." },
//         { icon: "📱", name: "Parent Portal", desc: "Parents see daily activity logs, meal updates, nap records, and photos — all in real time." },
//         { icon: "📑", name: "Compliance Reports", desc: "Auto-generated regulatory compliance reports with audit trail for licensing bodies." },
//       ],
//     },
//     results: {
//       title: "Results Achieved",
//       body: "Deployed across 8 day care centres with 2,000+ children enrolled.",
//       outcomes: [
//         { metric: "Admin hours per week", before: "32 hrs", after: "6 hrs" },
//         { metric: "Fee collection rate", before: "71%", after: "99.8%" },
//         { metric: "Parent complaint rate", before: "High", after: "Near zero" },
//         { metric: "Staff scheduling conflicts", before: "Weekly", after: "Eliminated" },
//       ],
//     },
//     testimonial: {
//       quote: "Parents love the real-time updates. Our staff love the simple shift planner. And I love that I can see everything from my phone without being on site.",
//       author: "Centre Director",
//       org: "Sunshine Day Care Network, Mumbai",
//     },
//     techStack: ["React Native", "Node.js", "MongoDB", "Firebase", "Stripe", "GCP"],
//   },
//   3: {
//   id: 3,

//   productName: "Aptitude Test Manager",

//   fullName: "Online Assessment & Examination Platform",

//   tagline:
//     "Secure, Scalable & Intelligent Assessment Management for Modern Institutions",

//   heroColor: "#1a3e8c",

//   accent: "#e8a020",

//   overview:
//     "Managing large-scale aptitude tests, entrance exams, placement assessments, and online evaluations requires accuracy, scalability, and complete operational control. Our Aptitude Test Management Platform digitizes the entire examination lifecycle — from question creation and exam scheduling to secure test execution, automated evaluation, analytics, and result publishing.",

//   stats: [
//     { value: "50,000+", label: "Assessments conducted" },

//     { value: "99.99%", label: "Platform reliability" },

//     { value: "< 2 min", label: "Auto-result generation" },

//     { value: "90%", label: "Reduction in manual evaluation" },
//   ],

//   challenge: {
//     title: "The Challenge",

//     body:
//       "Educational institutions and organizations were relying on paper-based exams, spreadsheets, and basic online forms for assessments. These systems lacked security, automation, analytics, and scalability, leading to evaluation delays, malpractice risks, and inefficient exam operations.",

//     points: [
//       "Paper-based exams with slow manual evaluation",

//       "No secure online examination workflow",

//       "High risk of cheating and question leakage",

//       "No centralized analytics or performance tracking",

//       "Difficulty handling large-scale concurrent exams",

//       "Complex coordination for scheduling and result processing",
//     ],
//   },

//   solution: {
//     title: "Our Solution",

//     body:
//       "We developed a secure, browser-based assessment platform that enables institutions to conduct online examinations, aptitude tests, placement assessments, and mock tests with automated workflows, intelligent evaluation, and real-time analytics.",

//     modules: [
//       {
//         icon: "📝",

//         name: "Question Bank Management",

//         desc:
//           "Create, categorize, and manage questions with subject-wise tagging, difficulty levels, Excel import support, and reusable question libraries.",
//       },

//       {
//         icon: "📅",

//         name: "Exam Scheduling & Management",

//         desc:
//           "Configure exam timings, durations, instructions, candidate assignments, and exam availability with centralized scheduling control.",
//       },

//       {
//         icon: "🔀",

//         name: "Randomization Engine",

//         desc:
//           "Generate unique question and option sequences for every candidate to reduce copying and improve exam integrity.",
//       },

//       {
//         icon: "🔒",

//         name: "Secure Exam Environment",

//         desc:
//           "Support fullscreen enforcement, tab-switch monitoring, browser restrictions, and configurable proctoring workflows for secure assessments.",
//       },

//       {
//         icon: "⚡",

//         name: "Automated Evaluation",

//         desc:
//           "Instant evaluation for objective exams with configurable scoring logic, negative marking, and result generation workflows.",
//       },

//       {
//         icon: "📊",

//         name: "Analytics & Performance Reports",

//         desc:
//           "Generate rank lists, percentile scores, topic-wise analysis, performance comparisons, and downloadable reports for students and administrators.",
//       },

//       {
//         icon: "👥",

//         name: "Candidate Management",

//         desc:
//           "Manage candidate registrations, exam access, login credentials, attendance tracking, and assessment history from a centralized dashboard.",
//       },

//       {
//         icon: "📄",

//         name: "Result & Report Publishing",

//         desc:
//           "Publish results securely with downloadable scorecards, report locking, and role-based access control for institutions and students.",
//       },

//       {
//         icon: "🔗",

//         name: "Third-Party Integrations",

//         desc:
//           "Integrate with LMS, ERP, HRMS, payment gateways, and external learning platforms for seamless examination workflows.",
//       },

//       {
//         icon: "☁️",

//         name: "Scalable Cloud Infrastructure",

//         desc:
//           "Designed to support thousands of concurrent candidates with high availability, secure data storage, and reliable performance.",
//       },
//     ],
//   },

//   results: {
//     title: "Results Achieved",

//     body:
//       "The platform enabled institutions and organizations to conduct secure large-scale online assessments while significantly reducing operational effort, evaluation time, and examination costs.",

//     outcomes: [
//       {
//         metric: "Result processing time",

//         before: "3-5 days",

//         after: "< 2 minutes",
//       },

//       {
//         metric: "Manual evaluation workload",

//         before: "High",

//         after: "Reduced by 90%",
//       },

//       {
//         metric: "Exam coordination effort",

//         before: "Manual process",

//         after: "Centralized automation",
//       },

//       {
//         metric: "Malpractice incidents",

//         before: "~15% per exam",

//         after: "Minimal detection cases",
//       },

//       {
//         metric: "Candidate handling capacity",

//         before: "Limited offline batches",

//         after: "Thousands simultaneously",
//       },

//       {
//         metric: "Operational exam cost",

//         before: "High printing & logistics cost",

//         after: "Digitized online process",
//       },
//     ],
//   },

//   testimonial: {
//     quote:
//       "This platform completely modernized our examination process. From scheduling and secure assessments to instant results and analytics, everything is now faster, more reliable, and easier to manage.",

//     author: "Training & Placement Officer",

//     org: "Leading Engineering Institute, Maharashtra",
//   },

//   techStack: [
//     "React",

//     "Node.js",

//     "Python",

//     "PostgreSQL",

//     "Redis",

//     "WebSockets",

//     "AWS",

//     "OpenCV",
//   ],
// },
//   // 3: {
//   //   id: 3,
//   //   productName: "Aptitude Test Manager",
//   //   fullName: "Aptitude Test Management System",
//   //   tagline: "Enterprise-Grade Assessments, Delivered at Scale",
//   //   heroColor: "#1a3e8c",
//   //   accent: "#e8a020",
//   //   overview:
//   //     "Running large-scale aptitude assessments — whether for campus placements, competitive entrance tests, or internal HR screening — demands zero tolerance for errors. Our platform gives assessment teams complete control from question authoring to result publication.",
//   //   stats: [
//   //     { value: "50,000+", label: "Tests conducted" },
//   //     { value: "99.99%", label: "Platform uptime" },
//   //     { value: "0", label: "Paper used" },
//   //     { value: "< 2 min", label: "Auto-result generation" },
//   //   ],
//   //   challenge: {
//   //     title: "The Challenge",
//   //     body:
//   //       "Colleges and corporates running placement drives were using paper-based or basic Google Form assessments. These were vulnerable to cheating, slow to evaluate, and provided no analytics on candidate performance.",
//   //     points: [
//   //       "Paper tests with manual evaluation taking days",
//   //       "No randomisation — widespread paper sharing",
//   //       "Zero analytics on candidate performance",
//   //       "High logistics cost for exam coordination",
//   //     ],
//   //   },
//   //   solution: {
//   //     title: "Our Solution",
//   //     body:
//   //       "A secure, browser-based assessment platform with AI-assisted proctoring, question randomisation, and instant analytics.",
//   //     modules: [
//   //       { icon: "📝", name: "Question Bank", desc: "Build categorised question banks with difficulty tagging, import from Excel, and version history." },
//   //       { icon: "🔀", name: "Randomisation Engine", desc: "Each candidate receives a unique question set and option order — eliminating copying entirely." },
//   //       { icon: "👁️", name: "AI Proctoring", desc: "Tab-switch detection, fullscreen enforcement, webcam monitoring, and suspicious activity flagging." },
//   //       { icon: "⚡", name: "Instant Evaluation", desc: "Objective questions auto-graded in under 2 minutes. Subjective answers routed to human evaluators." },
//   //       { icon: "📊", name: "Analytics Dashboard", desc: "Rank lists, percentile scores, topic-wise performance heatmaps, and downloadable report cards." },
//   //       { icon: "🔗", name: "Integration APIs", desc: "Connect with HRMS, college ERP, or LMS platforms via REST APIs for seamless result sync." },
//   //     ],
//   //   },
//   //   results: {
//   //     title: "Results Achieved",
//   //     body: "Used by 30+ institutions for campus placements, entrance tests, and internal assessments.",
//   //     outcomes: [
//   //       { metric: "Result processing time", before: "3-5 days", after: "< 2 minutes" },
//   //       { metric: "Suspected malpractice cases", before: "~15% per exam", after: "0.2%" },
//   //       { metric: "Exam logistics cost", before: "₹80/candidate", after: "₹8/candidate" },
//   //       { metric: "Candidate satisfaction", before: "62%", after: "94%" },
//   //     ],
//   //   },
//   //   testimonial: {
//   //     quote: "We ran a 4,000-candidate placement test with results published within 5 minutes of the last submission. Our placement team couldn't believe it.",
//   //     author: "TPO",
//   //     org: "Engineering College, Nashik",
//   //   },
//   //   techStack: ["React", "Python", "PostgreSQL", "WebSockets", "OpenCV", "Azure"],
//   // },
//   4: {
//   id: 4,
//   productName: "K+12 School ERP",
//   fullName: "K+12 Multi-School ERP SaaS Platform",
//   tagline: "Approval-Driven Digital Operations for Modern Schools",
//   heroColor: "#1a3e8c",
//   accent: "#e8a020",

//   overview:
//     "Managing a school involves far more than academics — admissions, attendance, examinations, finance, transport, communication, HR, and parent engagement all need to work together seamlessly. Our K+12 School ERP is a complete multi-school SaaS platform designed to digitize every operational workflow while ensuring transparency, accountability, and approval-based control at every stage.",

//   stats: [
//     { value: "40+", label: "Modules integrated" },
//     { value: "25,000+", label: "Students managed" },
//     { value: "99.9%", label: "Data accuracy" },
//     { value: "70%", label: "Reduction in manual work" },
//   ],

//   challenge: {
//     title: "The Challenge",
//     body:
//       "Schools were operating on disconnected systems, paper registers, spreadsheets, and manual approval processes. Academic records, fee data, attendance, and communication were spread across departments with no centralized visibility, causing delays, duplication, and operational inefficiencies.",

//     points: [
//       "Manual approval workflows causing delays",
//       "Attendance, fee, and exam systems disconnected",
//       "No centralized parent communication platform",
//       "Lack of audit trail and accountability",
//       "Difficulty managing multiple schools on one system",
//       "High dependency on paperwork and spreadsheets",
//     ],
//   },

//   solution: {
//     title: "Our Solution",
//     body:
//       "We developed a scalable, role-based School ERP platform built on a strict workflow model: Action → Verification → Approval → Lock → Visibility. Every critical operation passes through structured approval stages, ensuring secure, transparent, and reliable school management.",

//     modules: [
//       {
//         icon: "🎓",
//         name: "Admission & Enrollment",
//         desc:
//           "Online inquiry management, admission workflows, document verification, fee collection, and automated student onboarding with login generation.",
//       },

//       {
//         icon: "👨‍🎓",
//         name: "Student Lifecycle Management",
//         desc:
//           "Centralized student profiles with academic history, attendance, exam records, discipline tracking, and parent mapping preserved year-wise.",
//       },

//       {
//         icon: "👩‍🏫",
//         name: "Teacher & Staff Management",
//         desc:
//           "Staff profiles, subject assignments, attendance tracking, leave workflows, payroll support, and multi-level approval processes.",
//       },

//       {
//         icon: "✅",
//         name: "Attendance Management",
//         desc:
//           "Teacher attendance marking with verification, admin locking, biometric integration, and audit-ready attendance records.",
//       },

//       {
//         icon: "📝",
//         name: "Examination & Results",
//         desc:
//           "Exam scheduling, marks entry, multi-level result verification, report card generation, and approval-driven result publication.",
//       },

//       {
//         icon: "💳",
//         name: "Fee & Accounting System",
//         desc:
//           "Fee structures, invoice generation, payment verification, scholarship handling, receipt management, and financial reporting.",
//       },

//       {
//         icon: "📚",
//         name: "Homework & Academic Planning",
//         desc:
//           "Homework publishing, assignment submissions, teacher evaluation, and parent visibility after final review and approval.",
//       },

//       {
//         icon: "🚌",
//         name: "Transport Management",
//         desc:
//           "Route allocation, transport requests, fee linkage, pickup tracking, and transport approval management.",
//       },

//       {
//         icon: "📖",
//         name: "Library Management",
//         desc:
//           "Digital cataloguing, issue-return workflows, due-date tracking, fine calculation, and approval-based waivers.",
//       },

//       {
//         icon: "📦",
//         name: "Inventory & Asset Control",
//         desc:
//           "Purchase requests, stock management, asset assignment, maintenance tracking, and admin-controlled approvals.",
//       },

//       {
//         icon: "📢",
//         name: "Communication & Notifications",
//         desc:
//           "Automated SMS, email, and WhatsApp alerts for attendance, fees, exams, emergencies, and school announcements.",
//       },

//       {
//         icon: "📊",
//         name: "Reports & Analytics",
//         desc:
//           "Real-time dashboards for attendance, academics, finance, staff workload, and student performance with role-based access.",
//       },
//     ],
//   },

//   results: {
//     title: "Results Achieved",

//     body:
//       "Successfully deployed for institutions managing multiple campuses, helping schools streamline operations, reduce paperwork, and improve parent satisfaction through centralized digital workflows.",

//     outcomes: [
//       {
//         metric: "Admission processing time",
//         before: "4-5 days",
//         after: "Same day approval",
//       },

//       {
//         metric: "Manual paperwork dependency",
//         before: "High",
//         after: "Reduced by 80%",
//       },

//       {
//         metric: "Attendance report preparation",
//         before: "2-3 hours daily",
//         after: "Automated instantly",
//       },

//       {
//         metric: "Fee reconciliation effort",
//         before: "Manual weekly process",
//         after: "Real-time tracking",
//       },

//       {
//         metric: "Parent communication delay",
//         before: "1-2 days",
//         after: "Instant notifications",
//       },

//       {
//         metric: "Exam result processing",
//         before: "Several days",
//         after: "Automated after approvals",
//       },
//     ],
//   },

//   testimonial: {
//     quote:
//       "This ERP transformed the way our schools operate. Every department now works on a single system with complete visibility, approval workflows, and real-time reporting. It has significantly reduced manual work while improving accountability across campuses.",

//     author: "School Director",

//     org: "Leading Multi-Campus School Group, Maharashtra",
//   },

//   techStack: [
//     "React",
//     "Node.js",
//     "Express.js",
//     "MySQL",
//     "Redis",
//     "AWS",
//     "Razorpay",
//     "WhatsApp API",
//   ],
// },
//   // 4: {
//   //   id: 4,
//   //   productName: "K+12 School ERP",
//   //   fullName: "K+12 Complete School ERP",
//   //   tagline: "One Platform for Every Corner of Your School",
//   //   heroColor: "#1a3e8c",
//   //   accent: "#e8a020",
//   //   overview:
//   //     "Managing a K-12 school means coordinating academics, finance, admissions, transport, library, HR, and parent relationships — often across multiple campuses. Our School ERP was designed ground-up for this complexity, giving every stakeholder exactly what they need.",
//   //   stats: [
//   //     { value: "15,000+", label: "Students on platform" },
//   //     { value: "40+", label: "Schools deployed" },
//   //     { value: "60%", label: "Admin cost reduction" },
//   //     { value: "98%", label: "Parent portal adoption" },
//   //   ],
//   //   challenge: {
//   //     title: "The Challenge",
//   //     body:
//   //       "Schools were running on a patchwork of disconnected tools — one software for fees, another for attendance, Excel for timetables, and paper for library records. Data never talked to each other, causing errors, double-entry, and frustrated teachers.",
//   //     points: [
//   //       "7+ disconnected tools across departments",
//   //       "Fee and academic data never synced",
//   //       "Timetable built manually every term",
//   //       "Parent communication via circular notices",
//   //     ],
//   //   },
//   //   solution: {
//   //     title: "Our Solution",
//   //     body:
//   //       "A unified school ERP with dedicated role portals for admin, teachers, students, parents, and management — all connected to a single database.",
//   //     modules: [
//   //       { icon: "🎓", name: "Admissions Module", desc: "Online inquiry, document collection, entrance test integration, and offer letter generation in one flow." },
//   //       { icon: "📚", name: "Academic Management", desc: "Curriculum planning, lesson scheduling, assignment publishing, and marks entry for every class." },
//   //       { icon: "💰", name: "Fee Management", desc: "Fee structure setup, invoice generation, online payment gateway, defaulter reports, and receipts." },
//   //       { icon: "🚌", name: "Transport Module", desc: "Route planning, GPS-linked bus tracking, and real-time parent notifications on pickup/drop." },
//   //       { icon: "📖", name: "Library System", desc: "Book catalogue, issue/return tracking, fine calculation, and availability search for students." },
//   //       { icon: "👨‍👩‍👧", name: "Parent Portal", desc: "Attendance, marks, fee status, homework, circulars, and teacher messages — all in one parent app." },
//   //     ],
//   //   },
//   //   results: {
//   //     title: "Results Achieved",
//   //     body: "Rolled out across a 3-campus school group with 6,000 students.",
//   //     outcomes: [
//   //       { metric: "Fee collection processing time", before: "2 days/month", after: "2 hours/month" },
//   //       { metric: "Parent circular distribution", before: "3-day delay", after: "Instant push notification" },
//   //       { metric: "Timetable preparation time", before: "1 week", after: "4 hours" },
//   //       { metric: "Teacher admin burden per week", before: "12 hours", after: "3 hours" },
//   //     ],
//   //   },
//   //   testimonial: {
//   //     quote: "For the first time in 20 years, our principal, accountant, and class teachers are all working from the same data. The clarity this has brought to our school is remarkable.",
//   //     author: "School Trustee",
//   //     org: "Multi-campus CBSE School Group, Pune",
//   //   },
//   //   techStack: ["React", "Node.js", "MySQL", "Redis", "Google Maps API", "Razorpay"],
//   // },
// };

// // ════════════════════════════════════════════════════════════════════
// //  ProductCaseStudy Page
// // ════════════════════════════════════════════════════════════════════
// const ProductCaseStudy = ({ productId, onBack }) => {
//   const cs = CASE_STUDIES[productId];
//   if (!cs) return null;

//   const { heroColor, accent } = cs;

//   return (
//     <div style={{ minHeight: "100vh", background: "#f8f9fc", fontFamily: "'Segoe UI','Helvetica Neue',Arial,sans-serif" }}>

//       {/* ── HERO ── */}
//       <div style={{ background: `linear-gradient(135deg, #0d2b6e 0%, ${heroColor} 55%, #1e4fa8 100%)`, padding: "60px 24px 72px", position: "relative", overflow: "hidden" }}>
//         {/* Decorative */}
//         <div style={{ position: "absolute", top: -50, right: -50, width: 220, height: 220, borderRadius: "50%", border: `2px solid ${accent}25`, pointerEvents: "none" }} />
//         <div style={{ position: "absolute", bottom: -30, left: 60, width: 160, height: 160, borderRadius: "50%", background: `${accent}08`, pointerEvents: "none" }} />

//         <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
//           {/* Back button */}
//           <button
//             onClick={onBack}
//             style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 600, marginBottom: 32, transition: "background 0.2s" }}
//             onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
//             onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
//           >
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
//             Back to Products
//           </button>

//           {/* Eyebrow */}
//           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
//             <div style={{ width: 32, height: 3, background: accent, borderRadius: 2 }} />
//             <span style={{ color: accent, fontWeight: 700, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>Case Study</span>
//           </div>

//           <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
//             <div style={{ flex: 1, minWidth: 260 }}>
//               <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#fff", margin: "0 0 8px", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
//                 {cs.productName}
//               </h1>
//               <p style={{ color: accent, fontWeight: 700, fontSize: 14, margin: "0 0 16px", letterSpacing: "0.02em" }}>
//                 {cs.fullName}
//               </p>
//               <p style={{ color: "rgba(255,255,255,0.80)", fontSize: 17, lineHeight: 1.65, margin: 0, maxWidth: 520 }}>
//                 {cs.tagline}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Curved overlap */}
//       <div style={{ height: 32, background: "#f8f9fc", marginTop: -32, borderRadius: "32px 32px 0 0", position: "relative", zIndex: 2 }} />

//       {/* ── STATS BAR ── */}
//       <div style={{ maxWidth: 900, margin: "-8px auto 0", padding: "0 24px" }}>
//         <div style={{ background: "#fff", borderRadius: 16, padding: "28px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 24, boxShadow: "0 4px 24px rgba(26,62,140,0.10)", border: "1px solid rgba(26,62,140,0.08)" }}>
//           {cs.stats.map((s) => (
//             <div key={s.label} style={{ textAlign: "center" }}>
//               <div style={{ fontSize: "2rem", fontWeight: 800, color: heroColor, lineHeight: 1 }}>{s.value}</div>
//               <div style={{ fontSize: 12, color: "#8a94b0", fontWeight: 600, marginTop: 6, letterSpacing: "0.04em" }}>{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── OVERVIEW ── */}
//       <Section>
//         <div style={{ maxWidth: 680 }}>
//           <EyebrowLabel color={accent}>Overview</EyebrowLabel>
//           <h2 style={headingStyle}>What is {cs.productName}?</h2>
//           <p style={bodyStyle}>{cs.overview}</p>
//         </div>
//       </Section>

//       {/* ── CHALLENGE ── */}
//       <div style={{ background: "#fff", padding: "56px 24px" }}>
//         <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
//           <div>
//             <EyebrowLabel color={accent}>{cs.challenge.title}</EyebrowLabel>
//             <h2 style={headingStyle}>What were the pain points?</h2>
//             <p style={{ ...bodyStyle, marginBottom: 24 }}>{cs.challenge.body}</p>
//           </div>
//           <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
//             {cs.challenge.points.map((pt, i) => (
//               <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, background: "#fef7ec", border: `1px solid ${accent}30`, borderRadius: 10, padding: "14px 16px" }}>
//                 <span style={{ fontSize: 18, lineHeight: 1 }}>⚠️</span>
//                 <span style={{ fontSize: 14, color: "#4a5275", fontWeight: 500, lineHeight: 1.5 }}>{pt}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── SOLUTION MODULES ── */}
//       <Section>
//         <EyebrowLabel color={accent}>{cs.solution.title}</EyebrowLabel>
//         <h2 style={{ ...headingStyle, marginBottom: 8 }}>How we solved it</h2>
//         <p style={{ ...bodyStyle, maxWidth: 620, marginBottom: 40 }}>{cs.solution.body}</p>
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
//           {cs.solution.modules.map((mod) => (
//             <ModuleCard key={mod.name} mod={mod} accent={accent} heroColor={heroColor} />
//           ))}
//         </div>
//       </Section>

//       {/* ── RESULTS TABLE ── */}
//       <div style={{ background: "#fff", padding: "56px 24px" }}>
//         <div style={{ maxWidth: 900, margin: "0 auto" }}>
//           <EyebrowLabel color={accent}>{cs.results.title}</EyebrowLabel>
//           <h2 style={{ ...headingStyle, marginBottom: 8 }}>Before vs After</h2>
//           <p style={{ ...bodyStyle, marginBottom: 32 }}>{cs.results.body}</p>
//           <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid rgba(26,62,140,0.10)" }}>
//             {/* Header */}
//             <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", background: heroColor, padding: "14px 24px" }}>
//               {["Metric", "Before", "After"].map((h) => (
//                 <span key={h} style={{ color: "#fff", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" }}>{h}</span>
//               ))}
//             </div>
//             {cs.results.outcomes.map((row, i) => (
//               <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", padding: "16px 24px", background: i % 2 === 0 ? "#f8f9fc" : "#fff", borderTop: "1px solid rgba(26,62,140,0.07)", alignItems: "center" }}>
//                 <span style={{ fontSize: 14, color: "#1a2340", fontWeight: 600 }}>{row.metric}</span>
//                 <span style={{ fontSize: 14, color: "#dc2626", fontWeight: 600 }}>{row.before}</span>
//                 <span style={{ fontSize: 14, color: "#16a34a", fontWeight: 700 }}>{row.after}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── TESTIMONIAL ── */}
//       <Section>
//         <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
//           <div style={{ fontSize: 48, lineHeight: 1, marginBottom: 12, color: accent }}>"</div>
//           <p style={{ fontSize: 18, color: "#1a2340", fontWeight: 600, lineHeight: 1.7, margin: "0 0 24px", fontStyle: "italic" }}>
//             {cs.testimonial.quote}
//           </p>
//           <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
//             <div style={{ width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg, ${heroColor}, ${accent})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 16 }}>
//               {cs.testimonial.author[0]}
//             </div>
//             <div style={{ textAlign: "left" }}>
//               <div style={{ fontSize: 14, fontWeight: 700, color: "#1a2340" }}>{cs.testimonial.author}</div>
//               <div style={{ fontSize: 12, color: "#8a94b0", fontWeight: 500 }}>{cs.testimonial.org}</div>
//             </div>
//           </div>
//         </div>
//       </Section>

//       {/* ── TECH STACK ── */}
//       <div style={{ background: "#fff", padding: "40px 24px" }}>
//         <div style={{ maxWidth: 900, margin: "0 auto" }}>
//           <EyebrowLabel color={accent}>Technology</EyebrowLabel>
//           <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#1a2340", margin: "0 0 20px" }}>Built With</h3>
//           <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
//             {cs.techStack.map((t) => (
//               <span key={t} style={{ fontSize: 13, fontWeight: 600, color: heroColor, background: `${heroColor}10`, border: `1px solid ${heroColor}25`, padding: "6px 16px", borderRadius: 20 }}>{t}</span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── CTA ── */}
//       <div style={{ background: `linear-gradient(135deg, #0d2b6e 0%, ${heroColor} 100%)`, margin: "40px 24px 60px", borderRadius: 20, padding: "48px 40px", maxWidth: 852, marginLeft: "auto", marginRight: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24, position: "relative", overflow: "hidden" }}>
//         <div style={{ position: "absolute", top: -30, right: 60, width: 160, height: 160, borderRadius: "50%", border: `2px solid ${accent}20`, pointerEvents: "none" }} />
//         <div>
//           <p style={{ color: accent, fontWeight: 700, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 8px" }}>Ready to transform?</p>
//           <h2 style={{ color: "#fff", fontSize: "1.5rem", fontWeight: 800, margin: "0 0 6px" }}>Want {cs.productName} for your organisation?</h2>
//           <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, margin: 0 }}>Talk to our team for a free demo and personalised walkthrough.</p>
//         </div>
//         <a href="/contact-us" style={{ display: "inline-block", background: accent, color: "#fff", fontWeight: 700, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase", padding: "14px 32px", borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap", boxShadow: `0 4px 20px ${accent}50` }}>
//           Request a Demo →
//         </a>
//       </div>

//     </div>
//   );
// };

// // ── Sub-components ──────────────────────────────────────────────────
// const Section = ({ children }) => (
//   <div style={{ padding: "56px 24px" }}>
//     <div style={{ maxWidth: 900, margin: "0 auto" }}>{children}</div>
//   </div>
// );

// const EyebrowLabel = ({ color, children }) => (
//   <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
//     <div style={{ width: 28, height: 3, background: color, borderRadius: 2 }} />
//     <span style={{ color, fontWeight: 700, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>{children}</span>
//   </div>
// );

// const headingStyle = { fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 800, color: "#0d2b6e", margin: "0 0 14px", lineHeight: 1.2, letterSpacing: "-0.01em" };
// const bodyStyle = { fontSize: 15, color: "#4a5275", lineHeight: 1.75, margin: "0 0 0" };

// const ModuleCard = ({ mod, accent, heroColor }) => {
//   const [hov, setHov] = useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{ background: hov ? "#fff" : "#f8f9fc", borderRadius: 14, padding: "22px 20px", border: `1.5px solid ${hov ? heroColor : "rgba(26,62,140,0.09)"}`, transition: "all 0.22s ease", boxShadow: hov ? "0 8px 28px rgba(26,62,140,0.10)" : "none", transform: hov ? "translateY(-3px)" : "none" }}
//     >
//       <div style={{ fontSize: 28, marginBottom: 12 }}>{mod.icon}</div>
//       <h4 style={{ fontSize: 15, fontWeight: 700, color: "#0d2b6e", margin: "0 0 8px" }}>{mod.name}</h4>
//       <p style={{ fontSize: 13, color: "#4a5275", lineHeight: 1.6, margin: 0 }}>{mod.desc}</p>
//     </div>
//   );
// };

// export default ProductCaseStudy;
import { Helmet } from "react-helmet-async";


import React, { useState } from "react";
import { colors, typography, spacing, radius, shadows, layout } from "../theme/theme";

// ── ANIMATION HOOK — fires once when element enters viewport ────────
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

// ── COUNTER ANIMATION — animates numbers on mount ───────────────────
const useCounter = (target, duration = 1400, active = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const isNum = !isNaN(parseFloat(target));
    if (!isNum) { setValue(target); return; }
    const end = parseFloat(target);
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(target);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return value;
};

// ── KEYFRAME INJECTION ───────────────────────────────────────────────
const KEYFRAMES = `
@keyframes fadeUp   { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
@keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
@keyframes slideRight { from { opacity:0; transform:translateX(-24px); } to { opacity:1; transform:translateX(0); } }
@keyframes slideLeft  { from { opacity:0; transform:translateX(24px); } to { opacity:1; transform:translateX(0); } }
@keyframes scaleIn  { from { opacity:0; transform:scale(0.92); } to { opacity:1; transform:scale(1); } }
@keyframes shimmer  { 0%{background-position:-400px 0} 100%{background-position:400px 0} }
@keyframes pulse    { 0%,100%{opacity:1} 50%{opacity:0.6} }
@keyframes barGrow  { from{width:0} to{width:var(--bar-w)} }
@keyframes lineGrow { from{transform:scaleX(0)} to{transform:scaleX(1)} }
@keyframes float    { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-8px)} }
@keyframes spinSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
@keyframes heroRing { 0%{transform:scale(1) rotate(0deg);opacity:0.15} 50%{transform:scale(1.04) rotate(180deg);opacity:0.25} 100%{transform:scale(1) rotate(360deg);opacity:0.15} }
`;

const injectStyles = () => {
  if (document.getElementById("cs-anim-styles")) return;
  const s = document.createElement("style");
  s.id = "cs-anim-styles";
  s.textContent = KEYFRAMES;
  document.head.appendChild(s);
};

// ── CASE STUDY DATA ─────────────────────────────────────────────────
export const CASE_STUDIES = {
  1: {
    id: 1,
    productName: "CMS",
    fullName: "Counselling Management System",
    tagline: "End-to-End Digital Platform for Career Guidance, Assessments & Student Counselling",
    heroColor: "#1a3e8c",
    accent: "#e8a020",
    overview: "Career counselling organizations often struggle with scattered inquiries, manual follow-ups, disconnected payment systems, and unstructured counselling workflows. Our Counselling Management System digitizes and centralizes the complete student journey — from inquiry and registration to assessments, counselling sessions, reports, payments, and post-session engagement — into one scalable and secure platform.",
    stats: [
      { value: "10,000+", label: "Student inquiries managed" },
      { value: "70%",     label: "Reduction in manual follow-ups" },
      { value: "3x",      label: "Faster counselling workflow" },
      { value: "95%",     label: "Improved operational efficiency" },
    ],
    challenge: {
      title: "The Challenge",
      body: "Career counselling institutes were managing leads, payments, reports, and counselling sessions through spreadsheets, WhatsApp chats, calls, and disconnected tools. This created delays, poor visibility, inconsistent communication, missed follow-ups, and operational inefficiencies for both counsellors and management teams.",
      points: [
        "No centralized inquiry and student management system",
        "Manual payment tracking and report sharing",
        "Difficulty managing counselling sessions and follow-ups",
        "No structured package-based workflow control",
        "Free and paid content shared manually",
        "Limited visibility into student conversion journey",
      ],
    },
    solution: {
      title: "Our Solution",
      body: "We developed a scalable role-based counselling management platform that streamlines registrations, assessments, counselling workflows, payments, reports, slot booking, notifications, and content delivery — while giving administrators complete operational visibility and control.",
      modules: [
        { icon: UserPlus,       name: "Lead & Registration Management",   desc: "Capture inquiries from website, WhatsApp, calls, email, and walk-ins with automated registration, login generation, and lead tracking workflows." },
        { icon: BookOpen,       name: "Programs & Package Management",    desc: "Manage multiple career programs such as Engineering, Medical, Law, Design, BBA, BCA, and configure package-based feature access dynamically." },
        { icon: CreditCard,     name: "Payment & Verification System",    desc: "Support online and manual payments with verification workflows, partial/full payment tracking, and secure transaction management." },
        { icon: ClipboardList,  name: "Assessment & Exam Tracking",       desc: "Manage aptitude assessments through third-party or in-house systems with exam instructions, completion tracking, and admin approval workflows." },
        { icon: FileText,       name: "Report & Document Management",     desc: "Upload assessment reports securely, lock/unlock reports based on payment completion, and provide controlled student access." },
        { icon: CalendarDays,   name: "Slot Booking & Counselling",       desc: "Enable online/offline counselling session booking, counsellor assignment, rescheduling, follow-ups, and session status tracking." },
        { icon: Bell,           name: "Notifications & Follow-ups",       desc: "Automated reminders for registrations, payments, exams, counselling sessions, and follow-ups through WhatsApp and email notifications." },
        { icon: Video,          name: "Content Library Management",       desc: "Provide free and paid career guidance resources with package-wise and role-based access control for students and parents." },
        { icon: Lock,           name: "Role-Based Access Control",        desc: "Secure permission-based access for admins, counsellors, students, parents, and management teams with configurable roles." },
        { icon: BarChart2,      name: "Operational Tracking & Insights",  desc: "Track registrations, payment conversions, counselling progress, exam completion rates, and user engagement through centralized dashboards." },
      ],
    },
    results: {
      title: "Results Achieved",
      body: "The platform streamlined counselling operations by reducing manual coordination, improving student engagement, and enabling scalable digital workflows for counselling organizations.",
      outcomes: [
        { metric: "Lead response & follow-up time",      before: "2-3 days",                      after: "Within hours" },
        { metric: "Manual counselling coordination",     before: "Highly dependent on WhatsApp",  after: "Centralized digital workflow" },
        { metric: "Payment tracking effort",             before: "Manual spreadsheets",           after: "Real-time status tracking" },
        { metric: "Session scheduling conflicts",        before: "Frequent",                      after: "Automated slot management" },
        { metric: "Student report distribution",         before: "Manual sharing",                after: "Secure portal access" },
        { metric: "Free-to-paid conversion tracking",    before: "Limited visibility",            after: "Complete operational insights" },
      ],
    },
    testimonial: {
      quote: "This platform transformed the way we manage counselling operations. From registrations and payments to assessments, reports, and follow-up sessions — everything is now streamlined, organized, and easy to track from one system.",
      author: "Director",
      org: "Abhinav Career Scope, Bavdhan, Pune",
    },
    techStack: ["React", "Redux", "Django", "MySQL", "Redis", "AWS", "Razorpay", "WhatsApp API"],
  },

  2: {
    id: 2,
    productName: "Preschool ERP",
    fullName: "Preschool ERP Platform",
    tagline: "Smart Preschool & Daycare Management — Build Parent Trust, Simplify Operations",
    heroColor: "#1a3e8c",
    accent: "#e8a020",
    overview: "Modern preschools and daycare centers need more than attendance and fee software. They need a complete digital ecosystem that helps schools manage children safely while giving parents real-time visibility into their child's daily activities, care, learning, and development. Our Preschool ERP Platform is designed specifically for early childhood education institutions — helping schools automate operations, improve parent communication, and deliver exceptional child care experiences.",
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
  fullName: "Online Assessment & Examination Platform",
  tagline:
    "Secure, Scalable & Intelligent Assessment Management for Modern Institutions",
  heroColor: "#1a3e8c",
  accent: "#e8a020",
  overview:
    "Managing large-scale aptitude tests, entrance exams, placement assessments, and online evaluations requires accuracy, scalability, and complete operational control. Our Aptitude Test Management Platform digitizes the entire examination lifecycle — from question creation and exam scheduling to secure test execution, automated evaluation, analytics, and result publishing.",
  stats: [
    { value: "50,000+", label: "Assessments conducted" },
    { value: "99.99%", label: "Platform reliability" },
    { value: "< 2 min", label: "Auto-result generation" },
    { value: "90%", label: "Reduction in manual evaluation" },
  ],

  challenge: {
    title: "The Challenge",
    body:
      "Educational institutions and organizations were relying on paper-based exams, spreadsheets, and basic online forms for assessments. These systems lacked security, automation, analytics, and scalability, leading to evaluation delays, malpractice risks, and inefficient exam operations.",
    points: [
      "Paper-based exams with slow manual evaluation",
      "No secure online examination workflow",
      "High risk of cheating and question leakage",
      "No centralized analytics or performance tracking",
      "Difficulty handling large-scale concurrent exams",
      "Complex coordination for scheduling and result processing",
    ],
  },

  solution: {
    title: "Our Solution",
    body:
      "We developed a secure, browser-based assessment platform that enables institutions to conduct online examinations, aptitude tests, placement assessments, and mock tests with automated workflows, intelligent evaluation, and real-time analytics.",
    modules: [
      {
        icon: "📝",
        name: "Question Bank Management",
        desc:
          "Create, categorize, and manage questions with subject-wise tagging, difficulty levels, Excel import support, and reusable question libraries.",
      },
      {
        icon: "📅",
        name: "Exam Scheduling & Management",
        desc:
          "Configure exam timings, durations, instructions, candidate assignments, and exam availability with centralized scheduling control.",
      },

      {
        icon: "🔀",
        name: "Randomization Engine",
        desc:
          "Generate unique question and option sequences for every candidate to reduce copying and improve exam integrity.",
      },

      {
        icon: "🔒",
        name: "Secure Exam Environment",
        desc:
          "Support fullscreen enforcement, tab-switch monitoring, browser restrictions, and configurable proctoring workflows for secure assessments.",
      },

      {
        icon: "⚡",
        name: "Automated Evaluation",
        desc:
          "Instant evaluation for objective exams with configurable scoring logic, negative marking, and result generation workflows.",
      },

      {
        icon: "📊",
        name: "Analytics & Performance Reports",
        desc:
          "Generate rank lists, percentile scores, topic-wise analysis, performance comparisons, and downloadable reports for students and administrators.",
      },

      {
        icon: "👥",
        name: "Candidate Management",
        desc:
          "Manage candidate registrations, exam access, login credentials, attendance tracking, and assessment history from a centralized dashboard.",
      },

      {
        icon: "📄",
        name: "Result & Report Publishing",
        desc:
          "Publish results securely with downloadable scorecards, report locking, and role-based access control for institutions and students.",
      },

      {
        icon: "🔗",
        name: "Third-Party Integrations",
        desc:
          "Integrate with LMS, ERP, HRMS, payment gateways, and external learning platforms for seamless examination workflows.",
      },

      {
        icon: "☁️",
        name: "Scalable Cloud Infrastructure",
        desc:
          "Designed to support thousands of concurrent candidates with high availability, secure data storage, and reliable performance.",
      },
    ],
  },

  results: {
    title: "Results Achieved",

    body:
      "The platform enabled institutions and organizations to conduct secure large-scale online assessments while significantly reducing operational effort, evaluation time, and examination costs.",

    outcomes: [
      {
        metric: "Result processing time",

        before: "3-5 days",

        after: "< 2 minutes",
      },

      {
        metric: "Manual evaluation workload",

        before: "High",

        after: "Reduced by 90%",
      },

      {
        metric: "Exam coordination effort",

        before: "Manual process",

        after: "Centralized automation",
      },

      {
        metric: "Malpractice incidents",

        before: "~15% per exam",

        after: "Minimal detection cases",
      },

      {
        metric: "Candidate handling capacity",

        before: "Limited offline batches",

        after: "Thousands simultaneously",
      },

      {
        metric: "Operational exam cost",

        before: "High printing & logistics cost",

        after: "Digitized online process",
      },
    ],
  },

  testimonial: {
    quote:
      "This platform completely modernized our examination process. From scheduling and secure assessments to instant results and analytics, everything is now faster, more reliable, and easier to manage.",

    author: "Training & Placement Officer",

    org: "Leading Engineering Institute, Maharashtra",
  },

  techStack: [
    "React",

    "Node.js",

    "Python",

    "PostgreSQL",

    "Redis",

    "WebSockets",

    "AWS",

    "OpenCV",
  ],
},
  // 3: {
  //   id: 3,
  //   productName: "Aptitude Test Manager",
  //   fullName: "Aptitude Test Management System",
  //   tagline: "Enterprise-Grade Assessments, Delivered at Scale",
  //   heroColor: "#1a3e8c",
  //   accent: "#e8a020",
  //   overview:
  //     "Running large-scale aptitude assessments — whether for campus placements, competitive entrance tests, or internal HR screening — demands zero tolerance for errors. Our platform gives assessment teams complete control from question authoring to result publication.",
  //   stats: [
  //     { value: "50,000+", label: "Tests conducted" },
  //     { value: "99.99%", label: "Platform uptime" },
  //     { value: "0", label: "Paper used" },
  //     { value: "< 2 min", label: "Auto-result generation" },
  //   ],
  //   challenge: {
  //     title: "The Challenge",
  //     body:
  //       "Colleges and corporates running placement drives were using paper-based or basic Google Form assessments. These were vulnerable to cheating, slow to evaluate, and provided no analytics on candidate performance.",
  //     points: [
  //       "Paper tests with manual evaluation taking days",
  //       "No randomisation — widespread paper sharing",
  //       "Zero analytics on candidate performance",
  //       "High logistics cost for exam coordination",
  //     ],
  //   },
  //   solution: {
  //     title: "Our Solution",
  //     body:
  //       "A secure, browser-based assessment platform with AI-assisted proctoring, question randomisation, and instant analytics.",
  //     modules: [
  //       { icon: "📝", name: "Question Bank", desc: "Build categorised question banks with difficulty tagging, import from Excel, and version history." },
  //       { icon: "🔀", name: "Randomisation Engine", desc: "Each candidate receives a unique question set and option order — eliminating copying entirely." },
  //       { icon: "👁️", name: "AI Proctoring", desc: "Tab-switch detection, fullscreen enforcement, webcam monitoring, and suspicious activity flagging." },
  //       { icon: "⚡", name: "Instant Evaluation", desc: "Objective questions auto-graded in under 2 minutes. Subjective answers routed to human evaluators." },
  //       { icon: "📊", name: "Analytics Dashboard", desc: "Rank lists, percentile scores, topic-wise performance heatmaps, and downloadable report cards." },
  //       { icon: "🔗", name: "Integration APIs", desc: "Connect with HRMS, college ERP, or LMS platforms via REST APIs for seamless result sync." },
  //     ],
  //   },
  //   results: {
  //     title: "Results Achieved",
  //     body: "Used by 30+ institutions for campus placements, entrance tests, and internal assessments.",
  //     outcomes: [
  //       { metric: "Result processing time", before: "3-5 days", after: "< 2 minutes" },
  //       { metric: "Suspected malpractice cases", before: "~15% per exam", after: "0.2%" },
  //       { metric: "Exam logistics cost", before: "₹80/candidate", after: "₹8/candidate" },
  //       { metric: "Candidate satisfaction", before: "62%", after: "94%" },
  //     ],
  //   },
  //   testimonial: {
  //     quote: "We ran a 4,000-candidate placement test with results published within 5 minutes of the last submission. Our placement team couldn't believe it.",
  //     author: "TPO",
  //     org: "Engineering College, Nashik",
  //   },
  //   techStack: ["React", "Python", "PostgreSQL", "WebSockets", "OpenCV", "Azure"],
  // },
  4: {
    id: 4,
    productName: "K+12 School ERP",
    fullName: "K+12 Multi-School ERP SaaS Platform",
    tagline: "Approval-Driven Digital Operations for Modern Schools",
    heroColor: "#1a3e8c",
    accent: "#e8a020",
    overview: "Managing a school involves far more than academics — admissions, attendance, examinations, finance, transport, communication, HR, and parent engagement all need to work together seamlessly. Our K+12 School ERP is a complete multi-school SaaS platform designed to digitize every operational workflow while ensuring transparency, accountability, and approval-based control at every stage.",
    stats: [
      { value: "40+",    label: "Modules integrated" },
      { value: "25,000+", label: "Students managed" },
      { value: "99.9%",  label: "Data accuracy" },
      { value: "70%",    label: "Reduction in manual work" },
    ],
    challenge: {
      title: "The Challenge",
      body: "Schools were operating on disconnected systems, paper registers, spreadsheets, and manual approval processes. Academic records, fee data, attendance, and communication were spread across departments with no centralized visibility, causing delays, duplication, and operational inefficiencies.",
      points: [
        "Manual approval workflows causing delays",
        "Attendance, fee, and exam systems disconnected",
        "No centralized parent communication platform",
        "Lack of audit trail and accountability",
        "Difficulty managing multiple schools on one system",
        "High dependency on paperwork and spreadsheets",
      ],
    },
    solution: {
      title: "Our Solution",
      body: "We developed a scalable, role-based School ERP platform built on a strict workflow model: Action → Verification → Approval → Lock → Visibility. Every critical operation passes through structured approval stages, ensuring secure, transparent, and reliable school management.",
      modules: [
        { icon: ClipboardCheck, name: "Admission & Enrollment",           desc: "Online inquiry management, admission workflows, document verification, fee collection, and automated student onboarding with login generation." },
        { icon: UserCog,        name: "Student Lifecycle Management",     desc: "Centralized student profiles with academic history, attendance, exam records, discipline tracking, and parent mapping preserved year-wise." },
        { icon: UserCheck,      name: "Teacher & Staff Management",       desc: "Staff profiles, subject assignments, attendance tracking, leave workflows, payroll support, and multi-level approval processes." },
        { icon: ListChecks,     name: "Attendance Management",            desc: "Teacher attendance marking with verification, admin locking, biometric integration, and audit-ready attendance records." },
        { icon: ScrollText,     name: "Examination & Results",            desc: "Exam scheduling, marks entry, multi-level result verification, report card generation, and approval-driven result publication." },
        { icon: DollarSign,     name: "Fee & Accounting System",          desc: "Fee structures, invoice generation, payment verification, scholarship handling, receipt management, and financial reporting." },
        { icon: BookCopy,       name: "Homework & Academic Planning",     desc: "Homework publishing, assignment submissions, teacher evaluation, and parent visibility after final review and approval." },
        { icon: Truck,          name: "Transport Management",             desc: "Route allocation, transport requests, fee linkage, pickup tracking, and transport approval management." },
        { icon: Library,        name: "Library Management",               desc: "Digital cataloguing, issue-return workflows, due-date tracking, fine calculation, and approval-based waivers." },
        { icon: Package,        name: "Inventory & Asset Control",        desc: "Purchase requests, stock management, asset assignment, maintenance tracking, and admin-controlled approvals." },
        { icon: Megaphone,      name: "Communication & Notifications",    desc: "Automated SMS, email, and WhatsApp alerts for attendance, fees, exams, emergencies, and school announcements." },
        { icon: LayoutDashboard,name: "Reports & Analytics",              desc: "Real-time dashboards for attendance, academics, finance, staff workload, and student performance with role-based access." },
      ],
    },
    results: {
      title: "Results Achieved",
      body: "Successfully deployed for institutions managing multiple campuses, helping schools streamline operations, reduce paperwork, and improve parent satisfaction through centralized digital workflows.",
      outcomes: [
        { metric: "Admission processing time",       before: "4-5 days",              after: "Same day approval" },
        { metric: "Manual paperwork dependency",     before: "High",                  after: "Reduced by 80%" },
        { metric: "Attendance report preparation",   before: "2-3 hours daily",       after: "Automated instantly" },
        { metric: "Fee reconciliation effort",       before: "Manual weekly process", after: "Real-time tracking" },
        { metric: "Parent communication delay",      before: "1-2 days",              after: "Instant notifications" },
        { metric: "Exam result processing",          before: "Several days",          after: "Automated after approvals" },
      ],
    },
    testimonial: {
      quote: "This ERP transformed the way our schools operate. Every department now works on a single system with complete visibility, approval workflows, and real-time reporting. It has significantly reduced manual work while improving accountability across campuses.",
      author: "School Director",
      org: "Leading Multi-Campus School Group, Maharashtra",
    },
    techStack: ["React", "Redux", "Django", "MySQL", "Redis", "AWS", "Razorpay", "WhatsApp API"],
  },
};

// ── ANIMATED STAT CARD ───────────────────────────────────────────────
const StatCard = ({ stat, heroColor, index, active }) => {
  const display = useCounter(stat.value, 1200 + index * 150, active);
  return (
    <div style={{
      textAlign: "center",
      opacity: active ? 1 : 0,
      transform: active ? "translateY(0) scale(1)" : "translateY(20px) scale(0.94)",
      transition: `opacity 0.5s ease ${index * 0.12}s, transform 0.5s ease ${index * 0.12}s`,
      padding: "8px 4px",
    }}>
      <div style={{
        fontSize: "2rem",
        fontWeight: typography.weight.extrabold,
        color: heroColor,
        lineHeight: 1,
        fontFamily: typography.fontFamily,
        letterSpacing: "-0.02em",
      }}>
        {display}
      </div>
      <div style={{
        fontSize: 12,
        color: colors.textMuted,
        fontWeight: typography.weight.semibold,
        marginTop: 6,
        letterSpacing: "0.04em",
        fontFamily: typography.fontFamily,
      }}>
        {stat.label}
      </div>
      {/* Animated underline */}
      <div style={{
        height: 2,
        background: heroColor,
        borderRadius: 2,
        margin: "8px auto 0",
        width: active ? "40px" : "0px",
        transition: `width 0.6s ease ${index * 0.12 + 0.3}s`,
        opacity: 0.4,
      }} />
    </div>
  );
};

// ── ANIMATED CHALLENGE POINT ─────────────────────────────────────────
const ChallengePoint = ({ pt, i, accent, active }) => (
  <div style={{
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    background: colors.accentTint4,
    border: `1px solid ${accent}30`,
    borderRadius: radius.md,
    padding: "14px 16px",
    opacity: active ? 1 : 0,
    transform: active ? "translateX(0)" : "translateX(24px)",
    transition: `opacity 0.45s ease ${i * 0.09}s, transform 0.45s ease ${i * 0.09}s`,
  }}>
    <span style={{ fontSize: 18, lineHeight: 1, flexShrink: 0, color: accent }}>⚠</span>
    <span style={{ fontSize: 14, color: colors.textBody, fontWeight: typography.weight.medium, lineHeight: 1.5 }}>{pt}</span>
  </div>
);

// ── ANIMATED MODULE CARD ─────────────────────────────────────────────
const ModuleCard = ({ mod, accent, heroColor, index, active }) => {
  const [hov, setHov] = useState(false);
  const IconComponent = mod.icon;

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? colors.bgCard : colors.bgPage,
        borderRadius: radius.lg,
        padding: "22px 20px",
        border: `1.5px solid ${hov ? heroColor : colors.borderDefault}`,
        transition: "all 0.22s ease",
        boxShadow: hov ? shadows.cardSmHover : "none",
        transform: hov
          ? "translateY(-5px) scale(1.01)"
          : active ? "translateY(0) scale(1)" : "translateY(20px) scale(0.96)",
        opacity: active ? 1 : 0,
        transitionProperty: "opacity, transform, box-shadow, border-color, background",
        transitionDuration: hov ? "0.22s, 0.22s, 0.22s, 0.22s, 0.22s" : `0.5s, 0.5s, 0.22s, 0.22s, 0.22s`,
        transitionDelay: hov ? "0s" : `${index * 0.06}s`,
      }}
    >
      {/* Lucide icon in a styled container */}
      <div style={{
        width: 44,
        height: 44,
        borderRadius: radius.md,
        background: hov ? `${heroColor}15` : `${heroColor}0d`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 14,
        transition: "background 0.22s ease, transform 0.3s ease",
        transform: hov ? "scale(1.1) rotate(-4deg)" : "scale(1) rotate(0deg)",
        flexShrink: 0,
      }}>
        <IconComponent
          size={22}
          color={hov ? heroColor : `${heroColor}cc`}
          strokeWidth={1.75}
          style={{ transition: "color 0.22s ease" }}
        />
      </div>

      <h4 style={{ fontSize: 15, fontWeight: typography.weight.bold, color: colors.textHeading, margin: "0 0 8px", fontFamily: typography.fontFamily }}>{mod.name}</h4>
      <p style={{ fontSize: 13, color: colors.textBody, lineHeight: 1.6, margin: 0, fontFamily: typography.fontFamily }}>{mod.desc}</p>
      {/* Bottom accent line on hover */}
      <div style={{
        height: 2,
        background: `linear-gradient(90deg, ${heroColor}, ${accent})`,
        borderRadius: 2,
        marginTop: 14,
        width: hov ? "100%" : "0%",
        transition: "width 0.3s ease",
        opacity: 0.6,
      }} />
    </div>
  );
};

// ── ANIMATED RESULTS ROW ─────────────────────────────────────────────
const ResultRow = ({ row, i, heroColor, active }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
        padding: "16px 24px",
        background: hov ? `${heroColor}06` : i % 2 === 0 ? colors.bgPage : colors.bgCard,
        borderTop: `1px solid ${colors.borderDefault}`,
        alignItems: "center",
        opacity: active ? 1 : 0,
        transform: active ? "translateX(0)" : "translateX(-16px)",
        transition: `opacity 0.4s ease ${i * 0.07}s, transform 0.4s ease ${i * 0.07}s, background 0.2s ease`,
        cursor: "default",
      }}
    >
      <span style={{ fontSize: 14, color: colors.textHeading, fontWeight: typography.weight.semibold }}>{row.metric}</span>
      <span style={{ fontSize: 14, color: "#dc2626", fontWeight: typography.weight.semibold }}>{row.before}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{
          width: 6, height: 6, borderRadius: "50%",
          background: colors.green,
          display: "inline-block",
          animation: active ? "pulse 2s ease-in-out infinite" : "none",
        }} />
        <span style={{ fontSize: 14, color: colors.green, fontWeight: typography.weight.bold }}>{row.after}</span>
      </div>
    </div>
  );
};

// ── TECH BADGE ───────────────────────────────────────────────────────
const TechBadge = ({ t, heroColor, index, active }) => {
  const [hov, setHov] = useState(false);
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontSize: 13,
        fontWeight: typography.weight.semibold,
        color: hov ? colors.white : heroColor,
        background: hov ? heroColor : `${heroColor}10`,
        border: `1px solid ${heroColor}${hov ? "ff" : "25"}`,
        padding: "6px 16px",
        borderRadius: radius.pill,
        cursor: "default",
        transition: "all 0.22s ease",
        transform: hov ? "translateY(-2px)" : active ? "translateY(0)" : "translateY(10px)",
        opacity: active ? 1 : 0,
        transitionDelay: hov ? "0s" : `${index * 0.05}s`,
        display: "inline-block",
        boxShadow: hov ? `0 4px 12px ${heroColor}30` : "none",
      }}
    >
      {t}
    </span>
  );
};

// ════════════════════════════════════════════════════════════════════
//  ProductCaseStudy Page
// ════════════════════════════════════════════════════════════════════
const ProductCaseStudy = ({ productId, onBack }) => {
  useEffect(() => { injectStyles(); }, []);

  const cs = CASE_STUDIES[productId];
  if (!cs) return null;
  const { heroColor, accent } = cs;

  return (
    <><Helmet>
        {/* ───── BASIC SEO ───── */}
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta
          name="author"
          content="Right Analysis Matter Technology Pvt. Ltd."
        />

        {/* ───── ROBOTS ───── */}
        <meta name="robots" content="index, follow" />

        {/* ───── OPEN GRAPH (Facebook/LinkedIn) ───── */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={pageUrl} />

        {/* ───── TWITTER SEO ───── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

        {/* ───── STRUCTURED DATA (ARTICLE) ───── */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: description,
            image: imageUrl,
            author: {
              "@type": "Organization",
              name: "Right Analysis Matter Technology Pvt. Ltd.",
            },
            publisher: {
              "@type": "Organization",
              name: "Right Analysis Matter Technology Pvt. Ltd.",
              logo: {
                "@type": "ImageObject",
                url: imageUrl,
              },
            },
          })}
        </script>

        {/* ───── SOFTWARE PRODUCT SCHEMA (VERY POWERFUL FOR YOU) ───── */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: cs.productName,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description: cs.overview || description,
            creator: {
              "@type": "Organization",
              name: "Right Analysis Matter Technology Pvt. Ltd.",
            },
          })}
        </script>
      </Helmet>
    <div style={{ minHeight: "100vh", background: colors.bgPage, fontFamily: typography.fontFamily }}>

      {/* ── HERO ── */}
      <div style={{
        background: `linear-gradient(135deg, ${colors.primaryDark} 0%, ${heroColor} 55%, ${colors.primaryLight} 100%)`,
        padding: `${spacing.hero.paddingY}px ${spacing.hero.paddingX}px ${spacing.hero.paddingBottom}px`,
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Animated decorative rings */}
        <div style={{
          position: "absolute", top: -50, right: -50,
          width: 260, height: 260, borderRadius: radius.full,
          border: `2px solid ${accent}25`,
          animation: "heroRing 12s linear infinite",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", top: 20, right: 20,
          width: 140, height: 140, borderRadius: radius.full,
          border: `1px solid ${accent}18`,
          animation: "heroRing 8s linear infinite reverse",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: -40, left: 80,
          width: 180, height: 180, borderRadius: radius.full,
          background: `${accent}08`,
          animation: "float 6s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        {/* Dot grid texture */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(${accent}15 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          pointerEvents: "none",
          opacity: 0.6,
        }} />

        <div style={{ maxWidth: layout.maxWidthContent, margin: "0 auto", position: "relative" }}>
          {/* Back button */}
          <BackButton onBack={onBack} />

          {/* Eyebrow */}
          <div style={{
            display: "flex", alignItems: "center", gap: 10, marginBottom: 14,
            opacity: heroReady ? 1 : 0,
            transform: heroReady ? "translateY(0)" : "translateY(-12px)",
            transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
          }}>
            <div style={{ width: 32, height: 3, background: accent, borderRadius: 2 }} />
            <span style={{ color: accent, fontWeight: typography.weight.bold, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: typography.fontFamily }}>
              Case Study
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 260 }}>
              <h1 style={{
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: typography.weight.extrabold,
                color: colors.white,
                margin: "0 0 8px",
                lineHeight: typography.lineHeight.tight,
                letterSpacing: typography.letterSpacing.tight,
                fontFamily: typography.fontFamily,
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
              }}>
                {cs.productName}
              </h1>
              <p style={{
                color: accent,
                fontWeight: typography.weight.bold,
                fontSize: 14,
                margin: "0 0 16px",
                letterSpacing: "0.02em",
                fontFamily: typography.fontFamily,
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease 0.32s, transform 0.6s ease 0.32s",
              }}>
                {cs.fullName}
              </p>
              <p style={{
                color: colors.textOnDarkSub,
                fontSize: 17,
                lineHeight: typography.lineHeight.body,
                margin: 0,
                maxWidth: 520,
                fontFamily: typography.fontFamily,
                opacity: heroReady ? 1 : 0,
                transform: heroReady ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease 0.44s, transform 0.6s ease 0.44s",
              }}>
                {cs.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Curved overlap */}
      <div style={{ height: 32, background: colors.bgPage, marginTop: -32, borderRadius: "32px 32px 0 0", position: "relative", zIndex: 2 }} />

      {/* ── STATS BAR ── */}
      <div ref={statsRef} style={{ maxWidth: layout.maxWidthContent, margin: "-8px auto 0", padding: `0 ${spacing.xl}px` }}>
        <div style={{
          background: colors.bgCard,
          borderRadius: radius.xl,
          padding: "28px 32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
          gap: 24,
          boxShadow: shadows.cardMd,
          border: `1px solid ${colors.borderDefault}`,
          transform: statsVisible ? "translateY(0)" : "translateY(30px)",
          opacity: statsVisible ? 1 : 0,
          transition: "opacity 0.6s ease, transform 0.6s ease",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Shimmer line at top */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: 3,
            background: `linear-gradient(90deg, transparent, ${heroColor}, ${accent}, ${heroColor}, transparent)`,
            borderRadius: "12px 12px 0 0",
          }} />
          {cs.stats.map((s, i) => (
            <StatCard key={s.label} stat={s} heroColor={heroColor} index={i} active={statsVisible} />
          ))}
        </div>
      </div>

      {/* ── OVERVIEW ── */}
      <div ref={overviewRef} style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: layout.maxWidthContent, margin: "0 auto" }}>
          <div style={{ maxWidth: 680 }}>
            <AnimatedEyebrow color={accent} active={overviewVisible}>Overview</AnimatedEyebrow>
            <h2 style={{
              ...headingStyle,
              opacity: overviewVisible ? 1 : 0,
              transform: overviewVisible ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
            }}>
              What is {cs.productName}?
            </h2>
            <p style={{
              ...bodyStyle,
              opacity: overviewVisible ? 1 : 0,
              transform: overviewVisible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
            }}>
              {cs.overview}
            </p>
          </div>
        </div>
      </div>

      {/* ── CHALLENGE ── */}
      <div ref={challengeRef} style={{ background: colors.bgCard, padding: "56px 24px" }}>
        <div style={{
          maxWidth: layout.maxWidthContent,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
        }}>
          <div style={{
            opacity: challengeVisible ? 1 : 0,
            transform: challengeVisible ? "translateX(0)" : "translateX(-28px)",
            transition: "opacity 0.55s ease, transform 0.55s ease",
          }}>
            <AnimatedEyebrow color={accent} active={challengeVisible}>{cs.challenge.title}</AnimatedEyebrow>
            <h2 style={headingStyle}>What were the pain points?</h2>
            <p style={{ ...bodyStyle, marginBottom: 24 }}>{cs.challenge.body}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {cs.challenge.points.map((pt, i) => (
              <ChallengePoint key={i} pt={pt} i={i} accent={accent} active={challengeVisible} />
            ))}
          </div>
        </div>
      </div>

      {/* ── SOLUTION MODULES ── */}
      <div ref={solutionRef} style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: layout.maxWidthContent, margin: "0 auto" }}>
          <AnimatedEyebrow color={accent} active={solutionVisible}>{cs.solution.title}</AnimatedEyebrow>
          <h2 style={{
            ...headingStyle, marginBottom: 8,
            opacity: solutionVisible ? 1 : 0,
            transform: solutionVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
          }}>
            How we solved it
          </h2>
          <p style={{
            ...bodyStyle, maxWidth: 620, marginBottom: 40,
            opacity: solutionVisible ? 1 : 0,
            transform: solutionVisible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.5s ease 0.18s, transform 0.5s ease 0.18s",
          }}>
            {cs.solution.body}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
            {cs.solution.modules.map((mod, i) => (
              <ModuleCard key={mod.name} mod={mod} accent={accent} heroColor={heroColor} index={i} active={solutionVisible} />
            ))}
          </div>
        </div>
      </div>

      {/* ── RESULTS TABLE ── */}
      <div ref={resultsRef} style={{ background: colors.bgCard, padding: "56px 24px" }}>
        <div style={{ maxWidth: layout.maxWidthContent, margin: "0 auto" }}>
          <AnimatedEyebrow color={accent} active={resultsVisible}>{cs.results.title}</AnimatedEyebrow>
          <h2 style={{
            ...headingStyle, marginBottom: 8,
            opacity: resultsVisible ? 1 : 0,
            transform: resultsVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s",
          }}>
            Before vs After
          </h2>
          <p style={{
            ...bodyStyle, marginBottom: 32,
            opacity: resultsVisible ? 1 : 0,
            transition: "opacity 0.5s ease 0.18s",
          }}>
            {cs.results.body}
          </p>
          <div style={{
            borderRadius: radius.lg,
            overflow: "hidden",
            border: `1px solid ${colors.borderDefault}`,
            boxShadow: shadows.cardMd,
            opacity: resultsVisible ? 1 : 0,
            transform: resultsVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease 0.22s, transform 0.5s ease 0.22s",
          }}>
            {/* Header */}
            <div style={{
              display: "grid", gridTemplateColumns: "2fr 1fr 1fr",
              background: `linear-gradient(90deg, ${heroColor}, ${heroColor}cc)`,
              padding: "14px 24px",
            }}>
              {["Metric", "Before", "After"].map((h) => (
                <span key={h} style={{ color: colors.white, fontWeight: typography.weight.bold, fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: typography.fontFamily }}>{h}</span>
              ))}
            </div>
            {cs.results.outcomes.map((row, i) => (
              <ResultRow key={i} row={row} i={i} heroColor={heroColor} active={resultsVisible} />
            ))}
          </div>
        </div>
      </div>

      {/* ── TESTIMONIAL ── */}
      <div ref={testRef} style={{ padding: "56px 24px" }}>
        <div style={{ maxWidth: layout.maxWidthContent, margin: "0 auto" }}>
          <div style={{
            maxWidth: 700,
            margin: "0 auto",
            textAlign: "center",
            opacity: testVisible ? 1 : 0,
            transform: testVisible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}>
            {/* Decorative quote mark */}
            <div style={{
              fontSize: 80,
              lineHeight: 0.8,
              marginBottom: 20,
              color: accent,
              opacity: 0.3,
              fontFamily: "Georgia, serif",
              animation: testVisible ? "float 4s ease-in-out infinite" : "none",
              display: "inline-block",
            }}>
              "
            </div>
            {/* Quote card */}
            <div style={{
              background: colors.bgCard,
              border: `1px solid ${accent}20`,
              borderRadius: radius.xl,
              padding: "32px 36px",
              boxShadow: `0 8px 32px ${heroColor}10`,
              position: "relative",
            }}>
              <div style={{
                position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                width: 60, height: 3,
                background: `linear-gradient(90deg, ${heroColor}, ${accent})`,
                borderRadius: "0 0 4px 4px",
              }} />
              <p style={{
                fontSize: 17,
                color: colors.textHeading,
                fontWeight: typography.weight.semibold,
                lineHeight: 1.75,
                margin: "0 0 28px",
                fontStyle: "italic",
                fontFamily: typography.fontFamily,
              }}>
                {cs.testimonial.quote}
              </p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 48, height: 48,
                  borderRadius: radius.full,
                  background: `linear-gradient(135deg, ${heroColor}, ${accent})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: colors.white,
                  fontWeight: typography.weight.extrabold,
                  fontSize: 18,
                  fontFamily: typography.fontFamily,
                  boxShadow: `0 4px 12px ${heroColor}40`,
                  flexShrink: 0,
                }}>
                  {cs.testimonial.author[0]}
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: 14, fontWeight: typography.weight.bold, color: colors.textHeading, fontFamily: typography.fontFamily }}>{cs.testimonial.author}</div>
                  <div style={{ fontSize: 12, color: colors.textMuted, fontWeight: typography.weight.medium, fontFamily: typography.fontFamily }}>{cs.testimonial.org}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TECH STACK ── */}
      <div ref={techRef} style={{ background: colors.bgCard, padding: "40px 24px" }}>
        <div style={{ maxWidth: layout.maxWidthContent, margin: "0 auto" }}>
          <AnimatedEyebrow color={accent} active={techVisible}>Technology</AnimatedEyebrow>
          <h3 style={{
            fontSize: "1.15rem",
            fontWeight: typography.weight.bold,
            color: colors.textHeading,
            margin: "0 0 20px",
            fontFamily: typography.fontFamily,
            opacity: techVisible ? 1 : 0,
            transition: "opacity 0.5s ease 0.1s",
          }}>
            Built With
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {cs.techStack.map((t, i) => (
              <TechBadge key={t} t={t} heroColor={heroColor} index={i} active={techVisible} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div ref={ctaRef} style={{
        background: `linear-gradient(135deg, ${colors.primaryDark} 0%, ${heroColor} 100%)`,
        margin: "40px 24px 60px",
        borderRadius: radius.xl,
        padding: "48px 40px",
        maxWidth: layout.maxWidthContent,
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 24,
        position: "relative",
        overflow: "hidden",
        opacity: ctaVisible ? 1 : 0,
        transform: ctaVisible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}>
        <div style={{ position: "absolute", top: -30, right: 60, width: 160, height: 160, borderRadius: radius.full, border: `2px solid ${accent}20`, animation: "heroRing 10s linear infinite", pointerEvents: "none" }} />
        <div style={{
          position: "absolute", bottom: -20, left: -20,
          width: 120, height: 120, borderRadius: radius.full,
          background: `${accent}08`,
          animation: "float 5s ease-in-out infinite",
          pointerEvents: "none",
        }} />
        <div>
          <p style={{ color: accent, fontWeight: typography.weight.bold, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 8px", fontFamily: typography.fontFamily }}>
            Ready to transform?
          </p>
          <h2 style={{ color: colors.white, fontSize: "1.5rem", fontWeight: typography.weight.extrabold, margin: "0 0 6px", fontFamily: typography.fontFamily }}>
            Want {cs.productName} for your organisation?
          </h2>
          <p style={{ color: colors.textOnDarkSub, fontSize: 14, margin: 0, fontFamily: typography.fontFamily }}>
            Talk to our team for a free demo and personalised walkthrough.
          </p>
        </div>
        <AnimatedCTAButton accent={accent} href="/contact-us">
          Request a Demo →
        </AnimatedCTAButton>
      </div>

    </div>
    <Footer /></>
  );
};

// ── Sub-components ──────────────────────────────────────────────────

const BackButton = ({ onBack }) => {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onBack}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: hov ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.2)",
        color: colors.white,
        padding: "8px 16px",
        borderRadius: radius.md,
        cursor: "pointer",
        fontSize: 13,
        fontWeight: typography.weight.semibold,
        marginBottom: 32,
        transition: "background 0.2s, transform 0.2s",
        transform: hov ? "translateX(-3px)" : "translateX(0)",
        fontFamily: typography.fontFamily,
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 3L5 8l5 5" stroke={colors.white} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back to Products
    </button>
  );
};

const AnimatedEyebrow = ({ color, children, active }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
    <div style={{
      height: 3,
      background: color,
      borderRadius: 2,
      width: active ? "28px" : "0px",
      transition: "width 0.5s ease",
    }} />
    <span style={{
      color,
      fontWeight: typography.weight.bold,
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      fontFamily: typography.fontFamily,
      opacity: active ? 1 : 0,
      transition: "opacity 0.4s ease 0.2s",
    }}>
      {children}
    </span>
  </div>
);

const AnimatedCTAButton = ({ accent, href, children }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ background: hov ? colors.bgCard : colors.bgPage, borderRadius: radius.lg, padding: "22px 20px", border: `1.5px solid ${hov ? heroColor : colors.borderDefault}`, transition: `all 0.22s ease`, boxShadow: hov ? shadows.cardSmHover : "none", transform: hov ? "translateY(-3px)" : "none" }}
    >
      <div style={{ fontSize: 28, marginBottom: 12 }}>{mod.icon}</div>
      <h4 style={{ fontSize: 15, fontWeight: typography.weight.bold, color: colors.textHeading, margin: "0 0 8px", fontFamily: typography.fontFamily }}>{mod.name}</h4>
      <p style={{ fontSize: 13, color: colors.textBody, lineHeight: 1.6, margin: 0, fontFamily: typography.fontFamily }}>{mod.desc}</p>
    </div>
  );
};

export default ProductCaseStudy;