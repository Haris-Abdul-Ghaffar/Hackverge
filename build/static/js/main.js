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
