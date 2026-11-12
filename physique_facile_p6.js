// IMFA QUIZ - PHYSIQUE, FACILE, Partie 6 (PHY-196 a PHY-215)
const PHYSIQUE_FACILE_P6 = [
  { id: "PHY-196", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole du newton ?",
    a: ["n", "N", "Nw", "Newt"], correct: 1,
    explications: [
      "n ne correspond pas au symbole du newton.",
      "Correct. Le newton s'écrit N (majuscule).",
      "Nw n'est pas le symbole du newton.",
      "Newt n'est pas le symbole du newton."
    ] },
  { id: "PHY-197", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel appareil transforme l'énergie électrique en chaleur ?",
    a: ["Le grille-pain", "Le haut-parleur", "Le microphone", "Le ventilateur"], correct: 0,
    explications: [
      "Correct. Le grille-pain transforme l'électricité en chaleur.",
      "Le haut-parleur transforme l'électricité en son.",
      "Le microphone transforme le son en signal électrique.",
      "Le ventilateur transforme l'électricité en mouvement."
    ] },
  { id: "PHY-198", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Pourquoi le ciel paraît-il bleu par temps clair ?",
    a: ["Il reflète la mer", "L'air diffuse davantage la lumière bleue", "Le Soleil est bleu", "Les nuages sont bleus"], correct: 1,
    explications: [
      "Le ciel ne reflète pas la mer.",
      "Correct. L'air diffuse davantage la lumière bleue que les autres couleurs.",
      "Le Soleil n'est pas bleu, il paraît blanc.",
      "Les nuages sont blancs ou gris, ils ne sont pas la cause de la couleur du ciel."
    ] },
  { id: "PHY-199", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Lequel de ces matériaux est magnétique ?",
    a: ["Le nickel", "Le cuivre", "L'or", "L'argent"], correct: 0,
    explications: [
      "Correct. Le nickel est un métal magnétique, comme le fer et le cobalt.",
      "Le cuivre n'est pas magnétique.",
      "L'or n'est pas magnétique.",
      "L'argent n'est pas magnétique."
    ] },
  { id: "PHY-200", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité SI de l'intensité lumineuse ?",
    a: ["La candela", "Le lux", "Le lumen", "Le watt"], correct: 0,
    explications: [
      "Correct. L'intensité lumineuse se mesure en candelas (cd).",
      "Le lux mesure l'éclairement, pas l'intensité lumineuse.",
      "Le lumen mesure le flux lumineux.",
      "Le watt mesure la puissance."
    ] },
  { id: "PHY-201", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle force s'oppose au mouvement d'un objet dans l'air ?",
    a: ["La traînée", "La tension", "La poussée", "L'inertie"], correct: 0,
    explications: [
      "Correct. La traînée est la force de l'air qui freine un objet en mouvement.",
      "La tension est la force transmise par un fil ou une corde.",
      "La poussée est la force qu'un fluide exerce sur un objet immergé.",
      "L'inertie est la tendance d'un objet à garder son état de mouvement, ce n'est pas une force."
    ] },
  { id: "PHY-202", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Que mesure un dynamomètre ?",
    a: ["La force", "La masse", "Le volume", "La température"], correct: 0,
    explications: [
      "Correct. Le dynamomètre mesure une force.",
      "La masse se mesure avec une balance.",
      "Le volume se mesure avec une éprouvette ou un récipient gradué.",
      "La température se mesure avec un thermomètre."
    ] },
  { id: "PHY-203", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole du volt ?",
    a: ["V", "v", "Vt", "W"], correct: 0,
    explications: [
      "Correct. Le volt s'écrit V (majuscule).",
      "v en minuscule ne désigne pas le volt.",
      "Vt n'est pas le symbole du volt.",
      "W est le symbole du watt, pas du volt."
    ] },
  { id: "PHY-204", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Sous quelle forme l'énergie est-elle stockée dans une pile ?",
    a: ["Énergie chimique", "Énergie sonore", "Énergie nucléaire", "Énergie de position"], correct: 0,
    explications: [
      "Correct. Une pile stocke de l'énergie chimique qu'elle transforme en électricité.",
      "L'énergie sonore est produite par des vibrations, elle n'est pas stockée dans une pile.",
      "Une pile ne fonctionne pas grâce à l'énergie nucléaire.",
      "L'énergie de position concerne la hauteur d'un objet, pas une pile."
    ] },
  { id: "PHY-205", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Pourquoi un objet plongé dans l'eau paraît-il plus léger ?",
    a: ["La poussée d'Archimède", "La gravité", "Le magnétisme", "La friction"], correct: 0,
    explications: [
      "Correct. L'eau exerce une poussée vers le haut sur l'objet.",
      "La gravité attire toujours l'objet vers le bas, elle n'explique pas ce phénomène.",
      "Le magnétisme n'intervient pas ici, sauf pour des objets métalliques particuliers.",
      "La friction s'oppose au glissement, elle n'explique pas cette sensation."
    ] },
  { id: "PHY-206", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Dans la plupart des pays, combien de hertz le courant alternatif du secteur a-t-il ?",
    a: ["50 ou 60 Hz", "5 Hz", "500 Hz", "1 Hz"], correct: 0,
    explications: [
      "Correct. Le secteur fonctionne à 50 Hz ou 60 Hz selon les pays.",
      "5 Hz est beaucoup trop bas pour le secteur.",
      "500 Hz est beaucoup trop haut pour le secteur.",
      "1 Hz est beaucoup trop bas pour le secteur."
    ] },
  { id: "PHY-207", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel instrument sert à mesurer un angle ?",
    a: ["Le rapporteur", "La règle", "Le compas", "L'équerre"], correct: 0,
    explications: [
      "Correct. Le rapporteur mesure les angles en degrés.",
      "La règle mesure les longueurs, pas les angles.",
      "Le compas sert à tracer des cercles et à reporter des distances.",
      "L'équerre sert à tracer des angles droits, elle ne mesure pas un angle quelconque."
    ] },
  { id: "PHY-208", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on le mouvement d'un objet qui tourne autour d'un axe ?",
    a: ["La rotation", "La translation", "La fusion", "La dilatation"], correct: 0,
    explications: [
      "Correct. La rotation est un mouvement autour d'un axe, comme une roue qui tourne.",
      "La translation est un déplacement d'un point à un autre sans tourner sur soi-même.",
      "La fusion est le passage d'un solide à l'état liquide.",
      "La dilatation est l'augmentation du volume d'un corps."
    ] },
  { id: "PHY-209", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Lequel de ces matériaux conduit le mieux la chaleur ?",
    a: ["Le cuivre", "Le bois", "La laine", "Le plastique"], correct: 0,
    explications: [
      "Correct. Le cuivre est un très bon conducteur de chaleur.",
      "Le bois est un mauvais conducteur de chaleur.",
      "La laine est un bon isolant thermique.",
      "Le plastique est un mauvais conducteur de chaleur."
    ] },
  { id: "PHY-210", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle forme d'énergie est liée à la température d'un corps ?",
    a: ["L'énergie thermique", "L'énergie électrique", "L'énergie lumineuse", "L'énergie sonore"], correct: 0,
    explications: [
      "Correct. L'énergie thermique dépend de l'agitation des particules, donc de la température.",
      "L'énergie électrique est liée au courant, pas à la température seule.",
      "L'énergie lumineuse est transportée par la lumière.",
      "L'énergie sonore est liée aux vibrations."
    ] },
  { id: "PHY-211", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Que se passe-t-il pour un ballon gonflé lorsqu'on le chauffe ?",
    a: ["Il se dilate", "Il rétrécit", "Il devient magnétique", "Il s'éteint"], correct: 0,
    explications: [
      "Correct. L'air à l'intérieur se dilate quand il chauffe, le ballon gonfle davantage.",
      "Un ballon chauffé ne rétrécit pas, il se dilate.",
      "Chauffer un ballon ne le rend pas magnétique.",
      "Un ballon ne s'éteint pas, ce mot ne s'applique pas ici."
    ] },
  { id: "PHY-212", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel organe permet de percevoir les sons ?",
    a: ["L'oreille", "L'œil", "La peau", "La langue"], correct: 0,
    explications: [
      "Correct. L'oreille capte les vibrations sonores.",
      "L'œil perçoit la lumière, pas les sons.",
      "La peau perçoit le toucher, la chaleur et la douleur.",
      "La langue perçoit le goût."
    ] },
  { id: "PHY-213", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Environ quelle est la vitesse du son dans l'eau ?",
    a: ["1 500 m/s", "340 m/s", "30 m/s", "3 m/s"], correct: 0,
    explications: [
      "Correct. Le son voyage à environ 1 500 m/s dans l'eau.",
      "340 m/s est la vitesse du son dans l'air, pas dans l'eau.",
      "30 m/s est beaucoup trop lent pour le son dans l'eau.",
      "3 m/s est beaucoup trop lent pour le son dans l'eau."
    ] },
  { id: "PHY-214", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole de la tonne ?",
    a: ["t", "T", "tn", "to"], correct: 0,
    explications: [
      "Correct. La tonne s'écrit t (minuscule).",
      "T en majuscule n'est pas le symbole de la tonne.",
      "tn n'est pas le symbole de la tonne.",
      "to n'est pas le symbole de la tonne."
    ] },
  { id: "PHY-215", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel objet renvoie le mieux la lumière pour former une image nette ?",
    a: ["Le miroir", "Le papier", "Le bois", "Le tissu"], correct: 0,
    explications: [
      "Correct. Un miroir renvoie la lumière de manière régulière, ce qui donne une image nette.",
      "Le papier diffuse la lumière, il ne donne pas d'image nette.",
      "Le bois est opaque et diffuse la lumière, il ne donne pas d'image.",
      "Le tissu diffuse la lumière, il ne donne pas d'image nette."
    ] }
];
