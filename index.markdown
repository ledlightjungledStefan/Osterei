---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Table test
---
{% assign row = site.data.authors[0] %}
{% for pair in row %}
  {{ pair | inspect }}
{% endfor %}