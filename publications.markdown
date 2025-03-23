---
layout: page
title: Publications
permalink: /publications/
---

{% assign sections = site.publications | group_by: "category" %}

{% for section in sections %}

{% for publication in section.items %}
<a href="{{ publication.url }}"> {{ publication.title }}  </a>
  <p><strong>Author(s):</strong> {{ publication.authors }}</p>
  <p><strong>Published in:</strong> {{ publication.published_in }}</p>
  <p><strong>Year:</strong> {{ publication.year }}</p>
  {% if publication.link %}
  <p><strong>External Link:</strong> {{ publication.link }}</p>
  {% endif %}
  ---
{% endfor %}

{% endfor %}
