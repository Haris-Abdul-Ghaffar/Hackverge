import { icon } from "../icons.mjs";
import { breadcrumbs, sectionHeading, button, faqAccordion, ctaSection, techGrid, networkGraphic } from "../components.mjs";
import { technologies } from "../data.mjs";

export function enterpriseLabsBody() {
  return `
<section class="page-hero">
  <div class="container">
    ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Enterprise Labs" }])}
    <p class="eyebrow">Enterprise Labs</p>
    <h1>Learn by Doing. Train Like a Cybersecurity Professional.</h1>
    <p class="page-hero__sub">Practical experience is the foundation of cybersecurity expertise. Hackverge Enterprise Labs let you work with enterprise technologies, realistic attack scenarios, guided exercises, and professional workflows in a structured learning environment.</p>
    <div class="page-hero__actions">
      ${button({ label: "Explore Learning Paths", href: "/learning-paths/", variant: "primary", icon: "arrowRight" })}
      ${button({ label: "Apply Now", href: "/apply/", variant: "ghost-onDark" })}
    </div>
  </div>
</section>

${whyLabs()}
${philosophy()}
${categories()}
${techStack()}
${scenarios()}
${lifecycle()}
${deliverables()}
${faqs()}
${ctaSection({
  title: "Build Skills That Employers Can See",
  sub: "Learn through practical experience, enterprise technologies, and guided mentorship.",
  primary: { label: "Explore Courses", href: "/courses/" },
  secondary: { label: "Apply Now", href: "/apply/" },
})}
`;
}

function whyLabs() {
  const rows = [
    ["Watch Videos", "Work in Labs"],
    ["Memorize", "Practice"],
    ["Read Reports", "Write Reports"],
    ["Theory", "Enterprise Simulation"],
    ["Passive", "Hands-On"],
    ["Individual", "Mentor Guided"],
  ];
  return `<section class="section">
  <div class="container">
    ${sectionHeading({ eyebrow: "Why Enterprise Labs", title: "The Difference Between Watching and Practicing" })}
    <div class="table-wrap">
      <table class="compare">
        <thead><tr><th>Traditional Learning</th><th>Hackverge Labs</th></tr></thead>
        <tbody>${rows.map((r) => `<tr><td>${r[0]}</td><td style="color:var(--purple-400);font-weight:600">${r[1]}</td></tr>`).join("")}</tbody>
      </table>
    </div>
  </div>
</section>`;
}

function philosophy() {
  const flow = ["Learn", "Watch Demo", "Guided Lab", "Independent Lab", "Project", "Review", "Improve"];
  return `<section class="section section--alt">
  <div class="container split">
    <div>
      <p class="eyebrow">Lab Philosophy</p>
      <h2>Every Skill Must Be Practiced</h2>
      <p>Reading about incident response is not the same as responding to an incident. Reading about XDR is not the same as using Microsoft Defender XDR. Reading about PAM is not the same as configuring CyberArk. Every topic in every Hackverge course follows the same practice cycle:</p>
      <div class="flow" style="margin-top:20px">
        ${flow.map((s, i) => `<span class="flow__step">${s}</span>${i < flow.length - 1 ? `<span class="flow__arrow">${icon("arrowRight", 14)}</span>` : ""}`).join("")}
      </div>
    </div>
    <div class="split__visual">${networkGraphic({ id: "philosophy", compact: true })}</div>
  </div>
</section>`;
}

function categories() {
  const cats = [
    { title: "Offensive Security Labs", icon: "target", items: ["Reconnaissance", "Authentication Testing", "Authorization Testing", "SQL Injection", "XSS", "CSRF", "Business Logic", "API Testing", "Mobile Security", "Reporting"] },
    { title: "Defensive Security Labs", icon: "shield", items: ["Alert Investigation", "Threat Hunting", "Incident Response", "MITRE ATT&CK", "Log Analysis", "Detection Rules", "Threat Intelligence"] },
    { title: "Enterprise Security Labs", icon: "server", items: ["PAM", "DLP", "Patch Management", "Vulnerability Management", "Policy Configuration", "Compliance", "Risk Assessment"] },
    { title: "Cloud Security Labs", icon: "cloud", items: ["Azure", "AWS", "Microsoft Defender for Cloud", "Identity"], soon: true },
  ];
  return `<section class="section">
  <div class="container">
    ${sectionHeading({ eyebrow: "Lab Categories", title: "Structured Around Real Career Paths" })}
    <div class="grid grid--4">
      ${cats
        .map(
          (c) => `<div class="card" style="${c.soon ? "opacity:.75" : ""}">
        <span class="card__icon">${icon(c.icon, 22)}</span>
        <h3>${c.title} ${c.soon ? '<span class="badge badge--soon" style="margin-left:6px">Soon</span>' : ""}</h3>
        <div class="pill-list">${c.items.map((i) => `<span class="tag-chip">${i}</span>`).join("")}</div>
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>`;
}

function techStack() {
  return `<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "Enterprise Technologies", title: "Tools You'll Actually Work With" })}
    ${techGrid(technologies)}
  </div>
</section>`;
}

function scenarios() {
  const items = [
    { title: "SOC Scenario", desc: "A suspicious PowerShell execution triggers an endpoint alert. Investigate the activity, determine whether it is malicious, document your findings, and recommend containment steps." },
    { title: "Web Security Scenario", desc: "A web application is suspected of having insecure authorization. Analyze the behavior, identify the issue, assess the impact, and prepare a professional report." },
    { title: "PAM Scenario", desc: "Review privileged account access, identify policy weaknesses, and recommend improvements to strengthen administrative access controls." },
    { title: "DLP Scenario", desc: "Evaluate a simulated data movement event and determine whether it violates organizational policy. Recommend appropriate actions." },
  ];
  return `<section class="section">
  <div class="container">
    ${sectionHeading({ eyebrow: "Real-World Scenarios", title: "You'll Solve Problems, Not Just Follow Steps" })}
    <div class="grid grid--2">
      ${items.map((i) => `<div class="card"><h3>${i.title}</h3><p>${i.desc}</p></div>`).join("")}
    </div>
  </div>
</section>`;
}

function lifecycle() {
  const steps = ["Objective", "Background", "Environment Setup", "Task List", "Hints", "Execution", "Validation", "Review", "Discussion", "Report Submission"];
  return `<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "Lab Lifecycle", title: "Every Lab Follows the Same Professional Structure", align: "center" })}
    <div class="timeline">
      ${steps.map((s, i) => `<div class="timeline__step" style="flex-basis:160px"><span class="timeline__num">${String(i + 1).padStart(2, "0")}</span><h4 style="margin-top:8px;font-size:0.95rem">${s}</h4></div>${i < steps.length - 1 ? `<span class="timeline__arrow">${icon("arrowRight", 18)}</span>` : ""}`).join("")}
    </div>
  </div>
</section>`;
}

function deliverables() {
  const items = ["Technical notes", "Screenshots", "Investigation timeline", "Vulnerability report", "Incident report", "Risk assessment", "Configuration checklist"];
  return `<section class="section">
  <div class="container narrow center">
    ${sectionHeading({ eyebrow: "Student Deliverables", title: "Every Lab Produces Something Tangible", align: "center", sub: "These deliverables can contribute directly to your professional portfolio." })}
    <div class="pill-list" style="justify-content:center">${items.map((i) => `<span class="badge">${i}</span>`).join("")}</div>
  </div>
</section>`;
}

function faqs() {
  const items = [
    { q: "Are labs live or self-paced?", a: "Labs are introduced live with instructor guidance, then available for self-paced independent practice." },
    { q: "Will mentors assist during labs?", a: "Yes — mentors are available during guided lab sessions and for questions on independent practice." },
    { q: "Do I need prior experience?", a: "No. Labs are scaffolded from guided walkthroughs to independent challenges as you progress." },
    { q: "Can I repeat labs?", a: "Yes, enrolled students can revisit labs to reinforce skills." },
    { q: "Do I receive feedback?", a: "Yes — mentors review lab deliverables and provide feedback." },
    { q: "Are labs available after class?", a: "Enrolled students retain lab access for the duration of their course." },
  ];
  return `<section class="section section--alt">
  <div class="container narrow">
    ${sectionHeading({ eyebrow: "FAQ", title: "Questions About Enterprise Labs", align: "center" })}
    ${faqAccordion(items, "labs")}
  </div>
</section>`;
}
