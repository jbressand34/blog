# How to run locally

Lancer le blog en mode développement sur ta machine.

## Prérequis

- **Node.js** 18+ (recommandé : LTS)
- **npm** (fourni avec Node.js)

Vérifier : `node -v` et `npm -v`.

## Étapes

1. **Cloner le dépôt** (si ce n’est pas déjà fait) et te placer à la racine du projet :
   ```bash
   cd /chemin/vers/blog
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur** : [http://localhost:3000](http://localhost:3000).  
   Next.js affiche l’URL dans le terminal (souvent `http://localhost:3000`).

Pour arrêter le serveur : `Ctrl+C` dans le terminal.

## Références

- Scripts définis dans `package.json` (ex. `npm run build` pour un build de production).
- Spec : `.spec/01_USER_STORIES.md`, `.spec/06_CODE_LAYER.md`.
