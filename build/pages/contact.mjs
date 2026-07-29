import { icon } from "../icons.mjs";
import { breadcrumbs, sectionHeading, button, faqAccordion, ctaSection } from "../components.mjs";
import { site, learningPaths } from "../data.mjs";

export function contactBody() {
  return `
<section class="page-hero">
  <div class="container">
    ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Contact" }])}
    <p class="eyebrow">Contact & Lead Generation</p>
    <h1>Ready to Start Your Cybersecurity Journey?</h1>
    <p class="page-hero__sub">Reach out with questions about learning paths, courses, or corporate training — we typically respond within one business day.</p>
  </div>
</section>

<section class="section">
  <div class="container grid grid--2" style="align-items:flex-start">
    <div>
      ${sectionHeading({ eyebrow: "Contact Options", title: "Get in Touch" })}
      <div class="grid" style="gap:14px">
        <div class="card" style="display:flex;gap:14px;align-items:center">
          <span class="card__icon" style="margin:0">${icon("mail", 20)}</span>
          <div><h4 style="margin-bottom:2px">Email</h4><p style="margin:0"><a href="mailto:${site.email}" style="color:var(--purple-400)">${site.email}</a></p></div>
        </div>
        <div class="card" style="display:flex;gap:14px;align-items:center">
          <span class="card__icon" style="margin:0">${icon("phone", 20)}</span>
          <div><h4 style="margin-bottom:2px">Phone / WhatsApp</h4><p style="margin:0">${site.phone}</p></div>
        </div>
        <div class="card" style="display:flex;gap:14px;align-items:center">
          <span class="card__icon" style="margin:0">${icon("clock", 20)}</span>
          <div><h4 style="margin-bottom:2px">Business Hours</h4><p style="margin:0">Monday–Saturday, 10:00–19:00 (PKT)</p></div>
        </div>
      </div>
      <p style="margin-top:20px;font-size:0.85rem">Expected response time: within 1 business day.</p>
      <div class="footer__social" style="margin-top:8px">
        <a href="${site.social.linkedin}" aria-label="LinkedIn" target="_blank" rel="noopener" class="icon-btn" style="background:var(--surface);color:var(--text)">${icon("linkedin", 18)}</a>
        <a href="${site.social.instagram}" aria-label="Instagram" target="_blank" rel="noopener" class="icon-btn" style="background:var(--surface);color:var(--text)">${icon("instagram", 18)}</a>
        <a href="${site.social.facebook}" aria-label="Facebook" target="_blank" rel="noopener" class="icon-btn" style="background:var(--surface);color:var(--text)">${icon("facebook", 18)}</a>
        <a href="${site.social.youtube}" aria-label="YouTube" target="_blank" rel="noopener" class="icon-btn" style="background:var(--surface);color:var(--text)">${icon("youtube", 18)}</a>
      </div>
    </div>
    <div class="form-card">
      <h3>Send an Inquiry</h3>
      <div class="field-set">
        <form data-form>
          <div class="field-row">
            <div class="field"><label for="cFullName">Full Name</label><input id="cFullName" name="name" type="text" required></div>
            <div class="field"><label for="cEmail">Email</label><input id="cEmail" name="email" type="email" required></div>
          </div>
          <div class="field-row">
            <div class="field"><label for="cPhone">Phone (optional)</label><input id="cPhone" name="phone" type="tel"></div>
            <div class="field"><label for="cCountry">Country</label><input id="cCountry" name="country" type="text" required></div>
          </div>
          <div class="field">
            <label for="cInterest">Interest</label>
            <select id="cInterest" name="interest">
              ${learningPaths.map((p) => `<option>${p.name}</option>`).join("")}
              <option>Corporate Training</option>
              <option>General Question</option>
            </select>
          </div>
          <div class="field"><label for="cMessage">Message</label><textarea id="cMessage" name="message" required></textarea></div>
          <div class="checkbox-field" style="margin-bottom:20px">
            <input type="checkbox" id="cConsent" required>
            <label for="cConsent" style="margin:0;font-weight:400">I agree to be contacted by Hackverge about my inquiry.</label>
          </div>
          <button type="submit" class="btn btn--primary btn--block">Send Inquiry</button>
        </form>
      </div>
      <div class="form-success" data-form-success>
        ${icon("checkCircle", 40)}
        <h3>Message sent</h3>
        <p>Thanks for reaching out — we'll respond within one business day.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container narrow center">
    ${sectionHeading({ eyebrow: "Corporate Training", title: "Training for Teams & Organizations", align: "center", sub: "Team training, customized programs, enterprise workshops, and consulting inquiries." })}
    ${button({ label: "Discuss Corporate Training", href: "mailto:" + site.email, variant: "primary", icon: "arrowRight" })}
  </div>
</section>

${faqs()}
${ctaSection({
  title: "Ready to Start Your Cybersecurity Journey?",
  primary: { label: "Apply Now", href: "/apply/" },
  secondary: { label: "Book a Consultation", href: "mailto:" + site.email },
})}
`;
}

function faqs() {
  const items = [
    { q: "How quickly will I receive a response?", a: "Within one business day for most inquiries." },
    { q: "Can I schedule a consultation?", a: "Yes — email us or use the inquiry form and we'll arrange a time." },
    { q: "Are classes available internationally?", a: "Yes, all courses are delivered live online and accessible internationally." },
    { q: "Do you offer corporate training?", a: "Yes — see Corporate Training above, or email us directly to discuss your organization's needs." },
  ];
  return `<section class="section">
  <div class="container narrow">
    ${sectionHeading({ eyebrow: "FAQ", title: "Common Questions", align: "center" })}
    ${faqAccordion(items, "contact")}
  </div>
</section>`;
}
