---
layout: default
title: Projets
permalink: /projects/
lang: fr
alt_url: /en/projects/
---
<section class="page-intro"><p class="eyebrow">PROJETS</p><h1>Apprendre en<br><em>construisant.</em></h1><p>Projets personnels et laboratoires pratiques en cybersécurité. Les fiches de laboratoire sont des bases à enrichir avec vos captures, schémas et résultats réels.</p></section>
<div class="section-title"><h2>Things I have built</h2><p>Produit conçu et développé.</p></div><section class="project-grid">{% for project in site.data.projects %}{% if project.kind == 'built' %}<article class="project-card"><span>{{ project.category_fr }}</span><h2>{{ project.title_fr }}</h2><p>{{ project.description_fr }}</p><p class="tag">{{ project.stack }}</p></article>{% endif %}{% endfor %}</section>
<div class="section-title"><h2>Projets réalisés & laboratoires</h2><p>Fiches modifiables dans <code>_data/projects.yml</code>.</p></div><section class="project-grid">{% for project in site.data.projects %}{% if project.kind == 'lab' %}<article class="project-card"><span>{{ project.category_fr }}</span><h2>{{ project.title_fr }}</h2><p>{{ project.description_fr }}</p><p class="tag">{{ project.stack }}</p></article>{% endif %}{% endfor %}</section>
