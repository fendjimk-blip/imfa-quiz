// IMFA QUIZ - PHYSIQUE, MOYEN, Partie 13 (PHY-491 a PHY-500)
// difficulte 3 = MOYEN : kesyon ki mande yon fòmil ak yon kalkil senp
const PHYSIQUE_MOYEN_P13 = [
  { id: "PHY-491", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une voiture roule à 14 m/s pendant 30 s. Quelle distance parcourt-elle ?",
    a: ["44 m", "420 m", "0,47 m", "4 200 m"], correct: 1,
    explications: [
      "44 m vient d'une addition (14 + 30), alors qu'il faut multiplier la vitesse par le temps.",
      "Correct. d = v × t = 14 × 30 = 420 m.",
      "0,47 m vient d'une division (14 ÷ 30), ce qui n'est pas la formule de la distance.",
      "4 200 m vient d'une multiplication erronée par 10."
    ] },
  { id: "PHY-492", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 0,8 kg. Quel est son poids (g = 10 N/kg) ?",
    a: ["0,08 N", "8 N", "10,8 N", "80 N"], correct: 1,
    explications: [
      "0,08 N vient d'une division de la masse par 10, alors qu'il faut la multiplier.",
      "Correct. P = m × g = 0,8 × 10 = 8 N.",
      "10,8 N vient d'une addition (0,8 + 10), ce qui n'est pas la formule du poids.",
      "80 N vient d'une multiplication par 100, ce qui ne correspond pas à g = 10 N/kg."
    ] },
  { id: "PHY-493", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 56 N agit sur une masse de 8 kg. Quelle est l'accélération ?",
    a: ["448 m/s²", "0,14 m/s²", "7 m/s²", "64 m/s²"], correct: 2,
    explications: [
      "448 m/s² vient d'une multiplication (56 × 8), alors qu'il faut diviser la force par la masse.",
      "0,14 m/s² correspond à m ÷ F, c'est l'inverse de la formule.",
      "Correct. a = F / m = 56 / 8 = 7 m/s².",
      "64 m/s² ne correspond à aucun calcul correct avec ces valeurs."
    ] },
  { id: "PHY-494", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une tension de 40 V est appliquée à une résistance de 8 Ω. Quelle est l'intensité du courant ?",
    a: ["320 A", "0,2 A", "5 A", "48 A"], correct: 2,
    explications: [
      "320 A correspond à U × R, alors que la loi d'Ohm demande une division.",
      "0,2 A correspond à R ÷ U, c'est l'inverse de la formule.",
      "Correct. I = U / R = 40 / 8 = 5 A.",
      "48 A vient d'une addition (40 + 8), ce qui n'est pas la loi d'Ohm."
    ] },
  { id: "PHY-495", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 10 kg se déplace à 2 m/s. Quelle est son énergie cinétique ?",
    a: ["10 J", "20 J", "40 J", "12 J"], correct: 1,
    explications: [
      "10 J correspond à la masse seule, sans tenir compte de la vitesse.",
      "Correct. Ec = ½ × m × v² = ½ × 10 × 4 = 20 J.",
      "40 J oublie le facteur ½ dans la formule.",
      "12 J vient d'une addition (10 + 2), ce qui n'est pas la formule de l'énergie cinétique."
    ] },
  { id: "PHY-496", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 3 kg est posé à 12 m de hauteur (g = 10 N/kg). Quelle est son énergie potentielle de pesanteur ?",
    a: ["36 J", "360 J", "30 J", "3 600 J"], correct: 1,
    explications: [
      "36 J correspond à m × h (3 × 12), il manque g.",
      "Correct. Ep = m × g × h = 3 × 10 × 12 = 360 J.",
      "30 J correspond à m × g, il manque la hauteur.",
      "3 600 J vient d'une multiplication par 10 en trop."
    ] },
  { id: "PHY-497", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 150 N s'exerce perpendiculairement sur une surface de 0,5 m². Quelle est la pression ?",
    a: ["75 Pa", "300 Pa", "150,5 Pa", "0,003 Pa"], correct: 1,
    explications: [
      "75 Pa correspond à F × S (150 × 0,5), alors qu'il faut diviser la force par la surface.",
      "Correct. P = F / S = 150 / 0,5 = 300 Pa.",
      "150,5 Pa vient d'une addition (150 + 0,5), ce qui n'est pas la formule de la pression.",
      "0,003 Pa correspond à S ÷ F, c'est l'inverse de la formule."
    ] },
  { id: "PHY-498", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil est branché sous 230 V et traversé par un courant de 12 A. Quelle est sa puissance ?",
    a: ["242 W", "2 760 W", "19,2 W", "27 600 W"], correct: 1,
    explications: [
      "242 W vient d'une addition (230 + 12), ce qui n'est pas la formule de la puissance.",
      "Correct. P = U × I = 230 × 12 = 2 760 W.",
      "19,2 W correspond à une division (230 ÷ 12), ce qui est faux.",
      "27 600 W correspond à 2 760 × 10, ce qui est faux."
    ] },
  { id: "PHY-499", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde se propage à 340 m/s et a une fréquence de 400 Hz. Quelle est sa longueur d'onde ?",
    a: ["0,85 m", "136 000 m", "740 m", "0,0012 m"], correct: 0,
    explications: [
      "Correct. λ = v / f = 340 / 400 = 0,85 m.",
      "136 000 m correspond à v × f (340 × 400), ce qui est faux.",
      "740 m vient d'une addition (340 + 400), ce qui n'est pas la formule.",
      "0,0012 m correspond à f ÷ v, c'est l'inverse de la formule."
    ] },
  { id: "PHY-500", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une charge de 90 C traverse un fil en 15 s. Quelle est l'intensité du courant ?",
    a: ["1 350 A", "6 A", "0,17 A", "105 C"], correct: 1,
    explications: [
      "1 350 A correspond à Q × t, alors qu'il faut diviser la charge par le temps.",
      "Correct. I = Q / t = 90 / 15 = 6 A.",
      "0,17 A correspond à t ÷ Q, c'est l'inverse de la formule.",
      "105 C vient d'une addition (90 + 15), et ce n'est pas une intensité."
    ] }
];
