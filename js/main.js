// Scroll-reveal animation + occasional shooting star.
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reveal cards / sections as they enter the viewport
  var targets = document.querySelectorAll(
    "main > section:not(.hero) > *, .box, .grid > section, fieldset, .hero-art",
  );
  targets.forEach(function (el, i) {
    el.classList.add("reveal");
    el.style.setProperty("--d", (i % 4) * 90 + "ms");
  });

  if (reduce || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) {
      el.classList.add("in");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    targets.forEach(function (el) {
      io.observe(el);
    });
  }

  // Shooting star every few seconds
  if (!reduce) {
    var star = document.createElement("div");
    star.className = "shooting-star";
    document.body.appendChild(star);
    setInterval(function () {
      star.style.setProperty("--top", Math.round(Math.random() * 40) + "vh");
      star.style.setProperty(
        "--left",
        Math.round(30 + Math.random() * 60) + "vw",
      );
      star.classList.remove("go");
      void star.offsetWidth; // restart animation
      star.classList.add("go");
    }, 6000);
  }
})();
