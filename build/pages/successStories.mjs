import { icon } from "../icons.mjs";
import { breadcrumbs, sectionHeading, button, ctaSection } from "../components.mjs";
import { testimonials } from "../data.mjs";

export function successStoriesBody() {
  return `
<section class="page-hero">
  <div class="container">
    ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Success Stories" }])}
    <p class="eyebrow">Success Stories & Community</p>
    <h1>Success Is Built Through Practice.</h1>
    <p class="page-hero__sub">Hackverge believes learning becomes valuable when it produces real skills, meaningful projects, and measurable professional growth.</p>
    <div class="page-hero__actions">
      ${button({ label: "View Student Work", href: "#projects", variant: "primary", icon: "arrowRight" })}
      ${button({ label: "Join Hackverge", href: "/apply/", variant: "ghost-onDark" })}
    </div>
  </div>
</section>


${community()}
${projects()}
${testimonialsSection()}
${events()}
${wall()}
${ctaSection({
  title: "Become the Next Success Story",
  primary: { label: "Explore Learning Paths", href: "/learning-paths/" },
  secondary: { label: "Apply Now", href: "/apply/" },
})}
`;
}

function community() {
  const items = ["Discord", "Microsoft Teams", "Zoom Live Sessions", "Group Labs", "Capture-the-Flag Events", "Community Discussions"];
  return `<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "Our Community", title: "You're Not Learning Alone", sub: "Hackverge is a community where learners collaborate, solve problems, discuss threats, help each other, share research, and prepare together." })}
    <div class="pill-list">${items.map((i) => `<span class="tag-chip" style="font-size:0.9rem;padding:10px 16px">${i}</span>`).join("")}</div>
  </div>
</section>`;
}

function projects() {
  const items = [
    { title: "Web Security Assessment", tech: ["Burp Suite", "Nmap", "OWASP"], path: "Offensive Security" },
    { title: "SOC Investigation", tech: ["Microsoft Sentinel", "Defender XDR", "MITRE ATT&CK"], path: "Defensive Security" },
    { title: "PAM Deployment", tech: ["CyberArk"], path: "Enterprise Security" },
    { title: "DLP Policy Design", tech: ["Microsoft Purview"], path: "Enterprise Security" },
  ];
  return `<section class="section" id="projects">
  <div class="container">
    ${sectionHeading({ eyebrow: "Student Projects", title: "Real Lab Work From Real Learners" })}
    <div class="grid grid--2">
      ${items
        .map(
          (p) => `<div class="card">
        <div class="badge-row"><span class="badge">${p.path}</span></div>
        <h3>${p.title}</h3>
        <div class="pill-list">${p.tech.map((t) => `<span class="tag-chip">${t}</span>`).join("")}</div>
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>`;
}

function testimonialsSection() {
  return `<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "Community Voices", title: "What Learners Are Saying" })}
    <div class="grid grid--3">
      ${testimonials
        .map(
          (t) => `<div class="card testimonial-card">
        <p class="testimonial-card__quote">"${t.quote}"</p>
        <div class="testimonial-card__person">
          <span class="avatar">${t.name.charAt(0)}</span>
          <div><p class="testimonial-card__name" style="margin:0">${t.name}</p><p class="testimonial-card__role" style="margin:0">${t.role} · ${t.path}</p></div>
        </div>
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>`;
}

function events() {
  return `<section class="section">
  <div class="container">
    ${sectionHeading({ eyebrow: "Community Events", title: "Workshops, CTFs & Guest Sessions" })}
    <div class="grid grid--2">
      <div class="card"><h4 style="margin-bottom:4px">Monthly Capture-the-Flag</h4><p style="margin:0">A community CTF open to all learners — practice offensive and defensive skills in a friendly competition.</p></div>
      <div class="card"><h4 style="margin-bottom:4px">Live Q&A with Mentors</h4><p style="margin:0">Regular sessions where learners can ask mentors about labs, courses, and career direction.</p></div>
    </div>
  </div>
</section>`;
}

function wall() {
  const items = [
    { icon: "checkCircle", text: "Lab completions across Offensive, Defensive, and Enterprise Security tracks" },
    { icon: "users", text: "Active community discussions and peer support" },
    { icon: "award", text: "Mentor recognition for outstanding lab write-ups" },
    { icon: "flag", text: "Community CTF participation" },
  ];
  return `<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "Wall of Achievement", title: "Celebrating Community Momentum" })}
    <div class="grid grid--2">
      ${items.map((i) => `<div class="wall-item"><span class="wall-item__icon">${icon(i.icon, 20)}</span><p style="margin:0">${i.text}</p></div>`).join("")}
    </div>
  </div>
</section>`;
}
