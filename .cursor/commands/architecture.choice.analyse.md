# Analyser une incohérence dans les choix d’architecture

Tu reçois en paramètre une **question ou une remarque** sur une incohérence potentielle dans les justifications (avantages des technos retenues) ou les blames (inconvénients des alternatives ignorées) du fichier `.spec/02_ARCHITECTURE_CHOICES.md`.

## Instructions

1. **Lis** les fichiers `.spec/02_ARCHITECTURE_CHOICES.md` et `.spec/01_USER_STORIES.md` pour avoir le contexte complet des choix et des user stories.

2. **Rappelle brièvement les règles** utilisées pour ce fichier (sans tout détailler) :
   - **Choix justifiés** : avantages spécifiques, chaque avantage lié aux US qui en bénéficient.
   - **Alternatives ignorées** : inconvénients **propres** à l’alternative (pas d’inconvénient qui s’appliquerait aussi à une techno justifiée) ; **jamais** d’inconvénient du type « incompatible avec [techno justifiée] ».

3. **Analyse** la question ou la remarque de l’utilisateur : repère dans `.spec/02_ARCHITECTURE_CHOICES.md` les passages concernés et dis s’il y a bien une incohérence (contradiction, avantage/inconvénient partagé avec une techno justifiée, formulation « incompatible avec », etc.).

4. **Propose des solutions** pour y remédier, de façon concrète et actionnable :
   - **Réécriture** : proposer une nouvelle formulation pour un avantage ou un inconvénient (en citant l’entrée et le libellé actuel).
   - **Suppression** : indiquer quel(s) point(s) supprimer et pourquoi.
   - **Ajout ou précision** : suggérer un complément ou une nuance pour lever l’ambiguïté.
   - **Déplacement** : si un point serait plus cohérent ailleurs (ex. passer d’un blame à un avantage d’une techno justifiée), le signaler.

5. **Réponds** à l’utilisateur en structurant ta réponse ainsi :
   - **Constat** : résumé de l’incohérence (ou confirmation qu’il n’y en a pas / qu’elle est mineure).
   - **Solutions proposées** : liste numérotée des actions recommandées, avec le libellé exact à modifier si c’est une réécriture.
   - **Conclusion** : indiquer que l’utilisateur peut demander d’appliquer ces modifications dans le fichier s’il le souhaite.

Tu ne modifies **pas** le fichier `.spec/02_ARCHITECTURE_CHOICES.md` dans cette commande : tu analyses et tu proposes. Les modifications seront faites à la demande de l’utilisateur (ou via une autre commande / un message explicite).
