import { icon } from "../icons.mjs";
import { breadcrumbs, sectionHeading, button, faqAccordion, ctaSection } from "../components.mjs";
import { careerServices } from "../data.mjs";

export function careerServicesBody() {
  return `
<section class="page-hero">
  <div class="container">
    ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Career Services" }])}
    <p class="eyebrow">Career Services</p>
    <h1>Build More Than Skills. Build a Career.</h1>
    <p class="page-hero__sub">Hackverge combines practical cybersecurity education with professional development to help learners present their skills confidently.</p>
    <div class="page-hero__actions">
      ${button({ label: "Start Your Journey", href: "/apply/", variant: "primary", icon: "arrowRight" })}
      ${button({ label: "Explore Learning Paths", href: "/learning-paths/", variant: "ghost-onDark" })}
    </div>
  </div>
</section>

${philosophy()}
${services()}
${portfolio()}
${interviewPrep()}
${internships()}
${employerConnections()}
${faqs()}
${ctaSection({
  title: "Prepare for Your Next Professional Opportunity",
  primary: { label: "Apply Now", href: "/apply/" },
  secondary: { label: "Schedule a Consultation", href: "/contact/" },
})}
`;
}

function philosophy() {
  const items = ["Communication", "Documentation", "Problem Solving", "Professional Conduct", "Interview Preparation", "Continuous Learning"];
  return `<section class="section">
  <div class="container narrow center">
    ${sectionHeading({ eyebrow: "Career Philosophy", title: "Technical Knowledge Is Only Half of Career Success", align: "center" })}
    <div class="pill-list" style="justify-content:center">${items.map((i) => `<span class="tag-chip" style="font-size:0.9rem;padding:10px 16px">${i}</span>`).join("")}</div>
  </div>
</section>`;
}

function services() {
  return `<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "Professional Development Services", title: "What's Included" })}
    <div class="grid grid--3">
      ${careerServices
        .map(
          (s) => `<div class="card">
        <span class="card__icon">${icon(s.icon, 22)}</span>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>`;
}

function portfolio() {
  const items = ["Penetration testing reports", "Incident response documentation", "Security architecture diagrams", "Lab write-ups", "Personal projects", "GitHub repositories (where appropriate)"];
  return `<section class="section">
  <div class="container">
    ${sectionHeading({ eyebrow: "Portfolio Development", title: "Showcase Real, Practical Work" })}
    <ul class="check-list grid grid--2" style="gap:12px 24px">${items.map((i) => `<li>${icon("layers", 18)} ${i}</li>`).join("")}</ul>
  </div>
</section>`;
}

function interviewPrep() {
  const items = ["Technical interview practice", "HR interview guidance", "Scenario-based questions", "Report presentation", "Communication coaching"];
  return `<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "Interview Preparation", title: "Practice Before It Counts" })}
    <ul class="check-list grid grid--2" style="gap:12px 24px">${items.map((i) => `<li>${icon("users", 18)} ${i}</li>`).join("")}</ul>
    <p style="margin-top:16px;font-size:0.9rem">Interview success depends on individual preparation and performance — Hackverge provides structured practice, not guaranteed outcomes.</p>
  </div>
</section>`;
}

function internships() {
  return `<section class="section">
  <div class="container narrow">
    <div class="disclosure-note">
      <strong>Internship Opportunities:</strong> High-performing learners may be considered for internship opportunities, subject to availability, performance, and program requirements.
    </div>
  </div>
</section>`;
}

function employerConnections() {
  const items = ["Employer networking events", "Guest industry speakers", "Hiring partnerships", "Career fairs"];
  return `<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "Employer Connections", title: "Roadmap: Coming Soon" })}
    <div class="pill-list">${items.map((i) => `<span class="badge badge--soon">${i}</span>`).join("")}</div>
  </div>
</section>`;
}

function faqs() {
  const items = [
    { q: "Does Hackverge guarantee jobs?", a: "No. Hackverge does not guarantee employment. We provide practical training and career development support to help you present your skills effectively." },
    { q: "Will I receive interview preparation?", a: "Yes — mock interviews and interview coaching are included in Career Services for enrolled learners." },
    { q: "Can beginners use Career Services?", a: "Yes, Career Services is available to learners at any stage, though it's most effective once you have lab work and projects to draw on." },
    { q: "How are mock interviews conducted?", a: "Live, one-on-one or small-group sessions with a mentor, including technical and scenario-based questions." },
    { q: "How do I build a cybersecurity portfolio?", a: "Starting with your lab write-ups and course projects — Career Services includes guidance on selecting and polishing pieces for a portfolio." },
  ];
  return `<section class="section">
  <div class="container narrow">
    ${sectionHeading({ eyebrow: "FAQ", title: "Questions About Career Services", align: "center" })}
    ${faqAccordion(items, "career")}
  </div>
</section>`;
}
