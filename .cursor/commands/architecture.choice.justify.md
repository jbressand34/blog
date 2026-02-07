# Justifier un choix d’architecture

Tu reçois en paramètre le **nom d’une technologie ou d’un design pattern** (ex. : « Static Site Generator », « Markdown », « GitHub Pages »).

## Instructions

1. **Lis** le fichier `.spec/01_USER_STORIES.md` pour connaître la liste des User Stories (US-01, US-02, etc.) et leur contenu.

2. **Pour la techno ou le pattern donné** :
   - Identifie une **liste d’avantages** (3 à 6 points) que ce choix apporte au projet.
   - Pour **chaque avantage**, indique quelles **User Stories en bénéficient** en citant leurs identifiants (ex. : US-01, US-03, US-08). Sois précis : ne cite que les US réellement concernées par cet avantage.

3. **Écris ou complète** le fichier `.spec/02_ARCHITECTURE_CHOICES.md` en **format liste uniquement** (pas de sections `##` / `###`) :
   - Si le fichier n’existe pas : crée-le (et le dossier `.spec/` si besoin) avec un titre optionnel en `#` puis la nouvelle entrée en liste.
   - Si le fichier existe : ajoute la nouvelle entrée en liste à la fin, en conservant le format déjà utilisé.

4. **Format d’une entrée** à utiliser dans `02_ARCHITECTURE_CHOICES.md` : **liste à puces uniquement** (pas de titres de section `##` ou `###`). Chaque choix est un item de liste avec son nom en gras ; en sous-liste, chaque avantage avec les US concernées.

```markdown
- **[Nom de la techno ou du pattern]**
  - [Intitulé de l’avantage 1] — Bénéficie à : US-XX, US-YY.
  - [Intitulé de l’avantage 2] — Bénéficie à : US-ZZ.
```

5. **Réponds** à l’utilisateur en résumant : le choix ajouté, les avantages retenus et le fait que l’entrée a été enregistrée dans `.spec/02_ARCHITECTURE_CHOICES.md`.

## Exemple

**Entrée :** « GitHub Pages »

**Sortie possible dans le fichier :**

- **GitHub Pages**
  - Hébergement gratuit et fiable — Bénéficie à : US-08.
  - Publication via Git (push = déploiement) — Bénéficie à : US-03, US-01.
  - Pas de serveur à maintenir — Bénéficie à : US-08, US-01.
