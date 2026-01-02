document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("[data-reveal]");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        // Support per-item delay: data-delay="120"
        const delay = entry.target.getAttribute("data-delay");
        if (delay) entry.target.style.transitionDelay = `${delay}ms`;

        entry.target.classList.add("reveal-in");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => io.observe(el));
});
