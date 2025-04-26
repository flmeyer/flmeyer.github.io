---
layout: page
title: Publications
permalink: /publications/
---

{% assign sections = site.publications | group_by: "year" | sort: "month" | reverse %}
{% for section in sections %}
## {{ section.name }}  <!-- Year as a section header -->
  {% for publication in section.items %}
  <div>
  <a href="{{ publication.url }}" class="publication-card">
    <div class="publication-title">{{ publication.title }}</div>
    <div class="publication-details">
      <div><i class="fas fa-user"></i> <strong>Author(s):</strong> {{ publication.authors }}</div>
      <div><i class="fas fa-book"></i> <strong>Published in:</strong> {{ publication.published_in }}</div>
      <div><i class="fas fa-calendar-alt"></i> <strong>Year:</strong> {{ publication.month }} {{ publication.year }}</div>
    </div>
  </a>
  </div>
  {% endfor %}
{% endfor %}

