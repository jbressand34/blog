# Supprimer un choix d’architecture ou une alternative

Tu reçois en paramètre le **nom d’une technologie ou d’un design pattern** à retirer du fichier (ex. : « Vercel », « Nuxt.js », « GitHub Pages »).

## Instructions

1. **Lis** le fichier `.spec/02_ARCHITECTURE_CHOICES.md` en entier.

2. **Repère** l’entrée correspondant au nom fourni :
   - Cherche une ligne de liste de la forme `- **Nom**` où le nom (sans tenir compte de la casse ni des variantes comme « .js » / « js ») correspond au paramètre.
   - L’entrée à supprimer comprend cette ligne **et** toutes les lignes suivantes qui sont des sous-items (commençant par deux espaces puis `- `), jusqu’à la prochaine ligne `- **` (nouvelle entrée) ou la fin du fichier / de la section.

3. **Supprime** uniquement ce bloc (ligne du titre en gras + toutes les sous-lignes d’avantages ou d’inconvénients). Ne supprime pas les autres entrées ni les titres de section (`# Choix d’architecture`, `# Alternatives ignorées`).

4. **Après suppression** :
   - Si une section ne contient plus aucune entrée (plus aucun `- **...**` sous ce titre), tu peux supprimer le titre de section et la ligne vide associée pour éviter une section vide.
   - Conserve la mise en forme du reste du fichier (ligne vide entre les sections, etc.).

5. **Réponds** à l’utilisateur en confirmant : le nom supprimé et le fait que le fichier `.spec/02_ARCHITECTURE_CHOICES.md` a été mis à jour. Si aucune entrée ne correspondait au paramètre, indique-le clairement.
