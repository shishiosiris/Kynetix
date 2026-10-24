# Module e-learning — ERP (Enterprise Resource Planning)
**Formation :** Responsable de Production Transport et Logistique (RPTL) — Bac+3
**Sous-titre du module :** Rôle, référentiels, cycles achat et vente, stock comptable, projets ERP, limites, marché et ouverture vers l'intégration des systèmes
**Durée cible :** 35–45 min
**Public :** Apprenants RPTL ou métiers proches (responsable entrepôt, affréteur, approvisionneur, coordinateur transport/logistique) — non-IT
**Statut :** 🔴 À créer — v1 storyboard **sans support de cours dédié**. Base : connaissances générales sur les ERP, éléments des supports OMS et WMS déjà intégrés (couche stratégique, système hôte, messages échangés, gestion fournisseurs), module 1 (projets IT) et recherche sur le marché. **À faire relire par un expert ERP / finance avant production.**

**Positionnement dans le curriculum :** Cinquième module « système ». Après les systèmes qui exécutent (OMS, WMS, TMS) et celui qui planifie (APS), l'ERP est **le système de gestion qui porte les données de référence, les achats, les ventes, le stock valorisé et la comptabilité**. Il est le « système hôte » avec lequel dialoguent les autres. Les exemples sont contextualisés métier transport/logistique, sans nom de client ni de projet ; seul l'écran « panorama du marché » cite des éditeurs (règle du projet, voir CLAUDE.md).

---

## Objectifs pédagogiques
À l'issue du module, l'apprenant sera capable de :
1. Définir ce qu'est un ERP et ce qui le distingue des systèmes spécialisés (OMS, WMS, TMS, APS).
2. Situer l'ERP dans le SI (couche stratégique, échelle de temps) et citer les principaux messages qu'il échange avec les systèmes logistiques.
3. Expliquer l'importance des données de référence (articles, fournisseurs, clients, sites) et leur impact sur la logistique.
4. Décrire les cycles achat-à-paiement et commande-à-encaissement et repérer où interviennent la logistique et le RPTL.
5. Distinguer stock comptable, stock physique et stock disponible à la vente.
6. Comprendre pourquoi un projet ERP est un gros projet et ce que signifient standard, spécifique et modèle commun.
7. Identifier les limites d'un ERP et réappliquer le réflexe « vérifier avant d'agir ».
8. Avoir une vue du marché des éditeurs ERP et comprendre pourquoi les systèmes ont besoin d'être intégrés entre eux.

---

## Plan du module (13 écrans + quiz + synthèse)

| # | Écran | Durée estimée |
|---|-------|----------------|
| 1 | Accroche / mise en situation | 1-2 min |
| 2 | Objectifs du module | 1 min |
| 3 | Qu'est-ce qu'un ERP ? | 3 min |
| 4 | L'ERP dans le système d'information : le système hôte | 4 min |
| 5 | Les données de référence : la fondation | 3 min |
| 6 | Le cycle achat-à-paiement | 4 min |
| 7 | Le cycle commande-à-encaissement | 3 min |
| 8 | Le stock dans l'ERP : comptable, physique, disponible | 3 min |
| 9 | Les enjeux pour le RPTL | 3 min |
| 10 | Un projet ERP : standard, spécifique et modèle commun | 3 min |
| 11 | Les limites de l'ERP — vérifier avant d'agir | 3 min |
| 12 | Ouverture : faire parler les systèmes entre eux (l'intégration) | 3 min |
| 13 | Panorama du marché des ERP | 3 min |
| 14 | Quiz de validation (10 questions, 80% requis) | 5 min |
| 15 | Synthèse et points clés à retenir | 1-2 min |

---

### Écran 1 — Accroche / mise en situation
**Contenu clé :**
- Mise en situation narrative : "À la clôture du mois, le service comptable constate que le stock en valeur ne correspond pas à ce que l'entrepôt déclare. Une facture fournisseur est bloquée parce que la réception n'a pas été enregistrée. Trois systèmes, trois chiffres. Lequel fait foi, et pourquoi ?"
- Teaser : ce module présente le système qui sert de **référence financière et administrative** de l'entreprise — l'ERP.

**Visuel suggéré :** Trois chiffres de stock différents (comptabilité, entrepôt, site de vente) autour d'un point d'interrogation qui devient « ERP ».

**Note formateur :** Ancrer l'intérêt — le RPTL ne manipule pas l'ERP en permanence, mais ses actions (réceptions, expéditions, écarts de stock) y laissent des traces financières.

**[Exemple réel à intégrer]** — un cas vécu d'écart entre stock comptable et stock physique, ou de facture bloquée par une réception non saisie (anonymisé).

---

### Écran 2 — Objectifs du module
**Contenu clé :** Reprendre les objectifs pédagogiques ci-dessus sous forme de bullet points visuels (icônes).

**Visuel suggéré :** 8 pictos (définition / système hôte / référentiels / achats et ventes / stock / projets / limites / marché et intégration).

---

### Écran 3 — Qu'est-ce qu'un ERP ?
**Contenu clé :**
- Définition : un ERP (*Enterprise Resource Planning*, ou progiciel de gestion intégré) est un système qui **rassemble dans une même base de données** les grandes fonctions de gestion de l'entreprise : finance et comptabilité, achats, ventes, stocks, production, ressources humaines.
- Idée centrale : **une seule version de la vérité** pour les données de gestion. Chaque module (achats, ventes, stock, compta...) lit et écrit dans la même base ; un événement (une réception, une expédition) a une conséquence en cascade (stock, comptabilité, trésorerie).
- Un ERP est **généraliste** : il couvre beaucoup de fonctions, avec une profondeur moyenne. Les systèmes spécialisés (OMS, WMS, TMS, APS) vont plus loin sur leur domaine.
- Rôle de **source de vérité financière et administrative** : valeur du stock immobilisé, commandes fournisseurs, factures, ressources humaines.
- Distinction avec la gestion de la relation client (CRM) : le CRM connaît le client (historique, habitudes) ; l'ERP porte la facturation et l'administratif ; l'OMS gère la commande et consomme les informations client sans les posséder.

**Visuel suggéré :** Schéma en étoile : une base de données unique au centre, modules finance / achats / ventes / stocks / production / RH autour.

**Note formateur :** Insister sur « une seule version de la vérité » et sur la différence avec les systèmes spécialisés : l'ERP est large, les autres sont profonds.

---

### Écran 4 — L'ERP dans le système d'information : le système hôte
**Contenu clé :**
- Rappel du modèle à 3 couches (module OMS) : l'ERP est dans la **couche stratégique** (vue financière et légale), avec une mise à jour qui peut aller du **mensuel à l'annuel** pour certaines données ; les systèmes opérationnels (OMS, APS) et d'exécution (WMS, WCS, TMS) travaillent plus vite.
- L'ERP joue souvent le rôle de **système hôte** vis-à-vis du WMS : il lui envoie les **articles** (référentiel), les **ASN** (ce qui est attendu des fournisseurs) et les **ordres de distribution** ; il en reçoit les **PIX** (mouvements de stock) et les **confirmations d'expédition**.
- Avec l'**OMS** : l'ERP fournit les référentiels et reçoit les commandes à facturer ; l'OMS lui communique le stock par site.
- Avec le **TMS** : l'ERP transmet les commandes à transporter et reçoit les informations de facture du transport.
- Avec l'**APS** : l'ERP lui fournit l'historique et les paramètres ; il reçoit les propositions de commandes fournisseurs.
- La relation avec les **fournisseurs** (SRM) est souvent rattachée à l'ERP : contrats, conditions, quantités minimales, coûts.
- Message clé : l'ERP est au **centre des échanges de données de gestion** ; une erreur ou un retard à ce niveau se propage à tous les systèmes logistiques.

**Visuel suggéré :** Schéma avec l'ERP au centre et cinq flèches nommées vers OMS, WMS, TMS, APS, fournisseurs (articles, ASN, ordres, mouvements de stock, factures).

---

### Écran 5 — Les données de référence : la fondation
**Contenu clé :**
- Les **données de référence** (ou *données maîtres*) sont les informations de base, relativement stables, dont tous les processus dépendent :
  - **Articles** : code, désignation, famille, unité de mesure, dimensions, poids, conditionnement, contraintes (fragile, dangereux, frais...), durée de vie.
  - **Fournisseurs** et **clients** : adresses, conditions, délais, modes de transport.
  - **Sites** : entrepôts, magasins, quais, calendriers d'ouverture.
  - **Prix** et **conditions commerciales**.
- Ces données sont **créées et maintenues dans l'ERP** (ou un référentiel dédié), puis **diffusées** aux autres systèmes.
- Impact direct sur la logistique : des dimensions ou poids faux faussent le calcul de volume (cubing) du WMS et les alertes de pesée ; une adresse erronée perturbe le TMS ; un conditionnement mal renseigné fausse les approvisionnements.
- Message clé : **la qualité des données de référence conditionne celle de tous les systèmes** ; elle se traite à la source.

**Visuel suggéré :** Un « arbre » dont les racines sont les données de référence (articles, tiers, sites) et les branches les systèmes (WMS, TMS, OMS, APS).

**[Exemple réel à intégrer]** — un cas où une donnée article erronée (poids, dimensions, unité) a provoqué des incidents en entrepôt ou en transport (anonymisé).

---

### Écran 6 — Le cycle achat-à-paiement
**Contenu clé :**
- Le **cycle achat-à-paiement** (*procure-to-pay*) va du besoin d'achat au règlement du fournisseur :
  1. **Besoin** (prévision, proposition de l'APS, demande interne).
  2. **Commande fournisseur** émise depuis l'ERP.
  3. **Avis d'expédition (ASN)** annoncé par le fournisseur et transmis au WMS.
  4. **Réception** en entrepôt : enregistrement par le WMS, remontée à l'ERP (message de fin de réception).
  5. **Facture fournisseur** reçue et saisie.
  6. **Rapprochement à trois** : l'ERP compare la **commande**, la **réception** et la **facture** ; s'ils concordent, la facture est validée.
  7. **Paiement** du fournisseur.
- Rôle du RPTL : une **réception juste et rapide** conditionne le rapprochement et le paiement ; un écart de quantité ou de qualité doit être **tracé** pour justifier une réclamation. Il **fournit les règles de réception** (quels contrôles, quelles tolérances d'écart) issues de son usage et les ajuste à l'expérience.
- Lien WMS : la réception du module WMS (ASN, iLPN, contrôle) est la brique physique de ce cycle.

**Visuel suggéré :** Frise à 7 étapes avec, en dessous, les systèmes concernés (APS, ERP, WMS, ERP, finance) et un encart « rapprochement à trois : commande / réception / facture ».

**[Exemple réel à intégrer]** — un cas de rapprochement bloqué par un écart de réception (anonymisé).

---

### Écran 7 — Le cycle commande-à-encaissement
**Contenu clé :**
- Le **cycle commande-à-encaissement** (*order-to-cash*) va de la commande du client à l'encaissement :
  1. **Commande client** prise (site, magasin, service client) et orchestrée par l'**OMS**.
  2. **Disponibilité et promesse** (stock, délai).
  3. **Préparation** (WMS) et **expédition**, avec **transport** (TMS).
  4. **Facturation** : l'ERP émet la facture à partir de la livraison confirmée.
  5. **Encaissement** du paiement et comptabilisation.
- Où se situe chaque système : l'OMS gère la commande et la promesse, le WMS et le TMS exécutent, l'ERP **valorise et facture**.
- Rôle du RPTL : une **confirmation d'expédition fiable et rapide** déclenche la facturation ; un colis expédié mais non confirmé retarde la facture et la trésorerie. Il **fournit les règles de confirmation** (moment, motif, justificatifs) et vérifie, après chaque évolution, que la facturation suit.
- Retours : un retour client suit aussi le cycle (réception du retour, remise en stock, avoir ou remboursement).

**Visuel suggéré :** Frise à 5 étapes avec les systèmes en dessous (OMS, WMS, TMS, ERP, finance), les messages « confirmation d'expédition » et « facture » mis en évidence.

---

### Écran 8 — Le stock dans l'ERP : comptable, physique, disponible
**Contenu clé :**
- Trois façons de parler du « stock » :
  - **Stock comptable / valorisé** (ERP) : quantités multipliées par un **coût** ; il alimente le bilan (valeur de stock immobilisée).
  - **Stock physique** (WMS) : ce qui est réellement compté, par emplacement.
  - **Stock disponible à la vente** (OMS, ATS) : le stock physique moins les réservations et protections.
- Ces trois valeurs **divergent** normalement (stock non rangé, bloqué, réservé, en transit) mais doivent rester **réconciliables**. Les mouvements de stock remontés par le WMS (PIX) alimentent l'ERP pour garder le stock comptable à jour.
- **Réconciliation** : on compare périodiquement le stock de l'ERP à l'image de stock du WMS ; les écarts sont analysés avant correction.
- **Inventaire** et **démarque** : un écart d'inventaire a une conséquence comptable (perte de valeur) en plus de l'impact logistique.
- Message clé : quand on dit « le stock est faux », il faut d'abord dire **de quel stock on parle**.

**Visuel suggéré :** Trois colonnes (comptable / physique / disponible) avec une même quantité de départ et les éléments qui les font diverger, et une flèche « réconciliation ».

---

### Écran 9 — Les enjeux pour le RPTL
**Contenu clé :**
- **Traçabilité financière** de la logistique : coûts de réception, de préparation, de transport imputés aux bonnes commandes et aux bons sites.
- **Fiabilité des chiffres** : écarts de stock, valeur immobilisée, démarque ; la qualité des saisies et des messages conditionne la clôture comptable.
- **Facturation et trésorerie** : une expédition confirmée tard retarde la facture ; une réception mal saisie retarde le paiement fournisseur et peut dégrader la relation.
- **Pilotage** : les données de l'ERP alimentent le reporting de direction (coûts logistiques, marge, niveau de stock).
- **Conformité** : traçabilité, documents, pièces justificatives en cas de contrôle.
- Rôle du RPTL : **détenteur de la connaissance d'usage**, il garantit que **les gestes physiques sont enregistrés à temps et sans erreur**, explique les écarts, **fournit les règles métier** (codes de coûts, indicateurs, règles d'écart) lors des projets et les **teste après l'installation**.

**Visuel suggéré :** Carte « du geste physique à la ligne comptable » : réception → stock → facture → paiement, avec le RPTL à chaque point d'enregistrement.

**[Exemple réel à intégrer]** — un cas où un enregistrement tardif ou erroné a eu un effet financier visible (facture, clôture, écart) (anonymisé).

---

### Écran 10 — Un projet ERP : standard, spécifique et modèle commun
**Contenu clé :**
- Un projet ERP est un **gros projet** (rappel module 1) : forts impacts stratégiques, durée souvent supérieure à 9 mois, nombreux acteurs, risques élevés. Il touche presque tous les métiers.
- **Standard vs spécifique** : un ERP propose un fonctionnement standard ; on peut l'adapter par du paramétrage ou des développements spécifiques. Plus on s'écarte du standard, plus le projet est long, coûteux et difficile à maintenir et à faire évoluer.
- **Modèle commun** (*core model*) : un socle (processus, règles de gestion, modèles de données, référentiels) partagé entre plusieurs filiales ou sites, qui limite les écarts locaux et facilite les déploiements.
- Phases à rappeler (module 1) : cadrage, design, build, recettes (tests unitaires, intégration, de bout en bout, d'acceptation), préparation (formation, cutover), mise en production (*go live*), hypercare, run.
- Rôle du RPTL : **key user** et **détenteur de la connaissance d'usage** ; il **fournit les règles métier et les scénarios réels** (pics d'activité, cas limites) au design, puis **les teste après l'installation** (recette métier, hypercare).

**Visuel suggéré :** Frise des phases d'un gros projet et deux curseurs « standard ↔ spécifique » et « local ↔ modèle commun ».

---

### Écran 11 — Les limites de l'ERP — vérifier avant d'agir
**Contenu clé :**
- L'ERP est **généraliste** et centré sur la gestion : il n'est pas conçu pour l'**exécution fine** en entrepôt (WMS), l'**orchestration omnicanale** des commandes (OMS), l'**optimisation du transport** (TMS) ou la **planification avancée** (APS) — d'où l'existence des systèmes spécialisés.
- Sa **cadence** est plus lente (couche stratégique) : certaines données ne sont pas en temps réel.
- Il est **rigide** : les évolutions passent par des projets, et chaque spécifique alourdit la maintenance.
- Il est **dépendant des données et des messages** qu'il reçoit : une confirmation d'expédition perdue, une réception non remontée ou un référentiel erroné produit des écarts.
- **Vérifier avant d'agir** : avant de conclure à une « erreur de l'ERP » (stock faux, facture bloquée, commande non facturée), contrôler dans l'ordre : le **message** attendu a-t-il été **émis et reçu** (PIX, confirmation d'expédition, réception) ? la **donnée de référence** est-elle correcte ? le **statut** de la pièce (commande, réception, facture) est-il celui attendu ? la **règle** de rapprochement ou de valorisation applicable ?

**Visuel suggéré :** Check-list « avant d'escalader » en 4 cases + mini-cas interactif (QCM court), distinct du quiz final.

**[Exemple réel à intégrer]** — un cas où une vérification de message ou de donnée a évité une escalade inutile (anonymisé).

---

### Écran 12 — Ouverture : faire parler les systèmes entre eux (l'intégration)
**Contenu clé :**
- Tout au long du parcours, on a vu des systèmes qui **s'échangent des messages** : articles, ASN, ordres de distribution, PIX, confirmations d'expédition, factures, statuts de livraison...
- Ces échanges ne se font pas tout seuls : ils passent par des **interfaces** et, souvent, par une couche d'**intégration** (bus d'intégration ou **ESB**, courtier d'événements, plateforme d'intégration).
- **Ce que fait un ESB** : il **transporte** les messages d'un système à l'autre, les **transforme** au format attendu par le destinataire, les **achemine** vers le bon système et **garde la trace** de ce qui a circulé. Il évite que chaque système soit relié directement à tous les autres.
- Une **chaîne de messages** : un incident peut venir du système émetteur, du système récepteur **ou du transport du message entre les deux**. Savoir où chercher fait gagner du temps.
- Le réflexe « vérifier avant d'agir » s'y applique pleinement : le message est-il parti ? arrivé ? traité ?

**Visuel suggéré :** Les systèmes du parcours (ERP, OMS, APS, WMS, WCS, TMS) reliés par une couche d'intégration au centre, avec des messages nommés qui circulent.

---

### Écran 13 — Panorama du marché des ERP
**Contenu clé :**
- Rappel du principe d'un quadrant d'analystes (voir modules précédents).
- Pour les ERP, **Gartner publie des Magic Quadrants par segment** : par exemple *Cloud ERP for Product-Centric Enterprises* (entreprises qui vendent ou fabriquent des produits, donc les plus proches de la logistique) et *Cloud ERP for Service-Centric Enterprises*.
- **Édition 2025 du Magic Quadrant « Cloud ERP for Product-Centric Enterprises »** (publiée le 14 octobre 2025). Leaders cités par les sources consultées : **Oracle (Fusion Cloud ERP)**, **Oracle NetSuite**, **Microsoft**, **SAP**, **IFS**, **Epicor**, **Infor**.
- ⚠️ **À confirmer avant publication** : liste des Leaders issue de communiqués d'éditeurs et d'un article de synthèse ; les éditeurs en « acteurs de niche » (et leurs noms) et la position exacte sur les axes ne sont accessibles que dans le rapport complet payant. Aucune édition 2026 n'a été trouvée à la date de rédaction.
- Message clé pour le RPTL : un ERP se choisit selon la taille et le métier de l'entreprise, ses besoins de gestion et son intégration aux systèmes logistiques ; la logique du module reste la même quel que soit l'éditeur.

**Visuel suggéré :** Quadrant 2x2 (axes « Capacité d'exécution » / « Complétude de la vision »), les 7 Leaders confirmés placés dans leur cadran (sans position fine), un encart « à compléter » pour les autres, et la mention « Source : Gartner, Magic Quadrant for Cloud ERP for Product-Centric Enterprises, 2025 ; placements annoncés par les éditeurs ».

**Sources à citer à l'écran (note formateur) :**
- Gartner — Magic Quadrant for Cloud ERP for Product-Centric Enterprises (14 octobre 2025), rapport payant.
- SAP : https://news.sap.com/2025/10/sap-a-leader-gartner-magic-quadrant-cloud-erp-product-centric-enterprises/
- Infor : https://www.infor.com/resources/gartner-names-cloudsuite-solutions-as-leader
- Epicor : https://www.epicor.com/en-us/resources/library/corporate/epicor-named-leader-in-the-2025-gartner-magic-quadrant/
- Synthèse des Leaders : https://www.cxtoday.com/customer-analytics-intelligence/gartner-magic-quadrant-for-cloud-erp-for-product-centric-enterprises-2025-the-rundown/

**Note formateur :** À réactualiser à chaque nouvelle édition (annuelle). Recouper les placements avec le rapport avant mise en ligne.

---

### Écran 14 — Quiz de validation (10 questions — 80% requis pour valider)
**Exemples de questions (à compléter jusqu'à 10) :**
1. (QCM) Quel est le rôle principal d'un ERP ?
2. (Vrai/Faux) L'ERP est plus approfondi que le WMS sur la gestion fine d'un entrepôt.
3. (QCM) Que signifie « système hôte » pour un WMS ?
4. (Association) Associer chaque message (articles, ASN, ordre de distribution, PIX, confirmation d'expédition) à son sens de circulation (ERP vers WMS / WMS vers ERP).
5. (Mise en situation) Un poids article erroné dans le référentiel : quels systèmes logistiques en subissent les conséquences ?
6. (QCM) Que compare le rapprochement à trois ? Que se passe-t-il s'il y a un écart ?
7. (Mise en situation) Une expédition est partie mais n'a pas été confirmée dans l'ERP : quelle conséquence sur la facturation ?
8. (QCM) Distinguer stock comptable, stock physique et stock disponible à la vente.
9. (Vrai/Faux) Plus on personnalise un ERP, plus il est facile à maintenir.
10. (Mise en situation) Une facture fournisseur reste bloquée : citer deux vérifications avant d'incriminer l'ERP.

**Note formateur :** Feedback explicatif après chaque réponse. Seuil de réussite : 8/10 bonnes réponses minimum.

---

### Écran 15 — Synthèse et points clés
**Contenu clé (rappel en 6 puces) :**
- L'ERP réunit les grandes fonctions de gestion dans une base unique : une seule version de la vérité financière et administrative.
- Il est le système hôte des systèmes logistiques : il échange avec eux articles, ASN, ordres, mouvements de stock, confirmations d'expédition et factures.
- Les données de référence sont la fondation : leur qualité conditionne celle de tous les systèmes.
- Cycles achat-à-paiement et commande-à-encaissement : la logistique y produit les événements physiques qui déclenchent facturation et paiement.
- Stock comptable, physique et disponible sont trois vues différentes à réconcilier.
- Un projet ERP est un gros projet ; standard et modèle commun limitent les coûts. « Vérifier avant d'agir » : message, donnée de référence, statut, règle.

**Call-to-action :** Transition vers le module suivant. "Les systèmes dialoguent grâce à l'intégration ; voyons aussi comment la mécanisation de l'entrepôt est pilotée : le WCS."

**Visuel suggéré :** Carte mentale récapitulative, bouton "Module suivant", lien de téléchargement du glossaire global.

---

## Glossaire
Les termes de ce module ont été ajoutés au [glossaire global](00_Glossaire_global.md) de la formation.

## Points ouverts / à valider avec toi
1. **Pas de support dédié** : tout le contenu métier est à faire relire par un expert ERP / finance. Tu peux m'envoyer des extraits (cours, notes, résumés) pour vérifier et enrichir.
2. **Périmètre** : j'ai orienté l'ERP vers la logistique (achats, ventes, stock, système hôte). Faut-il détailler la finance, la production ou les RH, ou rester centré sur la logistique ?
3. **Exemples réels** (écrans 1, 5, 6, 9, 11) à fournir, anonymisés, sans nom de client ni de projet.
4. **Écran 12** : écran d'information sur l'intégration et le rôle d'un ESB ; il n'annonce aucun module supplémentaire.
5. **Écran 13 (panorama)** : Magic Quadrant Gartner « Cloud ERP for Product-Centric Enterprises » 2025 ; Leaders issus de communiqués et d'une synthèse ; autres placements à confirmer ; pertinence du segment « Service-Centric » ?
6. Les 10 questions du quiz sont à finaliser (réponses/options complètes + feedbacks).
