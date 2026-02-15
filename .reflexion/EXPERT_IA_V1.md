Expert IA

Après le boom des LLMs, beaucoup de projets ont été réalisés en IA et une part non négligeable de ces projets ont peu voire non pas satisfait leur clientele.

Aujourd'hui un nombre non négligeable de personnes sont peu confiantes dans la mise en place de solutions IA pour des périmetres fonctionnels spécifiques à leur métier autre que les périmetres des solutions génériques, donc dans la nécessité de projets IA pour concevoir des solutions spécifiques.
Plusieurs raisons à ce manque de confiance : 
- de mauvaises expériences passées sur des projets IA
- un séparatismes entre les Hype bros de l'IA et les sceptiques de l'IA . C'est soit l'IA est incroyable et va devenir surpuissante soit ne sert à rien, juste un perroquet stochastic et rien d'intelligent. Manque de nuance et manque de consensus
- beaucoup de nouveauté. Ca évolue vite. Pourquoi prendre du temps et des risques et des coûts maintenant alors qu'on peut avoir l'AGI dans quelques mois et que dès lors tout ira comem sur des roulettes ? On ne se lance que sur des petits trucs rapides et si c'est trop complexe alors on attend les prochaines évolutions du marché

Pour les évolutions en IA, les discours en évolué pour l'AGI ou l'ASI ce n'est pas dans quelques mois ni dans quelques années mais à plus long terme. Et que les évolutions seront progessives : 
- Déclaration de Sam Altman [TODO]
- Déclaration de Yann LeCunn [TODO]
- Déclaration de Richard Sutton [TODO]
- Discours de François Chollet [TODO]
L'architecture de base LLM date de 2018. Les améliorations viennent en grande partie de la mise à l'échelle des données et ressources de calcul (the bitter lesson) et du reinforcement learning en post training (pas très malin d'après Andrej Karpathy).
- Déclaration d'Andrej Karpathy sur le reinforcement learning [TODO]
- Déclaration de François Chollet sur le reinforcement learning [TODO]

Comme de nombreux secteurs de marché émergents, on a une première phase de "spéculation" (trouver un terme moins connoté négativement que spéculation [TODO]) pour ensuite passer à une phase de maturité du marché.
Esperons que l'on se dirige rapidement vers cette phase de maturité du marché.

C'est là qu'intervient le rôle de l'expert de l'IA, il doit être le garant de la qualité des solutions IA et rassurer les acteurs du marché sur la rentabilité de l'IA dans leurs workflow métiers spécifiques.

C'est un nouveau rôle qui n'existe peut-être pas encore et qui reste donc à bien définir. Pour cela, examinons les différents niveau de compréhension de l'IA.

- tres bas niveau : algorithmique, calcul, fonctions, optimisation, régression, structure de données. Cest le domaine clé du role d'ingénieur en machine learning ou de chercheur en machine learning. Il comprend un modele d'IA en profondeur et il cherche a optimiser les performances en creant de meilleurs structures et algos bas niveau. Par contre il se limite a des objectifs de performances sur des taches générique et il ne s'approprie pas ou très peu la complexité des besoins metiers spécifiques. Pourquoi ? Parce qu'a ce niveau de detail, il est impossible pour le moment de faire un composant qui adresse la complexité et la variété de tous les besoins metiers
- tres haut niveau : experimentation, tests, prise en main, uses cases, smell test, intuition. C'est le domaine clef du product owner. Il a une compréhension forte des besoins et de l'expérience metier et il sait evaluer la qualité d'une solution par rapport au metier sans connaitre le fonctionnement technique interne de la solution. Pourquoi il ne s'intéresse pas ou peu au fonctionnement interne de la solution? Parce que meme si il s'intéressait au fonctionnement interne avec un niveau de détail eleve, il n'a pas la connaissance approfondi pour faire le lien de causalité entre ces details techniques et la réalisation des besoins metiers  complexes par la solution.

On a d'un côté des machine learning engineer qui font des composants bas niveau pour des besoins generiques et de l'autre des product owners qui connaissent en profondeur les besoins spécifiques metiers et qui savent evaluer les solutions pour leur besoins metier de maniere intuitive et experimental sans connaitre le fonctionnement interne des solutions. Il existe donc un gap a remplir avec un role pour mettre en place les composants bas niveaux dans une solution qui reponds aux besoins spécifiques complexes metier.

Quels roles a-t-on utilisé pour remplir ce gap ? Vu que dans un nombre non négligeable de projet on a voulu aller simple et vite, on a pris des ingénieurs en solutions digitales qui savent connecter des composants entre eux pour faire des solutions.
Le seul soucis cest que la plupart des ingénieurs en solutions digitales n'ont pas une tres forte intuition du fonctionnement de ces composants IA, de leur limite et de leur force. On est parti du principe que les composants IA LLM sont assez "intelligent" pour réaliser un nombre de tache assez variés et en les guidant avec du prompt engineering donc pas besoin d'avoir une forte maitrise de ces composants.
Cest pourquoi un nombre non négligeable de projet IA n'ont pas ou peu atteint leurs objectifs, car on a mis en place des composants IA sans avoir une bonne connaissance de leur limites et de leurs forces et qu'on a pas su ni prévenir ni guerir les difficultés qui se sont présentés. Et aussi car on est parti du principe que ca allait etre simple et rapide pour adresser des besoins metiers spécifiques et complexes grace aux capacités a priori illimités de ces composants IA.

Des ingénieurs se sont spécialisés dans le prompt engineering en experimentant et en trouvant des bonnes pratiques. Cependant l'impact de ces bonnes pratiques est assez variable en fonction des cas metiers et aussi en fonction des differents modeles LLM qui sont très sensibles a la formulation.
Des ingénieurs ont trouvé des stratégies plus poussées : RAG, few shot samples, CoT, ReAct multi agent. Un role qui est apparu et qui peut représenter ces stratégies est le Flow engineer.Les solutions IA deviennent plus performantes sur les solutions spécifiques metiers mais demandent beaucoup plus de temps a configurer et a mettre en place. Ces ingénieurs s'inspire aussi des sciences cognitives pour concevoir ces stratégies (TODO exemple). Et on a aussi du mal a voir les forces et limites de chaque solution. On cherche toujours une stratégie optimale qui permet d'adresser l'ensemble des besoins spécifiques metiers. On arrive donc pas ni a prevenir ni guerir les difficultés sur les projets.
En parallèle des techniques sont apparus pour reentrainer les composants IA a "faible" cout : LoRA, SVF. Mais pour reentrainer, il faut une grande quantité de données. Et on ne comprend toujours pas les forces et limites des composans IA qu'on utilise.

On a aussi des influenceurs de l'IA qui manipulent les derniers outils IA et racontent leur expérience plus ou moins poussées. Cependant comme ils ne comprennent pas les tenants et aboutissants des modeles IA sous jaccents, ils sont condamnés a courrir après la nouveauté pour ne pas louper un game changer et pour rester dans la course. "Pour survivre il faut s'adapter", "l'IA ne fait que progresser" et "pas besoin de savoir comment l'IA fonctionne, il faut juste tester si ca marche" sont leurs motto. A l'inverse si ils avaient une bonne compréhension et une bonne intuition de ce qui a sous le capot, ils n'auraient pas besoin de tester chaque nouvel outil car ils pourraient anticiper les technological breakthrough ou a l'inverse les améliorations mineures liees a des hacks d'ingénieur.

Vous l'avez compris, la principale faiblesse d'une partie des ingénieurs en solutions digitales qui travaillent sur des projets IA c'est de ne pas avoir une assez bonne maitrise des forces et limites des composants IA pour prévenir et guérir les difficultés.
Du coup est-ce que la solution ne serait pas de ne faire travailler que des ingénieurs en machine learning sur des projets IA ? Ils doivent bien maîtriser les forces et limites des composants IA non?
Et bien ca depend de quels objectifs on fixe a ces composants IA. Pendant longtemps les objectifs étaient très concrets et atomiques: savoir detecter des objets sur une image. Savoir classifier les emotions d'un texte. Savoir faire du pos-tagging. Un composant IA avait simplement un seul objectif et avec un benchmark on pouvait savoir si le composant IA était fort ou non.
Maintenant les objectifs des composants IA sont très abstraits et sont pluriels : avoir de la conversation, avoir de la connaissance, avoir de la memoire, savoir raisonner, savoir planifier...
Un benchmark ne suffit plus car : la tache est tellement abstraite et grande que la quantité d'exemple est trop grande pour couvrir le périmètre ( par exemple raisonner, planifier ), le benchmark ne doit pas apparaître sur internet car les modeles ont énormément de memoire et peuvent memoriser une grande partie d'internet, on peut reverse engineer un benchmark sans y avoir acces et juste en faisant plein d'évaluation dessus (a creuser, utiliser le score benchmark comme une récompense en faisant du rl ?), notre maniere de mesurer l'objectif est distinct de l'objectif et en se focalisant sur la mesure on s'eloigne de l'objectif ( retrouver la loi et mieux formuler).

On s'appercoit que plus les modèles progressent, plus les chercheurs en IA se posent des questions sur la nature de l'intelligence, de la connaissance, de la consience. Ils ne comprennent pas la nature de ce qu'ils cherchent donc ils ne peuvent pas déterminer les forces et limites de leurs composants IA.

Comment comprendre les forces et limites des composants IA ? Il faut deja avoir une bonne intuition sur le fonctionnement de ces composants d'un point de vue d'ingénieur machine learning donc d'un point de vue des algos et structures de données.

Et là ou le bas blaisse, il faut avoir une tres bonne intuition sur la nature de ce qu'on cherche, cest a dire sur la nature de l'intelligence, qu'est-ce concretement et comment la decouper en plusieurs capacités pour pouvoir mieux comprendre son fonctionnement ?
Plus précisément ce qui nous intéresse ce nest pas l'intelligence mais les besoins spécifiques metiers qui nécessitent de l'intelligence, il nous faut donc un modèle conceptuel et predictif permettant de déterminer si une solution technique a base de composants IA permets d'adresser un besoin spécifique metier ou non. Pour simplifier par la suite on parlera de modele conceptuel de l'intelligence.
 
Et il faut faire le mapping entre les deux, cad entre l'intuition du fonctionnement des composants IA et l'intuition du fonctionnement des différentes capacités composants l'intelligence. Et a partir de là on peut recommander et combiner des composants IA pour correspondre aux capacités d'intelligence nécessaires aux besoins fonctionnels spécifiques du client.

Pour recapituler, on rajoute trois niveaux de compréhension de l'IA :
- faible niveau : intuitions et bonnes abstractions derriere le fonctionnement des composants IA
- moyen niveau : mapping entre les bonnes abstractions des composants IA et les bonnes abstractions des capacités composants l'intelligence 
- haut niveau : intuitions et bonnes abstractions derriere les capacités composant l'intelligence

Pour s'approprier le faible niveau de compréhension de l'IA, il faut s'intéresser et se renseigner sur le niveau d'en dessous, sur ce que font les ingénieurs en machine learning et pourquoi ils font comme ça.
Pour s'approprier le haut niveau de compréhension de l'IA, il faut s'intéresser aux sciences qui touchent a des aspects de l'intelligence, de maniere non exhaustive : psychologie, neuroscience, biologie, sociologie, robotique, cybernétique, philosophie...
Pour s'approprier le moyen niveau de compréhension de l'IA, il faut experimenter et trouver des paradigmes . Cest un champ a priori totalement novateur car on n'a pas a priori a l'heure actuelle de paradigme permettant de lier des capacités intellectuelles haut niveau (memoire, raisonnement, intuition...) a des capacités concretes vérifiables empiriquement et consensuelles des composants IA. Pour l'instant la compréhension de l'intelligence est soit en frog view ou en bird view. Il faudrait avoir l'intermédiaire, la fly view.

EDIT : je pense que cette stratégie d'appropriation niveau par niveau n'est pas optimale. Je pense qu'il faut apprendre les trois en meme temps en faisant des iterations. Pour chaque iteration on commence par une phase d'experimentation pour savoir si un composant IA permet d'adresser un type de besoin spécifique metier ou non ou une sous partie. Et dans un deuxième temps on mets a jour notre modele conceptuel en cherchant des explications a nos résultats d'experimentation en s'intéressant au fonctionnement interne du composant IA et en trouvant des modeles conceptuel qui matchent parmis ceux proposés par les sciences touchant a l'intelligence ( neuroscience, biologie, philo et ..)

Petite punchline de conclusion : croyez vous dans les prochaines années a l'avènement d'une solution unique IA permettant d'adresser tous les cas complexes metiers ou croyez vous plutot a des solutions composables et des architectures specifiques pour chaque cas metier ?
