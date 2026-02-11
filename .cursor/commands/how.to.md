# How to — Documentation procédurale

Tu reçois en paramètre une **phrase courte** décrivant une action ou une problématique (ex. : « run locally », « deploy on vercel », « add a new article »). L’utilisateur a invoqué la commande pour obtenir une **documentation « How to »** qui répond à cette phrase.

## Instructions

1. **Construire le nom du fichier** à partir de la phrase :
   - Prendre la phrase fournie (mots séparés par des espaces).
   - La normaliser : remplacer espaces et tirets par des underscores, supprimer les caractères inutiles, mettre en **MAJUSCULES**.
   - Préfixer par `HOW_TO_`.
   - Exemple : « run locally » → `HOW_TO_RUN_LOCALLY` ; « add a new article » → `HOW_TO_ADD_A_NEW_ARTICLE`.
   - Fichier cible : `.spec/HOWTO/HOW_TO_<NOM>.md` (extension `.md`).

2. **Contexte projet** : parcourir rapidement le projet (`.spec/`, `package.json`, structure `app/` ou `src/` si présent) pour adapter la documentation au projet (scripts, stack, conventions).

3. **Rédiger le contenu** du fichier : une **documentation courte et actionnable** qui répond à la question « How to &lt;phrase&gt; ? » dans le contexte de ce projet. Contenu typique :
   - Titre (ex. « How to run locally »).
   - Prérequis si besoin (Node, npm, clé API, etc.).
   - Étapes numérotées ou procédure claire.
   - Commandes ou extraits de code utiles.
   - Références internes (autres HOWTO, spec) si pertinent.
   Garder le fichier **concis** (une page ou moins si la procédure est simple).

4. **Écrire le fichier** :
   - Créer le dossier `.spec/HOWTO/` s’il n’existe pas.
   - Écrire ou écraser le fichier `.spec/HOWTO/HOW_TO_<NOM>.md` avec le contenu rédigé.

5. **Répondre** à l’utilisateur : indiquer le chemin du fichier créé ou mis à jour et résumer en une phrase ce qu’il contient (ex. : « Documentation « How to run locally » créée dans `.spec/HOWTO/HOW_TO_RUN_LOCALLY.md`. »).

## Exemple

**Entrée :** `/how.to run locally` (phrase : « run locally »)

**Fichier créé :** `.spec/HOWTO/HOW_TO_RUN_LOCALLY.md`

**Contenu type :** titre « How to run locally », prérequis (Node.js, npm), étapes : cloner / installer les deps (`npm install`), lancer `npm run dev`, ouvrir l’URL indiquée.
