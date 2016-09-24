---
layout: post
---

{% assign category = site.my_categories | where: "slug", post.category %}
{% assign category = category[0] %}
{% if category %}
    {% capture category_content %}<a class="label" href="{{ category.url }}">{{ category.name }}</a>{% endcapture %}
{% endif %}

<body>
        <p id="post-meta">{{ category_content }}</p>
</body>

