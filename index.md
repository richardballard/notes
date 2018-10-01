---
layout: home
---

Notes on development - this is a collection of things I learned around web development.

{% assign counter = 0 %}
{% for post in site.posts %}
  {% assign counter = counter | plus: 1 %}
{% endfor %}

Currently: <b>{{counter}}</b> notes.

---