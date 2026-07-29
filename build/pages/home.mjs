import {
  site, technologies, learningPaths, careerServices, testimonials, blogPosts, homeFaqs, stats,
} from "../data.mjs";
import { icon } from "../icons.mjs";
import {
  sectionHeading, button, faqAccordion, ctaSection, techGrid, statHud, networkGraphic,
} from "../components.mjs";

export function homeBody() {
  return `
${hero()}
${trustedTech()}
${whyHackverge()}
${learningPathsSection()}
${enterpriseLabsTeaser()}
${careerServicesTeaser()}
${studentJourney()}
${testimonialsSection()}
${latestArticles()}
${faqSection()}
${ctaSection({
  title: "Build Skills That Employers Value.",
  sub: "Join Hackverge and start your journey toward enterprise-ready cybersecurity.",
  primary: { label: "Apply Now", href: "/apply/" },
  secondary: { label: "Talk to an Advisor", href: "/contact/" },
})}
${jsonLd()}
`;
}

function hero() {
  return `<section class="hero">
  <div class="container hero__inner">
    <div class="hero__content">
      <p class="eyebrow">Enterprise Cybersecurity Career Accelerator</p>
      <h1>Become the Cybersecurity Professional Companies Want to Hire.</h1>
      <p class="hero__sub">Master enterprise cybersecurity through live instruction, hands-on labs, real-world projects, mentorship, and career-focused learning.</p>
      <div class="hero__actions">
        ${button({ label: "Start Learning", href: "/apply/", variant: "primary", icon: "arrowRight" })}
        ${button({ label: "Explore Learning Paths", href: "/learning-paths/", variant: "ghost-onDark" })}
      </div>
      ${statHud(stats)}
    </div>
    <div class="hero__visual">${networkGraphic({ id: "hero" })}</div>
  </div>
  <div class="hero__scroll" aria-hidden="true">${icon("chevronDown", 22)}</div>
</section>`;
}

function trustedTech() {
  return `<section class="section section--tight">
  <div class="container">
    ${sectionHeading({
      eyebrow: "Trusted Enterprise Stack",
      title: "Train on the Technologies Enterprise Security Teams Actually Use",
      sub: "Every learning path is built around real platforms — not generic simulations.",
      align: "center",
    })}
    ${techGrid(technologies.slice(0, 12))}
  </div>
</section>`;
}

function whyHackverge() {
  const items = [
    { icon: "server", title: "Enterprise Technologies", desc: "Train on platforms used in enterprise environments.", href: "/enterprise-labs/" },
    { icon: "terminal", title: "Hands-On Labs", desc: "Practice through realistic scenarios and guided exercises.", href: "/enterprise-labs/" },
    { icon: "users", title: "Industry Mentorship", desc: "Learn from professionals with enterprise experience.", href: "/instructors/" },
    { icon: "briefcase", title: "Career Preparation", desc: "Build portfolios, prepare for interviews, and grow professionally.", href: "/career-services/" },
  ];
  return `<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "Why Hackverge", title: "Not a Course Marketplace. A Career Accelerator." })}
    <div class="grid grid--4">
      ${items
        .map(
          (i) => `<div class="card">
        <span class="card__icon">${icon(i.icon, 22)}</span>
        <h3>${i.title}</h3>
        <p>${i.desc}</p>
        <a class="card__link" href="${i.href}">Learn more ${icon("arrowRight", 14)}</a>
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>`;
}

function learningPathsSection() {
  return `<section class="section">
  <div class="container">
    ${sectionHeading({
      eyebrow: "Learning Paths",
      title: "Choose a Career, Not a Random Course",
      sub: "Every path bundles the courses, tools, and skills for a specific cybersecurity career.",
    })}
    <div class="grid grid--3">
      ${learningPaths
        .map(
          (p) => `<div class="card path-card">
        <div class="path-card__head">
          <span class="path-card__icon">${icon(p.icon, 22)}</span>
          <div><h3 style="margin-bottom:2px">${p.name}</h3><span class="badge">${p.short}</span></div>
        </div>
        <p>${p.description}</p>
        <div class="path-card__meta">
          <span>${icon("clock", 14)} ${p.duration}</span>
          <span>${icon("chart", 14)} ${p.difficulty}</span>
        </div>
        <div class="path-card__footer">
          ${button({ label: `Explore ${p.name}`, href: `/learning-paths/${p.slug}/`, variant: "secondary", size: "sm", icon: "arrowRight" })}
        </div>
      </div>`
        )
        .join("")}
    </div>
    <div class="center" style="margin-top:32px">
      ${button({ label: "View All Learning Paths", href: "/learning-paths/", variant: "ghost", icon: "arrowRight" })}
    </div>
  </div>
</section>`;
}

function enterpriseLabsTeaser() {
  return `<section class="section section--alt">
  <div class="container split">
    <div>
      <p class="eyebrow">Enterprise Labs</p>
      <h2>Learn by Doing. Train Like a Cybersecurity Professional.</h2>
      <p class="lede">Guided labs, simulated enterprise environments, threat hunting, incident response, and real security tool configuration — Hackverge is practice-driven, not video-driven.</p>
      <ul class="check-list">
        <li>${icon("check", 18)} Instructor-guided, not self-taught guesswork</li>
        <li>${icon("check", 18)} Simulated enterprise environments</li>
        <li>${icon("check", 18)} Real security tools, not toy sandboxes</li>
        <li>${icon("check", 18)} Every lab produces a portfolio-ready deliverable</li>
      </ul>
      <div style="margin-top:24px">${button({ label: "Explore Enterprise Labs", href: "/enterprise-labs/", variant: "primary", icon: "arrowRight" })}</div>
    </div>
    <div class="split__visual">${networkGraphic({ id: "labsteaser", compact: true })}</div>
  </div>
</section>`;
}

function careerServicesTeaser() {
  return `<section class="section">
  <div class="container">
    ${sectionHeading({ eyebrow: "Career Services", title: "Will This Help Me Get Hired?", sub: "Technical skill is half the story. Hackverge builds the professional half too." })}
    <div class="grid grid--3">
      ${careerServices
        .slice(0, 6)
        .map(
          (s) => `<div class="card service-card">
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

function studentJourney() {
  const steps = ["No Experience", "Learn Fundamentals", "Hands-on Labs", "Projects", "Portfolio", "Interview Prep", "Enterprise Ready"];
  return `<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "The Hackverge Method", title: "Your Path From Beginner to Enterprise Ready", align: "center" })}
    <div class="timeline">
      ${steps
        .map(
          (s, i) => `<div class="timeline__step"><span class="timeline__num">STEP ${String(i + 1).padStart(2, "0")}</span><h4 style="margin-top:8px">${s}</h4></div>${
            i < steps.length - 1 ? `<span class="timeline__arrow">${icon("arrowRight", 20)}</span>` : ""
          }`
        )
        .join("")}
    </div>
  </div>
</section>`;
}

function testimonialsSection() {
  return `<section class="section">
  <div class="container">
    ${sectionHeading({ eyebrow: "From the Community", title: "Success Is Built Through Practice" })}
    <div class="grid grid--3">
      ${testimonials
        .map(
          (t) => `<div class="card testimonial-card">
        <p class="testimonial-card__quote">"${t.quote}"</p>
        <div class="testimonial-card__person">
          <span class="avatar">${t.name.charAt(0)}</span>
          <div><p class="testimonial-card__name" style="margin:0">${t.name}</p><p class="testimonial-card__role" style="margin:0">${t.role}</p></div>
        </div>
      </div>`
        )
        .join("")}
    </div>
    <p style="text-align:center;font-size:0.82rem;margin-top:16px">Hackverge is a new academy — these are early community and lab spotlights. <a href="/success-stories/" style="color:var(--purple-400);font-weight:600">See our Success Stories page →</a></p>
  </div>
</section>`;
}

function latestArticles() {
  const latest = blogPosts.slice(0, 3);
  return `<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "From the Blog", title: "Latest Insights" })}
    <div class="grid grid--3">
      ${latest
        .map(
          (p) => `<a class="card" href="/blog/${p.slug}/">
        <div class="blog-card__meta"><span>${p.category}</span><span>·</span><span>${p.readTime}</span></div>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <span class="card__link">Read article ${icon("arrowRight", 14)}</span>
      </a>`
        )
        .join("")}
    </div>
  </div>
</section>`;
}

function faqSection() {
  return `<section class="section">
  <div class="container narrow">
    ${sectionHeading({ eyebrow: "FAQ", title: "Common Questions", align: "center" })}
    ${faqAccordion(homeFaqs, "home")}
  </div>
</section>`;
}

function jsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.name,
    url: site.url,
    description: site.description,
    sameAs: Object.values(site.social),
  };
  return `<script type="application/ld+json">${JSON.stringify(org)}</script>`;
}
