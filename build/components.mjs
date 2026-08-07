import { site, nav, footerLinks, learningPaths, courses } from "./data.mjs";
import { icon } from "./icons.mjs";

// ------------------------------------------------------------
// Document shell
// ------------------------------------------------------------
export function page({ title, description, path = "/", body, bodyClass = "" }) {
  const fullTitle = title === site.name ? `${site.name} — Enterprise Cybersecurity Career Accelerator` : `${title} | ${site.name}`;
  const canonical = `${site.url}${path}`;
  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${fullTitle}</title>
<meta name="description" content="${description}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="${fullTitle}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#060A16">
<link rel="icon" href="/assets/logo/icon-32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/assets/logo/icon-180.png">
<meta property="og:image" content="${site.url}/assets/logo/icon-512.png">
<link rel="stylesheet" href="/css/styles.css">
<script>
(function(){try{var t=localStorage.getItem('hv-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();
</script>
</head>
<body class="${bodyClass}">
<a class="skip-link" href="#main">Skip to content</a>
${announcementBar()}
${navbar(path)}
<main id="main">
${body}
</main>
${footer()}
<script src="/js/main.js" defer></script>
</body>
</html>`;
}

// ------------------------------------------------------------
// Announcement bar
// ------------------------------------------------------------
export function announcementBar() {
  return `<div class="announce" id="announce" role="region" aria-label="Announcement">
  <div class="announce__inner">
    <p><strong>Admissions Open</strong> — New batches forming for the September cohort.</p>
    <a href="/apply/" class="announce__cta">Enroll Today ${icon("arrowRight", 14)}</a>
  </div>
  <button class="announce__close" id="announceClose" aria-label="Dismiss announcement">${icon("close", 14)}</button>
</div>`;
}

// ------------------------------------------------------------
// Navbar
// ------------------------------------------------------------
function isActive(href, path) {
  if (href === "/") return path === "/";
  return path.startsWith(href);
}

export function navbar(path) {
  const links = nav
    .map((item) => {
      const active = isActive(item.href, path) ? ' aria-current="page"' : "";
      if (item.mega === "paths") {
        return `<div class="nav__item nav__item--mega">
          <a href="${item.href}" class="nav__link"${active}>${item.label} ${icon("chevronDown", 14)}</a>
          <div class="mega">
            <div class="mega__grid">
              ${learningPaths
                .map(
                  (p) => `<a class="mega__card" href="/learning-paths/${p.slug}/">
                  <span class="mega__icon">${icon(p.icon, 20)}</span>
                  <span>
                    <span class="mega__title">${p.name}</span>
                    <span class="mega__desc">${p.short}</span>
                  </span>
                </a>`
                )
                .join("")}
            </div>
            <a class="mega__viewall" href="/learning-paths/">View all learning paths ${icon("arrowRight", 14)}</a>
          </div>
        </div>`;
      }
      if (item.mega === "courses") {
        return `<div class="nav__item nav__item--mega">
          <a href="${item.href}" class="nav__link"${active}>${item.label} ${icon("chevronDown", 14)}</a>
          <div class="mega mega--wide">
            <div class="mega__cols">
              ${learningPaths
                .map(
                  (p) => `<div class="mega__col">
                <p class="mega__colhead">${p.name}</p>
                ${courses
                  .filter((c) => c.path === p.slug)
                  .slice(0, 5)
                  .map((c) => `<a href="/courses/${c.slug}/">${c.title}</a>`)
                  .join("")}
              </div>`
                )
                .join("")}
            </div>
            <a class="mega__viewall" href="/courses/">Browse all courses ${icon("arrowRight", 14)}</a>
          </div>
        </div>`;
      }
      return `<a class="nav__link" href="${item.href}"${active}>${item.label}</a>`;
    })
    .join("");

  return `<header class="nav" id="siteNav">
  <div class="nav__inner">
    <a href="/" class="nav__brand" aria-label="${site.name} home">
      ${logoMark()}
      ${wordmark()}
    </a>
    <nav class="nav__links" aria-label="Primary">
      ${links}
    </nav>
    <div class="nav__actions">
      <button class="icon-btn" id="searchToggle" aria-label="Search the site" aria-expanded="false" aria-controls="searchPanel">${icon("search", 18)}</button>
      <button class="icon-btn" id="themeToggle" aria-label="Toggle color theme">
        <span class="theme-icon theme-icon--sun">${icon("sun", 18)}</span>
        <span class="theme-icon theme-icon--moon">${icon("moon", 18)}</span>
      </button>
      <a href="/login/" class="nav__login">Login</a>
      <a href="/apply/" class="btn btn--primary btn--sm">Apply Now</a>
    </div>
    <button class="nav__burger" id="navBurger" aria-label="Open menu" aria-expanded="false" aria-controls="mobileNav">
      ${icon("menu", 22)}
    </button>
  </div>
  <div class="search-panel" id="searchPanel" hidden>
    <div class="search-panel__inner">
      <span class="search-panel__icon">${icon("search", 18)}</span>
      <input type="search" id="searchInput" placeholder="Search courses, labs, learning paths, articles…" aria-label="Search Hackverge">
      <button class="icon-btn" id="searchClose" aria-label="Close search">${icon("close", 16)}</button>
    </div>
    <div class="search-panel__results" id="searchResults"></div>
  </div>
</header>
<div class="mobile-nav" id="mobileNav" hidden>
  <nav aria-label="Mobile">
    ${nav.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
    <a href="/login/">Login</a>
    <a href="/apply/" class="btn btn--primary">Apply Now</a>
  </nav>
</div>`;
}

export function logoMark(size = 52) {
  return `<img class="brand-mark" src="/assets/logo/icon-64.png" width="${size}" height="${size}" alt="" aria-hidden="true">`;
}
export function wordmark(height = 22) {
  return `<span class="wordmark" style="height:${height}px">
    <img class="wordmark__img wordmark--dark" src="/assets/logo/wordmark-white.png" height="${height}" alt="Hackverge">
    <img class="wordmark__img wordmark--light" src="/assets/logo/wordmark-black.png" height="${height}" alt="Hackverge">
  </span>`;
}

// ------------------------------------------------------------
// Footer
// ------------------------------------------------------------
export function footer() {
  const col = (title, items) => `<div class="footer__col">
    <p class="footer__heading">${title}</p>
    <ul>${items.map((i) => `<li><a href="${i.href}">${i.label}</a></li>`).join("")}</ul>
  </div>`;
  return `<footer class="footer">
  <div class="footer__top">
    <div class="footer__brand">
      <a href="/" class="nav__brand">${logoMark()}${wordmark()}</a>
      <p class="footer__tagline">A career accelerator that transforms motivated learners into enterprise-ready cybersecurity professionals.</p>
      <div class="footer__social">
        <a href="${site.social.linkedin}" aria-label="LinkedIn" target="_blank" rel="noopener">${icon("linkedin", 18)}</a>
        <a href="${site.social.instagram}" aria-label="Instagram" target="_blank" rel="noopener">${icon("instagram", 18)}</a>
        <a href="${site.social.facebook}" aria-label="Facebook" target="_blank" rel="noopener">${icon("facebook", 18)}</a>
        <a href="${site.social.youtube}" aria-label="YouTube" target="_blank" rel="noopener">${icon("youtube", 18)}</a>
      </div>
    </div>
    ${col("Company", footerLinks.company)}
    ${col("Learn", footerLinks.learn)}
    ${col("Resources", footerLinks.resources)}
    <div class="footer__col footer__newsletter">
      <p class="footer__heading">Newsletter</p>
      <p class="footer__desc">Weekly practical cybersecurity insights and career tips.</p>
      <form class="newsletter-form" data-newsletter-form>
        <label class="sr-only" for="footerEmail">Email address</label>
        <input type="email" id="footerEmail" placeholder="you@email.com" required>
        <button type="submit" class="btn btn--primary btn--sm">Subscribe</button>
      </form>
      <p class="newsletter-form__note" data-newsletter-note hidden>You're subscribed. Welcome aboard.</p>
    </div>
  </div>
  <div class="footer__bottom">
    <p>© <span id="year">2026</span> ${site.name}. All rights reserved.</p>
    <ul class="footer__legal">
      ${footerLinks.legal.map((i) => `<li><a href="${i.href}">${i.label}</a></li>`).join("")}
    </ul>
  </div>
</footer>`;
}

// ------------------------------------------------------------
// Shared building blocks
// ------------------------------------------------------------
export function breadcrumbs(items) {
  // items: [{label, href}] last item has no href
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      ...(it.href ? { item: `${site.url}${it.href}` } : {}),
    })),
  };
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol>
      ${items
        .map((it, i) =>
          it.href
            ? `<li><a href="${it.href}">${it.label}</a></li>`
            : `<li aria-current="page">${it.label}</li>`
        )
        .join('<li class="breadcrumbs__sep" aria-hidden="true">/</li>')}
    </ol>
  </nav>
  <script type="application/ld+json">${JSON.stringify(ld)}</script>`;
}

export function eyebrow(text) {
  return `<p class="eyebrow">${text}</p>`;
}

export function sectionHeading({ eyebrow: eb, title, sub, align = "" }) {
  return `<div class="section-heading ${align}">
    ${eb ? `<p class="eyebrow">${eb}</p>` : ""}
    <h2>${title}</h2>
    ${sub ? `<p class="section-heading__sub">${sub}</p>` : ""}
  </div>`;
}

export function button({ label, href, variant = "primary", size = "", icon: ic, trailing = true }) {
  const cls = `btn btn--${variant}${size ? ` btn--${size}` : ""}`;
  const ico = ic ? icon(ic, 16) : "";
  return `<a href="${href}" class="${cls}">${!trailing && ico ? ico : ""}<span>${label}</span>${trailing && ico ? ico : ""}</a>`;
}

export function faqAccordion(items, name = "faq") {
  return `<div class="faq" data-faq>
    ${items
      .map(
        (f, i) => `<div class="faq__item">
      <button class="faq__q" aria-expanded="false" id="${name}-q-${i}" aria-controls="${name}-a-${i}">
        <span>${f.q}</span>
        <span class="faq__chevron">${icon("chevronDown", 18)}</span>
      </button>
      <div class="faq__a" id="${name}-a-${i}" role="region" aria-labelledby="${name}-q-${i}" hidden>
        <p>${f.a}</p>
      </div>
    </div>`
      )
      .join("")}
  </div>`;
}

export function ctaSection({ eyebrow: eb, title, sub, primary, secondary, variant = "" }) {
  return `<section class="cta-band ${variant}">
    <div class="container cta-band__inner">
      ${eb ? `<p class="eyebrow eyebrow--onDark">${eb}</p>` : ""}
      <h2>${title}</h2>
      ${sub ? `<p class="cta-band__sub">${sub}</p>` : ""}
      <div class="cta-band__actions">
        ${button({ ...primary, variant: "onlight", icon: "arrowRight" })}
        ${secondary ? button({ ...secondary, variant: "ghost-onDark" }) : ""}
      </div>
    </div>
  </section>`;
}

export function techGrid(list) {
  return `<div class="tech-grid">
    ${list
      .map(
        (t) => `<div class="tech-card">
      <span class="tech-card__icon">${icon(t.icon, 22)}</span>
      <span class="tech-card__name">${t.name}</span>
    </div>`
      )
      .join("")}
  </div>`;
}

export function pathBadge(level) {
  return `<span class="badge">${level}</span>`;
}

export function statHud(stats) {
  return `<div class="stat-hud">
    ${stats
      .map(
        (s) => `<div class="stat-hud__item">
      <span class="stat-hud__value">${s.value}</span>
      <span class="stat-hud__label">${s.label}</span>
    </div>`
      )
      .join('<span class="stat-hud__divider" aria-hidden="true"></span>')}
  </div>`;
}

export function networkGraphic({ id = "netgfx", compact = false } = {}) {
  // Signature abstract "threat graph" illustration — nodes + edges + radar sweep.
  const h = compact ? 380 : 520;
  return `<svg class="network-gfx" viewBox="0 0 560 ${h}" width="100%" height="100%" role="img" aria-label="Abstract network visualization" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="${id}-glow" cx="50%" cy="42%" r="60%">
      <stop offset="0%" stop-color="#6C4CF5" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#6C4CF5" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${id}-edge" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#8B6CFF"/>
      <stop offset="100%" stop-color="#29E0FF"/>
    </linearGradient>
  </defs>
  <circle cx="280" cy="${h * 0.4}" r="220" fill="url(#${id}-glow)"/>
  <g class="netgfx-sweep" style="transform-origin: 280px ${h * 0.4}px;">
    <path d="M280 ${h * 0.4} L280 ${h * 0.4 - 190} A190 190 0 0 1 430 ${h * 0.4 - 95} Z" fill="url(#${id}-edge)" opacity="0.08"/>
  </g>
  <circle cx="280" cy="${h * 0.4}" r="190" fill="none" stroke="#8B6CFF" stroke-opacity="0.18"/>
  <circle cx="280" cy="${h * 0.4}" r="130" fill="none" stroke="#8B6CFF" stroke-opacity="0.14"/>
  <circle cx="280" cy="${h * 0.4}" r="70" fill="none" stroke="#8B6CFF" stroke-opacity="0.14"/>
  <g stroke="url(#${id}-edge)" stroke-width="1.2" opacity="0.55">
    <line x1="280" y1="${h * 0.4}" x2="120" y2="${h * 0.4 - 120}"/>
    <line x1="280" y1="${h * 0.4}" x2="420" y2="${h * 0.4 - 140}"/>
    <line x1="280" y1="${h * 0.4}" x2="90" y2="${h * 0.4 + 90}"/>
    <line x1="280" y1="${h * 0.4}" x2="440" y2="${h * 0.4 + 110}"/>
    <line x1="280" y1="${h * 0.4}" x2="280" y2="${h * 0.4 - 190}"/>
    <line x1="120" y1="${h * 0.4 - 120}" x2="90" y2="${h * 0.4 + 90}"/>
    <line x1="420" y1="${h * 0.4 - 140}" x2="440" y2="${h * 0.4 + 110}"/>
  </g>
  <g fill="#EDEFF7">
    <circle cx="280" cy="${h * 0.4}" r="7" fill="#8B6CFF"/>
    <circle cx="120" cy="${h * 0.4 - 120}" r="4.5" fill="#29E0FF"/>
    <circle cx="420" cy="${h * 0.4 - 140}" r="4.5" fill="#29E0FF"/>
    <circle cx="90" cy="${h * 0.4 + 90}" r="4.5" fill="#29E0FF"/>
    <circle cx="440" cy="${h * 0.4 + 110}" r="4.5" fill="#29E0FF"/>
    <circle cx="280" cy="${h * 0.4 - 190}" r="4.5" fill="#29E0FF"/>
  </g>
</svg>`;
}
