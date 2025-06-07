20 = tout trouver
10 = Une erreur


# 🔒 MATH2: COMMUNICATION SECURISEE

## 🔑 Codage, hachage, chiffrement

### Codage vs Chiffrement
```markdown
💡 Différence clé:
- Codage: Transformer les données pour la transmission ou le stockage (pas de sécurité)
- Chiffrement: Transformer les données pour les rendre illisibles sans la clé
```

#### Exemple de codage: Base64
```
Texte original: "Hello"
Texte encodé en Base64: "SGVsbG8="
```
> **Note**: Le codage n'est pas sécurisé, car il est réversible sans clé secrète.

### Fonction de hachage
```markdown
💡 Caractéristiques d'une bonne fonction de hachage:
- Déterministe: Le même message donne toujours le même hash
- Rapide à calculer
- Résistante aux collisions: Difficile de trouver deux messages avec le même hash
- Effet avalanche: Un petit changement dans le message change complètement le hash
- Irréversible: Impossible de retrouver le message à partir du hash
```

#### Exemples de fonctions de hachage
```
MD5: "Hello" → "8b1a9953c4611296a827abf8c47804d7"
SHA-256: "Hello" → "185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969"
```

## 🔐 Chiffrement symétrique et asymétrique

### Chiffrement symétrique
```markdown
💡 Principe: Une seule clé pour chiffrer ET déchiffrer
   Comme une serrure qu'on peut ouvrir et fermer avec la même clé!
```

#### Algorithmes courants
```
- AES (Advanced Encryption Standard): Le standard actuel, très sécurisé
- DES (Data Encryption Standard): Ancien standard, maintenant vulnérable
- 3DES: Version renforcée de DES
- ChaCha20: Algorithme moderne, rapide et sécurisé
```

#### Exemple simple
```
Texte en clair: "Secret message"
Clé: "key123"
Texte chiffré: "8f7d3b2a1c4e5f6d..."
```

### Chiffrement asymétrique
```markdown
💡 Principe: Deux clés différentes - une publique pour chiffrer, une privée pour déchiffrer
   Comme une boîte aux lettres: tout le monde peut y déposer du courrier, mais seul le propriétaire peut l'ouvrir!
```

#### Algorithmes courants
```
- RSA: Basé sur la factorisation des grands nombres premiers
- ECC (Elliptic Curve Cryptography): Basé sur les courbes elliptiques
- ElGamal: Basé sur le problème du logarithme discret
```

#### Exemple RSA simplifié
```
1. Alice génère une paire de clés (publique, privée)
2. Alice partage sa clé publique avec Bob
3. Bob chiffre son message avec la clé publique d'Alice
4. Seule Alice peut déchiffrer le message avec sa clé privée
```

## 🧮 Arithmétique: Nombres premiers et opération modulo

### Nombres premiers
```markdown
💡 Définition: Un nombre premier est un entier naturel qui admet exactement deux diviseurs distincts: 1 et lui-même.
```

#### Exemples
```
Nombres premiers: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
```

#### Importance en cryptographie
```
- La sécurité de RSA repose sur la difficulté de factoriser un grand nombre en ses facteurs premiers
- Exemple: 3233 = 61 × 53 (facile à factoriser)
- Mais avec des nombres de centaines de chiffres, même les superordinateurs mettraient des millions d'années!
```

### Opération modulo
```markdown
💡 Définition: a mod n = reste de la division euclidienne de a par n
   a ≡ b (mod n) signifie que a et b ont le même reste quand on les divise par n
```

#### Exemples
```
7 mod 3 = 1 (car 7 = 3 × 2 + 1)
15 mod 4 = 3 (car 15 = 4 × 3 + 3)
23 mod 5 = 3 (car 23 = 5 × 4 + 3)
```

#### Applications en cryptographie 
```
- L'arithmétique modulaire permet de travailler dans un "univers fini"
- Propriétés intéressantes: (a × b) mod n = [(a mod n) × (b mod n)] mod n
- Base de nombreux algorithmes cryptographiques comme RSA et Diffie-Hellman
```

### Congruence et calcul de grandes puissances modulaires
```markdown
💡 Définition de la congruence: 
   a ≡ b (mod n) signifie que n divise (a - b)
   En d'autres termes: a et b ont le même reste dans la division par n
```

#### Propriétés importantes des congruences
```
1. Réflexivité: a ≡ a (mod n)
2. Symétrie: Si a ≡ b (mod n), alors b ≡ a (mod n)
3. Transitivité: Si a ≡ b (mod n) et b ≡ c (mod n), alors a ≡ c (mod n)

4. Si a ≡ b (mod n) et c ≡ d (mod n), alors:
   - a + c ≡ b + d (mod n)
   - a × c ≡ b × d (mod n)
```

#### Calcul efficace de grandes puissances modulaires
```markdown
💡 Problème: Comment calculer a^b mod n efficacement quand b est très grand?
   Par exemple: 5^117 mod 19
```

#### Exponentiation rapide (Square and Multiply)
```
Méthode naïve (inefficace):
5^117 = 5 × 5 × 5 × ... × 5 (117 fois) puis prendre modulo 19
→ 116 multiplications!

Méthode efficace (exponentiation binaire):
1. Convertir l'exposant en binaire: 117 = 1110101₂
2. Algorithme:
   - Commencer avec résultat = 1
   - Pour chaque bit de l'exposant (de gauche à droite):
     * Mettre résultat = résultat² mod n
     * Si le bit courant est 1: résultat = résultat × a mod n

Exemple pour 5^117 mod 19:
- 117 en binaire: 1110101
- Initialisation: résultat = 1
- Bit 1: résultat = 1² × 5 = 5 mod 19
- Bit 1: résultat = 5² × 5 = 125 ≡ 11 mod 19
- Bit 1: résultat = 11² × 5 = 605 ≡ 17 mod 19
- Bit 0: résultat = 17² = 289 ≡ 4 mod 19
- Bit 1: résultat = 4² × 5 = 80 ≡ 4 mod 19
- Bit 0: résultat = 4² = 16 mod 19 
- Bit 1: résultat = 16² × 5 = 1280 ≡ 1 mod 19

Donc 5^117 ≡ 1 (mod 19)
```

#### Importance pour Diffie-Hellman
```
- Dans Diffie-Hellman, on calcule g^a mod p et g^b mod p avec a et b très grands
- Grâce à l'exponentiation rapide, ce calcul reste efficace même avec de grands exposants
- Sans cette technique, l'échange de clés Diffie-Hellman serait impraticable en temps réel
- La sécurité de Diffie-Hellman repose sur la difficulté du problème du logarithme discret:
  Étant donné g, p et g^x mod p, il est difficile de retrouver x
```

## 🤝 Échange de clé de Diffie-Hellman

```markdown
💡 Problème résolu: Comment deux personnes peuvent-elles établir une clé secrète commune
   sur un canal non sécurisé (où un attaquant peut écouter toutes les communications)?
```

### Principe de l'algorithme
```
1. Alice et Bob se mettent d'accord sur deux nombres publics: p (un grand nombre premier) et g (une "base" ou "générateur")
2. Alice choisit un nombre secret a, calcule A = g^a mod p, et envoie A à Bob
3. Bob choisit un nombre secret b, calcule B = g^b mod p, et envoie B à Alice
4. Alice calcule la clé secrète commune: K = B^a mod p
5. Bob calcule la clé secrète commune: K = A^b mod p
6. Alice et Bob ont maintenant la même clé K = g^(a×b) mod p, sans jamais avoir échangé leurs secrets a et b!
```

### Exemple concret avec petits nombres
```
Paramètres publics: p = 23, g = 5

1. Alice choisit secret a = 6, calcule A = 5^6 mod 23 = 8, envoie 8 à Bob
2. Bob choisit secret b = 15, calcule B = 5^15 mod 23 = 19, envoie 19 à Alice
3. Alice calcule clé K = 19^6 mod 23 = 2
4. Bob calcule clé K = 8^15 mod 23 = 2

Alice et Bob partagent maintenant la clé secrète K = 2 !
```

> **Sécurité**: Un attaquant qui écoute la communication connaît p, g, A et B, mais ne peut pas facilement calculer K car il lui faudrait résoudre le problème du logarithme discret pour trouver a ou b.

### Applications modernes
```
- Établissement de clés pour TLS/SSL (sécurisation des sites web HTTPS)
- IPsec (sécurisation des connexions réseau)
- Protocoles de messagerie sécurisés (Signal, WhatsApp, etc.)
```

---

# 📖 Références et ressources d'apprentissage

## 📺 Vidéos YouTube

### 🇫🇷 Ressources en français
- [La cryptographie expliquée simplement](https://youtu.be/NJT4g5gu50c) - Introduction aux concepts de base
- [Comprendre les nombres premiers](https://www.youtube.com/watch?v=lJxVqeaNvCg) - Explication des propriétés des nombres premiers
- [Comment fonctionne HTTPS](https://www.youtube.com/watch?v=2DqdPcbYcy8) - Vulgarisation du fonctionnement de HTTPS

### 🇬🇧 Ressources en anglais
- [Public Key Cryptography](https://www.youtube.com/watch?v=GSIDS_lvRv4) - Explication visuelle du chiffrement asymétrique
- [How Diffie-Hellman Key Exchange Works](https://www.youtube.com/watch?v=NmM9HA2MQGI) - Animation détaillée de l'échange
- [Cryptography Crash Course](https://www.youtube.com/watch?v=jhXCTbFnK8o) - Introduction complète aux concepts de cryptographie

## 🌐 Sites et outils

- [CrypTool](https://www.cryptool.org/) - Logiciel éducatif pour apprendre la cryptographie
- [Cryptopals Crypto Challenges](https://cryptopals.com/) - Défis pratiques pour comprendre les concepts
- [Khan Academy: Cryptographie](https://fr.khanacademy.org/computing/computer-science/cryptography) - Cours complet sur les bases


