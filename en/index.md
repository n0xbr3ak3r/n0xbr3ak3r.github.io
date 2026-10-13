---
layout: default
title: Home
permalink: /en/
lang: en
alt_url: /
---
<section class="hero reveal"><div class="hero-text"><p class="eyebrow">CYBERSECURITY STUDENT · LOMÉ, TOGO</p><h1>Wilson<br><em>BARIKI.</em></h1><p class="hero-copy">I learn by building, testing, and documenting cybersecurity projects.</p><div class="hero-actions"><a class="button primary" href="/en/about/">About me <span>↗</span></a><a class="button" href="/en/blog/">Read the blog</a></div></div><div class="portrait-wrap"><div class="portrait-placeholder">Add your portrait here<br>assets/images/wilson.jpeg</div><img src="/assets/images/wilson.jpeg" alt="Portrait of Wilson BARIKI" onerror="this.style.display='none';this.previousElementSibling.style.display='grid'"></div></section>
<section class="statement reveal"><p>Areas I’m exploring</p><div class="topics"><span>Web Security</span><span>Blue Team</span><span>Cloud Security</span><span>CTF</span><span>Detection</span></div></section>
<section class="section reveal"><div class="section-head"><div><p class="eyebrow">RECENT WRITING</p><h2>Notes & articles.</h2></div><a href="/en/blog/">All articles ↗</a></div><div class="post-list">{% assign english_posts = site.posts | where: 'lang', 'en' | sort: 'date' | reverse %}{% for post in english_posts limit:3 %}<article class="post-card"><div class="post-meta"><span>{{ post.category | default: 'Article' }}</span><time>{{ post.date | date: '%d.%m.%Y' }}</time></div><h3>{{ post.title }}</h3><p>{{ post.description }}</p><a href="{{ post.url | relative_url }}">Read article ↗</a></article>{% endfor %}{% if english_posts.size == 0 %}<p class="empty-state">New articles will appear here.</p>{% endif %}</div></section>
<section class="section split reveal"><div><p class="eyebrow">FEATURED PROJECT</p><h2>Things I<br><em>build.</em></h2></div><div class="project-mini"><div><span>01 / AI + SECURITY</span><strong>AI Guardian</strong><p>Phishing analysis and cybersecurity awareness.</p></div><a href="/en/projects/">Explore ↗</a></div></section>
<section class="closing"><p class="eyebrow">LET’S CONNECT</p><h2>Curious about what I’m<br><em>working on next?</em></h2><a class="button primary" href="https://github.com/n0xbr3ak3r">Find me on GitHub ↗</a></section>
