import { icon } from "../icons.mjs";
import {
  breadcrumbs, sectionHeading, button, faqAccordion, ctaSection, techGrid, networkGraphic,
} from "../components.mjs";
import { learningPaths, futurePaths, technologies, courses, getPath, coursesForPath } from "../data.mjs";

// ------------------------------------------------------------
// Index
// ------------------------------------------------------------
export function learningPathsIndexBody() {
  return `
${hero()}
<div class="container">${breadcrumbs([{ label: "Home", href: "/" }, { label: "Learning Paths" }])}</div>
${careerOverview()}
${pathCards()}
${comparison()}
${enterpriseTechMap()}
${learningJourney()}
${faqs()}
${ctaSection({
  title: "Start Your Cybersecurity Journey Today",
  sub: "Choose the learning path that matches your goals and begin building practical skills with Hackverge.",
  primary: { label: "Explore Courses", href: "/courses/" },
  secondary: { label: "Speak with a Mentor", href: "/contact/" },
})}
`;
}

function hero() {
  return `<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Learning Paths</p>
    <h1>Choose Your Cybersecurity Career Path</h1>
    <p class="page-hero__sub">Every cybersecurity professional follows a different journey. Choose the path that matches your interests, goals, and the role you want to pursue.</p>
    <div class="page-hero__actions">
      ${button({ label: "Find My Path", href: "#paths", variant: "primary", icon: "arrowRight" })}
      ${button({ label: "Talk to an Advisor", href: "/contact/", variant: "ghost-onDark" })}
    </div>
  </div>
</section>`;
}

function careerOverview() {
  const branches = [
    { name: "Offensive Security", href: "/learning-paths/offensive-security/" },
    { name: "Defensive Security", href: "/learning-paths/defensive-security/" },
    { name: "Enterprise Security", href: "/learning-paths/enterprise-security/" },
    { name: "Cloud Security", href: "/learning-paths/", soon: true },
    { name: "AI Security", href: "/learning-paths/", soon: true },
  ];
  return `<section class="section">
  <div class="container">
    ${sectionHeading({ eyebrow: "Career Overview", title: "There Isn't One Single \u201cCybersecurity Job\u201d", sub: "Cybersecurity is a collection of specialized careers. Understanding the branches makes it easier to choose where you fit." })}
    <div class="pill-list">
      ${branches
        .map(
          (b) => `<a href="${b.href}" class="tag-chip" style="font-size:0.9rem;padding:10px 18px">${b.name}${b.soon ? ' <span class="badge badge--soon" style="margin-left:6px">Coming Soon</span>' : ""}</a>`
        )
        .join("")}
    </div>
  </div>
</section>`;
}

function pathCards() {
  return `<section class="section section--alt" id="paths">
  <div class="container">
    ${sectionHeading({ eyebrow: "Choose Your Path", title: "Three Career Paths, Fully Mapped Out" })}
    <div class="grid grid--3">
      ${learningPaths
        .map(
          (p) => `<div class="card path-card">
        <div class="path-card__head">
          <span class="path-card__icon">${icon(p.icon, 22)}</span>
          <div><h3 style="margin-bottom:2px">${p.name}</h3><span class="badge">${p.short}</span></div>
        </div>
        <p>${p.description}</p>
        <div class="path-card__tags">${p.technologies.slice(0, 4).map((t) => `<span class="tag-chip">${t}</span>`).join("")}</div>
        <div class="path-card__meta">
          <span>${icon("clock", 14)} ${p.duration}</span>
          <span>${icon("chart", 14)} ${p.difficulty}</span>
        </div>
        <div class="path-card__footer">${button({ label: `Explore ${p.name}`, href: `/learning-paths/${p.slug}/`, variant: "secondary", size: "sm", icon: "arrowRight" })}</div>
      </div>`
        )
        .join("")}
    </div>
    <div class="grid grid--2" style="margin-top:16px">
      ${futurePaths
        .map(
          (p) => `<div class="card" style="opacity:0.75">
        <div class="path-card__head"><span class="path-card__icon" style="background:var(--surface-hover);color:var(--text-muted)">${icon(p.icon, 22)}</span>
        <div><h3 style="margin-bottom:2px">${p.name}</h3><span class="badge badge--soon">Coming Soon</span></div></div>
        <p>${p.note}</p>
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>`;
}

function comparison() {
  const rows = [
    ["Beginner Friendly", "★★★", "★★★★", "★★"],
    ["Programming", "Medium", "Low", "Low"],
    ["Enterprise Tools", "Medium", "High", "Very High"],
    ["Labs", "High", "High", "High"],
    ["Demand", "High", "High", "High"],
    ["Remote Opportunities", "High", "Medium", "High"],
  ];
  return `<section class="section">
  <div class="container">
    ${sectionHeading({ eyebrow: "Compare Paths", title: "Career Comparison at a Glance" })}
    <div class="table-wrap">
      <table class="compare">
        <thead><tr><th>Feature</th><th>Offensive</th><th>Blue Team</th><th>Enterprise</th></tr></thead>
        <tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  </div>
</section>`;
}

function enterpriseTechMap() {
  return `<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "Enterprise Technologies", title: "See Which Tools Belong to Which Path" })}
    ${techGrid(technologies)}
  </div>
</section>`;
}

function learningJourney() {
  const steps = ["Enroll", "Attend Live Classes", "Complete Labs", "Finish Assignments", "Build Portfolio", "Mock Interview", "Career Preparation", "Graduate"];
  return `<section class="section">
  <div class="container">
    ${sectionHeading({ eyebrow: "Learning Journey", title: "What the Experience Actually Looks Like", align: "center" })}
    <div class="timeline">
      ${steps
        .map(
          (s, i) => `<div class="timeline__step"><span class="timeline__num">${String(i + 1).padStart(2, "0")}</span><h4 style="margin-top:8px">${s}</h4></div>${
            i < steps.length - 1 ? `<span class="timeline__arrow">${icon("arrowRight", 20)}</span>` : ""
          }`
        )
        .join("")}
    </div>
  </div>
</section>`;
}

function faqs() {
  const items = [
    { q: "Which learning path should beginners choose?", a: "Most beginners start with Defensive Security (Blue Team) or Offensive Security depending on interest — both have beginner-friendly entry points. Talk to an advisor if you're unsure." },
    { q: "Can I switch paths later?", a: "Yes. Many learners explore more than one path over time as their interests develop." },
    { q: "Are classes live?", a: "Yes, all Hackverge courses are delivered live online with instructor interaction." },
    { q: "How much time should I dedicate each week?", a: "Most learners commit 6–10 hours per week, including live sessions and lab practice." },
    { q: "Will I have access to labs?", a: "Yes — every path includes guided, hands-on labs relevant to its courses." },
    { q: "Do I receive a certificate?", a: "Yes, a Hackverge certificate of completion is issued for each course you finish." },
    { q: "Will there be interview preparation?", a: "Yes — Career Services, including mock interviews, is available to enrolled learners on every path." },
  ];
  return `<section class="section section--alt">
  <div class="container narrow">
    ${sectionHeading({ eyebrow: "FAQ", title: "Frequently Asked Questions", align: "center" })}
    ${faqAccordion(items, "paths")}
  </div>
</section>`;
}

// ------------------------------------------------------------
// Detail page: /learning-paths/[slug]/
// ------------------------------------------------------------
export function learningPathDetailBody(slug) {
  const p = getPath(slug);
  const related = coursesForPath(slug);
  return `
<section class="page-hero">
  <div class="container">
    ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Learning Paths", href: "/learning-paths/" }, { label: p.name }])}
    <p class="eyebrow">${p.short} Learning Path</p>
    <h1>${p.name}</h1>
    <p class="page-hero__sub">${p.heroDescription}</p>
    <div class="page-hero__meta">
      <span>${icon("clock", 15)} ${p.duration}</span>
      <span>${icon("chart", 15)} ${p.difficulty}</span>
      <span>${icon("book", 15)} ${related.length} Courses</span>
    </div>
    <div class="page-hero__actions">
      ${button({ label: "Apply for This Path", href: "/apply/", variant: "primary", icon: "arrowRight" })}
      ${button({ label: "View Courses Below", href: "#courses", variant: "ghost-onDark" })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container grid grid--2">
    <div>
      <h2>Skills You'll Build</h2>
      <ul class="check-list">${p.skills.map((s) => `<li>${icon("check", 18)} ${s}</li>`).join("")}</ul>
    </div>
    <div>
      <h2>Career Roles This Prepares You For</h2>
      <ul class="check-list">${p.jobs.map((s) => `<li>${icon("briefcase", 18)} ${s}</li>`).join("")}</ul>
    </div>
  </div>
</section>

<section class="section section--alt" id="courses">
  <div class="container">
    ${sectionHeading({ eyebrow: "Included Courses", title: `Courses in the ${p.name} Path` })}
    <div class="grid grid--2">
      ${related
        .map(
          (c) => `<a class="card course-card" href="/courses/${c.slug}/">
        <div class="course-card__top"><h3 style="margin-bottom:0">${c.title}</h3></div>
        <p>${c.tagline}</p>
        <div class="course-card__meta">
          <span>${icon("clock", 13)} ${c.duration}</span>
          <span>${icon("chart", 13)} ${c.level}</span>
        </div>
        <span class="card__link">View course ${icon("arrowRight", 14)}</span>
      </a>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHeading({ eyebrow: "Technologies", title: "Tools You'll Work With" })}
    <div class="pill-list">${p.technologies.map((t) => `<span class="tag-chip" style="font-size:0.9rem;padding:10px 16px">${t}</span>`).join("")}</div>
  </div>
</section>

${ctaSection({
  title: `Start the ${p.name} Path`,
  sub: "Enterprise technologies, guided labs, and mentorship — built around the career you actually want.",
  primary: { label: "Apply Now", href: "/apply/" },
  secondary: { label: "Compare All Paths", href: "/learning-paths/" },
})}
`;
}
