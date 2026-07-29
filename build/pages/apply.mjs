import { icon } from "../icons.mjs";
import { breadcrumbs, sectionHeading } from "../components.mjs";
import { learningPaths } from "../data.mjs";

export function applyBody() {
  return `
<section class="page-hero">
  <div class="container">
    ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Apply" }])}
    <p class="eyebrow">Apply Now</p>
    <h1>Start Your Cybersecurity Journey</h1>
    <p class="page-hero__sub">Tell us a bit about yourself and the path you're interested in. An advisor will follow up to discuss next steps, cohort dates, and pricing.</p>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <div class="form-card">
      <div class="field-set">
        <form data-form>
          <div class="field-row">
            <div class="field"><label for="aFullName">Full Name</label><input id="aFullName" name="name" type="text" required></div>
            <div class="field"><label for="aEmail">Email</label><input id="aEmail" name="email" type="email" required></div>
          </div>
          <div class="field-row">
            <div class="field"><label for="aPhone">Phone</label><input id="aPhone" name="phone" type="tel"></div>
            <div class="field"><label for="aCountry">Country</label><input id="aCountry" name="country" type="text" required></div>
          </div>
          <div class="field">
            <label for="aPath">Learning Path</label>
            <select id="aPath" name="path">
              ${learningPaths.map((p) => `<option value="${p.slug}">${p.name}</option>`).join("")}
              <option value="unsure">Not sure yet — I'd like guidance</option>
            </select>
          </div>
          <div class="field">
            <label for="aExperience">Current Experience Level</label>
            <select id="aExperience" name="experience">
              <option>No prior experience</option>
              <option>Some self-study / coursework</option>
              <option>IT professional transitioning</option>
              <option>Working security professional</option>
            </select>
          </div>
          <div class="field"><label for="aMessage">Anything else we should know? (optional)</label><textarea id="aMessage" name="message"></textarea></div>
          <div class="checkbox-field" style="margin-bottom:20px">
            <input type="checkbox" id="aConsent" required>
            <label for="aConsent" style="margin:0;font-weight:400">I agree to be contacted by Hackverge about my application.</label>
          </div>
          <button type="submit" class="btn btn--primary btn--block">Submit Application</button>
          <p class="hint" style="text-align:center;margin-top:12px">No payment required to apply. An advisor will reach out to confirm details.</p>
        </form>
      </div>
      <div class="form-success" data-form-success>
        ${icon("checkCircle", 40)}
        <h3>Application received</h3>
        <p>Thanks for applying to Hackverge. An advisor will reach out within one business day to discuss next steps.</p>
      </div>
    </div>
  </div>
</section>
`;
}
