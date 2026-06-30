---
layout: page
title: Projects
permalink: /projects/
---

<div class="c-phead">
  <h1>Projects</h1>
  <div class="sub">Selected work &amp; open source</div>
</div>

<div class="c-proj-grid">
{% assign projs = site.projects | sort: "order" %}
{% for proj in projs %}
  <a class="c-proj-card" href="{{ proj.url }}">
    <div class="c-proj-head">
      <div class="c-proj-t">{{ proj.title }}</div>
      {% if proj.year %}<div class="c-proj-yr">{{ proj.year }}</div>{% endif %}
    </div>
    <div class="c-proj-desc">{{ proj.tagline }}</div>
    {% if proj.tech %}
    <div class="c-proj-tech">
      {% assign techs = proj.tech | split: ", " %}
      {% for t in techs %}<span class="c-tag">{{ t }}</span>{% endfor %}
    </div>
    {% endif %}
  </a>
{% endfor %}
</div>
