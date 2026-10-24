# Module e-learning — Comprendre les projets IT
**Formation :** Responsable de Production Transport et Logistique (RPTL) — Bac+3, module socle
**Sous-titre du module :** Métiers de l'IT, cycle de vie projet, Waterfall vs Agile
**Durée cible :** 20–30 min
**Public :** Nouveaux apprenants, futurs RPTL ou métiers proches (responsable entrepôt, affréteur, approvisionneur, coordinateur transport/logistique) — non-IT
**Statut :** 🔴 À créer — v2 storyboard (corrigée)

**Positionnement dans le curriculum :** Ce module est un module **socle**, transversal et générique — il ne traite d'aucun système précis (OMS/WMS/TMS...) ni d'aucun éditeur. Il pose le vocabulaire et les repères nécessaires avant d'aborder les modules systèmes. Les exemples sont contextualisés métier transport/logistique (profil RPTL) sans jamais citer de logiciel ni de nom de client.

---

## Objectifs pédagogiques
À l'issue du module, l'apprenant sera capable de :
1. Expliquer ce qu'est un projet IT et pourquoi un responsable métier (RPTL ou équivalent) y a un rôle actif, pas seulement l'IT.
2. Identifier les grandes phases d'un projet IT et ce qui se joue à chacune, côté métier.
3. Distinguer les approches Waterfall et Agile et identifier quand utiliser l'une ou l'autre.
4. Repérer, dès le recueil du besoin, les risques d'un mauvais cadrage métier — premier ancrage du réflexe transversal **"vérifier avant d'agir"**.

---

## Plan du module (10 écrans + quiz)

| # | Écran | Durée estimée |
|---|-------|----------------|
| 1 | Accroche / mise en situation | 1-2 min |
| 2 | Objectifs du module | 1 min |
| 3 | Qu'est-ce qu'un projet IT ? | 3 min |
| 4 | Les acteurs métiers vs IT (MOA/MOE, sponsor, key users) | 3 min |
| 5 | Le cycle de vie d'un projet IT — vue d'ensemble | 2 min |
| 6 | Zoom sur chaque phase et le rôle du métier | 4 min |
| 7 | Waterfall : principe et cas d'usage | 3 min |
| 8 | Agile : principe et cas d'usage | 3 min |
| 9 | Waterfall vs Agile — comparatif et cas hybrides | 3 min |
| 10 | Vérifier avant d'agir — le réflexe clé dès le cadrage | 2 min |
| 11 | Quiz de validation (10 questions, 80% requis) | 5 min |
| 12 | Synthèse et points clés à retenir | 1-2 min |

---

### Écran 1 — Accroche / mise en situation
**Contenu clé :**
- Mise en situation narrative : "Vous prenez vos fonctions de Responsable de Production Transport et Logistique. Un nouveau système doit être déployé sur votre site. Le chef de projet parle de 'sprint', de 'recueil de besoins', de 'MOA'... Comprenez-vous ce qui se joue, et surtout, votre rôle dans ce projet ?"
- Teaser : ce module donne les clés pour comprendre le langage et le déroulé d'un projet IT — indispensable avant d'aborder les systèmes eux-mêmes (OMS, WMS, TMS...).

**Visuel suggéré :** Illustration d'une réunion de projet (persona métier terrain + chef de projet IT), ou timeline stylisée d'un projet.

**Note formateur :** Ancrer l'intérêt — ce n'est pas un module théorique abstrait, c'est le vocabulaire qu'ils vont entendre dès leur première mission en alternance.

**Exemple réel (anonymisé) — cas fil rouge du module :** le déploiement, **en magasin**, d'un **nouvel outil de scan pour la préparation de marchandise**. L'objectif du projet : **fiabiliser la préparation et les stocks** en contrôlant les références préparées. Un responsable d'équipe est nommé **référent métier local** : il devient le « sachant » des process de préparation et le **key user**, chargé aussi de former les collaborateurs de proximité. En quelques semaines, il découvre un vocabulaire qu'il n'avait jamais utilisé : recueil de besoins, conception, recette, déploiement, hypercare... Ce cas sera repris aux écrans 4, 6, 9 et 10.

---

### Écran 2 — Objectifs du module
**Contenu clé :** Reprendre les 4 objectifs pédagogiques ci-dessus sous forme de bullet points visuels (icônes).

**Visuel suggéré :** 4 pictos (projet / acteurs / cycle / vérifier avant d'agir) avec texte court sous chacun.

---

### Écran 3 — Qu'est-ce qu'un projet IT ?
**Contenu clé :**
- Définition simple : un projet IT = un effort temporaire, avec un objectif, un budget, un délai, visant à mettre en place ou faire évoluer un système d'information (ex : un outil de gestion d'entrepôt, de transport...).
- Différence projet vs "run" (exploitation courante) : le projet a un début/une fin, le run est continu.
- Pourquoi le métier est concerné : un projet IT change des processus réels (comment on prépare une commande, comment on planifie un transport) — ce n'est pas qu'une affaire de technique.

**Visuel suggéré :** Schéma "Projet" (temporaire, objectif, ressources) vs "Run" (continu).

**Note formateur :** Insister sur le fait qu'un projet IT réussi = autant de conduite du changement métier que de technique.

---

### Écran 4 — Les acteurs métiers vs IT
**Contenu clé :**
- **MOA (Maîtrise d'Ouvrage)** : porte le besoin métier, définit le "quoi" et le "pourquoi". Exemple : le responsable logistique qui veut réduire les erreurs de préparation de commande.
- **MOE (Maîtrise d'Œuvre)** : conçoit et réalise la solution technique, définit le "comment". Exemple : l'équipe technique ou le prestataire intégrateur.
- **Sponsor** : porte le projet au niveau direction, débloque budget/arbitrages.
- **Key users / référents métier** : relais terrain (souvent le rôle que jouera un RPTL), **détenteurs de la connaissance par l'usage** : ils **fournissent les règles métier** lors de la conception, puis **testent et valident après l'installation** que la solution correspond au besoin réel.

**Visuel suggéré :** Schéma en losange avec les 4 rôles et les flèches de communication entre eux.

**Exemple réel (anonymisé) — reprise du cas fil rouge :** dans le déploiement de l'outil de scan en magasin, le responsable d'équipe nommé référent métier local est **le sachant des process de préparation**. C'est lui que l'on interroge pour comprendre **comment on prépare** et **quelles sont les contraintes** du terrain ; c'est lui que l'on accompagne ensuite sur **les gestes à prendre en compte dans l'outil de scan** ; c'est lui, enfin, qui **forme les collaborateurs de proximité**. Il intervient donc à **plusieurs moments** du projet : dans le **recueil de besoin**, parfois dans la **conception**, dans les **tests**, puis dans le **déploiement**.

---

### Écran 5 — Le cycle de vie d'un projet IT — vue d'ensemble
**Contenu clé :**
- Présenter la frise générique des grandes phases : **Recueil des besoins → Conception → Réalisation → Tests/Recette → Déploiement**.
- Message clé : quel que soit le mode projet (Waterfall ou Agile), ces grandes étapes existent toujours — ce qui change, c'est la façon de les parcourir (une fois en séquence, ou en boucles courtes répétées).

**Visuel suggéré :** Frise horizontale avec 5 blocs, icône par phase.

---

### Écran 6 — Zoom sur chaque phase et le rôle du métier
**Contenu clé (1 carte par phase, accordéon/tabs) :**
- **Recueil des besoins** : identifier et formaliser le besoin métier (ateliers, interviews, cahier des charges). Rôle du RPTL : **détenteur de la connaissance d'usage**, il exprime clairement les contraintes terrain (volumes, contraintes horaires, flux physiques réels) et les règles qui fonctionnent aujourd'hui.
- **Conception** : traduire le besoin en solution (processus cible, paramétrage envisagé). Rôle du RPTL : **fournir les règles métier** (règles de gestion, priorités, cas particuliers) et valider que la solution envisagée est réaliste au quotidien.
- **Réalisation** : le prestataire/l'équipe IT construit ou paramètre la solution.
- **Tests / Recette** : vérifier que la solution répond au besoin (tests d'intégration, recette métier/UAT). Rôle du RPTL : **tester après l'installation** les règles qu'il a fournies, sur des scénarios réels (pics d'activité, cas limites), puis suivre l'hypercare et ajuster les règles.
- **Déploiement** : mise en production, formation des utilisateurs, bascule, support renforcé post-démarrage (hypercare).

**Visuel suggéré :** 5 cartes cliquables avec icône, définition courte, rôle du métier associé.

**Exemple réel (anonymisé) — reprise du cas fil rouge, phase par phase :**
- **Recueil des besoins** : le key user est **interrogé** sur la façon dont on prépare aujourd'hui et sur les contraintes du magasin (volumes, horaires, types de produits). Le projet vise à fiabiliser la préparation et les stocks en contrôlant les références préparées.
- **Conception** (parfois) : on l'**accompagne sur les gestes** à prendre en compte dans l'outil de scan (quand scanner, quoi contrôler, que faire en cas d'écart).
- **Réalisation** : l'équipe IT paramètre l'outil ; le key user reste disponible pour répondre aux questions mais n'intervient pas directement.
- **Tests / recette** : il **teste l'outil** avec les gestes réels de préparation et signale ce qui ne colle pas au terrain.
- **Déploiement** : il **forme les collaborateurs de proximité** et sert de relais en cas de difficulté.

---

### Écran 7 — Waterfall : principe et cas d'usage
**Contenu clé :**
- Définition : approche séquentielle, chaque phase est terminée avant de passer à la suivante, peu de retours en arrière.
- Avantages : visibilité budgétaire/planning dès le départ, adapté aux projets très cadrés avec exigences stables (ex : migration d'un système avec périmètre réglementaire figé).
- Limites : rigide face aux changements de besoin, les écarts ne sont détectés qu'en fin de cycle (phase tests), coûteux à corriger tardivement.

**Visuel suggéré :** Schéma "cascade" classique (flèches descendantes à sens unique entre les 5 phases).

---

### Écran 8 — Agile : principe et cas d'usage
**Contenu clé :**
- Définition : approche itérative et incrémentale, on parcourt des mini-cycles courts ("sprints"), on livre de la valeur régulièrement et on ajuste.
- Vocabulaire clé à connaître : sprint, backlog, user story, rétrospective (mentionné sans entrer dans le détail complet d'un framework précis — hors scope de ce module).
- Avantages : s'adapte aux besoins qui évoluent, feedback utilisateur rapide, risque détecté tôt.
- Limites : demande une forte disponibilité des métiers (feedback continu), moins prévisible sur le budget/planning global si le périmètre n'est pas cadré.

**Visuel suggéré :** Schéma en spirale ou boucles répétées (mini-cycles empilés).

---

### Écran 9 — Waterfall vs Agile : comparatif et cas hybrides
**Contenu clé :**
- Tableau comparatif synthétique (Waterfall vs Agile) sur : flexibilité, prévisibilité, implication métier, type de projet adapté.
- Application concrète : beaucoup de projets systèmes (gestion d'entrepôt, de transport...) combinent les deux ("hybride") — ex : Waterfall pour le cadrage et la migration technique initiale, Agile pour l'amélioration continue post-démarrage.
- Message clé pour le RPTL : savoir reconnaître dans quel mode un projet avance pour adapter sa posture (ce qu'on attend de lui, le rythme des points d'avancement, le niveau de formalisme des retours).

**Visuel suggéré :** Tableau 2 colonnes + 1 bandeau "cas hybride, le plus fréquent en pratique".

**Exemple réel (anonymisé) — reprise du cas fil rouge, deux façons de conduire le projet :**
- **En cycle en V (waterfall)** : on définit **toutes les fonctionnalités et tous les résultats attendus avant de démarrer la réalisation**. Le périmètre et le budget sont **figés à l'avance** : une amélioration repérée pendant les tests est difficile à intégrer sans remettre en cause le cadre.
- **En cycle agile** : on définit **les orientations et les attentes**, puis on **démarre la réalisation pendant que les étapes suivantes sont encore en conception**. On s'autorise à **adapter** l'outil quand les tests font apparaître une modification utile ou une amélioration possible.
- Ce même projet aurait donc pu être traité de **plusieurs façons** ; le choix dépend du degré de certitude sur le besoin et de la disponibilité des équipes terrain.
- *Reste à fournir (optionnel) :* un cas de projet **hybride** vécu pour illustrer la combinaison des deux approches.

---

### Écran 10 — Vérifier avant d'agir : le réflexe clé dès le cadrage
**Contenu clé :**
- Message central : un besoin mal recueilli ou mal vérifié en amont se paie plus tard — en traçabilité perdue, en écarts de stock, en blocage de l'activité.
- Court exercice/mise en situation : présenter un recueil de besoin incomplet (ex : contrainte horaire ou volume non mentionnée) et demander à l'apprenant de repérer ce qui manque avant que le projet ne parte en conception.
- Ce réflexe "vérifier avant d'agir" reviendra dans chaque module système (OMS, WMS, TMS...) et plus tard, de façon plus stratégique, face aux simulations IA.

**Visuel suggéré :** Mini-cas interactif (glisser-déposer ou QCM court intégré à l'écran, distinct du quiz final).

**Exemple réel (anonymisé) — reprise du cas fil rouge, ce qui se passe si le cadrage est insuffisant :** si le projet d'outil de scan est **mal cadré** ou **mal accompagné**, le déploiement peut **ne pas être adopté sur le terrain** ou **ne pas répondre aux exigences du terrain**. Le projet aura alors **coûté de l'argent sans générer de valeur**. Tout part de la même question, posée dès le départ : **pourquoi le projet existe-t-il, quelle valeur doit-il livrer, et à qui ?** (ici : fiabiliser la préparation et les stocks pour les équipes du magasin).

---

### Écran 11 — Quiz de validation (10 questions — 80% requis pour valider)
**Exemples de questions (à compléter jusqu'à 10) :**
1. (QCM) Qui porte le besoin métier dans un projet IT ? → MOA / MOE / Sponsor / Key user
2. (Vrai/Faux) En Agile, on valide tout le périmètre avant de commencer le développement.
3. (QCM) Associer chaque phase (Recueil/Conception/Réalisation/Tests/Déploiement) à son livrable type.
4. (Mise en situation) "Le projet doit s'adapter régulièrement aux priorités changeantes et livrer fréquemment" → Waterfall ou Agile ?
5. (QCM) Quel rôle valide, lors des tests, que la solution correspond au besoin réel ?
6. (Vrai/Faux) Un projet IT combine souvent Waterfall et Agile selon les phases.
7. (QCM) Qu'est-ce qu'un "sprint" en Agile ?
8. (Mise en situation) Un besoin terrain est mal exprimé lors du recueil → à quel moment du projet ce manque risque-t-il de coûter le plus cher à corriger ?
9. (QCM) Quel est le rôle principal d'un "key user" / référent métier ?
10. (Vrai/Faux) "Vérifier avant d'agir" ne s'applique qu'aux projets IA, pas aux projets IT classiques.

**Note formateur :** Feedback explicatif après chaque réponse (pas juste "bonne/mauvaise réponse") pour renforcer l'apprentissage. Seuil de réussite : 8/10 bonnes réponses minimum.

---

### Écran 12 — Synthèse et points clés
**Contenu clé (rappel en 4 puces) :**
- Un projet IT = effort temporaire avec MOA/MOE/sponsor/key users impliqués — le métier (RPTL) y a un rôle actif.
- Le cycle projet (recueil, conception, réalisation, tests, déploiement) structure tout projet, quel que soit le mode.
- Waterfall = séquentiel et prévisible ; Agile = itératif et adaptable ; les deux se combinent souvent en pratique.
- "Vérifier avant d'agir" dès le recueil du besoin évite des conséquences coûteuses plus tard — un réflexe à garder pour tous les modules suivants.

**Call-to-action :** Transition vers le prochain module système. "Maintenant que vous maîtrisez le vocabulaire projet, découvrons les systèmes eux-mêmes."

**Visuel suggéré :** Carte mentale récapitulative à l'écran, bouton "Module suivant", lien de téléchargement du glossaire global.

---

## Glossaire
Les termes de ce module ont été ajoutés au [glossaire global](00_Glossaire_global.md) de la formation.

## Points ouverts / à valider avec toi
1. **Exemples réels** : le cas fil rouge (déploiement d'un outil de scan en magasin, avec un responsable d'équipe key user) est intégré aux écrans 1, 4, 6, 9 et 10. Reste optionnel : un cas de projet **hybride** (écran 9) et, si possible, un chiffre ou un effet constaté sur le cas (fiabilité de préparation, écarts de stock) à valider et anonymiser.
2. Les 10 questions du quiz sont à finaliser — veux-tu que je rédige les réponses/options complètes et les feedbacks associés dès maintenant, ou on valide d'abord la structure globale du module ?
3. Faut-il que j'enrichisse l'écran 10 ("vérifier avant d'agir") avec un exercice plus développé, ou rester léger puisque ce principe sera retravaillé dans chaque module système ?
