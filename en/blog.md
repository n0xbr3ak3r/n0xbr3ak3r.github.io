---
layout: default
title: Writing
permalink: /en/blog/
lang: en
alt_url: /blog/
---
<section class="page-intro"><p class="eyebrow">BLOG & NOTES</p><h1>Learn,<br><em>then share.</em></h1><p>Articles about cybersecurity, lab work, and CTF learning. Select a card to open the full article.</p></section>
<section class="post-grid">{% assign posts_en = site.posts | where: 'lang', 'en' | sort: 'date' | reverse %}{% for post in posts_en %}<article class="post-tile">{% if post.image %}<img class="tile-image" src="{{ post.image | relative_url }}" alt="{{ post.image_alt | default: post.title }}" loading="lazy">{% endif %}<div class="post-meta"><span>{{ post.category | default: 'Article' }}</span><time>{{ post.date | date: '%d.%m.%Y' }}</time></div><h2>{{ post.title }}</h2><p>{{ post.description }}</p><a href="{{ post.url | relative_url }}">Read article ↗</a></article>{% endfor %}{% if posts_en.size == 0 %}<p class="empty-state">No articles yet. Add a Markdown file in <code>_posts/</code>.</p>{% endif %}</section>
