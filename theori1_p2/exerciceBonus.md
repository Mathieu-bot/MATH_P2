# 📝 Exercices Bonus - Mathématiques pour la Communication Sécurisée

## 🔄 Exercice 1: Congruence

**Déterminer le reste de la division euclidienne de a par b:**

> **1 - a = 1977^1000 et b = 13**  
> **2 - a = 1983^1515 et b = 5**

---

## 🔢 Exercice 2: Système de numération

**Écrire les nombres à base binaire suivants dans le système de numération décimale:**

> **1 - 110**  
> **2 - 110110**  
> **3 - 110101,001**

---

## 🔐 Exercice 3: Échange de clé de Diffie-Hellman

**Soit la clé publique constituée du nombre premier p = 251 et de la base g = 11. Alice choisit un nombre secret a = 6 et Bob choisit à son tour un nombre secret b = 5.**

> **Déterminer la clé commune à Alice et Bob, s'ils effectuent un échange de clef de Diffie-Hellman.**

---

## 🧮 Exercice 4: Les flottants 

> **Coder les réels suivants selon la norme IEEE 754 32 bits : 8, 9, 1.5, 3.14, −6.625, et 125.**

---

# 💡 Corrigé des exercices

## 🔄 Exercice 1: Congruence

### Question 1: a = 1977^1000 et b = 13

```markdown
💡 Méthode: Pour trouver le reste de grands nombres en puissance, on utilise les propriétés de congruence:
- On trouve d'abord le reste de la base modulo b
- On utilise le théorème d'Euler ou le petit théorème de Fermat si applicable
- On peut exploiter la cyclicité des restes pour réduire l'exposant
```

**Solution:**

```
Étape 1: Calculons 1977 mod 13
1977 = 152 × 13 + 1
Donc 1977 ≡ 1 (mod 13)

Étape 2: Puisque 1977 ≡ 1 (mod 13), on a
1977^1000 ≡ 1^1000 (mod 13)
              ≡ 1 (mod 13)
```

**Résultat final:** Le reste de la division de 1977^1000 par 13 est **1**.

### Question 2: a = 1983^1515 et b = 5

**Solution:**

```
Étape 1: Calculons 1983 mod 5
1983 = 396 × 5 + 3
Donc 1983 ≡ 3 (mod 5)

Étape 2: Pour calculer 3^1515 mod 5, on peut exploiter la cyclicité des puissances de 3 modulo 5:

3^1 mod 5 = 3
3^2 mod 5 = 9 mod 5 = 4
3^3 mod 5 = 3 × 4 mod 5 = 12 mod 5 = 2
3^4 mod 5 = 3 × 2 mod 5 = 6 mod 5 = 1

La période est donc 4 (car on revient à 1)

Étape 3: On réduit l'exposant modulo la période
1515 ÷ 4 = 378 avec reste 3
Donc 3^1515 ≡ 3^3 ≡ 2 (mod 5)
```

**Résultat final:** Le reste de la division de 1983^1515 par 5 est **2**.

## 🔢 Exercice 2: Système de numération

### Question 1: Conversion de 110₂ en base 10

```markdown
💡 Méthode: Pour convertir du binaire au décimal, on multiplie chaque bit par la puissance de 2 correspondant à sa position.
```

**Solution:**

```
110₂ = 1×2² + 1×2¹ + 0×2⁰
     = 1×4 + 1×2 + 0×1
     = 4 + 2 + 0
     = 6₁₀
```

**Résultat:** 110₂ = **6** en décimal.

### Question 2: Conversion de 110110₂ en base 10

**Solution:**

```
110110₂ = 1×2⁵ + 1×2⁴ + 0×2³ + 1×2² + 1×2¹ + 0×2⁰
        = 1×32 + 1×16 + 0×8 + 1×4 + 1×2 + 0×1
        = 32 + 16 + 0 + 4 + 2 + 0
        = 54₁₀
```

**Résultat:** 110110₂ = **54** en décimal.

### Question 3: Conversion de 110101,001₂ en base 10

```markdown
💡 Méthode: Pour la partie fractionnaire, on multiplie chaque bit par la puissance négative de 2 correspondant à sa position.
```

**Solution:**

```
110101,001₂ = (1×2⁵ + 1×2⁴ + 0×2³ + 1×2² + 0×2¹ + 1×2⁰) + (0×2⁻¹ + 0×2⁻² + 1×2⁻³)
           = (32 + 16 + 0 + 4 + 0 + 1) + (0 + 0 + 0,125)
           = 53 + 0,125
           = 53,125₁₀
```

**Résultat:** 110101,001₂ = **53,125** en décimal.

## 🔐 Exercice 3: Échange de clé de Diffie-Hellman

```markdown
💡 Rappel du principe de Diffie-Hellman:
1. Alice et Bob conviennent de valeurs publiques p (nombre premier) et g (générateur)
2. Alice choisit un secret a, calcule A = g^a mod p et envoie A à Bob
3. Bob choisit un secret b, calcule B = g^b mod p et envoie B à Alice
4. Alice calcule la clé secrète K = B^a mod p
5. Bob calcule la clé secrète K = A^b mod p
```

**Données:**
- Nombre premier p = 251
- Base g = 11
- Nombre secret d'Alice a = 6
- Nombre secret de Bob b = 5

**Étape 1:** Alice calcule A = g^a mod p

```
A = 11^6 mod 251
  = 1771561 mod 251
  = 71
```

**Étape 2:** Bob calcule B = g^b mod p

```
B = 11^5 mod 251
  = 161051 mod 251
  = 116
```

**Étape 3:** Alice calcule la clé secrète

```
K_Alice = B^a mod p
       = 116^6 mod 251
       = 246
```

**Étape 4:** Bob calcule la clé secrète

```
K_Bob = A^b mod p
      = 71^5 mod 251
      = 246
```

**Résultat:** La clé commune est **246**.

## 🧮 Exercice 4: Les flottants

```markdown
💡 Rappel du format IEEE 754 (32 bits):
- 1 bit de signe (0 pour positif, 1 pour négatif)
- 8 bits d'exposant (biaisé de +127)
- 23 bits de mantisse (avec 1 implicite avant la virgule)
```

### Nombre: 8

**Étape 1:** Conversion en binaire
```
8₁₀ = 1000₂
```

**Étape 2:** Normalisation (forme 1,xxxxx × 2^n)
```
8 = 1,0 × 2³
```

**Étape 3:** Encodage
- Signe: 0 (positif)
- Exposant: 3 + 127 = 130 = 10000010₂
- Mantisse: 0 (le 1 avant la virgule est implicite)

**Résultat:** `0 10000010 00000000000000000000000`

### Nombre: 9

**Étape 1:** Conversion en binaire
```
9₁₀ = 1001₂
```

**Étape 2:** Normalisation
```
9 = 1,001 × 2³
```

**Étape 3:** Encodage
- Signe: 0 (positif)
- Exposant: 3 + 127 = 130 = 10000010₂
- Mantisse: 001 + 20 zéros

**Résultat:** `0 10000010 00100000000000000000000`

### Nombre: 1.5

**Étape 1:** Conversion en binaire
```
1,5₁₀ = 1,1₂
```

**Étape 2:** Normalisation
```
1,5 = 1,1 × 2⁰
```

**Étape 3:** Encodage
- Signe: 0 (positif)
- Exposant: 0 + 127 = 127 = 01111111₂
- Mantisse: 1 + 22 zéros

**Résultat:** `0 01111111 10000000000000000000000`

### Nombre: 3.14

**Étape 1:** Conversion en binaire
```
3,14₁₀ = 11,001000111...₂
```

**Étape 2:** Normalisation
```
3,14 = 1,1001000111... × 2¹
```

**Étape 3:** Encodage
- Signe: 0 (positif)
- Exposant: 1 + 127 = 128 = 10000000₂
- Mantisse: 1001000111... (tronqué à 23 bits)

**Résultat:** `0 10000000 10010001111010111000011`

### Nombre: -6.625

**Étape 1:** Conversion en binaire
```
6,625₁₀ = 110,101₂
```

**Étape 2:** Normalisation
```
6,625 = 1,10101 × 2²
```

**Étape 3:** Encodage
- Signe: 1 (négatif)
- Exposant: 2 + 127 = 129 = 10000001₂
- Mantisse: 10101 + 18 zéros

**Résultat:** `1 10000001 10101000000000000000000`

### Nombre: 125

**Étape 1:** Conversion en binaire
```
125₁₀ = 1111101₂
```

**Étape 2:** Normalisation
```
125 = 1,111101 × 2⁶
```

**Étape 3:** Encodage
- Signe: 0 (positif)
- Exposant: 6 + 127 = 133 = 10000101₂
- Mantisse: 111101 + 17 zéros

**Résultat:** `0 10000101 11110100000000000000000`
