import { icon } from "../icons.mjs";
import { breadcrumbs, sectionHeading, button, ctaSection } from "../components.mjs";
import { instructors } from "../data.mjs";

export function instructorsBody() {
  return `
<section class="page-hero">
  <div class="container">
    ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Instructors" }])}
    <p class="eyebrow">Instructors & Mentors</p>
    <h1>Learn From Professionals Who Work With Enterprise Technologies</h1>
    <p class="page-hero__sub">Hackverge instructors combine practical experience with structured teaching to help learners understand how cybersecurity is applied in professional environments.</p>
  </div>
</section>

${philosophy()}
${team()}
${whyMentors()}
${becomeInstructor()}
${ctaSection({
  title: "Learn From People Who've Done the Work",
  primary: { label: "Explore Learning Paths", href: "/learning-paths/" },
  secondary: { label: "Apply Now", href: "/apply/" },
})}
`;
}

function philosophy() {
  const items = ["Practice", "Real Scenarios", "Professional Thinking", "Documentation", "Communication", "Industry Standards"];
  return `<section class="section section--alt">
  <div class="container narrow center">
    ${sectionHeading({ eyebrow: "Teaching Philosophy", title: "Our Instructors Don't Just Teach Slides", align: "center" })}
    <div class="pill-list" style="justify-content:center">${items.map((i) => `<span class="tag-chip" style="font-size:0.9rem;padding:10px 16px">${i}</span>`).join("")}</div>
  </div>
</section>`;
}

function team() {
  return `<section class="section">
  <div class="container">
    ${sectionHeading({ eyebrow: "Meet the Team", title: "Instructors & Mentors" })}
    <div class="grid grid--3">
      ${instructors
        .map(
          (i) => `<div class="card instructor-card">
        <h3 style="margin-bottom:2px">${i.name}</h3>
        <p class="badge">${i.role}</p>
        <p style="margin-top:12px">${i.bio}</p>
        <div class="instructor-card__tags">${i.expertise.map((e) => `<span class="tag-chip">${e}</span>`).join("")}</div>
        <div class="course-card__meta"><span>${icon("clock", 13)} ${i.years} Experience</span></div>
      </div>`
        )
        .join("")}
    </div>
  </div>
</section>`;
}

function whyMentors() {
  const items = ["Live feedback", "Guided labs", "Practical demonstrations", "Career advice", "Interview preparation", "Professional insights"];
  return `<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "Why Learn From Mentors", title: "The Difference a Real Mentor Makes" })}
    <ul class="check-list grid grid--2" style="gap:12px 24px">${items.map((i) => `<li>${icon("check", 18)} ${i}</li>`).join("")}</ul>
  </div>
</section>`;
}

function becomeInstructor() {
  return `<section class="section">
  <div class="container narrow">
    <div class="card" style="padding:40px" data-form>
      <p class="eyebrow">Become an Instructor</p>
      <h2>Teach at Hackverge</h2>
      <p>We're always looking for experienced practitioners interested in mentoring the next generation of cybersecurity professionals.</p>
      <div class="field-set">
        <form data-form>
          <div class="field-row">
            <div class="field"><label for="instFullName">Full Name</label><input id="instFullName" name="name" type="text" required></div>
            <div class="field"><label for="instEmail">Email</label><input id="instEmail" name="email" type="email" required></div>
          </div>
          <div class="field"><label for="instLinkedin">LinkedIn Profile</label><input id="instLinkedin" name="linkedin" type="url" placeholder="https://linkedin.com/in/…"></div>
          <div class="field"><label for="instExpertise">Area(s) of Expertise</label><input id="instExpertise" name="expertise" type="text" placeholder="e.g. SOC Operations, Web App Security"></div>
          <div class="field"><label for="instMsg">Teaching Experience</label><textarea id="instMsg" name="message" placeholder="Tell us about your background and any teaching or mentoring experience"></textarea></div>
          <button type="submit" class="btn btn--primary btn--block">Submit Application</button>
        </form>
      </div>
      <div class="form-success" data-form-success>
        ${icon("checkCircle", 40)}
        <h3>Thanks for your interest</h3>
        <p>We've received your application and will reach out if there's a fit.</p>
      </div>
    </div>
  </div>
</section>`;
}
