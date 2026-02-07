# Alternative ignorée (inconvénients)

Tu reçois en paramètre le **nom d’une technologie ou d’un design pattern** considéré comme alternative non retenue (ex. : « GitHub Pages », « WordPress », « Base de données SQL »).

## Instructions

1. **Lis** le fichier `.spec/02_ARCHITECTURE_CHOICES.md` et repère la section **# Choix d’architecture** : note la liste des technos ou design patterns **déjà justifiés** (noms en gras sous cette section).

2. **Pour la techno ou le pattern donné (l’alternative à blâmer)** : identifie une **liste d’inconvénients** (3 à 6 points) qui justifient de ne pas le retenir pour ce projet. **Deux contraintes** :
   - Chaque inconvénient doit être **spécifique à cette alternative** ; ne pas retenir un inconvénient qui s’appliquerait aussi à une techno déjà justifiée (ex. si Next.js est justifié, ne pas mettre pour Nuxt.js « Node/TypeScript compliqué », car Next.js aussi).
   - **Ne jamais** formuler un inconvénient du type « incompatible avec [techno justifiée] » ou « incohérent avec notre choix de [techno justifiée] ». L’objectif est d’expliquer pourquoi telles technos sont choisies et telles autres ne le sont pas ; on ne peut pas justifier en disant « on choisit A au lieu de B parce que B est incompatible avec A ». Les inconvénients doivent décrire des **défauts propres à l’alternative** (coût, complexité, écosystème, adéquation au besoin, etc.), pas son incompatibilité avec une techno déjà retenue.

3. **Ouvre ou complète** le fichier `.spec/02_ARCHITECTURE_CHOICES.md` :
   - Si le fichier n’existe pas : crée-le (et le dossier `.spec/` si besoin) avec un titre `# Choix d’architecture`, une section vide ou du contenu existant, puis la section `# Alternatives ignorées` et la nouvelle entrée.
   - Si la section `# Alternatives ignorées` n’existe pas : ajoute-la à la fin du fichier, puis la nouvelle entrée en liste en dessous.
   - Si la section existe déjà : ajoute uniquement la nouvelle entrée en liste à la fin de cette section.

4. **Format d’une entrée** dans la section `# Alternatives ignorées` : liste à puces. Chaque alternative est un item avec son nom en gras ; en sous-liste, chaque inconvénient (sans lien avec les US).

```markdown
# Alternatives ignorées

- **[Nom de la techno ou du pattern]**
  - [Intitulé de l’inconvénient 1].
  - [Intitulé de l’inconvénient 2].
```

5. **Réponds** à l’utilisateur en résumant : l’alternative ajoutée, les inconvénients retenus et le fait que l’entrée a été enregistrée dans `.spec/02_ARCHITECTURE_CHOICES.md` sous « Alternatives ignorées ».

## Exemple

**Entrée :** « Hébergement VPS traditionnel »

**Sortie possible dans la section Alternatives ignorées :**

- **Hébergement VPS traditionnel**
  - Coût mensuel ou annuel à prévoir.
  - Maintenance du serveur (mises à jour, sécurité) à la charge du projet.
  - Pas de déploiement automatique depuis Git sans configuration additionnelle.
