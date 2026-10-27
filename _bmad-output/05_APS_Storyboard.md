# Module e-learning — APS (Advanced Planning System)
**Formation :** Responsable de Production Transport et Logistique (RPTL) — Bac+3
**Sous-titre du module :** Planifier et prévoir : prévision de la demande, approvisionnements, répartition des stocks, enjeux, limites, simulation et marché
**Durée cible :** 35–45 min
**Public :** Apprenants RPTL ou métiers proches (responsable entrepôt, affréteur, approvisionneur, coordinateur transport/logistique) — non-IT
**Statut :** 🔴 À créer — v1 storyboard **reconstruit sans support de cours** (le support d'origine étant inutilisable). Base : connaissances générales de la planification supply chain, éléments des supports OMS déjà intégrés (modèle à 3 couches, rôle de l'APS, gestion fournisseurs) et recherche sur le marché. **À faire relire et corriger par un expert planification avant production.**

**Positionnement dans le curriculum :** Quatrième module « système » après l'OMS (qui décide), le WMS (qui prépare) et le TMS (qui transporte). L'APS intervient **en amont** : il aide à décider *combien*, *où* et *quand* produire, acheter, stocker et répartir, avant que les commandes n'arrivent. Il ouvre naturellement vers l'ERP (qui exécute les commandes fournisseurs et porte les référentiels) et, plus tard, vers l'IA (prévision, simulation). Les exemples sont contextualisés métier transport/logistique, sans nom de client ni de projet ; seul l'écran « panorama du marché » cite des éditeurs (règle du projet, voir CLAUDE.md).

---

## Objectifs pédagogiques
À l'issue du module, l'apprenant sera capable de :
1. Définir ce qu'est un APS et la question à laquelle il répond (combien, où, quand), et le distinguer des systèmes d'exécution (OMS, WMS, TMS).
2. Situer l'APS dans le SI selon l'échelle de temps (3 couches) et décrire les données qu'il consomme et les recommandations qu'il produit.
3. Distinguer les horizons de planification (stratégique, tactique, opérationnel) et le rôle du S&OP.
4. Expliquer comment se construit une prévision de la demande et pourquoi elle reste une hypothèse.
5. Expliquer la planification des approvisionnements et de la répartition des stocks, avec les paramètres clés (délais, stock de sécurité, quantités minimales, coûts).
6. Relier la planification à l'activité du RPTL : charges d'entrepôt et de transport, contraintes terrain à remonter, indicateurs de suivi.
7. Identifier les limites d'un APS et réappliquer le réflexe « vérifier avant d'agir ».
8. Comprendre le rôle des scénarios et de l'IA en planification, et avoir une vue du marché des éditeurs.

---

## Plan du module (13 écrans + quiz + synthèse)

| # | Écran | Durée estimée |
|---|-------|----------------|
| 1 | Accroche / mise en situation | 1-2 min |
| 2 | Objectifs du module | 1 min |
| 3 | Qu'est-ce qu'un APS ? | 3 min |
| 4 | L'APS dans le système d'information : place et échelle de temps | 3 min |
| 5 | Les horizons de planification et le S&OP | 3 min |
| 6 | La prévision de la demande | 4 min |
| 7 | Planifier les approvisionnements et dimensionner les stocks | 4 min |
| 8 | Répartir et repositionner les stocks | 3 min |
| 9 | Du plan à l'exécution : la boucle complète | 3 min |
| 10 | Les enjeux pour le RPTL et les indicateurs | 3 min |
| 11 | Les limites de l'APS — vérifier avant d'agir | 3 min |
| 12 | Ouverture : scénarios, simulation et IA | 3 min |
| 13 | Panorama du marché des APS | 3 min |
| 14 | Quiz de validation (10 questions, 80% requis) | 5 min |
| 15 | Synthèse et points clés à retenir | 1-2 min |

---

### Écran 1 — Accroche / mise en situation
**Contenu clé :**
- Mise en situation narrative : "À l'approche d'une grande période promotionnelle, votre entrepôt est plein de produits qui se vendent peu… et vide de ceux qui partent en deux jours. Les camions arrivent tous le même jour, les quais sont saturés, et les magasins réclament du réassort. Qui aurait dû anticiper ça, et avec quelles informations ?"
- Teaser : ce module présente le système qui anticipe la demande et organise stocks et approvisionnements **avant** que les commandes arrivent — l'APS.

**Visuel suggéré :** Courbe de ventes avec un pic saisonnier, des camions qui arrivent trop tôt ou trop tard, puis la même courbe avec des flux lissés.

**Note formateur :** Ancrer l'intérêt — un RPTL subit les décisions de planification (pics de charge, ruptures) : mieux les comprendre permet de mieux les anticiper et de mieux dialoguer avec les planificateurs.

**[Exemple réel à intégrer]** — un cas vécu de pic de charge ou de rupture lié à un défaut d'anticipation (anonymisé).

---

### Écran 2 — Objectifs du module
**Contenu clé :** Reprendre les objectifs pédagogiques ci-dessus sous forme de bullet points visuels (icônes).

**Visuel suggéré :** 8 pictos (définition / place dans le SI / horizons / prévision / approvisionnement-répartition / RPTL et indicateurs / limites / scénarios-IA-marché).

---

### Écran 3 — Qu'est-ce qu'un APS ?
**Contenu clé :**
- Définition : un APS (Advanced Planning System, ou *Supply Chain Planning*) est un système qui **prévoit la demande et optimise la planification** des approvisionnements, de la production éventuelle et de la répartition des stocks, en tenant compte des contraintes (capacités, délais, coûts).
- Il répond à trois questions : **Combien** (de chaque produit) ? **Où** (dans quel site, entrepôt, magasin) ? **Quand** (à quelle date) ?
- Il **recommande** et **simule** ; il n'**exécute** pas. L'exécution revient à d'autres systèmes : commandes fournisseurs (ERP), réception et préparation (WMS), orchestration des commandes clients (OMS), transport (TMS).
- Rappel des modules précédents : OMS, WMS et TMS traitent **les commandes présentes** ; l'APS prépare **les stocks futurs** pour que ces commandes puissent être servies.

**Visuel suggéré :** Frise « passé (historique) → présent (commandes) → futur (prévisions) » avec l'APS positionné sur le futur, et trois bulles combien / où / quand.

**Note formateur :** Insister sur « recommande » : c'est un outil d'aide à la décision, validé par des planificateurs.

---

### Écran 4 — L'APS dans le système d'information : place et échelle de temps
**Contenu clé :**
- Rappel du modèle à 3 couches (module OMS) :
  - **Stratégique** : ERP (référentiels, finance, commandes fournisseurs), cadence mensuelle à annuelle.
  - **Opérationnel** : **OMS et APS**, données en temps réel ou, au pire, à la semaine. L'APS optimise la consommation des produits et la vision des stocks au jour le jour.
  - **Exécution** : WMS et WCS, temps réel.
- Ce que l'APS **consomme** : historique des ventes, stocks actuels (par site), commandes en cours et attendues, calendrier commercial (promotions, saisons, événements), paramètres fournisseurs (délais, quantités minimales, coûts), contraintes logistiques (capacités).
- Ce que l'APS **produit** : prévisions de demande, propositions de commandes fournisseurs, plans de réapprovisionnement et de répartition entre sites, alertes (risque de rupture ou de surstock).
- Il est en lien avec l'**ERP** (commandes fournisseurs, référentiels) et la gestion de la relation fournisseurs (SRM, rattachée à l'ERP et alimentée par l'APS) ; ses recommandations déclenchent des commandes et des transferts qui seront exécutés par le WMS et le TMS.

**Visuel suggéré :** Schéma en 3 bandes (stratégique / opérationnel / exécution) avec l'APS dans la bande du milieu, flèches « données » vers l'APS et « recommandations » vers l'ERP, le WMS et le TMS.

---

### Écran 5 — Les horizons de planification et le S&OP
**Contenu clé :**
- On ne planifie pas de la même façon à trois horizons :
  - **Stratégique** (plusieurs mois à plusieurs années) : réseau de sites, capacités, grands contrats.
  - **Tactique** (quelques semaines à quelques mois) : plans d'approvisionnement, de production, de volumes par site.
  - **Opérationnel** (jours, semaines) : réapprovisionnement quotidien, répartition fine des stocks.
- Le **S&OP** (*Sales & Operations Planning*) est le rendez-vous régulier, souvent mensuel, où les équipes commerciales, finances, achats et opérations (dont la logistique) s'accordent sur **un plan unique** : ce qu'on prévoit de vendre et ce qu'on s'engage à approvisionner et livrer.
- Plus l'horizon est court, plus la décision est détaillée et la donnée fraîche ; plus il est long, plus c'est agrégé et incertain.
- Rôle du RPTL : **détenteur de la connaissance d'usage**, il apporte au S&OP les **contraintes logistiques** (capacités de quais, de préparation, de transport, saisonnalité de la main-d'œuvre), qui sont des règles à intégrer au plan.

**Visuel suggéré :** Pyramide ou tunnel de 3 horizons (long / moyen / court) avec, au centre, le cycle mensuel du S&OP.

---

### Écran 6 — La prévision de la demande
**Contenu clé :**
- Objectif : estimer ce qui sera demandé, par produit, par site et par période.
- Sources : **historique des ventes** (tendance, **saisonnalité**), **événements** (promotions, lancements, jours fériés, météo), informations commerciales (nouveaux produits, fin de vie), parfois des signaux externes.
- Une prévision se **mesure** : l'**erreur de prévision** compare le prévu au réel. Elle n'est jamais nulle ; on cherche à la réduire et à la rendre prévisible.
- Une prévision est un **consensus** : le système propose, les équipes (commercial, planification) ajustent selon ce qu'elles savent.
- Précautions : l'historique des ventes n'est pas la demande réelle quand il y a eu des **ruptures** (on ne vend pas ce qu'on n'a pas) ; un nouveau produit n'a pas d'historique ; une promotion fausse la tendance.
- Message clé : une prévision est une **hypothèse**, pas une vérité. Sa valeur est de guider la décision, d'être comparée au réel et d'être corrigée.

**Visuel suggéré :** Graphique courbe historique + zone de prévision avec intervalle d'incertitude, et un encart « prévu vs réel ».

**[Exemple réel à intégrer]** — un cas où une promotion ou un événement a faussé la prévision (anonymisé).

---

### Écran 7 — Planifier les approvisionnements et dimensionner les stocks
**Contenu clé :**
- À partir de la prévision et du stock existant, l'APS calcule les **besoins nets** : combien commander, à quelle date, pour quel site.
- Paramètres clés :
  - **Délai d'approvisionnement** (*lead time*) : temps entre la commande et la disponibilité en stock.
  - **Stock de sécurité** : stock tampon pour absorber les aléas de demande et de délai.
  - **Quantité minimale / conditionnement minimum** : on ne peut pas toujours commander à l'unité.
  - **Coût de passation** d'une commande et coût de stockage.
- Arbitrage **coût / délai** : par exemple, un fournisseur lointain peut être moins cher mais livrer en une quarantaine de jours, tandis qu'un fournisseur de proximité livre en deux jours à un coût supérieur ; l'APS compare selon la demande prévue et le risque de rupture. *(Exemple chiffré illustratif.)*
- Ces données fournisseurs relèvent de la **relation fournisseurs** (SRM, rattachée à l'ERP) : contrats, conditions, coûts.
- Résultat : des **propositions de commandes fournisseurs** validées par les acheteurs/planificateurs, puis exécutées dans l'ERP.
- Rôle du RPTL : un plan d'approvisionnement crée des **arrivées** à réceptionner (quais, rendez-vous) : fort de sa connaissance d'usage, il **indique les capacités et créneaux réalistes** pour lisser la charge et **vérifie après mise en place** que le plan est tenable.

**Visuel suggéré :** Schéma « besoin net = prévision + stock de sécurité − stock disponible − réceptions attendues » et comparaison de deux fournisseurs (coût / délai).

---

### Écran 8 — Répartir et repositionner les stocks
**Contenu clé :**
- Une fois le stock disponible, il faut le **répartir** entre sites (entrepôts, magasins) selon la demande prévue par site, et le **repositionner** si la demande évolue.
- **Réapprovisionnement** (réassort) : alimenter un site (magasin, entrepôt secondaire) à partir d'un site central selon des règles (seuils, couverture, prévision).
- **Rééquilibrage de stock** : déplacer du stock d'un site en surstock vers un site en risque de rupture ; ces déplacements génèrent des **ordres de transfert** exécutés par le WMS puis le TMS.
- Lien OMS : le stock réparti et protégé par site est ce que l'OMS verra comme stock disponible (ATS) ; une bonne répartition **réduit** les expéditions longues et les ruptures locales.
- Lien exécution : un transfert est une « commande interne » qui passe par le WMS (préparation) et le TMS (transport), avec les mêmes contraintes que toute expédition.
- Rôle du RPTL : estimer l'**impact opérationnel** d'un plan de répartition (volumes de préparation, tournées de transport) et remonter les contraintes avant exécution ; après mise en œuvre, **confronter le plan à la réalité** et signaler les écarts.

**Visuel suggéré :** Carte de réseau (entrepôt central, entrepôts régionaux, magasins) avec flèches de réapprovisionnement et de rééquilibrage, couleurs de surstock / rupture.

---

### Écran 9 — Du plan à l'exécution : la boucle complète
**Contenu clé :**
- Fil rouge d'un produit (exemple pédagogique) :
  1. **Prévision** de la demande par site (APS).
  2. **Proposition de commandes fournisseurs** validée, envoyée via l'ERP.
  3. **Réception** en entrepôt (WMS) : le stock devient disponible.
  4. **Répartition** vers les magasins ou entrepôts régionaux (transferts : WMS + TMS).
  5. **Vente** et orchestration des commandes clients (OMS), **préparation** (WMS), **transport** (TMS).
  6. **Mesure des écarts** (prévu / réel) : retour dans l'APS pour corriger la prochaine prévision.
- Message clé : c'est une **boucle**, pas une ligne droite. L'APS ne vaut que si les écarts remontent et corrigent le plan.
- Message clé 2 : à chaque jonction, une **donnée** passe d'un système à un autre ; un retard ou une erreur à un endroit se répercute plus loin (rappel : « vérifier avant d'agir »).

**Visuel suggéré :** Boucle circulaire à 6 étapes avec les systèmes (APS, ERP, WMS, TMS, OMS) placés sur le cercle et une flèche « écarts » qui revient vers l'APS.

---

### Écran 10 — Les enjeux pour le RPTL et les indicateurs
**Contenu clé :**
- Enjeux principaux : **disponibilité produit** (éviter les ruptures), **maîtrise du stock** (éviter le surstock et l'obsolescence), **coûts** (stockage, transport urgent, immobilisation), **lissage de la charge** de l'entrepôt et du transport.
- Indicateurs courants :
  - **Taux de service** : part des demandes servies à temps et complètes.
  - **Taux de rupture** et **surstock**.
  - **Rotation des stocks** et **couverture de stock** (nombre de jours de vente que le stock permet de couvrir).
  - **Erreur de prévision** (écart entre prévu et réel).
- Rôle du RPTL dans la boucle de planification : **détenteur de la connaissance d'usage**, il fournit les **capacités réelles** (quais, préparation, transport, horaires), alerte sur les **pics** à venir et signale les **écarts** constatés (retards fournisseurs, produits non conformes) qui doivent être pris en compte. Dans un **projet APS**, il **fournit les règles et paramètres métier** (délais, capacités, contraintes) et **teste les recommandations après l'installation** avec des cas réels.
- Un lien avec les modules précédents : une rupture visible dans l'OMS ou un retard de transport peuvent avoir leur origine dans un plan d'approvisionnement ou de répartition.

**Visuel suggéré :** Tableau de bord 4 indicateurs (taux de service, rupture, couverture, erreur de prévision) et une flèche « capacités et alertes du terrain → APS ».

**[Exemple réel à intégrer]** — un cas où une contrainte terrain (capacité, délai) remontée à la planification a évité un pic de charge (anonymisé).

---

### Écran 11 — Les limites de l'APS — vérifier avant d'agir
**Contenu clé :**
- Un APS ne **devine** pas : il calcule à partir de données et d'hypothèses. S'ils sont faux, le plan l'est aussi (*garbage in, garbage out*).
- Il ne prévoit pas les **événements imprévus** (grève, intempérie, rupture fournisseur) ; il peut aider à simuler, pas à les empêcher.
- Il dépend de **paramètres à jour** : délais fournisseurs, stocks de sécurité, quantités minimales, calendrier promotionnel. Un paramètre périmé produit des recommandations absurdes.
- Il ne gère pas l'exécution physique (WMS, WCS), ni l'orchestration des commandes (OMS), ni le transport (TMS) : il les **alimente**.
- Les recommandations sont **validées** par des planificateurs ; ignorer systématiquement le système ou, à l'inverse, le suivre aveuglément sont deux risques.
- **Vérifier avant d'agir** : avant de contester une recommandation (« le système demande trop de stock ! »), contrôler : l'**historique utilisé** (ruptures passées ? promotion exceptionnelle ?), les **paramètres** (délai, stock de sécurité, unité de commande), le **calendrier** d'événements, la **donnée de stock** de départ.

**Visuel suggéré :** Check-list « avant de contester une recommandation » en 4 cases + mini-cas interactif (QCM court), distinct du quiz final.

**[Exemple réel à intégrer]** — un cas où la vérification d'un paramètre ou d'un historique a expliqué une recommandation étonnante (anonymisé).

---

### Écran 12 — Ouverture : scénarios, simulation et IA
**Contenu clé :**
- **Scénarios (« what-if »)** : l'APS permet de simuler une décision avant de la prendre (que se passe-t-il si une promotion double la demande ? si un fournisseur est en retard de deux semaines ? si un entrepôt ferme ?) et de comparer les effets sur le service, le coût et la charge.
- **IA et apprentissage automatique** : de plus en plus utilisés pour affiner les prévisions (prise en compte de nombreux facteurs), détecter des écarts, proposer des scénarios.
- Les principes de ce module restent **valables avec l'IA** : données fiables, paramètres à jour, validation humaine. Une simulation, même produite par l'IA, est une **hypothèse à vérifier**.
- Lien avec le curriculum : le réflexe « vérifier avant d'agir » (module 1) prend ici tout son sens face aux **simulations** ; le module « Overview IA » reprendra ces notions de façon plus stratégique.
- Transition : « L'APS planifie ; l'ERP porte les référentiels et exécute les commandes d'achat et de gestion — c'est la suite du parcours ».

**Visuel suggéré :** Trois scénarios en colonnes (base / pic de demande / retard fournisseur) avec leurs effets sur service, coût et charge, et une bulle « IA » comme aide à la simulation.

---

### Écran 13 — Panorama du marché des APS
**Contenu clé :**
- Rappel du principe d'un quadrant d'analystes (voir modules précédents).
- Pour la planification supply chain, **Gartner publie en 2026 deux Magic Quadrants distincts**, par type d'industrie : *Supply Chain Planning Solutions — Discrete Industries* et *— Process Industries* (édition inaugurale en 2026). Les marchés visés sont donc surtout ceux des industries de production ; pour la **distribution et le retail**, la couverture est à vérifier.
- Placements vérifiés (annoncés par les éditeurs concernés, à confirmer avec les rapports) :
  - **Leaders dans les deux rapports** : Kinaxis, Oracle, Aptean (Logility).
  - **Blue Yonder** : Leader (Discrete) et Visionnaire (Process).
  - **o9 Solutions** : Leader (Process) ; placement Discrete non confirmé.
- ⚠️ **À confirmer avant publication** : les placements des autres éditeurs (Challengers, Visionnaires, Acteurs de niche) ne sont accessibles que dans les rapports complets payants ; la position exacte sur les axes n'est pas reproductible ici.
- Message clé pour le RPTL : un APS se choisit selon le métier (distribution, production, secteur), la maturité des données et l'intégration à l'ERP et aux systèmes d'exécution ; la logique de ce module reste la même quel que soit l'éditeur.

**Visuel suggéré :** Deux quadrants 2x2 (Discrete / Process) ou un quadrant avec renvoi, éditeurs confirmés placés dans leur cadran (sans position fine), un encart « à compléter », et la mention « Source : Gartner, Magic Quadrant for Supply Chain Planning Solutions (Discrete et Process Industries), 2026 ; placements annoncés par les éditeurs ».

**Sources à citer à l'écran (note formateur) :**
- Gartner — Magic Quadrant for Supply Chain Planning Solutions: Discrete Industries et Process Industries (2026), rapports payants.
- Kinaxis : https://www.kinaxis.com/en/blog/kinaxis-leader-2026-gartner-magic-quadrant-supply-chain-planning-solutions-discrete-process-industries
- Oracle : https://blogs.oracle.com/scm/oracle-leader-gartner-supply-chain-planning-2026
- Aptean (Logility) : https://www.logility.com/press-release/aptean-logility-named-leader-2026-gartner-mq-scp/
- Blue Yonder : https://blueyonder.com/blog/2026/blue-yonder-named-a-leader-in-the-gartner-magic-quadrant-for-supply-chain-planning-solutions
- o9 Solutions : https://o9solutions.com/resources/gartner

**Note formateur :** À réactualiser à chaque nouvelle édition. Les placements viennent de communiqués d'éditeurs : les recouper avec les rapports avant mise en ligne.

---

### Écran 14 — Quiz de validation (10 questions — 80% requis pour valider)
**Exemples de questions (à compléter jusqu'à 10) :**
1. (QCM) Quelle question l'APS permet-il de traiter (combien, où, quand) ?
2. (Vrai/Faux) L'APS exécute les commandes fournisseurs et prépare les colis en entrepôt.
3. (Association) Associer chaque système (ERP / APS / OMS / WMS / TMS) à sa couche (stratégique / opérationnel / exécution).
4. (QCM) Que signifie S&OP et qui y participe ?
5. (QCM) Citer trois sources de données utilisées pour prévoir la demande.
6. (Mise en situation) Un produit a été en rupture pendant deux mois : pourquoi son historique de ventes risque-t-il de fausser la prévision ?
7. (QCM) Quel est l'effet d'un stock de sécurité ? Et d'un délai d'approvisionnement plus long ?
8. (Mise en situation) Un site est en surstock alors qu'un autre approche la rupture : quelle action de planification, et quels systèmes l'exécutent ?
9. (Vrai/Faux) Une prévision produite par un outil d'IA n'a pas besoin d'être vérifiée.
10. (Mise en situation) Le système recommande un volume de commande très supérieur à d'habitude : citer deux vérifications avant de la contester.

**Note formateur :** Feedback explicatif après chaque réponse. Seuil de réussite : 8/10 bonnes réponses minimum.

---

### Écran 15 — Synthèse et points clés
**Contenu clé (rappel en 6 puces) :**
- L'APS prévoit et planifie : combien, où, quand ; il recommande, il n'exécute pas.
- Il se situe dans la couche opérationnelle du SI, en amont de l'OMS, du WMS et du TMS, en lien avec l'ERP.
- Plusieurs horizons de planification ; le S&OP aligne commercial, finance, achats et opérations sur un plan unique.
- Une prévision est une hypothèse : elle se mesure (erreur de prévision) et se corrige.
- Approvisionnements et répartition reposent sur des paramètres (délais, stock de sécurité, quantités minimales, coûts) qu'il faut garder à jour.
- Scénarios et IA aident à décider, mais « vérifier avant d'agir » s'applique pleinement.

**Call-to-action :** Transition vers le module suivant. "L'APS planifie ; voyons maintenant l'ERP, qui porte les référentiels et exécute commandes et facturation."

**Visuel suggéré :** Carte mentale récapitulative, bouton "Module suivant", lien de téléchargement du glossaire global.

---

## Glossaire
Les termes de ce module ont été ajoutés au [glossaire global](00_Glossaire_global.md) de la formation.

## Points ouverts / à valider avec toi
1. **Aucun support source** : ce storyboard est construit sans le support d'origine (inutilisable). Tout le contenu métier est à faire relire par un expert planification, en particulier les écrans 5 à 8. Tu peux m'envoyer des extraits (même partiels, même en texte brut) du support corrompu, des résumés d'une ancienne présentation ou des notes pour que je vérifie et enrichisse.
2. **Périmètre** : j'ai traité l'APS seul (prévision, approvisionnements, répartition). L'ERP et le WCS auront leur propre module (le WCS est déjà ouvert dans le module WMS). Faut-il réintroduire dans l'APS la production (ordonnancement d'atelier) pour le public RPTL, ou rester sur la distribution ?
3. **Exemples réels** (écrans 1, 6, 10, 11) à fournir, anonymisés, sans nom de client ni de projet. Les chiffres de l'écran 7 sont illustratifs.
4. **Écran 13 (panorama)** : Magic Quadrants Gartner 2026 segmentés par industries de production (Discrete / Process) ; Leaders issus de communiqués d'éditeurs ; placements des autres à confirmer ; couverture du retail/distribution à vérifier (autres analystes ?).
5. **Écran 12** : l'ouverture vers l'IA anticipe le module « Overview IA » — à ajuster selon son contenu.
6. Les 10 questions du quiz sont à finaliser (réponses/options complètes + feedbacks).
