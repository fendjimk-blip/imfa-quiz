// IMFA QUIZ - PHYSIQUE, MOYEN, Partie 12 (PHY-471 a PHY-490)
// difficulte 3 = MOYEN : kesyon ki mande yon fòmil ak yon kalkil senp
const PHYSIQUE_MOYEN_P12 = [
  { id: "PHY-471", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une voiture roule à 16 m/s pendant 25 s. Quelle distance parcourt-elle ?",
    a: ["41 m", "400 m", "0,64 m", "4 000 m"], correct: 1,
    explications: [
      "41 m vient d'une addition (16 + 25), alors qu'il faut multiplier la vitesse par le temps.",
      "Correct. d = v × t = 16 × 25 = 400 m.",
      "0,64 m vient d'une division (16 ÷ 25), ce qui n'est pas la formule de la distance.",
      "4 000 m vient d'une multiplication erronée par 10."
    ] },
  { id: "PHY-472", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 15 kg. Quel est son poids (g = 10 N/kg) ?",
    a: ["1,5 N", "150 N", "25 N", "1 500 N"], correct: 1,
    explications: [
      "1,5 N vient d'une division de la masse par 10, alors qu'il faut la multiplier.",
      "Correct. P = m × g = 15 × 10 = 150 N.",
      "25 N vient d'une addition (15 + 10), ce qui n'est pas la formule du poids.",
      "1 500 N vient d'une multiplication par 100, ce qui ne correspond pas à g = 10 N/kg."
    ] },
  { id: "PHY-473", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 36 N agit sur une masse de 4 kg. Quelle est l'accélération ?",
    a: ["144 m/s²", "0,11 m/s²", "9 m/s²", "40 m/s²"], correct: 2,
    explications: [
      "144 m/s² vient d'une multiplication (36 × 4), alors qu'il faut diviser la force par la masse.",
      "0,11 m/s² correspond à m ÷ F, c'est l'inverse de la formule.",
      "Correct. a = F / m = 36 / 4 = 9 m/s².",
      "40 m/s² ne correspond à aucun calcul correct avec ces valeurs."
    ] },
  { id: "PHY-474", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une tension de 30 V est appliquée à une résistance de 6 Ω. Quelle est l'intensité du courant ?",
    a: ["180 A", "0,2 A", "5 A", "36 A"], correct: 2,
    explications: [
      "180 A correspond à U × R, la loi d'Ohm demande une division.",
      "0,2 A correspond à R ÷ U, c'est l'inverse de la formule.",
      "Correct. I = U / R = 30 / 6 = 5 A.",
      "36 A vient d'une addition (30 + 6), ce qui n'est pas la loi d'Ohm."
    ] },
  { id: "PHY-475", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 3 kg se déplace à 8 m/s. Quelle est son énergie cinétique ?",
    a: ["24 J", "96 J", "192 J", "11 J"], correct: 1,
    explications: [
      "24 J correspond à m × v (3 × 8), il manque le carré de la vitesse et le facteur ½.",
      "Correct. Ec = ½ × m × v² = ½ × 3 × 64 = 96 J.",
      "192 J oublie le facteur ½ dans la formule.",
      "11 J vient d'une addition (3 + 8), ce qui n'est pas la formule de l'énergie cinétique."
    ] },
  { id: "PHY-476", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 2 kg est posé à 25 m de hauteur (g = 10 N/kg). Quelle est son énergie potentielle de pesanteur ?",
    a: ["50 J", "500 J", "250 J", "27 J"], correct: 1,
    explications: [
      "50 J correspond à m × g, il manque la hauteur.",
      "Correct. Ep = m × g × h = 2 × 10 × 25 = 500 J.",
      "250 J correspond à m × h × 5, ce qui ne correspond pas à g = 10 N/kg.",
      "27 J vient d'une addition, ce qui n'est pas la formule de l'énergie potentielle."
    ] },
  { id: "PHY-477", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 180 N s'exerce perpendiculairement sur une surface de 0,9 m². Quelle est la pression ?",
    a: ["162 Pa", "200 Pa", "0,005 Pa", "180,9 Pa"], correct: 1,
    explications: [
      "162 Pa correspond à F × S (180 × 0,9), alors qu'il faut diviser la force par la surface.",
      "Correct. P = F / S = 180 / 0,9 = 200 Pa.",
      "0,005 Pa correspond à S ÷ F, c'est l'inverse de la formule.",
      "180,9 Pa vient d'une addition (180 + 0,9), ce qui n'est pas la formule de la pression."
    ] },
  { id: "PHY-478", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil est branché sous 110 V et traversé par un courant de 10 A. Quelle est sa puissance ?",
    a: ["120 W", "1 100 W", "11 W", "11 000 W"], correct: 1,
    explications: [
      "120 W vient d'une addition (110 + 10), ce qui n'est pas la formule de la puissance.",
      "Correct. P = U × I = 110 × 10 = 1 100 W.",
      "11 W correspond à une division erronée (110 ÷ 10), ce qui est faux.",
      "11 000 W correspond à 1 100 × 10, ce qui est faux."
    ] },
  { id: "PHY-479", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil de 750 W fonctionne pendant 4 h. Quelle énergie consomme-t-il ?",
    a: ["3 kWh", "0,3 kWh", "30 kWh", "187,5 kWh"], correct: 0,
    explications: [
      "Correct. 750 W = 0,75 kW, donc E = 0,75 × 4 = 3 kWh.",
      "0,3 kWh vient d'une erreur sur la conversion de la puissance.",
      "30 kWh vient d'une erreur sur la conversion de la puissance en kilowatts.",
      "187,5 kWh vient d'une division (750 ÷ 4), ce qui n'est pas la formule de l'énergie."
    ] },
  { id: "PHY-480", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 1,2 kg et un volume de 800 cm³. Quelle est sa masse volumique en g/cm³ ?",
    a: ["0,67 g/cm³", "1,5 g/cm³", "960 g/cm³", "2 g/cm³"], correct: 1,
    explications: [
      "0,67 g/cm³ correspond à V ÷ m, c'est l'inverse de la formule.",
      "Correct. ρ = m / V = 1 200 g / 800 cm³ = 1,5 g/cm³.",
      "960 g/cm³ vient d'une multiplication (1,2 × 800), ce qui n'est pas la formule.",
      "2 g/cm³ ne correspond pas au calcul avec 1,2 kg et 800 cm³."
    ] },
  { id: "PHY-481", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde sonore se propage à 340 m/s et a une fréquence de 85 Hz. Quelle est sa longueur d'onde ?",
    a: ["0,25 m", "4 m", "425 m", "28 900 m"], correct: 1,
    explications: [
      "0,25 m correspond à f ÷ v, c'est l'inverse de la formule.",
      "Correct. λ = v / f = 340 / 85 = 4 m.",
      "425 m vient d'une addition (340 + 85), ce qui n'est pas la formule.",
      "28 900 m correspond à une multiplication (340 × 85), ce qui n'est pas la formule."
    ] },
  { id: "PHY-482", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une charge de 36 C traverse un fil en 6 s. Quelle est l'intensité du courant ?",
    a: ["216 A", "6 A", "0,17 A", "42 C"], correct: 1,
    explications: [
      "216 A correspond à Q × t, alors qu'il faut diviser la charge par le temps.",
      "Correct. I = Q / t = 36 / 6 = 6 A.",
      "0,17 A correspond à t ÷ Q, c'est l'inverse de la formule.",
      "42 C vient d'une addition (36 + 6), et ce n'est pas une intensité."
    ] },
  { id: "PHY-483", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Deux résistances de 2 Ω et 8 Ω sont branchées en parallèle. Quelle est la résistance totale ?",
    a: ["10 Ω", "1,6 Ω", "0,1 Ω", "4 Ω"], correct: 1,
    explications: [
      "10 Ω correspond à une addition, c'est le calcul pour un montage en série.",
      "Correct. En parallèle, 1/R = 1/2 + 1/8 = 5/8, donc R = 8/5 = 1,6 Ω.",
      "0,1 Ω ne correspond à aucun calcul correct avec ces valeurs.",
      "4 Ω correspond à la moyenne des deux résistances, ce qui n'est pas la règle du montage parallèle."
    ] },
  { id: "PHY-484", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet part à 4 m/s et accélère à 3 m/s² pendant 6 s. Quelle est sa vitesse finale ?",
    a: ["18 m/s", "22 m/s", "72 m/s", "12 m/s"], correct: 1,
    explications: [
      "18 m/s ne tient pas compte de la vitesse initiale, ou oublie une partie du calcul.",
      "Correct. v = v₀ + a × t = 4 + 3 × 6 = 22 m/s.",
      "72 m/s correspond à a × t × 4, ce qui n'est pas la formule.",
      "12 m/s correspond à a × t seul, sans ajouter la vitesse initiale."
    ] },
  { id: "PHY-485", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 5 kg se déplace à 4 m/s. Quelle est son énergie cinétique ?",
    a: ["20 J", "40 J", "80 J", "9 J"], correct: 1,
    explications: [
      "20 J correspond à m × v (5 × 4), il manque le carré de la vitesse et le facteur ½.",
      "Correct. Ec = ½ × 5 × 16 = 40 J.",
      "80 J oublie le facteur ½ dans la formule.",
      "9 J vient d'une addition (5 + 4), ce qui n'est pas la formule de l'énergie cinétique."
    ] },
  { id: "PHY-486", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle énergie faut-il pour chauffer 0,25 kg d'eau de 20 °C ? (c = 4 180 J/(kg·°C))",
    a: ["4 180 J", "20 900 J", "2 090 J", "209 000 J"], correct: 1,
    explications: [
      "4 180 J correspond à la chaleur massique seule, pour 1 kg et 1 °C.",
      "Correct. Q = m × c × ΔT = 0,25 × 4 180 × 20 = 20 900 J.",
      "2 090 J correspond à une erreur sur la masse ou sur ΔT.",
      "209 000 J correspond à une erreur de multiplication par 10."
    ] },
  { id: "PHY-487", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un trajet de 72 km dure 1 h 12 min. Quelle est la vitesse moyenne ?",
    a: ["0,6 km/h", "60 km/h", "86,4 km/h", "6 km/h"], correct: 1,
    explications: [
      "0,6 km/h ne correspond pas à la conversion de 1 h 12 min en heures, qui vaut 1,2 h.",
      "Correct. 1 h 12 min = 1,2 h, donc v = 72 / 1,2 = 60 km/h.",
      "86,4 km/h correspond à 72 × 1,2, ce qui est une multiplication, pas une division.",
      "6 km/h correspond à 72 ÷ 12, on a divisé par les minutes au lieu des heures."
    ] },
  { id: "PHY-488", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 6 kg a une accélération de 5 m/s². Quelle est la force appliquée ?",
    a: ["1,2 N", "11 N", "30 N", "300 N"], correct: 2,
    explications: [
      "1,2 N correspond à a ÷ m, ce qui est faux.",
      "11 N vient d'une addition (6 + 5), ce qui n'est pas la formule.",
      "Correct. F = m × a = 6 × 5 = 30 N.",
      "300 N correspond à 6 × 5 × 10, ce qui est faux."
    ] },
  { id: "PHY-489", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde a une période de 0,001 s. Quelle est sa fréquence ?",
    a: ["0,001 Hz", "1 000 Hz", "1 Hz", "100 Hz"], correct: 1,
    explications: [
      "0,001 Hz correspond à la période seule, il faut la convertir en fréquence.",
      "Correct. f = 1 / T = 1 / 0,001 = 1 000 Hz.",
      "1 Hz correspond à 1 ÷ 1, ce qui ne correspond pas à la période donnée.",
      "100 Hz correspond à 1 ÷ 0,01, ce qui est faux."
    ] },
  { id: "PHY-490", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force constante de 15 N déplace un objet sur 12 m, dans la même direction. Quel est le travail de la force ?",
    a: ["27 J", "180 J", "1,25 J", "3 J"], correct: 1,
    explications: [
      "27 J vient d'une addition (15 + 12), ce qui n'est pas la formule du travail.",
      "Correct. W = F × d = 15 × 12 = 180 J.",
      "1,25 J correspond à d ÷ F, c'est l'inverse de la formule.",
      "3 J ne correspond à aucun calcul correct avec ces valeurs."
    ] }
];
