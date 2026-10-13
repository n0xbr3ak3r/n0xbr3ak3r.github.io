# Portfolio de Wilson BARIKI

Portfolio Jekyll bilingue (français / anglais) destiné à GitHub Pages.

## Ajouter du contenu

- Projets : modifier `_data/projects.yml`.
- Write-ups CTF : ajouter les entrées dans `_data/writeups.yml`.
- Articles : ajouter un fichier Markdown avec front matter dans `_posts/`.
- Images : `assets/images/` (photo d’accueil : `assets/images/wilson.jpeg`).
- CV PDF : `assets/cv/wilson_bariki_cv.pdf` et `assets/cv/wilson_bariki_cv_en.pdf`.

Le guide complet et les exemples se trouvent dans `documentation.txt`.

## Prévisualiser et publier

Le projet utilise GitHub Pages et Jekyll. En cas d’erreur OpenSSL avec Ruby local, utilisez GitHub Pages pour la construction distante ou corrigez l’installation Ruby avant la prévisualisation locale.

Après avoir vérifié vos changements, depuis le dossier du dépôt :

```text
git add .
git commit -m "Mettre à jour le portfolio"
git push
```

GitHub Pages publie le contenu du dépôt si la configuration Pages du dépôt est active. Cette archive ne publie rien automatiquement.
