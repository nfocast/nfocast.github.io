---
content_type: json
layout: none
posts_per_page: 9999
single_page: true
format: none
posts_filters:
    not:
        has_tags: draft
---
{"pages": [
    {% for post in pagination.posts %}
    {% include 'searchdata.json' %}
    {% endfor %}
    {"title": "", "text": "", "tags": "", "loc": ""}
]}
