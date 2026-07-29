import { mkdirSync, writeFileSync, existsSync, readdirSync, statSync, readFileSync, cpSync, rmSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import { page } from "./components.mjs";
import { site, courses, learningPaths, blogPosts } from "./data.mjs";

import { homeBody } from "./pages/home.mjs";
import { aboutBody } from "./pages/about.mjs";
import { learningPathsIndexBody, learningPathDetailBody } from "./pages/learningPaths.mjs";
import { coursesIndexBody, courseDetailBody } from "./pages/courses.mjs";
import { enterpriseLabsBody } from "./pages/enterpriseLabs.mjs";
import { careerServicesBody } from "./pages/careerServices.mjs";
import { successStoriesBody } from "./pages/successStories.mjs";
import { instructorsBody } from "./pages/instructors.mjs";
import { blogIndexBody, blogPostBody } from "./pages/blog.mjs";
import { contactBody } from "./pages/contact.mjs";
import { applyBody } from "./pages/apply.mjs";
import { loginBody, privacyBody, termsBody, notFoundBody } from "./pages/misc.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "dist");
const STATIC = join(__dirname, "static");

// Start clean, then copy over persistent static assets (CSS, JS, logo images)
// before generating any pages, so /dist is always fully reproducible from source.
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync(STATIC, OUT, { recursive: true });

function write(path, html) {
  const full = join(OUT, path);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, html, "utf8");
}

function emit({ urlPath, title, description, body }) {
  const html = page({ title, description, path: urlPath, body });
  const filePath = urlPath === "/" ? "index.html" : `${urlPath.replace(/^\//, "").replace(/\/$/, "")}/index.html`;
  write(filePath, html);
  return { url: `${site.url}${urlPath}`, path: urlPath };
}

const allUrls = [];

// ---- Home ----
allUrls.push(
  emit({
    urlPath: "/",
    title: site.name,
    description: site.description,
    body: homeBody(),
  })
);

// ---- About ----
allUrls.push(
  emit({
    urlPath: "/about/",
    title: "About",
    description: "Why Hackverge exists, our mission, values, and the team building an enterprise-ready cybersecurity academy.",
    body: aboutBody(),
  })
);

// ---- Learning Paths ----
allUrls.push(
  emit({
    urlPath: "/learning-paths/",
    title: "Learning Paths",
    description: "Choose a cybersecurity career path — Offensive Security, Defensive Security, or Enterprise Security — with courses, tools, and job roles mapped out.",
    body: learningPathsIndexBody(),
  })
);
for (const p of learningPaths) {
  allUrls.push(
    emit({
      urlPath: `/learning-paths/${p.slug}/`,
      title: `${p.name} Learning Path`,
      description: p.heroDescription,
      body: learningPathDetailBody(p.slug),
    })
  );
}

// ---- Courses ----
allUrls.push(
  emit({
    urlPath: "/courses/",
    title: "Courses",
    description: "Browse Hackverge's full course catalog, grouped by career learning path — offensive, defensive, and enterprise security.",
    body: coursesIndexBody(),
  })
);
for (const c of courses) {
  allUrls.push(
    emit({
      urlPath: `/courses/${c.slug}/`,
      title: c.title,
      description: c.tagline,
      body: courseDetailBody(c.slug),
    })
  );
}

// ---- Enterprise Labs ----
allUrls.push(
  emit({
    urlPath: "/enterprise-labs/",
    title: "Enterprise Labs",
    description: "Learn by doing. Hackverge Enterprise Labs put you in enterprise technologies, realistic scenarios, and guided professional workflows.",
    body: enterpriseLabsBody(),
  })
);

// ---- Career Services ----
allUrls.push(
  emit({
    urlPath: "/career-services/",
    title: "Career Services",
    description: "Resume review, mock interviews, portfolio review, and career mentoring — professional development built into every Hackverge path.",
    body: careerServicesBody(),
  })
);

// ---- Success Stories ----
allUrls.push(
  emit({
    urlPath: "/success-stories/",
    title: "Success Stories & Community",
    description: "Student projects, community milestones, and the Hackverge learning community.",
    body: successStoriesBody(),
  })
);

// ---- Instructors ----
allUrls.push(
  emit({
    urlPath: "/instructors/",
    title: "Instructors & Mentors",
    description: "Meet the mentors behind Hackverge's Offensive Security, Defensive Security, and Enterprise Security learning paths.",
    body: instructorsBody(),
  })
);

// ---- Blog ----
allUrls.push(
  emit({
    urlPath: "/blog/",
    title: "Blog",
    description: "Practical cybersecurity insights, career advice, and tool guides from the Hackverge team.",
    body: blogIndexBody(),
  })
);
for (const post of blogPosts) {
  allUrls.push(
    emit({
      urlPath: `/blog/${post.slug}/`,
      title: post.title,
      description: post.excerpt,
      body: blogPostBody(post.slug),
    })
  );
}

// ---- Contact / Apply / Login / Legal ----
allUrls.push(
  emit({
    urlPath: "/contact/",
    title: "Contact",
    description: "Get in touch with Hackverge about learning paths, courses, or corporate training.",
    body: contactBody(),
  })
);
allUrls.push(
  emit({
    urlPath: "/apply/",
    title: "Apply Now",
    description: "Start your Hackverge application — tell us about your goals and an advisor will follow up.",
    body: applyBody(),
  })
);
allUrls.push(
  emit({
    urlPath: "/login/",
    title: "Student Login",
    description: "Log in to your Hackverge student dashboard.",
    body: loginBody(),
  })
);
allUrls.push(
  emit({
    urlPath: "/privacy/",
    title: "Privacy Policy",
    description: "Hackverge's privacy policy.",
    body: privacyBody(),
  })
);
allUrls.push(
  emit({
    urlPath: "/terms/",
    title: "Terms of Service",
    description: "Hackverge's terms of service.",
    body: termsBody(),
  })
);

// ---- 404 (GitHub Pages serves /404.html automatically for unknown paths) ----
write("404.html", page({ title: "Page Not Found", description: "This page could not be found.", path: "/404/", body: notFoundBody() }));

// ---- robots.txt ----
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);

// ---- sitemap.xml ----
const sitemapEntries = allUrls
  .map((u) => `  <url><loc>${u.url}</loc></url>`)
  .join("\n");
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`
);

// ---- search-index.json (consumed by /js/main.js) ----
const searchIndex = [
  ...courses.map((c) => ({ title: c.title, url: `/courses/${c.slug}/`, type: "Course", tags: `${c.title} ${c.tagline} ${c.tools.join(" ")}` })),
  ...learningPaths.map((p) => ({ title: p.name, url: `/learning-paths/${p.slug}/`, type: "Learning Path", tags: `${p.name} ${p.description}` })),
  ...blogPosts.map((b) => ({ title: b.title, url: `/blog/${b.slug}/`, type: "Article", tags: `${b.title} ${b.tags.join(" ")}` })),
  { title: "Enterprise Labs", url: "/enterprise-labs/", type: "Page", tags: "labs practice hands-on" },
  { title: "Career Services", url: "/career-services/", type: "Page", tags: "career resume interview mentoring" },
  { title: "About Hackverge", url: "/about/", type: "Page", tags: "about mission story" },
  { title: "Contact", url: "/contact/", type: "Page", tags: "contact email inquiry" },
];
write("search-index.json", JSON.stringify(searchIndex));

// ------------------------------------------------------------
// Base-path rewrite (for GitHub Pages *project* pages, which are
// served at username.github.io/repo-name/ instead of the root).
//
// Set BASE_PATH=/repo-name when running this script to prefix every
// root-relative href="/…", src="/…", and the search index fetch.
// Leave BASE_PATH unset (default) when deploying to a username.github.io
// root repo or a custom domain — those are served at "/" already.
// The included GitHub Actions workflow sets this automatically.
// ------------------------------------------------------------
const BASE_PATH = (process.env.BASE_PATH || "").replace(/\/$/, "");

if (BASE_PATH) {
  function walk(dir, acc = []) {
    for (const f of readdirSync(dir)) {
      const p = join(dir, f);
      if (statSync(p).isDirectory()) walk(p, acc);
      else acc.push(p);
    }
    return acc;
  }
  const rewriteExt = new Set([".html", ".json", ".txt", ".js"]);
  let rewritten = 0;
  for (const filePath of walk(OUT)) {
    const ext = filePath.slice(filePath.lastIndexOf("."));
    if (!rewriteExt.has(ext)) continue;
    let content = readFileSync(filePath, "utf8");
    const before = content;
    // href="/..." src="/..." action="/..."  (but not already-prefixed, and not "//host" protocol-relative)
    content = content.replace(/((?:href|src|action)=")\/(?!\/)/g, `$1${BASE_PATH}/`);
    // main.js: SEARCH_INDEX_URL = "/search-index.json"
    content = content.replace(/("\/search-index\.json")/g, `"${BASE_PATH}/search-index.json"`);
    if (content !== before) {
      writeFileSync(filePath, content, "utf8");
      rewritten++;
    }
  }
  console.log(`✔ Rewrote root-relative paths with base path "${BASE_PATH}" in ${rewritten} files`);
}

console.log(`✔ Built ${allUrls.length} pages into /dist`);
