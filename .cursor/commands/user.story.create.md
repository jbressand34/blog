# Créer une User Story

Tu reçois une **description de User Story** fournie par l'utilisateur (dans le message ou en paramètre).

## Instructions

1. **Reformule** la description en une User Story claire et bien structurée, de préférence au format :
   - **En tant que** [rôle/persona]
   - **Je veux** [action/fonctionnalité]
   - **Afin de** [bénéfice/valeur]

   Si la description est déjà proche de ce format, améliore-la (clarté, précision, critères mesurables). Sinon, déduis rôle, action et bénéfice à partir de la description.

2. **Numérote** la User Story de façon cohérente avec les US déjà présentes dans le fichier (ex. US-01, US-02, etc.). S'il n'y a pas encore d'US, commence par US-01.

3. **Ajoute** la User Story reformulée dans le fichier `.spec/01_USER_STORIES.md` :
   - Si le fichier n'existe pas, crée-le (et crée le dossier `.spec/` si besoin) avec un titre de section adapté (ex. « User Stories ») puis la nouvelle US.
   - Si le fichier existe, ajoute la nouvelle US à la fin du fichier, en conservant la mise en forme et la numérotation existantes.

4. **Réponds** à l'utilisateur en résumant ce qui a été fait : la US reformulée et l’emplacement où elle a été enregistrée.

## Exemple d’entrée

> L’utilisateur doit pouvoir s’inscrire avec son email pour recevoir la newsletter.

## Exemple de sortie (reformulation)

- **US-01** — En tant que visiteur du blog, je veux m’inscrire avec mon adresse email afin de recevoir la newsletter.
