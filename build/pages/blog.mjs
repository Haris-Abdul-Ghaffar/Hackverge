import { icon } from "../icons.mjs";
import { breadcrumbs, sectionHeading, button, ctaSection } from "../components.mjs";
import { blogPosts, getPost } from "../data.mjs";

const categories = [...new Set(blogPosts.map((p) => p.category))];

function fmtDate(iso) {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

// ------------------------------------------------------------
// Index
// ------------------------------------------------------------
export function blogIndexBody() {
  const [featured, ...rest] = blogPosts;
  return `
<section class="page-hero">
  <div class="container">
    ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Blog" }])}
    <p class="eyebrow">Blog & Knowledge Center</p>
    <h1>Practical Cybersecurity Insights</h1>
    <p class="page-hero__sub">Not a news feed — a knowledge center. Educational deep dives, career advice, and tool guides written to build real understanding.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <a class="card" href="/blog/${featured.slug}/" style="display:grid;grid-template-columns:1fr;gap:16px">
      <div class="blog-card__meta"><span class="badge">${featured.category}</span><span>${fmtDate(featured.date)}</span><span>·</span><span>${featured.readTime}</span></div>
      <h2 style="margin-bottom:6px">${featured.title}</h2>
      <p>${featured.excerpt}</p>
      <span class="card__link">Read the full article ${icon("arrowRight", 14)}</span>
    </a>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="category-scroller" data-filter-group data-filter-target="[data-post-card]">
      <button class="category-chip is-active" data-filter="all">All Articles</button>
      ${categories.map((c) => `<button class="category-chip" data-filter="${c}">${c}</button>`).join("")}
    </div>
    <div class="grid grid--3" style="margin-top:24px">
      ${rest
        .map(
          (p) => `<a class="card" href="/blog/${p.slug}/" data-post-card data-cats="${p.category}">
        <div class="blog-card__meta"><span>${p.category}</span><span>·</span><span>${p.readTime}</span></div>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <span class="card__link">Read article ${icon("arrowRight", 14)}</span>
      </a>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container narrow">
    <div class="card" style="padding:40px;text-align:center">
      <p class="eyebrow" style="justify-content:center;display:flex">Newsletter</p>
      <h2>Weekly Practical Cybersecurity Insights</h2>
      <p style="max-width:50ch;margin:0 auto 20px">Career tips and industry updates, once a week, no fluff.</p>
      <form class="newsletter-form" style="max-width:420px;margin:0 auto" data-newsletter-form>
        <label class="sr-only" for="blogEmail">Email address</label>
        <input type="email" id="blogEmail" placeholder="you@email.com" required>
        <button type="submit" class="btn btn--primary btn--sm">Subscribe</button>
      </form>
      <p class="newsletter-form__note" data-newsletter-note hidden>You're subscribed. Welcome aboard.</p>
    </div>
  </div>
</section>
`;
}

// ------------------------------------------------------------
// Detail: /blog/[slug]/
// ------------------------------------------------------------
export function blogPostBody(slug) {
  const p = getPost(slug);
  const more = blogPosts.filter((b) => b.slug !== slug).slice(0, 3);
  return `
<section class="page-hero">
  <div class="container">
    ${breadcrumbs([{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }, { label: p.title }])}
    <p class="eyebrow">${p.category}</p>
    <h1 style="max-width:26ch">${p.title}</h1>
    <div class="page-hero__meta">
      <span>${icon("users", 14)} ${p.author}</span>
      <span>${icon("clock", 14)} ${fmtDate(p.date)}</span>
      <span>${icon("book", 14)} ${p.readTime}</span>
      <span>${icon("chart", 14)} ${p.difficulty}</span>
    </div>
  </div>
</section>

<section class="section">
  <div class="container article-body">
    ${p.body.map((para) => `<p>${para}</p>`).join("")}
    <div class="pill-list" style="margin-top:32px">${p.tags.map((t) => `<span class="tag-chip">${t}</span>`).join("")}</div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    ${sectionHeading({ eyebrow: "Keep Reading", title: "More From the Blog" })}
    <div class="grid grid--3">
      ${more
        .map(
          (b) => `<a class="card" href="/blog/${b.slug}/">
        <div class="blog-card__meta"><span>${b.category}</span><span>·</span><span>${b.readTime}</span></div>
        <h3>${b.title}</h3>
        <p>${b.excerpt}</p>
        <span class="card__link">Read article ${icon("arrowRight", 14)}</span>
      </a>`
        )
        .join("")}
    </div>
  </div>
</section>

${ctaSection({
  title: "Turn Insight Into Practical Skill",
  sub: "Explore the learning paths where these topics are taught hands-on.",
  primary: { label: "Explore Learning Paths", href: "/learning-paths/" },
  secondary: { label: "Browse Courses", href: "/courses/" },
})}
`;
}
