/* =========================================================================
   SubmitReady — shared vanilla JS. No frameworks, no build step.
   Handles: mobile nav toggle, footer year, and a tiny scroll-reveal touch
   for the "How It Works" anchor link (native smooth-scroll handles the rest).
   ========================================================================= */
(function () {
  "use strict";

  // Mobile navigation toggle
  var toggle = document.querySelector("[data-nav-toggle]");
  var panel = document.querySelector("[data-nav-panel]");

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var isOpen = panel.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close the mobile panel when a link inside it is used
    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        panel.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && panel.classList.contains("is-open")) {
        panel.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Footer year
  var yearEls = document.querySelectorAll("[data-year]");
  yearEls.forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Only one FAQ item open at a time within a given list (progressive
  // enhancement — <details> works perfectly well without this).
  document.querySelectorAll("[data-faq-list]").forEach(function (list) {
    var items = list.querySelectorAll("details");
    items.forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (item.open) {
          items.forEach(function (other) {
            if (other !== item) other.open = false;
          });
        }
      });
    });
  });
})();

/* ---------------------------------------------------------------------
   Analytics placeholder
   ---------------------------------------------------------------------
   This site ships with no analytics by default. When you're ready to add
   measurement, this is where the snippets go:

   1) Google Analytics 4 (GA4)
      Paste your GA4 "gtag.js" snippet here, or add it to a
      <script> tag in the <head> of each page just before </head>.

   2) Google Search Console verification
      Easiest method: use the "HTML tag" verification option in Search
      Console and paste the provided <meta name="google-site-verification"
      content="..."> tag into the <head> of index.html (root page only
      is enough for the HTML-tag method).

   3) Meta Pixel
      Paste your Meta Pixel base code here, or in the <head> of each page.

   None of the above is required for the site to function.
   ------------------------------------------------------------------- */
