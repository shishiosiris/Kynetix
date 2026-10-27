# Module e-learning — OMS (Order Management System)
**Formation :** Responsable de Production Transport et Logistique (RPTL) — Bac+3
**Sous-titre du module :** Rôle, commande et fulfilment, stock et promesse, fallback, exceptions, omnicanalité et marché
**Durée cible :** 35–45 min (module dense — à découper en 2 séquences si besoin)
**Public :** Apprenants RPTL ou métiers proches (responsable entrepôt, affréteur, approvisionneur, coordinateur transport/logistique) — non-IT
**Statut :** 🔴 À créer — v2 storyboard (intègre les notions du support existant : ATS/ATP, fulfilment, promesse, fallback, exceptions)

**Positionnement dans le curriculum :** Premier module "système" après le module socle *Comprendre les projets IT*. Il pose le rôle de l'OMS dans la chaîne logistique, sans entrer dans le paramétrage technique d'un outil précis. Les exemples sont contextualisés métier transport/logistique (profil RPTL), sans nom de client ni de projet. Seul l'écran de fin « panorama du marché » cite des éditeurs (règle du projet, voir CLAUDE.md).

---

## Objectifs pédagogiques
À l'issue du module, l'apprenant sera capable de :
1. Définir ce qu'est un OMS et expliquer son rôle dans la gestion des commandes.
2. Situer l'OMS par rapport aux autres systèmes (ERP, WMS, TMS...) selon leur échelle de temps, et ne pas confondre leurs périmètres.
3. Distinguer la **commande** (ce que le client a payé et souhaite recevoir) du **fulfilment** (comment elle sera préparée et traitée).
4. Distinguer le stock disponible à la vente (**ATS**) du stock promis pour une date (**ATP**), et expliquer comment l'OMS construit une promesse client.
5. Expliquer la logique de sourcing, d'allocation et de **fallback** (priorités de sourcing quand une source n'est pas disponible).
6. Décrire comment sont gérées les **exceptions de processus** : quelles règles suivre pour débloquer une commande hors du « happy path ».
7. Expliquer l'enjeu de l'omnicanalité et identifier les limites d'un OMS.
8. Avoir une vue du marché des éditeurs OMS et réappliquer le réflexe « vérifier avant d'agir ».

---

## Plan du module (13 écrans + quiz + synthèse)

| # | Écran | Durée estimée |
|---|-------|----------------|
| 1 | Accroche / mise en situation | 1-2 min |
| 2 | Objectifs du module | 1 min |
| 3 | Qu'est-ce qu'un OMS ? | 3 min |
| 4 | L'OMS dans le système d'information : 3 couches, 3 échelles de temps | 3 min |
| 5 | Commande et fulfilment : deux reflets d'une même demande | 4 min |
| 6 | Le stock : ATS (disponible à la vente) vs ATP (promis pour une date) | 4 min |
| 7 | Sourcing, allocation et promesse client | 4 min |
| 8 | Le fallback : quand la source prioritaire n'est pas disponible | 3 min |
| 9 | Zoom sur l'omnicanalité | 3 min |
| 10 | La gestion des exceptions de processus | 4 min |
| 11 | Les limites de l'OMS | 3 min |
| 12 | Vérifier avant d'agir — appliqué à la gestion de commandes | 2 min |
| 13 | Panorama du marché des OMS | 3 min |
| 14 | Quiz de validation (10 questions, 80% requis) | 5 min |
| 15 | Synthèse et points clés à retenir | 1-2 min |

---

### Écran 1 — Accroche / mise en situation
**Contenu clé :**
- Mise en situation narrative : "Un client a commandé en ligne un article indiqué 'en stock'. Il se présente en magasin pour le récupérer : l'article n'est plus là. Le site web, le magasin et l'entrepôt ne 'parlaient' pas le même langage au même moment. Qui aurait dû faire le lien entre ces canaux ?"
- Teaser : ce module explique le rôle du système qui orchestre les commandes entre les canaux de vente et les lieux de stock — l'OMS.

**Visuel suggéré :** Schéma simple avec 3 canaux (site web, magasin, entrepôt) reliés par un point d'interrogation, qui se transforme en "OMS" à la fin de l'écran.

**Note formateur :** Ancrer l'intérêt — montrer que ce sujet touche directement la fiabilité du stock que le RPTL gère au quotidien.

**[Exemple réel à intégrer]** — un cas vécu de rupture ou d'incohérence de stock entre canaux (anonymisé).

---

### Écran 2 — Objectifs du module
**Contenu clé :** Reprendre les objectifs pédagogiques ci-dessus sous forme de bullet points visuels (icônes).

**Visuel suggéré :** 8 pictos (définition / positionnement / commande vs fulfilment / ATS-ATP / sourcing-fallback / exceptions / omnicanalité-limites / marché) avec texte court sous chacun.

---

### Écran 3 — Qu'est-ce qu'un OMS ?
**Contenu clé :**
- Définition simple : un OMS (Order Management System) est le système qui **centralise et orchestre les commandes**, de leur création (quel que soit le canal de vente) jusqu'à leur affectation à une source de préparation/expédition, puis leur suivi jusqu'à la livraison, les retours et les anomalies.
- Il répond à 3 questions pour chaque commande : *Quoi ?* (quels articles), *Où la prendre ?* (quel entrepôt, quel magasin, quel fournisseur), *Comment la satisfaire ?* (quel mode de livraison ou de retrait).
- Cycle de vie couvert, en 6 phases : sourcing et orchestration → préparation et suivi → livraison (transporteur ou retrait) → logistique retour (retours, échanges) → réparation / prise en charge → gestion des anomalies (escalade).
- Il ne prépare pas physiquement la commande (rôle du WMS) et ne pilote pas le transport (rôle du TMS) : il **décide et orchestre**, d'autres systèmes **exécutent**. Il ne gère pas non plus le parcours d'achat du client sur le site : il lui communique la disponibilité du stock.

**Visuel suggéré :** Schéma "commande entrante → OMS (orchestration) → sources d'exécution (entrepôt, magasin, fournisseur)" + frise des 6 phases du cycle de vie en dessous.

**Note formateur :** Insister sur le mot "orchestration" : c'est la notion clé qui différencie l'OMS des systèmes d'exécution.

---

### Écran 4 — L'OMS dans le système d'information : 3 couches, 3 échelles de temps
**Contenu clé :**
- Les systèmes ne travaillent pas à la même cadence. Trois couches :
  - **Couche stratégique — ERP** (et gestion des fournisseurs rattachée) : vue financière et légale de l'entreprise, référentiels (articles, clients), mise à jour mensuelle à annuelle.
  - **Couche opérationnelle — OMS (et APS)** : données en temps réel ou, au pire, à la semaine. L'OMS harmonise les niveaux de stock entre les différents lieux et alloue le stock à certaines entités plutôt qu'à d'autres ; l'APS optimise la consommation des produits et la vision de stock au jour le jour (voir module dédié).
  - **Couche d'exécution — WMS (et WCS)** : réagit en temps réel aux demandes de préparation formulées par l'OMS. Le WMS indique précisément où se trouve le stock et en quelle quantité ; le WCS suit la mécanisation et les flux de préparation (voir modules dédiés).
- Le **TMS** prend le relais pour organiser le transport (choix du transporteur, tournées, suivi).
- Conséquence directe sur les projets IT (lien module 1) : les trois couches n'ont pas les mêmes ressources mobilisées ni la même flexibilité pour déployer de nouvelles évolutions.
- Message clé : l'OMS est un système de **décision et de coordination**, pas d'**exécution physique**. Un RPTL doit savoir reconnaître, face à un incident, si le problème vient de la décision (OMS) ou de l'exécution (WMS/TMS).

**Visuel suggéré :** Schéma en 3 bandes horizontales (stratégique / opérationnel / exécution) avec, pour chacune, les systèmes et une horloge indiquant la cadence de mise à jour.

**[Exemple réel à intégrer]** — un cas où une anomalie a été, à tort, imputée au WMS alors qu'elle venait d'une mauvaise orchestration OMS (ou l'inverse).

---

### Écran 5 — Commande et fulfilment : deux reflets d'une même demande
**Contenu clé :**
- **La commande** = le reflet de **ce que le client a payé et souhaite recevoir** : articles, quantités, mode de livraison ou de retrait choisi.
- **Le fulfilment** = le reflet de **la préparation** et de **la façon dont la commande sera traitée** : il est créé dans l'OMS après la création de la commande. Règle simple : un fulfilment = 1 à N articles, **un point d'origine, un point de destination**.
- Une commande peut donc donner naissance à **un ou plusieurs fulfilments** (par exemple si elle est répartie sur deux sources).
- Scénarios de fulfilment :
  - Expédition depuis un entrepôt vers le client.
  - Retrait en magasin (délai de mise à disposition souvent plus court que la livraison à domicile ; levier de trafic en magasin).
  - Livraison depuis un entrepôt vers un magasin pour retrait.
  - Expédition directe depuis un magasin via un transporteur.
- Suivi : la finesse des statuts remontés par le WMS à l'OMS varie selon les organisations (suivi détaillé début/fin de préparation, emballage, contrôle qualité, ou seulement confirmation d'affectation et d'expédition) — à connaître pour savoir ce que l'on peut réellement suivre.
- Message clé pour le RPTL : côté site, ce qui arrive est un **fulfilment** à préparer ; la commande, elle, appartient au client et à la promesse faite.

**Visuel suggéré :** Schéma à deux colonnes : « Commande (ce que le client veut) » → « Fulfilment(s) (comment on le prépare) », avec un exemple de commande qui se divise en 2 fulfilments.

---

### Écran 6 — Le stock : ATS (disponible à la vente) vs ATP (promis pour une date)
**Contenu clé :**
- Point de départ : chaque lieu de stock (entrepôt, magasin, fournisseur) remonte son stock à l'OMS, selon le cas à chaque mouvement, chaque heure ou chaque jour. Les données viennent du système de chaque lieu (caisse magasin, WMS entrepôt, ERP pour la vue consolidée).
- Toutes les pièces physiques ne sont pas vendables : pièces déjà réservées par des commandes, pièces bloquées (abîmées, en contrôle, en attente de dédouanement), pièces dédiées aux présentoirs et vitrines, écarts d'inventaire (démarque inconnue, qui peut peser plusieurs points du stock en retail), erreurs à la réception.
- **ATS (Available to Sell) = stock disponible à la vente** :
  1. stock physique compté sur site,
  2. moins les réservations en cours,
  3. moins les protections de stock (stock tampon / buffers, par exemple garder les dernières pièces, ou réserver du stock par canal).
  Résultat : la quantité que l'on accepte d'exposer à un canal de vente.
- **ATP (Available to Promise) = stock promis pour une date** : on part de l'ATS et on ajoute le stock futur (en transit, en approvisionnement) et les délais (approvisionnement, préparation, expédition, livraison). Cela permet de **promettre une livraison à une date** même si l'ATS est à zéro aujourd'hui.
- Message clé : l'ATS répond à « combien puis-je vendre **maintenant** ? », l'ATP à « **quand** puis-je livrer ? ». L'ATP engage l'entreprise auprès du client.

**Visuel suggéré :** Schéma en entonnoir : stock physique → − réservations → − protections = ATS ; puis + stock futur + délais = ATP, avec une ligne de temps.

**Note formateur :** Dans les termes, ATS = stock disponible à la vente (traduction anglaise) — ne pas laisser croire à deux notions différentes.

---

### Écran 7 — Sourcing, allocation et promesse client
**Contenu clé :**
- **La promesse client** = l'engagement de mise à disposition de la marchandise **avec un délai de livraison**. Elle s'ajoute à la faisabilité stock : une fois le stock identifié, on calcule le délai complet.
- **Allocation** : à réception d'une commande, l'OMS identifie les lieux capables de la servir.
  - Exclusion naturelle des lieux au stock insuffisant.
  - Si aucun lieu seul ne suffit : possibilité de **split** (par exemple 2+2 ou 3+1 articles).
  - En cas d'anomalie : la commande est mise à l'écart pour validation manuelle.
  - Règles de priorité entre lieux, par exemple : entrepôt prioritaire sur les magasins (préserve le stock magasin pour les clients physiques), ou plafond de préparations par jour pour un lieu.
- **Critères de sélection de la source** (cumulés en un score) : routes logistiques disponibles vers la destination, options de livraison proposées (express, standard), délai (horaires d'ouverture, capacité de préparation, statut du lieu), coût de livraison.
- **Deux logiques opposées selon le secteur** :
  - Produits de luxe : priorité à l'expérience et à la rapidité, le coût logistique est absorbé dans le prix ; chaque client insatisfait pèse beaucoup.
  - Grande distribution : priorité au coût logistique, le délai peut être plus long ; le coût d'insatisfaction reste inférieur au surcoût de livraison.
- Exemple pédagogique (anonymisé) : sur un marché étranger où l'expédition depuis le pays d'origine imposerait un transit long et un délai douanier incertain, l'OMS est paramétré pour privilégier l'expédition **depuis les magasins locaux** (produit déjà mis à la consommation du marché, livraison domestique plus rapide et moins chère).
- Rôle du RPTL : **détenteur de la connaissance d'usage**, il remonte les contraintes réelles de production (capacité de préparation, horaires de coupure, contraintes de transport) et **fournit les règles d'allocation qui fonctionnent** (priorités, plafonds de préparation) ; il les **teste après le paramétrage** et les **optimise** à l'usage.

**Visuel suggéré :** Schéma « commande → liste des sources candidates → score (délai / coût / stock / route) → source retenue », avec deux profils de pondération (luxe vs grande distribution).

**Note formateur :** Le plus difficile en projet est de transformer ces logiques en règles de gestion, priorités et critères d'acceptation — travail à mener avec le métier, pas avec une vision générique.

---

### Écran 8 — Le fallback : quand la source prioritaire n'est pas disponible
**Contenu clé :**
- Définition : le **fallback** est la gestion des priorités de sourcing. Il répond à la question : *si la source prioritaire n'est pas disponible, que se passe-t-il, et quelles règles de gestion permettent de prendre la décision ?*
- Exemple : entrepôt A prioritaire, entrepôt B en repli (fallback), ordre défini par le score de sourcing ; un magasin peut être le repli suivant.
- Les causes de repli : erreur de préparation, anomalie de stock constatée, lieu fermé ou saturé.
- Principe clé : **les critères de fallback se définissent en amont dans l'OMS, pas au moment de l'incident.** Analogie : le deuxième verre posé sous le premier.
- Le fallback peut inclure un **délai de sécurité** dans la promesse (par exemple, délai supplémentaire si le repli est plus loin).
- Rôle du RPTL : savoir quelles sources sont en repli de son site et ce que cela change pour sa charge ; **fournir les règles de repli** réalistes (délais de sécurité, capacités) lors du projet, les **tester après l'installation** et les **ajuster** à l'usage.
- Pont vers l'écran suivant : le fallback traite ce qui est **prévu** ; ce qui ne l'est pas relève de la gestion des exceptions.

**Visuel suggéré :** Arbre de repli à 3 niveaux (source n°1 → source n°2 → source n°3) avec les conditions de bascule.

---

### Écran 9 — Zoom sur l'omnicanalité
**Contenu clé :**
- Définition : l'omnicanalité consiste à permettre au client d'acheter et de se faire livrer/retirer sa commande indifféremment de plusieurs canaux (site web, application, magasin), avec une expérience cohérente.
- Scénarios logistiques que l'OMS doit orchestrer (ce sont les scénarios de fulfilment vus à l'écran 5) :
  - Commande passée en ligne, retirée en point de vente.
  - Commande passée en ligne, préparée et expédiée depuis un point de vente plutôt que l'entrepôt central (pour réduire le délai).
  - Commande passée en magasin mais article non disponible sur place : expédiée depuis un autre site.
- Message clé pour le RPTL : chacun de ces scénarios change la source de préparation — et donc la charge et l'organisation du site qu'il pilote.

**Visuel suggéré :** Schéma avec 1 client au centre et plusieurs flèches vers différentes sources de préparation possibles, l'OMS représenté comme l'aiguilleur central.

**[Exemple réel à intégrer]** — un cas vécu où un site a dû absorber une charge de préparation inattendue liée à un scénario omnicanal (ex : retrait magasin, expédition depuis magasin).

---

### Écran 10 — La gestion des exceptions de processus
**Contenu clé :**
- Le **happy path** est le déroulé normal d'une commande, sans incident. Une **exception** est un événement ou une situation qui sort de ce déroulé : erreur de stock constatée, anomalie remontée en cours de préparation ou de sourcing, source indisponible sans repli possible.
- Question centrale : **quelles règles suivre pour débloquer la commande** une fois l'exception identifiée ?
- Deux configurations d'OMS :
  - OMS rigide : annulation directe de la commande, sans contact avec le client.
  - OMS avec capacités de workflow : analyse puis prise de décision selon des règles métier.
- Principes :
  - Objectif prioritaire : **maintenir la préparation** et préserver l'image de la marque.
  - **L'annulation est le dernier recours**, jamais automatique si la promesse client est impactée.
- Arbre de décision à configurer selon les règles métier :
  1. Où se situe le problème ? (sourcing, préparation, stock)
  2. Existe-t-il une solution **sans dégrader la promesse** ?
  3. Sinon : **contact client obligatoire** avant toute action.
- Automatique ou manuel :
  - **Automatisable** si la promesse client n'est pas impactée (exemple : repli automatique de l'entrepôt A vers l'entrepôt B, à niveau de service identique).
  - **Manuel** si la promesse est impactée ou si aucune solution n'existe : l'OMS notifie le service client (brique applicative distincte, hors OMS), qui choisit : nouveau sourcing, split de commande, livraison partielle ou annulation.
  - Toute annulation est **tracée** avec l'utilisateur ayant déclenché l'action après contact client.
- Différence avec le fallback : le fallback est une règle **prévue** qui s'applique seule ; l'exception est ce qui **n'est pas résolu par les règles prévues**.
- À formaliser en projet : les critères d'automatisation vs escalade manuelle, par type d'anomalie.
- Rôle du RPTL : **détenteur de la connaissance d'usage**, il connaît les anomalies qui reviennent et les solutions qui marchent ; il **fournit les règles de déblocage** (critères d'automatisation, cas d'escalade, ton du message client), les **teste après l'installation** sur des cas réels et les **optimise** en exploitation normale.

**Visuel suggéré :** Arbre de décision (3 questions) avec deux sorties : « traitement automatique » et « escalade service client », et une trace d'audit en bas.

**[Exemple réel à intégrer]** — un cas d'exception traité par la bonne règle (ou mal traité), anonymisé. Piste issue du support : un colis lourd livré plusieurs fois au même client, révélant l'absence de règle de management des re-livraisons.

---

### Écran 11 — Les limites de l'OMS
**Contenu clé :**
- L'OMS **décide** où et comment honorer une commande, mais il ne garantit pas que la décision soit réalisable si les données qu'il utilise sont fausses ou en retard (stock remonté avec latence, capacité de préparation non mise à jour).
- L'OMS ne gère pas : la préparation physique (WMS), le transport (TMS), les référentiels globaux (ERP), le détail du conditionnement (carton, palette, zone de picking — géré côté entrepôt ou caisse magasin), ni le service client (brique distincte à laquelle il pousse les alertes).
- Risques fréquents : ATS surévalué (stock « disponible » mais en réalité bloqué, abîmé ou mal compté) ; règles d'allocation non ajustées à une contrainte terrain réelle ; fallback mal défini.
- Message clé : un OMS n'est fiable que si les données et contraintes terrain qu'il utilise sont fiables et à jour — responsabilité partagée avec le métier.

**Visuel suggéré :** Schéma "OMS = cerveau, pas les yeux ni les mains" — illustrer la dépendance à des données fiables remontées du terrain.

---

### Écran 12 — Vérifier avant d'agir — appliqué à la gestion de commandes
**Contenu clé :**
- Rappel du réflexe transversal introduit au module 1.
- Application à l'OMS : avant de signaler une anomalie comme "bug système", vérifier d'abord si les données terrain remontées (stock réel, capacité de préparation, horaires de coupure) sont correctes et à jour, et si une règle de fallback ou d'exception existe déjà pour ce cas.
- Court exercice : présenter une commande bloquée ou mal orientée par l'OMS, et demander à l'apprenant d'identifier la ou les causes probables côté données terrain, puis la règle d'exception applicable, avant d'escalader vers l'IT.

**Visuel suggéré :** Mini-cas interactif (QCM court ou glisser-déposer), distinct du quiz final.

**[Exemple réel à intégrer]** — un cas vécu où une vérification terrain simple a permis d'éviter une escalade inutile vers l'IT.

---

### Écran 13 — Panorama du marché des OMS
**Contenu clé :**
- Expliquer le principe d'un « quadrant d'analystes » (Gartner Magic Quadrant, Forrester Wave...) : positionner les éditeurs d'un marché sur deux axes pour donner une photographie à un instant donné. Ce n'est pas un classement de qualité absolu et il évolue chaque année.
- ⚠️ Point vérifié : Gartner ne publie **pas** de Magic Quadrant pour l'OMS (« Distributed Order Management », DOM) ; il le couvre par un *Market Guide* et par sa rubrique Peer Insights. **La liste des éditeurs est reprise de cette rubrique, sans utiliser ses notes ni ses avis clients**, auxquels s'ajoutent des éditeurs identifiés par ailleurs.
- Représentation retenue : une **carte du marché par famille de solutions** (et non un classement) :
  - **Spécialistes de la gestion de commandes** : Manhattan Associates (*Active Order Management*), IBM (*Sterling Order Management*), Fluent Commerce, Kibo, OneStock, Proximis (*Planet Distributed Order Management*), Blue Yonder (*Order Management & Commerce*), Deck Commerce, fulfillmenttools, HotWax Commerce, **KBRW** (éditeur français d'OMS, fondé en 2009).
  - **Suites ERP et plateformes de commerce proposant un module de gestion de commandes** : SAP (*Order Management Services*), **Salesforce (module *Salesforce Order Management*, « SOM »)**, Microsoft (*Dynamics 365 Commerce*), Adobe (*Adobe Commerce*), Shopify, Shopgate (*Omnichannel Suite*).
  - **Outils généralistes de gestion de stock/ERP** référencés mais plus éloignés du cœur de cible : Zoho Inventory, Base.com, Vinculum (*Vin eRetail*).
  - Hors périmètre logistique pour ce module : Infios OMS (décrit par Gartner pour les services financiers) — à retirer de l'affichage.
- Seul positionnement d'analyste repris : le **Forrester Wave™ Order Management Systems (Q1 2025)** reconnaît comme Leaders Manhattan Associates, Kibo et Fluent Commerce (annonces des éditeurs ; détail complet dans le rapport payant). ⚠️ À confirmer avant publication.
- Message clé pour le RPTL : peu importe l'éditeur utilisé sur son site, le rôle et les enjeux de l'OMS restent les mêmes — c'est cette logique qu'il faut maîtriser, pas un outil en particulier. Ce panorama sert à donner un repère sur la diversité du marché, pas à recommander un choix.

**Visuel suggéré :** Carte à trois bandes (spécialistes / suites et plateformes / outils généralistes) avec les logos ou noms des éditeurs, les Leaders Forrester signalés par un repère, et la mention « Liste établie à partir de Gartner Peer Insights et de sources éditeurs, consultées le 20/10/2026 ».

**Sources à citer à l'écran (note formateur) :**
- Gartner Peer Insights — Distributed Order Management Systems (liste des éditeurs uniquement) : https://www.gartner.com/reviews/market/distributed-order-management-systems
- Gartner Market Guide for Distributed Order Management Systems : https://www.gartner.com/doc/5085931
- Forrester Wave™: Order Management Systems, Q1 2025 (rapport payant)

**Note formateur :** Liste non exhaustive : seuls les 20 premiers produits de la rubrique Gartner (sur 71) ont été relevés, plus KBRW ajouté à ta demande. Actualiser avant chaque publication. Piste pour un vrai quadrant : définir deux axes factuels sourcés (ex. spécialisation de l'offre / taille de client ciblée) — à décider.

---

### Écran 14 — Quiz de validation (10 questions — 80% requis pour valider)
**Exemples de questions (à compléter jusqu'à 10) :**
1. (QCM) Quel est le rôle principal d'un OMS ?
2. (QCM) Qu'est-ce que l'omnicanalité ?
3. (Association) Associer chaque système (ERP / OMS / WMS / TMS) à son rôle principal.
4. (QCM) Quelle phrase décrit le mieux la différence entre commande et fulfilment ?
5. (QCM) Quelle est la différence entre ATS et ATP ?
6. (Mise en situation) L'ATS d'un article est à zéro, mais une réception est prévue sous 3 jours : peut-on promettre une livraison au client ? Sur quelle notion s'appuie-t-on ?
7. (Mise en situation) La source prioritaire d'une commande n'est pas disponible : quelle règle s'applique, et quand a-t-elle été définie ?
8. (Vrai/Faux) Face à une anomalie de stock, l'annulation de la commande est le premier réflexe de l'OMS.
9. (Mise en situation) Une exception impacte la promesse client et aucune solution automatique n'existe : qui agit, et que doit-on garantir sur la trace de l'action ?
10. (Vrai/Faux) Le rôle de l'OMS reste le même quel que soit l'éditeur de la solution utilisée.

**Note formateur :** Feedback explicatif après chaque réponse. Seuil de réussite : 8/10 bonnes réponses minimum.

---

### Écran 15 — Synthèse et points clés
**Contenu clé (rappel en 6 puces) :**
- L'OMS centralise et orchestre les commandes entre canaux de vente et sources d'exécution — il décide, il n'exécute pas.
- Commande = ce que le client a payé et veut recevoir ; fulfilment = comment on la prépare et la traite (un point d'origine, un point de destination).
- ATS = stock disponible à la vente maintenant ; ATP = stock promis pour une date. La promesse client combine stock, délai et coût.
- Le fallback fixe en amont les priorités de sourcing ; la gestion des exceptions fixe les règles pour débloquer ce qui sort du happy path — l'annulation reste le dernier recours.
- L'omnicanalité multiplie les scénarios de préparation : un RPTL doit en comprendre l'impact sur son activité.
- L'OMS n'est fiable que si les données terrain qu'il utilise le sont — "vérifier avant d'agir" s'applique pleinement ici.

**Call-to-action :** Transition vers le prochain module système. "Après l'orchestration des commandes, découvrons comment elles sont exécutées en entrepôt avec le WMS."

**Visuel suggéré :** Carte mentale récapitulative, bouton "Module suivant", lien de téléchargement du glossaire global.

---

## Glossaire
Les termes de ce module ont été ajoutés au [glossaire global](00_Glossaire_global.md) de la formation.

## Points ouverts / à valider avec toi
1. **Durée** : le module est passé de 20–30 min à 35–45 min avec l'intégration des notions du support existant. À découper en 2 séquences (ex : « Commande, stock, promesse » / « Fallback, exceptions, omnicanalité, marché ») ou à alléger ?
2. Les **[Exemple réel à intégrer]** (écrans 1, 4, 9, 10, 12) — cas concrets anonymisés à fournir, sans nom de client ni de projet. L'exemple pédagogique de l'écran 7 (marché étranger / expédition depuis les magasins locaux) est une version anonymisée d'un cas du support : à valider.
3. Les 10 questions du quiz sont à finaliser (réponses/options complètes + feedbacks).
4. **Écran 13 (panorama marché)** : notes et avis Gartner non utilisés. Plus aucun quadrant chiffré : carte par famille + Leaders Forrester (à confirmer). Faut-il définir deux axes factuels pour un vrai quadrant ? Quels éditeurs afficher (retirer les outils généralistes ?) ? Liste à compléter (51 produits non relevés).
