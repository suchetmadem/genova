---
layout: home
title: Genova
---


<!-- Hero -->
<section class="hero hero--cuberto" data-reveal>
  <h1>
    STEM articles<br />
    made simple.
  </h1>
  <p>
    Genova publishes clear, student-written explainers in AI, biology,
    engineering, and math.
  </p>

  <div class="hero-actions">
    <a class="btn" href="{{ '/articles/' | relative_url }}">Read articles</a>
    <a class="btn-outline" href="{{ '/about/' | relative_url }}">About us</a>
  </div>
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
