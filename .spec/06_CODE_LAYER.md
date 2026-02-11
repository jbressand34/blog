# Couche Code C4 — Blog

La couche Code (niveau 4 du modèle C4) correspond à la **structure du code** dans le dépôt. On ne maintient pas de diagramme Code dédié ; ce fichier sert de **mapping** entre les composants du [niveau 3](05_C4_COMPONENT_LAYER.puml) (Application web) et les chemins dans le repo.

## Mapping composant → code

| Composant | Chemins (ou à créer) | Rôle |
|-----------|----------------------|------|
| **Pages** | `app/`, `app/page.tsx`, `app/[slug]/page.tsx`, `app/tags/`, `app/about/` ou `app/presentation/page.tsx` | Pages et routing Next.js (file-based) : accueil, article, taxonomie, présentation. |
| **Layout** | `app/layout.tsx`, `components/Layout.tsx`, `components/Header.tsx`, `components/Nav.tsx` | Mise en page commune, en-tête, navigation. |
| **Lecture Markdown** | `lib/markdown/` ou `lib/mdx/`, utilitaires de lecture des `.md` et rendu (MDX, remark, rehype). | Chargement des articles, front matter, rendu du contenu. |
| **Taxonomie** | `lib/taxonomy.ts` ou `lib/taxonomy/`, `app/tags/[tag]/page.tsx`, `app/categories/` ou équivalent. | Extraction catégories/tags depuis les métadonnées, listes et pages par tag/catégorie. |

Les chemins ci-dessus sont des **cibles probables** pour une application Next.js (App Router) ; à ajuster ou créer au fur et à mesure de l’implémentation.

## Maintenance

Mettre à jour ce fichier lorsque la structure du code change de façon significative (nouveaux dossiers, déplacement des composants).
