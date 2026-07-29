import { icon } from "../icons.mjs";
import { breadcrumbs, sectionHeading, button, ctaSection, networkGraphic } from "../components.mjs";
import { instructors } from "../data.mjs";

export function aboutBody() {
  return `
${pageHero()}
${section("container")(`
  ${breadcrumbs([{ label: "Home", href: "/" }, { label: "About" }])}
`)}
${ourStory()}
${problem()}
${missionVision()}
${values()}
${method()}
${team()}
${whyPractical()}
${ctaSection({
  title: "Explore the Path That Fits Your Goals",
  sub: "See how Hackverge's learning paths, labs, and career services fit together.",
  primary: { label: "Explore Learning Paths", href: "/learning-paths/" },
  secondary: { label: "Schedule a Consultation", href: "/contact/" },
})}
`;
}

function section(cls) {
  return (inner) => `<div class="${cls}">${inner}</div>`;
}

function pageHero() {
  return `<section class="page-hero">
  <div class="container">
    <p class="eyebrow">About Hackverge</p>
    <h1>Why Should I Trust Hackverge With My Career?</h1>
    <p class="page-hero__sub">Hackverge exists to close the gap between theory and enterprise practice — built by practitioners, for people who want to be enterprise-ready, not just certified.</p>
  </div>
</section>`;
}

function ourStory() {
  return `<section class="section">
  <div class="container split">
    <div>
      <p class="eyebrow">Our Story</p>
      <h2>Built From a Simple Frustration</h2>
      <p>Too many aspiring cybersecurity professionals finish a course, earn a certificate, and still can't confidently operate the tools an enterprise SOC or security team actually runs day to day. Hackverge was founded to close that specific gap — between watching a video and being trusted with real access, real alerts, and real decisions.</p>
      <p>Instead of building another video library, we built a training model around enterprise technologies, guided labs, and mentorship — the same combination that turns a beginner into someone a hiring manager takes seriously.</p>
    </div>
    <div class="split__visual">${networkGraphic({ id: "story", compact: true })}</div>
  </div>
</section>`;
}

function problem() {
  return `<section class="section section--alt">
  <div class="container narrow center">
    <p class="eyebrow">The Problem We Solve</p>
    <h2>The Gap Between Theory and Enterprise Practice</h2>
    <p class="lede" style="margin:0 auto">Reading about incident response is not the same as responding to an incident. Reading about XDR is not the same as operating Microsoft Defender XDR. Hackverge is built specifically to close that gap — with labs, mentorship, and technology access designed to mirror how enterprise security teams actually work.</p>
  </div>
</section>`;
}

function missionVision() {
  return `<section class="section">
  <div class="container grid grid--2">
    <div class="card">
      <span class="card__icon">${icon("target", 22)}</span>
      <h3>Our Mission</h3>
      <p>Prepare enterprise-ready cybersecurity professionals through practical training, real technologies, and mentorship — not theory alone.</p>
    </div>
    <div class="card">
      <span class="card__icon">${icon("compass", 22)}</span>
      <h3>Our Vision</h3>
      <p>To become a long-term, trusted foundation for cybersecurity education — where practical skill, not just certification, defines readiness for the industry.</p>
    </div>
  </div>
</section>`;
}

function values() {
  const list = [
    { title: "Integrity", desc: "We teach real skills honestly, without inflated promises about outcomes." },
    { title: "Practical Excellence", desc: "Every concept is paired with hands-on practice, not passive consumption." },
    { title: "Continuous Learning", desc: "Cybersecurity changes fast — so does our curriculum." },
    { title: "Mentorship", desc: "Learners get real feedback from people who've done the work." },
    { title: "Professionalism", desc: "We prepare learners to communicate and document like professionals." },
    { title: "Community", desc: "Learners grow faster together than alone." },
  ];
  return `<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "Our Values", title: "What We Hold Ourselves To", align: "center" })}
    <div class="grid grid--3">
      ${list.map((v) => `<div class="card value-card"><h3>${v.title}</h3><p>${v.desc}</p></div>`).join("")}
    </div>
  </div>
</section>`;
}

function method() {
  const steps = ["Learn", "Practice", "Build", "Prepare", "Grow"];
  return `<section class="section">
  <div class="container center">
    ${sectionHeading({ eyebrow: "The Hackverge Method", title: "Learn → Practice → Build → Prepare → Grow", align: "center" })}
    <div class="flow" style="justify-content:center">
      ${steps.map((s, i) => `<span class="flow__step">${s}</span>${i < steps.length - 1 ? `<span class="flow__arrow">${icon("arrowRight", 16)}</span>` : ""}`).join("")}
    </div>
  </div>
</section>`;
}

function team() {
  return `<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "Meet the Team", title: "The People Behind Hackverge" })}
    <div class="grid grid--3">
      ${instructors
        .map(
          (i) => `<div class="card instructor-card">
        <h3 style="margin-bottom:2px">${i.name}</h3>
        <p class="badge">${i.role}</p>
        <p style="margin-top:12px">${i.bio}</p>
      </div>`
        )
        .join("")}
    </div>
    <div class="center" style="margin-top:28px">${button({ label: "Meet All Instructors & Mentors", href: "/instructors/", variant: "ghost", icon: "arrowRight" })}</div>
  </div>
</section>`;
}

function whyPractical() {
  return `<section class="section">
  <div class="container narrow">
    <div class="card" style="padding:40px">
      <p class="eyebrow">Why Companies Value Practical Skills</p>
      <h2>Certificates Tell an Employer What You Studied. Practice Shows Them What You Can Do.</h2>
      <p>Employers increasingly look past certificates alone toward demonstrable ability — real lab work, real reports, real reasoning under pressure. Hackverge's educational philosophy is built around producing that evidence, module by module, rather than promising outcomes we can't guarantee. We can't promise you a job. We can promise a training experience built around what hiring managers actually evaluate.</p>
    </div>
  </div>
</section>`;
}
