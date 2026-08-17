// ============================================================
// Hackverge — site content data
// Edit this file to change copy across the whole site.
// ============================================================

export const site = {
  name: "Hackverge",
  tagline: "Become the Cybersecurity Professional Companies Want to Hire.",
  description:
    "Hackverge is a career accelerator that transforms motivated learners into enterprise-ready cybersecurity professionals through practical training, enterprise technologies, mentorship, and career development.",
  // Overridden automatically by the GitHub Actions workflow (SITE_URL env var),
  // which derives the real https://... address from your repo name / custom domain.
  // Only used as-is for local builds or if you deploy manually — see README.
  url: process.env.SITE_URL || "https://hackverge.example.com",
  email: "support@hackverge.com",
  supportEmail: "support@hackverge.com",
  phone: "+923113390793",
  social: {
    linkedin: "https://linkedin.com/company/hackverge",
    instagram: "https://instagram.com/hackverge",
    facebook: "https://facebook.com/hackverge",
    youtube: "https://youtube.com/@hackverge",
  },
};

export const nav = [
    { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  {
    label: "Learning Paths",
    href: "/learning-paths/",
    mega: "paths",
  },
  {
    label: "Courses",
    href: "/courses/",
    mega: "courses",
  },
  { label: "Enterprise Labs", href: "/enterprise-labs/" },
  { label: "Career Services", href: "/career-services/" },
  { href: "/contact/", label: "Contact" },
  { label: "Blog", href: "/blog/" },
];

export const footerLinks = {
  company: [
    { label: "About Hackverge", href: "/about/" },
    { label: "Instructors & Mentors", href: "/instructors/" },
    { label: "Success Stories", href: "/success-stories/" },
    { label: "Contact", href: "/contact/" },
  ],
  learn: [
    { label: "Learning Paths", href: "/learning-paths/" },
    { label: "Courses", href: "/courses/" },
    { label: "Enterprise Labs", href: "/enterprise-labs/" },
    { label: "Career Services", href: "/career-services/" },
  ],
  resources: [
    { label: "Blog", href: "/blog/" },
    { label: "Apply Now", href: "/apply/" },
    { label: "Student Login", href: "/login/" },
    { label: "Contact", href: "/contact/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Terms of Service", href: "/terms/" },
  ],
};

// ------------------------------------------------------------
// Technologies
// ------------------------------------------------------------
export const technologies = [
  { name: "Microsoft Defender XDR", slug: "microsoft-defender-xdr", icon: "shield", category: "Defensive" },
  { name: "QRadar SIEM", slug: "QRadar SIEM", icon: "radar", category: "Defensive" },
  { name: "CrowdStrike EDR/XDR", slug: "crowdstrike-XDR", icon: "falcon", category: "Defensive" },
  { name: "Delinea PAM", slug: "delinea-pam", icon: "key", category: "Enterprise" },
  { name: "Forcepoint DLP", slug: "Forcepoint-DLP", icon: "lock", category: "Enterprise" },
  { name: "Patch Management", slug: "patch-management", icon: "fileShield", category: "Enterprise" },
  { name: "Trend Vision One", slug: "trend-vision-one", icon: "eye", category: "Enterprise" },
  { name: "Sophos EDR/XDR", slug: "sophos-xdr", icon: "shieldCheck", category: "Enterprise" },
  { name: "Burp Suite Professional", slug: "burp-suite", icon: "bug", category: "Offensive" },
  { name: "Invicti", slug: "invicti", icon: "wave", category: "Offensive" },
  { name: "Qualys", slug: "nmap", icon: "network", category: "Offensive" },
  { name: "Firewalls", slug: "firewall", icon: "target", category: "Enterprise" },
  { name: "JADX", slug: "jadx", icon: "terminal", category: "Offensive" },
  { name: "MobSF", slug: "mobsf", icon: "smartphone", category: "Offensive" },
  { name: "SocRadar", slug: "socradar", icon: "scan", category: "Enterprise" },
  { name: "Frida", slug: "frida", icon: "smartphone", category: "Offensive" },
];

// ------------------------------------------------------------
// Learning Paths
// ------------------------------------------------------------
export const learningPaths = [
  {
    slug: "offensive-security",
    name: "Offensive Security",
    short: "Red Team",
    icon: "target",
    description:
      "Learn how attackers think so you can identify and remediate vulnerabilities before malicious actors exploit them.",
    heroDescription:
      "Offensive Security teaches you to think like an attacker — reconnaissance, exploitation, and reporting — so organizations can find and fix weaknesses before real adversaries do.",
    difficulty: "Intermediate",
    duration: "6 Months",
    courses: [
      "ethical-hacking",
      "web-penetration-testing",
      "mobile-pentesting",
      "bug-bounty",
    ],
    technologies: ["Burp Suite", "Invicti", "Acunetix", "sqlmap", "JADX", "MobSF", "Sonarcube", "Manual Pentest", "etc"],
    skills: [
      "Reconnaissance",
      "Vulnerability Assessment",
      "Exploitation",
      "Reporting",
      "API Testing",
      "Authentication Testing",
      "Web Security",
      "Mobile Security",
    ],
    jobs: ["Penetration Tester", "Security Consultant", "Red Team Associate", "Application Security Analyst", "Bug Bounty Researcher"],
    comparison: { beginnerFriendly: 3, programming: "Medium", enterpriseTools: "Medium", labs: "High", demand: "High", remote: "High" },
  },
  {
    slug: "defensive-security",
    name: "Defensive Security",
    short: "Blue Team",
    icon: "shield",
    description:
      "Protect organizations by monitoring, detecting, investigating, and responding to security incidents.",
    heroDescription:
      "Blue Team training puts you inside a modern Security Operations Center — triaging alerts, hunting threats, and responding to incidents using the same tools enterprise SOCs run every day.",
    difficulty: "Beginner to Intermediate",
    duration: "5 Months",
    courses: ["soc-analyst", "QRadar", "microsoft-defender-xdr", "crowdstrike-falcon"],
    technologies: ["QRadar", "Microsoft Defender XDR", "CrowdStrike Falcon", "Threat Intel"],
    skills: [
      "Log Analysis",
      "Threat Detection",
      "Alert Triage",
      "Incident Investigation",
      "MITRE ATT&CK Mapping",
      "Threat Hunting",
      "Case Documentation",
    ],
    jobs: ["SOC Analyst", "Incident Responder", "Threat Hunter", "Security Operations Engineer"],
    comparison: { beginnerFriendly: 4, programming: "Low", enterpriseTools: "High", labs: "High", demand: "High", remote: "Medium" },
  },
  {
    slug: "enterprise-security",
    name: "Enterprise Security",
    short: "Security Engineering",
    icon: "server",
    description:
      "Design, implement, and manage enterprise security solutions that protect organizational infrastructure.",
    heroDescription:
      "Enterprise Security trains you on the identity, data-protection, and vulnerability-management platforms that large organizations rely on to govern access and reduce risk at scale.",
    difficulty: "Intermediate",
    duration: "7-8 Months",
    courses: ["Trend-vision-one", "delinea-pam", "sophos-XDR", "vulnerability-management", "patch-management", "kaspersky-EDR"],
    technologies: ["Trend Vision One", "Delinea PAM", "Sophos XDR", "Kaspersky EDR", "Rapid7", "Microsoft Defender XDR", "SocRadar", "Patch Management", "Invicti"],
    skills: ["PAM Administration", "DLP Policies", "Risk Assessment", "Patch Strategy", "Asset Management", "Security Architecture"],
    jobs: ["Security Engineer", "Enterprise Security Analyst", "IAM/PAM Engineer", "Security Administrator"],
    comparison: { beginnerFriendly: 2, programming: "Low", enterpriseTools: "Very High", labs: "High", demand: "High", remote: "High" },
  },
];

export const futurePaths = [
  { slug: "cloud-security", name: "Cloud Security", icon: "cloud", note: "Azure, AWS, Microsoft Defender for Cloud, Identity" },
  { slug: "ai-security", name: "AI Security", icon: "cpu", note: "Securing AI systems and pipelines" },
];

// ------------------------------------------------------------
// Courses (data-driven — used by /courses/[slug])
// ------------------------------------------------------------
export const courses = [
  {
    slug: "ethical-hacking",
    title: "Ethical Hacking Fundamentals",
    path: "offensive-security",
    level: "Beginner",
    duration: "3 Months",
    delivery: "Live Online",
    tagline: "The foundation every offensive security career is built on.",
    overview:
      "This course builds the mental model attackers use — reconnaissance, scanning, exploitation, and reporting — and grounds it in a structured, professional methodology rather than random tool usage. You'll learn why each phase matters and how it maps to real engagements.",
    whoShouldEnroll: ["University students", "Fresh graduates", "IT professionals moving into security", "Anyone starting a cybersecurity career"],
    skills: {
      technical: ["Reconnaissance & footprinting", "Network scanning", "Vulnerability identification", "Basic exploitation techniques"],
      professional: ["Structured methodology", "Report writing", "Ethical & legal boundaries", "Communication with stakeholders"],
    },
    tools: ["Nmap", "Acunetix", "Metasploit", "Burp Suite", "etc"],
    curriculum: [
      { title: "Security Fundamentals & Ethics", desc: "CIA triad, threat landscape, legal boundaries, and the ethical hacker's code of conduct." },
      { title: "Reconnaissance & Footprinting", desc: "Passive and active information gathering techniques used before any engagement." },
      { title: "Scanning & Enumeration", desc: "Network and service discovery with Nmap; identifying attack surface." },
      { title: "Vulnerability Assessment", desc: "Finding and prioritizing weaknesses using structured assessment methods." },
      { title: "Exploitation Basics", desc: "Understanding how vulnerabilities are exploited in controlled lab environments." },
      { title: "Reporting & Communication", desc: "Writing findings the way a professional pentester reports to a client." },
    ],
    labs: ["Network reconnaissance lab", "Vulnerable host enumeration", "Guided exploitation walkthrough", "Findings report exercise"],
    projects: ["End-to-end assessment of a lab network with a delivered findings report"],
    careerOutcomes: ["Junior Penetration Tester", "Security Analyst (Entry Level)", "Foundation for all offensive security roles"],
    faqs: [
      { q: "Do I need programming experience?", a: "No. This course assumes no prior security experience. Basic computer literacy is enough to start." },
      { q: "Is this course hands-on?", a: "Yes — every module includes guided labs in a dedicated practice environment." },
    ],
  },
  {
    slug: "web-penetration-testing",
    title: "Web Application Penetration Testing",
    path: "offensive-security",
    level: "Intermediate",
    duration: "2 months",
    delivery: "Live Online",
    tagline: "Find and report the vulnerabilities that put real applications at risk.",
    overview:
      "A practical, methodology-driven course on assessing web applications the way professional consultants do — covering the OWASP Top 10 and beyond, with every technique practiced against realistic, intentionally vulnerable applications.",
    whoShouldEnroll: ["Learners who completed Ethical Hacking Fundamentals", "Developers moving into AppSec", "Junior pentesters wanting depth in web security"],
    skills: {
      technical: ["Authentication & session testing", "Injection attacks (SQLi, XSS, etc.)", "Authorization & business logic testing", "API security testing"],
      professional: ["Client-ready reporting", "Risk rating (CVSS)", "Retesting & remediation verification"],
    },
    tools: ["Burp Suite Professional", "Invicti", "sqlmap", "Postman"],
    curriculum: [
      { title: "Web Architecture & the OWASP Top 10", desc: "How modern web apps are built, and where the most common risks live." },
      { title: "Authentication & Session Testing", desc: "Login flows, session handling, token weaknesses, and MFA bypass patterns." },
      { title: "Injection Attacks", desc: "SQL injection, command injection, and XSS across reflected, stored, and DOM contexts." },
      { title: "Authorization & Business Logic", desc: "IDOR, privilege escalation, and logic flaws automated scanners miss." },
      { title: "API Security Testing", desc: "REST and GraphQL testing methodology using Burp Suite and Postman." },
      { title: "Professional Reporting", desc: "Writing a client-ready report with CVSS scoring and remediation guidance." },
    ],
    labs: ["Authentication bypass lab", "Injection exploitation lab", "IDOR and business logic lab", "Full application assessment"],
    projects: ["Complete black-box assessment of a vulnerable web application with a professional report"],
    careerOutcomes: ["Web Application Penetration Tester", "Application Security Analyst", "Security Consultant"],
    faqs: [
      { q: "Is Burp Suite Professional provided?", a: "You'll get guidance on lab-provided tooling; a personal Burp Suite license is recommended but not required to complete the course." },
      { q: "Does this cover the OWASP Top 10?", a: "Yes, and it goes beyond it into business logic and API-specific issues." },
    ],
  },
  {
    slug: "mobile-pentesting",
    title: "Mobile Application Penetration Testing",
    path: "offensive-security",
    level: "Intermediate",
    duration: "2 Months",
    delivery: "Live Online",
    tagline: "Assess Android and iOS applications with an enterprise-grade methodology.",
    overview:
      "Covers static and dynamic analysis of mobile applications, insecure storage, weak platform usage, and API communication issues — using the same tools mobile security teams use in production assessments.",
    whoShouldEnroll: ["Pentesters expanding into mobile", "Mobile developers interested in security", "Learners with web pentesting fundamentals"],
    skills: {
      technical: ["Static & dynamic analysis", "Insecure data storage detection", "API/backend communication testing", "Reverse engineering basics"],
      professional: ["Mobile-specific reporting", "Platform-aware risk assessment"],
    },
    tools: ["MobSF", "Frida", "JADX", "Burp Suite"],
    curriculum: [
      { title: "Mobile Security Fundamentals", desc: "Android and iOS security models, sandboxing, and app package structure." },
      { title: "Static Analysis", desc: "Decompiling and reviewing application code with JADX and MobSF." },
      { title: "Dynamic Analysis & Instrumentation", desc: "Runtime analysis and instrumentation using Frida." },
      { title: "Insecure Data Storage", desc: "Finding sensitive data left exposed on-device." },
      { title: "API & Backend Communication", desc: "Intercepting and testing the APIs mobile apps talk to." },
      { title: "Reporting Mobile Findings", desc: "Communicating platform-specific risk to technical and non-technical stakeholders." },
    ],
    labs: ["APK static analysis lab", "Runtime instrumentation lab", "Insecure storage discovery lab"],
    projects: ["Full assessment of a deliberately vulnerable mobile application"],
    careerOutcomes: ["Mobile Application Penetration Tester", "Application Security Analyst"],
    faqs: [
      { q: "Do I need an Android or iOS device?", a: "An Android emulator setup is used throughout the course, so a physical device is not required." },
    ],
  },
  {
    slug: "bug-bounty",
    title: "Bug Bounty Hunting",
    path: "offensive-security",
    level: "Intermediate",
    duration: "2 Months",
    delivery: "Live Online",
    tagline: "Turn your offensive security skills into an independent research practice.",
    overview:
      "Focused on the mindset, workflow, and discipline required to hunt effectively on public bug bounty programs — from scope reading and recon automation to writing reports that get triaged quickly.",
    whoShouldEnroll: ["Graduates of Web Penetration Testing", "Independent security researchers", "Anyone wanting an ongoing practice, not just a job"],
    skills: {
      technical: ["Recon automation", "Scope & target discovery", "Chaining low-severity issues into impactful findings"],
      professional: ["Program etiquette", "High-quality report writing", "Time management for independent research"],
    },
    tools: ["Burp Suite", "Nmap", "subdomain enumeration tooling", "Custom recon scripts"],
    curriculum: [
      { title: "How Bug Bounty Programs Work", desc: "Scope, rules of engagement, disclosure policy, and triage expectations." },
      { title: "Recon at Scale", desc: "Automating asset discovery across large scopes." },
      { title: "Finding Impactful Bugs", desc: "Prioritizing where to spend limited research time." },
      { title: "Chaining Vulnerabilities", desc: "Combining low-severity issues into a high-impact finding." },
      { title: "Writing Reports That Get Paid", desc: "Report structure that gets triaged quickly and rewarded fairly." },
    ],
    labs: ["Recon automation lab", "Live scope practice exercise"],
    projects: ["A submitted-quality report on a lab target, reviewed by a mentor"],
    careerOutcomes: ["Bug Bounty Researcher", "Independent Security Researcher", "Complements any offensive security role"],
    faqs: [
      { q: "Will I hunt on live programs during the course?", a: "Practice happens primarily in controlled lab environments; mentors guide you on responsibly transitioning to live programs." },
    ],
  },
  {
    slug: "soc-analyst",
    title: "SOC Analyst",
    path: "defensive-security",
    level: "Beginner",
    duration: "2 months",
    delivery: "Live Online",
    tagline: "Learn to triage, investigate, and escalate like a Tier 1–2 SOC analyst.",
    overview:
      "Puts you inside a simulated Security Operations Center, working real alerts end-to-end — from initial triage in a SIEM through investigation, MITRE ATT&CK mapping, and escalation.",
    whoShouldEnroll: ["Beginners entering cybersecurity", "IT support staff moving into security", "Anyone targeting SOC Analyst roles"],
    skills: {
      technical: ["Alert triage", "Log analysis", "SIEM operation", "MITRE ATT&CK mapping"],
      professional: ["Case documentation", "Escalation communication", "Shift-handover reporting"],
    },
    tools: ["QRadar SIEM", "Microsoft Defender XDR", "MITRE ATT&CK Navigator"],
    curriculum: [
      { title: "SOC Operations Overview", desc: "How a modern SOC is structured, tiers, and the analyst workflow." },
      { title: "Log Analysis Fundamentals", desc: "Reading logs across endpoint, network, and identity sources." },
      { title: "SIEM Triage with Microsoft Sentinel", desc: "Working real alert queues in a live-style SIEM environment." },
      { title: "Endpoint Investigation with Defender XDR", desc: "Pivoting from alert to root cause using XDR telemetry." },
      { title: "MITRE ATT&CK in Practice", desc: "Mapping observed behavior to attacker tactics and techniques." },
      { title: "Escalation & Documentation", desc: "Writing the case notes and handover reports a Tier 2 analyst expects." },
    ],
    labs: ["Alert triage queue simulation", "Endpoint investigation lab", "MITRE ATT&CK mapping exercise", "Full incident case study"],
    projects: ["A closed investigation case file from alert to resolution"],
    careerOutcomes: ["SOC Analyst (Tier 1/2)", "Security Monitoring Analyst"],
    faqs: [
      { q: "Are the alerts realistic?", a: "Yes — the lab environment generates alert scenarios modeled on real-world attack patterns." },
    ],
  },
  {
    slug: "microsoft-defender-xdr",
    title: "Microsoft Defender XDR",
    path: "defensive-security",
    level: "Intermediate",
    duration: "2 Months",
    delivery: "Live Online",
    tagline: "Operate and investigate with Microsoft's extended detection and response platform.",
    overview:
      "A deep, hands-on course on Microsoft Defender XDR — from portal navigation and alert investigation to advanced hunting with Kusto Query Language (KQL) and automated response configuration.",
    whoShouldEnroll: ["SOC Analysts", "IT administrators managing Microsoft 365 security", "Learners on the Defensive Security path"],
    skills: {
      technical: ["Defender XDR portal operation", "Advanced hunting with KQL", "Automated investigation & response", "Endpoint & identity correlation"],
      professional: ["Investigation documentation", "Threat prioritization"],
    },
    tools: ["Microsoft Defender XDR", "KQL", "Microsoft 365 Defender portal"],
    curriculum: [
      { title: "Defender XDR Architecture", desc: "How Defender for Endpoint, Identity, Office, and Cloud Apps work together." },
      { title: "Alert Investigation Workflow", desc: "Navigating incidents and correlating signals across workloads." },
      { title: "Advanced Hunting with KQL", desc: "Writing hunting queries to surface threats proactively." },
      { title: "Automated Investigation & Response", desc: "Configuring automation to reduce analyst workload safely." },
      { title: "Identity & Endpoint Correlation", desc: "Connecting identity signals to endpoint behavior for full-picture investigations." },
    ],
    labs: ["Portal walkthrough & configuration lab", "KQL hunting lab", "Incident correlation exercise"],
    projects: ["Investigate and document a multi-stage simulated incident in Defender XDR"],
    careerOutcomes: ["SOC Analyst", "Security Engineer", "Microsoft Security Administrator"],
    faqs: [
      { q: "Do I need a Microsoft 365 tenant?", a: "A shared lab tenant is provided for the duration of the course." },
    ],
  },
  {
    slug: "QRadar SIEM",
    title: "QRadar SIEM",
    path: "defensive-security",
    level: "Intermediate",
    duration: "2 Months",
    delivery: "Live Online",
    tagline: "Build detections and run investigations in a cloud-native SIEM.",
    overview:
      "Covers Microsoft Sentinel from data connector configuration through analytics rule creation, workbook dashboards, and SOAR-style automation with playbooks.",
    whoShouldEnroll: ["SOC Analysts", "Learners who completed Defender XDR", "Anyone targeting SIEM engineering roles"],
    skills: {
      technical: ["Data connector configuration", "Analytics rule creation", "KQL for detection engineering", "Automation with playbooks"],
      professional: ["Detection documentation", "Tuning for false-positive reduction"],
    },
    tools: ["QRadar SIEM", "Query Language", "Logic Apps"],
    curriculum: [
      { title: "QRadar Architecture", desc: "Workspaces, data connectors, and the log analytics pipeline." },
      { title: "Analytics Rules & Detection Engineering", desc: "Building rules that catch real threats without alert fatigue." },
      { title: "Workbooks & Dashboards", desc: "Visualizing security data for analysts and leadership." },
      { title: "Automation with Playbooks", desc: "Using Logic Apps to automate response actions." },
      { title: "Threat Hunting in Sentinel", desc: "Proactive hunting workflows using hunting queries and notebooks." },
    ],
    labs: ["Connector configuration lab", "Custom detection rule lab", "Playbook automation lab"],
    projects: ["Design and deploy a detection rule set for a simulated environment"],
    careerOutcomes: ["SOC Analyst", "Detection Engineer", "Security Operations Engineer"],
    faqs: [{ q: "Is QL taught from scratch?", a: "Yes — no prior QL experience is required." }],
  },
  {
    slug: "crowdstrike-falcon",
    title: "CrowdStrike Falcon",
    path: "defensive-security",
    level: "Intermediate",
    duration: "2 Months",
    delivery: "Live Online",
    tagline: "Endpoint detection and response with an industry-leading EDR platform.",
    overview:
      "Hands-on training on the CrowdStrike Falcon platform — endpoint monitoring, detection triage, threat graph investigation, and response actions used by enterprise EDR teams.",
    whoShouldEnroll: ["SOC Analysts", "Incident responders", "Learners on the Defensive Security path"],
    skills: {
      technical: ["Falcon console operation", "Detection triage", "Threat graph investigation", "Response actions & containment"],
      professional: ["Incident timeline reconstruction", "Stakeholder communication during incidents"],
    },
    tools: ["CrowdStrike Falcon"],
    curriculum: [
      { title: "EDR Fundamentals & Falcon Overview", desc: "How endpoint detection and response fits in a modern security stack." },
      { title: "Detection Triage", desc: "Working the Falcon detection queue and prioritizing response." },
      { title: "Threat Graph Investigation", desc: "Tracing process trees and lateral movement." },
      { title: "Containment & Response Actions", desc: "Isolating endpoints and executing response workflows safely." },
    ],
    labs: ["Detection triage lab", "Threat graph investigation lab", "Containment exercise"],
    projects: ["Investigate and contain a simulated endpoint compromise"],
    careerOutcomes: ["SOC Analyst", "Incident Responder", "Endpoint Security Engineer"],
    faqs: [{ q: "Is this course vendor-certified?", a: "This is independent Hackverge training on the platform, not an official CrowdStrike certification." }],
  },
{
  slug: "trend-vision-one",
  title: "Trend Vision One",
  path: "enterprise-security",
  level: "Intermediate",
  duration: "2 Months",
  delivery: "Live Online",
  tagline: "Master unified XDR and threat intelligence across multi-cloud and enterprise environments.",
  overview:
    "Covers Trend Vision One's centralized XDR platform — telemetry integration, threat detection, risk posture management, and automated incident response across endpoint, network, email, and cloud workloads.",
  whoShouldEnroll: ["SOC analysts", "Learners on the Enterprise Security path", "Security engineers focused on threat detection & XDR"],
  skills: {
    technical: ["Unified XDR telemetry analysis", "Cross-layer threat hunting", "Risk index & posture monitoring", "Automated incident response playbook execution"],
    professional: ["Incident response reporting", "Risk-based prioritization"],
  },
  tools: ["Trend Vision One"],
  curriculum: [
    { title: "XDR Fundamentals & Platform Overview", desc: "Understanding extended detection and response across endpoint, network, and cloud telemetry." },
    { title: "Telemetry Integration & Sensor Deployment", desc: "Connecting enterprise data sources and managing agent security posture." },
    { title: "Threat Hunting & Workbench Analysis", desc: "Investigating multi-vector attacks and correlated detections in real time." },
    { title: "Risk Posture & Incident Response", desc: "Evaluating attack surfaces and automating containment actions across connected endpoints." },
  ],
  labs: ["Sensor deployment & integration lab", "Cross-layer threat hunting lab", "Incident containment & response exercise"],
  projects: ["Build an automated threat triage and incident response workflow for a simulated enterprise environment"],
  careerOutcomes: ["SOC Analyst", "XDR Engineer", "Security Operations Engineer"],
  faqs: [{ q: "Do I need prior SOC experience?", a: "Basic networking and fundamental security concepts are helpful but not required." }],
},
  {
    slug: "delinea-pam",
    title: "Delinea PAM",
    path: "enterprise-security",
    level: "Intermediate",
    duration: "2 Months",
    delivery: "Live Online",
    tagline: "A second major PAM platform to broaden your enterprise identity skill set.",
    overview:
      "Focused, practical training on Delinea's privileged access platform — useful as a comparative second PAM tool for learners aiming for broad enterprise identity coverage.",
    whoShouldEnroll: ["Learners who completed CyberArk PAM", "Security engineers wanting multi-platform PAM experience"],
    skills: {
      technical: ["Secret Server administration", "Privileged session management", "Policy & role configuration"],
      professional: ["Cross-platform PAM comparison", "Migration planning basics"],
    },
    tools: ["Delinea Secret Server"],
    curriculum: [
      { title: "Delinea Platform Overview", desc: "Architecture and how it compares to other PAM platforms." },
      { title: "Secret & Credential Management", desc: "Storing and rotating privileged secrets." },
      { title: "Session Management & Auditing", desc: "Monitoring privileged sessions and generating audit trails." },
    ],
    labs: ["Secret Server configuration lab", "Auditing exercise"],
    projects: ["Configure a policy set and document the audit trail it produces"],
    careerOutcomes: ["IAM/PAM Engineer", "Security Engineer"],
    faqs: [{ q: "Is CyberArk PAM a prerequisite?", a: "Recommended but not required — the core PAM concepts are reintroduced." }],
  },
  
 {
  slug: "forcepoint-dlp",
  title: "Forcepoint DLP",
  path: "enterprise-security",
  level: "Expert",
  duration: "3 Months",
  delivery: "Live Online",
  tagline: "Protect critical data assets and prevent data exfiltration across web, cloud, and endpoint channels.",
  overview:
    "Covers Forcepoint Data Loss Prevention capabilities — data discovery, fingerprinted IP protection, custom policy enforcement, and Incident Risk Ranking (IRR) to secure sensitive information across endpoints, networks, and cloud storage.",
  whoShouldEnroll: ["Enterprise Security path learners", "Compliance-minded IT professionals", "Security engineers focused on data protection"],
  skills: {
    technical: ["Exact Data Matching (EDM) & fingerprinting", "Forcepoint DLP policy design", "Endpoint & network discovery", "Incident Risk Ranking (IRR) analysis"],
    professional: ["Compliance-aligned documentation", "Cross-team policy communication"],
  },
  tools: ["Forcepoint DLP"],
  curriculum: [
    { title: "Data Loss Prevention Fundamentals", desc: "Understanding data exfiltration vectors and how Forcepoint DLP mitigates data loss risks." },
    { title: "Data Classification & Fingerprinting", desc: "Configuring classifiers, regex patterns, and optical character recognition (OCR) to identify sensitive data." },
    { title: "Policy Design & Enforcement", desc: "Building granular channel policies across endpoints, network channels, and cloud applications." },
    { title: "Incident Triage & Risk Analysis", desc: "Investigating DLP alerts, analyzing user risk severity, and executing remediation workflows." },
  ],
  labs: ["Data fingerprinting & classifier lab", "Policy design & channel enforcement lab", "Incident triage & IRR exercise"],
  projects: ["Design a Forcepoint DLP policy framework for a simulated data exfiltration scenario"],
  careerOutcomes: ["Enterprise Security Analyst", "DLP Administrator", "Compliance & Data Protection Analyst"],
  faqs: [{ q: "Is this course compliance-focused or technical?", a: "Both — you'll learn technical system administration and policy design aligned with industry compliance frameworks." }],
},
  
  {
    slug: "vulnerability-management",
    title: "Vulnerability Management",
    path: "enterprise-security",
    level: "Intermediate",
    duration: "2 Months",
    delivery: "Live Online",
    tagline: "Run the full lifecycle from scanning to remediation tracking.",
    overview:
      "Covers the complete vulnerability management lifecycle — asset discovery, scanning, risk-based prioritization, and remediation tracking used by enterprise security teams.",
    whoShouldEnroll: ["Enterprise Security path learners", "IT administrators", "Anyone targeting security engineering roles"],
    skills: {
      technical: ["Asset discovery", "Vulnerability scanning", "Risk-based prioritization (CVSS)", "Remediation tracking"],
      professional: ["Stakeholder reporting", "Risk communication to non-technical teams"],
    },
    tools: ["Qualys", "Acunetix", "Invicti"],
    curriculum: [
      { title: "Vulnerability Management Lifecycle", desc: "Discover, assess, prioritize, remediate, verify — the full cycle." },
      { title: "Scanning Fundamentals", desc: "Configuring and running scans with minimal operational disruption." },
      { title: "Risk-Based Prioritization", desc: "Using CVSS and business context to prioritize remediation." },
      { title: "Remediation Tracking & Reporting", desc: "Closing the loop with IT teams and reporting to leadership." },
    ],
    labs: ["Scan configuration lab", "Prioritization exercise", "Remediation tracking simulation"],
    projects: ["Run a full vulnerability management cycle on a lab environment"],
    careerOutcomes: ["Vulnerability Management Analyst", "Security Engineer", "Enterprise Security Analyst"],
    faqs: [{ q: "Which scanners are used?", a: "The course uses Qualys and Nessus, two of the most widely deployed enterprise scanners." }],
  },
  {
    slug: "patch-management",
    title: "Patch Management",
    path: "enterprise-security",
    level: "Expert",
    duration: "3 Months",
    delivery: "Live Online",
    tagline: "Close the gap between vulnerability discovery and remediation.",
    overview:
      "A focused course on enterprise patch management — scheduling, testing, deployment, and exception handling that keeps organizations protected without breaking production systems.",
    whoShouldEnroll: ["IT administrators", "Enterprise Security path learners", "Anyone pairing this with Vulnerability Management"],
    skills: {
      technical: ["Patch scheduling & deployment", "Testing & staged rollouts", "Exception handling", "Compliance tracking"],
      professional: ["Change management communication", "Downtime risk planning"],
    },
    tools: ["Ivanti", "Patch management tooling"],
    curriculum: [
      { title: "Patch Management Fundamentals", desc: "Why patching is a top-priority control and where it commonly fails." },
      { title: "Testing & Staged Rollouts", desc: "Reducing risk before deploying patches broadly." },
      { title: "Exception Handling", desc: "Managing systems that can't be patched on schedule." },
      { title: "Compliance & Reporting", desc: "Tracking patch compliance across an enterprise fleet." },
    ],
    labs: ["Staged rollout simulation", "Exception handling exercise"],
    projects: ["Build a patch management plan for a simulated enterprise fleet"],
    careerOutcomes: ["Enterprise Security Analyst", "IT Security Administrator"],
    faqs: [{ q: "Does this pair well with Vulnerability Management?", a: "Yes — many learners take them back-to-back since they form one continuous risk-reduction workflow." }],
  },
];

// ------------------------------------------------------------
// Career Services
// ------------------------------------------------------------
export const careerServices = [
  { title: "Resume Review", icon: "fileText", desc: "One-on-one review of your resume to highlight practical, employer-relevant experience." },
  { title: "LinkedIn Profile Review", icon: "linkedin", desc: "Position your profile so recruiters immediately understand your skills." },
  { title: "Technical Interview Preparation", icon: "terminal", desc: "Practice explaining your technical thinking clearly and confidently." },
  { title: "Mock Interviews", icon: "users", desc: "Realistic mock interviews with feedback from mentors, including scenario-based questions." },
  { title: "Portfolio Review", icon: "layers", desc: "Feedback on lab write-ups, reports, and projects before you show them to employers." },
  { title: "Career Mentoring", icon: "compass", desc: "Ongoing guidance on career direction, skill gaps, and next steps." },
];

// ------------------------------------------------------------
// Instructors (placeholder profiles — replace with real team info)
// ------------------------------------------------------------
export const instructors = [
  {
    slug: "founder-lead-instructor",
    name: "Founder & Lead Instructor",
    role: "Founder, Hackverge",
    bio: "Leads Hackverge's curriculum design and offensive security instruction, with a background spanning penetration testing and enterprise security consulting. Placeholder profile — replace with your real name, photo, and bio.",
    expertise: ["Web Application Security", "Penetration Testing", "Curriculum Design"],
    years: "8+ Years",
    linkedin: "#",
  },
  {
    slug: "blue-team-mentor",
    name: "Blue Team Mentor",
    role: "SOC & Detection Engineering Mentor",
    bio: "Guides SOC Analyst and Defensive Security learners through real-world triage and detection engineering workflows. Placeholder profile — replace with your real mentor's details.",
    expertise: ["SOC Operations", "Microsoft Sentinel", "Threat Hunting"],
    years: "6+ Years",
    linkedin: "#",
  },
  {
    slug: "enterprise-security-mentor",
    name: "Enterprise Security Mentor",
    role: "Identity & Data Protection Mentor",
    bio: "Brings enterprise experience in privileged access management and data protection to the Enterprise Security path. Placeholder profile — replace with your real mentor's details.",
    expertise: ["CyberArk", "Microsoft Purview", "Vulnerability Management"],
    years: "7+ Years",
    linkedin: "#",
  },
];

// ------------------------------------------------------------
// Testimonials (mark clearly as placeholder/template until real ones exist)
// ------------------------------------------------------------
export const testimonials = [
  {
    name: "Student Project Spotlight",
    role: "Offensive Security Learner",
    quote:
      "The labs helped me understand how enterprise tools are actually used, not just what they're called. Replace this with a real student testimonial once available.",
    path: "Offensive Security",
  },
  {
    name: "Student Project Spotlight",
    role: "Blue Team Learner",
    quote:
      "Working real alert queues in Sentinel made SOC concepts click in a way videos never did. Replace this with a real student testimonial once available.",
    path: "Defensive Security",
  },
  {
    name: "Student Project Spotlight",
    role: "Enterprise Security Learner",
    quote:
      "I finally understood how PAM and DLP fit together in a real enterprise, not just in theory. Replace this with a real student testimonial once available.",
    path: "Enterprise Security",
  },
];

// ------------------------------------------------------------
// Blog posts
// ------------------------------------------------------------
export const blogPosts = [
  {
    slug: "understanding-xdr",
    title: "Understanding XDR: Why Enterprise SOCs Moved Beyond Traditional Antivirus",
    category: "SOC",
    tags: ["XDR", "SOC", "Defensive Security"],
    author: "Hackverge Team",
    date: "2026-06-02",
    readTime: "7 min read",
    difficulty: "Beginner",
    excerpt: "Extended Detection and Response consolidates signals across endpoints, identity, and cloud apps. Here's why that consolidation matters more than any single detection rule.",
    body: [
      "Traditional antivirus makes decisions with one signal: what's happening on a single endpoint. Extended Detection and Response, or XDR, correlates signals across endpoints, identity, email, and cloud applications to see the full story of an attack, not just one chapter of it.",
      "Consider a credential phishing email that leads to a suspicious sign-in, followed by unusual PowerShell activity on a laptop. Looked at separately, each event might look survivable. Correlated together, they clearly describe a single intrusion in progress.",
      "That correlation is why SOC teams have shifted budget and attention toward XDR platforms like Microsoft Defender XDR and CrowdStrike Falcon. Analysts spend less time pivoting between disconnected tools and more time acting on a prioritized, connected picture of risk.",
      "For anyone starting a SOC Analyst career, understanding this shift matters more than memorizing a specific product's menus. The skill that transfers between employers is knowing how to read a correlated incident and reconstruct what actually happened.",
    ],
  },
  {
    slug: "owasp-top-10-explained",
    title: "The OWASP Top 10, Explained the Way We Teach It",
    category: "Web Security",
    tags: ["OWASP", "Web Security", "Offensive Security"],
    author: "Hackverge Team",
    date: "2026-05-18",
    readTime: "9 min read",
    difficulty: "Beginner",
    excerpt: "The OWASP Top 10 is often memorized as a list. We teach it as a way of thinking about where trust breaks down in a web application.",
    body: [
      "Most learners meet the OWASP Top 10 as a list to memorize: injection, broken authentication, and so on. That's a reasonable starting point, but it misses the pattern underneath the list.",
      "Almost every category on the Top 10 comes down to one question: where does this application trust input, identity, or configuration that it shouldn't? Injection is misplaced trust in input. Broken access control is misplaced trust in a request's origin. Security misconfiguration is misplaced trust that defaults are safe.",
      "Teaching it this way changes how learners test. Instead of running through a checklist, they start asking 'what is this system trusting right now, and is that trust earned?' That question generalizes to vulnerabilities the list hasn't caught up to yet.",
      "In our Web Application Penetration Testing course, every OWASP category is paired with a guided lab so the concept is tested hands-on, not just read about.",
    ],
  },
  {
    slug: "building-a-cybersecurity-portfolio",
    title: "Building a Cybersecurity Portfolio That Actually Gets Noticed",
    category: "Career Advice",
    tags: ["Career Advice", "Portfolio"],
    author: "Hackverge Team",
    date: "2026-05-04",
    readTime: "6 min read",
    difficulty: "Beginner",
    excerpt: "Certificates tell an employer what you studied. A portfolio shows them what you can do. Here's how to build one from the labs and projects you already have.",
    body: [
      "Certificates answer 'what did you study?' A portfolio answers the question every hiring manager actually cares about: 'what can you do?'",
      "The good news is you don't need a job to start one. Every lab write-up, vulnerability report, or incident investigation you complete during training is raw material. The work is turning that raw material into something a stranger can understand in five minutes.",
      "A strong portfolio piece includes: the objective, your methodology, what you found, and — critically — how you'd explain the risk to someone non-technical. That last part is what separates a portfolio that gets noticed from a folder of screenshots.",
      "Start with two or three of your best lab reports. Clean them up, anonymize anything that needs it, and publish them somewhere a recruiter can find with one click.",
    ],
  },
  {
    slug: "how-siem-works",
    title: "How a SIEM Actually Works (Without the Marketing Language)",
    category: "SOC",
    tags: ["SIEM", "SOC", "Tool Guides"],
    author: "Hackverge Team",
    date: "2026-04-21",
    readTime: "8 min read",
    difficulty: "Beginner",
    excerpt: "A SIEM is often described as 'the brain of the SOC.' It's really a pipeline. Understanding the pipeline is what makes analysts effective.",
    body: [
      "Strip away the marketing language and a SIEM is a pipeline with four jobs: collect logs from many sources, normalize them into a common format, correlate events against detection rules, and surface the results for a human to act on.",
      "Most new analysts start at the fourth step — staring at an alert — without understanding the first three. That's a problem, because tuning out false positives and understanding why an alert fired both require knowing what happened upstream.",
      "In Microsoft Sentinel, for example, a single suspicious sign-in alert is downstream of a data connector ingesting Entra ID logs, a normalization schema making that data queryable, and an analytics rule written in KQL that defines 'suspicious' in the first place.",
      "Understanding the pipeline is what lets an analyst eventually write their own detection rules instead of only reacting to the ones someone else built.",
    ],
  },
  {
    slug: "cybersecurity-interview-preparation",
    title: "5 Questions to Prepare For Before Your Next Cybersecurity Interview",
    category: "Interview Preparation",
    tags: ["Interview Preparation", "Career Advice"],
    author: "Hackverge Team",
    date: "2026-03-30",
    readTime: "5 min read",
    difficulty: "Beginner",
    excerpt: "Cybersecurity interviews test more than tool knowledge. They test how you reason under uncertainty. Here's how to prepare for that.",
    body: [
      "Interviewers rarely care whether you've memorized every menu in a tool. They care whether you can reason clearly when the answer isn't obvious.",
      "Be ready to walk through: how you'd triage an alert with incomplete information, how you'd explain a technical finding to a non-technical stakeholder, and how you've handled being wrong about an initial assessment.",
      "Also expect scenario questions with no single correct answer — 'what would you do first' matters more than a perfect final answer. Interviewers are watching your process.",
      "Finally, prepare two or three stories from your labs or projects that you can walk through in detail. Specific, real examples beat general statements about being a 'quick learner' every time.",
    ],
  },
];

// ------------------------------------------------------------
// Site-wide FAQs (used on homepage)
// ------------------------------------------------------------
export const homeFaqs = [
  { q: "Who is Hackverge for?", a: "University students, fresh graduates, career switchers from IT, and junior security professionals who want practical, enterprise-relevant skills rather than theory alone." },
  { q: "Do I need experience to start?", a: "No. Learning paths are designed with a beginner-friendly entry point, and each path clearly states its recommended starting level." },
  { q: "Are classes live?", a: "Yes. Courses are delivered live online with instructor interaction, not pre-recorded video libraries." },
  { q: "Will I receive certificates?", a: "Yes, learners receive a Hackverge certificate of completion for each course. These are training certificates, not vendor certifications." },
  { q: "Do you provide career guidance?", a: "Yes — Career Services includes resume review, mock interviews, portfolio review, and career mentoring for enrolled learners." },
  { q: "How are labs delivered?", a: "Through a dedicated hands-on lab environment, guided by instructors and available to enrolled students." },
];

// ------------------------------------------------------------
// Stats used in hero / HUD-style readouts
// ------------------------------------------------------------
export const stats = [
  { value: "13+", label: "Enterprise Courses" },
  { value: "15+", label: "Enterprise Technologies" },
  { value: "3", label: "Career Learning Paths" },
  { value: "100%", label: "Live Instruction" },
];

export function getCourse(slug) {
  return courses.find((c) => c.slug === slug);
}
export function getPath(slug) {
  return learningPaths.find((p) => p.slug === slug);
}
export function coursesForPath(slug) {
  return courses.filter((c) => c.path === slug);
}
export function getPost(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
