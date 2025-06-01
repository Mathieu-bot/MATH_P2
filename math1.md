# 📊 MATH1: Nombres à virgule flottante

## 🔢 Conversion décimal → binaire

### Partie entière
```markdown
💡 Méthode: Divisions successives par 2 et lecture des restes de bas en haut
```

#### Exemple: Convertir 13 en binaire
```
13 ÷ 2 = 6 reste 1  ↓
 6 ÷ 2 = 3 reste 0  ↓
 3 ÷ 2 = 1 reste 1  ↓
 1 ÷ 2 = 0 reste 1  ↓
                    ↓
          Résultat: 1101₂
```

### Partie fractionnaire
```markdown
💡 Méthode: Multiplications successives par 2 et lecture des parties entières de haut en bas
```

#### Exemple: Convertir 0.625 en binaire
```
0.625 × 2 = 1.25  → 1
0.25  × 2 = 0.5   → 0
0.5   × 2 = 1.0   → 1
             
          Résultat: 0.101₂
```

### Exemple complet: 13.625 en binaire
```markdown
Partie entière:   13 → 1101₂
Partie fractionnaire: 0.625 → 0.101₂
Résultat: 13.625 = 1101.101₂
```

> **Astuce**: Certaines fractions décimales comme 0.1 ou 0.2 n'ont pas de représentation finie en binaire! 
Elles deviennent des séquences infinies qui sont forcément tronquées dans les ordinateurs, 
ce qui crée des erreurs d'arrondi.

## 🔍 Simple precision : 32bits

```markdown
╔═══════════════╦═══════╗
║ Composant     ║ Taille ║
╠═══════════════╬═══════╣
║ Signe         ║ 1 bit  ║
║ Exposant      ║ 8 bits ║
║ Mantisse      ║ 23 bits║
╚═══════════════╩═══════╝

Biais d'exposant : 127
```

### ✨ Exemple simple: Nombre 5.0 en simple précision

1. **Conversion en binaire**: 5.0 = 101.0₂
2. **Forme normalisée**: 1.01 × 2²
3. **Encodage**:
   - **Signe**: 0 (positif)
   - **Exposant**: 2 + 127 = 129 → 10000001₂
   - **Mantisse**: 01 + 21 zéros

**Résultat final**: `0 10000001 01000000000000000000000`

> **Explication simple**: Imaginez une carte d'identité pour chaque nombre. En simple précision, cette carte a 32 cases: 1 pour dire si le nombre est positif ou négatif, 8 pour indiquer la position de la virgule, et 23 pour les chiffres après le premier 1.

## 🔍 Double precision : 64bits

```markdown
╔═══════════════╦═══════╗
║ Composant     ║ Taille ║
╠═══════════════╬═══════╣
║ Signe         ║ 1 bit  ║
║ Exposant      ║ 11 bits║
║ Mantisse      ║ 52 bits║
╚═══════════════╩═══════╝

Biais d'exposant : 1023
```

### ✨ Exemple simple: Nombre 0.25 en double précision

1. **Conversion en binaire**: 0.25 = 0.01₂
2. **Forme normalisée**: 1.0 × 2⁻²
3. **Encodage**:
   - **Signe**: 0 (positif)
   - **Exposant**: -2 + 1023 = 1021 → 01111111101₂
   - **Mantisse**: 52 zéros

**Résultat final**: `0 01111111101 0000...0000` (52 zéros)

> **Explication simple**: La double précision fonctionne comme la simple précision, mais avec une carte d'identité plus grande (64 cases au lieu de 32), permettant de représenter des nombres avec beaucoup plus de précision.

# 🚨 Problèmes de calcul numérique

## 📈 Overflow (Débordement par le haut)

```markdown
💡 Définition: Quand un calcul donne un nombre trop grand pour être représenté.  
   C'est comme essayer de mettre un éléphant dans une boîte à chaussures!
```

### Exemple concret
```python
# Imaginez que vous comptez votre argent et que votre calculatrice ne peut afficher que 8 chiffres:  
# Si vous avez 99,999,999€ et gagnez 2€, votre calculatrice affichera "ERROR" ou "∞"

# En code Python:
argent = 99_999_999  # Votre fortune actuelle
gain = 2            # Ce que vous gagnez
total = argent + gain  # Résultat: trop grand pour être représenté!
```

## 📉 Underflow (Débordement par le bas)

```markdown
💡 Définition: Quand un calcul donne un nombre trop petit pour être distingué de zéro.  
   C'est comme essayer de voir une fourmi depuis un avion!
```

### Exemple concret
```python
# Imaginez que vous diluez un sirop:  
# 1 goutte dans 1L, puis 1 goutte de ce mélange dans 1L, et ainsi de suite...  
# Au bout d'un moment, la quantité de sirop devient si faible qu'elle est indétectable

# En code Python:
concentration = 0.000000001  # Très petite concentration
dilution = 0.000001         # Facteur de dilution
resultat = concentration * dilution  # Résultat: si petit qu'il est arrondi à 0
```

## ⚖️ Annulation catastrophique

```markdown
💡 Définition: Quand on soustrait deux nombres presque identiques et qu'on perd presque toute la précision.  
   C'est comme peser deux jumeaux et calculer leur différence de poids sur une balance peu précise!
```

### Exemple concret
```python
# Imaginez que vous mesurez la différence de hauteur entre deux bâtiments presque identiques:  
# Tour A: 100.0123456789 mètres  
# Tour B: 100.0123456000 mètres  
# Différence réelle: 0.0000000789 mètres, mais avec des erreurs d'arrondi, on pourrait obtenir 0.0000001

# En code Python:
tourA = 100.0123456789
tourB = 100.0123456000
difference = tourA - tourB  # Le résultat perd en précision
```

## 🧮 Absorption

```markdown
💡 Définition: Quand l'addition d'un très petit nombre à un très grand nombre n'a aucun impact.  
   C'est comme ajouter une goutte d'eau dans un océan!
```

### Exemple concret
```python
# Imaginez votre compte en banque avec 1 million d'euros, et vous trouvez 1 centime:  
# 1,000,000.00€ + 0.01€ = 1,000,000.01€ mais si votre relevé bancaire n'affiche que les euros, vous verrez toujours 1,000,000€

# En code Python:
compte = 1_000_000.0  # Votre fortune
centime = 0.01        # Une pièce trouvée par terre
total = compte + centime  # Résultat: inchangé si la précision est limitée
```

---

# 📖 Références et ressources d'apprentissage

## 📺 Vidéos YouTube

### 🇫🇷 Ressources en français
- [Système binaire : Comment ça marche ?](https://www.youtube.com/watch?v=_UZKA5akFbY) - Explication simple du système binaire
- [Convertir Décimal en Binaire](https://www.youtube.com/watch?v=97LRLM5Je9g) - Méthode claire avec exemples détaillés
- [Les nombres flottants (IEEE-754)](https://www.youtube.com/watch?v=SFkrqt8fGRs) - Tout comprendre sur la norme IEEE-754 en français
- [Virgule flottante et erreurs de précision](https://www.youtube.com/watch?v=LKcXP25C_Gw) - Explications sur les erreurs d'arrondis
- [Pourquoi 0.1+0.2 ≠ 0.3](https://www.youtube.com/watch?v=CDYiwshriWA) - Démonstration en français du problème
- [Cours complet: Représentation des nombres](https://www.youtube.com/watch?v=HeuxINp2-Vg) - Formation complète sur les systèmes numériques

### 🇬🇧 Ressources en anglais
- [How Computers Represent Numbers](https://www.youtube.com/watch?v=1GSjbWt0c9M) - Explication visuelle très claire
- [IEEE-754 Floating Point Standard](https://www.youtube.com/watch?v=RuKkePyo9zk) - Détails de la norme
- [Why Computers are Bad at Algebra](https://www.youtube.com/watch?v=pQs_wx8eoQ8) - Les problèmes de calcul numérique expliqués

## 🌐 Documentation et sites web

### Ressources interactives
- [Visualisation IEEE 754](https://evanw.github.io/float-toy/) - Outil interactif pour voir comment les nombres sont représentés
- [IEEE 754 Analyzer](https://www.h-schmidt.net/FloatConverter/IEEE754.html) - Convertisseur interactif décimal-binaire avec visualisation

### Documentation accessible
- [Floating Point Guide](https://floating-point-gui.de/) - Guide clair et moderne sur les nombres à virgule flottante
- [Cours OpenClassrooms sur les nombres binaires](https://openclassrooms.com/fr/courses/19980-apprenez-a-programmer-en-c/14589-codez-avec-des-nombres-binaires) - Tutoriel en français bien expliqué
- [What Every Programmer Should Know About Floating-Point Arithmetic](https://floating-point-gui.de/basic/) - Explications claires avec des exemples

### Infographies et cheat sheets
- [Infographie sur les nombres à virgule flottante](https://betterexplained.com/articles/floating-point/) - Visualisation simple des concepts
- [Cheat sheet calcul binaire](https://www.electronics-tutorials.ws/binary/bin_2.html) - Référence rapide pour les conversions


