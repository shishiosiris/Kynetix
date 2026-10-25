# Intent Doc — Formation e-learning Supply Chain & IT (Bac+3 / Bac+5)

Source unique : session de brainstorming (mode Facilitator), 2026-08-21 → 2026-08-25.
Objectif de session : faire émerger l'architecture du curriculum (modules, progression Bac+3 → Bac+5, points communs vs différenciants).

## 1. Jobs-to-be-Done

### Bac+3 — job principal
Décrocher/réussir un premier poste opérationnel (agent de transit, chef d'équipe logistique, responsable entrepôt, affréteur transport, approvisionneur, supply planner, acheteur transport, coordinateur transport/logistique) qui utilise TMS/WMS/APS et autres systèmes SC.

Pour briller dans ce poste, il faut : (1) comprendre et maîtriser les concepts de chaque système SC, (2) savoir les configurer/optimiser grâce à l'IA (prompting, IDE, LLM, création d'agents, automatisation). Le job IA associé : créer des agents pour automatiser les tâches sans valeur ajoutée, et générer des rapports/KPI en réduisant le temps de collecte manuelle au profit du temps d'analyse. Job métier plus large : proposer des améliorations de gestes métier en anticipant l'impact sur les systèmes IT (risques si mal anticipé : perte de traçabilité, écarts de stock/facturation, blocage de vagues de préparation).

### Bac+5 — 3 jobs (niveau stratégique, pas opérationnel)
Postes cibles : consultant supply chain, chef de projet digital, demand planner, supply chain manager, responsable amélioration continue (référentiel officiel : 5 blocs de compétences couvrant stratégie internationale, transport durable, chaîne logistique globale, management RSE/parties prenantes, pilotage de performance).

1. **Concevoir/transformer** — concevoir de nouveaux schémas supply chain, optimiser la performance globale, accompagner les projets de transformation digitale avec une vue transverse des écosystèmes IT pour comprendre et challenger les équipes qui réalisent les solutions (bascule possible côté IT, ex. product manager).
2. **Arbitrer/piloter côté métier face aux ESN** — porteur des activités/objectifs stratégiques confiés à des ESN ; doit repérer qualité, valeur délivrée, alertes et limites d'une solution par rapport au métier/persona visé. Usage IA dans la rédaction de cahiers des charges (gain de temps, cadrage des exigences, analyse réponses fournisseurs, simulation ROI, aide au choix CODIR).
3. **Simuler et optimiser à grande échelle via l'IA** — traiter un plus grand volume d'information, générer des simulations de changement (plan de distribution, d'approvisionnement, de production, de transport) pour les optimiser ; concevoir des chaînes de valeur optimisées à présenter en options à un CODIR.

**Anti-job Bac+5 critique** : ne jamais accepter une simulation IA sans la challenger — un manque de vérification métier expose à des solutions non viables, un ROI non atteint, une dérive budgétaire non identifiée en amont (exemples memlog : planning d'entrepôt trop juste sans jalon de contrôle ; étude d'impact oubliant contraintes réglementaires/événements externes).

**Lien Bac+3 → Bac+5** : la plupart des Bac+5 auront suivi le Bac+3 (socle système déjà acquis). Les deux compétences de vérification (« anticiper l'impact système » côté Bac+3 vs « vérifier une simulation IA avant CODIR » côté Bac+5) sont de niveaux de recul différents mais se recoupent sur un même principe transversal : **vérifier avant d'agir**.

## 2. Principes pédagogiques transversaux (actés)

- **Vérifier avant d'agir** : réflexe à faire pratiquer via des exercices applicatifs progressifs tout au long du parcours — pas un discours théorique isolé.
- **Socle vs éditeur** : séparer strictement (a) le SOCLE COMMUN — rôle, responsabilité, logique d'un type de système (un WMS ou un OMS sert le même objectif quel que soit l'éditeur), stable dans le temps — de (b) la COUCHE ÉDITEUR/VERSION — approche et promesse propres à chaque éditeur/version (ex. Manhattan on-premise vs Active ; Hardis Reflex/Reflex Web). La couche éditeur reste informative (faire savoir que plusieurs acteurs/versions existent, avec leurs particularités), pas un approfondissement logiciel par logiciel.
- **Pas d'outil précis** : l'application ne forme jamais sur un logiciel spécifique (pas de formation "sur Manhattan" ou "sur SAP"). Elle donne les clés pour comprendre ce que propose chaque TYPE de système. Exemples/exercices contextualisés par des gestes métier communs à toutes les solutions d'un même type, sans jamais requérir un outil précis. La maîtrise d'un outil spécifique s'apprend sur le tas en entreprise — hors scope de l'app.
- **Ancrage alternance** : tous les étudiants sont en alternance (en entreprise en parallèle). L'e-learning n'a pas besoin de simuler seul l'expérience terrain : les exemples de formation peuvent être issus du vécu des étudiants, et les étudiants peuvent mettre en pratique directement en entreprise — articulation formation/terrain réel.
- **Pattern IA système par système, non générique** : le canevas collecte → simulation/prévision → optimisation/décision (illustré en détail sur le TMS dans le memlog) ne se transpose pas automatiquement d'un système à l'autre. Chaque système (TMS/OMS/WMS/APS/ERP/WCS…) doit être traité unitairement avec ses propres exercices, exemples et cas d'usage IA — pas de contenu générique dupliqué.
- **Séquencement Bac+3** : modules prompting/agentique placés en dernier, une fois le socle métier/système acquis ; prompting expliqué sans prérequis technique (public débutant).

## 3. Décisions de cadrage critiques

- **Équité entre systèmes SC** : le TMS n'est qu'un exemple illustratif du brief initial, pas un focus exclusif. La formation couvre l'écosystème complet sur un même pied d'égalité — TMS, OMS, WMS, APS, ERP, WCS, etc. Le canevas IA identifié sur le TMS doit être décliné de façon équivalente (mais pas identique) sur chaque système.
- **Accès hiérarchique Bac+3/Bac+5 (asymétrique et strict)** : le Bac+3 n'a pas accès au contenu spécifique Bac+5. Le Bac+5 a accès à l'intégralité du contenu Bac+3 (hérite de tout, rien n'est masqué dans l'autre sens).
- **Aiguillage de parcours** : l'app doit gérer deux parcours Bac+5 — (a) sans le socle Bac+3 : reprise des bases avant le contenu Bac+5 ; (b) avec le socle déjà acquis : accès direct au contenu Bac+5. Nécessite un mécanisme de diagnostic/placement ou de choix de parcours.
- **Éditeurs nommés autorisés** : les éditeurs peuvent apparaître nommément (ex. Blue Yonder, Manhattan, Hardis, Fluent Commerce, Salesforce). Les évaluations Gartner (Magic Quadrant) sont une source possible pour cartographier l'écosystème éditeurs par système, avec une mécanique interactive envisagée (cliquer/creuser par quadrant) — prototype d'un pattern généralisable « socle stable + couche vivante à la demande » (ex. transposable à la cartographie ESN/3PL-4PL-5PL).
- **Actualisation du contenu marché/éditeurs** : nécessité de prévoir des releases futures de l'app ou une veille IA notifiant les changements marché — mais le risque d'obsolescence réel ne concerne que la couche éditeur/marché (rare, releases majeures SaaS), pas le socle conceptuel qui évolue peu.

## 4. Risques et mitigations (pre-mortem)

| Risque | Statut | Mitigation retenue |
|---|---|---|
| Obsolescence du contenu | Désamorcé | Socle conceptuel stable par nature ; seule la couche éditeur/marché varie (releases majeures, rares) — risque circonscrit, à couvrir par veille/releases app |
| Formation perçue comme centrée sur un outil précis (ex. TMS) | Désamorcé par cadrage | Équité stricte entre systèmes SC (cf. section 3) ; jamais de formation sur un logiciel précis |
| **Adhésion de l'école (risque business critique)** | **Non désamorcé — traité en priorité produit** | L'école à qui l'application doit être vendue en premier pourrait ne pas adhérer au programme. **Mitigation retenue : produire un plan de formation illustré d'exemples concrets et le faire réviser avec le représentant de l'école, AVANT tout travail UX/app.** (Option alternative envisagée mais secondaire : V0 applicative pour valider l'orientation en avance de phase.) |

## 5. Hors-scope noté

**Modèle de facturation / licences** : sujet business model émergent, non formalisé pendant la session. Question ouverte : durée d'accès à la plateforme (alignée sur la durée de formation, 1 à 2 ans max, potentiellement plus court), et modèle de facturation par persona — (a) étudiant individuel payant une licence d'accès, ou (b) centre de formation achetant un droit d'accès global pour un volume de licences actives sur une durée contractuelle. **Non traité dans cette session, à instruire séparément.**

## 6. Synthèse de convergence (6 clusters actés)

1. Programme Bac+3 (socle)
2. Programme Bac+5 (stratégique — 3 jobs + IA appliquée système par système)
3. Principes pédagogiques transversaux (section 2 ci-dessus)
4. Mécaniques produit émergentes (aiguillage de parcours, accès hiérarchique, Magic Quadrant interactif)
5. Risques & mitigations pre-mortem (section 4 ci-dessus)
6. Hors-scope : modèle de facturation/licences (section 5 ci-dessus)

**Insights finaux à conserver comme fil directeur** :
- Bac+3 vs Bac+5 = changement de niveau de recul, pas de volume de contenu ; les deux se rejoignent sur « vérifier avant d'agir ».
- Les exemples pédagogiques les plus forts sont des échecs de jugement métier que l'IA aide à éviter/détecter — l'IA n'est jamais présentée comme la cause première de l'échec.
- Le canevas collecte → simulation → décision, et la boucle « IA propose / humain valide / IA exécute », forment une structure récurrente candidate à devenir LE schéma pédagogique transversal du volet Bac+5.

## 7. Livrable prioritaire décidé (prochaine étape produit)

**Avant tout travail UX ou développement d'application** : produire un plan de formation illustré d'exemples concrets, destiné à une revue de validation avec le représentant de l'école partenaire. C'est la mitigation directe du risque business critique identifié en section 4.

*Note de portée : le détail approfondi des cas d'usage IA par système (TMS, WMS, modélisation de flux, prompting, etc.) n'est pas repris ici — il reste disponible dans le memlog source (`.memlog.md`) pour instruction ultérieure du contenu pédagogique détaillé.*
