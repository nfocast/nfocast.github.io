---
layout: categories
title: Funnies
---

{% for category in site.categories %}
    <div class="categories-title"><a href="/categories/funnies/index.md#{{ category | first }}">{{ category | first }}</a></div>   
{% endfor %}
