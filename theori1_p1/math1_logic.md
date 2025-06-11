# 🤔 MATH1: LOGIQUE

## 🔄 Les connecteurs logiques

### Connecteurs unaires
- **Négation (¬)** : Inverse la valeur de vérité
  - ¬V = F
  - ¬F = V

### Connecteurs binaires
- **Conjonction (AND, ∧)** : Vrai si et seulement si les deux propositions sont vraies
  - V ∧ V = V
  - V ∧ F = F
  - F ∧ V = F
  - F ∧ F = F

- **Disjonction (OR, ∨)** : Vrai si au moins une des propositions est vraie
  - V ∨ V = V
  - V ∨ F = V
  - F ∨ V = V
  - F ∨ F = F

- **Implication (→)** : "Si P alors Q"
  - V → V = V
  - V → F = F
  - F → V = V
  - F → F = V

- **Équivalence (↔)** : "P si et seulement si Q"
  - V ↔ V = V
  - V ↔ F = F
  - F ↔ V = F
  - F ↔ F = V

## 📊 Tables de vérité

### Table de vérité de l'implication
| P | Q | P → Q |
|---|---|-------|
| V | V |   V   |
| V | F |   F   |
| F | V |   V   |
| F | F |   V   |

### Table de vérité de l'équivalence
| P | Q | P ↔ Q |
|---|---|-------|
| V | V |   V   |
| V | F |   F   |
| F | V |   F   |
| F | F |   V   |

## 🔍 Lois fondamentales de la logique

### Lois de De Morgan
1. ¬(P ∧ Q) ≡ ¬P ∨ ¬Q
2. ¬(P ∨ Q) ≡ ¬P ∧ ¬Q

### Lois associatives
1. (P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R)
2. (P ∨ Q) ∨ R ≡ P ∨ (Q ∨ R)

### Lois distributives
1. P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)
2. P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)

## 🔄 Équivalences logiques

1. **Double négation** : ¬¬P ≡ P
2. **Idempotence** : P ∧ P ≡ P, P ∨ P ≡ P
3. **Commutativité** : P ∧ Q ≡ Q ∧ P, P ∨ Q ≡ Q ∨ P
4. **Associativité** : (P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R)
5. **Distributivité** : P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)

## 📝 Propositions et Quantificateurs

### Propositions
- Une proposition est un énoncé mathématique qui a une et une seule valeur : vrai ou faux
- L'implication P → Q est équivalente à ¬P ∨ Q
- La contraposée de P → Q est ¬Q → ¬P (équivalente à P → Q)

### Quantificateurs
1. **Pour tout** ( ∀ )
   - ∀x ∈ E, P(x) est vraie si P(x) est vraie pour tout x ∈ E
   - Négation : ∃x ∈ E, ¬P(x)

2. **Il existe** ( ∃ )
   - ∃x ∈ E, P(x) est vraie si il existe au moins un x ∈ E tel que P(x) est vraie
   - Négation : ∀x ∈ E, ¬P(x)

3. **Il existe un unique** ( ∃! )
   - ∃!x ∈ E, P(x) est vraie s'il existe un unique x ∈ E tel que P(x) est vraie

## 📈 Conditions

### Conditions nécessaires et suffisantes
- Si P → Q, alors :
  - P est une condition suffisante à Q
  - Q est une condition nécessaire à P

## 🔄 Méthodes de raisonnement

### Raisonnement par implication
1. Pour prouver P → Q :
   - Supposer P vraie
   - Utiliser des propriétés connues
   - Démontrer que Q est vraie

### Raisonnement par double implication
1. Méthode 1 : Double implication
   - Supposer P vraie, démontrer Q
   - Supposer Q vraie, démontrer P

2. Méthode 2 : Équivalence
   - Utiliser uniquement des équivalences
   - Attention : chaque étape doit être une équivalence

### Raisonnement par contraposée
- Pour prouver P → Q, démontrer ¬Q → ¬P
- Les deux propositions sont équivalentes

### Raisonnement par l'absurde
1. Pour prouver P → Q :
   - Supposer P et ¬Q vraies
   - Obtenir une contradiction

2. Pour prouver P :
   - Supposer ¬P vraie
   - Obtenir une contradiction

### Raisonnement par récurrence
1. **Simple**
   - Initialisation : P(0) vraie
   - Hérédité : P(k) → P(k+1)
   - Conclusion : P(n) vraie pour tout n

2. **Double**
   - Initialisation : P(0) et P(1) vraies
   - Hérédité : P(n) et P(n+1) → P(n+2)

3. **Récurrence forte**
   - Initialisation : P(0) vraie
   - Hérédité : P(0) ∧ P(1) ∧ ... ∧ P(n) → P(n+1)

### Raisonnement par disjonction de cas
- Utilisé quand la justification dépend de la valeur d'un paramètre
- Exemples : valeurs absolues, arithmétique, géométrie

### Raisonnement par analyse/synthèse
1. **Analyse**
   - Supposer x solution
   - Trouver conditions nécessaires

2. **Synthèse**
   - Vérifier que les conditions sont suffisantes

## 📝 Exercices

1. Simplifier l'expression suivante :
   - ¬(P ∧ ¬Q) ∨ (¬P ∧ Q)

2. Construire la table de vérité pour :
   - (P → Q) ∧ (Q → P)

3. Démontrer que :
   - ¬(P ∨ Q) ≡ ¬P ∧ ¬Q

4. Simplifier :
   - (P ∧ Q) ∨ (P ∧ ¬Q)

5. Utiliser la récurrence pour démontrer :
   - 1 + 2 + ... + n = n(n+1)/2

6. Utiliser la récurrence forte pour démontrer :
   - La suite de Fibonacci vérifie F(n) = (1/√5)[(1+√5)/2]^n - [(1-√5)/2]^n

7. Utiliser la disjonction de cas pour résoudre :
   - |x-3| + |x+2| = 7

8. Utiliser l'analyse/synthèse pour résoudre :
   - x² - 5x + 6 = 0

9. Démontrer par l'absurde :
   - √2 est irrationnel

10. Utiliser la contraposée pour démontrer :
    - Si n² est pair, alors n est pair

## 📊 Tables de vérité

### Table de vérité de l'implication
| P | Q | P → Q |
|---|---|-------|
| V | V |   V   |
| V | F |   F   |
| F | V |   V   |
| F | F |   V   |

### Table de vérité de l'équivalence
| P | Q | P ↔ Q |
|---|---|-------|
| V | V |   V   |
| V | F |   F   |
| F | V |   F   |
| F | F |   V   |

## 🔍 Lois fondamentales de la logique

### Lois de De Morgan
1. ¬(P ∧ Q) ≡ ¬P ∨ ¬Q
2. ¬(P ∨ Q) ≡ ¬P ∧ ¬Q

### Lois associatives
1. (P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R)
2. (P ∨ Q) ∨ R ≡ P ∨ (Q ∨ R)

### Lois distributives
1. P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)
2. P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)

## 🔄 Équivalences logiques

1. **Double négation** : ¬¬P ≡ P
2. **Idempotence** : P ∧ P ≡ P, P ∨ P ≡ P
3. **Commutativité** : P ∧ Q ≡ Q ∧ P, P ∨ Q ≡ Q ∨ P
4. **Associativité** : (P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R)
5. **Distributivité** : P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)

## 📝 Exercices

1. Simplifier l'expression suivante :
   - ¬(P ∧ ¬Q) ∨ (¬P ∧ Q)

2. Construire la table de vérité pour :
   - (P → Q) ∧ (Q → P)

3. Démontrer que :
   - ¬(P ∨ Q) ≡ ¬P ∧ ¬Q

4. Simplifier :
   - (P ∧ Q) ∨ (P ∧ ¬Q)