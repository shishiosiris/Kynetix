# Module e-learning — WMS (Warehouse Management System)
**Formation :** Responsable de Production Transport et Logistique (RPTL) — Bac+3
**Sous-titre du module :** Rôle, flux de l'entrepôt, échanges avec les autres systèmes, limites, marché et ouverture vers le WCS
**Durée cible :** 45–55 min (module dense — à découper en 2 séquences : « flux entrant » écrans 1 à 7, « flux sortant, limites, WCS et marché » écrans 8 à 16)
**Public :** Apprenants RPTL ou métiers proches (responsable entrepôt, affréteur, approvisionneur, coordinateur transport/logistique) — non-IT
**Statut :** 🔴 À créer — v1 storyboard (base : section WMS du cours ICAM 2026, complétée pour les parties laissées vides et pour l'ouverture vers le WCS)

**Positionnement dans le curriculum :** Deuxième module « système » après l'OMS. L'OMS a décidé *quelle source prépare la commande* ; le WMS gère *ce qui se passe à l'intérieur de l'entrepôt* pour l'exécuter. Ce module est le plus « terrain » pour un RPTL. Il se termine en ouvrant la porte du **WCS** (mécanisation), qui aura son propre module. Les exemples sont contextualisés métier transport/logistique, sans nom de client ni de projet ; seul l'écran « panorama du marché » cite des éditeurs (règle du projet, voir CLAUDE.md).

---

## Objectifs pédagogiques
À l'issue du module, l'apprenant sera capable de :
1. Définir le rôle d'un WMS et ses apports : fiabilité des stocks, traçabilité, optimisation des activités et du stockage.
2. Situer le WMS par rapport à l'ERP, l'OMS, le TMS et le WCS, et citer les principaux messages échangés.
3. Décrire le flux entrant (réception, rangement, inventaire) et utiliser le vocabulaire de base (ASN, iLPN, SKU, emplacements).
4. Décrire le flux sortant (ordonnancement par vagues, préparation, pesée, consolidation, chargement, expédition).
5. Expliquer pourquoi un même WMS suit un flux standard ou un flux spécifique selon les besoins métier, et ce que cela implique en données et en paramétrage.
6. Identifier les limites d'un WMS et réappliquer le réflexe « vérifier avant d'agir ».
7. Expliquer pourquoi et comment on mécanise un entrepôt, et ce qui distingue le WMS du WCS.
8. Avoir une vue du marché des éditeurs WMS.

---

## Plan du module (14 écrans + quiz + synthèse)

| # | Écran | Durée estimée |
|---|-------|----------------|
| 1 | Accroche / mise en situation | 1-2 min |
| 2 | Objectifs du module | 1 min |
| 3 | Qu'est-ce qu'un WMS ? | 3 min |
| 4 | Le WMS dans le système d'information : avec qui échange-t-il ? | 4 min |
| 5 | L'entrepôt : zones et emplacements | 3 min |
| 6 | Le flux entrant : la réception | 4 min |
| 7 | Rangement, stock et inventaire | 4 min |
| 8 | L'ordonnancement : lancer les vagues de préparation | 4 min |
| 9 | La préparation : prélèvement, pesée, consolidation | 4 min |
| 10 | Le chargement et l'expédition : passage de relais au TMS | 3 min |
| 11 | Flux standard ou flux spécifique : paramétrer et piloter | 3 min |
| 12 | Les limites du WMS — vérifier avant d'agir | 3 min |
| 13 | Ouverture : de l'entrepôt piloté à l'entrepôt mécanisé (WCS) | 4 min |
| 14 | Panorama du marché des WMS | 3 min |
| 15 | Quiz de validation (10 questions, 80% requis) | 5 min |
| 16 | Synthèse et points clés à retenir | 1-2 min |

---

### Écran 1 — Accroche / mise en situation
**Contenu clé :**
- Mise en situation narrative : "Le système de commandes a décidé qu'une commande sera préparée depuis votre entrepôt. Un matin, l'équipe de nuit signale 200 colis reçus mais introuvables dans le stock, pendant que des commandes urgentes attendent. Où est le stock ? Qui sait précisément où est chaque colis, et dans quel état ?"
- Teaser : ce module présente le système qui sait, à chaque instant, ce qui est physiquement dans l'entrepôt, où, et ce qu'il faut en faire — le WMS.

**Visuel suggéré :** Vue d'entrepôt avec des points interrogation sur les palettes, qui se transforment en adresses (emplacements) lisibles par un terminal.

**Note formateur :** Ancrer l'intérêt — le RPTL est l'utilisateur principal de ce système, ou travaille avec ceux qui l'utilisent.

**[Exemple réel à intégrer]** — un cas vécu de stock « reçu mais introuvable » ou de commande bloquée à cause d'une information de stock (anonymisé).

---

### Écran 2 — Objectifs du module
**Contenu clé :** Reprendre les objectifs pédagogiques ci-dessus sous forme de bullet points visuels (icônes).

**Visuel suggéré :** 8 pictos (rôle / échanges / flux entrant / flux sortant / standard vs spécifique / limites / WCS / marché).

---

### Écran 3 — Qu'est-ce qu'un WMS ?
**Contenu clé :**
- Définition : un WMS (Warehouse Management System) est le système qui **gère les stocks, l'ordonnancement et la préparation des commandes au sein de l'entrepôt**.
- Quatre apports principaux :
  - **Fiabilité des stocks** : suivi en temps réel du stock disponible et optimisation des commandes.
  - **Traçabilité des produits** : produits organiques, haute valeur, produits frais, produits à durée de vie limitée...
  - **Optimisation des activités dans l'entrepôt** : nombre de prises, réduction des déplacements (travail « dirigé par le système »).
  - **Optimisation du stockage** et gain de place.
- Position dans la chaîne : après l'OMS (qui décide quelle source prépare), avant le TMS (qui organise le transport). Le WMS **exécute** ce que l'OMS a décidé.
- Rappel module OMS : l'OMS « décide », le WMS « exécute à l'intérieur de l'entrepôt ». Ils se parlent en permanence : l'OMS reçoit du WMS l'image de stock et les statuts.

**Visuel suggéré :** Schéma de la chaîne (commande → OMS → WMS → TMS → magasin/client) avec le WMS entouré, et 4 icônes pour ses apports.

**Note formateur :** Insister sur « temps réel » : un WMS est utile parce que chaque geste physique est enregistré au moment où il se produit.

---

### Écran 4 — Le WMS dans le système d'information : avec qui échange-t-il ?
**Contenu clé :**
- Le WMS échange avec un **système hôte** (l'ERP ou l'OMS) et avec d'autres systèmes. Messages principaux :
  - **Entrants** (vers le WMS) : les articles (référentiel), les **ASN** (avis d'expédition fournisseur : ce qui est attendu), les **ordres de distribution** (demandes de préparation de commandes).
  - **Sortants** (du WMS) : les **PIX** (transactions d'inventaire : toute modification de stock — réception, modification, expédition), les **confirmations d'expédition**, l'**image de stock** périodique (pour l'ERP, l'OMS, le reporting).
- Un **bus d'intégration (ESB, *Enterprise Service Bus*)** relaie souvent ces messages : il les reçoit d'un système, les transforme au format attendu par le suivant, les distribue au bon destinataire et en garde la trace ; un pré-intégrateur est parfois ajouté.
- Avec le **TMS** : la commande lui est transmise en même temps qu'au WMS ; le WMS l'informe du début de préparation, de la pesée/colisage ou d'une annulation ; le TMS renvoie le « go chargement » ; le WMS confirme l'expédition.
- Avec le **WCS** : le WMS lui transmet les ordres de mouvement des équipements mécanisés (voir écran 13).
- Rappel des 3 couches (module OMS) : ERP stratégique ; OMS opérationnel ; **WMS et WCS en exécution, en temps réel**.
- Message clé : le WMS est le **maillon qui transforme des gestes physiques en informations** (PIX) pour tous les autres systèmes.

**Visuel suggéré :** Schéma en étoile avec le WMS au centre, flèches nommées (ASN, articles, ordre de distribution, PIX, confirmation d'expédition), ESB en intermédiaire vers l'ERP/OMS, TMS en dessous, WCS à côté.

**Note formateur :** « PIX » (Perpetual Inventory Transaction) est le nom courant de cette transaction chez certains éditeurs ; d'autres parlent simplement de transaction ou de mouvement d'inventaire.

---

### Écran 5 — L'entrepôt : zones et emplacements
**Contenu clé :**
- Les zones d'un entrepôt, dans l'ordre du flux : **quais de réception** → emplacement d'attente de rangement → **contrôle qualité** → **zone active** (picking) et **réserve** → **préparation des commandes** → zone de colisage → **ventilation** → emplacement d'attente d'expédition → **quais d'expédition**.
- Le WMS gère chaque zone et chaque **emplacement**, repéré par une adresse : allée, travée, niveau, position.
- Trois types d'emplacements à connaître :
  - **Réserve** : stockage palette, prélèvement palette.
  - **Picking standard** : stockage palette ou carton, prélèvement carton.
  - **Picking à la pièce** : stockage carton, prélèvement à l'unité.
- Message clé : le type d'emplacement détermine **l'unité** (palette, carton, pièce) avec laquelle on stocke et on prélève.

**Visuel suggéré :** Plan 3D simplifié de l'entrepôt avec zones légendées + coupe d'un rack montrant allée, travée, niveau, position.

---

### Écran 6 — Le flux entrant : la réception
**Contenu clé :**
- Étapes standard : **déchargement** puis **déballage** ; **contrôle** optionnel.
- Types de réception : **à la référence** (mono-référence ou multi-références) ou **à la palette** (mono ou multi-références).
- Lexique du flux entrant (le plus fréquent) : une **palette** correspond à un **ASN**, un **colis** à un **iLPN** (identifiant de colis entrant, un iLPN pouvant parfois être une palette), un **article** à un **SKU**.
- Déroulé simplifié : l'ASN annoncé par le système hôte arrive dans le WMS en statut « en transit » ; l'opérateur, avec son **terminal RF**, scanne chaque iLPN ; le colis passe « en stock, non rangé » ; l'ASN se clôture automatiquement quand tout est reçu (sinon l'opérateur vérifie l'écart à l'écran) ; un message de fin de réception (PIX) remonte au système hôte.
- Le **contrôle** n'est pas systématique : les **règles inbound** précisent quels colis sont contrôlés (par fournisseur, par article, par valeur...).
- Message clé : tant qu'un colis est « non rangé », il est physiquement présent mais **pas disponible** pour la vente.

**Visuel suggéré :** Frise à trois étapes (déchargement → déballage → contrôle optionnel) et, dessous, la ligne des statuts « en transit » → « en stock, non rangé » → « réception vérifiée ».

**[Exemple réel à intégrer]** — un cas où l'écart entre l'avis annoncé (ASN) et la réception réelle a bloqué du stock (anonymisé).

---

### Écran 7 — Rangement, stock et inventaire
**Contenu clé :**
- **Rangement** : le WMS indique où ranger chaque colis (rangement dirigé), selon le type d'emplacement (écran 5), le paramétrage des emplacements et l'optimisation du stockage. Chaque rangement est enregistré (PIX).
- **Stock actif / réserve** : la zone de picking contient ce qui est prélevé souvent ; la réserve alimente le picking quand le seuil est atteint (réapprovisionnement interne).
- **Suivi des stocks** : le WMS connaît, par emplacement, la quantité, l'état (disponible, bloqué, en contrôle) et, selon les cas, lot, date de péremption, numéro de série.
- **Inventaire** : comptages physiques pour corriger les écarts entre le stock système et le stock réel ; la fiabilité du stock en dépend directement.
- **Gestion des retours** : un colis retourné suit un flux d'entrée (réception, contrôle, remise en stock ou rebut).
- Lien OMS : ce stock, une fois rangé et disponible, remonte à l'OMS (image de stock) et compose l'ATS.

**Visuel suggéré :** Schéma « réserve → réapprovisionnement → picking » avec un compteur de stock, et une flèche vers l'OMS « image de stock ».

---

### Écran 8 — L'ordonnancement : lancer les vagues de préparation
**Contenu clé :**
- L'**ordonnancement** est le contrôle du programme de préparation selon les paramètres et délais établis, **pour garantir un coût minimal**. Le WMS regroupe les commandes à préparer en **vagues**.
- Les étapes d'une vague et les questions auxquelles chacune répond :
  - **Règles de sélection** : quelles commandes inclure ? (ex. toutes les commandes urgentes + celles à expédier aujourd'hui)
  - **Modèle de capacité** : quelle quantité de travail la vague doit-elle générer ? (ex. plus de 1 000 unités, plus de 200 commandes)
  - **Allocation** : quel stock disponible sera affecté aux commandes ? (ex. le stock de l'emplacement A)
  - **Cubing** : comment utiliser au mieux la capacité ? (ex. une palette sera préparée jusqu'à son volume maximal)
  - **Routing** : quel transporteur et quel chargement ? (ex. un colis de moins de 20 kg vers une région donnée part avec un transporteur de colis)
  - **Consolidation** : où iront les palettes à la fin de la préparation ? (ex. toutes les commandes d'un même chargement au même endroit)
  - **Création des tâches** : comment seront préparées les commandes ? (ex. un prélèvement pour 3 colis à la fois, avec une priorité élevée)
  - **Impression** : quelles étiquettes imprimer ? (ex. les étiquettes de mission de prélèvement)
- Message clé : c'est ici que se joue l'arbitrage **délai / coût / charge de travail**. Les règles sont paramétrables avec les équipes métier : le RPTL, détenteur de la connaissance d'usage, **fournit ces règles** (sélection, capacité, priorités) et les **teste après l'installation**, notamment aux pointes.

**Visuel suggéré :** Entonnoir à 8 niveaux (sélection → capacité → allocation → cubing → routing → consolidation → tâches → impression), avec en regard « question » et « exemple ».

**Note formateur :** La vague est le lien entre l'OMS (ordre de distribution reçu) et le terrain (tâches de prélèvement). Faire le parallèle avec l'allocation d'une commande (module OMS) : l'OMS choisit **le site**, le WMS choisit **l'emplacement précis**.

**[Exemple réel à intégrer]** — un cas de règle de vague ou de capacité ajustée selon une contrainte terrain (anonymisé).

---

### Écran 9 — La préparation : prélèvement, pesée, consolidation
**Contenu clé :**
- **Modes de prélèvement** :
  - Palette complète.
  - Prélèvement chariot puis ventilation (**PTP, Pick then Pack** : on prélève d'abord, on emballe ensuite).
  - Picking en carton (**PAP, Pick and Pack** : on prélève directement dans le colis final).
  - Picking en détail (à l'unité).
  - Prélèvement automatisé, piloté par un WCS (écran 13).
- Le WMS génère des **tâches** (avec priorité, zone de départ, article, quantité) ; l'opérateur les exécute au **terminal RF** ; chaque prélèvement est enregistré (PIX).
- **Pesée** : étape de consolidation des informations de préparation. Un poids pesé anormal par rapport au poids attendu peut **déclencher une alerte**. On génère le bordereau/bon de livraison et, parfois, l'étiquette transporteur.
- **Consolidation (ancrage)** : les commandes sont regroupées sur des palettes dans les zones dédiées, puis prêtes à être expédiées.
- Message clé : le **poids** et les **dimensions** attendus viennent des données article (écran 11) : une donnée fausse produit de fausses alertes.

**Visuel suggéré :** 4 pictogrammes de modes de prélèvement + capture simplifiée d'un écran de pesée (poids réel / poids estimé) avec un voyant d'alerte.

---

### Écran 10 — Le chargement et l'expédition : passage de relais au TMS
**Contenu clé :**
- **Chargement** : une fois toutes les palettes consolidées, on charge le camion. Le WMS enregistre ce qui est chargé.
- **Expédition** : à l'expédition, on saisit le type et le nombre de palettes ; le WMS envoie la **confirmation d'expédition** au système hôte et au TMS.
- **Bordereau d'expédition** (*bill of lading*) : document qui reprend l'entrepôt expéditeur, la date, le numéro de chargement, le contenu (palettes, cartons, quantités par destinataire), le numéro de plomb et les signatures expéditeur/chauffeur.
- Dialogue avec le TMS : le TMS calcule le schéma de transport ; il donne le « go chargement » ; le WMS expédie ; le TMS suit ensuite la livraison.
- Message clé : à partir de la confirmation d'expédition, **le stock sort de l'entrepôt** (PIX) et la main passe au transport.

**Visuel suggéré :** Frise « palettes consolidées → go chargement → chargement → bordereau signé → confirmation d'expédition » avec les systèmes (WMS, TMS, ERP/OMS) en dessous.

---

### Écran 11 — Flux standard ou flux spécifique : paramétrer et piloter
**Contenu clé :**
- **Flux nominal (standard) vs flux spécifique** : un éditeur propose un fonctionnement standard, mais chaque entreprise n'a pas les mêmes besoins. Exemple de contraste : gros volumes avec peu de contrôles, ou faibles volumes de marchandises de forte valeur très contrôlées. Le WMS est donc **paramétré**, parfois enrichi de développements spécifiques.
- **Tout ce qui est visible à l'écran est une donnée** : chaque information de l'interface (dimensions, poids, famille, emballage...) est stockée en base de données. La qualité de ces **données de référence** conditionne le cubing, la pesée, l'allocation.
- **Suivi d'activité** : tableaux de bord paramétrables en temps réel, par rôle (opérations, suivi des systèmes IT) : productivité par opérateur et par créneau horaire, palettes urgentes non rangées, etc.
- Rôle du RPTL : **exprimer les besoins métier** qui justifient (ou non) un flux spécifique et **fournir les règles** issues de son usage (règles de vague, règles inbound, tolérances) ; les **tester après l'installation** (cas normaux, cas limites, pointes) et les **optimiser** en exploitation normale grâce au suivi d'activité.
- Lien module 1 : un flux spécifique relève d'un projet (cadrage, design, tests, recette) — c'est aussi le terrain des projets d'amélioration continue (courts, agiles).

**Visuel suggéré :** Deux colonnes « flux standard / flux spécifique » avec un exemple de chaque, et une capture schématique de tableau de bord.

**[Exemple réel à intégrer]** — un cas de flux spécifique justifié par un besoin métier, ou à l'inverse un spécifique qui aurait pu rester standard (anonymisé).

---

### Écran 12 — Les limites du WMS — vérifier avant d'agir
**Contenu clé :**
- Un WMS ne fait pas tout : il **gère l'intérieur de l'entrepôt**. Il ne gère pas :
  - l'orchestration des commandes entre canaux et sites (OMS) ;
  - la planification et le suivi du transport (TMS) ;
  - le pilotage des équipements mécanisés (WCS) ;
  - les référentiels et la comptabilité (ERP), qu'il reçoit du système hôte.
- Il est **dépendant du terrain** : un stock n'est juste que si chaque geste est scanné au bon moment ; un inventaire non fait fait dériver le stock.
- Il est **dépendant des données** : dimensions ou poids erronés, règles inbound mal paramétrées, messages en retard ou perdus entre systèmes.
- **Vérifier avant d'agir** : avant de conclure à un « bug » (stock manquant, commande bloquée, alerte de pesée), contrôler dans l'ordre : le **statut** du colis (« non rangé » ≠ disponible), un **blocage** ou contrôle qualité, la **donnée article**, la **réception du message** par le système suivant (PIX, ASN), la **règle** de vague applicable.
- Lien OMS : un ATS plus bas que prévu a souvent une cause dans le WMS (stock reçu non rangé, stock bloqué, PIX non reçu).

**Visuel suggéré :** Check-list « avant d'escalader vers l'IT » en 5 cases, et un mini-cas interactif (QCM court) distinct du quiz final.

**[Exemple réel à intégrer]** — un cas où une vérification terrain a évité une escalade inutile (anonymisé).

---

### Écran 13 — Ouverture : de l'entrepôt piloté à l'entrepôt mécanisé (WCS)
**Contenu clé :**
- **Pourquoi mécaniser un entrepôt ?** Cinq raisons : répondre à la promesse client ; adapter l'entrepôt à l'élargissement et à la profondeur de l'offre ; optimiser la productivité ; fiabiliser les process ; réduire la pénibilité.
- **Exemples d'équipements** : convoyeurs, transstockeurs, mise en bac, prélèvement « goods-to-person » (GTP : le produit vient à l'opérateur), trieurs, emballage automatique, robots de stockage, tours de rangement automatisées.
- **Le WCS (Warehouse Control System)** : il **pilote les éléments automatisés** de l'entrepôt, **orchestre les flux physiques**, **se synchronise avec le WMS** et peut intervenir dans tous les process (réception, stockage, prélèvement, préparation, expédition).
- **Partage des rôles** : le WMS décide **quoi** déplacer, **où** et **quand** (il connaît le stock et les commandes) ; le WCS décide **comment** le mouvement physique est réalisé (quel convoyeur, quel robot, quelle porte de tri). Le WMS lui envoie des ordres et reçoit en retour l'avancement.
- Rappel des 3 couches : WMS et WCS sont tous deux en **exécution, en temps réel** — mais pas au même niveau (information / machine).
- Rôle du RPTL : comprendre qu'un incident peut venir du WMS (mauvais ordre) ou du WCS (équipement) ; et qu'un projet de mécanisation est un projet IT **et** physique : il y **fournit les règles métier** et les **teste** lors des tests physiques et de l'hypercare (voir module 1 et module WCS).
- Transition : « Le prochain module système approfondit le WCS (avec l'APS et l'ERP) ».

**Visuel suggéré :** Schéma à deux niveaux : WMS (cerveau logistique) → WCS (chef d'orchestre des machines) → équipements (convoyeurs, robots, GTP), avec une flèche retour « avancement ».

**Note formateur :** Les éditeurs de solutions de mécanisation seront présentés dans le module WCS (règle « panorama du marché »), pas ici.

---

### Écran 14 — Panorama du marché des WMS
**Contenu clé :**
- Rappel du principe d'un quadrant d'analystes (voir module OMS) : photographie d'un marché à un instant donné, selon deux axes (capacité d'exécution, complétude de la vision), en quatre cadrans : Leaders, Challengers, Visionnaires, Acteurs de niche. Ce n'est pas un classement de qualité absolu et il évolue chaque année.
- Contrairement à l'OMS, **Gartner publie un Magic Quadrant pour les WMS** : édition publiée le **29 avril 2026** (Gartner, *Magic Quadrant for Warehouse Management Systems*).
- Placements vérifiés (annoncés par les éditeurs concernés, à confirmer avec le rapport) :
  - **Leaders** : Manhattan Associates, Blue Yonder, SAP, Oracle, Infor, Infios.
  - **Challenger** : Tecsys.
  - Également citée dans le rapport, quadrant non confirmé : Generix.
- ⚠️ **À confirmer avant publication** : les placements des autres éditeurs (Visionnaires, Acteurs de niche, autres Challengers) ne sont accessibles que dans le rapport complet ; la position exacte sur les axes n'est pas reproductible ici.
- Message clé pour le RPTL : un WMS se choisit selon le contexte (volumes, types de produits, niveau de mécanisation, intégration à l'ERP/OMS), pas selon un classement ; la logique de ce module reste la même quel que soit l'éditeur.

**Visuel suggéré :** Quadrant 2x2 (axes « Capacité d'exécution » / « Complétude de la vision »), les éditeurs confirmés placés dans leur cadran (sans position fine), un encart « à compléter » pour les autres, et la mention « Source : Gartner, Magic Quadrant for Warehouse Management Systems, 29/04/2026 ; placements annoncés par les éditeurs ».

**Sources à citer à l'écran (note formateur) :**
- Gartner — Magic Quadrant for Warehouse Management Systems (29 avril 2026), rapport payant.
- Manhattan Associates : https://www.manh.com/about-us/newsroom/press-releases/manhattan-associates-recognized-leader-gartner-magic-quadrant-wms
- SAP : https://news.sap.com/2026/05/sap-leader-2026-gartner-magic-quadrant-warehouse-management-systems/
- Blue Yonder : https://blueyonder.com/blog/2026/blue-yonder-named-a-leader-in-the-gartner-magic-quadrant-for-warehouse-management-systems
- Oracle : https://www.oracle.com/news/announcement/oracle-named-a-leader-in-2026-gartner-magic-quadrant-for-warehouse-management-systems-2026-05-07/
- Infor : https://www.infor.com/mea/news/infor-named-leader-2026-gartner-magic-quadrant-warehouse-management-systems
- Infios : https://www.businesswire.com/news/home/20260504814255/en/Infios-Named-a-Leader-in-the-2026-Gartner-Magic-Quadrant-for-Warehouse-Management-Systems-for-Eighth-Consecutive-Year
- Tecsys : https://infohub.tecsys.com/gartner-wms-mq-2026
- Generix : https://www.generixgroup.com/en/press-release/generix-placed-in-2026-gartner-magic-quadrant-for-warehouse-management-systems-wms

**Note formateur :** À réactualiser à chaque nouvelle édition du rapport (annuelle). Les placements viennent de communiqués d'éditeurs : les recouper avec le rapport avant mise en ligne.

---

### Écran 15 — Quiz de validation (10 questions — 80% requis pour valider)
**Exemples de questions (à compléter jusqu'à 10) :**
1. (QCM) Quel est le rôle principal d'un WMS ?
2. (Association) Associer chaque système (OMS / WMS / TMS / WCS) à ce qu'il décide ou exécute.
3. (QCM) Que signifie PIX et que contient ce message ?
4. (Association) Palette, colis, article : quel terme du flux entrant correspond à chacun (ASN, iLPN, SKU) ?
5. (Vrai/Faux) Un colis « en stock, non rangé » est déjà disponible à la vente.
6. (QCM) Dans une vague de préparation, quelle étape décide du transporteur et du chargement ?
7. (Mise en situation) Une alerte de pesée se déclenche sur un colis correct : quelle donnée vérifier en premier ?
8. (Vrai/Faux) Le WMS décide quel site prépare une commande.
9. (Mise en situation) L'ATS d'un article est plus bas que prévu dans l'OMS : citer deux causes possibles côté WMS.
10. (QCM) Quelle est la différence entre le rôle du WMS et celui du WCS ?

**Note formateur :** Feedback explicatif après chaque réponse. Seuil de réussite : 8/10 bonnes réponses minimum.

---

### Écran 16 — Synthèse et points clés
**Contenu clé (rappel en 6 puces) :**
- Le WMS gère les stocks, l'ordonnancement et la préparation à l'intérieur de l'entrepôt : il exécute ce que l'OMS a décidé.
- Il échange avec l'ERP/OMS (ASN, articles, ordres de distribution, PIX, confirmation d'expédition), le TMS et le WCS.
- Flux entrant : réception (ASN, iLPN, SKU), contrôle selon les règles inbound, rangement dirigé, inventaire.
- Flux sortant : vagues (sélection, capacité, allocation, cubing, routing...), prélèvement, pesée, consolidation, chargement, expédition.
- Un même WMS suit un flux standard ou spécifique : la qualité des données et le paramétrage conditionnent tout — « vérifier avant d'agir ».
- Le WCS pilote la mécanisation : le WMS décide quoi, où, quand ; le WCS décide comment.

**Call-to-action :** Transition vers le module suivant. "Après l'entrepôt, passons au transport avec le TMS."

**Visuel suggéré :** Carte mentale récapitulative, bouton "Module suivant", lien de téléchargement du glossaire global.

---

## Glossaire
Les termes de ce module ont été ajoutés au [glossaire global](00_Glossaire_global.md) de la formation.

## Points ouverts / à valider avec toi
1. **Durée** : 45–55 min, module dense. Découper en 2 séquences (flux entrant / flux sortant + WCS + marché) ?
2. **Parties laissées vides dans le cours ICAM** (« à alimenter / à modifier / à supprimer ») : rangement, ordonnancement, chargement et expédition. J'ai complété avec des connaissances générales — à relire par quelqu'un du métier.
3. **Exemples réels** (écrans 1, 6, 8, 11, 12) à fournir, anonymisés, sans nom de client ni de projet. Les noms de clients, d'éditeurs, de transporteurs et les captures d'écran du support ont volontairement été exclus du storyboard (le support est marqué « Company Confidential »).
4. **Écran 14 (panorama)** : placements des éditeurs issus de communiqués d'éditeurs ; Visionnaires et Acteurs de niche à compléter avec le rapport complet ; faut-il afficher Generix (quadrant inconnu) ?
5. **Terminologie** : « PIX » est un terme d'éditeur ; je le garde car il est courant, mais je peux le remplacer par « transaction d'inventaire ».
6. Les 10 questions du quiz sont à finaliser (réponses/options complètes + feedbacks).
7. **Module WCS** : les notions de mécanisation et les exemples d'éditeurs de mécanisation du cours (robotisation du rangement, tour automatisée) sont réservés au futur module WCS.
