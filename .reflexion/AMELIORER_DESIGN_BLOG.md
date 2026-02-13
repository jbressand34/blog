# Suggestions pour améliorer la mise en page du blog

Liste d’idées pour faire évoluer le design et l’ergonomie du blog, sans ordre de priorité strict.

---

## Typographie et lisibilité

- **Largeur de lecture**  
  Garder une largeur max raisonnable pour le contenu (ex. 65–75 caractères par ligne). Actuellement `maxWidth: "48rem"` est déjà bien ; envisager une classe dédiée (ex. `.reading-width`) pour les articles et la page d’accueil.

- **Hiérarchie des titres**  
  Définir une échelle claire (h1 → h6) avec tailles, graisses et espacements cohérents (ex. `margin-top` / `margin-bottom`), y compris dans `.prose` pour le contenu Markdown.

- **Line-height**  
  Augmenter légèrement la hauteur de ligne pour le corps de texte des articles (ex. 1.65–1.75) pour améliorer la lecture sur écran.

- **Police**  
  Envisager une police de lecture dédiée (serif ou sans-serif lisible) pour le contenu des articles, tout en gardant une police plus neutre pour la navigation et les listes.

---

## Espacement et grille

- **Système d’espacement**  
  Introduire une échelle d’espacements (ex. 0.25rem, 0.5rem, 1rem, 1.5rem, 2rem) via des variables CSS ou un petit système de classes, pour éviter les valeurs arbitraires en inline.

- **Padding / margin du main**  
  Harmoniser les paddings (header, main, écrans étroits) et prévoir un comportement cohérent sur mobile (réduire les paddings latéraux sur petits écrans).

- **Espacement entre sections**  
  Clarifier les espacements entre “Browse by”, “All articles” et la liste d’articles pour une lecture plus aérée.

---

## Couleurs et contraste

- **Palette sémantique**  
  Définir quelques variables (texte principal, texte secondaire, bordure, lien, lien au survol) pour garder une cohérence et faciliter un éventuel thème sombre plus tard.

- **Liens**  
  Renforcer la visibilité des liens (couleur, soulignement au survol) et ajouter un état `:focus-visible` pour l’accessibilité clavier.

- **Contraste**  
  Vérifier que le gris secondaire (`#666`) et les bordures (`#eee`) respectent un ratio suffisant (WCAG) sur fond blanc.

---

## Composants et layout

- **Header**  
  Rendre le header un peu plus “premier plan” : ombre légère, fond légèrement différencié, ou simplement un contraste de bordure plus marqué. Sur mobile, envisager un menu compact si la nav s’enrichit.

- **Liste d’articles (accueil)**  
  Donner plus de structure à chaque entrée : bloc clair (carte ou ligne avec séparateur), date alignée à droite ou en petit sous le titre, éventuellement un extrait ou une catégorie sous le titre.

- **Tags / catégories (accueil)**  
  Afficher les tags et catégories sous forme de petits boutons ou pills cliquables plutôt qu’une liste inline, pour améliorer le balayage visuel et le clic sur mobile.

- **Page article**  
  Séparer visuellement le bloc “métadonnées” (date, catégorie, tags) du titre et du corps. Option : petit sous-titre ou barre verticale / ligne pour délimiter.

- **Footer**  
  Ajouter un pied de page minimal (copyright, lien vers le dépôt ou “About”) pour structurer la page et donner un point d’arrêt visuel.

---

## Accessibilité et états

- **Focus visible**  
  Style explicite pour `:focus-visible` sur les liens et boutons (outline ou ring) pour ne pas dépendre du style par défaut du navigateur.

- **Contraste au survol**  
  S’assurer que le survol des liens (soulignement, couleur) reste lisible et cohérent partout.

- **Landmarks**  
  Vérifier que `<main>`, `<header>`, `<nav>`, `<article>` sont bien utilisés (déjà le cas) et qu’un seul `<h1>` par page décrit le contenu principal.

---

## Technique et maintenabilité

- **Réduire les styles inline**  
  Migrer progressivement les `style={{ ... }}` vers des classes dans `globals.css` ou des modules CSS, pour faciliter les changements globaux et le thème.

- **Variables CSS**  
  Introduire des variables (couleurs, espacements, `max-width`, polices) à la racine pour centraliser les choix de design et préparer un éventuel dark mode.

- **Responsive**  
  Vérifier le rendu sur étroit (320px–480px) : titres, listes, pills tags/catégories, header. Ajuster `padding`, `font-size` et passage à la ligne si besoin.

---

## Bonus (optionnel)

- **Date relative**  
  Afficher “2 days ago” en plus de la date absolue pour les articles récents (avec un composant ou une petite lib, sans surcharger le build).

- **Lecture time**  
  Estimer et afficher “X min read” à partir du nombre de mots du contenu Markdown.

- **Retour en haut**  
  Lien ou bouton “Back to top” sur les longues pages d’article.

- **RSS**  
  Lien vers un flux RSS dans le header ou le footer pour les lecteurs qui préfèrent les agrégateurs.

---

*Document de réflexion — à prioriser selon le temps et les objectifs du blog.*
