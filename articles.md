---
layout: page
title: Articles
permalink: /articles/
---

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem;">

{% for post in site.posts %}
  <div style="border: 1px solid #ddd; padding: 1rem;">
    
    {% if post.image %}
      <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" style="width: 100%; height: auto;">

    {% endif %}

    <h3>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>

    </h3>

    <p style="font-size: 0.9rem; color: #666;">
      {{ post.date | date: "%B %d, %Y" }}
    </p>

  </div>
{% endfor %}

</div>

<div data-reveal>
  <h3>Welcome to Genova</h3>
</div>

