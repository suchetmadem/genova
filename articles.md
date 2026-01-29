---
layout: single
title: Articles
permalink: /articles/
---

Browse our latest STEM articles below.

<div class="articles-grid">
{% for post in site.posts %}
  <a class="article-card" href="{{ post.url | relative_url }}">
    <div class="article-frame">
      <img
        class="article-frame__image"
        src="{{ '/assets/images/ChatGPT Image Jan 20, 2026, 05_35_28 PM.png' | relative_url | replace: ' ', '%20' }}"
        alt="ChatGPT artwork"
        loading="lazy"
      />
      <iframe
        src="{{ post.url | relative_url }}"
        title="{{ post.title }} preview"
        loading="lazy"
      ></iframe>
    </div>
    <div class="article-info">
      <h3>{{ post.title }}</h3>
      <p class="article-date">{{ post.date | date: "%B %d, %Y" }}</p>
    </div>
  </a>
{% endfor %}
</div>
