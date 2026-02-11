# Supprimer une User Story

Tu reçois en paramètre une **description ou une référence** à la User Story à supprimer (ex. : « US-11 », « ajouter un commentaire », « commentaire sur un article »).

## Instructions

1. **Lis** le fichier `.spec/01_USER_STORIES.md` en entier.

2. **Repère** la User Story à supprimer :
   - Si le paramètre ressemble à un identifiant (ex. « US-11 », « US-05 »), cherche la ligne dont le numéro correspond.
   - Sinon, cherche la ligne dont le **contenu** correspond le mieux à la description fournie (mots clés, rôle, action ou bénéfice). Une seule US doit être concernée ; en cas de doute, demande une précision à l’utilisateur.

3. **Supprime** uniquement cette ligne (la ligne complète de la forme `- **US-XX** — ...`). Ne modifie pas le titre du fichier ni les autres lignes.

4. **Renumerotation** : après suppression, **renuméroter** les User Stories restantes pour que la numérotation soit consécutive à partir de US-01 (US-01, US-02, US-03, …). Exemple : si tu supprimes US-05, l’ancienne US-06 devient US-05, l’ancienne US-07 devient US-06, etc. Cela évite les trous dans la numérotation et limite les incohérences avec d’autres fichiers (ex. `.spec/02_ARCHITECTURE_CHOICES.md`) qui citent des US par numéro — tu peux signaler à l’utilisateur que les références à d’anciens numéros dans d’autres documents peuvent devoir être mises à jour.

5. **Réponds** à l’utilisateur en confirmant : la US supprimée (numéro et résumé du contenu), le fait que le fichier a été mis à jour et la renumérotation effectuée. Si aucune US ne correspondait au paramètre, indique-le clairement.
