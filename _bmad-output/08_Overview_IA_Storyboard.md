# Module e-learning — Overview IA (LLM, RAG, MCP, agents)
**Formation :** Responsable de Production Transport et Logistique (RPTL) — Bac+3
**Sous-titre du module :** Comprendre l'IA générative et ses briques : LLM, contexte, RAG, outils et MCP, agents — usages, risques et réflexe « vérifier avant d'agir »
**Durée cible :** 35–45 min
**Public :** Apprenants RPTL ou métiers proches (responsable entrepôt, affréteur, approvisionneur, coordinateur transport/logistique) — non-IT
**Statut :** 🔴 À créer — v1 storyboard **sans support de cours** (module 100 % à construire). Base : connaissances générales sur l'IA générative, fil rouge du parcours (réflexe « vérifier avant d'agir », rôle du RPTL, simulations et IA évoquées dans les modules APS et WCS) et recherche sur le marché. **Le domaine évolue très vite : tout contenu technique et tout nom d'outil sont à revérifier avant production.**

**Positionnement dans le curriculum :** Septième bloc du parcours, après les modules système (OMS, WMS, TMS, APS, ERP, WCS). Il répond à une promesse faite dès le module 1 : le réflexe **« vérifier avant d'agir »** se retravaille « de façon plus stratégique, face aux simulations IA ». Il prépare le module suivant sur les **bonnes pratiques de prompting**. Les exemples sont contextualisés métier transport/logistique, sans nom de client ni de projet ; seul l'écran « panorama du marché » cite des éditeurs (règle du projet, voir CLAUDE.md).

---

## Objectifs pédagogiques
À l'issue du module, l'apprenant sera capable de :
1. Distinguer IA, apprentissage automatique et IA générative, et reconnaître où l'IA est déjà présente dans la supply chain.
2. Expliquer simplement ce qu'est un LLM (modèle de langage) et pourquoi il peut produire des réponses fausses mais convaincantes.
3. Expliquer le rôle du contexte et du RAG pour ancrer les réponses sur des documents de l'entreprise.
4. Expliquer comment une IA peut être connectée à des outils et des systèmes (appel d'outils, MCP) et ce qu'est un agent.
5. Identifier des cas d'usage pertinents dans les systèmes du parcours (OMS, WMS, TMS, APS, ERP, WCS).
6. Identifier les risques (confidentialité, hallucinations, biais, responsabilité) et le cadre à respecter.
7. Appliquer le réflexe « vérifier avant d'agir » face à une production de l'IA et expliquer le rôle du RPTL, détenteur de la connaissance d'usage.
8. Avoir une vue du marché des plateformes d'IA.

---

## Plan du module (13 écrans + quiz + synthèse)

| # | Écran | Durée estimée |
|---|-------|----------------|
| 1 | Accroche / mise en situation | 1-2 min |
| 2 | Objectifs du module | 1 min |
| 3 | IA, apprentissage automatique, IA générative : de quoi parle-t-on ? | 3 min |
| 4 | Les LLM : comment ça marche, en simple | 4 min |
| 5 | Forces et limites d'un LLM | 3 min |
| 6 | Donner du contexte : fenêtre de contexte et RAG | 4 min |
| 7 | Connecter l'IA aux outils et aux systèmes : appel d'outils et MCP | 3 min |
| 8 | Les agents | 3 min |
| 9 | Où l'IA s'insère dans les systèmes du parcours | 3 min |
| 10 | Risques et cadre d'usage | 3 min |
| 11 | Vérifier avant d'agir — face à une production de l'IA | 3 min |
| 12 | Le rôle du RPTL : détenteur de la connaissance d'usage | 2 min |
| 13 | Panorama du marché des plateformes d'IA | 3 min |
| 14 | Quiz de validation (10 questions, 80% requis) | 5 min |
| 15 | Synthèse et points clés à retenir | 1-2 min |

---

### Écran 1 — Accroche / mise en situation
**Contenu clé :**
- Mise en situation narrative : "Un collègue colle un tableau d'incidents de livraison dans un assistant d'IA et obtient en dix secondes une synthèse claire et professionnelle… qui attribue la plupart des retards à une cause que personne n'a jamais observée. Le texte est convaincant. Doit-on l'envoyer à la direction ?"
- Teaser : ce module donne les repères pour comprendre ce que fait vraiment une IA générative, ce qu'elle ne fait pas, et comment l'utiliser sans perdre le contrôle.

**Visuel suggéré :** Un tableau de données qui entre dans une boîte « IA » et en ressort sous forme de texte fluide, avec une loupe sur un chiffre douteux.

**Note formateur :** Ancrer l'intérêt — c'est un outil déjà utilisé dans beaucoup d'équipes ; l'enjeu est de l'utiliser bien et de savoir le contrôler.

**[Exemple réel à intégrer]** — un cas vécu d'usage d'un assistant d'IA au travail (bon usage ou erreur évitée), anonymisé.

---

### Écran 2 — Objectifs du module
**Contenu clé :** Reprendre les objectifs pédagogiques ci-dessus sous forme de bullet points visuels (icônes).

**Visuel suggéré :** 8 pictos (définitions / LLM / limites / contexte et RAG / outils, MCP et agents / usages dans les systèmes / risques / vérifier et rôle du RPTL).

---

### Écran 3 — IA, apprentissage automatique, IA générative : de quoi parle-t-on ?
**Contenu clé :**
- **Intelligence artificielle (IA)** : ensemble de techniques permettant à une machine d'accomplir des tâches associées à l'intelligence humaine (prévoir, classer, comprendre, décider, générer).
- **Apprentissage automatique** (*machine learning*) : l'IA **apprend à partir de données** plutôt que d'être programmée règle par règle. Déjà présent dans la supply chain : **prévision de la demande** (APS), **estimation d'heures d'arrivée** (TMS), **maintenance prédictive** et **vision** (WCS).
- **IA générative** : IA capable de **produire du contenu** (texte, image, code, tableau) à partir d'une consigne. C'est elle qui explique l'essor récent des assistants.
- Deux familles d'usage, à ne pas confondre :
  - l'IA « **prédictive** » (chiffres, scores, alertes) intégrée dans les logiciels métier ;
  - l'IA « **générative** » (texte, synthèses, rédaction) utilisée via un assistant ou intégrée à un outil.
- Ce module se concentre sur l'IA générative et ses briques.

**Visuel suggéré :** Trois cercles imbriqués (IA ⊃ apprentissage automatique ⊃ IA générative) avec un exemple logistique dans chacun.

---

### Écran 4 — Les LLM : comment ça marche, en simple
**Contenu clé :**
- Un **LLM** (*Large Language Model*, grand modèle de langage) est un modèle entraîné sur d'énormes quantités de textes pour **prédire la suite la plus probable** d'un texte. Répondre à une question revient à **construire une réponse mot après mot** (plus exactement « jeton » après jeton, un *token* étant un morceau de mot).
- **Entraînement** : le modèle apprend des régularités du langage et de nombreuses connaissances générales ; il s'arrête à une **date de connaissance** : il ignore ce qui s'est passé après, et **tout ce qui est propre à l'entreprise** (ses procédures, ses contrats, ses données).
- **Fenêtre de contexte** : la quantité de texte que le modèle peut « avoir sous les yeux » à un instant donné (consigne, documents fournis, conversation). Ce qui n'y est pas, il ne le voit pas.
- **Variabilité** : une même question peut donner des réponses légèrement différentes ; le modèle n'est pas une calculatrice déterministe.
- Message clé : un LLM est un **générateur de texte plausible**, pas une base de faits vérifiés.

**Visuel suggéré :** Une phrase qui se complète jeton par jeton, avec des probabilités affichées sous chaque mot possible.

**Note formateur :** Rester volontairement simple : l'objectif est de comprendre pourquoi le modèle peut se tromper, pas de former à l'architecture.

---

### Écran 5 — Forces et limites d'un LLM
**Contenu clé :**
- **Forces** : reformuler, résumer, traduire, structurer (transformer un texte en tableau), proposer des plans et des idées, expliquer, générer des exemples, relire.
- **Limites** :
  - **Hallucination** : réponse fausse mais présentée avec aplomb (chiffre inventé, source inexistante, règle qui n'existe pas).
  - **Calculs et données exactes** : un LLM ne calcule pas fiablement ; il vaut mieux lui faire appeler un outil de calcul ou un tableur.
  - **Connaissance datée et générale** : il ne connaît ni vos règles, ni votre situation du jour, sauf si on les lui fournit.
  - **Biais** : il reproduit des biais présents dans ses données d'entraînement.
  - **Sensibilité à la formulation** : deux consignes proches peuvent donner des résultats différents.
  - **Confidentialité** : ce que l'on saisit peut sortir du périmètre de l'entreprise selon l'outil (écran 10).
- Message clé : plus une erreur est **plausible**, plus elle est dangereuse. D'où le réflexe « vérifier avant d'agir » (écran 11).

**Visuel suggéré :** Deux colonnes « À quoi il sert bien / Où il se trompe » avec des exemples logistiques (reformuler un mail vs calculer un taux de service).

---

### Écran 6 — Donner du contexte : fenêtre de contexte et RAG
**Contenu clé :**
- La première façon d'améliorer une réponse : **fournir le contexte** dans la consigne (extrait de procédure, tableau de données, règle métier).
- Quand les documents sont nombreux ou volumineux, on utilise le **RAG** (*Retrieval-Augmented Generation*, génération augmentée par la recherche) :
  1. La question est posée.
  2. Un système **recherche** dans une base de documents de l'entreprise les passages les plus pertinents.
  3. Ces passages sont **ajoutés au contexte** du modèle.
  4. Le modèle **répond en s'appuyant sur ces passages** et peut citer ses sources.
- Exemples logistiques : interroger les **procédures d'entrepôt**, les **conditions des contrats transporteurs**, un **glossaire** ou la **documentation d'un système**.
- Intérêts : réponses **ancrées** sur des sources de l'entreprise, **mises à jour** sans réentraîner le modèle, **vérifiables** (on peut ouvrir la source).
- Limites : la réponse ne vaut que si les documents sont **à jour, complets et bien découpés** ; la recherche peut ramener le mauvais passage.

**Visuel suggéré :** Schéma en 4 étapes (question → recherche dans les documents → passages ajoutés → réponse avec sources).

**[Exemple réel à intégrer]** — un cas d'usage d'interrogation de procédures ou de contrats par l'IA, avec la vérification de la source (anonymisé).

---

### Écran 7 — Connecter l'IA aux outils et aux systèmes : appel d'outils et MCP
**Contenu clé :**
- Un LLM seul ne fait que produire du texte. Pour **agir ou lire des données réelles**, on lui donne des **outils** : consulter une base, interroger un système, lancer un calcul, envoyer un message. C'est l'**appel d'outils** (*tool use* ou *function calling*) : le modèle demande l'exécution d'un outil, le système l'exécute, le résultat revient dans la conversation.
- **MCP** (*Model Context Protocol*) : **standard ouvert** qui permet de connecter des modèles d'IA à des **outils et des sources de données** de façon uniforme (un « connecteur » standard au lieu d'un développement sur mesure pour chaque couple modèle/outil). Il a été confié en décembre 2025 à une fondation neutre (*Agentic AI Foundation*, hébergée par la Linux Foundation).
- Exemples logistiques (illustratifs) : lecture du statut d'une commande dans l'OMS, du stock d'un emplacement dans le WMS, du suivi d'un colis dans le TMS.
- Points d'attention : **droits d'accès** (que peut lire ou faire l'IA ?), **lecture seule ou modification**, **traçabilité** des appels, **validation humaine** avant toute action sensible.

**Visuel suggéré :** Un LLM au centre relié par des « prises » standard à des outils (système de commandes, entrepôt, transport, documents).

**Note formateur :** Le sigle « MCP » correspond au point « MCD » du plan de curriculum initial (à confirmer). Expliquer l'idée du connecteur standard plutôt que le détail technique.

---

### Écran 8 — Les agents
**Contenu clé :**
- Un **agent** est un système où un modèle d'IA, à partir d'un **objectif**, **enchaîne des étapes** : il planifie, utilise des outils, observe les résultats, ajuste, puis conclut — avec plus ou moins d'**autonomie**.
- Boucle type : **objectif → plan → appel d'un outil → observation du résultat → vérification → nouvelle étape ou réponse**.
- **Niveaux d'autonomie** (du plus prudent au plus autonome) : l'agent **propose** et l'humain décide ; l'agent **prépare** et l'humain valide avant envoi ; l'agent **exécute** dans un périmètre limité avec contrôle a posteriori.
- **Humain dans la boucle** : une validation humaine est placée aux étapes sensibles (envoi à un client, modification d'une commande, engagement financier).
- Exemple logistique (illustratif) : un agent qui, face à un retard de livraison, lit le statut de la commande, regarde les règles d'exception, **prépare** un message au transporteur et un message au client, puis **demande validation** avant envoi.
- Atouts : gain de temps sur les tâches répétitives et multi-étapes. Risques : erreurs qui s'enchaînent, actions non voulues, difficulté à tracer — d'où des **périmètres limités**, des **validations** et un **journal** des actions.

**Visuel suggéré :** Boucle à 6 étapes avec des curseurs d'autonomie (proposer / préparer / exécuter) et des points de validation humaine.

**[Exemple réel à intégrer]** — un cas d'automatisation assistée par IA avec validation humaine, ou une erreur évitée grâce à elle (anonymisé).

---

### Écran 9 — Où l'IA s'insère dans les systèmes du parcours
**Contenu clé :**
- Lecture par système (exemples illustratifs, à adapter) :

| Système | Exemples d'usage de l'IA |
|---|---|
| **APS** | Prévision de la demande plus fine, détection d'écarts, scénarios (what-if) |
| **OMS** | Aide à la gestion des exceptions (analyse, proposition de repli, message client), prévision de délai |
| **WMS** | Optimisation de l'emplacement des articles, estimation de charge, assistance aux opérateurs |
| **WCS** | Maintenance prédictive des équipements, vision par ordinateur pour la lecture et le contrôle |
| **TMS** | Estimation d'heure d'arrivée, détection d'anomalies d'itinéraire, aide à la sélection de transporteur |
| **ERP** | Rapprochement automatique de factures, détection d'écarts, aide à la saisie |
| **Tous** | Assistant de recherche dans la documentation, synthèse d'incidents, rédaction de procédures |

- Deux façons d'avoir de l'IA : **intégrée par l'éditeur** dans le logiciel, ou **ajoutée** par l'entreprise (assistant, RAG, agent branché via des connecteurs).
- Dans les deux cas, les principes du parcours restent valables : **données fiables**, **règles métier maîtrisées**, **validation humaine**.

**Visuel suggéré :** Les six systèmes du parcours en cercle avec, pour chacun, une bulle « usage de l'IA ».

---

### Écran 10 — Risques et cadre d'usage
**Contenu clé :**
- **Confidentialité** : ne pas saisir dans un outil non autorisé des données confidentielles (clients, tarifs, contrats, données personnelles). Règle de bon sens du parcours : **anonymiser** (pas de nom de client, de projet ni de prestataire dans une consigne).
- **Données personnelles** : le RGPD s'applique (salariés, clients, destinataires de colis).
- **Propriété intellectuelle** : attention aux contenus générés et aux documents fournis.
- **Fiabilité** : hallucinations, biais ; un résultat de l'IA n'est **jamais une source** en soi.
- **Responsabilité** : la personne qui utilise ou valide le résultat en reste **responsable**.
- **Sécurité** : une consigne cachée dans un document ou un message peut tenter de détourner l'IA (*injection de prompt*) ; un agent branché sur des systèmes doit avoir des droits **limités**.
- **Cadre** : règles internes de l'entreprise (charte d'usage, outils autorisés), RGPD, et règlement européen sur l'IA (*AI Act*), qui gradue les obligations selon le niveau de risque.
- Message clé : **utiliser l'IA dans le cadre prévu** par son entreprise ; en cas de doute, demander avant de saisir.

**Visuel suggéré :** Feu tricolore des données (vert : public ou anonymisé, orange : interne, rouge : confidentiel ou personnel) avec ce qu'on peut saisir dans quel type d'outil.

**Note formateur :** Les règles exactes dépendent de l'entreprise ; renvoyer à la charte interne. Relire les mentions réglementaires avant production.

---

### Écran 11 — Vérifier avant d'agir — face à une production de l'IA
**Contenu clé :**
- Rappel du réflexe transversal posé au module 1 et repris à chaque module : **vérifier avant d'agir**. Face à l'IA, il devient plus important encore, car **l'erreur est plausible**.
- **Grille de vérification** avant d'utiliser un résultat :
  1. **Source** : d'où vient l'information ? la source existe-t-elle et dit-elle bien cela ?
  2. **Chiffres** : recalculés ou recoupés avec le système de référence ?
  3. **Cohérence** : le résultat est-il compatible avec ce que je sais du terrain (règles, volumes, délais) ?
  4. **Test sur un cas connu** : donne-t-il la bonne réponse sur un exemple dont je connais la solution ?
  5. **Niveau d'impact** : plus la décision est lourde ou irréversible (engagement client, coût, sécurité), plus la vérification et la validation doivent être fortes.
- Court exercice : présenter une synthèse d'incidents générée par l'IA avec une cause suspecte et demander à l'apprenant de choisir les vérifications à faire avant de l'envoyer.
- Lien avec les modules précédents : une simulation (APS), un diagnostic (WCS) ou une recommandation (OMS) produits avec l'IA restent des **hypothèses à vérifier**.

**Visuel suggéré :** Grille de vérification en 5 cases, avec mini-cas interactif (QCM court), distinct du quiz final.

**[Exemple réel à intégrer]** — un cas où une vérification a permis de détecter une erreur de l'IA avant qu'elle ne produise un effet (anonymisé).

---

### Écran 12 — Le rôle du RPTL : détenteur de la connaissance d'usage
**Contenu clé :**
- Le RPTL est **détenteur de la connaissance par l'usage** et de l'optimisation des règles métier en exploitation normale. C'est exactement ce que l'IA n'a pas : elle ne connaît ni les règles de son entrepôt, ni ses cas limites, ni ses pics.
- Dans un **projet IA** (assistant, RAG, agent, fonction intégrée à un système) :
  - il **fournit les règles et les exemples** (cas normaux, cas limites, bonnes et mauvaises réponses) ;
  - il **teste** les résultats avec des cas réels et des situations de pointe, avant et après la mise en service ;
  - il **valide ou refuse** les résultats : c'est lui qui sait si une réponse est réaliste ;
  - il **fait évoluer les règles** à partir de ce que l'usage révèle.
- Même logique que pour un projet de WMS, de TMS ou de WCS (modules précédents) : **le métier fournit les règles et teste après l'installation**.
- Message clé : l'IA n'enlève pas la valeur du terrain, elle la rend **plus déterminante**.

**Visuel suggéré :** Cycle « règles et exemples du métier → IA → résultats → test et validation par le métier → règles améliorées ».

---

### Écran 13 — Panorama du marché des plateformes d'IA
**Contenu clé :**
- Rappel du principe d'un quadrant d'analystes (voir modules précédents).
- Pour les **plateformes de développement d'applications d'IA**, **Gartner publie un Magic Quadrant** (édition inaugurale fin 2025 ; mise à jour intermédiaire publiée le **27 avril 2026**). Il évalue des fournisseurs de plateformes qui permettent de **construire** des applications d'IA (et non les assistants grand public).
- Fournisseurs cités dans la mise à jour : **Alibaba Cloud, AWS, CoreWeave, Google, IBM, LangChain, Microsoft, OpenAI, Palantir, Tencent Cloud, Volcano Engine**.
- Placements vérifiés (annoncés par les éditeurs concernés) : **Google** se déclare Leader dans la mise à jour 2026 ; selon une source de synthèse, l'édition inaugurale de novembre 2025 plaçait **AWS, Google, IBM et Microsoft** en Leaders.
- ⚠️ **À confirmer avant publication** : la liste complète des Leaders et les placements des autres fournisseurs ne sont accessibles que dans le rapport payant ; ce marché évolue **très vite**, les noms et les positions peuvent changer en quelques mois.
- À distinguer (autres familles) : **fournisseurs de modèles et d'assistants**, **IA intégrée dans les logiciels métier** (déjà vue dans les modules système) et **outils spécialisés** (par exemple agents de programmation, plateformes de conversation, évalués dans d'autres rapports).
- Message clé pour le RPTL : on ne choisit pas « la meilleure IA » dans l'absolu ; on choisit **l'outil autorisé par l'entreprise**, adapté au cas d'usage, au niveau de confidentialité et à l'intégration avec les systèmes.

**Visuel suggéré :** Quadrant 2x2 (axes « Capacité d'exécution » / « Complétude de la vision ») avec les fournisseurs cités sans position fine, un encart « à compléter », et la mention « Source : Gartner, Magic Quadrant for AI Application Development Platforms (mise à jour du 27/04/2026) ; placements annoncés par les éditeurs ».

**Sources à citer à l'écran (note formateur) :**
- Gartner — Magic Quadrant for AI Application Development Platforms: Midcycle Update : https://www.gartner.com/en/documents/7774053
- Google : https://cloud.google.com/blog/products/ai-machine-learning/google-named-a-leader-in-the-gartner-magic-quadrant
- Gartner Peer Insights — AI Application Development Platforms : https://www.gartner.com/reviews/market/ai-application-development-platforms
- Annonce de la mise en place du standard MCP sous gouvernance neutre : https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/

**Note formateur :** À réactualiser **au minimum tous les six mois**. Les placements viennent de communiqués d'éditeurs : les recouper avec le rapport avant mise en ligne.

---

### Écran 14 — Quiz de validation (10 questions — 80% requis pour valider)
**Exemples de questions (à compléter jusqu'à 10) :**
1. (QCM) Quelle est la différence entre une IA « prédictive » intégrée à un logiciel et une IA générative ?
2. (QCM) Que fait fondamentalement un LLM lorsqu'il répond à une question ?
3. (Vrai/Faux) Un LLM connaît les procédures internes de l'entreprise.
4. (QCM) Qu'est-ce qu'une hallucination ? Donner un exemple logistique.
5. (QCM) Que fait un système RAG avant que le modèle ne réponde ?
6. (Association) Associer chaque brique (LLM, RAG, appel d'outils / MCP, agent) à son rôle.
7. (Mise en situation) Un agent propose d'envoyer lui-même un message à un client : à quel niveau d'autonomie placer la validation et pourquoi ?
8. (QCM) Citer deux données qu'il ne faut pas saisir dans un outil d'IA non autorisé.
9. (Mise en situation) Une synthèse générée par l'IA donne un taux de service précis : citer deux vérifications avant de l'utiliser.
10. (Mise en situation) Dans un projet d'assistant interne, quel est le rôle du RPTL ?

**Note formateur :** Feedback explicatif après chaque réponse. Seuil de réussite : 8/10 bonnes réponses minimum.

---

### Écran 15 — Synthèse et points clés
**Contenu clé (rappel en 6 puces) :**
- L'IA couvre l'IA prédictive intégrée aux logiciels et l'IA générative ; ce module porte sur la seconde.
- Un LLM prédit une suite de texte plausible : il peut halluciner, ne calcule pas fiablement et ignore le contexte de l'entreprise.
- Le contexte et le RAG ancrent les réponses sur des documents de l'entreprise ; l'appel d'outils et MCP connectent l'IA aux systèmes.
- Un agent enchaîne des étapes avec plus ou moins d'autonomie ; la validation humaine se place aux étapes sensibles.
- Confidentialité, RGPD, responsabilité : utiliser l'IA dans le cadre autorisé et anonymiser.
- « Vérifier avant d'agir » : source, chiffres, cohérence, cas connu, niveau d'impact ; le RPTL, détenteur de la connaissance d'usage, fournit les règles et teste.

**Call-to-action :** Transition vers le module suivant. "Voyons maintenant comment bien parler à l'IA : les bonnes pratiques de prompting."

**Visuel suggéré :** Carte mentale récapitulative, bouton "Module suivant", lien de téléchargement du glossaire global.

---

## Glossaire
Les termes de ce module ont été ajoutés au [glossaire global](00_Glossaire_global.md) de la formation.

## Points ouverts / à valider avec toi
1. **Aucun support** : tout le contenu est construit de zéro ; à faire relire par un expert IA. Le domaine évolue vite : toute affirmation technique et tout nom d'outil sont à revérifier à la date de production.
2. **« MCD »** dans le plan initial (LLM/MCD/RAG/Agent) : interprété comme **MCP** (Model Context Protocol). À confirmer.
3. **Niveau de détail** : volontairement non technique. Faut-il aller plus loin (fonctionnement d'un modèle, coûts, choix d'un modèle) ou rester sur la compréhension et les usages ?
4. **Exemples réels** (écrans 1, 6, 8, 11) à fournir, anonymisés, sans nom de client ni de projet.
5. **Écran 10** : les mentions réglementaires (RGPD, règlement européen sur l'IA) et la notion de charte interne sont à faire relire par un juriste ou le responsable conformité.
6. **Écran 13 (panorama)** : le Magic Quadrant concerne les plateformes de développement d'IA, pas les assistants grand public ; placements issus de communiqués d'éditeurs ; faut-il aussi présenter les fournisseurs de modèles et d'assistants (autre source à identifier) ?
7. Les 10 questions du quiz sont à finaliser (réponses/options complètes + feedbacks).
