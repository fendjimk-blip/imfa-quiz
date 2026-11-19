// IMFA QUIZ - PHYSIQUE, FACILE, Partie 4 (PHY-076 a PHY-095)
const PHYSIQUE_FACILE_P4 = [
  { id: "PHY-076", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "En combien de temps la Terre fait-elle un tour sur elle-même ?",
    a: ["24 heures", "12 heures", "365 jours", "7 jours"], correct: 0,
    explications: [
      "Correct. La Terre fait un tour sur elle-même en environ 24 heures.",
      "12 heures est la moitié de la durée d'une rotation.",
      "365 jours correspond à une révolution autour du Soleil, pas à une rotation.",
      "7 jours correspond à une semaine, sans rapport avec la rotation."
    ] },
  { id: "PHY-077", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel appareil sert à mesurer la pression d'un pneu ?",
    a: ["Un manomètre", "Un thermomètre", "Une balance", "Un chronomètre"], correct: 0,
    explications: [
      "Correct. Le manomètre mesure la pression d'un gaz ou d'un liquide.",
      "Le thermomètre mesure la température.",
      "La balance mesure la masse.",
      "Le chronomètre mesure le temps."
    ] },
  { id: "PHY-078", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel objet conduit facilement l'électricité ?",
    a: ["Une clé en métal", "Un morceau de bois", "Un verre", "Un caoutchouc"], correct: 0,
    explications: [
      "Correct. Le métal est un bon conducteur d'électricité.",
      "Le bois sec est un isolant.",
      "Le verre est un isolant.",
      "Le caoutchouc est un isolant."
    ] },
  { id: "PHY-079", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité SI du volume ?",
    a: ["Le mètre cube", "Le litre", "Le centimètre", "Le gramme"], correct: 0,
    explications: [
      "Correct. L'unité SI du volume est le mètre cube (m³).",
      "Le litre est accepté, mais ce n'est pas l'unité SI.",
      "Le centimètre est une unité de longueur.",
      "Le gramme est une unité de masse."
    ] },
  { id: "PHY-080", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Lequel de ces objets flotte sur l'eau ?",
    a: ["Un bouchon en liège", "Un clou en fer", "Une pièce en cuivre", "Une bille en acier"], correct: 0,
    explications: [
      "Correct. Le liège est moins dense que l'eau, il flotte.",
      "Le fer est plus dense que l'eau, il coule.",
      "Le cuivre est plus dense que l'eau, il coule.",
      "L'acier est plus dense que l'eau, il coule."
    ] },
  { id: "PHY-081", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Qu'est-ce qu'un circuit ouvert ?",
    a: ["Un circuit où le courant ne passe pas", "Un circuit toujours allumé", "Un circuit sans fils", "Un circuit avec deux piles"], correct: 0,
    explications: [
      "Correct. Dans un circuit ouvert, la boucle est coupée et le courant ne circule pas.",
      "Un circuit allumé en permanence n'est pas défini par son état ouvert.",
      "Un circuit sans fils n'est pas défini par l'état ouvert ou fermé.",
      "Deux piles ne changent pas le fait qu'un circuit soit ouvert ou fermé."
    ] },
  { id: "PHY-082", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on la quantité de matière contenue dans un objet ?",
    a: ["La masse", "Le poids", "Le volume", "La densité"], correct: 0,
    explications: [
      "Correct. La masse mesure la quantité de matière d'un objet.",
      "Le poids est la force d'attraction exercée sur la masse.",
      "Le volume mesure l'espace occupé par l'objet.",
      "La densité compare la masse et le volume."
    ] },
  { id: "PHY-083", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole du kilogramme ?",
    a: ["kg", "g", "kl", "kgr"], correct: 0,
    explications: [
      "Correct. Le kilogramme s'écrit kg.",
      "g est le symbole du gramme.",
      "kl est le symbole du kilolitre, pas du kilogramme.",
      "kgr n'est pas le symbole correct."
    ] },
  { id: "PHY-084", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la trajectoire d'une balle lancée dans l'air ?",
    a: ["Une parabole", "Un cercle", "Une ligne droite verticale", "Un carré"], correct: 0,
    explications: [
      "Correct. Sans frottement important, la balle décrit une parabole.",
      "Un cercle correspond à un mouvement autour d'un centre fixe.",
      "Une balle lancée obliquement ne suit pas une ligne verticale.",
      "Un carré n'est pas une trajectoire possible."
    ] },
  { id: "PHY-085", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le rôle de la pile dans un circuit ?",
    a: ["Fournir l'énergie électrique", "Mesurer le courant", "Ouvrir le circuit", "Chauffer le fil"], correct: 0,
    explications: [
      "Correct. La pile fournit l'énergie électrique au circuit.",
      "Mesurer le courant est le rôle d'un ampèremètre.",
      "Ouvrir le circuit est le rôle d'un interrupteur.",
      "La pile ne sert pas à chauffer le fil, c'est un effet secondaire."
    ] },
  { id: "PHY-086", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel objet est transparent ?",
    a: ["Une vitre propre", "Un mur en béton", "Une planche de bois", "Une boîte en métal"], correct: 0,
    explications: [
      "Correct. Une vitre propre laisse passer la lumière.",
      "Le béton est opaque, il bloque la lumière.",
      "Le bois est opaque, il bloque la lumière.",
      "Le métal est opaque, il bloque la lumière."
    ] },
  { id: "PHY-087", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est l'état de l'huile à température ambiante ?",
    a: ["Liquide", "Solide", "Gazeux", "Plasma"], correct: 0,
    explications: [
      "Correct. L'huile est un liquide à température ambiante.",
      "L'huile n'est pas solide à température ambiante.",
      "L'huile n'est pas un gaz à température ambiante.",
      "Le plasma est un état très chaud, il ne concerne pas l'huile."
    ] },
  { id: "PHY-088", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Pourquoi les skieurs portent-ils des vêtements chauds ?",
    a: ["Pour garder leur chaleur corporelle", "Pour produire de l'électricité", "Pour mieux voir la lumière", "Pour augmenter leur masse"], correct: 0,
    explications: [
      "Correct. Les vêtements chauds limitent les pertes de chaleur du corps.",
      "Les vêtements ne produisent pas d'électricité.",
      "Les vêtements ne changent pas la lumière que l'on voit.",
      "Les vêtements ne modifient pas sensiblement la masse du skieur."
    ] },
  { id: "PHY-089", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Que faut-il pour qu'un son soit produit ?",
    a: ["Une vibration", "Un aimant", "Une lumière", "Du vide"], correct: 0,
    explications: [
      "Correct. Un son est produit par une vibration.",
      "Un aimant ne produit pas de son.",
      "La lumière ne produit pas de son.",
      "Le vide ne peut pas produire de son, il n'y a pas de matière à faire vibrer."
    ] },
  { id: "PHY-090", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien de jours compte une année non bissextile ?",
    a: ["364", "365", "366", "360"], correct: 1,
    explications: [
      "364 jours est trop peu pour une année.",
      "Correct. Une année non bissextile compte 365 jours.",
      "366 jours correspond à une année bissextile.",
      "360 jours ne correspond pas au calendrier grégorien."
    ] },
  { id: "PHY-091", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le rôle principal d'un frein de vélo ?",
    a: ["Ralentir le vélo grâce au frottement", "Produire de la lumière", "Augmenter la vitesse", "Mesurer la distance"], correct: 0,
    explications: [
      "Correct. Le frein crée un frottement qui ralentit les roues.",
      "Un frein ne produit pas de lumière.",
      "Un frein ralentit, il n'augmente pas la vitesse.",
      "Un frein ne mesure pas la distance."
    ] },
  { id: "PHY-092", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle grandeur se mesure en mètres ?",
    a: ["La distance", "La masse", "Le temps", "La température"], correct: 0,
    explications: [
      "Correct. La distance se mesure en mètres.",
      "La masse se mesure en kilogrammes.",
      "Le temps se mesure en secondes.",
      "La température se mesure en kelvins ou en degrés Celsius."
    ] },
  { id: "PHY-093", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel nom porte l'énergie qui vient du Soleil ?",
    a: ["L'énergie solaire", "L'énergie nucléaire", "L'énergie chimique", "L'énergie sonore"], correct: 0,
    explications: [
      "Correct. L'énergie qui vient du Soleil s'appelle énergie solaire.",
      "L'énergie nucléaire vient des noyaux des atomes.",
      "L'énergie chimique est stockée dans les substances.",
      "L'énergie sonore vient des vibrations."
    ] },
  { id: "PHY-094", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "À quelle température l'eau gèle-t-elle à la pression normale ?",
    a: ["0 °C", "10 °C", "-10 °C", "100 °C"], correct: 0,
    explications: [
      "Correct. L'eau gèle à 0 °C à la pression normale.",
      "À 10 °C, l'eau reste liquide.",
      "-10 °C est plus froid que 0 °C, mais l eau gèle déjà à 0 °C.",
      "100 °C est la température d'ébullition de l'eau."
    ] },
  { id: "PHY-095", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Qu'est-ce qu'un corps opaque ?",
    a: ["Un corps qui ne laisse pas passer la lumière", "Un corps qui laisse tout passer", "Un corps qui produit de la lumière", "Un corps qui fond"], correct: 0,
    explications: [
      "Correct. Un corps opaque bloque la lumière.",
      "Un corps qui laisse tout passer est transparent.",
      "Un corps qui produit sa propre lumière est une source lumineuse.",
      "Fondre est un changement d'état, ce n'est pas la définition de l'opacité."
    ] }
];
