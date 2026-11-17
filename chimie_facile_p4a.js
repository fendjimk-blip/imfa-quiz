// IMFA QUIZ - CHIMIE, FACILE, Partie 4A (CHM-151 a CHM-163)
// difficulte 1 = FACILE
const CHIMIE_FACILE_P4A = [
  { id: "CHM-151", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique de l'oxyde de magnésium ?",
    a: ["MgO", "MgCl₂", "MgCO₃", "MgH₂"], correct: 0,
    explications: [
      "Correct. L'oxyde de magnésium est formé de magnésium et d'oxygène : MgO.",
      "MgCl₂ est le chlorure de magnésium.",
      "MgCO₃ est le carbonate de magnésium.",
      "MgH₂ est un hydrure de magnésium."
    ] },
  { id: "CHM-152", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom du composé de formule CO ?",
    a: ["Dioxyde de carbone", "Monoxyde de carbone", "Oxyde de calcium", "Dioxygène"], correct: 1,
    explications: [
      "CO₂ est le dioxyde de carbone, avec un atome d'oxygène de plus.",
      "Correct. CO est le monoxyde de carbone, un gaz toxique.",
      "L'oxyde de calcium a pour formule CaO.",
      "Le dioxygène a pour formule O₂."
    ] },
  { id: "CHM-153", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel gaz est particulièrement dangereux parce qu'il est incolore et inodore ?",
    a: ["Le monoxyde de carbone", "L'oxygène", "L'hélium", "L'azote"], correct: 0,
    explications: [
      "Correct. Le monoxyde de carbone est toxique et impossible à sentir ou à voir.",
      "L'oxygène est incolore et inodore, mais il n'est pas toxique dans l'air normal.",
      "L'hélium est inerte, il n'est pas toxique à faible dose.",
      "L'azote est inerte, il n'est pas toxique dans l'air normal."
    ] },
  { id: "CHM-154", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel élément chimique est principalement responsable de la combustion dans l'air ?",
    a: ["L'azote", "Le dioxygène", "L'hélium", "Le néon"], correct: 1,
    explications: [
      "L'azote est présent dans l'air, mais il ne permet pas la combustion.",
      "Correct. Le dioxygène est le comburant qui permet aux substances de brûler.",
      "L'hélium est un gaz inerte, il ne favorise pas la combustion.",
      "Le néon est un gaz inerte, il ne favorise pas la combustion."
    ] },
  { id: "CHM-155", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on une substance qui brûle lors d'une combustion ?",
    a: ["Un combustible", "Un solvant", "Un catalyseur", "Un indicateur"], correct: 0,
    explications: [
      "Correct. Le combustible est la substance qui brûle en présence d'un comburant.",
      "Un solvant dissout une autre substance, il ne brûle pas forcément.",
      "Un catalyseur accélère une réaction, il ne brûle pas.",
      "Un indicateur change de couleur selon le pH, il ne brûle pas."
    ] },
  { id: "CHM-156", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le principal constituant chimique du calcaire ?",
    a: ["Le chlorure de sodium", "Le carbonate de calcium", "Le glucose", "L'acide chlorhydrique"], correct: 1,
    explications: [
      "Le chlorure de sodium est le sel de cuisine.",
      "Correct. Le calcaire est surtout formé de carbonate de calcium, CaCO₃.",
      "Le glucose est un sucre, il ne constitue pas la roche calcaire.",
      "L'acide chlorhydrique est un acide, il n'est pas le constituant du calcaire."
    ] },
  { id: "CHM-157", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel gaz se dégage lorsqu'un carbonate réagit avec un acide ?",
    a: ["Le dioxygène", "Le dioxyde de carbone", "L'hélium", "Le chlore"], correct: 1,
    explications: [
      "Le dioxygène n'est pas produit par cette réaction.",
      "Correct. Un carbonate réagissant avec un acide libère du dioxyde de carbone.",
      "L'hélium n'est pas produit par cette réaction.",
      "Le chlore n'est pas produit par cette réaction."
    ] },
  { id: "CHM-158", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique du nitrate de potassium ?",
    a: ["KNO₃", "KCl", "NaNO₃", "KOH"], correct: 0,
    explications: [
      "Correct. Le nitrate de potassium est formé d'ions K⁺ et NO₃⁻ : KNO₃.",
      "KCl est le chlorure de potassium.",
      "NaNO₃ est le nitrate de sodium, pas de potassium.",
      "KOH est l'hydroxyde de potassium."
    ] },
  { id: "CHM-159", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique de l'oxyde de fer(III) ?",
    a: ["FeO", "Fe₂O₃", "FeCl₂", "FeS"], correct: 1,
    explications: [
      "FeO est l'oxyde de fer(II).",
      "Correct. L'oxyde de fer(III) a pour formule Fe₂O₃.",
      "FeCl₂ est le chlorure de fer(II).",
      "FeS est le sulfure de fer(II)."
    ] },
  { id: "CHM-160", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom du composé de formule CuO ?",
    a: ["Oxyde de cuivre(II)", "Chlorure de cuivre", "Sulfate de cuivre", "Carbonate de cuivre"], correct: 0,
    explications: [
      "Correct. CuO est l'oxyde de cuivre(II).",
      "Le chlorure de cuivre a pour formule CuCl₂.",
      "Le sulfate de cuivre a pour formule CuSO₄.",
      "Le carbonate de cuivre a pour formule CuCO₃."
    ] },
  { id: "CHM-161", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du fluor ?",
    a: ["Fl", "F", "Fr", "Fu"], correct: 1,
    explications: [
      "Fl n'est pas le symbole du fluor.",
      "Correct. Le fluor s'écrit F.",
      "Fr est le symbole du francium.",
      "Fu n'est pas un symbole chimique reconnu."
    ] },
  { id: "CHM-162", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du baryum ?",
    a: ["B", "Ba", "Br", "Bi"], correct: 1,
    explications: [
      "B est le symbole du bore.",
      "Correct. Le baryum s'écrit Ba.",
      "Br est le symbole du brome.",
      "Bi est le symbole du bismuth."
    ] },
  { id: "CHM-163", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du brome ?",
    a: ["B", "Br", "Bo", "Be"], correct: 1,
    explications: [
      "B est le symbole du bore.",
      "Correct. Le brome s'écrit Br.",
      "Bo n'est pas un symbole chimique reconnu.",
      "Be est le symbole du béryllium."
    ] }
];
