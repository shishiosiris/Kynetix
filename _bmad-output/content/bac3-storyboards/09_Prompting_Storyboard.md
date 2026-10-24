# Module e-learning — Bonnes pratiques de prompting et outils d'aide au prompting
**Formation :** Responsable de Production Transport et Logistique (RPTL) — Bac+3
**Sous-titre du module :** Écrire de bonnes consignes à une IA générative, limiter les erreurs, protéger les données et s'outiller
**Durée cible :** 35–45 min
**Public :** Apprenants RPTL ou métiers proches (responsable entrepôt, affréteur, approvisionneur, coordinateur transport/logistique) — non-IT
**Statut :** 🔴 À créer — v1 storyboard **sans support de cours** (module 100 % à construire). Base : connaissances générales sur le prompting, module précédent (Overview IA), fil rouge du parcours (réflexe « vérifier avant d'agir », rôle du RPTL, anonymisation) et recherche sur les outils. **Le domaine évolue très vite : les noms et fonctions d'outils sont à revérifier avant production.**

**Positionnement dans le curriculum :** Dernier module du parcours actuel, qui suit **Overview IA**. Il est volontairement **pratique** : l'apprenant repart avec une méthode, des gabarits et des exercices applicables à des tâches de RPTL (mails transporteurs, synthèses d'incidents, tableaux d'écarts, procédures, scénarios de recette). Les exemples sont contextualisés métier transport/logistique, sans nom de client, de projet ni de prestataire (on utilise des désignations neutres : « transporteur A », « site X ») ; seul l'écran « outils d'aide au prompting » cite des outils (règle du projet, voir CLAUDE.md).

---

## Objectifs pédagogiques
À l'issue du module, l'apprenant sera capable de :
1. Définir ce qu'est un prompt et pourquoi la qualité de la consigne conditionne la qualité de la réponse.
2. Structurer un prompt avec un cadre à six éléments (rôle, contexte, tâche, contraintes, format, exemples).
3. Fournir un contexte métier utile **sans données confidentielles**, et définir un format de sortie exploitable.
4. Décomposer une tâche complexe, itérer et faire critiquer une réponse.
5. Appliquer des pratiques qui **limitent les erreurs** (sources fournies, droit de ne pas savoir, vérification des chiffres) et le réflexe « vérifier avant d'agir ».
6. Protéger les données et reconnaître le risque d'injection de prompt.
7. Choisir et utiliser des outils d'aide au prompting, et construire une bibliothèque de prompts d'équipe.
8. Tester et améliorer ses prompts, en s'appuyant sur sa connaissance d'usage de RPTL.

---

## Plan du module (13 écrans + quiz + synthèse)

| # | Écran | Durée estimée |
|---|-------|----------------|
| 1 | Accroche / mise en situation | 1-2 min |
| 2 | Objectifs du module | 1 min |
| 3 | Qu'est-ce qu'un prompt ? | 3 min |
| 4 | Le cadre à six éléments | 4 min |
| 5 | Être précis et donner le bon contexte métier | 4 min |
| 6 | Définir le format de sortie et donner des exemples | 3 min |
| 7 | Décomposer et raisonner par étapes | 3 min |
| 8 | Itérer et faire critiquer | 3 min |
| 9 | Limiter les erreurs — vérifier avant d'agir | 4 min |
| 10 | Protéger ses données et se prémunir de l'injection de prompt | 3 min |
| 11 | Les outils d'aide au prompting | 4 min |
| 12 | Construire la bibliothèque de prompts de l'équipe | 3 min |
| 13 | Atelier : réécrire et évaluer un prompt | 5 min |
| 14 | Quiz de validation (10 questions, 80% requis) | 5 min |
| 15 | Synthèse et points clés à retenir | 1-2 min |

---

### Écran 1 — Accroche / mise en situation
**Contenu clé :**
- Mise en situation narrative : "Deux collègues demandent la même chose à un assistant d'IA. Le premier écrit : « Écris un mail au transporteur pour le retard. » Le second précise le contexte, le ton, ce qu'il attend et ce qu'il ne veut pas. Les deux réponses n'ont rien à voir. Laquelle enverriez-vous ?"
- Teaser : ce module apprend à **bien parler à une IA** : une méthode simple, des exemples et des outils.

**Visuel suggéré :** Deux bulles de consigne côte à côte (vague / précise) et leurs deux réponses, la seconde nettement exploitable.

**Note formateur :** Ancrer l'intérêt — le gain n'est pas de « parler comme une machine », mais de **formuler clairement ce que l'on sait déjà faire en tant que professionnel**.

**[Exemple réel à intégrer]** — un cas vécu où une consigne mal posée a produit un résultat inutilisable, puis améliorée (anonymisé).

---

### Écran 2 — Objectifs du module
**Contenu clé :** Reprendre les objectifs pédagogiques ci-dessus sous forme de bullet points visuels (icônes).

**Visuel suggéré :** 8 pictos (prompt / cadre à six éléments / contexte / format / décomposer et itérer / limiter les erreurs et protéger les données / outils et bibliothèque / tester).

---

### Écran 3 — Qu'est-ce qu'un prompt ?
**Contenu clé :**
- Un **prompt** est la **consigne** donnée à une IA générative : la question, le contexte, les documents, les exigences. Le modèle ne « devine » pas ce que vous voulez : **il répond à ce qu'on lui donne** (rappel module IA : il ne voit que sa fenêtre de contexte).
- Principe central : **qualité de la consigne → qualité de la réponse**. Une consigne vague donne une réponse générique ; une consigne précise donne une réponse adaptée.
- Deux niveaux de consigne : les **instructions permanentes** (ou « prompt système », qui fixent le rôle, le ton et les règles générales d'un assistant) et la **consigne du moment** (la demande précise de l'utilisateur).
- Un bon prompt ressemble à un **brief donné à un collègue compétent mais qui ne connaît ni votre entrepôt, ni vos règles, ni votre situation du jour**.
- Message clé : le prompting n'est pas une astuce technique ; c'est un **exercice de clarté**.

**Visuel suggéré :** Image du brief à un nouveau collègue : ce qu'il faut lui dire pour qu'il fasse bien le travail.

---

### Écran 4 — Le cadre à six éléments
**Contenu clé :**
- Six éléments à se demander avant d'écrire une consigne :
  1. **Rôle** : à qui l'IA doit-elle ressembler ? (ex. « planificateur transport expérimenté »)
  2. **Contexte** : de quoi s'agit-il, pour qui, dans quelle situation ?
  3. **Tâche** : que doit-elle faire, précisément ? (une tâche à la fois)
  4. **Contraintes** : ce qu'il faut respecter ou éviter (longueur, ton, règles métier, ce qu'il ne faut pas inventer).
  5. **Format de sortie** : sous quelle forme veut-on la réponse ? (tableau, liste, mail, texte court)
  6. **Exemples** : un ou deux exemples de bonne réponse, si possible.
- Gabarit réutilisable :
  > *Tu es [rôle]. Contexte : [situation]. Ta tâche : [action précise]. Contraintes : [règles]. Format de réponse : [forme]. Exemple : [exemple].*
- Tous les éléments ne sont **pas toujours nécessaires** ; plus la tâche est importante ou complexe, plus ils comptent.

**Visuel suggéré :** Hexagone à six branches (rôle / contexte / tâche / contraintes / format / exemples) autour d'un prompt.

**Note formateur :** Ce cadre est une aide pédagogique parmi d'autres ; l'important est la démarche, pas l'acronyme.

---

### Écran 5 — Être précis et donner le bon contexte métier
**Contenu clé :**
- **Exemple avant / après** (tâche : mail à un transporteur après un retard) :
  - *Avant* : « Écris un mail au transporteur pour le retard. »
  - *Après* : « Tu es responsable transport. **Contexte** : le transporteur A a livré avec 48 h de retard plusieurs commandes destinées au site X cette semaine ; nous avons un engagement de livraison à 48 h. **Tâche** : rédige un mail qui demande une explication, un plan de rattrapage et un engagement chiffré pour la semaine prochaine. **Contraintes** : ton ferme mais courtois, 120 mots maximum, ne cite pas de montant d'indemnité, n'invente aucun fait. **Format** : objet + corps du mail. »
- Ce qui rend le second prompt meilleur : un **objectif clair**, un **public**, des **faits utiles**, des **limites** et un **format**.
- **Données utiles, pas de données sensibles** : on donne le **contexte métier** (types de flux, délais, règles), mais on **anonymise** : désignations neutres (« transporteur A », « site X »), pas de noms de clients, pas de données personnelles (règle du parcours).
- Donner les **règles métier connues** : ce que le RPTL sait par l'usage (délais réalistes, contraintes de quai, seuils) est justement ce qui rend la réponse utile.

**Visuel suggéré :** Deux consignes en regard (avant / après) avec les éléments du cadre surlignés dans la seconde.

**[Exemple réel à intégrer]** — une consigne transformée du vague au précis sur un cas RPTL, avec le gain constaté (anonymisé).

---

### Écran 6 — Définir le format de sortie et donner des exemples
**Contenu clé :**
- **Le format de sortie** rend la réponse **directement exploitable** : tableau avec colonnes nommées, liste numérotée, texte limité à N mots, plan en trois parties, mail avec objet.
- Exemples de demandes de format : « Présente le résultat dans un tableau avec les colonnes *cause*, *fréquence*, *action proposée* », « réponds en trois puces maximum », « commence par la conclusion ».
- **Donner un exemple** (technique dite *few-shot*) : on montre une ou deux paires « entrée → sortie attendue » pour que l'IA comprenne le style ou la logique. Exemple : classement d'incidents par catégorie, avec deux incidents déjà classés comme modèle.
- Précautions : un exemple trop particulier est **copié** par le modèle ; varier les exemples ou préciser « s'inspirer du style, pas du contenu ».
- Si on veut exploiter la réponse dans un tableur ou un autre outil, demander un **format structuré** et **vérifier** qu'il est bien respecté.

**Visuel suggéré :** Une même donnée présentée en trois formats (texte libre, tableau, trois puces) et un exemple « entrée → sortie » encadré.

---

### Écran 7 — Décomposer et raisonner par étapes
**Contenu clé :**
- Une tâche **complexe** en un seul prompt donne souvent un résultat moyen. On la **décompose** en étapes enchaînées (*chaîne de prompts*) :
  1. Comprendre ou résumer les données.
  2. Identifier les points clés ou les anomalies.
  3. Proposer des hypothèses ou des actions.
  4. Rédiger la version finale.
- **Demander un plan d'abord** : « avant de répondre, propose le plan en trois points ; j'ajusterai ».
- **Demander les hypothèses et les manques** : « liste les hypothèses que tu fais » ; « pose-moi les questions dont tu as besoin avant de répondre ».
- **Demander de raisonner par étapes** pour les problèmes à plusieurs étapes, tout en **vérifiant le résultat** (un raisonnement bien présenté peut rester faux).
- Exemple RPTL : transformer un tableau d'incidents de livraison en **synthèse hebdomadaire** en 4 étapes (nettoyage, classement des causes, tendances, synthèse pour la direction).

**Visuel suggéré :** Chaîne de 4 prompts avec la sortie de l'un qui alimente l'entrée du suivant.

---

### Écran 8 — Itérer et faire critiquer
**Contenu clé :**
- La première réponse est un **brouillon**, rarement la version finale. On **itère** : « raccourcis », « change le ton », « ajoute le cas où le transporteur refuse », « garde la structure, remplace l'exemple ».
- **Faire critiquer** : « relis ta réponse comme un contrôleur exigeant et liste ce qui pourrait être faux ou incomplet » ; « donne-moi deux autres façons de présenter cela et compare-les ».
- **Comparer des versions** : demander deux ou trois variantes puis choisir ou combiner.
- **Quand repartir de zéro** : si la conversation s'est égarée, mieux vaut ouvrir une **nouvelle conversation** avec une consigne propre que corriger indéfiniment.
- Garder trace de la **version du prompt qui a bien marché** (écran 12).

**Visuel suggéré :** Boucle « consigne → réponse → critique → consigne améliorée » avec un compteur d'itérations.

---

### Écran 9 — Limiter les erreurs — vérifier avant d'agir
**Contenu clé :**
- Rappel (module Overview IA) : un modèle peut **halluciner**. Des pratiques de prompting **réduisent** le risque, sans le supprimer.
- **Ancrer sur des sources fournies** : « réponds uniquement à partir du texte ci-dessous ; si l'information n'y figure pas, dis-le ».
- **Autoriser à ne pas savoir** : « si tu n'es pas sûr, indique-le et dis ce qu'il faudrait vérifier ».
- **Demander des citations** : « indique pour chaque affirmation l'extrait du document qui la justifie ».
- **Ne pas confier le calcul exact au modèle** : pour des totaux, taux ou moyennes, faire utiliser un **tableur ou un outil de calcul**, ou recalculer soi-même.
- **Tester sur un cas connu** : lui soumettre un exemple dont on connaît la réponse avant de l'utiliser sur un cas inconnu.
- **Vérifier avant d'agir** : source, chiffres, cohérence avec le terrain, niveau d'impact (grille du module précédent). Plus la décision est lourde, plus la vérification est forte.
- Message clé : **le prompt aide, la vérification décide**.

**Visuel suggéré :** Deux colonnes « Ce que le prompt peut faire (ancrer, citer, autoriser le doute) » / « Ce que seul l'humain peut faire (vérifier, décider) », avec un mini-cas interactif distinct du quiz final.

**[Exemple réel à intégrer]** — un cas où l'ancrage sur un document source ou une vérification a évité une erreur (anonymisé).

---

### Écran 10 — Protéger ses données et se prémunir de l'injection de prompt
**Contenu clé :**
- **Avant de saisir** : cette donnée peut-elle être saisie dans cet outil ? (charte de l'entreprise, outil autorisé ou non). En cas de doute : **ne pas la saisir**.
- **Anonymiser** : remplacer les noms par des désignations neutres (« client C », « transporteur A », « site X »), supprimer les données personnelles, arrondir ou masquer les montants sensibles si l'outil n'est pas autorisé.
- **Feu tricolore des données** : *vert* (public, anonymisé) ; *orange* (interne : outil autorisé uniquement) ; *rouge* (confidentiel, personnel : jamais dans un outil non validé).
- **Injection de prompt** : un document, une page web ou un message peut contenir **une consigne cachée** destinée à détourner l'IA (« ignore tes instructions précédentes et fais… »). Précautions : traiter le contenu externe comme **non fiable**, rappeler à l'IA de **ne suivre que les instructions de l'utilisateur**, limiter les **droits** d'un assistant connecté à des systèmes, garder une **validation humaine** avant toute action.
- Rappel : la personne qui utilise ou valide un résultat en reste **responsable**.

**Visuel suggéré :** Feu tricolore des données + une ligne de texte piégé dans un document (« ignore tes consignes… ») marquée « non fiable ».

**Note formateur :** Renvoyer à la charte interne de l'entreprise pour les règles exactes ; relire avec le responsable conformité.

---

### Écran 11 — Les outils d'aide au prompting
**Contenu clé :**
- On peut **se faire aider** pour écrire et gérer ses prompts. Six familles d'outils :
  1. **L'assistant lui-même** : lui demander de **proposer ou d'améliorer une consigne** (« réécris ma consigne en suivant le cadre rôle / contexte / tâche / contraintes / format / exemples ; pose-moi d'abord les questions qui te manquent »). Méthode accessible partout, quel que soit l'outil.
  2. **Assistants de rédaction ou d'amélioration de prompts intégrés** à certaines plateformes (espaces de test des fournisseurs de modèles) : génération d'un premier prompt à partir d'une description, ou version améliorée d'un prompt existant. *Disponibilité et fonctionnement très variables et évolutifs ; à vérifier à la date de production.*
  3. **Espaces de test (« playgrounds »)** : tester une même consigne avec différents modèles ou réglages et comparer les résultats.
  4. **Bibliothèques et galeries de prompts** : collections de consignes prêtes à adapter, proposées par des fournisseurs, des communautés ou **internes à l'entreprise**.
  5. **Instructions personnalisées, « projets » ou « assistants » préparamétrés** : on enregistre le rôle, le contexte et les règles une fois pour toutes pour une tâche récurrente.
  6. **Outils d'évaluation** : jeux de cas de test pour **mesurer la qualité** d'un prompt (réponses attendues, comparaison de versions) avant de le généraliser.
- Exemples cités dans des comparatifs de marché (**à vérifier avant publication**) : espaces de test et fonctions d'optimisation de prompt chez certains fournisseurs de modèles (par exemple l'outil « Optimize » de l'espace de test d'OpenAI) ; fonctions de génération de prompt dans la console d'Anthropic (leur évolution est à confirmer, une source indique le retrait de l'outil d'amélioration en août 2026) ; extensions tierces d'amélioration de prompts. Aucun de ces outils n'est un classement de qualité.
- Message clé : **un outil aide à structurer, il ne remplace pas la connaissance du métier** : c'est elle qui fait un bon prompt.

**Visuel suggéré :** Six cartes (assistant, assistant de prompt intégré, playground, bibliothèque, instructions enregistrées, évaluation), chacune avec un exemple d'usage RPTL, et la mention « Outils en évolution rapide — à revérifier ».

**Sources à citer à l'écran (note formateur) :** comparatifs et articles consultés au moment de la rédaction, à remplacer par la documentation officielle de chaque outil à la date de production :
- Comparatif d'espaces de test de prompts : https://futureagi.com/blog/best-llm-prompt-playground-tools-2026/
- Comparatif de générateurs de prompts : https://sureprompts.com/blog/best-ai-prompt-generators-2026
- Note sur l'évolution de l'outil d'amélioration de prompt d'un fournisseur : https://taku.ai/blog/claude-prompt-improver

**Note formateur :** Ces sources sont des blogs de comparaison, pas de la documentation officielle ; **recouper impérativement** avant publication. Ce paysage change en quelques mois ; privilégier une version de l'écran basée sur les **familles** plutôt que sur des noms.

---

### Écran 12 — Construire la bibliothèque de prompts de l'équipe
**Contenu clé :**
- Un prompt qui marche bien est un **actif de l'équipe** : on le **documente, on le partage, on l'améliore**.
- **Fiche de prompt** (gabarit) : titre, objectif, **auteur / propriétaire**, **version**, **entrées** nécessaires (quels documents, quelles données anonymisées), **prompt** complet, **sortie attendue**, **cas de test** (au moins un cas normal et un cas limite), **limites connues** et **vérifications à faire**, date de dernière revue.
- **Bonnes pratiques** : nommer clairement, **versionner**, ne jamais y mettre de données confidentielles, **relire** et **tester** avant de partager, supprimer les prompts obsolètes.
- **Rôle du RPTL — détenteur de la connaissance d'usage** : un prompt revient à **documenter une règle métier** (comment on classe un incident, quel ton avec quel transporteur, quels seuils). Le RPTL **fournit ces règles et exemples**, **teste** le prompt sur des cas réels et de pointe, et **l'améliore** à l'usage — comme pour les règles d'un WMS ou d'un WCS (modules précédents).
- Exemples de prompts à capitaliser pour un RPTL : mail de relance transporteur, synthèse hebdomadaire d'incidents, transformation d'un compte rendu en actions, **génération de scénarios de test** pour une recette à partir de règles métier, rédaction d'une procédure d'entrepôt.

**Visuel suggéré :** Une fiche de prompt remplie (exemple) et un cycle « rédiger → tester → partager → améliorer ».

**[Exemple réel à intégrer]** — un prompt d'équipe ayant fait gagner du temps ou fiabilisé une tâche récurrente (anonymisé).

---

### Écran 13 — Atelier : réécrire et évaluer un prompt
**Contenu clé :**
- **Exercice 1** : réécrire un prompt vague (« Fais un résumé de ce tableau d'incidents ») avec le cadre à six éléments.
- **Exercice 2** : améliorer un prompt qui produit un résultat inutilisable (pas de format, pas de contraintes) pour obtenir un tableau exploitable.
- **Exercice 3** : repérer dans un prompt les **données à anonymiser** et les remplacer.
- **Grille d'auto-évaluation d'un prompt** : mon prompt a-t-il un objectif clair ? un contexte utile mais sans donnée sensible ? des contraintes ? un format ? un exemple ? une instruction sur ce qu'il ne faut pas inventer ? une vérification prévue ?
- **Corrigé commenté** et **comparaison** de plusieurs versions : l'apprenant voit l'effet de chaque amélioration.

**Visuel suggéré :** Zone de saisie de prompt avec correcteur (checklist des 7 critères cochée automatiquement) et corrigé comparatif.

**Note formateur :** Activité interactive à produire sur plusieurs cas RPTL ; une version pourrait s'appuyer sur un assistant en bac à sable, à décider.

---

### Écran 14 — Quiz de validation (10 questions — 80% requis pour valider)
**Exemples de questions (à compléter jusqu'à 10) :**
1. (QCM) Pourquoi une consigne précise donne-t-elle de meilleurs résultats ?
2. (Association) Associer chaque élément du cadre (rôle, contexte, tâche, contraintes, format, exemples) à sa fonction.
3. (Mise en situation) Choisir parmi trois consignes celle qui est la mieux formulée pour un mail de relance transporteur.
4. (QCM) Qu'est-ce que donner un exemple (*few-shot*) et quel est son risque ?
5. (Mise en situation) Une tâche complexe donne un résultat moyen : comment la décomposer ?
6. (Vrai/Faux) Une réponse présentée avec un raisonnement détaillé est forcément exacte.
7. (Mise en situation) Quelle consigne ajouter pour que l'IA ne réponde qu'à partir d'un document fourni et signale ce qu'elle ne sait pas ?
8. (QCM) Quelles données faut-il anonymiser avant de les saisir dans un outil d'IA ?
9. (QCM) Qu'est-ce qu'une injection de prompt et quelle précaution prendre ?
10. (Mise en situation) Dans une bibliothèque de prompts d'équipe, que doit contenir une fiche et quel est le rôle du RPTL ?

**Note formateur :** Feedback explicatif après chaque réponse. Seuil de réussite : 8/10 bonnes réponses minimum.

---

### Écran 15 — Synthèse et points clés
**Contenu clé (rappel en 6 puces) :**
- La qualité du prompt conditionne la qualité de la réponse : une consigne est un brief clair.
- Six éléments : rôle, contexte, tâche, contraintes, format de sortie, exemples.
- Précis et contextualisé, mais **sans données confidentielles** : on anonymise.
- On décompose, on itère, on fait critiquer ; la première réponse est un brouillon.
- Pour limiter les erreurs : sources fournies, droit de ne pas savoir, citations, calculs recalculés ; **le prompt aide, la vérification décide**.
- Outils et bibliothèque de prompts : ils structurent et capitalisent, mais c'est la connaissance du métier du RPTL qui fait un bon prompt et le teste.

**Call-to-action :** Fin du parcours actuel. "Vous disposez maintenant du vocabulaire, des systèmes et des méthodes pour agir comme référent métier sur vos projets, avec ou sans IA. Téléchargez le glossaire complet."

**Visuel suggéré :** Carte mentale récapitulative, bouton "Revoir le parcours", lien de téléchargement du glossaire global.

---

## Glossaire
Les termes de ce module ont été ajoutés au [glossaire global](00_Glossaire_global.md) de la formation.

## Points ouverts / à valider avec toi
1. **Aucun support** : module construit de zéro ; à faire relire par un expert IA. Domaine très évolutif.
2. **Écran 11 (outils)** : les noms d'outils proviennent de blogs de comparaison, pas de documentation officielle, et leur disponibilité est incertaine (notamment un outil d'amélioration de prompt d'un fournisseur). Souhaites-tu une version centrée sur les **familles** d'outils, avec les noms ajoutés seulement après vérification ?
3. **Outils autorisés** : quels outils d'IA ton public (alternants, entreprises) est-il autorisé à utiliser ? Ajuster les écrans 10 et 11 en conséquence.
4. **Écran 13 (atelier)** : exercices à produire sur plusieurs cas RPTL ; faut-il prévoir un assistant en bac à sable dans l'application ?
5. **Exemples réels** (écrans 1, 5, 9, 12) à fournir, anonymisés, sans nom de client, de projet ni de prestataire.
6. Les 10 questions du quiz sont à finaliser (réponses/options complètes + feedbacks).
7. **Alignement du parcours** : le module se termine par un appel à l'action final ; à adapter si de nouveaux modules sont ajoutés.
