---
layout: default
title: CTF Write-ups
permalink: /en/writeups/
lang: en
alt_url: /writeups/
---
<section class="page-intro"><p class="eyebrow">CTF · WRITE-UPS</p><h1>Challenges,<br><em>methods & notes.</em></h1><p>Browse challenges by category, see their platform, and follow the link to the full write-up on Notion.</p></section>
{% assign groups = site.data.writeups | group_by: 'category_en' %}<section class="writeup-list">{% for group in groups %}<div class="writeup-group"><h2>{{ group.name }}</h2><div class="writeup-grid">{% for item in group.items %}<article class="writeup-card"><span class="meta">{{ item.platform }}</span><h3>{{ item.challenge }}</h3><p>{{ item.summary_en }}</p><a href="{{ item.url }}" target="_blank" rel="noopener noreferrer">Read on Notion ↗</a></article>{% endfor %}</div></div>{% endfor %}{% if site.data.writeups.size == 0 %}<p class="empty-state">No write-ups published yet. Add an entry to <code>_data/writeups.yml</code> with its category, challenge name, platform, and Notion URL.</p><div class="writeup-group"><h2>Categories to add</h2><div class="topics"><span>Web exploitation</span><span>Blue Team</span><span>Cryptography</span><span>Forensics</span><span>Reverse engineering</span></div></div>{% endif %}</section>
