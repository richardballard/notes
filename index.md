---
layout: home
---

Here are a collections of notes on differing development topics. These are primarily for my own reference purposes.

{% assign counter = 0 %}
{% for post in site.posts %}
  {% assign counter = counter | plus: 1 %}
{% endfor %}

Total number of notes: <b>{{counter}}</b>

---