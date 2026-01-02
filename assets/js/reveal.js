const els = document.querySelectorAll("[data-reveal]");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("reveal-in");
  });
}, { threshold: 0.15 });

els.forEach(el => io.observe(el));
