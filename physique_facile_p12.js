// IMFA QUIZ - PHYSIQUE, FACILE, Partie 12 (PHY-316 a PHY-330)
const PHYSIQUE_FACILE_P12 = [
  { id: "PHY-316", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole du pascal ?",
    a: ["Pa", "PA", "P", "pa"], correct: 0,
    explications: [
      "Correct. L'unité de pression, le pascal, s'écrit Pa.",
      "Le symbole est Pa, avec un seul « a » en minuscule.",
      "P désigne une grandeur (pression, poids ou puissance selon le contexte), pas l'unité.",
      "Le « P » doit être une majuscule dans le symbole Pa."
    ] },
  { id: "PHY-317", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité SI de la puissance ?",
    a: ["Le joule", "Le watt", "Le newton", "Le pascal"], correct: 1,
    explications: [
      "Le joule mesure l'énergie.",
      "Correct. La puissance se mesure en watts (W).",
      "Le newton mesure la force.",
      "Le pascal mesure la pression."
    ] },
  { id: "PHY-318", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel appareil transforme le mouvement en électricité ?",
    a: ["Le moteur", "La dynamo", "Le haut-parleur", "La pile"], correct: 1,
    explications: [
      "Le moteur fait l'inverse : il transforme l'électricité en mouvement.",
      "Correct. La dynamo transforme le mouvement en électricité.",
      "Le haut-parleur transforme l'électricité en son.",
      "La pile stocke de l'énergie chimique, elle ne produit pas d'électricité à partir du mouvement."
    ] },
  { id: "PHY-319", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle couleur de lumière est la plus déviée par un prisme ?",
    a: ["Le rouge", "Le violet", "Le jaune", "Le vert"], correct: 1,
    explications: [
      "Le rouge est la couleur la moins déviée par le prisme.",
      "Correct. Le violet est la couleur la plus déviée.",
      "Le jaune est dévié, mais moins que le violet.",
      "Le vert est dévié, mais moins que le violet."
    ] },
  { id: "PHY-320", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la fonction d'une loupe ?",
    a: ["Réduire toujours les images", "Faire converger la lumière et agrandir", "Produire de l'électricité", "Mesurer la masse"], correct: 1,
    explications: [
      "Une loupe agrandit les images, elle ne les réduit pas.",
      "Correct. La loupe est une lentille convergente qui agrandit les petits objets.",
      "Une loupe ne produit pas d'électricité.",
      "Une loupe ne mesure pas la masse."
    ] },
  { id: "PHY-321", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel instrument mesure la vitesse de rotation d'un moteur ?",
    a: ["Le tachymètre", "Le baromètre", "La balance", "L'ohmmètre"], correct: 0,
    explications: [
      "Correct. Le tachymètre mesure la vitesse de rotation.",
      "Le baromètre mesure la pression atmosphérique.",
      "La balance mesure la masse.",
      "L'ohmmètre mesure la résistance électrique."
    ] },
  { id: "PHY-322", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Que transporte le courant électrique dans un fil ?",
    a: ["Des charges électriques", "De l'eau", "Des atomes de cuivre", "De la chaleur seulement"], correct: 0,
    explications: [
      "Correct. Le courant électrique est un déplacement de charges électriques.",
      "Il n'y a pas d'eau qui circule dans un fil électrique.",
      "Les atomes du fil restent à leur place, ce sont les charges qui se déplacent.",
      "La chaleur est un effet secondaire du courant, pas ce qu'il transporte."
    ] },
  { id: "PHY-323", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel instrument mesure la masse volumique d'un liquide ?",
    a: ["Le densimètre", "Le thermomètre", "Le voltmètre", "Le chronomètre"], correct: 0,
    explications: [
      "Correct. Le densimètre mesure la densité, ou masse volumique, d'un liquide.",
      "Le thermomètre mesure la température.",
      "Le voltmètre mesure la tension électrique.",
      "Le chronomètre mesure le temps."
    ] },
  { id: "PHY-324", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole du degré Celsius ?",
    a: ["°C", "C°", "K", "F"], correct: 0,
    explications: [
      "Correct. Le degré Celsius s'écrit °C.",
      "L'ordre est inversé : le symbole est °C.",
      "K est le symbole du kelvin.",
      "F est le symbole du degré Fahrenheit, pas du Celsius."
    ] },
  { id: "PHY-325", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Pourquoi le ciel paraît-il rouge au coucher du Soleil ?",
    a: ["La lumière traverse plus d'air et les couleurs bleues sont diffusées", "Le Soleil devient rouge", "Les nuages sont rouges", "La Terre devient rouge"], correct: 0,
    explications: [
      "Correct. En fin de journée, la lumière traverse plus d'air, ce qui diffuse le bleu et laisse le rouge.",
      "Le Soleil ne change pas de couleur, c'est l'atmosphère traversée qui change la lumière reçue.",
      "Les nuages ne sont pas la cause principale de la couleur du ciel.",
      "La Terre ne devient pas rouge au coucher du Soleil."
    ] },
  { id: "PHY-326", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel objet sert à concentrer la lumière du Soleil en un point ?",
    a: ["Une loupe", "Un miroir plat", "Un verre dépoli", "Un écran"], correct: 0,
    explications: [
      "Correct. Une loupe, lentille convergente, concentre la lumière du Soleil en un point.",
      "Un miroir plat renvoie la lumière sans la concentrer.",
      "Un verre dépoli diffuse la lumière, il ne la concentre pas.",
      "Un écran reçoit la lumière, il ne la concentre pas."
    ] },
  { id: "PHY-327", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle unité sert à mesurer la capacité d'un récipient ?",
    a: ["Le litre", "Le kilogramme", "Le mètre", "La seconde"], correct: 0,
    explications: [
      "Correct. La capacité d'un récipient se mesure en litres.",
      "Le kilogramme mesure la masse.",
      "Le mètre mesure une longueur.",
      "La seconde mesure le temps."
    ] },
  { id: "PHY-328", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Que fait une force de frottement à l'énergie cinétique d'un objet en mouvement ?",
    a: ["Elle la transforme en chaleur", "Elle la crée", "Elle la double", "Elle la supprime toujours"], correct: 0,
    explications: [
      "Correct. Le frottement transforme une partie de l'énergie du mouvement en chaleur.",
      "Le frottement ne crée pas d'énergie.",
      "Le frottement ne double pas l'énergie.",
      "Le frottement ne supprime pas toujours l'énergie, il la transforme."
    ] },
  { id: "PHY-329", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Un objet parcourt 100 m en 10 s. Quelle est sa vitesse ?",
    a: ["1 m/s", "10 m/s", "100 m/s", "0,1 m/s"], correct: 1,
    explications: [
      "1 m/s correspond à 10 ÷ 10, ce qui n'est pas le bon calcul.",
      "Correct. v = d / t = 100 / 10 = 10 m/s.",
      "100 m/s correspondrait à la distance seule, sans division par le temps.",
      "0,1 m/s correspond à t ÷ d, c'est l'inverse de la formule."
    ] },
  { id: "PHY-330", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole du coulomb ?",
    a: ["C", "c", "Co", "Cl"], correct: 0,
    explications: [
      "Correct. Le coulomb, unité de charge électrique, s'écrit C (majuscule).",
      "c en minuscule n'est pas le symbole du coulomb.",
      "Co n'est pas le symbole du coulomb.",
      "Cl est le symbole du chlore en chimie, pas du coulomb."
    ] }
];
