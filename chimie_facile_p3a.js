// IMFA QUIZ - CHIMIE, FACILE, Partie 3A (CHM-101 a CHM-125)
// difficulte 1 = FACILE
const CHIMIE_FACILE_P3A = [
  { id: "CHM-101", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du lithium ?",
    a: ["Li", "L", "Lu", "Lt"], correct: 0,
    explications: [
      "Correct. Le lithium s'écrit Li.",
      "L seul n'est pas le symbole d'un élément.",
      "Lu est le symbole du lutécium.",
      "Lt n'est pas un symbole chimique reconnu."
    ] },
  { id: "CHM-102", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du zinc ?",
    a: ["Z", "Zn", "Zi", "Zc"], correct: 1,
    explications: [
      "Z seul n'est pas le symbole du zinc.",
      "Correct. Le zinc s'écrit Zn.",
      "Zi n'est pas le symbole du zinc.",
      "Zc n'est pas le symbole du zinc."
    ] },
  { id: "CHM-103", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du nickel ?",
    a: ["N", "Nk", "Ni", "Ne"], correct: 2,
    explications: [
      "N est le symbole de l'azote.",
      "Nk n'est pas un symbole chimique reconnu.",
      "Correct. Le nickel s'écrit Ni.",
      "Ne est le symbole du néon."
    ] },
  { id: "CHM-104", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du plomb ?",
    a: ["P", "Pb", "Pl", "Po"], correct: 1,
    explications: [
      "P est le symbole du phosphore.",
      "Correct. Le plomb s'écrit Pb, du latin plumbum.",
      "Pl n'est pas le symbole du plomb.",
      "Po est le symbole du polonium."
    ] },
  { id: "CHM-105", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique de l'étain ?",
    a: ["Et", "Sn", "E", "Ti"], correct: 1,
    explications: [
      "Et n'est pas un symbole chimique.",
      "Correct. L'étain s'écrit Sn, du latin stannum.",
      "E n'est pas le symbole de l'étain.",
      "Ti est le symbole du titane."
    ] },
  { id: "CHM-106", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel élément chimique possède le numéro atomique 2 ?",
    a: ["L'hydrogène", "L'hélium", "Le lithium", "Le carbone"], correct: 1,
    explications: [
      "L'hydrogène a le numéro atomique 1.",
      "Correct. L'hélium possède deux protons, donc Z = 2.",
      "Le lithium a le numéro atomique 3.",
      "Le carbone a le numéro atomique 6."
    ] },
  { id: "CHM-107", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel élément chimique possède le numéro atomique 6 ?",
    a: ["L'azote", "Le carbone", "L'oxygène", "Le bore"], correct: 1,
    explications: [
      "L'azote a le numéro atomique 7.",
      "Correct. Le carbone possède six protons, donc Z = 6.",
      "L'oxygène a le numéro atomique 8.",
      "Le bore a le numéro atomique 5."
    ] },
  { id: "CHM-108", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel élément chimique possède le numéro atomique 8 ?",
    a: ["L'azote", "Le fluor", "L'oxygène", "Le néon"], correct: 2,
    explications: [
      "L'azote a le numéro atomique 7.",
      "Le fluor a le numéro atomique 9.",
      "Correct. L'oxygène possède huit protons, donc Z = 8.",
      "Le néon a le numéro atomique 10."
    ] },
  { id: "CHM-109", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien de protons possède un atome de sodium ?",
    a: ["8", "10", "11", "12"], correct: 2,
    explications: [
      "8 correspond au numéro atomique de l'oxygène.",
      "10 correspond au numéro atomique du néon.",
      "Correct. Le sodium a le numéro atomique 11, donc 11 protons.",
      "12 correspond au numéro atomique du magnésium."
    ] },
  { id: "CHM-110", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien d'électrons possède un atome neutre de carbone ?",
    a: ["4", "6", "8", "12"], correct: 1,
    explications: [
      "4 correspond au nombre d'électrons de la couche externe, pas au total.",
      "Correct. Un atome neutre a autant d'électrons que de protons, soit 6 pour le carbone.",
      "8 correspond au numéro atomique de l'oxygène.",
      "12 ne correspond pas au nombre d'électrons du carbone neutre."
    ] },
  { id: "CHM-111", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on les colonnes verticales du tableau périodique ?",
    a: ["Les périodes", "Les groupes", "Les isotopes", "Les couches"], correct: 1,
    explications: [
      "Les périodes sont les lignes horizontales du tableau.",
      "Correct. Les colonnes verticales sont appelées groupes, ou familles chimiques.",
      "Les isotopes sont des atomes d'un même élément avec des nombres de neutrons différents.",
      "Les couches désignent les niveaux d'énergie des électrons."
    ] },
  { id: "CHM-112", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on les lignes horizontales du tableau périodique ?",
    a: ["Les groupes", "Les familles", "Les périodes", "Les molécules"], correct: 2,
    explications: [
      "Les groupes sont les colonnes verticales.",
      "Les familles désignent les groupes, c'est-à-dire les colonnes.",
      "Correct. Les lignes horizontales sont appelées périodes.",
      "Les molécules sont des assemblages d'atomes, pas une partie du tableau."
    ] },
  { id: "CHM-113", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel groupe contient les gaz nobles ?",
    a: ["Le groupe 1", "Le groupe 2", "Le groupe 17", "Le groupe 18"], correct: 3,
    explications: [
      "Le groupe 1 contient les métaux alcalins.",
      "Le groupe 2 contient les métaux alcalino-terreux.",
      "Le groupe 17 contient les halogènes.",
      "Correct. Les gaz nobles, comme l'hélium, le néon et l'argon, sont dans le groupe 18."
    ] },
  { id: "CHM-114", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel élément appartient à la famille des halogènes ?",
    a: ["Le sodium", "Le chlore", "Le calcium", "Le magnésium"], correct: 1,
    explications: [
      "Le sodium est un métal alcalin.",
      "Correct. Le chlore appartient au groupe 17, celui des halogènes.",
      "Le calcium est un métal alcalino-terreux.",
      "Le magnésium est un métal alcalino-terreux."
    ] },
  { id: "CHM-115", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel élément est un métal alcalin ?",
    a: ["Le sodium", "Le néon", "Le chlore", "L'oxygène"], correct: 0,
    explications: [
      "Correct. Le sodium appartient au groupe 1, celui des métaux alcalins.",
      "Le néon est un gaz noble.",
      "Le chlore est un halogène.",
      "L'oxygène est un non-métal du groupe 16."
    ] },
  { id: "CHM-116", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel élément est un gaz noble ?",
    a: ["Le fer", "Le néon", "Le carbone", "Le sodium"], correct: 1,
    explications: [
      "Le fer est un métal solide.",
      "Correct. Le néon est un gaz noble du groupe 18.",
      "Le carbone est un non-métal solide dans les conditions ordinaires.",
      "Le sodium est un métal alcalin."
    ] },
  { id: "CHM-117", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du néon ?",
    a: ["N", "No", "Ne", "Ni"], correct: 2,
    explications: [
      "N est le symbole de l'azote.",
      "No est le symbole du nobélium.",
      "Correct. Le néon s'écrit Ne.",
      "Ni est le symbole du nickel."
    ] },
  { id: "CHM-118", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique de l'argon ?",
    a: ["Ar", "Ag", "An", "Au"], correct: 0,
    explications: [
      "Correct. L'argon s'écrit Ar.",
      "Ag est le symbole de l'argent.",
      "An n'est pas le symbole de l'argon.",
      "Au est le symbole de l'or."
    ] },
  { id: "CHM-119", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique du peroxyde d'hydrogène ?",
    a: ["H₂O", "H₂O₂", "HO", "O₃"], correct: 1,
    explications: [
      "H₂O est la formule de l'eau, qui a un atome d'oxygène de moins.",
      "Correct. Le peroxyde d'hydrogène contient deux atomes d'hydrogène et deux d'oxygène.",
      "HO ne correspond à aucune molécule stable du peroxyde d'hydrogène.",
      "O₃ est la formule de l'ozone."
    ] },
  { id: "CHM-120", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique de l'ozone ?",
    a: ["O", "O₂", "O₃", "CO₂"], correct: 2,
    explications: [
      "O est un seul atome d'oxygène.",
      "O₂ est le dioxygène.",
      "Correct. L'ozone est formé de trois atomes d'oxygène.",
      "CO₂ est le dioxyde de carbone."
    ] },
  { id: "CHM-121", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on la transformation de l'eau liquide en vapeur par chauffage ?",
    a: ["La fusion", "La vaporisation", "La solidification", "La condensation"], correct: 1,
    explications: [
      "La fusion transforme un solide en liquide.",
      "Correct. La vaporisation transforme un liquide en gaz, par chauffage ou par évaporation.",
      "La solidification transforme un liquide en solide.",
      "La condensation transforme un gaz en liquide."
    ] },
  { id: "CHM-122", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel phénomène transforme la vapeur d'eau en gouttelettes liquides ?",
    a: ["La fusion", "La condensation", "La sublimation", "La combustion"], correct: 1,
    explications: [
      "La fusion transforme un solide en liquide.",
      "Correct. La condensation transforme la vapeur en eau liquide, souvent quand l'air se refroidit.",
      "La sublimation transforme un solide directement en gaz.",
      "La combustion est une réaction qui brûle une substance."
    ] },
  { id: "CHM-123", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel type de changement se produit lorsqu'un glaçon fond ?",
    a: ["Une transformation chimique", "Une transformation physique", "Une combustion", "Une oxydation"], correct: 1,
    explications: [
      "Il n'y a pas de nouvelle substance formée, donc ce n'est pas une transformation chimique.",
      "Correct. La glace reste de l'eau, seul son état physique change.",
      "La combustion est une réaction avec l'oxygène qui libère de la chaleur.",
      "L'oxydation est une réaction chimique avec l'oxygène, ce n'est pas le cas ici."
    ] },
  { id: "CHM-124", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel changement d'état se produit lorsqu'on transforme de l'eau en glace ?",
    a: ["La vaporisation", "La fusion", "La solidification", "La sublimation"], correct: 2,
    explications: [
      "La vaporisation transforme un liquide en gaz.",
      "La fusion transforme un solide en liquide, c'est l'inverse ici.",
      "Correct. La solidification transforme un liquide en solide.",
      "La sublimation transforme un solide directement en gaz."
    ] },
  { id: "CHM-125", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel phénomène se produit lorsqu'on laisse sécher du linge mouillé au soleil ?",
    a: ["La condensation", "L'évaporation", "La fusion", "La solidification"], correct: 1,
    explications: [
      "La condensation transforme un gaz en liquide, ce n'est pas ce qui sèche le linge.",
      "Correct. L'eau du linge passe lentement de l'état liquide à l'état gazeux.",
      "La fusion transforme un solide en liquide.",
      "La solidification transforme un liquide en solide."
    ] }
];
