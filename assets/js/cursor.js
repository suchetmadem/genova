(() => {
  if (typeof window === "undefined") {
    return;
  }

  const finePointer = window.matchMedia("(pointer: fine)");
  if (!finePointer.matches) {
    return;
  }

  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";

  const dot = document.createElement("div");
  dot.className = "custom-cursor__dot";

  const halo = document.createElement("div");
  halo.className = "custom-cursor__halo";

  cursor.append(dot, halo);
  document.body.append(cursor);

  let latestX = 0;
  let latestY = 0;
  let rafId = null;

  const updatePosition = () => {
    cursor.style.transform = `translate3d(${latestX}px, ${latestY}px, 0)`;
    rafId = null;
  };

  const handleMove = (event) => {
    latestX = event.clientX;
    latestY = event.clientY;
    if (!rafId) {
      rafId = window.requestAnimationFrame(updatePosition);
    }
  };

  const hoverTargets = [
    ".stem-card a",
    ".masthead__menu-item a",
    ".masthead #site-nav.greedy-nav .visible-links a",
  ];

  const toggleHover = (isHovering) => {
    cursor.classList.toggle("custom-cursor--hover", isHovering);
  };

  const bindHoverTargets = () => {
    document.querySelectorAll(hoverTargets.join(",")).forEach((link) => {
      link.addEventListener("mouseenter", () => toggleHover(true));
      link.addEventListener("mouseleave", () => toggleHover(false));
    });
  };

  document.addEventListener("mousemove", handleMove, { passive: true });
  window.addEventListener("scroll", () => {
    if (!rafId) {
      rafId = window.requestAnimationFrame(updatePosition);
    }
  });

  bindHoverTargets();
  document.addEventListener("DOMContentLoaded", bindHoverTargets, {
    once: true,
  });
})();
