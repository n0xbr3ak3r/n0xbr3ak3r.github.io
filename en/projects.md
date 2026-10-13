---
layout: default
title: Projects
permalink: /en/projects/
lang: en
alt_url: /projects/
---
<section class="page-intro"><p class="eyebrow">PROJECTS</p><h1>Learning by<br><em>building.</em></h1><p>Personal projects and practical cybersecurity labs. Lab descriptions are starting points: add your own screenshots, diagrams, and verified results.</p></section>
<div class="section-title"><h2>Things I have built</h2><p>Product designed and developed.</p></div><section class="project-grid">{% for project in site.data.projects %}{% if project.kind == 'built' %}<article class="project-card"><span>{{ project.category_en }}</span><h2>{{ project.title_en }}</h2><p>{{ project.description_en }}</p><p class="tag">{{ project.stack }}</p></article>{% endif %}{% endfor %}</section>
<div class="section-title"><h2>Labs & completed projects</h2><p>Entries are editable in <code>_data/projects.yml</code>.</p></div><section class="project-grid">{% for project in site.data.projects %}{% if project.kind == 'lab' %}<article class="project-card"><span>{{ project.category_en }}</span><h2>{{ project.title_en }}</h2><p>{{ project.description_en }}</p><p class="tag">{{ project.stack }}</p></article>{% endif %}{% endfor %}</section>
