---
layout: single
title: Articles
permalink: /articles/
---

Browse our latest STEM articles below.

<div class="articles-grid">
{% for post in site.posts %}
  <a class="article-card" href="{{ post.url | relative_url }}">
    {% if post.image %}
      <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
    {% endif %}
    <h3>{{ post.title }}</h3>
    <p class="article-date">{{ post.date | date: "%B %d, %Y" }}</p>
  </a>
{% endfor %}
</div>
