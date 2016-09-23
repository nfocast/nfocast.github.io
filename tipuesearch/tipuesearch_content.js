
var tipuesearch = {"pages": [
    {% for post in pagination.posts %}
    {% include 'Tipue-Search.jquery.json' %}
    {% endfor %}
    {"title": "", "text": "", "tags": "", "loc": ""}
]};



