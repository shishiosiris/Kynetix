# Module e-learning Bac+5 — Les flux de bout en bout : modéliser et optimiser
**Formation :** Parcours Bac+5 — manager de la supply chain (et, par extension, consultant ou chef de projet digital)
**Sous-titre du module :** Flux physiques, d'information et financiers : cartographier, repérer les goulots, simuler, surveiller avec l'IA
**Durée cible :** 40–50 min
**Public :** Étudiants Bac+5 ayant validé (ou équivalent) le parcours Bac+3
**Statut :** 🔴 À créer — v1 storyboard Bac+5. Base : cours ICAM 2026 (architecture, flux de données, cycle de vie d'une commande OMS → WMS → TMS), notes de formation OMS (flux physiques, d'information et financiers), modules Bac+3. La partie IA (surveillance, agents) est à créer. **À faire relire par un expert avant production.**

**Positionnement dans le parcours Bac+5 :** Deuxième module du bloc « Manager l'écosystème et les flux ». Il correspond à l'item « Modélisation de flux par IA (flux physiques, d'information, financiers ; agents) » du plan. Au Bac+3, on a suivi une commande **système par système** ; ici, le manager prend de la hauteur : **où le flux se bloque, se perd, se duplique, et comment l'améliorer**. Les exemples sont contextualisés supply chain, sans nom de client, de projet ni de prestataire.

---

## Ce que le Bac+3 a déjà vu / ce que ce module ajoute

| Déjà vu au Bac+3 | Ajouté au Bac+5 |
|---|---|
| La commande de bout en bout OMS → WMS → TMS, avec statuts (module TMS, écran 12) | Une **vue globale des trois flux** (physique, information, financier) et de leurs décalages |
| Les messages échangés entre systèmes (ASN, PIX, confirmations) | **Repérer où les flux se coupent**, se dupliquent ou se perdent |
| Les simulations évoquées (APS, WCS) | **Modéliser et simuler** un flux avant de le changer |
| Les briques IA : agents, outils (module Overview IA) | Des **agents** qui surveillent les flux, avec leurs niveaux d'autonomie et leurs garde-fous |

---

## Objectifs pédagogiques
À l'issue du module, l'apprenant sera capable de :
1. **(O1)** Distinguer les flux physique, d'information et financier d'une commande et expliquer leurs décalages.
2. **(O2)** Cartographier un flux de bout en bout (étapes, acteurs, systèmes, données, délais, règles).
3. **(O3)** Repérer les goulots, les ruptures de données et les pertes de valeur.
4. **(O4)** Construire un modèle simple et utiliser une simulation pour tester un changement avant de l'appliquer.
5. **(O5)** Expliquer ce que peut apporter l'IA à la surveillance des flux (tour de contrôle, anomalies, anticipation, agents) et ses garde-fous.
6. **(O6)** Relier les flux à la durabilité (transferts inutiles, stocks dormants, retours, emballages).
7. **(O7)** Organiser la responsabilité d'un flux et le rôle des équipes terrain.

---

## Plan du module (12 écrans + quiz + synthèse)

| # | Écran | Durée estimée |
|---|-------|----------------|
| 1 | Accroche / mise en situation | 2 min |
| 2 | Objectifs du module | 1 min |
| 3 | Ce que vous savez déjà, ce que vous allez ajouter | 1 min |
| 4 | Les trois flux : physique, d'information, financier | 4 min |
| 5 | Cartographier un flux de bout en bout | 4 min |
| 6 | Repérer les goulots et les pertes | 4 min |
| 7 | Là où les flux se coupent : interfaces et ruptures de données | 4 min |
| 8 | Modéliser et simuler avant de changer | 4 min |
| 9 | L'IA pour surveiller les flux : tour de contrôle et agents | 5 min |
| 10 | Les flux et la durabilité | 3 min |
| 11 | Propriétaires de flux, organisation et rôle du terrain | 3 min |
| 12 | Étude de cas (réponse libre) | 5 min |
| 13 | Quiz de validation (10 questions, 80% requis) | 6 min |
| 14 | Synthèse et points clés à retenir | 1-2 min |

---

### Écran 1 — Accroche / mise en situation
**Contenu clé :**
- Mise en situation narrative : "Une commande urgente est en retard. Le système de commandes affiche « en cours », l'entrepôt affiche « expédiée », le suivi de transport affiche « en attente de prise en charge ». Tous les voyants sont verts, la commande n'est pas livrée. Qui a raison ? Où le flux est-il réellement bloqué ?"
- Teaser : un manager ne gère pas des systèmes isolés ; il gère des **flux qui traversent les systèmes et les équipes**.

**Visuel suggéré :** Trois tableaux de bord « verts » côte à côte et, dessous, une commande arrêtée sur une ligne de temps.

**Note formateur :** Ancrer l'idée que la performance se joue **entre** les systèmes autant qu'à l'intérieur de chacun.

**[Exemple réel à intégrer]** — un cas vécu où chaque système semblait correct mais le flux était bloqué (anonymisé).

---

### Écran 2 — Objectifs du module
**Contenu clé :** Reprendre les 7 objectifs pédagogiques ci-dessus sous forme de bullet points visuels (icônes).

**Visuel suggéré :** 7 pictos (trois flux / cartographie / goulots / interfaces / simulation / IA et agents / durabilité et organisation).

---

### Écran 3 — Ce que vous savez déjà, ce que vous allez ajouter
**Contenu clé :**
- Rappel (Bac+3) : le cycle de vie d'une commande à travers l'OMS, le WMS et le TMS, avec ses statuts ; la couche d'intégration qui transporte les messages.
- Ce que le module ajoute : une **méthode de lecture d'un flux** (cartographier, mesurer, simuler) et un **usage de l'IA** pour le surveiller.
- Ce que le module n'est pas : un cours de modélisation mathématique ; l'objectif est que le manager **comprenne, pose les bonnes questions et challenge**.

**Visuel suggéré :** Rappel en une image de la commande OMS → WMS → TMS et flèche « on prend de la hauteur ».

---

### Écran 4 — Les trois flux : physique, d'information, financier
**Contenu clé :**
- **Flux physique** : la marchandise (réception, stockage, préparation, transport, livraison, retours).
- **Flux d'information** : les messages et statuts qui décrivent et pilotent le flux physique (commande, ordre de préparation, confirmation d'expédition, suivi).
- **Flux financier** : facturation, paiement, valorisation du stock, coûts ; il se déclenche à partir d'événements physiques (réception, expédition).
- **Décalages** : l'information **précède** le physique (la commande est connue avant d'être préparée), le **suit** (le statut « expédié » arrive après) ou **le contredit** (statut erroné). Le financier **dépend des deux**.
- **Source de vérité** : pour chaque flux, savoir **quel système fait foi** (rappel : stock comptable, physique, disponible, au module ERP).
- Message clé : un problème qui paraît physique peut être d'information ou financier, et inversement.

**Visuel suggéré :** Trois couloirs parallèles sur une ligne de temps avec des événements clés et leurs décalages.

---

### Écran 5 — Cartographier un flux de bout en bout
**Contenu clé :**
- **Pourquoi cartographier** : on ne peut pas améliorer ce qu'on ne voit pas ; la carte est un **langage commun** entre métier, IT et prestataires.
- **Méthode** :
  1. Fixer le **périmètre** (quel flux, de quel événement à quel événement).
  2. Lister les **étapes** et les **acteurs** (équipes, prestataires).
  3. Pour chaque étape : le **système**, les **données** produites et consommées, le **délai**, les **règles** appliquées.
  4. Repérer les **points de contrôle** et les **points de décision**.
  5. Valider la carte **sur le terrain** avec ceux qui exécutent (détenteurs de la connaissance d'usage).
- **Niveaux de détail** : une vue macro (5 à 8 étapes) pour décider, une vue détaillée pour les zones sensibles.
- **Pièges** : carte théorique éloignée du réel, trop détaillée pour être lue, non mise à jour.
- Message clé : **la carte réelle se construit avec le terrain**, pas depuis un bureau.

**Visuel suggéré :** Exemple de carte à six étapes avec acteurs, systèmes, données et délais ; pastilles « point de décision ».

---

### Écran 6 — Repérer les goulots et les pertes
**Contenu clé :**
- **Goulot d'étranglement** : l'étape qui limite le débit de l'ensemble ; améliorer ailleurs n'aide pas.
- **Pertes courantes** : attentes entre étapes, ressaisies, doublons de contrôle, stocks en cours, retours en arrière, délais d'interface, erreurs de données qui obligent à reprendre.
- **Indicateurs utiles** : délai de bout en bout, délai par étape, taux de commandes complètes et à l'heure, taux d'erreur de données, coût par commande.
- **Démarche** : mesurer avant d'agir, identifier la **contrainte principale**, la traiter, mesurer à nouveau (le goulot se déplace).
- **Attention aux optimisations locales** : accélérer une étape en amont d'un goulot crée des **files d'attente**, pas de la performance.
- Lien Bac+3 : les règles de vague (WMS), de sourcing (OMS) et de schéma de transport (TMS) agissent sur ces goulots.

**Visuel suggéré :** Chaîne d'étapes avec tailles de tuyaux différentes et un goulot en rouge ; courbe de délai avant/après.

---

### Écran 7 — Là où les flux se coupent : interfaces et ruptures de données
**Contenu clé :**
- Les ruptures se produisent le plus souvent **aux jonctions** entre systèmes et équipes : statut non remonté, message perdu ou en retard, donnée transformée différemment, saisie manuelle intermédiaire.
- **Symptômes** : écarts de stock entre systèmes, commandes « fantômes », factures bloquées, clients mal informés.
- **Démarche de diagnostic** (rappel « vérifier avant d'agir ») : le message est-il **parti** ? **arrivé** ? **traité** ? la donnée de référence est-elle correcte ? le statut est-il celui attendu ?
- **Réconciliation** : comparer régulièrement les données de deux systèmes (stock, commandes) et analyser les écarts avant de corriger.
- **Qualité à la source** : corriger la cause (donnée de référence, règle, formation) plutôt que le symptôme.
- Rôle du manager : décider **qui est responsable** de chaque interface (et de sa surveillance), et quel niveau de qualité est exigé.

**Visuel suggéré :** Chaîne de trois systèmes avec les jonctions numérotées et, pour chacune, les risques d'incident.

**[Exemple réel à intégrer]** — un cas d'incident dû à une interface (message perdu, statut décalé) et la façon dont il a été diagnostiqué (anonymisé).

---

### Écran 8 — Modéliser et simuler avant de changer
**Contenu clé :**
- **Modèle** : représentation simplifiée du flux (étapes, capacités, délais, volumes, règles).
- **Du tableur à la simulation** :
  - un **tableur** suffit pour des ordres de grandeur ;
  - une **simulation à événements discrets** rejoue le flux dans le temps (files d'attente, aléas) ;
  - un **jumeau numérique** est une réplique d'un site ou d'un flux alimentée par des données réelles pour tester des scénarios.
- **Usages** : tester une nouvelle règle (vague, sourcing), un changement de capacité, un pic de demande, une panne, avant de les appliquer en réel.
- **Conditions** : données fiables, hypothèses explicites, **calage** du modèle sur le réel (le modèle reproduit-il la situation actuelle ?).
- **Limites** : un modèle reste une simplification ; un modèle bien calé sur le passé peut se tromper sur un contexte nouveau ; ne pas confondre **résultat de simulation** et **prévision**.
- Rôle des équipes terrain : fournir les **règles réelles** et les **cas limites**, puis **tester après la mise en place** (rappel du rôle du RPTL et des key users).

**Visuel suggéré :** Trois marches « tableur → simulation → jumeau numérique » avec coûts et usages ; courbe « réel vs modèle ».

---

### Écran 9 — L'IA pour surveiller les flux : tour de contrôle et agents
**Contenu clé :**
- **Tour de contrôle** (*control tower*) : vue consolidée et en quasi temps réel des flux de plusieurs systèmes et acteurs, avec alertes.
- **Ce que l'IA apporte** :
  - **Détection d'anomalies** (commande qui stagne, écart inhabituel, statut incohérent) ;
  - **Anticipation** (risque de retard, de rupture, de saturation) ;
  - **Priorisation** des alertes et **explication** probable (cause la plus vraisemblable) ;
  - **Aide à la décision** (options de rattrapage, simulation de leurs effets).
- **Agents** (rappel Overview IA, Bac+3) : un agent **surveille** un flux, **prépare** une action et, selon son niveau d'autonomie, la **propose** ou l'**exécute** dans un périmètre limité.
  - Exemple : un agent détecte une commande bloquée, vérifie les statuts, prépare un message au prestataire et un message au client, puis **demande validation** avant l'envoi.
- **Garde-fous** : droits limités, validation humaine pour les actions sensibles, **traçabilité** des actions, tests sur cas connus, **plan de repli** si l'agent se trompe.
- **Fiabiliser les règles et les données** (voir plan, §4 bis) : l'IA aide à repérer des règles mal saisies, à déceler des contradictions et à simuler avant application ; elle **propose**, l'humain **décide**.
- **Limites** : alertes trop nombreuses, fausses alertes, dépendance à la qualité des données, coût du dispositif (renvoi module « Le coût de l'IA »).

**Visuel suggéré :** Tour de contrôle avec alertes priorisées + boucle agent (surveiller → proposer → valider → agir) et curseur d'autonomie.

**[Exemple réel à intégrer]** — un cas d'outil de surveillance ou d'agent (même simple) avec ce qu'il a détecté et la validation humaine (anonymisé).

---

### Écran 10 — Les flux et la durabilité
**Contenu clé :**
- **Où se cachent les impacts dans un flux** : transferts entre sites inutiles ou répétés ; expéditions partielles ; stocks dormants et obsolescence ; retours ; sur-emballage ; attentes qui allongent les délais et imposent des modes de transport plus émissifs ; reprises liées à des erreurs de données.
- **Mesurer par flux** : émissions, déchets et ressources par commande ou par unité livrée ; comparer des scénarios.
- **Leviers** (rappel : un système soutient la durabilité par les **règles métier** qu'il applique) : règles de sourcing, d'allocation, de répartition des stocks, de groupage ; qualité des données.
- **Arbitrages** : un flux plus rapide ou plus fiable peut être plus émissif ; décider en connaissance de cause (coût, service, carbone).
- Lien : chaque module système Bac+5 reprend ce point (OMS, entrepôt, transport, planification).

**Visuel suggéré :** Carte de flux avec pastilles « impact » sur les points sensibles, et un mini-tableau « avant / après règle ».

---

### Écran 11 — Propriétaires de flux, organisation et rôle du terrain
**Contenu clé :**
- **Propriétaire de flux** (*process owner*) : la personne responsable de la performance d'un flux **de bout en bout**, quels que soient les services traversés.
- **Gouvernance** : revue régulière du flux (indicateurs, incidents, évolutions), arbitrages entre équipes, règles de décision.
- **Rôle du terrain** : les équipes qui exécutent (responsables d'entrepôt, de transport, key users) sont **détentrices de la connaissance d'usage** : elles **fournissent les règles et les cas limites**, **testent après toute évolution** et **proposent des optimisations** à partir de ce que l'usage révèle.
- **Rôle du manager** : donner une **responsabilité claire**, créer les **conditions de contribution** du terrain (temps, canal, reconnaissance), décider des arbitrages.
- **Signaux d'alerte** : flux sans propriétaire, indicateurs non partagés, interfaces sans responsable, corrections répétées au même endroit.

**Visuel suggéré :** Schéma « propriétaire de flux » au centre de trois équipes, avec un rituel de revue.

---

### Écran 12 — Étude de cas (réponse libre)
**Contenu clé :**
- **Situation** : une enseigne observe que 8 % des commandes sont livrées en retard alors que chaque site respecte ses objectifs. Un transfert de stock entre deux sites précède souvent le retard. Le suivi des commandes affiche des statuts incohérents entre systèmes. Un outil d'IA propose de « corriger automatiquement » les statuts.
- **Consigne (réponse libre, 10 à 15 lignes)** : 1) comment cartographiez-vous le flux et avec qui ? 2) où cherchez-vous le goulot et les ruptures de données ? 3) que pensez-vous de la correction automatique par l'IA et quelles conditions posez-vous ? 4) quel impact environnemental potentiel identifiez-vous et comment le mesurez-vous ? 5) qui devient responsable du flux ?
- **Éléments attendus pour la correction** : carte validée avec le terrain ; flux physique / information / financier ; goulot et interfaces ; diagnostic message parti / arrivé / traité ; IA sous validation humaine, traçabilité, tests sur cas connus ; transferts et expéditions partielles comme sources d'émissions ; propriétaire de flux et gouvernance.

**Visuel suggéré :** Dossier de cas avec trois extraits de statuts et un cadre de réponse.

---

### Écran 13 — Quiz de validation (10 questions — 80% requis pour valider)
*(chaque question est rattachée à un objectif)*
1. **(QCM — O1)** Parmi ces exemples, lequel relève du flux d'information ?
2. **(Association — O1)** Associer chaque événement (confirmation d'expédition, facture, colis en transit) au flux concerné et indiquer lequel déclenche l'autre.
3. **(Vrai/Faux — O2)** Une cartographie de flux peut être construite entièrement depuis un bureau, sans le terrain.
4. **(QCM — O3)** Qu'est-ce qu'un goulot d'étranglement et pourquoi accélérer une étape en amont peut-il être inutile ?
5. **(Mise en situation — O3)** Les stocks de deux systèmes divergent : dans quel ordre vérifiez-vous les causes ?
6. **(QCM — O4)** Quelle différence entre un tableur, une simulation à événements discrets et un jumeau numérique ?
7. **(Vrai/Faux — O4)** Le résultat d'une simulation est une prévision certaine.
8. **(Mise en situation — O5)** Un agent d'IA propose d'envoyer lui-même un message à un client : quel niveau d'autonomie et quelles protections ?
9. **(Réponse libre — O6)** Citez deux sources d'impact environnemental dans un flux de commandes et un levier réglé par une règle métier. *Éléments attendus : transferts entre sites, expéditions partielles, stocks dormants, retours ; règle de sourcing, de répartition, de groupage.*
10. **(Réponse libre — O7)** Qu'attendez-vous d'un propriétaire de flux et comment impliquez-vous le terrain ? *Éléments attendus : responsabilité de bout en bout, indicateurs partagés, revue régulière, règles fournies et testées par les équipes d'usage.*

**Note formateur :** Feedback explicatif après chaque réponse, avec renvoi à l'écran concerné. Seuil de réussite : 8/10, les réponses libres étant évaluées selon la grille « éléments attendus ». Le diagnostic indique les objectifs non maîtrisés.

---

### Écran 14 — Synthèse et points clés
**Contenu clé (rappel en 6 puces) :**
- Un flux a trois dimensions (physique, information, financier) qui peuvent se décaler ou se contredire.
- On cartographie un flux avec le terrain : étapes, acteurs, systèmes, données, délais, règles.
- On repère le goulot et les ruptures de données, souvent aux interfaces ; on mesure avant d'agir.
- On modélise et on simule avant de changer, en gardant en tête les limites d'un modèle.
- L'IA surveille, anticipe et peut agir via des agents, sous validation humaine, avec traçabilité ; elle aide à fiabiliser les règles.
- Les flux portent des impacts environnementaux que les règles métier permettent de réduire ; un flux a un propriétaire et s'appuie sur la connaissance d'usage du terrain.

**Call-to-action :** Transition vers le module suivant. "Après les flux, passons aux systèmes : d'abord l'OMS, qui décide où et comment servir chaque commande."

**Visuel suggéré :** Carte mentale récapitulative, bouton "Module suivant", lien de téléchargement du glossaire global.

---

## Glossaire
Les termes de ce module ont été ajoutés au [glossaire global](../00_Glossaire_global.md).

## Points ouverts / à valider avec toi
1. **Base limitée** : le cours ICAM et les notes OMS donnent la matière sur les flux et les cycles de vie ; la méthode de cartographie, la modélisation et la partie IA sont construites avec des connaissances générales, à faire relire.
2. **Exemples réels** (écrans 1, 7, 9) à fournir, anonymisés.
3. **Niveau de modélisation** : faut-il aller jusqu'à un exercice de simulation sur tableur, ou rester sur la compréhension ?
4. **Outils de cartographie** : le module reste générique (aucun logiciel cité) ; à ajuster si l'école utilise un outil précis.
5. **Étude de cas** (écran 12) : à enrichir avec des données fictives ; barème de correction à valider.
6. **Quiz** : questions à finaliser (options, feedbacks).
