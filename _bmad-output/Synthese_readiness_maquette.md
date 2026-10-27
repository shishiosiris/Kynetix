# Synthèse de readiness de la maquette — point de départ pour l'échange avec l'expert UX/UI

**Statut :** document interne (ne pas diffuser à l'établissement)
**Date :** 27 octobre 2026
**Objet :** dire ce qui est prêt, ce qui manque et ce qu'il faut décider pour lancer la maquette de la formation en ligne.

---

## 1. Verdict

> **La matière suffit pour une maquette cliquable. Elle ne suffit pas pour une version publiable.**

Le contenu pédagogique est largement là. Ce qui manque est **ce qui rend une maquette vivante** : quiz jouables, visuels, textes d'écran courts, données de démonstration, et quelques décisions de produit.

---

## 2. Deux objectifs de maquette

1. **La page « plan de formation »** destinée à l'établissement : un effet « Wahou » et un impact immédiat (document : `ecole/Plan_de_formation_Bac3_Bac5.md`, prêt à recevoir les guidelines UX/UI).
2. **Le prototype d'expérience d'apprentissage**, resserré sur **un seul système, l'OMS**, pour valider l'expérience produit sans attendre que tout le contenu soit prêt.

---

## 3. Ce qui existe

| Élément | Quantité | Où |
|---|---|---|
| Modules rédigés (storyboards) | **21** : 9 Bac+3, 12 Bac+5 | racine du dépôt et `bac5/` |
| Écrans détaillés | **306** (contenu clé, visuel suggéré, note formateur) | idem |
| Questions de quiz listées | **210** (10 par module) | idem |
| Glossaire | **186 termes**, 21 sections | `00_Glossaire_global.md` |
| Schémas produits | **1** (plan d'entrepôt mécanisé) | `schemas/` |
| Plan de formation pour l'établissement | **1** (v1) | `ecole/` |
| Plan du parcours Bac+5 | **1** | `bac5/B5-00_Plan_du_parcours.md` |
| Cas réel anonymisé | 1 cas fil rouge (module 01) | module 01 |

*Les storyboards Bac+5 sont dans la PR #16 (en attente de fusion).*

---

## 4. Niveau de readiness par élément

Légende : **Prêt** · **Partiel** · **Manquant** · **À trancher**

| Élément | Niveau | Détail |
|---|---|---|
| Contenu pédagogique du module OMS (Bac+3) | **Prêt** | 15 écrans, objectifs, synthèse, glossaire |
| Contenu pédagogique des 21 modules | **Prêt (v1)** | à relire par des experts ; modules Bac+5 sans support de cours |
| Plan de formation pour l'établissement | **Prêt (v1)** | structure validée, annexe de mise en page incluse |
| Glossaire | **Prêt** | exportable en tableau |
| Quiz jouables | **Manquant** | questions listées, **sans options, sans bonnes réponses, sans feedbacks** |
| Rattachement des questions aux objectifs | **Partiel** | fait au Bac+5, **absent au Bac+3** |
| Test de fin de Bac+3 (aiguillage vers le Bac+5) | **Manquant** | mécanique du brief, non rédigée |
| Réponses libres : grille de correction | **Partiel** | « éléments attendus » rédigés au Bac+5 ; **qui corrige ?** non décidé |
| Visuels | **Partiel** | **1 produit** sur 284 suggérés ; une dizaine suffit pour la maquette |
| Textes d'écran (microcopie) | **Partiel** | les storyboards sont des notes de conception, pas du texte à l'écran |
| Exemples réels | **Partiel** | **64 emplacements** restent à renseigner (34 au Bac+3, 30 au Bac+5) ; exemples fictifs signalés possibles pour la maquette |
| Données de démonstration (progression, cohorte) | **Manquant** | à créer, fictives |
| Modèle de parcours (états d'un module, règles) | **À trancher** | voir §7 |
| Persona et nom du parcours | **À trancher** | « RPTL » dans les storyboards Bac+3, retiré du plan de formation |
| Charte graphique et marque | **À définir avec l'expert** | |

---

## 5. Les mécaniques à représenter dans la maquette (décidées dans le brief)

- **Application web responsive**, utilisée surtout sur ordinateur portable (Windows et Mac).
- **Reprise de session à tout moment, depuis n'importe quelle machine** (état conservé côté serveur).
- **Deux modes d'usage** : cours itératifs avec contrôle par module (à la carte, évolution prévue) et parcours complet avec contrôle global.
- **Évaluation à deux niveaux** : par module et globale ; QCM et réponses libres.
- **Diagnostic de remédiation** : après tout test, indiquer précisément les points non maîtrisés et orienter vers les modules à réviser.
- **Aiguillage Bac+3 → Bac+5** : déclaration d'un Bac+3 équivalent, test de fin de Bac+3 seul, puis accès direct ou revalidation ciblée.
- **Ordre libre** pour la validation d'un niveau, avec un ordre recommandé.
- **Retours** : à la fin de chaque module et de chaque parcours.
- **Suivi de cohorte pour l'établissement** : taux de complétion et progression.
- **Architecture ouverte** à un troisième public (apprenant autonome, accès modulaire) sans refonte.

Hors périmètre de la plateforme : la mise en pratique des acquis en entreprise (alternance).

---

## 6. Périmètres de maquette proposés

### Option A — Minimale
- **Page du plan de formation** (effet « Wahou »).
- **Module OMS complet** : chaque type d'écran (accroche, notion, schéma, étude de cas, quiz, résultat avec diagnostic, synthèse).
- **Vue parcours** et **vue progression**.
- **Vue de suivi de cohorte** pour l'établissement (données fictives).

### Option B — Élargie
Option A, plus :
- **L'aiguillage Bac+3 → Bac+5** (test de fin de Bac+3 simulé).
- **Un module Bac+5** (par exemple B5-03 OMS) pour montrer la montée en niveau.
- **La vue « à la carte »** (modules isolés).

**Recommandation :** commencer par l'option A, puis étendre.

---

## 7. Décisions à prendre avant l'échange avec l'expert UX/UI

| Décision | Options | Impact sur la maquette |
|---|---|---|
| **Persona et nom du parcours** | garder « RPTL » ou formulation large (« référent métier supply chain ») | textes d'écran, vocabulaire |
| **États d'un module** | par exemple : non commencé, en cours, validé, à revoir | indicateurs de progression |
| **Seuil de validation** | 80 % (actuel) pour tous les modules ? | résultats et diagnostic |
| **Correction des réponses libres** | enseignant, autocorrection guidée, ou aide d'une IA validée par un humain | écran de résultat |
| **Ordre recommandé** | un ordre unique, ou suggestions personnalisées | navigation |
| **Périmètre de la maquette** | option A ou B | charge de production du contenu |
| **Branding** | marque du produit, place du nom de l'établissement | tout le design |

---

## 8. Questions à poser à l'expert UX/UI

1. **Direction visuelle :** quel univers pour un public d'étudiants et pour des décideurs d'école ? sobre et expert, ou plus audacieux ?
2. **Effet « Wahou » :** quelle part d'animation et de visualisation ? quel budget de mouvement raisonnable ?
3. **Composants clés :** cartes de modules, frise de parcours, quiz, écran de réponse libre, **écran de diagnostic** (radar, liste de modules à revoir), tableau de suivi de cohorte.
4. **Navigation du contenu :** une succession d'écrans courts (storyboard) ou des pages longues ? comment présenter l'étude de cas ?
5. **Schémas et visuels :** style commun pour les 284 visuels suggérés ; priorité aux schémas animés ou statiques ?
6. **Accessibilité :** niveau visé, lisibilité des tableaux, contraste.
7. **Responsive :** comportement sur petit écran de contenus denses (tableaux, matrices).
8. **Reprise de session :** comment la rendre visible et rassurante ?
9. **Ton éditorial :** place de la microcopie ; la voix du produit.
10. **Outils et livrables :** maquette cliquable, bibliothèque de composants, format de remise.

---

## 9. Ce que le contenu peut livrer à l'expert (kit de maquette)

1. **Textes d'écran courts** pour le module OMS.
2. **Quiz complet** de l'OMS : options, bonnes réponses, feedbacks, objectif rattaché.
3. **Jeu de données fictif** : progression, résultats, cohorte.
4. **Spécification des mécaniques** : états, règles de validation, diagnostic, aiguillage.
5. **6 à 8 schémas clés** de l'OMS.
6. **Test global de fin de Bac+3**, nécessaire à l'aiguillage.

---

## 10. Prochaines actions

| # | Action | Responsable |
|---|---|---|
| 1 | Trancher les décisions du §7 | porteur du projet |
| 2 | Choisir l'option de maquette (A ou B) | porteur du projet |
| 3 | Fusionner la PR du plan de formation, puis celle des storyboards Bac+5 | porteur du projet |
| 4 | Préparer le kit de maquette (§9) | contenu |
| 5 | Premier échange avec l'expert UX/UI (§8) | duo du projet |
| 6 | Appliquer les guidelines UX/UI à la page du plan de formation | expert UX/UI |
| 7 | Valider le plan de formation avec l'établissement | porteur du projet |

---

## Annexe — Carte des fichiers

| Fichier | Rôle |
|---|---|
| `ecole/Plan_de_formation_Bac3_Bac5.md` | plan à partager avec l'établissement |
| `02_OMS_Storyboard.md` | module du prototype |
| `00_Glossaire_global.md` | glossaire |
| `schemas/07_WCS_plan_entrepot_mecanise.svg` | exemple de schéma anonyme |
| `bac5/B5-00_Plan_du_parcours.md` | plan du parcours Bac+5 |
| `bac5/B5-NN_*.md` | storyboards Bac+5 |
| `NN_*_Storyboard.md` | storyboards Bac+3 |
