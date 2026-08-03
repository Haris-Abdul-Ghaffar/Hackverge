import { icon } from "../icons.mjs";
import { logoMark, breadcrumbs, ctaSection } from "../components.mjs";
import { site } from "../data.mjs";

export function loginBody() {
  return `
<section class="login-shell">
  <div class="login-card">
    <div style="text-align:center;margin-bottom:24px">
      <div style="display:inline-flex">${"$"}{logoMark(48)}</div>
      <h1 style="font-size:1.5rem;margin-top:14px">Welcome back</h1>
      <p style="margin:0">Log in to your Hackverge student dashboard.</p>
    </div>
    <form data-form>
      <div class="field"><label for="lEmail">Email</label><input id="lEmail" name="email" type="email" required></div>
      <div class="field"><label for="lPassword">Password</label><input id="lPassword" name="password" type="password" required></div>
      <button type="submit" class="btn btn--primary btn--block">Log In</button>
    </form>
    <div class="form-success" data-form-success>
      ${"$"}{icon("checkCircle", 36)}
      <h3 style="font-size:1.1rem">Student accounts aren't open yet</h3>
      <p style="font-size:0.9rem">The dashboard is on its way. In the meantime, apply below and we'll notify you the moment accounts launch.</p>
    </div>
    <p style="text-align:center;font-size:0.85rem;margin-top:20px">Don't have an account? <a href="/apply/" style="color:var(--purple-400);font-weight:600">Apply now</a></p>
  </div>
</section>
`;
}

export function privacyBody() {
  return `
<section class="page-hero">
  <div class="container">
    ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Privacy Policy" }])}
    <p class="eyebrow">Legal</p>
    <h1>Privacy Policy</h1>
    <p class="page-hero__sub">Last updated: placeholder — replace with your actual policy before launch.</p>
  </div>
</section>
<section class="section">
  <div class="container narrow article-body">
    <p>This is placeholder content. Before launching, replace this page with a privacy policy reviewed by a qualified professional, covering what data ${site.name} collects (e.g. contact form and application details, newsletter sign-ups, basic analytics), how it's used, how it's stored, and how visitors can request access to or deletion of their data.</p>
    <p>At minimum, a real privacy policy should address: what personal data is collected and why, third-party services used (analytics, email delivery, hosting), data retention periods, cookie usage, and contact details for privacy questions.</p>
    <p>Contact: <a href="mailto:${site.email}" style="color:var(--purple-400)">${site.email}</a></p>
  </div>
</section>
`;
}

export function termsBody() {
  return `
<section class="page-hero">
  <div class="container">
    ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Terms of Service" }])}
    <p class="eyebrow">Legal</p>
    <h1>Terms of Service</h1>
    <p class="page-hero__sub">Last updated: placeholder — replace with your actual terms before launch.</p>
  </div>
</section>
<section class="section">
  <div class="container narrow article-body">
    <p>This is placeholder content. Before launching, replace this page with terms of service reviewed by a qualified professional, covering enrollment terms, payment and refund policy, code of conduct, intellectual property for course materials, and limitation of liability.</p>
    <p>Contact: <a href="mailto:${site.email}" style="color:var(--purple-400)">${site.email}</a></p>
  </div>
</section>
`;
}

export function notFoundBody() {
  return `
<section class="not-found">
  <div class="container">
    <p class="eyebrow">404</p>
    <h1>This Page Isn't in Scope</h1>
    <p style="max-width:50ch;margin:0 auto 28px">The page you're looking for doesn't exist or may have moved. Try one of the links below.</p>
    <div class="hero__actions" style="justify-content:center">
      <a href="/" class="btn btn--primary">Back to Home</a>
      <a href="/courses/" class="btn btn--secondary">Browse Courses</a>
    </div>
  </div>
</section>
`;
}
