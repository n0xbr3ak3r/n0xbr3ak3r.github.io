---
layout: default
title: Blog
permalink: /blog/
lang: fr
alt_url: /en/blog/
---
<section class="page-intro"><p class="eyebrow">BLOG & NOTES</p><h1>Apprendre,<br><em>puis partager.</em></h1><p>Articles sur la cybersécurité, les laboratoires et les apprentissages en CTF. Chaque carte ouvre l’article complet.</p></section>
<section class="post-grid">{% assign posts_fr = site.posts | where: 'lang', 'fr' | sort: 'date' | reverse %}{% for post in posts_fr %}<article class="post-tile">{% if post.image %}<img class="tile-image" src="{{ post.image | relative_url }}" alt="{{ post.image_alt | default: post.title }}" loading="lazy">{% endif %}<div class="post-meta"><span>{{ post.category | default: 'Article' }}</span><time>{{ post.date | date: '%d.%m.%Y' }}</time></div><h2>{{ post.title }}</h2><p>{{ post.description }}</p><a href="{{ post.url | relative_url }}">Lire l’article ↗</a></article>{% endfor %}{% if posts_fr.size == 0 %}<p class="empty-state">Aucun article pour le moment. Ajoutez un fichier Markdown à <code>_posts/</code>.</p>{% endif %}</section>
