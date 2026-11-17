// IMFA QUIZ - CHIMIE, FACILE, Partie 4B (CHM-164 a CHM-175)
// difficulte 1 = FACILE
const CHIMIE_FACILE_P4B = [
  { id: "CHM-164", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du silicium ?",
    a: ["S", "Si", "Sc", "Sm"], correct: 1,
    explications: [
      "S est le symbole du soufre.",
      "Correct. Le silicium s'écrit Si.",
      "Sc est le symbole du scandium.",
      "Sm est le symbole du samarium."
    ] },
  { id: "CHM-165", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel élément chimique est utilisé dans la fabrication de nombreux composants électroniques ?",
    a: ["Le silicium", "Le sodium", "Le chlore", "L'hélium"], correct: 0,
    explications: [
      "Correct. Le silicium est un semi-conducteur utilisé dans les circuits électroniques et les panneaux solaires.",
      "Le sodium est un métal très réactif, il n'est pas utilisé comme semi-conducteur.",
      "Le chlore est un gaz, il n'entre pas dans la fabrication des puces.",
      "L'hélium est un gaz inerte, il ne sert pas à fabriquer des composants électroniques."
    ] },
  { id: "CHM-166", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique du sulfure d'hydrogène ?",
    a: ["H₂S", "SO₂", "H₂SO₄", "HS₂"], correct: 0,
    explications: [
      "Correct. Le sulfure d'hydrogène contient deux atomes d'hydrogène et un atome de soufre : H₂S.",
      "SO₂ est le dioxyde de soufre.",
      "H₂SO₄ est l'acide sulfurique.",
      "HS₂ ne correspond pas au sulfure d'hydrogène."
    ] },
  { id: "CHM-167", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique du dioxyde de soufre ?",
    a: ["SO", "SO₂", "SO₃", "S₂O"], correct: 1,
    explications: [
      "SO est une formule qui ne correspond pas au dioxyde de soufre.",
      "Correct. Le dioxyde de soufre contient un atome de soufre et deux d'oxygène.",
      "SO₃ est le trioxyde de soufre.",
      "S₂O ne correspond pas au dioxyde de soufre."
    ] },
  { id: "CHM-168", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel gaz peut contribuer à la formation des pluies acides lorsqu'il est libéré dans l'atmosphère ?",
    a: ["Le dioxyde de soufre", "L'hélium", "Le néon", "Le dihydrogène"], correct: 0,
    explications: [
      "Correct. Le dioxyde de soufre réagit dans l'atmosphère et forme des substances acides.",
      "L'hélium est un gaz inerte, il ne provoque pas de pluies acides.",
      "Le néon est un gaz inerte, il ne provoque pas de pluies acides.",
      "Le dihydrogène ne forme pas d'acides dans l'atmosphère de cette manière."
    ] },
  { id: "CHM-169", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom de la particule formée par un atome qui gagne un électron ?",
    a: ["Un cation", "Un anion", "Un neutron", "Un proton"], correct: 1,
    explications: [
      "Un cation est formé quand un atome perd un électron.",
      "Correct. Un atome qui gagne un électron devient un anion, de charge négative.",
      "Un neutron n'a pas de charge et n'est pas formé par un gain d'électron.",
      "Un proton est une particule du noyau, il ne se forme pas par gain d'électron."
    ] },
  { id: "CHM-170", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom de la particule formée par un atome qui perd un électron ?",
    a: ["Un anion", "Un cation", "Un isotope", "Un neutron"], correct: 1,
    explications: [
      "Un anion est formé quand un atome gagne un électron.",
      "Correct. Un atome qui perd un électron devient un cation, de charge positive.",
      "Un isotope est un atome du même élément avec un nombre de neutrons différent.",
      "Un neutron n'a pas de charge et n'est pas formé par une perte d'électron."
    ] },
  { id: "CHM-171", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la charge électrique d'un proton ?",
    a: ["Positive", "Négative", "Nulle", "Variable"], correct: 0,
    explications: [
      "Correct. Le proton porte une charge électrique élémentaire positive.",
      "Une charge négative est celle de l'électron.",
      "Le neutron est celui qui n'a pas de charge.",
      "La charge du proton est toujours la même, elle n'est pas variable."
    ] },
  { id: "CHM-172", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la charge électrique d'un électron ?",
    a: ["Positive", "Négative", "Nulle", "Doublement positive"], correct: 1,
    explications: [
      "Une charge positive est celle du proton.",
      "Correct. L'électron porte une charge électrique élémentaire négative.",
      "L'électron a une charge, elle n'est pas nulle.",
      "L'électron n'a pas de charge doublement positive."
    ] },
  { id: "CHM-173", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la charge électrique d'un neutron ?",
    a: ["Positive", "Négative", "Nulle", "Toujours variable"], correct: 2,
    explications: [
      "Le proton a une charge positive, pas le neutron.",
      "L'électron a une charge négative, pas le neutron.",
      "Correct. Le neutron ne possède pas de charge électrique.",
      "La charge du neutron n'est pas variable, elle est nulle."
    ] },
  { id: "CHM-174", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on deux atomes d'un même élément qui ont des nombres de neutrons différents ?",
    a: ["Des ions", "Des isotopes", "Des molécules", "Des mélanges"], correct: 1,
    explications: [
      "Des ions sont des atomes chargés, ce n'est pas la notion demandée.",
      "Correct. Les isotopes ont le même nombre de protons mais un nombre de neutrons différent.",
      "Des molécules sont des assemblages d'atomes liés chimiquement.",
      "Des mélanges sont des réunions de plusieurs substances."
    ] },
  { id: "CHM-175", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la différence entre le numéro atomique et le nombre de masse ?",
    a: ["Le numéro atomique compte les protons, le nombre de masse compte les protons et les neutrons.", "Les deux comptent uniquement les électrons.", "Le numéro atomique compte uniquement les neutrons.", "Le nombre de masse compte uniquement les protons."], correct: 0,
    explications: [
      "Correct. Z est le nombre de protons, et A est la somme des protons et des neutrons.",
      "Les électrons ne définissent ni le numéro atomique ni le nombre de masse.",
      "Le numéro atomique ne compte pas les neutrons, il compte les protons.",
      "Le nombre de masse ne compte pas seulement les protons, il compte aussi les neutrons."
    ] }
];
