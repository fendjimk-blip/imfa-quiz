// IMFA QUIZ - CHIMIE, MOYEN, Partie 3A (CHM-301 a CHM-325)
// difficulte 3 = MOYEN
const CHIMIE_MOYEN_P3A = [
  { id: "CHM-301", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle formule permet de calculer le nombre de particules à partir de la quantité de matière ?",
    a: ["N = n × NA", "N = n / NA", "N = m × V", "N = M / n"], correct: 0,
    explications: [
      "Correct. On multiplie le nombre de moles par la constante d'Avogadro.",
      "Diviser n par NA donne l'inverse de la formule attendue.",
      "m × V ne correspond à aucune relation entre particules et quantité de matière.",
      "M / n n'est pas une formule valable ici."
    ] },
  { id: "CHM-302", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le nombre d'oxydation habituel de l'hydrogène dans HCl ?",
    a: ["+1", "-1", "+2", "0"], correct: 0,
    explications: [
      "Correct. Avec les non-métaux, l'hydrogène a généralement le nombre d'oxydation +1.",
      "-1 est celui de l'hydrogène dans certains hydrures métalliques, pas dans HCl.",
      "+2 ne correspond pas à l'hydrogène dans ce composé.",
      "0 est le nombre d'oxydation d'un élément seul, comme H₂."
    ] },
  { id: "CHM-303", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelles substances se forment quand l'acide chlorhydrique réagit avec la soude (NaOH) ?",
    a: ["NaCl et H₂O", "H₂ et O₂", "Na₂O et Cl₂", "CO₂ et H₂O"], correct: 0,
    explications: [
      "Correct. C'est une neutralisation : HCl + NaOH → NaCl + H₂O.",
      "H₂ et O₂ proviennent plutôt de l'électrolyse de l'eau.",
      "Na₂O et Cl₂ ne sont pas les produits de cette réaction.",
      "CO₂ et H₂O ne se forment pas à partir de cet acide et de cette base."
    ] },
  { id: "CHM-304", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une solution a un pH de 10. Elle est :",
    a: ["Acide", "Neutre", "Basique", "Toujours gazeuse"], correct: 2,
    explications: [
      "Un pH inférieur à 7 indique un acide.",
      "Le pH neutre vaut 7.",
      "Correct. Un pH supérieur à 7, à 25 °C, indique une solution basique.",
      "Une solution n'est pas gazeuse selon son pH."
    ] },
  { id: "CHM-305", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle est la masse molaire du CO₂ ? (C = 12 ; O = 16)",
    a: ["28 g/mol", "32 g/mol", "44 g/mol", "48 g/mol"], correct: 2,
    explications: [
      "28 g/mol correspond à CO, pas à CO₂.",
      "32 g/mol correspond à O₂ seul.",
      "Correct. 12 + 2 × 16 = 44 g/mol.",
      "48 g/mol ne correspond à aucun calcul correct."
    ] },
  { id: "CHM-306", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel facteur peut augmenter la vitesse d'une réaction chimique ?",
    a: ["Diminuer la température", "Diminuer la concentration", "Augmenter la température", "Supprimer les réactifs"], correct: 2,
    explications: [
      "Diminuer la température ralentit en général la réaction.",
      "Diminuer la concentration ralentit la réaction.",
      "Correct. Une température plus élevée augmente les collisions efficaces.",
      "Supprimer les réactifs arrête la réaction au lieu de l'accélérer."
    ] },
  { id: "CHM-307", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le symbole chimique du bore ?",
    a: ["B", "Bo", "Br", "Be"], correct: 0,
    explications: [
      "Correct. Le bore s'écrit B.",
      "Bo n'est pas un symbole chimique reconnu.",
      "Br est le symbole du brome.",
      "Be est le symbole du béryllium."
    ] },
  { id: "CHM-308", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Si 1 mole d'un gaz occupe 24 L dans certaines conditions, quel volume occupent 2 moles dans les mêmes conditions ?",
    a: ["12 L", "24 L", "36 L", "48 L"], correct: 3,
    explications: [
      "12 L correspond à une division par 2, c'est l'inverse du calcul.",
      "24 L correspond à une seule mole.",
      "36 L ne correspond à aucun calcul proportionnel.",
      "Correct. À température et pression constantes, le volume est proportionnel à n : 2 × 24 = 48 L."
    ] },
  { id: "CHM-309", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel type de liaison existe dans une molécule de H₂ ?",
    a: ["Ionique", "Covalente", "Métallique", "Nucléaire"], correct: 1,
    explications: [
      "La liaison ionique implique un transfert d'électrons, ce n'est pas le cas de H₂.",
      "Correct. Les deux atomes d'hydrogène partagent une paire d'électrons.",
      "La liaison métallique concerne les métaux, pas une molécule comme H₂.",
      "La liaison nucléaire concerne le noyau, pas les électrons."
    ] },
  { id: "CHM-310", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel gaz est produit lors de la réaction entre un métal réactif et un acide ?",
    a: ["Oxygène", "Hydrogène", "Azote", "Hélium"], correct: 1,
    explications: [
      "L'oxygène n'est pas libéré dans cette réaction.",
      "Correct. Le métal déplace l'hydrogène de l'acide, qui se dégage sous forme de H₂.",
      "L'azote n'est pas produit par cette réaction.",
      "L'hélium n'est pas produit par cette réaction."
    ] },
  { id: "CHM-311", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle est la formule chimique de l'éthylène ?",
    a: ["C₂H₂", "C₂H₄", "C₂H₆", "CH₄"], correct: 1,
    explications: [
      "C₂H₂ est la formule de l'éthyne (acétylène).",
      "Correct. L'éthylène contient deux atomes de carbone et quatre d'hydrogène.",
      "C₂H₆ est la formule de l'éthane.",
      "CH₄ est la formule du méthane."
    ] },
  { id: "CHM-312", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une solution contient 5 g de soluté dans 1 L de solution. Quelle est sa concentration massique ?",
    a: ["1 g/L", "5 g/L", "10 g/L", "50 g/L"], correct: 1,
    explications: [
      "1 g/L ne correspond pas à 5 g dans 1 L.",
      "Correct. Cm = m / V = 5 / 1 = 5 g/L.",
      "10 g/L correspond à une multiplication erronée.",
      "50 g/L ne correspond à aucun calcul correct."
    ] },
  { id: "CHM-313", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel procédé permet d'obtenir de l'eau pure à partir d'eau salée ?",
    a: ["Filtration simple", "Distillation", "Décantation seule", "Tamisage"], correct: 1,
    explications: [
      "La filtration ne retient pas le sel dissous.",
      "Correct. L'eau s'évapore puis se condense, et le sel reste dans le récipient.",
      "La décantation ne sépare pas un sel dissous.",
      "Le tamisage ne sépare pas un sel dissous."
    ] },
  { id: "CHM-314", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Dans une réaction chimique, les réactifs sont :",
    a: ["Les substances obtenues à la fin", "Les substances présentes au départ", "Toujours des gaz", "Toujours des métaux"], correct: 1,
    explications: [
      "Ce sont les produits qui sont obtenus à la fin.",
      "Correct. Les réactifs sont les substances de départ.",
      "Les réactifs peuvent être solides, liquides ou gazeux.",
      "Les réactifs ne sont pas forcément des métaux."
    ] },
  { id: "CHM-315", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle est la formule chimique de l'acide carbonique ?",
    a: ["H₂CO₃", "HCO₃", "CO₂", "H₂CO"], correct: 0,
    explications: [
      "Correct. L'acide carbonique a pour formule H₂CO₃.",
      "HCO₃⁻ est l'ion hydrogénocarbonate, pas l'acide lui-même.",
      "CO₂ est le dioxyde de carbone, un gaz.",
      "H₂CO ne correspond pas à l'acide carbonique."
    ] },
  { id: "CHM-316", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un atome neutre possède 12 protons. Combien possède-t-il d'électrons ?",
    a: ["6", "10", "12", "24"], correct: 2,
    explications: [
      "6 ne correspond pas au nombre de protons.",
      "10 correspond à un ion ou un autre atome, pas à cet atome neutre.",
      "Correct. Un atome neutre a autant d'électrons que de protons.",
      "24 n'est pas le nombre d'électrons de cet atome."
    ] },
  { id: "CHM-317", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le rôle du solvant dans une solution ?",
    a: ["Dissoudre le soluté", "Former toujours un précipité", "Détruire les molécules", "Augmenter obligatoirement le pH"], correct: 0,
    explications: [
      "Correct. Le solvant est le milieu qui dissout le soluté.",
      "Un précipité est un solide qui apparaît dans certaines réactions, ce n'est pas le rôle du solvant.",
      "Le solvant ne détruit pas en général les molécules.",
      "Le solvant ne modifie pas obligatoirement le pH."
    ] },
  { id: "CHM-318", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle équation est correctement équilibrée ?",
    a: ["H₂ + O₂ → H₂O", "2H₂ + O₂ → 2H₂O", "H₂ + 2O₂ → 2H₂O", "2H₂ + 2O₂ → H₂O"], correct: 1,
    explications: [
      "Elle n'est pas équilibrée : 2 O à gauche, 1 à droite.",
      "Correct. Il y a 4 H et 2 O de chaque côté.",
      "Les H et les O ne correspondent pas des deux côtés : 2 H contre 4 H, 4 O contre 2 O.",
      "Il y a 4 O à gauche et 1 à droite, l'équation n'est pas équilibrée."
    ] },
  { id: "CHM-319", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle propriété caractérise généralement les métaux ?",
    a: ["Ils sont toujours gazeux", "Ils conduisent généralement l'électricité", "Ils ne réagissent jamais", "Ils sont tous transparents"], correct: 1,
    explications: [
      "Les métaux sont généralement solides, pas gazeux.",
      "Correct. Leurs électrons mobiles permettent la conduction électrique.",
      "Les métaux peuvent réagir, par exemple avec l'oxygène ou les acides.",
      "La plupart des métaux ne sont pas transparents."
    ] },
  { id: "CHM-320", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle particule détermine principalement la charge d'un ion ?",
    a: ["Le nombre de protons uniquement", "Le nombre d'électrons par rapport aux protons", "Le nombre de neutrons uniquement", "La masse de l'atome"], correct: 1,
    explications: [
      "Les protons seuls ne déterminent pas la charge d'un ion.",
      "Correct. La charge dépend de l'écart entre le nombre de protons et d'électrons.",
      "Les neutrons n'ont aucune charge.",
      "La masse de l'atome n'influence pas directement la charge."
    ] },
  { id: "CHM-321", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel ion se forme lorsqu'un atome de sodium perd un électron ?",
    a: ["Na⁻", "Na⁺", "Na²⁻", "Na²⁺"], correct: 1,
    explications: [
      "Na⁻ correspondrait à un gain d'électron.",
      "Correct. La perte d'un électron donne une charge +1.",
      "Na²⁻ correspondrait à un gain de deux électrons.",
      "Na²⁺ correspondrait à une perte de deux électrons."
    ] },
  { id: "CHM-322", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le nom du gaz de formule Cl₂ ?",
    a: ["Acide chlorhydrique", "Chlorure de sodium", "Chlore", "Chloroforme"], correct: 2,
    explications: [
      "L'acide chlorhydrique a pour formule HCl, en solution aqueuse.",
      "Le chlorure de sodium a pour formule NaCl.",
      "Correct. Cl₂ est le gaz chlore, formé de deux atomes de chlore.",
      "Le chloroforme est un composé à base de carbone, avec la formule CHCl₃."
    ] },
  { id: "CHM-323", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel phénomène se produit lorsqu'un solide passe directement à l'état gazeux ?",
    a: ["Fusion", "Sublimation", "Condensation", "Solidification"], correct: 1,
    explications: [
      "La fusion transforme un solide en liquide.",
      "Correct. La sublimation est le passage direct du solide au gaz.",
      "La condensation transforme un gaz en liquide.",
      "La solidification transforme un liquide en solide."
    ] },
  { id: "CHM-324", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle grandeur doit être exprimée en kelvins dans la loi des gaz parfaits ?",
    a: ["La masse", "La température", "Le volume", "La pression"], correct: 1,
    explications: [
      "La masse s'exprime en grammes ou en kilogrammes.",
      "Correct. Dans PV = nRT, la température T doit être en kelvins.",
      "Le volume s'exprime en litres ou en mètres cubes.",
      "La pression s'exprime en pascals ou en atmosphères."
    ] },
  { id: "CHM-325", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Si une solution acide est diluée avec de l'eau, que devient son pH ?",
    a: ["Il se rapproche de 7", "Il devient automatiquement 14", "Il diminue toujours jusqu'à 0", "Il reste obligatoirement identique"], correct: 0,
    explications: [
      "Correct. La dilution baisse la concentration en ions H₃O⁺, donc le pH remonte vers 7.",
      "Un pH de 14 correspond à une solution très basique, ce n'est pas le résultat d'une dilution.",
      "Le pH ne descend pas jusqu'à 0 par simple dilution.",
      "La dilution change le pH d'une solution acide."
    ] }
];
