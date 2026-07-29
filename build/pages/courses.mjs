import { icon } from "../icons.mjs";
import { breadcrumbs, sectionHeading, button, faqAccordion, ctaSection } from "../components.mjs";
import { courses, learningPaths, getCourse, getPath } from "../data.mjs";

// ------------------------------------------------------------
// Index
// ------------------------------------------------------------
export function coursesIndexBody() {
  return `
<section class="page-hero">
  <div class="container">
    ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Courses" }])}
    <p class="eyebrow">Courses</p>
    <h1>Every Course, Grouped by Career Path</h1>
    <p class="page-hero__sub">Explore the full course catalog. Each course has its own dedicated page covering curriculum, tools, labs, and career outcomes.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="category-scroller" data-filter-group data-filter-target="[data-course-card]" role="tablist" aria-label="Filter courses by path">
      <button class="category-chip is-active" data-filter="all">All Courses</button>
      ${learningPaths.map((p) => `<button class="category-chip" data-filter="${p.slug}">${p.name}</button>`).join("")}
    </div>
  </div>
</section>

${learningPaths
  .map(
    (p) => `<section class="section section--tight">
  <div class="container">
    <h2 style="margin-bottom:4px">${p.name}</h2>
    <p style="margin-bottom:24px">${p.description}</p>
    <div class="grid grid--3">
      ${courses
        .filter((c) => c.path === p.slug)
        .map(
          (c) => `<a class="card course-card" href="/courses/${c.slug}/" data-course-card data-cats="${c.path}">
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
</section>`
  )
  .join("")}

${ctaSection({
  title: "Not Sure Which Course Fits?",
  sub: "Explore full learning paths, or talk to an advisor about your goals.",
  primary: { label: "Explore Learning Paths", href: "/learning-paths/" },
  secondary: { label: "Talk to an Advisor", href: "/contact/" },
})}
`;
}

// ------------------------------------------------------------
// Detail page: /courses/[slug]/
// ------------------------------------------------------------
export function courseDetailBody(slug) {
  const c = getCourse(slug);
  const path = getPath(c.path);
  return `
<section class="page-hero">
  <div class="container">
    ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Courses", href: "/courses/" }, { label: c.title }])}
    <p class="eyebrow">${path.name} · ${c.level}</p>
    <h1>${c.title}</h1>
    <p class="page-hero__sub">${c.tagline}</p>
    <div class="page-hero__meta">
      <span>${icon("clock", 15)} ${c.duration}</span>
      <span>${icon("wifi", 15)} ${c.delivery}</span>
      <span>${icon("chart", 15)} ${c.level}</span>
    </div>
    <div class="page-hero__actions">
      ${button({ label: "Apply Now", href: "/apply/", variant: "primary", icon: "arrowRight" })}
      ${button({ label: "Download Syllabus", href: "/contact/", variant: "ghost-onDark", icon: "fileText" })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    ${sectionHeading({ eyebrow: "Course Overview", title: "What You'll Learn and Why It Matters" })}
    <p class="lede">${c.overview}</p>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "Who Should Enroll", title: "Is This Course Right for You?" })}
    <div class="grid grid--2">
      <ul class="check-list">${c.whoShouldEnroll.map((w) => `<li>${icon("check", 18)} ${w}</li>`).join("")}</ul>
      <div class="card">
        <h4 style="margin-bottom:10px">Course Snapshot</h4>
        <div class="kv-list">
          <div><dt>Level</dt><dd>${c.level}</dd></div>
          <div><dt>Duration</dt><dd>${c.duration}</dd></div>
          <div><dt>Delivery</dt><dd>${c.delivery}</dd></div>
          <div><dt>Learning Path</dt><dd><a href="/learning-paths/${path.slug}/" style="color:var(--purple-400)">${path.name}</a></dd></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHeading({ eyebrow: "Skills You'll Learn", title: "Technical and Professional Skills" })}
    <div class="grid grid--2">
      <div class="card"><h4>Technical Skills</h4><ul class="check-list">${c.skills.technical.map((s) => `<li>${icon("code", 18)} ${s}</li>`).join("")}</ul></div>
      <div class="card"><h4>Professional Skills</h4><ul class="check-list">${c.skills.professional.map((s) => `<li>${icon("users", 18)} ${s}</li>`).join("")}</ul></div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "Tools & Technologies", title: "What You'll Work With" })}
    <div class="pill-list">${c.tools.map((t) => `<span class="tag-chip" style="font-size:0.9rem;padding:10px 16px">${t}</span>`).join("")}</div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHeading({ eyebrow: "Curriculum", title: "Module by Module" })}
    <div class="grid" style="gap:12px">
      ${c.curriculum
        .map(
          (m, i) => `<div class="card" style="display:flex;gap:18px;align-items:flex-start">
        <span class="eyebrow" style="margin:0;flex-shrink:0">${String(i + 1).padStart(2, "0")}</span>
        <div><h4 style="margin-bottom:4px">${m.title}</h4><p style="margin:0">${m.desc}</p></div>
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container grid grid--2">
    <div>
      ${sectionHeading({ eyebrow: "Hands-On Labs", title: "Practice, Not Just Theory" })}
      <ul class="check-list">${c.labs.map((l) => `<li>${icon("terminal", 18)} ${l}</li>`).join("")}</ul>
    </div>
    <div>
      ${sectionHeading({ eyebrow: "Projects", title: "What You'll Build" })}
      <ul class="check-list">${c.projects.map((l) => `<li>${icon("layers", 18)} ${l}</li>`).join("")}</ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHeading({ eyebrow: "Career Outcomes", title: "Roles This Course Prepares You For" })}
    <div class="pill-list">${c.careerOutcomes.map((r) => `<span class="badge">${r}</span>`).join("")}</div>
  </div>
</section>

<section class="section section--alt">
  <div class="container narrow">
    <div class="card" style="margin-bottom:32px">
      <p class="eyebrow" style="margin-bottom:10px">Instructor</p>
      <p style="margin:0">Taught by Hackverge mentors with hands-on experience in ${path.name.toLowerCase()}. See full instructor profiles on the <a href="/instructors/" style="color:var(--purple-400)">Instructors & Mentors</a> page.</p>
    </div>
    ${sectionHeading({ eyebrow: "FAQ", title: "Questions About This Course" })}
    ${faqAccordion(c.faqs, c.slug)}
  </div>
</section>

${ctaSection({
  title: `Ready to Start ${c.title}?`,
  sub: `Next cohort forming now. ${c.delivery} · ${c.duration}.`,
  primary: { label: "Apply Now", href: "/apply/" },
  secondary: { label: "View Full Path", href: `/learning-paths/${path.slug}/` },
})}
`;
}
