# Module e-learning — TMS (Transport Management System)
**Formation :** Responsable de Production Transport et Logistique (RPTL) — Bac+3
**Sous-titre du module :** Rôle, schéma de transport, échanges avec les autres systèmes, enjeux, limites, marché et vie d'une commande de bout en bout
**Durée cible :** 35–45 min
**Public :** Apprenants RPTL ou métiers proches (responsable entrepôt, affréteur, approvisionneur, coordinateur transport/logistique) — non-IT
**Statut :** 🔴 À créer — v1 storyboard (base : section TMS et section « suivi d'une commande » du cours ICAM 2026, complétées pour les enjeux, les incidents, les limites et le marché)

**Positionnement dans le curriculum :** Troisième module « système » après l'OMS (qui décide) et le WMS (qui prépare). Le TMS organise **le transport** : c'est le système le plus proche du métier du RPTL (Responsable de Production **Transport** et Logistique). Le module se termine par une synthèse transversale de la **vie d'une commande OMS → WMS → TMS**. Les exemples sont contextualisés métier transport/logistique, sans nom de client, de projet ni de transporteur ; seul l'écran « panorama du marché » cite des éditeurs (règle du projet, voir CLAUDE.md).

---

## Objectifs pédagogiques
À l'issue du module, l'apprenant sera capable de :
1. Définir le rôle d'un TMS : optimisation, traçabilité, automatisation des tâches de transport.
2. Distinguer le TMS chargeur du TMS transporteur et situer le TMS par rapport à l'OMS, au WMS et à l'ERP.
3. Décrire les étapes de la vie d'une expédition dans un TMS et distinguer ce qui est automatique de ce qui reste manuel.
4. Expliquer comment un schéma de transport est défini (critères, choix du mode, coût, délai, empreinte carbone).
5. Citer les enjeux du TMS et les bénéfices par rapport à une gestion sans TMS.
6. Savoir réagir à un incident de transport et identifier les limites d'un TMS (« vérifier avant d'agir »).
7. Suivre une commande de bout en bout entre OMS, WMS et TMS, avec les statuts successifs.
8. Avoir une vue du marché des éditeurs TMS.

---

## Plan du module (13 écrans + quiz + synthèse)

| # | Écran | Durée estimée |
|---|-------|----------------|
| 1 | Accroche / mise en situation | 1-2 min |
| 2 | Objectifs du module | 1 min |
| 3 | Qu'est-ce qu'un TMS ? | 3 min |
| 4 | TMS chargeur et TMS transporteur | 2 min |
| 5 | Le TMS dans le système d'information : avec qui échange-t-il ? | 3 min |
| 6 | La vie d'une expédition dans le TMS | 4 min |
| 7 | Le schéma de transport : choisir le mode et le transporteur | 4 min |
| 8 | Groupage, documents, portails et suivi | 3 min |
| 9 | Pourquoi utiliser un TMS ? Enjeux et indicateurs | 3 min |
| 10 | Quand le transport déraille : gérer les incidents | 3 min |
| 11 | Les limites du TMS — vérifier avant d'agir | 3 min |
| 12 | La commande de bout en bout : OMS → WMS → TMS | 4 min |
| 13 | Panorama du marché des TMS | 3 min |
| 14 | Quiz de validation (10 questions, 80% requis) | 5 min |
| 15 | Synthèse et points clés à retenir | 1-2 min |

---

### Écran 1 — Accroche / mise en situation
**Contenu clé :**
- Mise en situation narrative : "Vendredi, 16 h. Quarante commandes sont prêtes à quitter l'entrepôt. Le camion de 17 h n'a pas de créneau de livraison confirmé pour deux destinataires, trois colis sont plus lourds que prévu, et un client demande où en est sa livraison. Qui décide quel transporteur prend quoi, et qui peut répondre au client ?"
- Teaser : ce module présente le système qui organise le transport des commandes préparées — le TMS.

**Visuel suggéré :** Quai d'expédition en fin de journée avec colis, camion et horloge, puis un tableau de bord qui remet de l'ordre dans le chargement.

**Note formateur :** Ancrer l'intérêt — le RPTL est directement concerné : coûts, délais, relations transporteurs et incidents sont son quotidien.

**[Exemple réel à intégrer]** — un cas vécu d'expédition mal organisée (transporteur, créneau, documents) ou de retard difficile à expliquer au client (anonymisé).

---

### Écran 2 — Objectifs du module
**Contenu clé :** Reprendre les objectifs pédagogiques ci-dessus sous forme de bullet points visuels (icônes).

**Visuel suggéré :** 8 pictos (rôle / chargeur vs transporteur / échanges / expédition / schéma de transport / enjeux / incidents et limites / bout en bout et marché).

---

### Écran 3 — Qu'est-ce qu'un TMS ?
**Contenu clé :**
- Définition : un TMS (Transport Management System) est le système qui **optimise la gestion de la partie transport des commandes**.
- Trois apports :
  - **Optimisation** : choix du meilleur moyen et du meilleur itinéraire, au meilleur coût.
  - **Traçabilité** : suivre l'expédition de l'enlèvement à la livraison.
  - **Automatisation des tâches** : génération des documents, planification, échanges avec les transporteurs.
- Position dans la chaîne : après le WMS (qui prépare), avant le magasin ou le client. Le TMS prend en charge le **mode de transport**, la planification et la gestion optimisée des transports et des tournées.
- Rappel des modules précédents : l'OMS décide **quelle source** prépare, le WMS prépare **dans l'entrepôt**, le TMS organise **le trajet**.

**Visuel suggéré :** Chaîne OMS → WMS → TMS → magasin / client, avec le TMS entouré et trois bulles (optimisation, traçabilité, automatisation).

---

### Écran 4 — TMS chargeur et TMS transporteur
**Contenu clé :**
- **TMS chargeur** : dédié aux **expéditeurs** (l'entreprise qui envoie la marchandise). Il communique directement avec les systèmes de l'expéditeur (ERP, OMS, WMS).
- **TMS transporteur** : dédié aux **transporteurs**. Il communique avec le TMS du chargeur.
- Le dialogue entre les deux évite les ressaisies : informations sur les colis à enlever, avancement, preuve de livraison.
- Dans ce module, on se place du côté du **chargeur**, point de vue du RPTL.

**Visuel suggéré :** Schéma ERP / OMS / WMS → TMS chargeur ↔ TMS transporteur, avec des flèches bidirectionnelles.

---

### Écran 5 — Le TMS dans le système d'information : avec qui échange-t-il ?
**Contenu clé :**
- Échanges simplifiés d'un TMS chargeur :
  1. La commande est transmise au TMS **en même temps qu'au WMS** (par l'ERP ou l'OMS).
  2. Le WMS informe du **début de la préparation**.
  3. Le WMS transmet la **pesée / le colisage**, ou l'**annulation** de la commande.
  4. Le TMS envoie le **« go chargement »** au WMS (et l'information au transporteur).
  5. Le WMS confirme l'**expédition**.
  6. Le transporteur renvoie les **informations de livraison**.
- Les statuts du WMS (écran 4 du module WMS) alimentent donc le TMS : un TMS n'est fiable que si le WMS lui remonte des informations justes et à temps.
- Rappel des 3 couches du SI : le TMS se situe côté **exécution du transport**, avec une cadence quasi temps réel.
- Un bus d'intégration (ESB) relaie souvent ces messages : il les transporte, les transforme et les distribue entre les systèmes.

**Visuel suggéré :** Schéma à 4 blocs (ERP/OMS, WMS, TMS chargeur, TMS transporteur) avec les 6 flèches numérotées.

---

### Écran 6 — La vie d'une expédition dans le TMS
**Contenu clé :**
- Les étapes, avec leur nature (automatique ou manuelle) :
  1. **Intégration de la commande** : la commande arrive dans le TMS (échange entre systèmes).
  2. **Calcul du schéma de transport** : selon plusieurs caractéristiques, le TMS calcule le meilleur choix de transport (**automatique**).
  3. **Réception de la progression WMS** : en attente de la fin de préparation et de la fermeture des colis.
  4. **Génération des documents de transport** : packing list et autres documents administratifs (**automatique**).
  5. **Intégration de la facture** de la commande.
  6. **Groupage** : regroupement des commandes qui partent avec un même transporteur le même jour (**manuel** ou automatique selon le paramétrage).
  7. **Go chargement du camion** : information envoyée au WMS pour charger, et au transporteur qui sait quels colis il va recevoir (**automatique**).
  8. **Réception de la progression WMS** : en attente du « top départ » (départ du camion de l'entrepôt).
  9. **Réception de la progression de livraison** : informations de livraison envoyées par le transporteur.
  10. **Réception du récépissé de livraison** : preuve de réception.
- Message clé : le TMS **enchaîne** des étapes alimentées par plusieurs systèmes ; il en automatise certaines et laisse d'autres à une validation humaine (le RPTL ou son équipe).

**Visuel suggéré :** Parcours en serpentin à 10 étapes, étapes colorées selon « intégration SI expéditeur / SI transporteur / manuel / automatique ».

---

### Écran 7 — Le schéma de transport : choisir le mode et le transporteur
**Contenu clé :**
- Le **schéma de transport** attribue à chaque commande **un prestataire d'acheminement** et **un plan de transport**. Le TMS le définit à partir des informations de la commande.
- **Critères** : adresse de livraison ; caractéristiques des produits transportés (fragile, alimentaire, inflammable, luxe...) ; entrepôt expéditeur ; délai de livraison demandé.
- Sur cette base, le TMS cherche le meilleur compromis **coût / délai / empreinte carbone** entre les modes : maritime (forte quantité), ferroviaire (longue distance), routier (faible et moyenne distance), aérien (urgence). Les ordres de grandeur d'émissions diffèrent fortement d'un mode à l'autre (l'aérien émet nettement plus que le maritime).
- **Prise en charge par le transporteur** : en réseau, les colis de plusieurs expéditeurs sont acheminés vers les plateformes du transporteur, qui gère ensuite les trajets de distribution jusqu'aux destinataires. Le chargeur ne pilote que le trajet « expéditeur → plateforme » avec des colis 100 % à lui.
- Lien OMS : l'OMS **calcule la promesse** (date de livraison, routes possibles) ; le TMS **choisit concrètement** le transporteur et le plan qui tiennent cette promesse.
- Rôle du RPTL : **détenteur de la connaissance d'usage**, il **fournit les règles du schéma de transport** (transporteur par destination, contraintes de livraison, seuils de poids, priorités) ; il les **teste après l'installation** (cas normaux, cas limites, pointes) et les **optimise** en exploitation normale à partir des retards et des coûts observés.

**Visuel suggéré :** Tableau 4 modes × 3 critères (coût, temps, CO2) + carte simplifiée « expéditeurs → plateformes du transporteur → destinataires ».

**Note formateur :** Les valeurs d'émissions du support de cours ne sont pas reprises telles quelles (unités et sources à vérifier) ; si un chiffre est affiché, le sourcer (ex. référentiel public d'émissions du transport).

---

### Écran 8 — Groupage, documents, portails et suivi
**Contenu clé :**
- **Groupage automatique** des commandes qui peuvent partir ensemble (même transporteur, même jour, même destination).
- **Contraintes client** : prise en compte de l'**ETA** (heure d'arrivée estimée) ou du **rendez-vous de livraison**.
- **Documents de transport** : impression d'étiquettes et de documents (packing list, documents douaniers ou réglementaires selon les produits) ; **dématérialisation** pour éviter l'impression systématique.
- **Interfaces dédiées** :
  - application de bureau pour le chargeur (modifier, suivre l'avancement des colis, grouper, envoyer le go chargement) ;
  - portail web pour la boutique ou le client (suivre les colis à recevoir, documents de facturation et de conformité) ;
  - portail web pour le transporteur (colis à transporter, documents de transport) ;
  - reporting (tableaux de bord).
- Calcul du **CO2** selon les itinéraires et les types de transport.

**Visuel suggéré :** 4 écrans-types (chargeur, boutique, transporteur, reporting) autour d'un TMS central.

---

### Écran 9 — Pourquoi utiliser un TMS ? Enjeux et indicateurs
**Contenu clé :**
- Avantages sur le **cheminement** : optimisation des trajets, automatisation de la planification des itinéraires, calcul de l'empreinte carbone. *Avant* : règles de gestion non optimisées dans l'ERP ou l'OMS.
- Avantages sur la **communication** : entre le métier et la logistique, et entre l'entreprise et le transporteur. *Avant* : échanges par téléphone, e-mails, papier, parfois un tableur en ligne.
- Avantages sur la **dématérialisation** : documents de transport obligatoires générés automatiquement. *Avant* : 100 % des documents imprimés (au moins une feuille par commande).
- Indicateurs que suit un RPTL avec un TMS (à compléter selon l'organisation) : coût de transport par colis ou par commande ; taux de livraison à l'heure ; taux de colis livrés sans incident ; délai moyen de livraison ; taux de remplissage des camions ; émissions de CO2 par expédition.
- Message clé : le gain d'un TMS est autant **organisationnel** (moins de ressaisie, moins d'appels) qu'économique.

**Visuel suggéré :** Trois lignes « Avant / Avec un TMS » (cheminement, communication, dématérialisation) et un encart « 6 indicateurs ».

**[Exemple réel à intégrer]** — un cas où le passage à un TMS (ou son absence) a changé un coût, un délai ou une relation transporteur (anonymisé).

---

### Écran 10 — Quand le transport déraille : gérer les incidents
**Contenu clé :**
- Les incidents fréquents : retard d'enlèvement ou de livraison, colis refusé ou livré en l'absence du destinataire, colis endommagé ou manquant, poids ou dimensions différents de ceux annoncés, créneau de livraison non respecté.
- Comme pour les exceptions de l'OMS (module OMS), la logique est de **suivre des règles définies à l'avance** plutôt que d'improviser : où est le problème (préparation, chargement, transport, livraison) ? existe-t-il une solution sans dégrader la promesse faite au client ? sinon, qui prévient le client ?
- Ce que le TMS apporte : alertes sur les retards, suivi par colis, preuve de livraison, historique des événements, données pour discuter avec le transporteur.
- Ce que le TMS ne fait pas seul : décider de réexpédier, d'indemniser ou de changer de transporteur — c'est une décision de gestion, souvent du RPTL.
- Un incident répété (même transporteur, même destination) est un signal de **management** : il se traite par un échange avec le transporteur et une règle, pas seulement colis par colis.
- Les **règles de traitement des incidents** (qui prévient qui, quand relancer, quand changer de transporteur) viennent de la connaissance d'usage du RPTL ; elles sont testées après l'installation et ajustées à l'usage.

**Visuel suggéré :** Arbre de décision « incident constaté → où ? → solution sans impact sur la promesse ? → sinon, prévenir le client », avec le rôle du TMS à chaque étape.

**[Exemple réel à intégrer]** — un incident de transport traité par la bonne règle (ou mal traité), anonymisé. Piste issue du support OMS : un colis lourd livré plusieurs fois au même client, révélant l'absence de règle sur les re-livraisons.

---

### Écran 11 — Les limites du TMS — vérifier avant d'agir
**Contenu clé :**
- Le TMS **organise** le transport mais ne l'exécute pas : il ne conduit pas, ne charge pas et ne garantit pas la ponctualité du transporteur.
- Il dépend de **données justes** : poids, dimensions et nature des colis, adresses, créneaux ; ces informations viennent du WMS et de l'ERP/OMS. Une erreur en amont fausse le schéma de transport, le groupage et le coût.
- Il dépend des **contrats et tarifs** paramétrés et de la **réactivité des transporteurs** pour remonter leurs informations.
- Un TMS chargeur ne remplace pas le TMS du transporteur : il en reçoit des informations.
- **Vérifier avant d'agir** : avant de conclure à une erreur du TMS (mauvais transporteur, coût anormal, colis non groupé), contrôler dans l'ordre : les **données de la commande** (poids, adresse, délai), le **statut reçu du WMS** (colis bien fermé et pesé ?), les **règles du schéma de transport** applicables, l'**information du transporteur** (reçue ou en attente ?).
- Lien WMS : un poids pesé aberrant ou un colis non « fermé » dans le WMS bloque l'étape suivante du TMS.

**Visuel suggéré :** Check-list « avant d'escalader vers l'IT » en 4 cases + mini-cas interactif (QCM court), distinct du quiz final.

**[Exemple réel à intégrer]** — un cas où une vérification simple de donnée (poids, adresse) a évité une escalade inutile (anonymisé).

---

### Écran 12 — La commande de bout en bout : OMS → WMS → TMS
**Contenu clé :**
- Objectif : suivre une commande à travers les trois systèmes jusqu'à la livraison.
- **Étape 1 — Création (OMS)** : le client commande (site, magasin, service client). L'OMS enregistre la commande (statut « créée »), cherche le stock (« sourcée »), alloue le stock, calcule les dates, vérifie les transporteurs, informe les plateformes, et crée une commande interne selon le type d'allocation : stock fournisseur (commande au fournisseur), stock magasin (préparée par l'agent du magasin) ou stock entrepôt (ordre de distribution envoyé au WMS).
- **Étape 2 — Préparation (WMS)** : le WMS reçoit l'ordre de distribution, alloue le stock d'emplacements, prépare (le stock physique s'incrémente/décrémente), emballe, génère les étiquettes. Statuts : « colis en attente de préparation » → « colis en cours de préparation ».
- **Étape 3 — Mise à disposition pour expédition** : documents de transport, regroupement des colis de la commande, le WMS informe le TMS. Statut : « prêt à expédier ».
- **Étape 4 — Expédition et livraison (TMS)** : le TMS planifie l'enlèvement, le WMS lance l'expédition (« colis expédié, en transit »), le TMS suit la livraison et informe l'OMS, signature du bon de réception, clôture (« colis livré »).
- **Suivi et clôture** : confirmation de livraison dans l'OMS, mise à jour des stocks, analyse des données par les trois systèmes (performances, incidents).
- Message clé : une coordination fiable entre OMS, WMS et TMS = une logistique fluide et un client satisfait.

**Visuel suggéré :** Frise horizontale à trois couloirs (OMS / WMS / TMS) avec les statuts successifs et les messages qui passent d'un couloir à l'autre.

**Note formateur :** Écran de synthèse transversal : y revenir pour les modules suivants (ERP, APS, WCS) en ajoutant les nouveaux acteurs.

---

### Écran 13 — Panorama du marché des TMS
**Contenu clé :**
- Rappel du principe d'un quadrant d'analystes (voir modules OMS et WMS) : photographie d'un marché à un instant donné, deux axes (capacité d'exécution, complétude de la vision), quatre cadrans.
- Comme pour les WMS, **Gartner publie un Magic Quadrant pour les TMS** : édition publiée le **30 mars 2026** (Gartner, *Magic Quadrant for Transportation Management Systems*).
- Placements vérifiés (annoncés par les éditeurs concernés, à confirmer avec le rapport) :
  - **Leaders** : SAP, Oracle, Blue Yonder, Manhattan Associates.
- ⚠️ **À confirmer avant publication** : les placements des autres éditeurs (Challengers, Visionnaires, Acteurs de niche) ne sont accessibles que dans le rapport complet payant. Ils sont à compléter, notamment pour les acteurs plus spécialisés dans le transport.
- Rappel : il existe aussi des éditeurs de **TMS côté transporteur**, distincts des TMS chargeur ; le panorama du rapport porte sur les solutions destinées aux chargeurs.
- Message clé pour le RPTL : on choisit un TMS selon ses flux (volumes, modes de transport, réseau de transporteurs, international), son intégration à l'ERP/OMS/WMS et son niveau de service ; la logique du module reste la même quel que soit l'éditeur.

**Visuel suggéré :** Quadrant 2x2 (axes « Capacité d'exécution » / « Complétude de la vision »), les 4 Leaders confirmés dans leur cadran (sans position fine), un encart « à compléter » pour les autres, et la mention « Source : Gartner, Magic Quadrant for Transportation Management Systems, 30/03/2026 ; placements annoncés par les éditeurs ».

**Sources à citer à l'écran (note formateur) :**
- Gartner — Magic Quadrant for Transportation Management Systems (30 mars 2026), rapport payant.
- SAP : https://news.sap.com/2026/04/sap-a-leader-2026-gartner-magic-quadrant-tms/
- Oracle : https://www.oracle.com/news/announcement/oracle-named-a-leader-in-2026-gartner-magic-quadrant-for-transportation-management-systems-2026-04-15/
- Blue Yonder : https://blueyonder.com/blog/2026/blue-yonder-named-a-leader-in-the-gartner-magic-quadrant-for-tms
- Manhattan Associates : https://www.manh.com/about-us/newsroom/press-releases/manhattan-named-leader-2026-gartner-magic-quadrant-transportation-management-systems

**Note formateur :** À réactualiser à chaque nouvelle édition (annuelle). Les placements viennent de communiqués d'éditeurs : les recouper avec le rapport avant mise en ligne.

---

### Écran 14 — Quiz de validation (10 questions — 80% requis pour valider)
**Exemples de questions (à compléter jusqu'à 10) :**
1. (QCM) Quel est le rôle principal d'un TMS ?
2. (QCM) Quelle est la différence entre un TMS chargeur et un TMS transporteur ?
3. (Mise en situation) À quel moment le TMS reçoit-il la commande par rapport au WMS ?
4. (Association) Associer chaque étape (calcul du schéma, groupage, go chargement, récépissé) à sa nature (automatique / manuelle / échange avec le transporteur).
5. (QCM) Citer trois critères qui permettent de définir un schéma de transport.
6. (Vrai/Faux) Le TMS garantit que le transporteur livre à l'heure.
7. (Mise en situation) Un colis reste bloqué avant l'expédition dans le TMS : quelle donnée et quel statut du WMS vérifier ?
8. (QCM) Quel est l'avantage de la dématérialisation des documents de transport ?
9. (Mise en situation) Un même transporteur cause des retards répétés vers une destination : que faut-il faire au-delà du traitement colis par colis ?
10. (Association) Remettre dans l'ordre les statuts d'une commande : créée, sourcée, en cours de préparation, prête à expédier, expédiée en transit, livrée.

**Note formateur :** Feedback explicatif après chaque réponse. Seuil de réussite : 8/10 bonnes réponses minimum.

---

### Écran 15 — Synthèse et points clés
**Contenu clé (rappel en 6 puces) :**
- Le TMS optimise le transport des commandes : optimisation, traçabilité, automatisation.
- Le TMS chargeur sert l'expéditeur et dialogue avec le TMS transporteur.
- Il enchaîne des étapes alimentées par l'ERP/OMS, le WMS et le transporteur : certaines automatiques, d'autres manuelles.
- Le schéma de transport combine adresse, nature des produits, entrepôt expéditeur et délai, pour un compromis coût / délai / CO2.
- Les incidents se gèrent par des règles définies à l'avance ; le TMS informe, c'est le RPTL qui décide.
- OMS, WMS et TMS forment une chaîne : leur bonne coordination fait la fluidité de la logistique et la satisfaction client.

**Call-to-action :** Transition vers le module suivant. "Après l'exécution, voyons comment l'entreprise planifie et pilote tout cela : APS, ERP et WCS."

**Visuel suggéré :** Carte mentale récapitulative, bouton "Module suivant", lien de téléchargement du glossaire global.

---

## Glossaire
Les termes de ce module ont été ajoutés au [glossaire global](00_Glossaire_global.md) de la formation.

## Points ouverts / à valider avec toi
1. **Support** : le cours ICAM est court sur le TMS (11 pages). J'ai complété les enjeux/indicateurs (écran 9), la gestion des incidents (écran 10) et les limites (écran 11) avec des connaissances générales — à faire relire par un expert transport.
2. **Valeurs de CO2** du support (maritime, ferroviaire, routier, aérien) : unités non précisées et valeurs à vérifier (routier = ferroviaire) ; je ne les ai pas reprises (écran 7).
3. **Exemples réels** (écrans 1, 9, 10, 11) à fournir, anonymisés, sans nom de client, de projet ni de transporteur.
4. **Écran 13 (panorama)** : 4 Leaders du Magic Quadrant TMS 2026 issus de communiqués d'éditeurs ; autres placements à compléter avec le rapport complet. Faut-il aussi présenter des acteurs européens spécialisés transport ?
5. **Écran 12** : repris du cours (suivi d'une commande) ; il peut servir de synthèse transversale à réutiliser pour les modules suivants.
6. Les 10 questions du quiz sont à finaliser (réponses/options complètes + feedbacks).
7. **Planification du transport** : tournées, optimisation multi-points, appels d'offres et audit de factures de transport sont des fonctions courantes de TMS non détaillées dans le support — à ajouter si pertinent pour le public RPTL.
