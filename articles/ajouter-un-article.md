---
title: Comment publier, modifier ou supprimer un article sur AgaNews
date: 2026-09-14
author: Agashae
excerpt: Le mode d'emploi complet pour gérer le contenu du site en trois gestes simples.
---

# Gérer les articles d'AgaNews

Ce site n'a pas d'interface d'administration : **tout se passe dans le dossier `articles/`**.

## Publier un nouvel article

1. Créez un fichier `mon-article.md` dans le dossier `articles/`.
2. Ajoutez un en-tête (le "frontmatter") entre deux lignes `---` :

```
---
title: Mon titre
date: 2026-09-20
author: Votre nom
excerpt: Un court résumé affiché sur la page d'accueil.
---
```

3. Écrivez le contenu en markdown juste en dessous.
4. Ajoutez le nom du fichier dans `articles/manifest.json`.

## Modifier un article

Ouvrez simplement le fichier `.md` correspondant et éditez le texte. Les changements apparaissent au prochain chargement de la page.

## Supprimer un article

Supprimez le fichier `.md` **et** retirez son nom de `articles/manifest.json`.

C'est tout : pas de build, pas de base de données à synchroniser.
