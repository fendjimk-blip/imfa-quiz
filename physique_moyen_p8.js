// IMFA QUIZ - PHYSIQUE, MOYEN, Partie 8 (PHY-391 a PHY-410)
// difficulte 3 = MOYEN : kesyon ki mande yon fòmil ak yon kalkil senp
const PHYSIQUE_MOYEN_P8 = [
  { id: "PHY-391", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un camion parcourt 180 km en 3 h. Quelle est sa vitesse moyenne ?",
    a: ["60 km/h", "54 km/h", "540 km/h", "183 km/h"], correct: 0,
    explications: [
      "Correct. v = d / t = 180 / 3 = 60 km/h.",
      "54 km/h ne correspond pas à 180 km en 3 h.",
      "540 km/h correspond à 180 × 3, ce qui est une multiplication, pas une division.",
      "183 km/h correspond à 180 + 3, ce qui est faux."
    ] },
  { id: "PHY-392", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 9 kg. Quel est son poids (g = 10 N/kg) ?",
    a: ["0,9 N", "90 N", "19 N", "900 N"], correct: 1,
    explications: [
      "0,9 N correspond à une division de la masse par g, ce qui est faux.",
      "Correct. P = m × g = 9 × 10 = 90 N.",
      "19 N correspond à une addition (9 + 10), ce qui est faux.",
      "900 N correspond à 9 × 100, ce qui n'est pas la formule."
    ] },
  { id: "PHY-393", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 80 N agit sur une masse de 16 kg. Quelle est l'accélération ?",
    a: ["1 280 m/s²", "0,2 m/s²", "5 m/s²", "96 m/s²"], correct: 2,
    explications: [
      "1 280 m/s² correspond à F × m, ce qui est faux.",
      "0,2 m/s² correspond à m / F, c'est l'inverse de la formule.",
      "Correct. a = F / m = 80 / 16 = 5 m/s².",
      "96 m/s² correspond à 80 + 16, ce qui est faux."
    ] },
  { id: "PHY-394", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une tension de 36 V est appliquée à une résistance de 9 Ω. Quelle est l'intensité du courant ?",
    a: ["324 A", "0,25 A", "4 A", "27 A"], correct: 2,
    explications: [
      "324 A correspond à U × R, ce qui est faux.",
      "0,25 A correspond à R / U, c'est l'inverse de la formule.",
      "Correct. I = U / R = 36 / 9 = 4 A.",
      "27 A correspond à 36 − 9, ce qui est faux."
    ] },
  { id: "PHY-395", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 2 kg se déplace à 6 m/s. Quelle est son énergie cinétique ?",
    a: ["12 J", "36 J", "72 J", "8 J"], correct: 1,
    explications: [
      "12 J correspond à m × v (2 × 6), ce qui n'est pas la formule.",
      "Correct. Ec = ½ × m × v² = ½ × 2 × 36 = 36 J.",
      "72 J oublie le facteur ½ dans la formule.",
      "8 J correspond à une addition (2 + 6), ce qui est faux."
    ] },
  { id: "PHY-396", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 3 kg est posé à 7 m de hauteur (g = 10 N/kg). Quelle est son énergie potentielle de pesanteur ?",
    a: ["21 J", "210 J", "30 J", "240 J"], correct: 1,
    explications: [
      "21 J correspond à m × h (3 × 7), il manque g.",
      "Correct. Ep = m × g × h = 3 × 10 × 7 = 210 J.",
      "30 J correspond à m × g, il manque la hauteur.",
      "240 J correspond à une erreur de calcul, ce qui est faux."
    ] },
  { id: "PHY-397", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 400 N s'exerce perpendiculairement sur une surface de 0,8 m². Quelle est la pression ?",
    a: ["320 Pa", "500 Pa", "0,002 Pa", "400,8 Pa"], correct: 1,
    explications: [
      "320 Pa correspond à F × S (400 × 0,8), ce qui est faux.",
      "Correct. P = F / S = 400 / 0,8 = 500 Pa.",
      "0,002 Pa correspond à S / F, c'est l'inverse de la formule.",
      "400,8 Pa correspond à une addition, ce qui est faux."
    ] },
  { id: "PHY-398", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil est branché sous 230 V et traversé par un courant de 8 A. Quelle est sa puissance ?",
    a: ["238 W", "1 840 W", "29 W", "1 848 W"], correct: 1,
    explications: [
      "238 W correspond à une addition (230 + 8), ce qui est faux.",
      "Correct. P = U × I = 230 × 8 = 1 840 W.",
      "29 W correspond à une division erronée, ce qui est faux.",
      "1 848 W correspond à une addition, ce qui est faux."
    ] },
  { id: "PHY-399", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil de 2 kW fonctionne pendant 45 min. Quelle énergie consomme-t-il ?",
    a: ["90 kWh", "1,5 kWh", "2,75 kWh", "0,044 kWh"], correct: 1,
    explications: [
      "90 kWh oublie de convertir les minutes en heures.",
      "Correct. 45 min = 0,75 h, donc E = 2 × 0,75 = 1,5 kWh.",
      "2,75 kWh correspond à une addition (2 + 0,75), ce qui est faux.",
      "0,044 kWh correspond à une erreur de calcul sur la durée."
    ] },
  { id: "PHY-400", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 900 g et un volume de 450 cm³. Quelle est sa masse volumique ?",
    a: ["0,5 g/cm³", "2 g/cm³", "270 000 g/cm³", "1 350 g/cm³"], correct: 1,
    explications: [
      "0,5 g/cm³ correspond à V / m, c'est l'inverse de la formule.",
      "Correct. ρ = m / V = 900 / 450 = 2 g/cm³.",
      "270 000 g/cm³ correspond à une multiplication, ce qui est faux.",
      "1 350 g/cm³ correspond à une addition (900 + 450), ce qui est faux."
    ] },
  { id: "PHY-401", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde sonore a une longueur d'onde de 0,5 m et une fréquence de 680 Hz. Quelle est sa vitesse ?",
    a: ["1 360 m/s", "340 m/s", "170 m/s", "0,0007 m/s"], correct: 1,
    explications: [
      "1 360 m/s correspond à 680 × 2, ce qui est faux.",
      "Correct. v = λ × f = 0,5 × 680 = 340 m/s.",
      "170 m/s correspond à une division par 2, ce qui est faux.",
      "0,0007 m/s correspond à f ÷ λ, ce qui est faux."
    ] },
  { id: "PHY-402", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une charge de 15 C traverse un fil en 3 s. Quelle est l'intensité du courant ?",
    a: ["45 A", "0,2 A", "5 A", "18 C"], correct: 2,
    explications: [
      "45 A correspond à Q × t, ce qui est faux.",
      "0,2 A correspond à t / Q, c'est l'inverse de la formule.",
      "Correct. I = Q / t = 15 / 3 = 5 A.",
      "18 C correspond à une addition (15 + 3), ce qui est faux et ce n'est pas une intensité."
    ] },
  { id: "PHY-403", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Deux résistances de 6 Ω et 12 Ω sont branchées en série. Quelle est la résistance totale ?",
    a: ["2 Ω", "72 Ω", "18 Ω", "4 Ω"], correct: 2,
    explications: [
      "2 Ω correspond à une soustraction (12 − 6 = 6, puis erreur), ce qui est faux.",
      "72 Ω correspond à une multiplication, ce qui est faux pour un montage en série.",
      "Correct. En série, on additionne : 6 + 12 = 18 Ω.",
      "4 Ω ne correspond à aucun calcul correct avec ces valeurs."
    ] },
  { id: "PHY-404", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet part du repos et accélère à 4 m/s² pendant 7 s. Quelle est sa vitesse finale ?",
    a: ["11 m/s", "28 m/s", "4,57 m/s", "1,75 m/s"], correct: 1,
    explications: [
      "11 m/s correspond à 4 + 7, ce qui est faux.",
      "Correct. v = v₀ + a × t = 0 + 4 × 7 = 28 m/s.",
      "4,57 m/s correspond à une division, ce qui est faux.",
      "1,75 m/s correspond à a ÷ t, ce qui est faux."
    ] },
  { id: "PHY-405", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle énergie faut-il pour chauffer 0,4 kg d'eau de 50 °C ? (c = 4 180 J/(kg·°C))",
    a: ["8 360 J", "83 600 J", "167 200 J", "2 090 J"], correct: 1,
    explications: [
      "8 360 J correspond à m × c, il manque la variation de température.",
      "Correct. Q = m × c × ΔT = 0,4 × 4 180 × 50 = 83 600 J.",
      "167 200 J correspond à un ΔT doublé, ce qui n'est pas l'énoncé.",
      "2 090 J correspond à une erreur de calcul, ce qui est faux."
    ] },
  { id: "PHY-406", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un bus doit parcourir 120 km à la vitesse de 40 km/h. Combien de temps mettra-t-il ?",
    a: ["4 800 km/h", "3 h", "80 h", "0,33 h"], correct: 1,
    explications: [
      "4 800 km/h correspond à une multiplication, ce qui est une vitesse, pas un temps.",
      "Correct. t = d / v = 120 / 40 = 3 h.",
      "80 h correspond à 120 − 40, ce qui est faux.",
      "0,33 h correspond à v / d, c'est l'inverse de la formule."
    ] },
  { id: "PHY-407", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Deux résistances de 6 Ω sont branchées en parallèle. Quelle est la résistance totale ?",
    a: ["12 Ω", "3 Ω", "1,5 Ω", "6 Ω"], correct: 1,
    explications: [
      "12 Ω correspond à une addition, c'est le calcul pour un montage en série.",
      "Correct. En parallèle, 1/R = 1/6 + 1/6 = 1/3, donc R = 3 Ω.",
      "1,5 Ω est trop bas, ce qui est faux.",
      "6 Ω correspond à une seule résistance, sans tenir compte du montage."
    ] },
  { id: "PHY-408", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force constante de 10 N déplace un objet sur 5 m, dans la même direction. Quel est le travail de la force ?",
    a: ["2 J", "15 J", "50 J", "0,5 J"], correct: 2,
    explications: [
      "2 J correspond à F ÷ d, ce qui est faux.",
      "15 J correspond à une addition (10 + 5), ce qui est faux.",
      "Correct. W = F × d = 10 × 5 = 50 J.",
      "0,5 J correspond à d ÷ F, ce qui est faux."
    ] },
  { id: "PHY-409", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une pression de 1 500 Pa est exercée par une force de 300 N. Quelle est la surface pressée ?",
    a: ["450 000 m²", "0,2 m²", "5 m²", "300,2 m²"], correct: 1,
    explications: [
      "450 000 m² correspond à F × P, ce qui est faux.",
      "Correct. S = F / P = 300 / 1 500 = 0,2 m².",
      "5 m² correspond à P ÷ F, c'est l'inverse de la formule.",
      "300,2 m² correspond à une addition, ce qui est faux."
    ] },
  { id: "PHY-410", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde a une fréquence de 250 Hz. Quelle est sa période ?",
    a: ["0,004 s", "250 s", "0,25 s", "4 s"], correct: 0,
    explications: [
      "Correct. T = 1 / f = 1 / 250 = 0,004 s.",
      "250 s correspond à la fréquence, pas à la période.",
      "0,25 s ne correspond pas à 1 ÷ 250.",
      "4 s correspond à 1 ÷ 0,25, ce qui n'est pas le calcul demandé."
    ] }
];
