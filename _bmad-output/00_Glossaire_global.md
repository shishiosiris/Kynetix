# Glossaire global — Formation Responsable de Production Transport et Logistique (RPTL)

> Glossaire unique et cumulatif, téléchargeable par l'apprenant. Chaque module alimente cette liste avec ses propres termes. Classement alphabétique.

---

## Module : Comprendre les projets IT

| Terme | Définition |
|---|---|
| **Agile** | Approche de gestion de projet itérative et incrémentale : le projet avance par cycles courts ("sprints"), avec livraison régulière de valeur et ajustement continu selon les retours. |
| **Backlog** | Liste priorisée des besoins/fonctionnalités à réaliser dans un projet mené en Agile. |
| **Cadrage** | Phase initiale d'un projet IT où l'on définit le périmètre, les objectifs, les contraintes et les grandes lignes de la solution. |
| **Hypercare** | Période de support renforcé juste après la mise en production d'une solution, pour accompagner les utilisateurs et corriger rapidement les anomalies critiques. |
| **Key user / référent métier** | Collaborateur terrain qui représente les utilisateurs finaux, teste la solution et valide qu'elle correspond au besoin réel. |
| **MOA (Maîtrise d'Ouvrage)** | Entité qui porte le besoin métier dans un projet IT : définit le "quoi" et le "pourquoi" de la solution attendue. |
| **MOE (Maîtrise d'Œuvre)** | Entité qui conçoit et réalise la solution technique répondant au besoin exprimé par la MOA : définit le "comment". |
| **Recette / UAT (User Acceptance Testing)** | Phase de test où les utilisateurs métier vérifient que la solution livrée répond effectivement à leurs besoins, avant la mise en production. |
| **Sponsor** | Porteur du projet au niveau direction ; débloque le budget et tranche les arbitrages majeurs. |
| **Sprint** | Cycle de travail court et borné dans le temps (souvent 1 à 4 semaines) en Agile, à l'issue duquel un incrément de solution utilisable est livré. |
| **Waterfall (cascade)** | Approche de gestion de projet séquentielle : chaque grande phase du projet (recueil des besoins, conception, réalisation, tests, déploiement) est terminée avant de démarrer la suivante. |

---

## Module : OMS

| Terme | Définition |
|---|---|
| **Allocation (règle d'allocation)** | Règle appliquée par l'OMS pour choisir la source (entrepôt, magasin, fournisseur) qui va honorer une commande, selon des critères comme la proximité, le niveau de stock, le coût ou le délai. |
| **ATP (Available to Promise / stock promis pour une date)** | Stock sur lequel l'entreprise peut s'engager auprès du client pour une date de livraison donnée : on part de l'ATS, on ajoute le stock futur (en transit, en approvisionnement) et on tient compte des délais d'approvisionnement, de préparation, d'expédition et de livraison. Permet de promettre une livraison même si l'ATS est à zéro. |
| **ATS (Available to Sell / stock disponible à la vente)** | Quantité de stock réellement disponible à la vente (« disponibilité de stock »), obtenue en partant du stock physique compté, moins les réservations en cours, moins les protections de stock (blocages, pièces de présentoir, stock tampon). C'est la traduction anglaise de « stock disponible à la vente ». |
| **Buffer (stock tampon)** | Quantité de stock volontairement retirée de la vente (ex. dernières pièces, réserve par canal) pour se protéger des écarts d'inventaire ou préserver certains canaux. Vient en déduction de l'ATS. |
| **Commande** | Reflet de ce que le client a payé et souhaite recevoir : articles, quantités, mode de livraison ou de retrait. Une commande peut donner naissance à un ou plusieurs fulfilments. |
| **Démarque inconnue** | Écart entre le stock théorique et le stock réellement compté, dont la cause n'est pas identifiée (erreurs d'inventaire, casse, vol, erreurs de réception). |
| **ERP (Enterprise Resource Planning)** | Système de gestion qui centralise les référentiels de l'entreprise (articles, clients, comptabilité, stock théorique global). |
| **Exception (gestion des exceptions)** | Événement ou situation qui sort du déroulé normal d'une commande (« happy path ») : erreur de stock, anomalie en préparation ou en sourcing, source indisponible sans repli. La gestion des exceptions définit les règles à suivre pour débloquer la commande (traitement automatique si la promesse client n'est pas impactée, sinon contact client et décision manuelle tracée). |
| **Fallback (repli)** | Gestion des priorités de sourcing : règle définie en amont qui indique quelle autre source utiliser, et selon quels critères, lorsque la source prioritaire n'est pas disponible. |
| **Fulfilment** | Reflet de la préparation et de la façon dont une commande sera traitée : 1 à N articles, un point d'origine, un point de destination (expédition depuis un entrepôt, retrait en magasin, expédition depuis un magasin...). Créé dans l'OMS après la commande. |
| **Happy path** | Déroulé normal d'un processus, sans incident ni écart. Tout ce qui en sort relève de la gestion des exceptions. |
| **Omnicanalité** | Capacité à permettre au client d'acheter et de se faire livrer ou retirer sa commande indifféremment via plusieurs canaux (site web, application, magasin), avec une expérience cohérente. |
| **OMS (Order Management System)** | Système qui centralise et orchestre les commandes, de leur création jusqu'à leur affectation à une source de préparation ou d'expédition. |
| **Orchestration (des commandes)** | Action de décider, pour chaque commande, quelle source va la préparer et comment elle sera livrée ou retirée, en coordonnant les différents canaux et sources d'exécution. |
| **Promesse client** | Engagement pris auprès du client sur la mise à disposition de la marchandise avec un délai de livraison. Elle combine la faisabilité stock, la route logistique, le délai et le coût. |
| **Quadrant d'analystes (Magic Quadrant / Wave)** | Représentation publiée par un cabinet d'analystes (Gartner, Forrester...) qui positionne les éditeurs d'un marché selon deux axes (ex. solidité de l'offre actuelle / vision stratégique), pour donner une photographie du marché à un instant donné. Évolue à chaque nouvelle édition. |
| **Sourcing** | Choix, pour une commande, du ou des lieux (entrepôt, magasin, fournisseur) qui vont la préparer, selon des critères comme le stock, le délai, le coût et la route logistique. |
| **Split de commande** | Répartition d'une commande sur plusieurs sources (ex. 2 articles + 2 articles) lorsqu'aucun lieu seul ne peut la servir en totalité. Génère plusieurs fulfilments. |

## Module : WMS

| Terme | Définition |
|---|---|
| **Allocation de stock (entrepôt)** | Affectation, par le WMS, d'un stock précis (emplacement, palette, carton) à une commande ou à une vague de préparation. À distinguer de l'allocation de l'OMS, qui choisit le site. |
| **ASN (Advanced Shipping Notice / avis d'expédition)** | Message annonçant au WMS ce qui va être reçu (palettes, colis, articles, quantités). L'ASN passe « en transit » puis est clôturé à la réception. |
| **Chargement et bordereau d'expédition** | Le chargement est la mise des palettes ou colis consolidés dans le camion ; le bordereau d'expédition (*bill of lading*) reprend l'expéditeur, la date, le numéro de chargement, le contenu, le numéro de plomb et les signatures. |
| **Consolidation** | Regroupement, dans une zone dédiée, des colis ou commandes préparés (par exemple sur une même palette ou pour un même chargement) avant l'expédition. |
| **Cubing** | Calcul du volume et de l'emballage permettant d'utiliser au mieux la capacité d'un colis ou d'une palette (par exemple préparer une palette jusqu'à son volume maximal). S'appuie sur les dimensions des articles. |
| **ESB (Enterprise Service Bus / bus d'intégration)** | Couche logicielle qui relaie les messages entre systèmes : elle les reçoit, les transforme au format attendu par le destinataire, les achemine vers le bon système et en garde la trace, évitant de relier chaque système directement à tous les autres. |
| **Flux nominal / flux spécifique** | Le flux nominal (standard) est le fonctionnement proposé par l'éditeur ; le flux spécifique est une adaptation aux besoins d'une entreprise (volumes, niveau de contrôle, type de produit). |
| **GTP (Goods-to-Person)** | Mode de prélèvement où le produit est amené à l'opérateur par un équipement automatisé, au lieu que l'opérateur se déplace vers le produit. |
| **iLPN / oLPN (License Plate Number)** | Identifiant unique d'un colis ou d'une palette dans le WMS : « i » pour entrant (*inbound*, reçu), « o » pour sortant (*outbound*, préparé pour la commande). |
| **Image de stock** | Photographie du stock d'un site, transmise périodiquement par le WMS aux autres systèmes (ERP, OMS, reporting). |
| **Inventaire** | Comptage physique du stock pour le comparer au stock du système et corriger les écarts. |
| **Ordonnancement** | Contrôle du programme de préparation de l'entrepôt selon des paramètres et délais établis, pour garantir un coût minimal : sélection des commandes, capacité, allocation, cubing, routing, consolidation, création des tâches, impression. |
| **Ordre de distribution (DO)** | Message envoyé par le système hôte (ERP ou OMS) au WMS pour demander la préparation d'une commande ou d'un transfert depuis l'entrepôt. |
| **Picking (PAP / PTP)** | Prélèvement des articles. PAP (*Pick and Pack*) : on prélève directement dans le colis final. PTP (*Pick then Pack*) : on prélève d'abord, on emballe ensuite après ventilation. |
| **PIX (Perpetual Inventory Transaction)** | Message généré par le WMS pour chaque modification de stock dans l'entrepôt (réception, rangement, prélèvement, expédition...). Terme d'éditeur, aussi appelé transaction ou mouvement d'inventaire. |
| **Règles inbound** | Règles qui précisent, à la réception, quels colis sont contrôlés et comment ils sont traités (par fournisseur, article, valeur...). |
| **Réserve et zone de picking** | La réserve stocke des palettes complètes ; la zone de picking (active) stocke ce qui est prélevé souvent, en carton ou à la pièce, et est réapprovisionnée depuis la réserve. |
| **SKU (Stock Keeping Unit)** | Référence d'un article géré en stock. |
| **Terminal RF** | Terminal portable à lecteur de codes-barres relié en radiofréquence au WMS, utilisé par l'opérateur pour scanner et valider chaque geste. |
| **Vague (de préparation)** | Lot de commandes lancé ensemble en préparation, constitué selon des règles de sélection et de capacité. |
| **WCS (Warehouse Control System)** | Système qui pilote les équipements automatisés d'un entrepôt (convoyeurs, robots, trieurs...), orchestre les flux physiques et se synchronise avec le WMS. |
| **WMS (Warehouse Management System)** | Système qui gère les stocks, l'ordonnancement et la préparation des commandes au sein de l'entrepôt, en temps réel. |

## Module : TMS

| Terme | Définition |
|---|---|
| **Chargeur** | Entreprise qui expédie la marchandise et fait appel à un transporteur (par opposition au transporteur, qui l'achemine). |
| **ETA (Expected Time of Arrival)** | Heure ou date d'arrivée estimée d'une expédition à destination. |
| **Go chargement** | Information envoyée par le TMS au WMS (et au transporteur) autorisant le chargement des commandes dans le camion. |
| **Groupage** | Regroupement des commandes qui partent avec un même transporteur le même jour (et souvent vers la même destination). |
| **Récépissé de livraison (preuve de livraison)** | Document ou confirmation attestant que la marchandise a bien été reçue par le destinataire. |
| **Schéma de transport** | Attribution à une commande d'un prestataire d'acheminement et d'un plan de transport, selon l'adresse de livraison, la nature des produits, l'entrepôt expéditeur et le délai. |
| **TMS chargeur / TMS transporteur** | Le TMS chargeur est dédié aux expéditeurs et communique avec leurs systèmes (ERP, OMS, WMS) ; le TMS transporteur est dédié aux transporteurs et communique avec le TMS chargeur. |
| **TMS (Transport Management System)** | Système qui optimise la gestion du transport des commandes : choix du mode et du transporteur, planification, documents, suivi jusqu'à la livraison. |

## Module : APS

| Terme | Définition |
|---|---|
| **APS (Advanced Planning System)** | Système de planification qui prévoit la demande et optimise les approvisionnements, la production éventuelle et la répartition des stocks (combien, où, quand), en tenant compte des contraintes. Il recommande et simule ; il n'exécute pas. |
| **Conditionnement minimum / quantité minimale de commande** | Quantité minimale qu'un fournisseur accepte de livrer ou vend par lot (carton, palette), qui limite la précision des commandes d'approvisionnement. |
| **Couverture de stock** | Nombre de jours de vente que le stock actuel permet de couvrir, au rythme de la demande prévue. |
| **Délai d'approvisionnement (lead time)** | Temps écoulé entre la commande d'un produit et sa disponibilité en stock. |
| **Erreur de prévision** | Écart entre la demande prévue et la demande réelle, utilisé pour mesurer et améliorer la qualité des prévisions. |
| **Horizon de planification** | Période couverte par un plan : stratégique (mois à années), tactique (semaines à mois) ou opérationnel (jours à semaines). |
| **Prévision de la demande (demand planning)** | Estimation de ce qui sera demandé, par produit, site et période, à partir de l'historique, de la saisonnalité et des événements. C'est une hypothèse, validée et corrigée par les équipes. |
| **Réapprovisionnement (réassort)** | Alimentation d'un site (magasin, entrepôt) en stock à partir d'un site central ou d'un fournisseur, selon des règles de seuil, de couverture ou de prévision. |
| **Rééquilibrage de stock (repositionnement)** | Déplacement de stock d'un site en surstock vers un site en risque de rupture, via des ordres de transfert exécutés par le WMS et le TMS. |
| **Rotation des stocks** | Nombre de fois où le stock est renouvelé sur une période ; indicateur de la vitesse d'écoulement. |
| **Rupture de stock** | Situation où un produit demandé n'est pas disponible. |
| **S&OP (Sales & Operations Planning)** | Processus régulier (souvent mensuel) où commercial, finance, achats et opérations s'accordent sur un plan unique de ventes, d'approvisionnement et de livraison. |
| **Scénario (what-if)** | Simulation d'une décision ou d'un aléa (promotion, retard fournisseur, fermeture de site) pour comparer ses effets sur le service, le coût et la charge. |
| **SRM (Supplier Relationship Management)** | Gestion de la relation fournisseurs : contrats, conditions, quantités minimales, coûts de passation. Souvent rattachée à l'ERP et alimentée par l'APS. |
| **Stock de sécurité** | Stock tampon conservé pour absorber les aléas de demande et de délai et limiter le risque de rupture. |
| **Surstock** | Stock supérieur au besoin prévisible, qui immobilise de la trésorerie et peut devenir obsolète. |
| **Taux de service** | Part des demandes servies à temps et complètes. |

## Module : ERP

| Terme | Définition |
|---|---|
| **Achat-à-paiement (procure-to-pay)** | Cycle qui va du besoin d'achat au règlement du fournisseur : commande, avis d'expédition, réception, facture, rapprochement, paiement. |
| **Commande-à-encaissement (order-to-cash)** | Cycle qui va de la commande du client à l'encaissement : commande, promesse, préparation, expédition, facturation, encaissement. |
| **Commande fournisseur** | Document émis par l'entreprise pour commander des produits à un fournisseur ; elle sert de référence à la réception et au rapprochement de la facture. |
| **Données de référence (données maîtres)** | Informations de base relativement stables (articles, fournisseurs, clients, sites, prix) créées dans l'ERP ou un référentiel dédié et diffusées aux autres systèmes. |
| **Modèle commun (core model)** | Socle (processus, règles de gestion, modèles de données, référentiels) partagé entre plusieurs filiales ou sites, qui limite les écarts locaux. |
| **Rapprochement à trois (three-way match)** | Contrôle qui compare la commande fournisseur, la réception et la facture avant de valider le paiement. |
| **Stock comptable (valorisé)** | Stock exprimé en valeur (quantité multipliée par un coût) dans l'ERP, qui alimente le bilan ; distinct du stock physique compté et du stock disponible à la vente. |
| **Système hôte** | Système de gestion (souvent l'ERP, parfois l'OMS) qui envoie au WMS les articles, ASN et ordres de distribution, et en reçoit les mouvements de stock et confirmations d'expédition. |

## Module : WCS

| Terme | Définition |
|---|---|
| **Automate (PLC)** | Petit calculateur industriel qui commande une machine ou un équipement (moteurs, capteurs) et dialogue avec le WCS. |
| **Convoyeur** | Équipement qui transporte automatiquement bacs, cartons ou colis entre les zones d'un entrepôt, avec des aiguillages et des points de lecture. |
| **Équipements de manutention (MHE)** | Ensemble des équipements physiques de manutention et de stockage d'un entrepôt (convoyeurs, trieurs, robots, stockage automatisé). Les messages échangés avec eux sont appelés messages MHE. |
| **Gare de picking** | Zone ou poste où les bacs arrivent automatiquement pour que l'opérateur y prélève les articles. |
| **Mise en bac** | Opération qui consiste à placer les articles dans des bacs destinés au stockage automatisé. |
| **Mode dégradé** | Procédure de secours, définie à l'avance, qui permet de continuer à travailler lorsqu'un équipement ou un système est indisponible. |
| **No-read (non-lecture)** | Situation où un lecteur n'arrive pas à lire l'étiquette d'un colis ou d'un bac ; le colis est généralement dirigé vers une voie de rejet. |
| **Rejet** | Voie ou action qui écarte du flux automatique un colis non conforme (poids anormal, étiquette illisible, hors gabarit) pour traitement manuel. |
| **Stockage automatisé** | Système qui range et retrouve automatiquement des bacs, cartons ou palettes (transstockeurs, tours automatisées, robots sur racks). |
| **Trieur** | Équipement qui oriente automatiquement chaque colis vers sa destination (commande, quai, transporteur). |
| **WES (Warehouse Execution System)** | Système qui combine, à des degrés variables, des fonctions de WMS et de WCS pour coordonner l'exécution des opérations d'un entrepôt, notamment mécanisé. |

## Module : Overview IA

| Terme | Définition |
|---|---|
| **Agent (IA)** | Système où un modèle d'IA, à partir d'un objectif, enchaîne des étapes (planifier, utiliser des outils, observer, ajuster) avec plus ou moins d'autonomie, généralement avec des validations humaines aux étapes sensibles. |
| **Appel d'outils (tool use)** | Mécanisme par lequel un modèle d'IA demande l'exécution d'un outil (consulter une base, lancer un calcul, interroger un système) dont le résultat revient dans la conversation. |
| **Apprentissage automatique (machine learning)** | Famille de techniques d'IA qui apprennent à partir de données plutôt que d'être programmées règle par règle (prévision, classification, détection d'anomalies). |
| **Biais (IA)** | Tendance d'un modèle à reproduire ou amplifier des déséquilibres présents dans ses données d'entraînement. |
| **Fenêtre de contexte** | Quantité de texte qu'un modèle peut prendre en compte à un instant donné (consigne, documents fournis, conversation) ; ce qui n'y figure pas, il ne le voit pas. |
| **Hallucination** | Réponse d'un modèle d'IA fausse mais présentée avec aplomb (chiffre inventé, source inexistante, règle qui n'existe pas). |
| **Humain dans la boucle** | Principe selon lequel une personne valide les décisions ou actions sensibles d'un système d'IA avant leur exécution. |
| **IA (intelligence artificielle)** | Ensemble de techniques permettant à une machine d'accomplir des tâches associées à l'intelligence humaine (prévoir, classer, comprendre, décider, générer). |
| **IA générative** | IA capable de produire du contenu (texte, image, code, tableau) à partir d'une consigne. |
| **LLM (Large Language Model)** | Grand modèle de langage entraîné sur de très nombreux textes pour prédire la suite la plus probable d'un texte ; produit des réponses plausibles mais pas nécessairement exactes. |
| **MCP (Model Context Protocol)** | Standard ouvert permettant de connecter des modèles d'IA à des outils et à des sources de données de façon uniforme. |
| **RAG (Retrieval-Augmented Generation)** | Technique qui recherche des passages pertinents dans une base de documents de l'entreprise puis les fournit au modèle pour qu'il réponde en s'appuyant dessus. |
| **Règlement européen sur l'IA (AI Act)** | Règlement de l'Union européenne qui encadre les systèmes d'IA en graduant les obligations selon leur niveau de risque. |
| **Token (jeton)** | Morceau de texte (mot ou partie de mot) traité par un modèle de langage ; la longueur des textes et des contextes se mesure en tokens. |

## Module : Prompting

| Terme | Définition |
|---|---|
| **Anonymisation** | Remplacement des noms et données identifiantes (clients, prestataires, personnes) par des désignations neutres avant de saisir un texte dans un outil d'IA. |
| **Bibliothèque de prompts** | Collection documentée et partagée de consignes éprouvées (avec objectif, version, cas de test, limites) réutilisables par une équipe. |
| **Chaîne de prompts (prompt chaining)** | Décomposition d'une tâche complexe en plusieurs consignes successives, la sortie de l'une alimentant l'entrée de la suivante. |
| **Exemples dans le prompt (few-shot)** | Technique qui consiste à montrer à l'IA une ou deux paires « entrée → sortie attendue » pour lui faire comprendre le style ou la logique voulus. |
| **Injection de prompt** | Consigne cachée dans un document, une page web ou un message, destinée à détourner le comportement d'une IA ; le contenu externe doit être traité comme non fiable. |
| **Instructions permanentes (prompt système)** | Consignes qui fixent le rôle, le ton et les règles générales d'un assistant d'IA, indépendamment de chaque demande. |
| **Playground (espace de test)** | Environnement permettant de tester une consigne avec différents modèles ou réglages et de comparer les résultats. |
| **Prompt** | Consigne donnée à une IA générative : question, contexte, documents, exigences et format attendu. |

## Module Bac+5 : L'écosystème étendu

| Terme | Définition |
|---|---|
| **3PL (third-party logistics)** | Prestataire qui exécute des opérations logistiques (transport, entreposage, préparation de commandes) pour le compte d'un chargeur. |
| **4PL (fourth-party logistics)** | Intégrateur ou orchestrateur qui conçoit, pilote et optimise tout ou partie de la supply chain d'un client en coordonnant plusieurs prestataires 3PL et les technologies, souvent sans actifs propres. Définition variable selon les sources. |
| **5PL (fifth-party logistics)** | Terme peu stabilisé désignant en général un orchestrateur de réseaux et de plateformes numériques qui rassemble plusieurs acteurs et s'appuie sur les données. Définition variable selon les sources, à confirmer. |
| **ESN (entreprise de services du numérique)** | Société de services qui paramètre, intègre, déploie et maintient des systèmes d'information pour le compte de clients. |
| **Forfait / régie** | Deux modèles de facturation d'une prestation : le forfait fixe un prix pour un périmètre défini ; la régie facture le temps passé. |
| **Réversibilité** | Capacité à reprendre ou à changer de prestataire ou de solution en récupérant ses données dans un format exploitable, prévue dès le contrat. |
| **RFI (request for information)** | Demande d'information adressée à des candidats pour explorer le marché et présélectionner. |
| **RFP (request for proposal) / appel d'offres** | Cahier des charges avec scénarios et critères de choix auquel les candidats répondent par une proposition chiffrée. |
| **RFQ (request for quotation)** | Demande de prix sur un besoin déjà précisément défini. |
| **SLA (service level agreement)** | Accord de niveau de service : engagement mesurable du prestataire (disponibilité, délais, taux de service) avec pénalités éventuelles. |
| **TCO (total cost of ownership)** | Coût total de possession d'une solution : licences ou abonnement, intégration, données, formation, maintenance, évolutions, sortie. |
| **Verrouillage fournisseur (lock-in)** | Dépendance qui rend coûteux le changement de prestataire ou de solution (spécifique, données, compétences). |

## Module Bac+5 : Les flux de bout en bout

| Terme | Définition |
|---|---|
| **Cartographie de flux** | Représentation d'un flux de bout en bout (étapes, acteurs, systèmes, données, délais, règles), construite avec le terrain, qui sert de langage commun. |
| **Flux d'information** | Messages et statuts qui décrivent et pilotent le flux physique (commande, ordre de préparation, confirmation d'expédition, suivi). |
| **Flux financier** | Facturation, paiement, valorisation du stock et coûts, déclenchés par des événements physiques et d'information. |
| **Flux physique** | Mouvement de la marchandise (réception, stockage, préparation, transport, livraison, retours). |
| **Goulot d'étranglement** | Étape qui limite le débit de l'ensemble d'un flux ; améliorer ailleurs n'augmente pas la performance. |
| **Jumeau numérique** | Réplique virtuelle d'un site ou d'un flux, alimentée par des données réelles, utilisée pour tester des scénarios avant de les appliquer. |
| **Propriétaire de flux (process owner)** | Personne responsable de la performance d'un flux de bout en bout, quels que soient les services traversés. |
| **Tour de contrôle (control tower)** | Vue consolidée, en quasi temps réel, des flux de plusieurs systèmes et acteurs, avec alertes et aide à la décision. |

## Module Bac+5 : OMS : promesse, service et rentabilité omnicanale

| Terme | Définition |
|---|---|
| **Coût de service (cost to serve)** | Coût total pour servir une commande (préparation, transport, emballage, retours), qui varie selon la source et le canal. |
| **Règle de sourcing** | Règle appliquée par l'OMS pour choisir la source d'une commande : condition, action, priorité et repli. Les règles encodent des arbitrages entre service, coût, charge et carbone. |
| **Score de sourcing** | Note attribuée à chaque source candidate à partir de critères pondérés (délai, coût, stock, capacité, carbone) ; la meilleure est retenue. |
| **Taux de split** | Part des commandes qui partent en plusieurs colis ou depuis plusieurs sources. |

## Module Bac+5 : Entrepôt (WMS et WCS) : productivité, mécanisation et IA

| Terme | Définition |
|---|---|
| **Business case de mécanisation** | Analyse chiffrée d'un projet de mécanisation : coûts, gains, risques, sensibilité aux volumes et alternatives, avec critères non financiers. |
| **Slotting** | Affectation des références aux emplacements de l'entrepôt selon leur rotation, pour réduire les déplacements. |

## Module Bac+5 : Transport (TMS) : coût, service et empreinte

| Terme | Définition |
|---|---|
| **Audit et paiement des frais de transport (freight audit)** | Contrôle de chaque facture de transport par rapport à l'expédition (poids, destination, tarif, surcharges) pour détecter les écarts. |
| **Intensité carbone (transport)** | Émissions rapportées à l'activité de transport, souvent exprimées par tonne-kilomètre. |
| **Spot / contrat (transport)** | Le spot est l'achat de transport à la demande au prix du moment ; le contrat engage des volumes à un prix négocié. |

## Module Bac+5 : Planification et ERP : stocks, trésorerie et décisions

| Terme | Définition |
|---|---|
| **Coût de possession du stock** | Coût annuel de détention d'un stock : capital immobilisé, espace, assurance, obsolescence, démarque. |
| **Cycle de trésorerie (cash-to-cash)** | Jours de stock plus jours de crédit client moins jours de crédit fournisseur ; mesure le temps pendant lequel l'argent est immobilisé. |
| **Niveau de service cible** | Taux de disponibilité visé pour un segment d'articles ; son coût marginal augmente avec le niveau visé. |
| **Segmentation des articles** | Classement des articles selon leur valeur, leur rotation, la variabilité de leur demande ou leur criticité, pour leur appliquer des politiques différentes. |

## Module Bac+5 : Piloter la performance avec les données et l'IA

| Terme | Définition |
|---|---|
| **Fiche d'indicateur** | Document qui définit un indicateur : objectif, formule, périmètre, source, fréquence, propriétaire, seuils, limites. |
| **Gouvernance des données** | Ensemble de règles et de responsabilités (propriétaires, règles de création, contrôles, revue) qui garantissent la qualité des données. |
| **Indicateur de résultat / de moyens** | Un indicateur de résultat mesure ce qu'on obtient (taux de service, coût) ; un indicateur de moyens mesure ce qu'on fait pour l'obtenir (taux de remplissage, qualité des données). |
| **OTIF (on time in full)** | Part des commandes livrées à la date promise et complètes. |
| **Qualité des données** | Aptitude des données à être utilisées : exactitude, complétude, cohérence, fraîcheur, unicité. |

## Module Bac+5 : Supply chain durable : mesurer, piloter, arbitrer

| Terme | Définition |
|---|---|
| **Données primaires / secondaires** | Les données primaires sont mesurées (par exemple fournies par le prestataire) ; les données secondaires sont des valeurs moyennes ou estimées. |
| **Empreinte carbone** | Quantité de gaz à effet de serre émise par une activité, un produit ou une organisation, exprimée en équivalent CO2. |
| **Facteur d'émission** | Coefficient qui convertit une quantité d'activité (par exemple des tonnes-kilomètres) en émissions ; il peut couvrir la combustion seule ou le cycle complet de l'énergie. |
| **Logistique inverse** | Flux de retour (retours clients, produits endommagés, emballages, produits en fin de vie) et leur orientation vers la remise en stock, le reconditionnement, le recyclage ou le rebut. |
| **Prix interne du carbone** | Valeur attribuée en interne à la tonne de CO2 pour intégrer le carbone dans les décisions économiques. |
| **Écoblanchiment (greenwashing)** | Allégation environnementale trompeuse ou non démontrée (par exemple « livraison verte » sans méthode ni preuve). |
| **Économie circulaire** | Modèle qui prolonge la durée de vie des produits et des matériaux : réemploi, reconditionnement, réparation, recyclage, seconde vie. |
| **Émissions de scope 1, 2 et 3** | Périmètres de comptabilité des gaz à effet de serre : le scope 1 couvre les émissions directes, le scope 2 l'énergie achetée, le scope 3 les autres émissions indirectes en amont et en aval (dont le transport par des prestataires et les achats). |

## Module Bac+5 : Le coût de l'IA : business case, sobriété et bilan net

| Terme | Définition |
|---|---|
| **Bilan net (carbone)** | Émissions évitées grâce à une optimisation moins émissions induites par le numérique et l'IA, sur la même période et le même périmètre. |
| **Délai de retour (payback) / ROI** | Délai de retour : temps nécessaire pour que les gains cumulés couvrent l'investissement. ROI (retour sur investissement) : rapport entre le gain net et l'investissement. |
| **Dérive d'un modèle** | Dégradation de la performance d'un modèle d'IA lorsque le contexte ou les données évoluent par rapport à ceux de son apprentissage. |
| **Effet rebond** | Phénomène par lequel un gain d'efficacité stimule les volumes ou les usages et annule une partie du bénéfice attendu. |
| **Inférence** | Utilisation d'un modèle d'IA déjà entraîné pour produire une réponse ; répétée à grande échelle, elle contribue à l'empreinte de l'IA. |
| **Preuve de concept (POC)** | Essai limité d'une solution avec des critères de réussite définis à l'avance ; le risque est le pilote permanent, sans décision d'industrialisation. |
| **Sobriété numérique** | Démarche qui vise la valeur au moindre coût et à la moindre empreinte : choisir la solution la plus simple qui suffit. |

## Module Bac+5 : Organiser et conduire la transformation

| Terme | Définition |
|---|---|
| **Comité de pilotage (COPIL)** | Instance de gouvernance d'un projet qui prend les décisions stratégiques, arbitre et débloque les ressources, autour du sponsor. |
| **Conduite du changement** | Démarche qui accompagne les personnes dans l'adoption d'une transformation : analyse d'impact, communication, formation, accompagnement, mesure de l'adoption. |
| **Gestion des bénéfices** | Suivi de la réalisation des bénéfices attendus d'un projet : propriétaires, indicateurs, dates de revue, actions déclenchantes. |
| **Matrice RACI** | Tableau qui précise, pour chaque décision ou livrable, qui est Responsable, Approbateur, Consulté et Informé. |
| **Mise en production complète ou progressive (full / soft go live)** | La mise en production complète bascule tout le périmètre d'un coup ; la progressive bascule par étapes, par site ou par fonction. |
| **Réseau de relais métier** | Ensemble de key users ou de référents formés pour accompagner leurs collègues dans l'adoption d'un changement. |

## Module Bac+5 : Comment l'IA transforme la supply chain

| Terme | Définition |
|---|---|
| **Copilote (IA)** | Assistant d'IA intégré à un outil ou à un poste de travail, qui explique, résume et propose, l'utilisateur gardant la décision. |
| **Niveau d'autonomie (IA)** | Degré de délégation donné à un système d'IA : informer, recommander, préparer avec validation humaine, exécuter dans un périmètre limité, exécuter de façon autonome. |
| **Souveraineté des données** | Maîtrise de l'hébergement, de l'accès et de la juridiction applicable aux données d'une organisation. |
| **Supply chain autonome** | Vision d'une chaîne logistique où des systèmes d'IA surveillent, décident et agissent sur de nombreux flux avec une supervision humaine minimale. |
| **Veille stratégique** | Démarche régulière de suivi des technologies, des usages, de la réglementation et des retours d'expérience, avec une grille d'évaluation des annonces. |
| **Visibilité de bout en bout** | Capacité à suivre commandes, stocks et transports sur l'ensemble de la chaîne, y compris chez les partenaires, grâce au partage de données. |

## Module Bac+5 : Challenger une simulation IA avant un comité de direction

| Terme | Définition |
|---|---|
| **Analyse de sensibilité** | Étude de l'effet de la variation d'une hypothèse (volumes, délais, capacités) sur les résultats d'une simulation, pour identifier celles qui changent la décision. |
| **Backtesting (test sur l'historique)** | Vérification qu'un modèle ou une simulation retrouve les résultats d'une période passée connue. |
| **Explicabilité** | Capacité à expliquer, en termes simples, pourquoi un système ou une recommandation produit un résultat. |
| **Hypothèse implicite** | Supposition utilisée par une simulation ou un plan sans être écrite (par exemple une capacité constante ou l'absence de retours). |

---

*(Chaque nouveau module ajoute ici sa propre section.)*
