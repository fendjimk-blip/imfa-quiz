// IMFA QUIZ - PHYSIQUE, FACILE, Partie 2 (PHY-036 a PHY-055)
const PHYSIQUE_FACILE_P2 = [
  { id: "PHY-036", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité SI de l'intensité du courant électrique ?",
    a: ["Le volt", "L'ampère", "Le watt", "L'ohm"], correct: 1,
    explications: [
      "Le volt mesure la tension électrique.",
      "Correct. L'intensité du courant se mesure en ampères (A).",
      "Le watt mesure la puissance.",
      "L'ohm mesure la résistance électrique."
    ] },
  { id: "PHY-037", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel matériau est un bon isolant électrique ?",
    a: ["Le cuivre", "Le plastique", "L'eau salée", "Le fer"], correct: 1,
    explications: [
      "Le cuivre est un bon conducteur, il laisse passer le courant.",
      "Correct. Le plastique empêche le courant de passer.",
      "L'eau salée conduit le courant électrique.",
      "Le fer est un bon conducteur électrique."
    ] },
  { id: "PHY-038", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel état de la matière a une forme et un volume propres ?",
    a: ["Solide", "Liquide", "Gazeux", "Vapeur"], correct: 0,
    explications: [
      "Correct. Un solide garde sa forme et son volume.",
      "Un liquide garde son volume, mais prend la forme du récipient.",
      "Un gaz n'a ni forme ni volume propres.",
      "La vapeur est un gaz, elle n'a pas de forme ni de volume propres."
    ] },
  { id: "PHY-039", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel instrument mesure la pression atmosphérique ?",
    a: ["Le thermomètre", "Le baromètre", "La règle", "Le voltmètre"], correct: 1,
    explications: [
      "Le thermomètre mesure la température.",
      "Correct. Le baromètre mesure la pression de l'air.",
      "La règle mesure les longueurs.",
      "Le voltmètre mesure la tension électrique."
    ] },
  { id: "PHY-040", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité de mesure de la puissance électrique ?",
    a: ["Le watt", "Le joule", "Le volt", "L'ampère"], correct: 0,
    explications: [
      "Correct. La puissance se mesure en watts (W).",
      "Le joule mesure l'énergie.",
      "Le volt mesure la tension électrique.",
      "L'ampère mesure l'intensité du courant."
    ] },
  { id: "PHY-041", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le rôle d'un fusible dans un circuit électrique ?",
    a: ["Protéger le circuit contre une surintensité", "Produire du courant", "Mesurer la masse", "Changer la couleur de la lumière"], correct: 0,
    explications: [
      "Correct. Le fusible coupe le circuit si le courant est trop fort.",
      "Un fusible ne produit pas de courant, c'est une pile ou une centrale qui le fait.",
      "Un fusible ne mesure pas la masse.",
      "Un fusible ne change pas la couleur de la lumière."
    ] },
  { id: "PHY-042", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle source d'énergie est renouvelable ?",
    a: ["Le charbon", "Le pétrole", "Le vent", "Le gaz naturel"], correct: 2,
    explications: [
      "Le charbon est une énergie fossile, non renouvelable.",
      "Le pétrole est une énergie fossile, non renouvelable.",
      "Correct. Le vent se régénère en permanence.",
      "Le gaz naturel est une énergie fossile, non renouvelable."
    ] },
  { id: "PHY-043", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel objet produit sa propre lumière ?",
    a: ["La Lune", "Une étoile", "Un miroir", "Une pierre"], correct: 1,
    explications: [
      "La Lune reflète la lumière du Soleil, elle n'en produit pas.",
      "Correct. Une étoile produit sa propre lumière.",
      "Un miroir renvoie la lumière, il n'en produit pas.",
      "Une pierre n'émet pas de lumière, elle reflète celle qu'elle reçoit."
    ] },
  { id: "PHY-044", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est environ la vitesse de la lumière dans le vide ?",
    a: ["300 km/s", "300 000 km/s", "3 000 km/s", "30 km/s"], correct: 1,
    explications: [
      "300 km/s est trop lent pour la lumière.",
      "Correct. La lumière voyage à environ 300 000 km/s.",
      "3 000 km/s reste beaucoup trop lent.",
      "30 km/s est bien trop lent pour la lumière."
    ] },
  { id: "PHY-045", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel instrument sert à mesurer une distance ?",
    a: ["La balance", "Le chronomètre", "La règle", "Le thermomètre"], correct: 2,
    explications: [
      "La balance mesure la masse.",
      "Le chronomètre mesure le temps.",
      "Correct. La règle ou le mètre mesurent les distances.",
      "Le thermomètre mesure la température."
    ] },
  { id: "PHY-046", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité SI de la pression ?",
    a: ["Le pascal", "Le newton", "Le joule", "Le kelvin"], correct: 0,
    explications: [
      "Correct. La pression se mesure en pascals (Pa).",
      "Le newton mesure la force.",
      "Le joule mesure l'énergie.",
      "Le kelvin mesure la température."
    ] },
  { id: "PHY-047", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité SI de la température ?",
    a: ["Le degré Celsius", "Le kelvin", "Le degré Fahrenheit", "Le degré"], correct: 1,
    explications: [
      "Le degré Celsius est très utilisé, mais ce n'est pas l'unité SI.",
      "Correct. L'unité SI de la température est le kelvin (K).",
      "Le degré Fahrenheit n'est pas l'unité SI.",
      "« Degré » seul ne précise pas l'échelle de mesure."
    ] },
  { id: "PHY-048", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Qu'est-ce qui permet à un parachutiste de descendre lentement ?",
    a: ["La résistance de l'air", "Le magnétisme", "L'électricité", "La chaleur"], correct: 0,
    explications: [
      "Correct. L'air freine la chute grâce au parachute.",
      "Le magnétisme n'intervient pas dans la chute d'un parachutiste.",
      "L'électricité n'intervient pas dans la chute d'un parachutiste.",
      "La chaleur ne ralentit pas la chute."
    ] },
  { id: "PHY-049", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Pourquoi une cuillère plongée dans un verre d'eau semble-t-elle cassée ?",
    a: ["La réfraction de la lumière", "La réflexion de la lumière", "La fusion de l'eau", "La dilatation du métal"], correct: 0,
    explications: [
      "Correct. La lumière change de direction en passant de l'eau à l'air.",
      "La réflexion renvoie la lumière, elle ne casse pas l'image de la cuillère.",
      "La fusion transforme un solide en liquide, ce n'est pas l'explication.",
      "La dilatation du métal est trop faible pour produire cet effet."
    ] },
  { id: "PHY-050", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on le passage d'un gaz à l'état liquide ?",
    a: ["La fusion", "La condensation", "La vaporisation", "La solidification"], correct: 1,
    explications: [
      "La fusion transforme un solide en liquide.",
      "Correct. La condensation transforme un gaz en liquide.",
      "La vaporisation transforme un liquide en gaz.",
      "La solidification transforme un liquide en solide."
    ] },
  { id: "PHY-051", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel appareil transforme l'énergie électrique en mouvement ?",
    a: ["Le moteur électrique", "La pile", "L'interrupteur", "La lampe"], correct: 0,
    explications: [
      "Correct. Le moteur électrique transforme l'électricité en mouvement.",
      "La pile fournit de l'électricité, elle ne produit pas de mouvement.",
      "L'interrupteur ouvre ou ferme le circuit, il ne produit pas de mouvement.",
      "La lampe produit de la lumière et de la chaleur, pas un mouvement."
    ] },
  { id: "PHY-052", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle énergie possède une pierre posée en hauteur ?",
    a: ["L'énergie potentielle", "L'énergie cinétique", "L'énergie chimique", "L'énergie sonore"], correct: 0,
    explications: [
      "Correct. Une pierre en hauteur possède une énergie potentielle de pesanteur.",
      "L'énergie cinétique est celle d'un objet en mouvement, la pierre est immobile.",
      "L'énergie chimique est stockée dans les substances.",
      "L'énergie sonore est produite par les vibrations."
    ] },
  { id: "PHY-053", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien de secondes y a-t-il dans une minute ?",
    a: ["50", "60", "100", "120"], correct: 1,
    explications: [
      "50 secondes ne font pas une minute.",
      "Correct. Une minute compte 60 secondes.",
      "100 secondes font une minute et quarante secondes.",
      "120 secondes font deux minutes."
    ] },
  { id: "PHY-054", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle force retient les planètes en orbite autour du Soleil ?",
    a: ["La gravitation", "Le magnétisme", "La friction", "La poussée d'Archimède"], correct: 0,
    explications: [
      "Correct. La gravitation attire les planètes vers le Soleil.",
      "Le magnétisme n'est pas la force qui retient les planètes.",
      "La friction s'oppose au mouvement, elle n'est pas présente dans l'espace.",
      "La poussée d'Archimède concerne les fluides, pas l'espace."
    ] },
  { id: "PHY-055", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'abréviation du mètre ?",
    a: ["kg", "m", "s", "L"], correct: 1,
    explications: [
      "kg est l'abréviation du kilogramme.",
      "Correct. Le mètre s'abrège m.",
      "s est l'abréviation de la seconde.",
      "L est l'abréviation du litre."
    ] }
];
