# AgaNews

Un site d'actualités 100% statique où **chaque article est un fichier markdown**. Pas de base de données, pas de build, pas d'installation compliquée.

## Lancer le site

Comme le site charge les articles avec `fetch()`, il faut le servir via un petit serveur local (ouvrir `index.html` directement avec `file://` ne fonctionnera pas, à cause des restrictions de sécurité des navigateurs).

Deux options simples :

```bash
# Avec Python (déjà installé sur la plupart des systèmes)
python3 -m http.server 8000

# Ou avec Node.js
npx serve .
```

Puis ouvrez [http://localhost:8000](http://localhost:8000) dans votre navigateur.

## Structure du projet

```
AgaNews/
├── index.html              page d'accueil (liste des articles)
├── article.html             page d'un article
├── css/style.css            mise en forme
├── js/
│   ├── frontmatter.js       parseur du "frontmatter" markdown
│   ├── main.js               logique de la page d'accueil
│   └── article.js            logique de la page d'article
├── vendor/marked.min.js     librairie de rendu markdown → HTML (vendorisée, pas de CDN)
└── articles/
    ├── manifest.json         liste des fichiers d'articles à afficher
    └── *.md                  un fichier markdown par article
```

## Publier un nouvel article

1. Créez un fichier `articles/mon-super-article.md`.
2. Ajoutez un en-tête entre deux lignes `---` :

   ```markdown
   ---
   title: Mon super titre
   date: 2026-09-20
   author: Votre nom
   excerpt: Un court résumé affiché sur la page d'accueil.
   ---

   Le contenu de l'article en **markdown** commence ici.
   ```

3. Ajoutez le nom du fichier dans `articles/manifest.json` :

   ```json
   [
     "mon-super-article.md",
     "bienvenue-sur-aganews.md",
     "..."
   ]
   ```

Le site trie automatiquement les articles par date décroissante, donc l'ordre dans `manifest.json` n'a pas d'importance.

## Modifier un article

Éditez directement le fichier `.md` concerné (texte ou frontmatter). Rechargez la page pour voir le résultat.

## Supprimer un article

Supprimez le fichier `.md` **et** retirez son nom de `articles/manifest.json`.

## Découvrir le markdown

Le fichier [`articles/comment-fonctionne-le-markdown.md`](articles/comment-fonctionne-le-markdown.md) contient un guide express de la syntaxe (titres, listes, liens, citations, blocs de code...). C'est un bon point de départ pour apprendre en pratiquant.
