(function () {
  "use strict";

  /* ---------- Year in footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Nav scroll state ---------- */
  var siteNav = document.getElementById("siteNav");
  function onScroll() {
    if (!siteNav) return;
    if (window.scrollY > 8) siteNav.classList.add("is-scrolled");
    else siteNav.classList.remove("is-scrolled");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Announcement bar dismiss (7-day reappear) ---------- */
  var announce = document.getElementById("announce");
  var announceClose = document.getElementById("announceClose");
  var ANN_KEY = "hv-announce-dismissed-at";
  var SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000;
  try {
    var dismissedAt = localStorage.getItem(ANN_KEY);
    if (dismissedAt && Date.now() - parseInt(dismissedAt, 10) < SEVEN_DAYS) {
      if (announce) announce.classList.add("is-hidden");
    }
  } catch (e) {}
  if (announceClose) {
    announceClose.addEventListener("click", function () {
      announce.classList.add("is-hidden");
      try { localStorage.setItem(ANN_KEY, String(Date.now())); } catch (e) {}
    });
  }

  /* ---------- Theme toggle ---------- */
  var themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var root = document.documentElement;
      var current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
      var next = current === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("hv-theme", next); } catch (e) {}
    });
  }

  /* ---------- Mobile nav ---------- */
  var burger = document.getElementById("navBurger");
  var mobileNav = document.getElementById("mobileNav");
  if (burger && mobileNav) {
    burger.addEventListener("click", function () {
      var isOpen = !mobileNav.hasAttribute("hidden");
      if (isOpen) {
        mobileNav.setAttribute("hidden", "");
        burger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      } else {
        mobileNav.removeAttribute("hidden");
        burger.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
      }
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        mobileNav.setAttribute("hidden", "");
        burger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- FAQ accordions ---------- */
  document.querySelectorAll(".faq__q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", String(!expanded));
      if (panel) {
        if (expanded) panel.setAttribute("hidden", "");
        else panel.removeAttribute("hidden");
      }
    });
  });

  /* ---------- Category chip filters (blog, courses) ---------- */
  document.querySelectorAll("[data-filter-group]").forEach(function (group) {
    var chips = group.querySelectorAll(".category-chip");
    var targetSelector = group.getAttribute("data-filter-target");
    var items = document.querySelectorAll(targetSelector);
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.remove("is-active"); });
        chip.classList.add("is-active");
        var filter = chip.getAttribute("data-filter");
        items.forEach(function (item) {
          var cats = (item.getAttribute("data-cats") || "").split(",");
          if (filter === "all" || cats.indexOf(filter) !== -1) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  });

  /* ---------- Forms: fake client-side submit (no backend yet) ---------- */
  document.querySelectorAll("[data-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.classList.add("is-submitted");
      var successEl = form.querySelector("[data-form-success]");
      if (successEl) successEl.classList.add("is-visible");
      form.reset();
    });
  });

  document.querySelectorAll("[data-newsletter-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.parentElement.querySelector("[data-newsletter-note]");
      form.style.display = "none";
      if (note) note.removeAttribute("hidden");
    });
  });

  /* ---------- Search ---------- */
  var searchToggle = document.getElementById("searchToggle");
  var searchPanel = document.getElementById("searchPanel");
  var searchInput = document.getElementById("searchInput");
  var searchClose = document.getElementById("searchClose");
  var searchResults = document.getElementById("searchResults");

  function openSearch() {
    if (!searchPanel) return;
    searchPanel.removeAttribute("hidden");
    searchToggle.setAttribute("aria-expanded", "true");
    setTimeout(function () { searchInput && searchInput.focus(); }, 10);
  }
  function closeSearch() {
    if (!searchPanel) return;
    searchPanel.setAttribute("hidden", "");
    searchToggle.setAttribute("aria-expanded", "false");
  }
  if (searchToggle) {
    searchToggle.addEventListener("click", function () {
      if (searchPanel.hasAttribute("hidden")) openSearch();
      else closeSearch();
    });
  }
  if (searchClose) searchClose.addEventListener("click", closeSearch);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeSearch();
    if ((e.key === "/" || (e.key === "k" && (e.metaKey || e.ctrlKey))) && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      e.preventDefault();
      openSearch();
    }
  });

  var SEARCH_INDEX_URL = "/hackverge/search-index.json";
  var searchIndex = null;
  function loadIndex() {
    if (searchIndex) return Promise.resolve(searchIndex);
    return fetch(SEARCH_INDEX_URL)
      .then(function (r) { return r.json(); })
      .then(function (data) { searchIndex = data; return data; })
      .catch(function () { return []; });
  }
  function renderResults(items) {
    if (!searchResults) return;
    if (!items.length) {
      searchResults.innerHTML = '<p class="search-panel__empty">No results yet — try a course, technology, or topic.</p>';
      return;
    }
    searchResults.innerHTML = items
      .slice(0, 8)
      .map(function (i) {
        return '<a href="' + i.url + '">' + i.title + '<span class="tag">' + i.type + "</span></a>";
      })
      .join("");
  }
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      var q = searchInput.value.trim().toLowerCase();
      if (!q) { renderResults([]); return; }
      loadIndex().then(function (items) {
        var matches = items.filter(function (i) {
          return i.title.toLowerCase().indexOf(q) !== -1 || (i.tags || "").toLowerCase().indexOf(q) !== -1;
        });
        renderResults(matches);
      });
    });
  }
})();


/* ==========================================================================
   CYBER HERO ANIMATION (v2) — home .hero + every .page-hero
   Background layer only (z-index 0): never over text or the navbar.
   ========================================================================== */
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.querySelectorAll(".hero, .page-hero").forEach(function (hero) {
    var canvas = document.createElement("canvas");
    canvas.className = "hero__canvas";
    canvas.setAttribute("aria-hidden", "true");
    hero.prepend(canvas);

    var ctx = canvas.getContext("2d");
    var hexLayer = document.createElement("canvas");
    var hctx = hexLayer.getContext("2d");
    var W = 0, H = 0, nodes = [], pulses = [], blips = [], sweep = 0, scan = -160, raf = null;

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = hero.clientWidth; H = hero.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      paintHex(dpr);
      seed();
    }

    function paintHex(dpr) {
      hexLayer.width = W * dpr; hexLayer.height = H * dpr;
      hctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      hctx.clearRect(0, 0, W, H);
      hctx.strokeStyle = "rgba(139,108,255,0.06)";
      hctx.lineWidth = 1;
      var r = 28, hh = r * Math.sqrt(3);
      for (var y = 0, row = 0; y < H + r * 2; y += hh, row++) {
        for (var x = row % 2 ? r * 1.5 : 0; x < W + r * 2; x += r * 3) {
          hctx.beginPath();
          for (var i = 0; i < 6; i++) {
            var a = (Math.PI / 3) * i + Math.PI / 6;
            var px = x + r * Math.cos(a), py = y + r * Math.sin(a);
            if (i) hctx.lineTo(px, py); else hctx.moveTo(px, py);
          }
          hctx.closePath(); hctx.stroke();
        }
      }
    }

    function seed() {
      nodes = [];
      var n = Math.max(24, Math.min(80, Math.floor((W * H) / 18000)));
      for (var i = 0; i < n; i++) {
        nodes.push({ x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35,
          r: Math.random() * 1.6 + .6, cyan: Math.random() < .3 });
      }
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(hexLayer, 0, 0, W, H);

      /* radar */
      var cx = W * .72, cy = H * .46, R = Math.min(W, H) * .42;
      sweep += .006;
      var glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.6);
      glow.addColorStop(0, "rgba(108,76,245,0.16)");
      glow.addColorStop(1, "rgba(108,76,245,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(cx - R * 1.6, cy - R * 1.6, R * 3.2, R * 3.2);

      ctx.strokeStyle = "rgba(139,108,255,0.16)"; ctx.lineWidth = 1;
      for (var ring = 1; ring <= 4; ring++) { ctx.beginPath(); ctx.arc(cx, cy, R * ring / 4, 0, 6.2832); ctx.stroke(); }
      ctx.beginPath(); ctx.moveTo(cx - R, cy); ctx.lineTo(cx + R, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, cy - R); ctx.lineTo(cx, cy + R); ctx.stroke();

      if (ctx.createConicGradient) {
        var cg = ctx.createConicGradient(sweep, cx, cy);
        cg.addColorStop(0, "rgba(41,224,255,0.28)");
        cg.addColorStop(0.15, "rgba(41,224,255,0)");
        cg.addColorStop(1, "rgba(41,224,255,0)");
        ctx.fillStyle = cg;
      } else {
        ctx.fillStyle = "rgba(41,224,255,0.12)";
      }
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, R, 0, 6.2832); ctx.fill();

      ctx.strokeStyle = "rgba(127,238,255,0.5)"; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(sweep) * R, cy + Math.sin(sweep) * R); ctx.stroke();

      /* blips */
      if (Math.random() < .02 && blips.length < 7) {
        var ba = Math.random() * 6.2832, bd = (0.25 + Math.random() * 0.7) * R;
        blips.push({ x: cx + Math.cos(ba) * bd, y: cy + Math.sin(ba) * bd, t: 0 });
      }
      for (var b = blips.length - 1; b >= 0; b--) {
        var bl = blips[b]; bl.t += .016;
        if (bl.t > 1) { blips.splice(b, 1); continue; }
        ctx.fillStyle = "rgba(127,238,255," + (0.7 * (1 - bl.t)).toFixed(3) + ")";
        ctx.beginPath(); ctx.arc(bl.x, bl.y, 2 + bl.t * 7, 0, 6.2832); ctx.fill();
      }

      /* constellation */
      var LINK = 120;
      for (var i = 0; i < nodes.length; i++) {
        var p = nodes[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = W + 20; if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20; if (p.y > H + 20) p.y = -20;
        for (var j = i + 1; j < nodes.length; j++) {
          var q = nodes[j], dx = p.x - q.x, dy = p.y - q.y, d2 = dx * dx + dy * dy;
          if (d2 < LINK * LINK) {
            var a = 1 - Math.sqrt(d2) / LINK;
            ctx.strokeStyle = "rgba(139,108,255," + (a * .25).toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
            if (Math.random() < .0012 && pulses.length < 12)
              pulses.push({ a: p, b: q, t: 0, s: .012 + Math.random() * .02 });
          }
        }
      }
      for (var k = 0; k < nodes.length; k++) {
        var n = nodes[k];
        ctx.shadowColor = n.cyan ? "rgba(41,224,255,0.8)" : "rgba(155,130,255,0.8)";
        ctx.shadowBlur = 6;
        ctx.fillStyle = n.cyan ? "rgba(41,224,255,0.85)" : "rgba(182,166,255,0.8)";
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 6.2832); ctx.fill();
        ctx.shadowBlur = 0;
      }

      /* data pulses */
      for (var m = pulses.length - 1; m >= 0; m--) {
        var pu = pulses[m]; pu.t += pu.s;
        if (pu.t >= 1) { pulses.splice(m, 1); continue; }
        var x = pu.a.x + (pu.b.x - pu.a.x) * pu.t;
        var y = pu.a.y + (pu.b.y - pu.a.y) * pu.t;
        ctx.shadowColor = "rgba(41,224,255,0.9)"; ctx.shadowBlur = 10;
        ctx.fillStyle = "rgba(127,238,255,0.95)";
        ctx.beginPath(); ctx.arc(x, y, 2.2, 0, 6.2832); ctx.fill();
        ctx.shadowBlur = 0;
      }

      /* scanline */
      scan += 1.1; if (scan > H + 160) scan = -160;
      var sg = ctx.createLinearGradient(0, scan - 100, 0, scan);
      sg.addColorStop(0, "rgba(41,224,255,0)");
      sg.addColorStop(1, "rgba(41,224,255,0.06)");
      ctx.fillStyle = sg; ctx.fillRect(0, scan - 100, W, 100);
      ctx.fillStyle = "rgba(127,238,255,0.14)"; ctx.fillRect(0, scan, W, 1.5);

      raf = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { if (raf) { cancelAnimationFrame(raf); raf = null; } }
      else if (!raf) raf = requestAnimationFrame(tick);
    });
    raf = requestAnimationFrame(tick);
  });
})();


/* ==========================================================================
   MOBILE-ONLY: hide homepage sections that duplicate full pages
   (the content stays available on its own page)
   ========================================================================== */
(function () {
  if (!document.querySelector(".hero")) return;   // homepage only

  var HIDE_ON_MOBILE = [
    "Learning Paths",
    "From the Community",
    "From the Blog"
  ];

  var mq = window.matchMedia("(max-width: 960px)");

  function apply() {
    document.querySelectorAll(".section").forEach(function (sec) {
      var eb = sec.querySelector(".eyebrow");
      var shouldHide = eb && HIDE_ON_MOBILE.indexOf(eb.textContent.trim()) !== -1;
      sec.style.display = shouldHide && mq.matches ? "none" : "";
    });
  }

  apply();
  if (mq.addEventListener) mq.addEventListener("change", apply);
  else if (mq.addListener) mq.addListener(apply);   // older phones
})();
