---
layout: page
title: Publications
permalink: /publications/
---

<div class="c-phead">
  <h1>Publications</h1>
  <div class="sub">{{ site.publications | size }} publications · 2016 – 2023</div>
</div>

{% assign pubs_by_year = site.publications | group_by: "year" | sort: "name" | reverse %}
{% for year_group in pubs_by_year %}
<div class="c-pub-group">
  <div class="c-pub-yr">{{ year_group.name }}<span>{{ year_group.items | size }} paper{% if year_group.items.size > 1 %}s{% endif %}</span></div>
  {% for pub in year_group.items %}
  <a class="c-pub" href="{{ pub.url }}">
    <div class="c-pub-t">{{ pub.title }}</div>
    <div class="c-pub-au">{{ pub.authors }}</div>
    <div class="c-pub-vn">{{ pub.published_in }}</div>
  </a>
  {% endfor %}
</div>
{% endfor %}
