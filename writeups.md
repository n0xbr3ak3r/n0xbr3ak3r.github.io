---
layout: default
title: Write-ups CTF
permalink: /writeups/
lang: fr
alt_url: /en/writeups/
---
<section class="page-intro"><p class="eyebrow">CTF · WRITE-UPS</p><h1>Défis,<br><em>méthodes & notes.</em></h1><p>Retrouvez les challenges par catégorie, leur plateforme et le lien vers le write-up complet sur Notion.</p></section>
{% assign groups = site.data.writeups | group_by: 'category_fr' %}<section class="writeup-list">{% for group in groups %}<div class="writeup-group"><h2>{{ group.name }}</h2><div class="writeup-grid">{% for item in group.items %}<article class="writeup-card"><span class="meta">{{ item.platform }}</span><h3>{{ item.challenge }}</h3><p>{{ item.summary }}</p><a href="{{ item.url }}" target="_blank" rel="noopener noreferrer">Lire sur Notion ↗</a></article>{% endfor %}</div></div>{% endfor %}{% if site.data.writeups.size == 0 %}<p class="empty-state">Aucun write-up publié pour le moment. Ajoutez une entrée à <code>_data/writeups.yml</code> avec sa catégorie, le nom du challenge, la plateforme et son URL Notion.</p><div class="writeup-group"><h2>Catégories à renseigner</h2><div class="topics"><span>Web exploitation</span><span>Blue Team</span><span>Cryptographie</span><span>Forensic</span><span>Reverse engineering</span></div></div>{% endif %}</section>
