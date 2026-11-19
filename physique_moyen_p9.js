// IMFA QUIZ - PHYSIQUE, MOYEN, Partie 9 (PHY-411 a PHY-430)
// difficulte 3 = MOYEN : kesyon ki mande yon fòmil ak yon kalkil senp
const PHYSIQUE_MOYEN_P9 = [
  { id: "PHY-411", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une voiture parcourt 240 km en 4 h. Quelle est sa vitesse moyenne ?",
    a: ["60 km/h", "96 km/h", "960 km/h", "244 km/h"], correct: 0,
    explications: [
      "Correct. v = d / t = 240 / 4 = 60 km/h.",
      "96 km/h ne correspond pas à 240 km parcourus en 4 h.",
      "960 km/h correspond à 240 × 4, c'est une multiplication, pas une division.",
      "244 km/h correspond à 240 + 4, ce qui est faux."
    ] },
  { id: "PHY-412", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 12 kg. Quel est son poids (g = 10 N/kg) ?",
    a: ["1,2 N", "120 N", "22 N", "1 200 N"], correct: 1,
    explications: [
      "1,2 N correspond à une division de la masse par g, ce qui est faux.",
      "Correct. P = m × g = 12 × 10 = 120 N.",
      "22 N correspond à une addition (12 + 10), ce qui est faux.",
      "1 200 N correspond à 12 × 100, ce qui n'est pas la formule."
    ] },
  { id: "PHY-413", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 75 N agit sur une masse de 15 kg. Quelle est l'accélération ?",
    a: ["1 125 m/s²", "0,2 m/s²", "5 m/s²", "90 m/s²"], correct: 2,
    explications: [
      "1 125 m/s² correspond à F × m, ce qui est faux.",
      "0,2 m/s² correspond à m / F, c'est l'inverse de la formule.",
      "Correct. a = F / m = 75 / 15 = 5 m/s².",
      "90 m/s² correspond à 75 + 15, ce qui est faux."
    ] },
  { id: "PHY-414", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une tension de 48 V est appliquée à une résistance de 12 Ω. Quelle est l'intensité du courant ?",
    a: ["576 A", "0,25 A", "4 A", "60 A"], correct: 2,
    explications: [
      "576 A correspond à U × R, ce qui est faux.",
      "0,25 A correspond à R / U, c'est l'inverse de la formule.",
      "Correct. I = U / R = 48 / 12 = 4 A.",
      "60 A correspond à 48 + 12, ce qui est faux."
    ] },
  { id: "PHY-415", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 5 kg se déplace à 6 m/s. Quelle est son énergie cinétique ?",
    a: ["30 J", "90 J", "180 J", "11 J"], correct: 1,
    explications: [
      "30 J correspond à m × v (5 × 6), ce qui n'est pas la formule.",
      "Correct. Ec = ½ × m × v² = ½ × 5 × 36 = 90 J.",
      "180 J oublie le facteur ½ dans la formule.",
      "11 J correspond à une addition (5 + 6), ce qui est faux."
    ] },
  { id: "PHY-416", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 4 kg est posé à 5 m de hauteur (g = 10 N/kg). Quelle est son énergie potentielle de pesanteur ?",
    a: ["20 J", "200 J", "45 J", "400 J"], correct: 1,
    explications: [
      "20 J correspond à m × h (4 × 5), il manque g.",
      "Correct. Ep = m × g × h = 4 × 10 × 5 = 200 J.",
      "45 J ne correspond à aucun calcul correct avec ces valeurs.",
      "400 J correspond à m × g × h multiplié par 2, ce qui est faux."
    ] },
  { id: "PHY-417", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 800 N s'exerce perpendiculairement sur une surface de 4 m². Quelle est la pression ?",
    a: ["3 200 Pa", "200 Pa", "804 Pa", "0,005 Pa"], correct: 1,
    explications: [
      "3 200 Pa correspond à F × S (800 × 4), ce qui est faux.",
      "Correct. P = F / S = 800 / 4 = 200 Pa.",
      "804 Pa correspond à une addition (800 + 4), ce qui est faux.",
      "0,005 Pa correspond à S / F, c'est l'inverse de la formule."
    ] },
  { id: "PHY-418", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil est branché sous 230 V et traversé par un courant de 6 A. Quelle est sa puissance ?",
    a: ["236 W", "1 380 W", "38 W", "13 800 W"], correct: 1,
    explications: [
      "236 W correspond à une addition (230 + 6), ce qui est faux.",
      "Correct. P = U × I = 230 × 6 = 1 380 W.",
      "38 W correspond à une soustraction erronée, ce qui est faux.",
      "13 800 W correspond à 1 380 × 10, ce qui est faux."
    ] },
  { id: "PHY-419", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil de 500 W fonctionne pendant 6 h. Quelle énergie consomme-t-il ?",
    a: ["3 kWh", "0,083 kWh", "83 kWh", "3 000 kWh"], correct: 0,
    explications: [
      "Correct. 500 W = 0,5 kW, donc E = 0,5 × 6 = 3 kWh.",
      "0,083 kWh correspond à t ÷ P, ce qui est faux.",
      "83 kWh correspond à une erreur de calcul sur la conversion de la durée.",
      "3 000 kWh oublie de convertir les watts en kilowatts."
    ] },
  { id: "PHY-420", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 600 g et un volume de 300 cm³. Quelle est sa masse volumique ?",
    a: ["0,5 g/cm³", "2 g/cm³", "180 000 g/cm³", "900 g/cm³"], correct: 1,
    explications: [
      "0,5 g/cm³ correspond à V / m, c'est l'inverse de la formule.",
      "Correct. ρ = m / V = 600 / 300 = 2 g/cm³.",
      "180 000 g/cm³ correspond à une multiplication, ce qui est faux.",
      "900 g/cm³ correspond à une addition (600 + 300), ce qui est faux."
    ] },
  { id: "PHY-421", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde sonore a une longueur d'onde de 1,7 m et une fréquence de 200 Hz. Quelle est sa vitesse ?",
    a: ["340 m/s", "117,6 m/s", "201,7 m/s", "0,0059 m/s"], correct: 0,
    explications: [
      "Correct. v = λ × f = 1,7 × 200 = 340 m/s.",
      "117,6 m/s ne correspond pas au produit λ × f.",
      "201,7 m/s correspond à une addition (1,7 + 200), ce qui est faux.",
      "0,0059 m/s correspond à f ÷ λ, ce qui est faux."
    ] },
  { id: "PHY-422", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une charge de 40 C traverse un fil en 8 s. Quelle est l'intensité du courant ?",
    a: ["320 A", "5 A", "0,2 A", "48 C"], correct: 1,
    explications: [
      "320 A correspond à Q × t, ce qui est faux.",
      "Correct. I = Q / t = 40 / 8 = 5 A.",
      "0,2 A correspond à t / Q, c'est l'inverse de la formule.",
      "48 C correspond à une addition (40 + 8), ce qui est faux."
    ] },
  { id: "PHY-423", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Deux résistances de 4 Ω et 8 Ω sont branchées en parallèle. Quelle est la résistance totale ?",
    a: ["12 Ω", "2,67 Ω", "0,08 Ω", "4 Ω"], correct: 1,
    explications: [
      "12 Ω correspond à une addition, c'est le calcul pour un montage en série.",
      "Correct. En parallèle, 1/R = 1/4 + 1/8 = 3/8, donc R = 8/3 ≈ 2,67 Ω.",
      "0,08 Ω correspond à une erreur sur la formule du montage parallèle.",
      "4 Ω correspond seulement à la plus petite résistance, sans tenir compte des deux."
    ] },
  { id: "PHY-424", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet part à 3 m/s et accélère à 2 m/s² pendant 6 s. Quelle est sa vitesse finale ?",
    a: ["5 m/s", "15 m/s", "18 m/s", "12 m/s"], correct: 1,
    explications: [
      "5 m/s correspond à 3 + 2, on a oublié la durée.",
      "Correct. v = v₀ + a × t = 3 + 2 × 6 = 15 m/s.",
      "18 m/s correspond à 3 × 6, ce qui n'est pas la formule.",
      "12 m/s correspond à 2 × 6, sans ajouter la vitesse initiale."
    ] },
  { id: "PHY-425", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet part du repos et atteint 24 m/s en 6 s. Quelle est son accélération ?",
    a: ["144 m/s²", "4 m/s²", "0,25 m/s²", "30 m/s²"], correct: 1,
    explications: [
      "144 m/s² correspond à v × t, ce qui est faux.",
      "Correct. a = Δv / Δt = 24 / 6 = 4 m/s².",
      "0,25 m/s² correspond à Δt / Δv, c'est l'inverse de la formule.",
      "30 m/s² correspond à 24 + 6, ce qui est faux."
    ] },
  { id: "PHY-426", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle énergie faut-il pour chauffer 0,5 kg d'eau de 30 °C ? (c = 4 180 J/(kg·°C))",
    a: ["2 090 J", "62 700 J", "125 400 J", "4 180 J"], correct: 1,
    explications: [
      "2 090 J correspond à m × c, il manque la variation de température.",
      "Correct. Q = m × c × ΔT = 0,5 × 4 180 × 30 = 62 700 J.",
      "125 400 J correspond à un ΔT doublé, ce qui n'est pas l'énoncé.",
      "4 180 J correspond à la chaleur massique seule, pour 1 kg et 1 °C."
    ] },
  { id: "PHY-427", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un coureur parcourt 100 m en 12,5 s. Quelle est sa vitesse moyenne ?",
    a: ["1 250 m/s", "8 m/s", "0,125 m/s", "12,5 m/s"], correct: 1,
    explications: [
      "1 250 m/s correspond à 100 × 12,5, ce qui est faux.",
      "Correct. v = d / t = 100 / 12,5 = 8 m/s.",
      "0,125 m/s correspond à t ÷ d, c'est l'inverse de la formule.",
      "12,5 m/s correspond à la durée, pas à la vitesse."
    ] },
  { id: "PHY-428", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde a une période de 0,02 s. Quelle est sa fréquence ?",
    a: ["0,02 Hz", "50 Hz", "0,5 Hz", "500 Hz"], correct: 1,
    explications: [
      "0,02 Hz correspond à la période seule, il faut la convertir en fréquence.",
      "Correct. f = 1 / T = 1 / 0,02 = 50 Hz.",
      "0,5 Hz ne correspond pas à 1 ÷ 0,02.",
      "500 Hz correspond à 1 ÷ 0,002, ce qui est faux."
    ] },
  { id: "PHY-429", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 30 N s'exerce perpendiculairement sur une surface de 0,6 m². Quelle est la pression ?",
    a: ["18 Pa", "50 Pa", "30,6 Pa", "0,02 Pa"], correct: 1,
    explications: [
      "18 Pa correspond à F × S (30 × 0,6), ce qui est faux.",
      "Correct. P = F / S = 30 / 0,6 = 50 Pa.",
      "30,6 Pa correspond à une addition (30 + 0,6), ce qui est faux.",
      "0,02 Pa correspond à S / F, c'est l'inverse de la formule."
    ] },
  { id: "PHY-430", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force constante de 12 N déplace un objet sur 7 m, dans la même direction. Quel est le travail de la force ?",
    a: ["19 J", "84 J", "5 J", "0,58 J"], correct: 1,
    explications: [
      "19 J correspond à une addition (12 + 7), ce qui est faux.",
      "Correct. W = F × d = 12 × 7 = 84 J.",
      "5 J correspond à une soustraction (12 − 7), ce qui est faux.",
      "0,58 J correspond à d ÷ F, ce qui est faux."
    ] }
];
