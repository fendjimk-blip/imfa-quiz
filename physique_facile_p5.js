// IMFA QUIZ - PHYSIQUE, FACILE, Partie 5 (PHY-176 a PHY-195)
const PHYSIQUE_FACILE_P5 = [
  { id: "PHY-176", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle couleur de lumière visible a la plus grande longueur d'onde ?",
    a: ["Bleu", "Rouge", "Vert", "Violet"], correct: 1,
    explications: [
      "Le bleu a une longueur d'onde plus courte que le rouge.",
      "Correct. Le rouge a la plus grande longueur d'onde de la lumière visible.",
      "Le vert a une longueur d'onde intermédiaire.",
      "Le violet a la plus petite longueur d'onde de la lumière visible."
    ] },
  { id: "PHY-177", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole de l'ampère ?",
    a: ["a", "A", "Am", "Amp"], correct: 1,
    explications: [
      "a n'est pas le symbole de l'ampère.",
      "Correct. L'ampère s'écrit A (majuscule).",
      "Am n'est pas le symbole correct.",
      "Amp n'est pas le symbole correct."
    ] },
  { id: "PHY-178", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "À combien de kelvins correspond la température de congélation de l'eau ?",
    a: ["0 K", "100 K", "273 K", "373 K"], correct: 2,
    explications: [
      "0 K est le zéro absolu, bien plus froid que la glace.",
      "100 K est bien trop froid pour la glace.",
      "Correct. 0 °C correspond à environ 273 K.",
      "373 K correspond à environ 100 °C, la température d'ébullition."
    ] },
  { id: "PHY-179", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel appareil indique la vitesse d'un véhicule ?",
    a: ["Le thermomètre", "Le compteur de vitesse", "La balance", "Le manomètre"], correct: 1,
    explications: [
      "Le thermomètre mesure la température.",
      "Correct. Le compteur de vitesse indique la vitesse du véhicule.",
      "La balance mesure la masse.",
      "Le manomètre mesure la pression."
    ] },
  { id: "PHY-180", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Dans une ampoule à incandescence, quel élément devient très chaud et produit la lumière ?",
    a: ["Le verre", "Le filament", "Le socle", "Le câble"], correct: 1,
    explications: [
      "Le verre sert d'enveloppe protectrice, il ne produit pas la lumière.",
      "Correct. Le filament chauffe fortement et émet de la lumière.",
      "Le socle permet de fixer l'ampoule, il ne produit pas de lumière.",
      "Le câble amène le courant, il ne produit pas la lumière."
    ] },
  { id: "PHY-181", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Dans quel état se trouve le dioxygène à température ambiante ?",
    a: ["Solide", "Liquide", "Gazeux", "Cristallin"], correct: 2,
    explications: [
      "Le dioxygène n'est pas solide à température ambiante.",
      "Le dioxygène n'est pas liquide à température ambiante.",
      "Correct. Le dioxygène est un gaz à température ambiante.",
      "Cristallin ne désigne pas un état de la matière de ce niveau."
    ] },
  { id: "PHY-182", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien de mètres y a-t-il dans un kilomètre ?",
    a: ["10", "100", "1 000", "10 000"], correct: 2,
    explications: [
      "10 mètres ne font pas un kilomètre.",
      "100 mètres font un hectomètre, pas un kilomètre.",
      "Correct. 1 km = 1 000 m.",
      "10 000 mètres font dix kilomètres."
    ] },
  { id: "PHY-183", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien de minutes y a-t-il dans une heure ?",
    a: ["30", "60", "100", "120"], correct: 1,
    explications: [
      "30 minutes correspondent à une demi-heure.",
      "Correct. Une heure compte 60 minutes.",
      "100 minutes ne correspondent pas à une heure.",
      "120 minutes correspondent à deux heures."
    ] },
  { id: "PHY-184", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien d'heures dure une journée ?",
    a: ["12", "24", "48", "36"], correct: 1,
    explications: [
      "12 heures correspondent à une demi-journée.",
      "Correct. Une journée dure 24 heures.",
      "48 heures correspondent à deux jours.",
      "36 heures ne correspondent pas à une journée."
    ] },
  { id: "PHY-185", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole du gramme ?",
    a: ["gr", "g", "G", "gm"], correct: 1,
    explications: [
      "gr n'est pas le symbole officiel du gramme.",
      "Correct. Le gramme s'écrit g.",
      "G en majuscule n'est pas le symbole du gramme.",
      "gm n'est pas le symbole officiel du gramme."
    ] },
  { id: "PHY-186", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la masse d'environ 1 litre d'eau pure ?",
    a: ["1 g", "100 g", "1 kg", "10 kg"], correct: 2,
    explications: [
      "1 g est la masse d'un cm³ d'eau, bien moins qu'un litre.",
      "100 g est trop léger pour un litre d'eau.",
      "Correct. 1 litre d'eau pèse environ 1 kg.",
      "10 kg est beaucoup trop lourd pour un litre d'eau."
    ] },
  { id: "PHY-187", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel objet permet d'observer des détails très petits en les agrandissant ?",
    a: ["Le miroir plat", "La loupe", "Le verre dépoli", "Le fil électrique"], correct: 1,
    explications: [
      "Un miroir plat renvoie la lumière sans agrandir l'image.",
      "Correct. La loupe est une lentille qui agrandit les petits objets.",
      "Le verre dépoli diffuse la lumière, il n'agrandit pas l'image.",
      "Un fil électrique ne sert pas à agrandir des objets."
    ] },
  { id: "PHY-188", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Dans quel état se trouve la vapeur d'eau ?",
    a: ["Solide", "Liquide", "Gaz", "Cristal"], correct: 2,
    explications: [
      "La vapeur d'eau n'est pas solide.",
      "La vapeur d'eau n'est pas liquide, c'est de l'eau à l'état gazeux.",
      "Correct. La vapeur d'eau est de l'eau à l'état gazeux.",
      "Cristal ne désigne pas l'état de la vapeur."
    ] },
  { id: "PHY-189", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Laquelle de ces sources de lumière n'est PAS naturelle ?",
    a: ["Le Soleil", "Une étoile", "Une lampe électrique", "Un éclair"], correct: 2,
    explications: [
      "Le Soleil est une source de lumière naturelle.",
      "Une étoile est une source de lumière naturelle.",
      "Correct. La lampe électrique est fabriquée par l'homme.",
      "Un éclair est un phénomène naturel qui produit de la lumière."
    ] },
  { id: "PHY-190", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Dans quel milieu la lumière se déplace-t-elle le plus vite ?",
    a: ["Dans l'eau", "Dans le verre", "Dans le vide", "Dans l'air"], correct: 2,
    explications: [
      "La lumière est plus lente dans l'eau que dans le vide.",
      "La lumière est plus lente dans le verre que dans le vide.",
      "Correct. Dans le vide, la lumière atteint sa vitesse maximale, environ 300 000 km/s.",
      "La lumière est un peu plus lente dans l'air que dans le vide."
    ] },
  { id: "PHY-191", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité de mesure de la charge électrique ?",
    a: ["Le coulomb", "Le volt", "Le joule", "Le hertz"], correct: 0,
    explications: [
      "Correct. La charge électrique se mesure en coulombs (C).",
      "Le volt mesure la tension électrique.",
      "Le joule mesure l'énergie.",
      "Le hertz mesure la fréquence."
    ] },
  { id: "PHY-192", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel matériau est le meilleur isolant thermique parmi ces choix ?",
    a: ["Le cuivre", "La laine", "Le fer", "L'aluminium"], correct: 1,
    explications: [
      "Le cuivre conduit très bien la chaleur.",
      "Correct. La laine retient l'air et limite les échanges de chaleur.",
      "Le fer conduit bien la chaleur.",
      "L'aluminium conduit bien la chaleur."
    ] },
  { id: "PHY-193", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle forme a la Terre vue de l'espace ?",
    a: ["Un cube", "Une sphère", "Un cylindre", "Un cône"], correct: 1,
    explications: [
      "La Terre n'est pas un cube.",
      "Correct. La Terre est presque sphérique (légèrement aplatie aux pôles).",
      "La Terre n'est pas un cylindre.",
      "La Terre n'est pas un cône."
    ] },
  { id: "PHY-194", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien font 5 × 5 ?",
    a: ["10", "20", "25", "30"], correct: 2,
    explications: [
      "10 correspond à 5 + 5, ce qui n'est pas une multiplication.",
      "20 correspond à 5 × 4, ce qui est faux.",
      "Correct. 5 × 5 = 25.",
      "30 correspond à 5 × 6, ce qui est faux."
    ] },
  { id: "PHY-195", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien font 7 × 8 ?",
    a: ["54", "56", "58", "64"], correct: 1,
    explications: [
      "54 correspond à 9 × 6, ce qui n'est pas le calcul demandé.",
      "Correct. 7 × 8 = 56.",
      "58 correspond à 56 + 2, ce qui est faux.",
      "64 correspond à 8 × 8, ce qui est faux."
    ] }
];
