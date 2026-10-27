# Module e-learning — WCS (Warehouse Control System)
**Formation :** Responsable de Production Transport et Logistique (RPTL) — Bac+3
**Sous-titre du module :** Mécaniser et piloter l'entrepôt : rôle du WCS, équipements, flux physiques, choix, projets, incidents, limites et marché
**Durée cible :** 35–45 min
**Public :** Apprenants RPTL ou métiers proches (responsable entrepôt, affréteur, approvisionneur, coordinateur transport/logistique) — non-IT
**Statut :** 🔴 À créer — v1 storyboard (base : section WCS du cours ICAM 2026 — pourquoi mécaniser, fonctionnalités, exemple de mécanisation, vie d'un colis, choix de solution — complétée pour les échanges avec le WMS, les incidents, les projets, les limites et le marché)

**Positionnement dans le curriculum :** Sixième module « système ». Ce module prolonge l'**ouverture faite à la fin du module WMS** (écran 13) : le WMS décide *quoi, où et quand* ; le WCS commande *comment* le mouvement physique est réalisé par les équipements automatisés. Il est complémentaire de l'APS (planifier), de l'ERP (gérer) Les exemples sont contextualisés métier transport/logistique, sans nom de client ni de projet ; seul l'écran « panorama du marché » cite des fournisseurs (règle du projet, voir CLAUDE.md).

---

## Objectifs pédagogiques
À l'issue du module, l'apprenant sera capable de :
1. Expliquer pourquoi on mécanise un entrepôt et dans quels cas la mécanisation est pertinente.
2. Définir le rôle d'un WCS et le distinguer du WMS (information, décision logistique) et des équipements eux-mêmes (machines).
3. Décrire les échanges entre WMS, WCS et équipements, et le niveau de temps réel de chaque couche.
4. Citer les principaux équipements pilotés par un WCS et situer leur rôle dans chaque étape du flux (réception, stockage, prélèvement, préparation, expédition).
5. Suivre le parcours d'un colis dans un entrepôt mécanisé, avec les points de décision et de contrôle.
6. Comparer deux grandes familles de solutions de mécanisation selon le type d'articles, l'espace et les volumes.
7. Comprendre ce qui change dans un projet de mécanisation (IT + physique) et gérer les incidents et les modes dégradés.
8. Identifier les limites d'un WCS, réappliquer le réflexe « vérifier avant d'agir » et avoir une vue des fournisseurs.

---

## Plan du module (13 écrans + quiz + synthèse)

| # | Écran | Durée estimée |
|---|-------|----------------|
| 1 | Accroche / mise en situation | 1-2 min |
| 2 | Objectifs du module | 1 min |
| 3 | Pourquoi mécaniser un entrepôt ? | 3 min |
| 4 | Qu'est-ce qu'un WCS ? | 3 min |
| 5 | Le WCS dans le système d'information : avec qui échange-t-il ? | 3 min |
| 6 | Les équipements pilotés par le WCS | 3 min |
| 7 | Exemple d'entrepôt mécanisé : lecture d'un plan de flux | 4 min |
| 8 | La vie d'un colis dans un entrepôt mécanisé | 4 min |
| 9 | Choisir sa solution de mécanisation | 3 min |
| 10 | Un projet de mécanisation : IT et physique | 3 min |
| 11 | Incidents, modes dégradés et limites — vérifier avant d'agir | 4 min |
| 12 | Ouverture : données, capteurs et IA | 3 min |
| 13 | Panorama du marché des WCS | 3 min |
| 14 | Quiz de validation (10 questions, 80% requis) | 5 min |
| 15 | Synthèse et points clés à retenir | 1-2 min |

---

### Écran 1 — Accroche / mise en situation
**Contenu clé :**
- Mise en situation narrative : "Après la mécanisation de l'entrepôt, les performances sont au rendez-vous… jusqu'à ce jour où un convoyeur s'arrête. En dix minutes, les bacs s'accumulent, les postes de préparation s'immobilisent et les commandes urgentes sont bloquées. Le stock dans le système est juste, les ordres sont corrects. Qui pilote les machines, et que faire quand elles s'arrêtent ?"
- Teaser : ce module présente le système qui pilote les équipements automatisés d'un entrepôt — le WCS.

**Visuel suggéré :** Vue d'entrepôt avec convoyeurs et robots en activité, puis un point d'arrêt rouge qui bloque la chaîne et fait apparaître un tableau de supervision.

**Note formateur :** Ancrer l'intérêt — plus l'entrepôt est mécanisé, plus le WCS devient critique pour la continuité d'activité du RPTL.

**[Exemple réel à intégrer]** — un cas vécu d'arrêt ou de ralentissement d'un équipement mécanisé et de son impact sur l'activité (anonymisé).

---

### Écran 2 — Objectifs du module
**Contenu clé :** Reprendre les objectifs pédagogiques ci-dessus sous forme de bullet points visuels (icônes).

**Visuel suggéré :** 8 pictos (pourquoi mécaniser / rôle du WCS / échanges / équipements / vie d'un colis / choix / projet et incidents / limites et marché).

---

### Écran 3 — Pourquoi mécaniser un entrepôt ?
**Contenu clé :**
- Cinq raisons de mécaniser :
  - **Répondre à la promesse client** : délais de préparation plus courts et plus fiables.
  - **Adapter l'entrepôt à l'élargissement et à la profondeur de l'offre** : plus de références, plus de volume, plus de variété de produits.
  - **Optimiser la productivité** : moins de déplacements, plus de lignes préparées par heure.
  - **Fiabiliser les process** : moins d'erreurs de prélèvement et de manipulation.
  - **Réduire la pénibilité** : moins de port de charges, moins de marche, meilleures conditions de travail.
- Mécaniser n'est pas une fin en soi : le choix dépend des **volumes**, de la **diversité des articles**, de la **place disponible**, du **coût** et de l'**évolutivité** attendue. Un entrepôt mécanisé reste dépendant d'un WMS fiable et de données articles justes.
- Mécaniser peut aussi être une **opportunité** dans un projet (module 1) : « mon entrepôt pourrait être optimisé en le mécanisant ».
- Rappel du module WMS : le WMS décide, la mécanisation exécute.

**Visuel suggéré :** Roue à 5 branches (promesse client / élargissement de l'offre / productivité / fiabilité / pénibilité) autour d'un entrepôt mécanisé.

---

### Écran 4 — Qu'est-ce qu'un WCS ?
**Contenu clé :**
- Définition : un WCS (*Warehouse Control System*) est le système qui **pilote les éléments automatisés** d'un entrepôt et **orchestre les flux physiques**.
- Quatre caractéristiques :
  - Il **pilote** les équipements (convoyeurs, robots, trieurs...).
  - Il **orchestre** les flux physiques : quel colis va où, dans quel ordre, par quel chemin.
  - Il **se synchronise avec le WMS** : il reçoit les ordres et renvoie l'état d'avancement.
  - Il peut **intervenir dans tous les process** de l'entrepôt : réception, stockage, prélèvement, préparation, expédition.
- **Partage des rôles** : le WMS connaît le stock et les commandes (**quoi, où, quand**) ; le WCS connaît les machines et leurs contraintes (**comment**) ; les équipements exécutent les mouvements.
- Un **WES** (*Warehouse Execution System*) est un système qui combine, à des degrés variables, des fonctions de WMS et de WCS pour coordonner l'exécution ; la frontière dépend de l'éditeur.
- Message clé : sans WCS, une mécanisation complexe ne se coordonne pas ; sans WMS, le WCS ne sait pas **quoi** déplacer.

**Visuel suggéré :** Trois niveaux empilés : WMS (cerveau logistique) → WCS (chef d'orchestre des machines) → équipements (convoyeurs, robots, trieurs), flèches « ordres » vers le bas et « avancement » vers le haut.

**Note formateur :** Insister sur « comment » : c'est le critère le plus simple pour distinguer WMS et WCS.

---

### Écran 5 — Le WCS dans le système d'information : avec qui échange-t-il ?
**Contenu clé :**
- **Avec le WMS** : le WMS envoie les ordres de mouvement (par exemple : envoyer ces bacs vers tel poste, trier ces colis par destination) ; le WCS renvoie les confirmations (colis lu, bac arrivé, incident). Ces échanges s'appellent souvent des **messages d'équipements** (*material handling equipment*, MHE). On peut aussi envoyer au WMS une **image de stock** de la partie automatisée.
- **Avec les équipements** : le WCS dialogue avec les **automates** et capteurs (lecteurs de codes-barres, balances, détecteurs) qui pilotent chaque machine.
- **Avec d'autres systèmes** : impression d'**étiquettes** et de documents, systèmes de gestion de commandes, supervision.
- **Rappel des 3 couches** : WMS et WCS sont tous deux en **exécution**, mais pas au même niveau : le WMS gère l'**information logistique**, le WCS gère le **mouvement physique** avec des temps de réaction très courts (la machine ne peut pas attendre).
- Conséquence : le WCS doit rester **réactif et disponible** même si le WMS est lent ou indisponible un court instant ; c'est un point de conception important.
- Les échanges passent par des **interfaces** et souvent une couche d'**intégration** (bus d'intégration ou ESB), qui transporte, transforme et trace les messages entre systèmes.

**Visuel suggéré :** Schéma WMS ↔ WCS ↔ automates/équipements, avec des flèches nommées (ordres, confirmations, états des machines) et l'échelle de temps de chaque niveau.

---

### Écran 6 — Les équipements pilotés par le WCS
**Contenu clé :**
- **Convoyeurs** : transport des bacs et colis entre zones, aiguillages, points de lecture.
- **Mise en bac** : placement des articles dans des bacs destinés au stockage automatisé.
- **Stockage automatisé** : transstockeurs, systèmes de stockage dynamique ou robotisé, qui rangent et retrouvent bacs ou cartons.
- **Prélèvement « goods-to-person » (GTP)** : le produit est amené à l'opérateur, qui prélève à un poste fixe.
- **Trieurs** : affectation des colis vers leur destination (commande, quai, transporteur).
- **Emballage automatique** : fermeture et étiquetage des colis, parfois dimensionnement automatique du carton.
- **Contrôle** : pesée, lecture de codes-barres, rejet des colis non conformes.
- **Robots mobiles** : déplacement de charges ou de racks dans l'entrepôt.
- Chaque équipement a ses **capacités, ses limites et ses modes de panne**, que le WCS doit connaître.

**Visuel suggéré :** Planche de 8 pictos (convoyeur, mise en bac, stockage automatisé, poste GTP, trieur, emballage, contrôle de pesée, robot mobile) légendés.

---

### Écran 7 — Exemple d'entrepôt mécanisé : lecture d'un plan de flux
**Contenu clé :**
- Plan **fictif et simplifié** d'un entrepôt mécanisé sur **deux niveaux** (aucun site réel), pour apprendre à lire un plan de flux :

![Plan de flux simplifié d'un entrepôt mécanisé (exemple fictif)](schemas/07_WCS_plan_entrepot_mecanise.svg)

- **Niveau 1 — Entrée et stockage** :
  1. **Réception et mise en bac** : les articles reçus sont placés dans des bacs.
  2. **Stockage automatisé** : le système range les bacs ; le WMS sait où, le WCS exécute.
  Un **convoyeur montant** amène ensuite les bacs demandés vers le niveau 2.
- **Niveau 2 — Préparation et expédition** :
  3. **Poste de prélèvement (GTP)** : le bac arrive à l'opérateur, qui prélève la quantité demandée.
  4. **Pesée de contrôle** : le poids est comparé au poids attendu ; un colis **conforme** continue, un colis **non conforme** part en **voie de rejet** pour un traitement manuel.
  5. **Fermeture du carton**.
  6. **Étiquetage d'expédition**.
  7. **Tri par destination** vers les quais d'expédition, où se fait le chargement.
- **Points de lecture** (pastilles bleues) : un lecteur de codes-barres identifie chaque bac ou colis.
- **Points de décision** (losanges orange) : à partir de l'identification, le WCS choisit la direction (conforme / rejet, quelle voie de tri).
- Compétence visée : savoir **lire un plan** (étapes, points de lecture, points de décision, rejet) pour localiser où un colis peut être bloqué et à quel niveau le chercher (stock, prélèvement, pesée, tri).


- **Règles aux points de décision** (à définir avec le métier) :
  - **Identifier avant de décider** : un colis non lu suit une règle par défaut (en général la voie de rejet).
  - **Ordre de priorité** : sécurité, conformité (rejet), priorité de la commande, destination fixée par le WMS, équilibrage de charge, règle par défaut.
  - **Après la pesée** : comparaison du poids réel au poids attendu avec une **tolérance** (par famille d'articles) ; hors tolérance ou poids attendu absent → voie de rejet avec code de motif.
  - **Avant le tri** : le colis est dirigé vers la voie de sa destination ; voie pleine → recirculation un nombre limité de fois, puis voie de dégagement ; destination inconnue → voie de dégagement.
  - **Décider à temps, ne jamais bloquer la ligne** : si le WMS tarde à répondre, une règle de repli s'applique ; chaque décision est **tracée** (colis, heure, règle, motif) et le motif de rejet est renvoyé au WMS ; aucun colis ne doit rester sans voie de sortie.
- **Rôle du RPTL — détenteur de la connaissance d'usage** : en exploitation normale, c'est lui qui connaît les règles qui marchent (tolérances réalistes, priorités par type de commande, traitement des rejets) et qui les **optimise** au fil de l'usage. Dans un **projet IT**, il **fournit ces règles** lors du design et les **teste après l'installation** (tests physiques, recette métier, hypercare), notamment en conditions de pointe.

**Visuel :** `schemas/07_WCS_plan_entrepot_mecanise.svg` — schéma anonyme, sans nom de client, de prestataire ni de site ; à utiliser tel quel ou à reprendre dans la charte graphique de l'application.

**Activité suggérée :** « Où se trouve le colis ? » — l'apprenant désigne sur le plan l'endroit probable d'un blocage à partir d'un symptôme (colis non lu, poids anormal, bac qui n'arrive pas au poste).

**[Exemple réel à intégrer]** — un cas où la lecture du plan a permis de localiser rapidement la cause d'un blocage (anonymisé).

---

### Écran 8 — La vie d'un colis dans un entrepôt mécanisé
**Contenu clé :**
- **Réception** : les colis sont déchargés sur un convoyeur de réception, identifiés et dirigés vers le contrôle ou le stockage.
- **Stockage** : un système automatisé range les bacs ou cartons ; le WMS sait où, le WCS exécute le rangement.
- **Optimisation du stock** : le système peut **réorganiser** les emplacements (rapprocher les articles les plus demandés, libérer de la place) en dehors des pics d'activité.
- **Prélèvement** : en GTP, le WCS fait arriver le bon bac au poste de l'opérateur ; l'opérateur prélève la quantité demandée.
- **Préparation** : les articles sont regroupés par commande, emballés (parfois automatiquement), pesés et étiquetés ; un poids anormal provoque un **rejet**.
- **Expédition** : les colis sont triés par destination ou transporteur et dirigés vers les quais ; le WMS confirme l'expédition au système hôte et au TMS.
- À chaque étape, **le WCS confirme au WMS** ce qui s'est passé : le stock reste juste en temps réel.

**Visuel suggéré :** Parcours en 6 étapes (réception → stockage → optimisation → prélèvement GTP → préparation → expédition) avec, pour chaque étape, l'équipement, le rôle du WCS et le message vers le WMS.

---

### Écran 9 — Choisir sa solution de mécanisation
**Contenu clé :**
- Deux grandes **familles de solutions de stockage automatisé** (illustration, à enrichir) :
  - **Robotisation du système de rangement** : des robots mobiles circulent sur des racks et amènent des bacs ou cartons aux postes. *Atouts* : adaptée aux **cartons**, **grands volumes de stockage**, grande **adaptabilité** sur de grands espaces, forte optimisation des déplacements et de l'espace.
  - **Tour automatisée de rangement** : structure verticale qui range et délivre des plateaux ou bacs. *Atouts* : adaptée aux **petits articles**, forte optimisation du stockage sur de **petits espaces**, mise en œuvre facilitée, optimisation du rangement et du picking.
- **Critères de choix** : type d'articles (taille, poids, fragilité), espace disponible, volumes et pics, évolutivité, coût, intégration au WMS existant, disponibilité de la maintenance.
- Principe : **adapter la solution au besoin**, pas l'inverse ; il n'existe pas de solution universelle.
- Rôle du RPTL : **exprimer les contraintes d'exploitation** (pics, horaires, saisonnalité) issues de son usage et valider que la solution est réaliste au quotidien ; il **teste ensuite la solution installée** en conditions réelles.

**Visuel suggéré :** Tableau comparatif à deux colonnes (robotisation du rangement / tour automatisée) avec les atouts, les cas d'usage et les critères de choix.

**Note formateur :** Les fournisseurs correspondants sont présentés à l'écran « panorama du marché », pas ici.

---

### Écran 10 — Un projet de mécanisation : IT et physique
**Contenu clé :**
- Un projet de mécanisation est un **gros projet** (rappel module 1) : durée souvent supérieure à 9 mois, nombreux acteurs (client, fournisseur d'équipements, éditeur WMS, intégrateur), risques élevés.
- Il mêle **IT** (interfaces WMS/WCS, paramétrage, développement, tests) et **physique** (génie civil, implantation, installation des équipements, sécurité, formation).
- Phases à rappeler : cadrage, design, build, recettes — avec en plus des **tests physiques** (essais des équipements avec de vrais colis), préparation (formation, cutover), mise en production, **hypercare**, run.
- **Run** : maintenance des équipements et du logiciel, **astreintes**, plan d'amélioration continue (par exemple réglage de règles de tri ou de charge).
- Rôle du RPTL : **key user** et **détenteur de la connaissance d'usage** : il **fournit les règles métier** (tolérances, priorités, traitement des rejets, scénarios réels : pics, colis hors gabarit, article fragile) lors du design, puis **les teste après l'installation** (tests physiques, recette métier, hypercare) ; il mobilise les équipes et accompagne le changement.
- Point d'attention : la mécanisation **change les métiers** (moins de marche, plus de supervision et de maintenance) ; l'accompagnement des équipes fait partie du projet.

**Visuel suggéré :** Frise de projet avec une couche IT et une couche physique en parallèle, et des jalons « tests physiques » et « hypercare » mis en évidence.

---

### Écran 11 — Incidents, modes dégradés et limites — vérifier avant d'agir
**Contenu clé :**
- **Incidents fréquents** : arrêt ou bourrage d'un convoyeur ; colis non lu (« no-read ») ; colis rejeté à la pesée ; bac mal orienté ; panne d'un robot ou d'un poste GTP ; perte de communication entre WMS et WCS.
- **Mode dégradé** : procédure de **secours** pour continuer à travailler (par exemple prélèvement manuel, bascule vers un autre poste) quand une partie est indisponible. Il doit être **défini à l'avance**, connu des équipes et testé.
- **Limites du WCS** : il ne décide pas **quoi** préparer (WMS), n'orchestre pas les commandes entre sites (OMS), ne planifie pas le transport (TMS) ; il dépend de la **fiabilité mécanique** des équipements, de la **qualité des lectures** (étiquettes) et de la **qualité des données articles** (dimensions, poids).
- **Vérifier avant d'agir** : avant de conclure à un « bug WCS » quand un colis est bloqué ou rejeté, distinguer dans l'ordre : **panne mécanique** (équipement, capteur) ; **lecture** (étiquette illisible) ; **donnée article** (poids ou dimensions erronés qui déclenchent un rejet) ; **ordre du WMS** (incorrect ou non reçu) ; **état du WCS** (en erreur ou arrêté).
- Rôle du RPTL : savoir **qui appeler** (maintenance, IT, éditeur), appliquer le mode dégradé, tracer l'incident ; en exploitation normale, **optimiser les règles métier** à partir de ce que l'usage révèle (rejets trop fréquents, tolérances trop strictes, voies saturées) et les faire évoluer par le circuit de changement.

**Visuel suggéré :** Arbre de diagnostic « colis bloqué : mécanique / lecture / donnée / ordre WMS / WCS » + mini-cas interactif (QCM court), distinct du quiz final.

**[Exemple réel à intégrer]** — un cas où le bon diagnostic (donnée article plutôt que panne) a évité une intervention inutile (anonymisé).

---

### Écran 12 — Ouverture : données, capteurs et IA
**Contenu clé :**
- Un entrepôt mécanisé **produit beaucoup de données** : états des machines, temps de cycle, taux de rejet, temps d'attente, charges par zone. Ces données servent à **piloter** et à **améliorer** (identifier les goulots d'étranglement).
- Pistes d'évolution : **maintenance prédictive** (détecter une usure avant la panne), **simulation** de flux avant un changement (jumeau numérique), **optimisation dynamique** des priorités, **vision par ordinateur** (lecture et contrôle), robots plus autonomes.
- Les principes restent les mêmes avec l'IA : **données fiables**, paramétrage maîtrisé, **validation humaine** et procédures de secours ; une prédiction ou une simulation est une **hypothèse à vérifier**.
- Lien avec le curriculum : le module « Overview IA » reprendra ces notions ; le réflexe « vérifier avant d'agir » reste central.
- Rappel : WMS, WCS, TMS, ERP et les autres systèmes dialoguent grâce à une couche d'intégration (ESB) ; un incident peut venir du système émetteur, du système récepteur ou du transport du message.

**Visuel suggéré :** Flux de données des équipements vers un tableau de bord, avec trois pistes (prédictif, simulation, optimisation) en étiquettes.

---

### Écran 13 — Panorama du marché des WCS
**Contenu clé :**
- Rappel du principe d'un quadrant d'analystes (voir modules précédents).
- ⚠️ **Point vérifié** : à la date de rédaction, **aucun Magic Quadrant Gartner ni quadrant d'analyste indépendant accessible publiquement** n'a été identifié pour les WCS. Le marché est présenté sous forme de **carte par famille de fournisseurs** (et non de classement).
- Familles de fournisseurs (recoupées dans des guides de marché, à confirmer) :
  - **Équipementiers et intégrateurs de mécanisation avec leur propre logiciel** : Dematic, Honeywell Intelligrated, Vanderlande, SSI Schäfer, Swisslog.
  - **Éditeurs de logiciels de supply chain proposant des fonctions de WCS / WES indépendantes des équipements** : Manhattan Associates, Blue Yonder, Oracle, Körber / Infios.
  - **Fournisseurs de solutions de stockage automatisé et robotisé avec pilotage intégré** : par exemple des robots mobiles sur racks (Exotec) ou des tours automatisées (Kardex), cités dans les supports de formation.
- ⚠️ **À confirmer avant publication** : les listes proviennent de guides de marché et de pages d'éditeurs (non indépendants) ; aucune position qualité n'est donnée. À vérifier auprès d'un analyste ou d'un panel de fournisseurs.
- Message clé pour le RPTL : le WCS est souvent **livré avec la mécanisation** ; le choix d'un fournisseur engage une relation de long terme (maintenance, évolutions) et l'**intégration** au WMS en place est un critère clé.

**Visuel suggéré :** Carte à 3 bandes (équipementiers-intégrateurs / éditeurs logiciels / stockage automatisé et robotique), noms des fournisseurs sans positionnement, mention « Carte par famille — pas un quadrant d'analyste ; sources : guides de marché et sites des fournisseurs ».

**Sources à citer à l'écran (note formateur) :**
- Guide des fournisseurs de WCS (2026) : https://www.controlpointwcs.com/resources/top-warehouse-control-system-vendors *(page d'un fournisseur : contenu non indépendant)*
- Guide de comparaison des fournisseurs : https://www.cleverence.com/articles/for-business/warehouse-control-vendors-5296/
- Profil de marché : https://www.nextmsc.com/report/warehouse-control-system-market

**Note formateur :** Aucune source indépendante de type quadrant n'a été trouvée ; si un abonnement à un cabinet d'analyse est disponible, remplacer cette carte par un vrai positionnement. À réactualiser régulièrement.

---

### Écran 14 — Quiz de validation (10 questions — 80% requis pour valider)
**Exemples de questions (à compléter jusqu'à 10) :**
1. (QCM) Quelle est la question à laquelle répond le WCS : quoi, où, quand ou comment ?
2. (Association) Associer chaque système (WMS / WCS / équipement) à son rôle.
3. (QCM) Citer trois raisons de mécaniser un entrepôt.
4. (Vrai/Faux) Un WCS peut fonctionner sans recevoir aucun ordre d'un WMS.
5. (Association) Associer chaque équipement (convoyeur, mise en bac, GTP, trieur, pesée) à sa fonction.
6. (Mise en situation) Un colis est rejeté à la pesée alors qu'il est correct : quelle donnée vérifier en premier ?
7. (QCM) Qu'est-ce qu'un mode dégradé et pourquoi doit-il être défini à l'avance ?
8. (Mise en situation) Un convoyeur s'arrête : citer l'ordre des vérifications avant d'incriminer le logiciel.
9. (QCM) Quelle différence entre une solution de robots mobiles sur racks et une tour automatisée (cas d'usage) ?
10. (Mise en situation) Dans un projet de mécanisation, qui fournit les règles de décision (tolérances de poids, priorités, traitement des rejets) et à quel moment sont-elles testées ?

**Note formateur :** Feedback explicatif après chaque réponse. Seuil de réussite : 8/10 bonnes réponses minimum.

---

### Écran 15 — Synthèse et points clés
**Contenu clé (rappel en 6 puces) :**
- On mécanise pour la promesse client, l'élargissement de l'offre, la productivité, la fiabilité et la pénibilité — selon volumes, articles, espace et coûts.
- Le WCS pilote les équipements automatisés et orchestre les flux physiques ; le WMS décide quoi, où, quand ; le WCS décide comment.
- Il échange avec le WMS (ordres, confirmations) et avec les automates, en temps réel.
- Un colis traverse un entrepôt mécanisé avec des points de lecture, de décision et de contrôle ; le WCS confirme chaque étape au WMS.
- Un projet de mécanisation mêle IT et physique : le RPTL, détenteur de la connaissance d'usage, fournit les règles métier et les teste après l'installation ; incidents et modes dégradés se préparent à l'avance.
- « Vérifier avant d'agir » : mécanique, lecture, donnée article, ordre WMS, état du WCS.

**Call-to-action :** Transition vers le module suivant. "Après les systèmes de la supply chain, place à l'IA : comment elle s'y insère et comment l'utiliser sans perdre le contrôle."

**Visuel suggéré :** Carte mentale récapitulative, bouton "Module suivant", lien de téléchargement du glossaire global.

---

## Glossaire
Les termes de ce module ont été ajoutés au [glossaire global](00_Glossaire_global.md) de la formation.

## Points ouverts / à valider avec toi
1. **Plan de mécanisation (écran 7)** : un schéma fictif et simplifié a été créé (`schemas/07_WCS_plan_entrepot_mecanise.svg`), sans aucun élément du plan réel du support ; à valider (niveaux, étapes, vocabulaire).
2. **Écran 13** : pas de quadrant d'analyste indépendant trouvé pour les WCS. La carte par famille repose sur des guides de marché et pages de fournisseurs (non indépendants). Souhaites-tu garder cette représentation, ou plutôt un autre format ?
3. **Fournisseurs du support** (écran 13) : les deux solutions comparées dans le cours (robots mobiles sur racks, tour automatisée) sont citées dans la bande « stockage automatisé ». Le cours mentionne aussi d'autres exemples de solutions ; à compléter si besoin.
4. **Parties complétées hors support** : écrans 5 (échanges), 10 (projet), 11 (incidents et limites), 12 (ouverture) à faire relire par un expert entrepôt / mécanisation.
5. **Exemples réels** (écrans 1, 7, 11) à fournir, anonymisés, sans nom de client ni de projet.
7. Les 10 questions du quiz sont à finaliser (réponses/options complètes + feedbacks).
8. **Règles aux points de décision (écran 7)** : règles génériques (identification, priorités, tolérances de pesée, recirculation, repli) à faire valider par un expert mécanisation ; tolérances et nombre de recirculations à fixer par site.
