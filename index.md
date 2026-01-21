---
layout: splash
permalink: /
title: ""
---


<!-- Homepage Hero Text -->
<section class="hero hero--statement" data-reveal>
  <h1>
    Working to empower<br />
    youth minds in STEM
  </h1>

  <p>
    The Genova team focuses on supporting the youth by providing
    opportunities for research in STEM, new innovations, and
    existing advancements.
  </p>
</section>

<!-- Homepage quick links -->
<section class="home-quick-links" data-reveal>
  <iframe
    title="Articles"
    src="{{ '/assets/images/chatgpt-logo.svg' | relative_url }}"
    loading="lazy"
  ></iframe>
  <iframe
    title="Contact"
    src="{{ '/contact/' | relative_url }}"
    loading="lazy"
  ></iframe>
  <iframe
    title="About Us"
    src="{{ '/about/' | relative_url }}"
    loading="lazy"
  ></iframe>
</section>




<!-- Cuberto-ish staggered image grid -->
<section class="home-hero">
  <div class="stem-grid">
    <!-- Big feature card -->
    <div class="stem-card stem-card--tall" data-reveal data-delay="0">
      <a href="{{ '/articles/' | relative_url }}">
        <img src="{{ '/assets/images/stem-1.jpg' | relative_url }}" alt="Featured STEM visual">
      </a>
    </div>

    <!-- Staggered smaller cards -->
    <div class="stem-grid__stack">
      <div class="stem-card stem-card--small" data-reveal data-delay="120">
        <a href="{{ '/articles/' | relative_url }}">
          <img src="{{ '/assets/images/stem-2.jpg' | relative_url }}" alt="STEM visual 2">
        </a>
      </div>

      <div class="stem-card stem-card--small" data-reveal data-delay="240">
        <a href="{{ '/articles/' | relative_url }}">
          <img src="{{ '/assets/images/stem-3.jpg' | relative_url }}" alt="STEM visual 3">
        </a>
      </div>

      <div class="stem-card stem-card--small" data-reveal data-delay="360">
        <a href="{{ '/articles/' | relative_url }}">
          <img src="{{ '/assets/images/stem-4.jpg' | relative_url }}" alt="STEM visual 4">
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Short section under the grid (optional) -->
<section class="genova-blurb" data-reveal>
  <h2>What we publish</h2>
  <p>
    Clear explainers, visual breakdowns, and beginner-friendly STEM writing—built by students, for students.
  </p>
</section>
