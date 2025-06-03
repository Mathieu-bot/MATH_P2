export const numberToBinary = (n) => n.toString(2);
console.log(1*2**10 + 1*2**9 + 1*2**8 + 1*2**7 + 1*2**6 + 1*2**5 + 0*2**4 + 1*2**3 + 0*2**2 + 0*2**1 + 0*2**0 + 1*2**-3);
console.log(numberToBinary(133));

// 1.1111101000*2**10 + 1*2**-3
// signe: 0
// exposant: 10 + 1023
// mantisse: 001 + 49zeros
//0 

// Alice et Bob ont tous deux la clé K = 2

// 1. Dérivation d'une clé utilisable (dans un vrai système, K serait un grand nombre)
const cleDerivee = deriveKey(2, "sel_commun", 10000, 32); // Clé de 32 octets

// 2. Alice chiffre un message
function envoyerMessage(message) {
  // Génération d'un vecteur d'initialisation unique
  const iv = genererVecteurInitialisation();
  
  // Chiffrement
  const messageChiffre = chiffrerAES(message, cleDerivee, iv);
  
  // Envoi du message chiffré avec l'IV
  return { iv, messageChiffre };
}

// 3. Bob déchiffre le message
function recevoirMessage(donnees) {
  const { iv, messageChiffre } = donnees;
  
  // Déchiffrement avec la même clé
  const messageOriginal = dechiffrerAES(messageChiffre, cleDerivee, iv);
  
  return messageOriginal;
}