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
  <a class="home-quick-links__card" href="{{ '/articles/' | relative_url }}" aria-label="Read our articles">
    <iframe
      class="home-quick-links__frame"
      title="Articles"
      loading="lazy"
      srcdoc="<!doctype html>
      <html lang='en'>
        <head>
          <meta charset='utf-8' />
          <style>
            html, body { height: 100%; margin: 0; }
            body {
              display: flex;
              align-items: center;
              justify-content: center;
              background: #f6f3ef;
            }
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          </style>
        </head>
        <body>
          <img src='{{ '/assets/images/ChatGPT Image Jan 20, 2026, 05_35_28 PM.png' | relative_url }}' alt='Explore STEM illustration' />
        </body>
      </html>"
    ></iframe>
  </a>
  <a class="home-quick-links__card" href="{{ '/about/' | relative_url }}" aria-label="Learn more about Genova">
    <iframe
      class="home-quick-links__frame"
      title="About Us"
      loading="lazy"
      srcdoc="<!doctype html>
        <html lang='en'>
          <head>
            <meta charset='utf-8' />
            <style>
              html, body { height: 100%; margin: 0; }
              body {
                display: flex;
                align-items: center;
                justify-content: center;
                background: #f6f3ef;
              }
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            </style>
          </head>
          <body>
            <img src='{{ '/assets/images/monkey.png' | relative_url }}' alt='Monkey illustration' />
          </body>
        </html>"
    ></iframe>
  </a>
  <a class="home-quick-links__card" href="{{ '/about/' | relative_url }}" aria-label="Learn more about Genova">
    <iframe
      class="home-quick-links__frame"
      title="About Us"
      loading="lazy"
      srcdoc="<!doctype html>
        <html lang='en'>
          <head>
            <meta charset='utf-8' />
            <style>
              html, body { height: 100%; margin: 0; }
              body {
                display: flex;
                align-items: center;
                justify-content: center;
                background: #f6f3ef;
              }
              img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            </style>
          </head>
          <body>
            <img src='{{ '/assets/images/monkeymonkeymonkey.png' | relative_url }}' alt='Monkey illustration' />
          </body>
        </html>"
    ></iframe>
  </a>
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
